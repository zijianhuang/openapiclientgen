import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Parameters for an activating an application package. */
	export interface ActivateApplicationPackageParameters {

		/**
		 * The format of the application package binary file.
		 * Required
		 */
		format: string;
	}

	/** Parameters for an activating an application package. */
	export interface ActivateApplicationPackageParametersFormProperties {

		/**
		 * The format of the application package binary file.
		 * Required
		 */
		format: FormControl<string | null | undefined>,
	}
	export function CreateActivateApplicationPackageParametersFormGroup() {
		return new FormGroup<ActivateApplicationPackageParametersFormProperties>({
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an application in a Batch account. */
	export interface Application extends ProxyResource {

		/** The properties associated with the Application. */
		properties?: ApplicationProperties;
	}

	/** Contains information about an application in a Batch account. */
	export interface ApplicationFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An application package which represents a particular version of an application. */
	export interface ApplicationPackage extends ProxyResource {

		/** Properties of an application package */
		properties?: ApplicationPackageProperties;
	}

	/** An application package which represents a particular version of an application. */
	export interface ApplicationPackageFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateApplicationPackageFormGroup() {
		return new FormGroup<ApplicationPackageFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of an application package */
	export interface ApplicationPackageProperties {

		/** The format of the application package, if the package is active. */
		format?: string | null;

		/** The time at which the package was last activated, if the package is active. */
		lastActivationTime?: Date | null;

		/** The current state of the application package. */
		state?: ApplicationPackagePropertiesState | null;

		/** The URL for the application package in Azure Storage. */
		storageUrl?: string | null;

		/** The UTC time at which the Azure Storage URL will expire. */
		storageUrlExpiry?: Date | null;
	}

	/** Properties of an application package */
	export interface ApplicationPackagePropertiesFormProperties {

		/** The format of the application package, if the package is active. */
		format: FormControl<string | null | undefined>,

		/** The time at which the package was last activated, if the package is active. */
		lastActivationTime: FormControl<Date | null | undefined>,

		/** The current state of the application package. */
		state: FormControl<ApplicationPackagePropertiesState | null | undefined>,

		/** The URL for the application package in Azure Storage. */
		storageUrl: FormControl<string | null | undefined>,

		/** The UTC time at which the Azure Storage URL will expire. */
		storageUrlExpiry: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationPackagePropertiesFormGroup() {
		return new FormGroup<ApplicationPackagePropertiesFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			lastActivationTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<ApplicationPackagePropertiesState | null | undefined>(undefined),
			storageUrl: new FormControl<string | null | undefined>(undefined),
			storageUrlExpiry: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ApplicationPackagePropertiesState { Pending = 0, Active = 1 }

	export interface ApplicationPackageReference {

		/** Required */
		id: string;

		/** If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409. */
		version?: string | null;
	}
	export interface ApplicationPackageReferenceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** If this is omitted, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences. If you are calling the REST API directly, the HTTP status code is 409. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPackageReferenceFormGroup() {
		return new FormGroup<ApplicationPackageReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties associated with the Application. */
	export interface ApplicationProperties {

		/** A value indicating whether packages within the application may be overwritten using the same version string. */
		allowUpdates?: boolean | null;

		/** The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. */
		defaultVersion?: string | null;

		/** The display name for the application. */
		displayName?: string | null;
	}

	/** The properties associated with the Application. */
	export interface ApplicationPropertiesFormProperties {

		/** A value indicating whether packages within the application may be overwritten using the same version string. */
		allowUpdates: FormControl<boolean | null | undefined>,

		/** The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. */
		defaultVersion: FormControl<string | null | undefined>,

		/** The display name for the application. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateApplicationPropertiesFormGroup() {
		return new FormGroup<ApplicationPropertiesFormProperties>({
			allowUpdates: new FormControl<boolean | null | undefined>(undefined),
			defaultVersion: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoScaleRun {
		error?: AutoScaleRunError;

		/** Required */
		evaluationTime: Date;

		/** Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results?: string | null;
	}
	export interface AutoScaleRunFormProperties {

		/** Required */
		evaluationTime: FormControl<Date | null | undefined>,

		/** Each variable value is returned in the form $variable=value, and variables are separated by semicolons. */
		results: FormControl<string | null | undefined>,
	}
	export function CreateAutoScaleRunFormGroup() {
		return new FormGroup<AutoScaleRunFormProperties>({
			evaluationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			results: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutoScaleRunError {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: string;
		details?: Array<AutoScaleRunError>;

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: string;
	}
	export interface AutoScaleRunErrorFormProperties {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAutoScaleRunErrorFormGroup() {
		return new FormGroup<AutoScaleRunErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoScaleSettings {

		/** If omitted, the default value is 15 minutes (PT15M). */
		evaluationInterval?: string | null;

		/** Required */
		formula: string;
	}
	export interface AutoScaleSettingsFormProperties {

		/** If omitted, the default value is 15 minutes (PT15M). */
		evaluationInterval: FormControl<string | null | undefined>,

		/** Required */
		formula: FormControl<string | null | undefined>,
	}
	export function CreateAutoScaleSettingsFormGroup() {
		return new FormGroup<AutoScaleSettingsFormProperties>({
			evaluationInterval: new FormControl<string | null | undefined>(undefined),
			formula: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The properties related to the auto-storage account. */
	export interface AutoStorageBaseProperties {

		/**
		 * The resource ID of the storage account to be used for auto-storage account.
		 * Required
		 */
		storageAccountId: string;
	}

	/** The properties related to the auto-storage account. */
	export interface AutoStorageBasePropertiesFormProperties {

		/**
		 * The resource ID of the storage account to be used for auto-storage account.
		 * Required
		 */
		storageAccountId: FormControl<string | null | undefined>,
	}
	export function CreateAutoStorageBasePropertiesFormGroup() {
		return new FormGroup<AutoStorageBasePropertiesFormProperties>({
			storageAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the auto-storage account associated with a Batch account. */
	export interface AutoStorageProperties extends AutoStorageBaseProperties {

		/**
		 * The UTC time at which storage keys were last synchronized with the Batch account.
		 * Required
		 */
		lastKeySync: Date;
	}

	/** Contains information about the auto-storage account associated with a Batch account. */
	export interface AutoStoragePropertiesFormProperties extends AutoStorageBasePropertiesFormProperties {

		/**
		 * The UTC time at which storage keys were last synchronized with the Batch account.
		 * Required
		 */
		lastKeySync: FormControl<Date | null | undefined>,
	}
	export function CreateAutoStoragePropertiesFormGroup() {
		return new FormGroup<AutoStoragePropertiesFormProperties>({
			storageAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastKeySync: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AutoUserSpecification {
		elevationLevel?: AutoUserSpecificationElevationLevel | null;

		/** The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks. */
		scope?: AutoUserSpecificationScope | null;
	}
	export interface AutoUserSpecificationFormProperties {
		elevationLevel: FormControl<AutoUserSpecificationElevationLevel | null | undefined>,

		/** The default value is Pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by start tasks. */
		scope: FormControl<AutoUserSpecificationScope | null | undefined>,
	}
	export function CreateAutoUserSpecificationFormGroup() {
		return new FormGroup<AutoUserSpecificationFormProperties>({
			elevationLevel: new FormControl<AutoUserSpecificationElevationLevel | null | undefined>(undefined),
			scope: new FormControl<AutoUserSpecificationScope | null | undefined>(undefined),
		});

	}

	export enum AutoUserSpecificationElevationLevel { NonAdmin = 0, Admin = 1 }

	export enum AutoUserSpecificationScope { Task = 0, Pool = 1 }

	export interface AzureBlobFileSystemConfiguration {

		/** This property is mutually exclusive with sasKey and one must be specified. */
		accountKey?: string | null;

		/** Required */
		accountName: string;

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		blobfuseOptions?: string | null;

		/** Required */
		containerName: string;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** This property is mutually exclusive with accountKey and one must be specified. */
		sasKey?: string | null;
	}
	export interface AzureBlobFileSystemConfigurationFormProperties {

		/** This property is mutually exclusive with sasKey and one must be specified. */
		accountKey: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		blobfuseOptions: FormControl<string | null | undefined>,

		/** Required */
		containerName: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** This property is mutually exclusive with accountKey and one must be specified. */
		sasKey: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFileSystemConfigurationFormGroup() {
		return new FormGroup<AzureBlobFileSystemConfigurationFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			blobfuseOptions: new FormControl<string | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sasKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureFileShareConfiguration {

		/** Required */
		accountKey: string;

		/** Required */
		accountName: string;

		/**
		 * This is of the form 'https://{account}.file.core.windows.net/'.
		 * Required
		 */
		azureFileUrl: string;

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;
	}
	export interface AzureFileShareConfigurationFormProperties {

		/** Required */
		accountKey: FormControl<string | null | undefined>,

		/** Required */
		accountName: FormControl<string | null | undefined>,

		/**
		 * This is of the form 'https://{account}.file.core.windows.net/'.
		 * Required
		 */
		azureFileUrl: FormControl<string | null | undefined>,

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileShareConfigurationFormGroup() {
		return new FormGroup<AzureFileShareConfigurationFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFileUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an Azure Batch account. */
	export interface BatchAccount extends Resource {

		/** Account specific properties. */
		properties?: BatchAccountProperties;
	}

	/** Contains information about an Azure Batch account. */
	export interface BatchAccountFormProperties extends ResourceFormProperties {
	}
	export function CreateBatchAccountFormGroup() {
		return new FormGroup<BatchAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters supplied to the Create operation. */
	export interface BatchAccountCreateParameters {

		/**
		 * The region in which to create the account.
		 * Required
		 */
		location: string;

		/** The properties of a Batch account. */
		properties?: BatchAccountCreateProperties;

		/** The user-specified tags associated with the account. */
		tags?: {[id: string]: string };
	}

	/** Parameters supplied to the Create operation. */
	export interface BatchAccountCreateParametersFormProperties {

		/**
		 * The region in which to create the account.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The user-specified tags associated with the account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchAccountCreateParametersFormGroup() {
		return new FormGroup<BatchAccountCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The properties of a Batch account. */
	export interface BatchAccountCreateProperties {

		/** The properties related to the auto-storage account. */
		autoStorage?: AutoStorageBaseProperties;

		/** Identifies the Azure key vault associated with a Batch account. */
		keyVaultReference?: KeyVaultReference;

		/** The allocation mode for creating pools in the Batch account. */
		poolAllocationMode?: BatchAccountCreatePropertiesPoolAllocationMode | null;
	}

	/** The properties of a Batch account. */
	export interface BatchAccountCreatePropertiesFormProperties {

		/** The allocation mode for creating pools in the Batch account. */
		poolAllocationMode: FormControl<BatchAccountCreatePropertiesPoolAllocationMode | null | undefined>,
	}
	export function CreateBatchAccountCreatePropertiesFormGroup() {
		return new FormGroup<BatchAccountCreatePropertiesFormProperties>({
			poolAllocationMode: new FormControl<BatchAccountCreatePropertiesPoolAllocationMode | null | undefined>(undefined),
		});

	}

	export enum BatchAccountCreatePropertiesPoolAllocationMode { BatchService = 0, UserSubscription = 1 }


	/** A set of Azure Batch account keys. */
	export interface BatchAccountKeys {

		/** The Batch account name. */
		accountName?: string | null;

		/** The primary key associated with the account. */
		primary?: string | null;

		/** The secondary key associated with the account. */
		secondary?: string | null;
	}

	/** A set of Azure Batch account keys. */
	export interface BatchAccountKeysFormProperties {

		/** The Batch account name. */
		accountName: FormControl<string | null | undefined>,

		/** The primary key associated with the account. */
		primary: FormControl<string | null | undefined>,

		/** The secondary key associated with the account. */
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateBatchAccountKeysFormGroup() {
		return new FormGroup<BatchAccountKeysFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined),
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface BatchAccountListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of Batch accounts returned by the listing operation. */
		value?: Array<BatchAccount>;
	}

	/** Values returned by the List operation. */
	export interface BatchAccountListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBatchAccountListResultFormGroup() {
		return new FormGroup<BatchAccountListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Account specific properties. */
	export interface BatchAccountProperties {

		/** The account endpoint used to interact with the Batch service. */
		accountEndpoint?: string | null;
		activeJobAndJobScheduleQuota?: number | null;

		/** Contains information about the auto-storage account associated with a Batch account. */
		autoStorage?: AutoStorageProperties;

		/** For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. */
		dedicatedCoreQuota?: number | null;

		/** A list of the dedicated core quota per Virtual Machine family for the Batch account. For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. */
		dedicatedCoreQuotaPerVMFamily?: Array<VirtualMachineFamilyCoreQuota>;

		/** Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply. */
		dedicatedCoreQuotaPerVMFamilyEnforced?: boolean | null;

		/** Identifies the Azure key vault associated with a Batch account. */
		keyVaultReference?: KeyVaultReference;

		/** For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. */
		lowPriorityCoreQuota?: number | null;

		/** The allocation mode for creating pools in the Batch account. */
		poolAllocationMode?: BatchAccountCreatePropertiesPoolAllocationMode | null;
		poolQuota?: number | null;

		/** The provisioned state of the resource */
		provisioningState?: BatchAccountPropertiesProvisioningState | null;
	}

	/** Account specific properties. */
	export interface BatchAccountPropertiesFormProperties {

		/** The account endpoint used to interact with the Batch service. */
		accountEndpoint: FormControl<string | null | undefined>,
		activeJobAndJobScheduleQuota: FormControl<number | null | undefined>,

		/** For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. */
		dedicatedCoreQuota: FormControl<number | null | undefined>,

		/** Batch is transitioning its core quota system for dedicated cores to be enforced per Virtual Machine family. During this transitional phase, the dedicated core quota per Virtual Machine family may not yet be enforced. If this flag is false, dedicated core quota is enforced via the old dedicatedCoreQuota property on the account and does not consider Virtual Machine family. If this flag is true, dedicated core quota is enforced via the dedicatedCoreQuotaPerVMFamily property on the account, and the old dedicatedCoreQuota does not apply. */
		dedicatedCoreQuotaPerVMFamilyEnforced: FormControl<boolean | null | undefined>,

		/** For accounts with PoolAllocationMode set to UserSubscription, quota is managed on the subscription so this value is not returned. */
		lowPriorityCoreQuota: FormControl<number | null | undefined>,

		/** The allocation mode for creating pools in the Batch account. */
		poolAllocationMode: FormControl<BatchAccountCreatePropertiesPoolAllocationMode | null | undefined>,
		poolQuota: FormControl<number | null | undefined>,

		/** The provisioned state of the resource */
		provisioningState: FormControl<BatchAccountPropertiesProvisioningState | null | undefined>,
	}
	export function CreateBatchAccountPropertiesFormGroup() {
		return new FormGroup<BatchAccountPropertiesFormProperties>({
			accountEndpoint: new FormControl<string | null | undefined>(undefined),
			activeJobAndJobScheduleQuota: new FormControl<number | null | undefined>(undefined),
			dedicatedCoreQuota: new FormControl<number | null | undefined>(undefined),
			dedicatedCoreQuotaPerVMFamilyEnforced: new FormControl<boolean | null | undefined>(undefined),
			lowPriorityCoreQuota: new FormControl<number | null | undefined>(undefined),
			poolAllocationMode: new FormControl<BatchAccountCreatePropertiesPoolAllocationMode | null | undefined>(undefined),
			poolQuota: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<BatchAccountPropertiesProvisioningState | null | undefined>(undefined),
		});

	}


	/** A VM Family and its associated core quota for the Batch account. */
	export interface VirtualMachineFamilyCoreQuota {

		/** The core quota for the VM family for the Batch account. */
		coreQuota?: number | null;

		/** The Virtual Machine family name. */
		name?: string | null;
	}

	/** A VM Family and its associated core quota for the Batch account. */
	export interface VirtualMachineFamilyCoreQuotaFormProperties {

		/** The core quota for the VM family for the Batch account. */
		coreQuota: FormControl<number | null | undefined>,

		/** The Virtual Machine family name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFamilyCoreQuotaFormGroup() {
		return new FormGroup<VirtualMachineFamilyCoreQuotaFormProperties>({
			coreQuota: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchAccountPropertiesProvisioningState { Invalid = 0, Creating = 1, Deleting = 2, Succeeded = 3, Failed = 4, Cancelled = 5 }


	/** Parameters supplied to the RegenerateKey operation. */
	export interface BatchAccountRegenerateKeyParameters {

		/**
		 * The type of account key to regenerate.
		 * Required
		 */
		keyName: BatchAccountRegenerateKeyParametersKeyName;
	}

	/** Parameters supplied to the RegenerateKey operation. */
	export interface BatchAccountRegenerateKeyParametersFormProperties {

		/**
		 * The type of account key to regenerate.
		 * Required
		 */
		keyName: FormControl<BatchAccountRegenerateKeyParametersKeyName | null | undefined>,
	}
	export function CreateBatchAccountRegenerateKeyParametersFormGroup() {
		return new FormGroup<BatchAccountRegenerateKeyParametersFormProperties>({
			keyName: new FormControl<BatchAccountRegenerateKeyParametersKeyName | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchAccountRegenerateKeyParametersKeyName { Primary = 0, Secondary = 1 }


	/** Parameters for updating an Azure Batch account. */
	export interface BatchAccountUpdateParameters {

		/** The properties of a Batch account. */
		properties?: BatchAccountUpdateProperties;

		/** The user-specified tags associated with the account. */
		tags?: {[id: string]: string };
	}

	/** Parameters for updating an Azure Batch account. */
	export interface BatchAccountUpdateParametersFormProperties {

		/** The user-specified tags associated with the account. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchAccountUpdateParametersFormGroup() {
		return new FormGroup<BatchAccountUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The properties of a Batch account. */
	export interface BatchAccountUpdateProperties {

		/** The properties related to the auto-storage account. */
		autoStorage?: AutoStorageBaseProperties;
	}

	/** The properties of a Batch account. */
	export interface BatchAccountUpdatePropertiesFormProperties {
	}
	export function CreateBatchAccountUpdatePropertiesFormGroup() {
		return new FormGroup<BatchAccountUpdatePropertiesFormProperties>({
		});

	}


	/** Quotas associated with a Batch region for a particular subscription. */
	export interface BatchLocationQuota {

		/** The number of Batch accounts that may be created under the subscription in the specified region. */
		accountQuota?: number | null;
	}

	/** Quotas associated with a Batch region for a particular subscription. */
	export interface BatchLocationQuotaFormProperties {

		/** The number of Batch accounts that may be created under the subscription in the specified region. */
		accountQuota: FormControl<number | null | undefined>,
	}
	export function CreateBatchLocationQuotaFormGroup() {
		return new FormGroup<BatchLocationQuotaFormProperties>({
			accountQuota: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CIFSMountConfiguration {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/** Required */
		password: string;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** Required */
		source: string;

		/** Required */
		username: string;
	}
	export interface CIFSMountConfigurationFormProperties {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCIFSMountConfigurationFormGroup() {
		return new FormGroup<CIFSMountConfigurationFormProperties>({
			mountOptions: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CachingType { None = 0, ReadOnly = 1, ReadWrite = 2 }


	/** Contains information about a certificate. */
	export interface Certificate extends ProxyResource {

		/** Certificate properties. */
		properties?: CertificateProperties;
	}

	/** Contains information about a certificate. */
	export interface CertificateFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateCertificateFormGroup() {
		return new FormGroup<CertificateFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateBaseProperties {

		/** The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. */
		format?: CertificateBasePropertiesFormat | null;

		/** This must match the thumbprint from the name. */
		thumbprint?: string | null;

		/** This must match the first portion of the certificate name. Currently required to be 'SHA1'. */
		thumbprintAlgorithm?: string | null;
	}
	export interface CertificateBasePropertiesFormProperties {

		/** The format of the certificate - either Pfx or Cer. If omitted, the default is Pfx. */
		format: FormControl<CertificateBasePropertiesFormat | null | undefined>,

		/** This must match the thumbprint from the name. */
		thumbprint: FormControl<string | null | undefined>,

		/** This must match the first portion of the certificate name. Currently required to be 'SHA1'. */
		thumbprintAlgorithm: FormControl<string | null | undefined>,
	}
	export function CreateCertificateBasePropertiesFormGroup() {
		return new FormGroup<CertificateBasePropertiesFormProperties>({
			format: new FormControl<CertificateBasePropertiesFormat | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateBasePropertiesFormat { Pfx = 0, Cer = 1 }


	/** Contains information about a certificate. */
	export interface CertificateCreateOrUpdateParameters extends ProxyResource {

		/** Certificate properties for create operations */
		properties?: CertificateCreateOrUpdateProperties;
	}

	/** Contains information about a certificate. */
	export interface CertificateCreateOrUpdateParametersFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateCertificateCreateOrUpdateParametersFormGroup() {
		return new FormGroup<CertificateCreateOrUpdateParametersFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Certificate properties for create operations */
	export interface CertificateCreateOrUpdateProperties extends CertificateBaseProperties {

		/**
		 * The maximum size is 10KB.
		 * Required
		 */
		data: string;

		/** This is required if the certificate format is pfx and must be omitted if the certificate format is cer. */
		password?: string | null;
	}

	/** Certificate properties for create operations */
	export interface CertificateCreateOrUpdatePropertiesFormProperties extends CertificateBasePropertiesFormProperties {

		/**
		 * The maximum size is 10KB.
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** This is required if the certificate format is pfx and must be omitted if the certificate format is cer. */
		password: FormControl<string | null | undefined>,
	}
	export function CreateCertificateCreateOrUpdatePropertiesFormGroup() {
		return new FormGroup<CertificateCreateOrUpdatePropertiesFormProperties>({
			format: new FormControl<CertificateBasePropertiesFormat | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Certificate properties. */
	export interface CertificateProperties extends CertificateBaseProperties {

		/** An error response from the Batch service. */
		deleteCertificateError?: DeleteCertificateError;

		/** The previous provisioned state of the resource */
		previousProvisioningState?: CertificatePropertiesPreviousProvisioningState | null;
		previousProvisioningStateTransitionTime?: Date | null;
		provisioningState?: CertificatePropertiesPreviousProvisioningState | null;
		provisioningStateTransitionTime?: Date | null;

		/** The public key of the certificate. */
		publicData?: string | null;
	}

	/** Certificate properties. */
	export interface CertificatePropertiesFormProperties extends CertificateBasePropertiesFormProperties {

		/** The previous provisioned state of the resource */
		previousProvisioningState: FormControl<CertificatePropertiesPreviousProvisioningState | null | undefined>,
		previousProvisioningStateTransitionTime: FormControl<Date | null | undefined>,
		provisioningState: FormControl<CertificatePropertiesPreviousProvisioningState | null | undefined>,
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,

		/** The public key of the certificate. */
		publicData: FormControl<string | null | undefined>,
	}
	export function CreateCertificatePropertiesFormGroup() {
		return new FormGroup<CertificatePropertiesFormProperties>({
			format: new FormControl<CertificateBasePropertiesFormat | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			thumbprintAlgorithm: new FormControl<string | null | undefined>(undefined),
			previousProvisioningState: new FormControl<CertificatePropertiesPreviousProvisioningState | null | undefined>(undefined),
			previousProvisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<CertificatePropertiesPreviousProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			publicData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificatePropertiesPreviousProvisioningState { Succeeded = 0, Deleting = 1, Failed = 2 }

	export interface CertificateReference {

		/** Required */
		id: string;

		/** The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		storeLocation?: CertificateReferenceStoreLocation | null;

		/** This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
		storeName?: string | null;
		visibility?: Array<string>;
	}
	export interface CertificateReferenceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** The default value is currentUser. This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		storeLocation: FormControl<CertificateReferenceStoreLocation | null | undefined>,

		/** This property is applicable only for pools configured with Windows nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
		storeName: FormControl<string | null | undefined>,
	}
	export function CreateCertificateReferenceFormGroup() {
		return new FormGroup<CertificateReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storeLocation: new FormControl<CertificateReferenceStoreLocation | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CertificateReferenceStoreLocation { CurrentUser = 0, LocalMachine = 1 }


	/** Parameters for a check name availability request. */
	export interface CheckNameAvailabilityParameters {

		/**
		 * The name to check for availability
		 * Required
		 */
		name: string;

		/**
		 * The resource type. Must be set to Microsoft.Batch/batchAccounts
		 * Required
		 */
		type: CheckNameAvailabilityParametersType;
	}

	/** Parameters for a check name availability request. */
	export interface CheckNameAvailabilityParametersFormProperties {

		/**
		 * The name to check for availability
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The resource type. Must be set to Microsoft.Batch/batchAccounts
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityParametersType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityParametersFormGroup() {
		return new FormGroup<CheckNameAvailabilityParametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityParametersType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityParametersType { 'Microsoft.Batch/batchAccounts' = 0 }


	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResult {

		/** Gets an error message explaining the Reason value in more detail. */
		message?: string | null;

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used. */
		nameAvailable?: boolean | null;

		/** Gets the reason that a Batch account name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason?: CheckNameAvailabilityResultReason | null;
	}

	/** The CheckNameAvailability operation response. */
	export interface CheckNameAvailabilityResultFormProperties {

		/** Gets an error message explaining the Reason value in more detail. */
		message: FormControl<string | null | undefined>,

		/** Gets a boolean value that indicates whether the name is available for you to use. If true, the name is available. If false, the name has already been taken or invalid and cannot be used. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** Gets the reason that a Batch account name could not be used. The Reason element is only returned if NameAvailable is false. */
		reason: FormControl<CheckNameAvailabilityResultReason | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResultFormGroup() {
		return new FormGroup<CheckNameAvailabilityResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<CheckNameAvailabilityResultReason | null | undefined>(undefined),
		});

	}

	export enum CheckNameAvailabilityResultReason { Invalid = 0, AlreadyExists = 1 }


	/** An error response from the Batch service. */
	export interface CloudError {

		/** An error response from the Batch service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Batch service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloudServiceConfiguration {

		/**
		 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: string;

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		osVersion?: string | null;
	}
	export interface CloudServiceConfigurationFormProperties {

		/**
		 * Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
		 * Required
		 */
		osFamily: FormControl<string | null | undefined>,

		/** The default value is * which specifies the latest operating system version for the specified OS family. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateCloudServiceConfigurationFormGroup() {
		return new FormGroup<CloudServiceConfigurationFormProperties>({
			osFamily: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			osVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComputeNodeDeallocationOption { Requeue = 0, Terminate = 1, TaskCompletion = 2, RetainedData = 3 }

	export interface ContainerConfiguration {

		/** This is the full image reference, as would be specified to "docker pull". An image will be sourced from the default Docker registry unless the image is fully qualified with an alternative registry. */
		containerImageNames?: Array<string>;

		/** If any images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. */
		containerRegistries?: Array<ContainerRegistry>;

		/** Required */
		type: ContainerConfigurationType;
	}
	export interface ContainerConfigurationFormProperties {

		/** Required */
		type: FormControl<ContainerConfigurationType | null | undefined>,
	}
	export function CreateContainerConfigurationFormGroup() {
		return new FormGroup<ContainerConfigurationFormProperties>({
			type: new FormControl<ContainerConfigurationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ContainerRegistry {

		/** Required */
		password: string;

		/** If omitted, the default is "docker.io". */
		registryServer?: string | null;

		/** Required */
		username: string;
	}
	export interface ContainerRegistryFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** If omitted, the default is "docker.io". */
		registryServer: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryFormGroup() {
		return new FormGroup<ContainerRegistryFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registryServer: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContainerConfigurationType { DockerCompatible = 0 }


	/** Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them. */
	export interface DataDisk {
		caching?: CachingType | null;

		/** Required */
		diskSizeGB: number;

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 */
		lun: number;
		storageAccountType?: DataDiskStorageAccountType | null;
	}

	/** Settings which will be used by the data disks associated to Compute Nodes in the Pool. When using attached data disks, you need to mount and format the disks from within a VM to use them. */
	export interface DataDiskFormProperties {
		caching: FormControl<CachingType | null | undefined>,

		/** Required */
		diskSizeGB: FormControl<number | null | undefined>,

		/**
		 * The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun.
		 * Required
		 */
		lun: FormControl<number | null | undefined>,
		storageAccountType: FormControl<DataDiskStorageAccountType | null | undefined>,
	}
	export function CreateDataDiskFormGroup() {
		return new FormGroup<DataDiskFormProperties>({
			caching: new FormControl<CachingType | null | undefined>(undefined),
			diskSizeGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lun: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			storageAccountType: new FormControl<DataDiskStorageAccountType | null | undefined>(undefined),
		});

	}

	export enum DataDiskStorageAccountType { Standard_LRS = 0, Premium_LRS = 1 }


	/** An error response from the Batch service. */
	export interface DeleteCertificateError {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: string;

		/** A list of additional details about the error. */
		details?: Array<DeleteCertificateError>;

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: string;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Batch service. */
	export interface DeleteCertificateErrorFormProperties {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDeleteCertificateErrorFormGroup() {
		return new FormGroup<DeleteCertificateErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentConfiguration {
		cloudServiceConfiguration?: CloudServiceConfiguration;
		virtualMachineConfiguration?: VirtualMachineConfiguration;
	}
	export interface DeploymentConfigurationFormProperties {
	}
	export function CreateDeploymentConfigurationFormGroup() {
		return new FormGroup<DeploymentConfigurationFormProperties>({
		});

	}

	export enum ElevationLevel { NonAdmin = 0, Admin = 1 }

	export interface EnvironmentSetting {

		/** Required */
		name: string;
		value?: string | null;
	}
	export interface EnvironmentSettingFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentSettingFormGroup() {
		return new FormGroup<EnvironmentSettingFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FixedScaleSettings {
		nodeDeallocationOption?: ComputeNodeDeallocationOption | null;

		/** The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;

		/** At least one of targetDedicatedNodes, targetLowPriority nodes must be set. */
		targetDedicatedNodes?: number | null;

		/** At least one of targetDedicatedNodes, targetLowPriority nodes must be set. */
		targetLowPriorityNodes?: number | null;
	}
	export interface FixedScaleSettingsFormProperties {
		nodeDeallocationOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,

		/** The default value is 15 minutes. Timeout values use ISO 8601 format. For example, use PT10M for 10 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,

		/** At least one of targetDedicatedNodes, targetLowPriority nodes must be set. */
		targetDedicatedNodes: FormControl<number | null | undefined>,

		/** At least one of targetDedicatedNodes, targetLowPriority nodes must be set. */
		targetLowPriorityNodes: FormControl<number | null | undefined>,
	}
	export function CreateFixedScaleSettingsFormGroup() {
		return new FormGroup<FixedScaleSettingsFormProperties>({
			nodeDeallocationOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImageReference {

		/** This property is mutually exclusive with other properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
		id?: string | null;

		/** For example, UbuntuServer or WindowsServer. */
		offer?: string | null;

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher?: string | null;

		/** For example, 18.04-LTS or 2019-Datacenter. */
		sku?: string | null;

		/** A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version?: string | null;
	}
	export interface ImageReferenceFormProperties {

		/** This property is mutually exclusive with other properties. For Virtual Machine Image it must be in the same region and subscription as the Azure Batch account. For SIG image it must have replicas in the same region as the Azure Batch account. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
		id: FormControl<string | null | undefined>,

		/** For example, UbuntuServer or WindowsServer. */
		offer: FormControl<string | null | undefined>,

		/** For example, Canonical or MicrosoftWindowsServer. */
		publisher: FormControl<string | null | undefined>,

		/** For example, 18.04-LTS or 2019-Datacenter. */
		sku: FormControl<string | null | undefined>,

		/** A value of 'latest' can be specified to select the latest version of an image. If omitted, the default is 'latest'. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InboundNatPool {

		/**
		 * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		backendPort: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeEnd: number;

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeStart: number;

		/**
		 * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		name: string;

		/** The maximum number of rules that can be specified across all the endpoints on a Batch pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. */
		networkSecurityGroupRules?: Array<NetworkSecurityGroupRule>;

		/** Required */
		protocol: InboundNatPoolProtocol;
	}
	export interface InboundNatPoolFormProperties {

		/**
		 * This must be unique within a Batch pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		backendPort: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeEnd: FormControl<number | null | undefined>,

		/**
		 * Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a pool must be distinct and cannot overlap. If any reserved or overlapping values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		frontendPortRangeStart: FormControl<number | null | undefined>,

		/**
		 * The name must be unique within a Batch pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		protocol: FormControl<InboundNatPoolProtocol | null | undefined>,
	}
	export function CreateInboundNatPoolFormGroup() {
		return new FormGroup<InboundNatPoolFormProperties>({
			backendPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frontendPortRangeEnd: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			frontendPortRangeStart: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<InboundNatPoolProtocol | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NetworkSecurityGroupRule {

		/** Required */
		access: NetworkSecurityGroupRuleAccess;

		/**
		 * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		priority: number;

		/**
		 * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		sourceAddressPrefix: string;

		/** Valid values are '*' (for all ports 0 - 65535) or arrays of ports or port ranges (i.e. 100-200). The ports should in the range of 0 to 65535 and the port ranges or ports can't overlap. If any other values are provided the request fails with HTTP status code 400. Default value will be *. */
		sourcePortRanges?: Array<string>;
	}
	export interface NetworkSecurityGroupRuleFormProperties {

		/** Required */
		access: FormControl<NetworkSecurityGroupRuleAccess | null | undefined>,

		/**
		 * Priorities within a pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 3500. If any reserved or duplicate values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400.
		 * Required
		 */
		sourceAddressPrefix: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSecurityGroupRuleFormGroup() {
		return new FormGroup<NetworkSecurityGroupRuleFormProperties>({
			access: new FormControl<NetworkSecurityGroupRuleAccess | null | undefined>(undefined, [Validators.required]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sourceAddressPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum NetworkSecurityGroupRuleAccess { Allow = 0, Deny = 1 }

	export enum InboundNatPoolProtocol { TCP = 0, UDP = 1 }


	/** Identifies the Azure key vault associated with a Batch account. */
	export interface KeyVaultReference {

		/**
		 * The resource ID of the Azure key vault associated with the Batch account.
		 * Required
		 */
		id: string;

		/**
		 * The URL of the Azure key vault associated with the Batch account.
		 * Required
		 */
		url: string;
	}

	/** Identifies the Azure key vault associated with a Batch account. */
	export interface KeyVaultReferenceFormProperties {

		/**
		 * The resource ID of the Azure key vault associated with the Batch account.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The URL of the Azure key vault associated with the Batch account.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultReferenceFormGroup() {
		return new FormGroup<KeyVaultReferenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinuxUserConfiguration {

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. */
		gid?: number | null;

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey?: string | null;

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. */
		uid?: number | null;
	}
	export interface LinuxUserConfigurationFormProperties {

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. */
		gid: FormControl<number | null | undefined>,

		/** The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between nodes in a Linux pool when the pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between nodes (no modification of the user's .ssh directory is done). */
		sshPrivateKey: FormControl<string | null | undefined>,

		/** The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. */
		uid: FormControl<number | null | undefined>,
	}
	export function CreateLinuxUserConfigurationFormGroup() {
		return new FormGroup<LinuxUserConfigurationFormProperties>({
			gid: new FormControl<number | null | undefined>(undefined),
			sshPrivateKey: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of performing list application packages. */
	export interface ListApplicationPackagesResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of application packages. */
		value?: Array<ApplicationPackage>;
	}

	/** The result of performing list application packages. */
	export interface ListApplicationPackagesResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationPackagesResultFormGroup() {
		return new FormGroup<ListApplicationPackagesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of performing list applications. */
	export interface ListApplicationsResult {

		/** The URL to get the next set of results. */
		nextLink?: string | null;

		/** The list of applications. */
		value?: Array<Application>;
	}

	/** The result of performing list applications. */
	export interface ListApplicationsResultFormProperties {

		/** The URL to get the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResultFormGroup() {
		return new FormGroup<ListApplicationsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface ListCertificatesResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of returned certificates. */
		value?: Array<Certificate>;
	}

	/** Values returned by the List operation. */
	export interface ListCertificatesResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListCertificatesResultFormGroup() {
		return new FormGroup<ListCertificatesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface ListPoolsResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of returned pools. */
		value?: Array<Pool>;
	}

	/** Values returned by the List operation. */
	export interface ListPoolsResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListPoolsResultFormGroup() {
		return new FormGroup<ListPoolsResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a pool. */
	export interface Pool extends ProxyResource {

		/** Pool properties. */
		properties?: PoolProperties;
	}

	/** Contains information about a pool. */
	export interface PoolFormProperties extends ProxyResourceFormProperties {
	}
	export function CreatePoolFormGroup() {
		return new FormGroup<PoolFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItem {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}

	/** The Batch service does not assign any meaning to this metadata; it is solely for the use of user code. */
	export interface MetadataItemFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetadataItemFormGroup() {
		return new FormGroup<MetadataItemFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MountConfiguration {
		azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfiguration;
		azureFileShareConfiguration?: AzureFileShareConfiguration;
		cifsMountConfiguration?: CIFSMountConfiguration;
		nfsMountConfiguration?: NFSMountConfiguration;
	}
	export interface MountConfigurationFormProperties {
	}
	export function CreateMountConfigurationFormGroup() {
		return new FormGroup<MountConfigurationFormProperties>({
		});

	}

	export interface NFSMountConfiguration {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions?: string | null;

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: string;

		/** Required */
		source: string;
	}
	export interface NFSMountConfigurationFormProperties {

		/** These are 'net use' options in Windows and 'mount' options in Linux. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** Required */
		source: FormControl<string | null | undefined>,
	}
	export function CreateNFSMountConfigurationFormGroup() {
		return new FormGroup<NFSMountConfigurationFormProperties>({
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The network configuration for a pool. */
	export interface NetworkConfiguration {
		endpointConfiguration?: PoolEndpointConfiguration;

		/** The number of IPs specified here limits the maximum size of the Pool - 50 dedicated nodes or 20 low-priority nodes can be allocated for each public IP. For example, a pool needing 150 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}. */
		publicIPs?: Array<string>;

		/** The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId?: string | null;
	}

	/** The network configuration for a pool. */
	export interface NetworkConfigurationFormProperties {

		/** The virtual network must be in the same region and subscription as the Azure Batch account. The specified subnet should have enough free IP addresses to accommodate the number of nodes in the pool. If the subnet doesn't have enough free IP addresses, the pool will partially allocate compute nodes, and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule tasks on the compute nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the compute nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the compute nodes to unusable. For pools created via virtualMachineConfiguration the Batch account must have poolAllocationMode userSubscription in order to use a VNet. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration */
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Operation {
		display?: any;

		/** This is of the format {provider}/{resource}/{operation} */
		name?: string | null;
		origin?: string | null;
		properties?: string | null;
	}
	export interface OperationFormProperties {
		display: FormControl<any | null | undefined>,

		/** This is of the format {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationListResult {
		nextLink?: string | null;
		value?: Array<Operation>;
	}
	export interface OperationListResultFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The allocation mode for creating pools in the Batch account. */
	export enum PoolAllocationMode { BatchService = 0, UserSubscription = 1 }

	export interface PoolEndpointConfiguration {

		/**
		 * The maximum number of inbound NAT pools per Batch pool is 5. If the maximum number of inbound NAT pools is exceeded the request fails with HTTP status code 400.
		 * Required
		 */
		inboundNatPools: Array<InboundNatPool>;
	}
	export interface PoolEndpointConfigurationFormProperties {
	}
	export function CreatePoolEndpointConfigurationFormGroup() {
		return new FormGroup<PoolEndpointConfigurationFormProperties>({
		});

	}


	/** Pool properties. */
	export interface PoolProperties {
		allocationState?: PoolPropertiesAllocationState | null;
		allocationStateTransitionTime?: Date | null;

		/** The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, pool creation will fail. */
		applicationLicenses?: Array<string>;

		/** Changes to application package references affect all new compute nodes joining the pool, but do not affect compute nodes that are already in the pool until they are rebooted or reimaged. There is a maximum of 10 application package references on any given pool. */
		applicationPackages?: Array<ApplicationPackageReference>;
		autoScaleRun?: AutoScaleRun;

		/** For Windows compute nodes, the Batch service installs the certificates to the specified certificate store and location. For Linux compute nodes, the certificates are stored in a directory inside the task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the task to query for this location. For certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and certificates are placed in that directory. */
		certificates?: Array<CertificateReference>;
		creationTime?: Date | null;
		currentDedicatedNodes?: number | null;
		currentLowPriorityNodes?: number | null;
		deploymentConfiguration?: DeploymentConfiguration;

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName?: string | null;

		/** This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'. */
		interNodeCommunication?: PoolPropertiesInterNodeCommunication | null;

		/** This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state. */
		lastModified?: Date | null;

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. */
		maxTasksPerNode?: number | null;

		/** The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
		metadata?: Array<MetadataItem>;

		/** This supports Azure Files, NFS, CIFS/SMB, and Blobfuse. */
		mountConfiguration?: Array<MountConfiguration>;

		/** The network configuration for a pool. */
		networkConfiguration?: NetworkConfiguration;
		provisioningState?: PoolPropertiesProvisioningState | null;
		provisioningStateTransitionTime?: Date | null;

		/** Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady). */
		resizeOperationStatus?: ResizeOperationStatus;

		/** Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes. */
		scaleSettings?: ScaleSettings;

		/** In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task. */
		startTask?: StartTask;
		taskSchedulingPolicy?: TaskSchedulingPolicy;
		userAccounts?: Array<UserAccount>;

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
		vmSize?: string | null;
	}

	/** Pool properties. */
	export interface PoolPropertiesFormProperties {
		allocationState: FormControl<PoolPropertiesAllocationState | null | undefined>,
		allocationStateTransitionTime: FormControl<Date | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,
		currentDedicatedNodes: FormControl<number | null | undefined>,
		currentLowPriorityNodes: FormControl<number | null | undefined>,

		/** The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
		displayName: FormControl<string | null | undefined>,

		/** This imposes restrictions on which nodes can be assigned to the pool. Enabling this value can reduce the chance of the requested number of nodes to be allocated in the pool. If not specified, this value defaults to 'Disabled'. */
		interNodeCommunication: FormControl<PoolPropertiesInterNodeCommunication | null | undefined>,

		/** This is the last time at which the pool level data, such as the targetDedicatedNodes or autoScaleSettings, changed. It does not factor in node-level changes such as a compute node changing state. */
		lastModified: FormControl<Date | null | undefined>,

		/** The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. */
		maxTasksPerNode: FormControl<number | null | undefined>,
		provisioningState: FormControl<PoolPropertiesProvisioningState | null | undefined>,
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,

		/** For information about available sizes of virtual machines for Cloud Services pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall. For information about available VM sizes for pools using images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreatePoolPropertiesFormGroup() {
		return new FormGroup<PoolPropertiesFormProperties>({
			allocationState: new FormControl<PoolPropertiesAllocationState | null | undefined>(undefined),
			allocationStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			currentLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			interNodeCommunication: new FormControl<PoolPropertiesInterNodeCommunication | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			maxTasksPerNode: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<PoolPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PoolPropertiesAllocationState { Steady = 0, Resizing = 1, Stopping = 2 }

	export enum PoolPropertiesInterNodeCommunication { Enabled = 0, Disabled = 1 }

	export enum PoolPropertiesProvisioningState { Succeeded = 0, Deleting = 1 }

	export interface UserAccount {
		elevationLevel?: AutoUserSpecificationElevationLevel | null;
		linuxUserConfiguration?: LinuxUserConfiguration;

		/** Required */
		name: string;

		/** Required */
		password: string;
		windowsUserConfiguration?: WindowsUserConfiguration;
	}
	export interface UserAccountFormProperties {
		elevationLevel: FormControl<AutoUserSpecificationElevationLevel | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountFormGroup() {
		return new FormGroup<UserAccountFormProperties>({
			elevationLevel: new FormControl<AutoUserSpecificationElevationLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A definition of an Azure resource. */
	export interface ProxyResource {

		/** The ETag of the resource, used for concurrency statements. */
		etag?: string | null;

		/** The ID of the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** A definition of an Azure resource. */
	export interface ProxyResourceFormProperties {

		/** The ETag of the resource, used for concurrency statements. */
		etag: FormControl<string | null | undefined>,

		/** The ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResizeError {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: string;
		details?: Array<ResizeError>;

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: string;
	}
	export interface ResizeErrorFormProperties {

		/**
		 * An identifier for the error. Codes are invariant and are intended to be consumed programmatically.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A message describing the error, intended to be suitable for display in a user interface.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResizeErrorFormGroup() {
		return new FormGroup<ResizeErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady). */
	export interface ResizeOperationStatus {

		/** This property is set only if an error occurred during the last pool resize, and only when the pool allocationState is Steady. */
		errors?: Array<ResizeError>;
		nodeDeallocationOption?: ComputeNodeDeallocationOption | null;

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout?: string | null;
		startTime?: Date | null;
		targetDedicatedNodes?: number | null;
		targetLowPriorityNodes?: number | null;
	}

	/** Describes either the current operation (if the pool AllocationState is Resizing) or the previously completed operation (if the AllocationState is Steady). */
	export interface ResizeOperationStatusFormProperties {
		nodeDeallocationOption: FormControl<ComputeNodeDeallocationOption | null | undefined>,

		/** The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
		resizeTimeout: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		targetDedicatedNodes: FormControl<number | null | undefined>,
		targetLowPriorityNodes: FormControl<number | null | undefined>,
	}
	export function CreateResizeOperationStatusFormGroup() {
		return new FormGroup<ResizeOperationStatusFormProperties>({
			nodeDeallocationOption: new FormControl<ComputeNodeDeallocationOption | null | undefined>(undefined),
			resizeTimeout: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			targetDedicatedNodes: new FormControl<number | null | undefined>(undefined),
			targetLowPriorityNodes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A definition of an Azure resource. */
	export interface Resource {

		/** The ID of the resource. */
		id?: string | null;

		/** The location of the resource. */
		location?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** A definition of an Azure resource. */
	export interface ResourceFormProperties {

		/** The ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** The location of the resource. */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceFile {

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. */
		autoStorageContainerName?: string | null;

		/** The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. */
		blobPrefix?: string | null;

		/** This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. */
		fileMode?: string | null;

		/** If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..'). */
		filePath?: string | null;

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		httpUrl?: string | null;

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		storageContainerUrl?: string | null;
	}
	export interface ResourceFileFormProperties {

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. */
		autoStorageContainerName: FormControl<string | null | undefined>,

		/** The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. */
		blobPrefix: FormControl<string | null | undefined>,

		/** This property applies only to files being downloaded to Linux compute nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows node. If this property is not specified for a Linux node, then a default value of 0770 is applied to the file. */
		fileMode: FormControl<string | null | undefined>,

		/** If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the task's working directory (for example by using '..'). */
		filePath: FormControl<string | null | undefined>,

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL is Azure Blob Storage, it must be readable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		httpUrl: FormControl<string | null | undefined>,

		/** The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable using anonymous access; that is, the Batch service does not present any credentials when downloading the blob. There are two ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the blob, or set the ACL for the blob or its container to allow public access. */
		storageContainerUrl: FormControl<string | null | undefined>,
	}
	export function CreateResourceFileFormGroup() {
		return new FormGroup<ResourceFileFormProperties>({
			autoStorageContainerName: new FormControl<string | null | undefined>(undefined),
			blobPrefix: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			httpUrl: new FormControl<string | null | undefined>(undefined),
			storageContainerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes. */
	export interface ScaleSettings {
		autoScale?: AutoScaleSettings;
		fixedScale?: FixedScaleSettings;
	}

	/** Defines the desired size of the pool. This can either be 'fixedScale' where the requested targetDedicatedNodes is specified, or 'autoScale' which defines a formula which is periodically reevaluated. If this property is not specified, the pool will have a fixed scale with 0 targetDedicatedNodes. */
	export interface ScaleSettingsFormProperties {
	}
	export function CreateScaleSettingsFormGroup() {
		return new FormGroup<ScaleSettingsFormProperties>({
		});

	}


	/** In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task. */
	export interface StartTask {

		/** The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified. */
		commandLine?: string | null;
		containerSettings?: TaskContainerSettings;
		environmentSettings?: Array<EnvironmentSetting>;

		/** The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit. */
		maxTaskRetryCount?: number | null;
		resourceFiles?: Array<ResourceFile>;

		/** Specify either the userName or autoUser property, but not both. */
		userIdentity?: UserIdentity;

		/** If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true. */
		waitForSuccess?: boolean | null;
	}

	/** In some cases the start task may be re-run even though the node was not rebooted. Due to this, start tasks should be idempotent and exit gracefully if the setup they're performing has already been done. Special care should be taken to avoid start tasks which create breakaway process or install/launch services from the start task working directory, as this will block Batch from being able to re-run the start task. */
	export interface StartTaskFormProperties {

		/** The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. Required if any other properties of the startTask are specified. */
		commandLine: FormControl<string | null | undefined>,

		/** The Batch service retries a task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the task. If the maximum retry count is -1, the Batch service retries the task without limit. */
		maxTaskRetryCount: FormControl<number | null | undefined>,

		/** If true and the start task fails on a compute node, the Batch service retries the start task up to its maximum retry count (maxTaskRetryCount). If the task has still not completed successfully after all retries, then the Batch service marks the compute node unusable, and will not schedule tasks to it. This condition can be detected via the node state and scheduling error detail. If false, the Batch service will not wait for the start task to complete. In this case, other tasks can start executing on the compute node while the start task is still running; and even if the start task fails, new tasks will continue to be scheduled on the node. The default is true. */
		waitForSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateStartTaskFormGroup() {
		return new FormGroup<StartTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
			maxTaskRetryCount: new FormControl<number | null | undefined>(undefined),
			waitForSuccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum StorageAccountType { Standard_LRS = 0, Premium_LRS = 1 }

	export interface TaskContainerSettings {

		/** These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
		containerRunOptions?: string | null;

		/**
		 * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: string;
		registry?: ContainerRegistry;
		workingDirectory?: TaskContainerSettingsWorkingDirectory | null;
	}
	export interface TaskContainerSettingsFormProperties {

		/** These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
		containerRunOptions: FormControl<string | null | undefined>,

		/**
		 * This is the full image reference, as would be specified to "docker pull". If no tag is provided as part of the image name, the tag ":latest" is used as a default.
		 * Required
		 */
		imageName: FormControl<string | null | undefined>,
		workingDirectory: FormControl<TaskContainerSettingsWorkingDirectory | null | undefined>,
	}
	export function CreateTaskContainerSettingsFormGroup() {
		return new FormGroup<TaskContainerSettingsFormProperties>({
			containerRunOptions: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workingDirectory: new FormControl<TaskContainerSettingsWorkingDirectory | null | undefined>(undefined),
		});

	}

	export enum TaskContainerSettingsWorkingDirectory { TaskWorkingDirectory = 0, ContainerImageDefault = 1 }

	export interface TaskSchedulingPolicy {

		/** Required */
		nodeFillType: TaskSchedulingPolicyNodeFillType;
	}
	export interface TaskSchedulingPolicyFormProperties {

		/** Required */
		nodeFillType: FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>,
	}
	export function CreateTaskSchedulingPolicyFormGroup() {
		return new FormGroup<TaskSchedulingPolicyFormProperties>({
			nodeFillType: new FormControl<TaskSchedulingPolicyNodeFillType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TaskSchedulingPolicyNodeFillType { Spread = 0, Pack = 1 }


	/** Specify either the userName or autoUser property, but not both. */
	export interface UserIdentity {
		autoUser?: AutoUserSpecification;

		/** The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
		userName?: string | null;
	}

	/** Specify either the userName or autoUser property, but not both. */
	export interface UserIdentityFormProperties {

		/** The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VirtualMachineConfiguration {
		containerConfiguration?: ContainerConfiguration;

		/** This property must be specified if the compute nodes in the pool need to have empty data disks attached to them. */
		dataDisks?: Array<DataDisk>;

		/** Required */
		imageReference: ImageReference;

		/**
		 * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType?: string | null;

		/**
		 * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
		 * Required
		 */
		nodeAgentSkuId: string;
		windowsConfiguration?: WindowsConfiguration;
	}
	export interface VirtualMachineConfigurationFormProperties {

		/**
		 * This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:
		 * Windows_Server - The on-premises license is for Windows Server.
		 * Windows_Client - The on-premises license is for Windows Client.
		 */
		licenseType: FormControl<string | null | undefined>,

		/**
		 * The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the 'List supported node agent SKUs' operation.
		 * Required
		 */
		nodeAgentSkuId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineConfigurationFormGroup() {
		return new FormGroup<VirtualMachineConfigurationFormProperties>({
			licenseType: new FormControl<string | null | undefined>(undefined),
			nodeAgentSkuId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WindowsConfiguration {

		/** If omitted, the default value is true. */
		enableAutomaticUpdates?: boolean | null;
	}
	export interface WindowsConfigurationFormProperties {

		/** If omitted, the default value is true. */
		enableAutomaticUpdates: FormControl<boolean | null | undefined>,
	}
	export function CreateWindowsConfigurationFormGroup() {
		return new FormGroup<WindowsConfigurationFormProperties>({
			enableAutomaticUpdates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WindowsUserConfiguration {

		/** Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode. */
		loginMode?: WindowsUserConfigurationLoginMode | null;
	}
	export interface WindowsUserConfigurationFormProperties {

		/** Specifies login mode for the user. The default value for VirtualMachineConfiguration pools is interactive mode and for CloudServiceConfiguration pools is batch mode. */
		loginMode: FormControl<WindowsUserConfigurationLoginMode | null | undefined>,
	}
	export function CreateWindowsUserConfigurationFormGroup() {
		return new FormGroup<WindowsUserConfigurationFormProperties>({
			loginMode: new FormControl<WindowsUserConfigurationLoginMode | null | undefined>(undefined),
		});

	}

	export enum WindowsUserConfigurationLoginMode { Batch = 0, Interactive = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available operations for the Microsoft.Batch provider
		 * Get providers/Microsoft.Batch/operations
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @return {OperationListResult} The operation was successful. The response contains the list of available operations.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Batch/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the Batch accounts associated with the subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Batch/batchAccounts
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {BatchAccountListResult} The operation was successful. The response contains a list of Batch account entities associated with the subscription.
		 */
		BatchAccount_List(api_version: string, subscriptionId: string): Observable<BatchAccountListResult> {
			return this.http.get<BatchAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Batch/batchAccounts?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks whether the Batch account name is available in the specified region.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/checkNameAvailability
		 * @param {string} locationName The desired region for the name check.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {CheckNameAvailabilityParameters} requestBody Properties needed to check the availability of a name.
		 * @return {CheckNameAvailabilityResult} Success. Returns details about whether a Batch account name is available.
		 */
		Location_CheckNameAvailability(locationName: string, api_version: string, subscriptionId: string, requestBody: CheckNameAvailabilityParameters): Observable<CheckNameAvailabilityResult> {
			return this.http.post<CheckNameAvailabilityResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Batch/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Batch service quotas for the specified subscription at the given location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Batch/locations/{locationName}/quotas
		 * @param {string} locationName The region for which to retrieve Batch service quotas.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {BatchLocationQuota} The operation was successful. The response contains the Batch service quotas for the subscription in the specified location.
		 */
		Location_GetQuotas(locationName: string, api_version: string, subscriptionId: string): Observable<BatchLocationQuota> {
			return this.http.get<BatchLocationQuota>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Batch/locations/' + (locationName == null ? '' : encodeURIComponent(locationName)) + '/quotas&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the Batch accounts associated with the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {BatchAccountListResult} The operation was successful. The response contains a list of Batch account entities associated with the resource group.
		 */
		BatchAccount_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<BatchAccountListResult> {
			return this.http.get<BatchAccountListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified Batch account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {BatchAccount} The operation was successful. The response contains the Batch account entity.
		 */
		BatchAccount_Get(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<BatchAccount> {
			return this.http.get<BatchAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new Batch account with the specified parameters. Existing accounts cannot be updated with this API and should instead be updated with the Update Batch Account API.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName A name for the Batch account which must be unique within the region. Batch account names must be between 3 and 24 characters in length and must use only numbers and lowercase letters. This name is used as part of the DNS name that is used to access the Batch service in the region in which the account is created. For example: http://accountname.region.batch.azure.com/.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {BatchAccountCreateParameters} requestBody Additional parameters for account creation.
		 * @return {BatchAccount} The operation was successful. The response contains the Batch account entity.
		 */
		BatchAccount_Create(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: BatchAccountCreateParameters): Observable<BatchAccount> {
			return this.http.put<BatchAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified Batch account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} The operation was successful.
		 */
		BatchAccount_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing Batch account.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {BatchAccountUpdateParameters} requestBody Additional parameters for account update.
		 * @return {BatchAccount} The operation was successful. The response contains the Batch account entity.
		 */
		BatchAccount_Update(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: BatchAccountUpdateParameters): Observable<BatchAccount> {
			return this.http.patch<BatchAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the applications in the specified account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {ListApplicationsResult} The operation was successful. The response contains a list of the application entities associated with the specified account.
		 */
		Application_List(resourceGroupName: string, accountName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<ListApplicationsResult> {
			return this.http.get<ListApplicationsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Application} The operation was successful. The response contains the application entity.
		 */
		Application_Get(resourceGroupName: string, accountName: string, applicationName: string, api_version: string, subscriptionId: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds an application to the specified Batch account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {Application} requestBody The parameters for the request.
		 * @return {Application} The operation was successful. The response contains the application entity.
		 */
		Application_Create(resourceGroupName: string, accountName: string, applicationName: string, api_version: string, subscriptionId: string, requestBody: Application): Observable<Application> {
			return this.http.put<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} The operation was successful.
		 */
		Application_Delete(resourceGroupName: string, accountName: string, applicationName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates settings for the specified application.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {Application} requestBody The parameters for the request.
		 * @return {Application} The operation was successful. The response contains the application entity.
		 */
		Application_Update(resourceGroupName: string, accountName: string, applicationName: string, api_version: string, subscriptionId: string, requestBody: Application): Observable<Application> {
			return this.http.patch<Application>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the application packages in the specified application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {ListApplicationPackagesResult} The operation was successful. The response contains a list of the application package entities associated with the specified application.
		 */
		ApplicationPackage_List(resourceGroupName: string, accountName: string, applicationName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<ListApplicationPackagesResult> {
			return this.http.get<ListApplicationPackagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/versions&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified application package.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} versionName The version of the application.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {ApplicationPackage} The operation was successful. The response contains the application package entity.
		 */
		ApplicationPackage_Get(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, api_version: string, subscriptionId: string): Observable<ApplicationPackage> {
			return this.http.get<ApplicationPackage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an application package record. The record contains the SAS where the package should be uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using `ApplicationPackageActive` before it can be used.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} versionName The version of the application.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {ApplicationPackage} requestBody The parameters for the request.
		 * @return {ApplicationPackage} The operation was successful. The response contains the application package entity.
		 */
		ApplicationPackage_Create(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, api_version: string, subscriptionId: string, requestBody: ApplicationPackage): Observable<ApplicationPackage> {
			return this.http.put<ApplicationPackage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application package record and its associated binary file.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} versionName The version of the application.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} The operation was successful.
		 */
		ApplicationPackage_Delete(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activates the specified application package. This should be done after the `ApplicationPackage` was created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or Tasks
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}/activate
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} applicationName The name of the application. This must be unique within the account.
		 * @param {string} versionName The version of the application.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {ActivateApplicationPackageParameters} requestBody The parameters for the request.
		 * @return {ApplicationPackage} The operation was successful. The response contains the application package entity.
		 */
		ApplicationPackage_Activate(resourceGroupName: string, accountName: string, applicationName: string, versionName: string, api_version: string, subscriptionId: string, requestBody: ActivateApplicationPackageParameters): Observable<ApplicationPackage> {
			return this.http.post<ApplicationPackage>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/applications/' + (applicationName == null ? '' : encodeURIComponent(applicationName)) + '/versions/' + (versionName == null ? '' : encodeURIComponent(versionName)) + '/activate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the certificates in the specified account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {string} select Comma separated list of properties that should be returned. e.g. "properties/provisioningState". Only top level properties under properties/ are valid for selection.
		 * @param {string} filter OData filter expression. Valid properties for filtering are "properties/provisioningState", "properties/provisioningStateTransitionTime", "name".
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {ListCertificatesResult} The operation was successful. The response contains a list of certificates associated with the account.
		 */
		Certificate_ListByBatchAccount(resourceGroupName: string, accountName: string, maxresults: number | null | undefined, select: string | null | undefined, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<ListCertificatesResult> {
			return this.http.get<ListCertificatesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates&maxresults=' + maxresults + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified certificate.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} certificateName The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Certificate} The operation was successful. The response contains the certificate entity.
		 */
		Certificate_Get(resourceGroupName: string, accountName: string, certificateName: string, api_version: string, subscriptionId: string): Observable<Certificate> {
			return this.http.get<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new certificate inside the specified account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} certificateName The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {CertificateCreateOrUpdateParameters} requestBody Additional parameters for certificate creation.
		 * @return {Certificate} The operation was successful. The response contains the certificate entity.
		 */
		Certificate_Create(resourceGroupName: string, accountName: string, certificateName: string, api_version: string, subscriptionId: string, requestBody: CertificateCreateOrUpdateParameters): Observable<Certificate> {
			return this.http.put<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified certificate.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} certificateName The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} The operation was successful.
		 */
		Certificate_Delete(resourceGroupName: string, accountName: string, certificateName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing certificate.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} certificateName The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {CertificateCreateOrUpdateParameters} requestBody Certificate entity to update.
		 * @return {Certificate} The operation was successful. The response contains the certificate entity.
		 */
		Certificate_Update(resourceGroupName: string, accountName: string, certificateName: string, api_version: string, subscriptionId: string, requestBody: CertificateCreateOrUpdateParameters): Observable<Certificate> {
			return this.http.patch<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels a failed deletion of a certificate from the specified account.
		 * If you try to delete a certificate that is being used by a pool or compute node, the status of the certificate changes to deleteFailed. If you decide that you want to continue using the certificate, you can use this operation to set the status of the certificate back to active. If you intend to delete the certificate, you do not need to run this operation after the deletion failed. You must make sure that the certificate is not being used by any resources, and then you can try again to delete the certificate.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}/cancelDelete
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} certificateName The identifier for the certificate. This must be made up of algorithm and thumbprint separated by a dash, and must match the certificate data in the request. For example SHA1-a3d1c5.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Certificate} The operation was successful. The response contains the certificate entity.
		 */
		Certificate_CancelDeletion(resourceGroupName: string, accountName: string, certificateName: string, api_version: string, subscriptionId: string): Observable<Certificate> {
			return this.http.post<Certificate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/certificates/' + (certificateName == null ? '' : encodeURIComponent(certificateName)) + '/cancelDelete&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets the account keys for the specified Batch account.
		 * This operation applies only to Batch accounts created with a poolAllocationMode of 'BatchService'. If the Batch account was created with a poolAllocationMode of 'UserSubscription', clients cannot use access to keys to authenticate, and must use Azure Active Directory instead. In this case, getting the keys will fail.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/listKeys
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {BatchAccountKeys} The operation was successful. The response contains the keys of the Batch account.
		 */
		BatchAccount_GetKeys(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<BatchAccountKeys> {
			return this.http.post<BatchAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/listKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Lists all of the pools in the specified account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {number} maxresults The maximum number of items to return in the response.
		 * @param {string} select Comma separated list of properties that should be returned. e.g. "properties/provisioningState". Only top level properties under properties/ are valid for selection.
		 * @param {string} filter OData filter expression. Valid properties for filtering are:
		 *  name
		 *  properties/allocationState
		 *  properties/allocationStateTransitionTime
		 *  properties/creationTime
		 *  properties/provisioningState
		 *  properties/provisioningStateTransitionTime
		 *  properties/lastModified
		 *  properties/vmSize
		 *  properties/interNodeCommunication
		 *  properties/scaleSettings/autoScale
		 *  properties/scaleSettings/fixedScale
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {ListPoolsResult} The operation was successful. The response contains a list of certificates associated with the account.
		 */
		Pool_ListByBatchAccount(resourceGroupName: string, accountName: string, maxresults: number | null | undefined, select: string | null | undefined, filter: string | null | undefined, api_version: string, subscriptionId: string): Observable<ListPoolsResult> {
			return this.http.get<ListPoolsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools&maxresults=' + maxresults + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about the specified pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Pool} The operation was successful. The response contains the pool entity.
		 */
		Pool_Get(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string): Observable<Pool> {
			return this.http.get<Pool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new pool inside the specified account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {Pool} requestBody Additional parameters for pool creation.
		 * @return {Pool} The operation was successful. The response contains the pool entity.
		 */
		Pool_Create(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string, requestBody: Pool): Observable<Pool> {
			return this.http.put<Pool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified pool.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} The operation was successful.
		 */
		Pool_Delete(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the properties of an existing pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {Pool} requestBody Pool properties that should be updated. Properties that are supplied will be updated, any property not supplied will be unchanged.
		 * @return {Pool} The operation was successful. The response contains the pool entity.
		 */
		Pool_Update(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string, requestBody: Pool): Observable<Pool> {
			return this.http.patch<Pool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables automatic scaling for a pool.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/disableAutoScale
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Pool} The operation was successful. The response contains the pool entity.
		 */
		Pool_DisableAutoScale(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string): Observable<Pool> {
			return this.http.post<Pool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/disableAutoScale&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Stops an ongoing resize operation on the pool.
		 * This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state. After stopping, the pool stabilizes at the number of nodes it was at when the stop operation was done. During the stop operation, the pool allocation state changes first to stopping and then to steady. A resize operation need not be an explicit resize pool request; this API can also be used to halt the initial sizing of the pool when it is created.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/stopResize
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} poolName The pool name. This must be unique within the account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {Pool} The operation was successful. The response contains the pool entity.
		 */
		Pool_StopResize(resourceGroupName: string, accountName: string, poolName: string, api_version: string, subscriptionId: string): Observable<Pool> {
			return this.http.post<Pool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/pools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/stopResize&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Regenerates the specified account key for the Batch account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/regenerateKeys
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @param {BatchAccountRegenerateKeyParameters} requestBody The type of key to regenerate.
		 * @return {BatchAccountKeys} The operation was successful. The response contains the Batch account keys.
		 */
		BatchAccount_RegenerateKey(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, requestBody: BatchAccountRegenerateKeyParameters): Observable<BatchAccountKeys> {
			return this.http.post<BatchAccountKeys>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/regenerateKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Synchronizes access keys for the auto-storage account configured for the specified Batch account.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/syncAutoStorageKeys
		 * @param {string} resourceGroupName The name of the resource group that contains the Batch account.
		 * @param {string} accountName The name of the Batch account.
		 * @param {string} api_version The API version to be used with the HTTP request.
		 * @param {string} subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000)
		 * @return {void} 
		 */
		BatchAccount_SynchronizeAutoStorageKeys(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Batch/batchAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/syncAutoStorageKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

