import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Azure Application Insights information for performance counters reporting. */
	export interface AppInsightsReference {

		/**
		 * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
		 * Required
		 */
		component: ResourceId;

		/** Value of the Azure Application Insights instrumentation key. */
		instrumentationKey?: string | null;

		/** Key Vault Secret reference. */
		instrumentationKeySecretReference?: KeyVaultSecretReference;
	}

	/** Azure Application Insights information for performance counters reporting. */
	export interface AppInsightsReferenceFormProperties {

		/** Value of the Azure Application Insights instrumentation key. */
		instrumentationKey: FormControl<string | null | undefined>,
	}
	export function CreateAppInsightsReferenceFormGroup() {
		return new FormGroup<AppInsightsReferenceFormProperties>({
			instrumentationKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster. */
	export interface AutoScaleSettings {

		/**
		 * The number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation. Default: 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		initialNodeCount?: number | null;

		/**
		 * The maximum number of compute nodes the cluster can have.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumNodeCount: number;

		/**
		 * The minimum number of compute nodes the Batch AI service will try to allocate for the cluster. Note, the actual number of nodes can be less than the specified value if the subscription has not enough quota to fulfill the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumNodeCount: number;
	}

	/** Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster. */
	export interface AutoScaleSettingsFormProperties {

		/**
		 * The number of compute nodes to allocate on cluster creation. Note that this value is used only during cluster creation. Default: 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		initialNodeCount: FormControl<number | null | undefined>,

		/**
		 * The maximum number of compute nodes the cluster can have.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumNodeCount: FormControl<number | null | undefined>,

		/**
		 * The minimum number of compute nodes the Batch AI service will try to allocate for the cluster. Note, the actual number of nodes can be less than the specified value if the subscription has not enough quota to fulfill the request.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateAutoScaleSettingsFormGroup() {
		return new FormGroup<AutoScaleSettingsFormProperties>({
			initialNodeCount: new FormControl<number | null | undefined>(undefined),
			maximumNodeCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minimumNodeCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Blob Storage Container mounting configuration. */
	export interface AzureBlobFileSystemReference {

		/**
		 * Name of the Azure storage account.
		 * Required
		 */
		accountName: string;

		/**
		 * Name of the Azure Blob Storage container to mount on the cluster.
		 * Required
		 */
		containerName: string;

		/**
		 * Azure storage account credentials.
		 * Required
		 */
		credentials: AzureStorageCredentialsInfo;

		/** Mount options for mounting blobfuse file system. */
		mountOptions?: string | null;

		/**
		 * The relative path on the compute node where the Azure File container will be mounted. Note that all cluster level containers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level containers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: string;
	}

	/** Azure Blob Storage Container mounting configuration. */
	export interface AzureBlobFileSystemReferenceFormProperties {

		/**
		 * Name of the Azure storage account.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * Name of the Azure Blob Storage container to mount on the cluster.
		 * Required
		 */
		containerName: FormControl<string | null | undefined>,

		/** Mount options for mounting blobfuse file system. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * The relative path on the compute node where the Azure File container will be mounted. Note that all cluster level containers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level containers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureBlobFileSystemReferenceFormGroup() {
		return new FormGroup<AzureBlobFileSystemReferenceFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure File Share mounting configuration. */
	export interface AzureFileShareReference {

		/**
		 * Name of the Azure storage account.
		 * Required
		 */
		accountName: string;

		/**
		 * URL to access the Azure File.
		 * Required
		 */
		azureFileUrl: string;

		/**
		 * Azure storage account credentials.
		 * Required
		 */
		credentials: AzureStorageCredentialsInfo;

		/** File mode for directories on the mounted file share. Default value: 0777. */
		directoryMode?: string | null;

		/** File mode for files on the mounted file share. Default value: 0777. */
		fileMode?: string | null;

		/**
		 * The relative path on the compute node where the Azure File share will be mounted. Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: string;
	}

	/** Azure File Share mounting configuration. */
	export interface AzureFileShareReferenceFormProperties {

		/**
		 * Name of the Azure storage account.
		 * Required
		 */
		accountName: FormControl<string | null | undefined>,

		/**
		 * URL to access the Azure File.
		 * Required
		 */
		azureFileUrl: FormControl<string | null | undefined>,

		/** File mode for directories on the mounted file share. Default value: 0777. */
		directoryMode: FormControl<string | null | undefined>,

		/** File mode for files on the mounted file share. Default value: 0777. */
		fileMode: FormControl<string | null | undefined>,

		/**
		 * The relative path on the compute node where the Azure File share will be mounted. Note that all cluster level file shares will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file shares will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,
	}
	export function CreateAzureFileShareReferenceFormGroup() {
		return new FormGroup<AzureFileShareReferenceFormProperties>({
			accountName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureFileUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			directoryMode: new FormControl<string | null | undefined>(undefined),
			fileMode: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure storage account credentials. */
	export interface AzureStorageCredentialsInfo {

		/** Storage account key. One of accountKey or accountKeySecretReference must be specified. */
		accountKey?: string | null;

		/** Key Vault Secret reference. */
		accountKeySecretReference?: KeyVaultSecretReference;
	}

	/** Azure storage account credentials. */
	export interface AzureStorageCredentialsInfoFormProperties {

		/** Storage account key. One of accountKey or accountKeySecretReference must be specified. */
		accountKey: FormControl<string | null | undefined>,
	}
	export function CreateAzureStorageCredentialsInfoFormGroup() {
		return new FormGroup<AzureStorageCredentialsInfoFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error response from the Batch AI service. */
	export interface BatchAIError {

		/** An identifier of the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<NameValuePair>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** An error response from the Batch AI service. */
	export interface BatchAIErrorFormProperties {

		/** An identifier of the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBatchAIErrorFormGroup() {
		return new FormGroup<BatchAIErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name-value pair. */
	export interface NameValuePair {

		/** The name in the name-value pair. */
		name?: string | null;

		/** The value in the name-value pair. */
		value?: string | null;
	}

	/** Name-value pair. */
	export interface NameValuePairFormProperties {

		/** The name in the name-value pair. */
		name: FormControl<string | null | undefined>,

		/** The value in the name-value pair. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CNTK (aka Microsoft Cognitive Toolkit) job settings. */
	export interface CNTKsettings {

		/** Command line arguments that need to be passed to the python script or cntk executable. */
		commandLineArgs?: string | null;

		/** Specifies the path of the BrainScript config file. This property can be specified only if the languageType is 'BrainScript'. */
		configFilePath?: string | null;

		/** The language to use for launching CNTK (aka Microsoft Cognitive Toolkit) job. Valid values are 'BrainScript' or 'Python'. */
		languageType?: string | null;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;

		/** The path to the Python interpreter. This property can be specified only if the languageType is 'Python'. */
		pythonInterpreterPath?: string | null;

		/** Python script to execute. This property can be specified only if the languageType is 'Python'. */
		pythonScriptFilePath?: string | null;
	}

	/** CNTK (aka Microsoft Cognitive Toolkit) job settings. */
	export interface CNTKsettingsFormProperties {

		/** Command line arguments that need to be passed to the python script or cntk executable. */
		commandLineArgs: FormControl<string | null | undefined>,

		/** Specifies the path of the BrainScript config file. This property can be specified only if the languageType is 'BrainScript'. */
		configFilePath: FormControl<string | null | undefined>,

		/** The language to use for launching CNTK (aka Microsoft Cognitive Toolkit) job. Valid values are 'BrainScript' or 'Python'. */
		languageType: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. This property can be specified only if the languageType is 'Python'. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/** Python script to execute. This property can be specified only if the languageType is 'Python'. */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreateCNTKsettingsFormGroup() {
		return new FormGroup<CNTKsettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			configFilePath: new FormControl<string | null | undefined>(undefined),
			languageType: new FormControl<string | null | undefined>(undefined),
			processCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Caffe2 job settings. */
	export interface Caffe2Settings {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs?: string | null;

		/** The path to the Python interpreter. */
		pythonInterpreterPath?: string | null;

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: string;
	}

	/** Caffe2 job settings. */
	export interface Caffe2SettingsFormProperties {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs: FormControl<string | null | undefined>,

		/** The path to the Python interpreter. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreateCaffe2SettingsFormGroup() {
		return new FormGroup<Caffe2SettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Caffe job settings. */
	export interface CaffeSettings {

		/** Command line arguments that need to be passed to the Caffe job. */
		commandLineArgs?: string | null;

		/** Path of the config file for the job. This property cannot be specified if pythonScriptFilePath is specified. */
		configFilePath?: string | null;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;

		/** The path to the Python interpreter. The property can be specified only if the pythonScriptFilePath is specified. */
		pythonInterpreterPath?: string | null;

		/** Python script to execute. This property cannot be specified if configFilePath is specified. */
		pythonScriptFilePath?: string | null;
	}

	/** Caffe job settings. */
	export interface CaffeSettingsFormProperties {

		/** Command line arguments that need to be passed to the Caffe job. */
		commandLineArgs: FormControl<string | null | undefined>,

		/** Path of the config file for the job. This property cannot be specified if pythonScriptFilePath is specified. */
		configFilePath: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. The property can be specified only if the pythonScriptFilePath is specified. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/** Python script to execute. This property cannot be specified if configFilePath is specified. */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreateCaffeSettingsFormGroup() {
		return new FormGroup<CaffeSettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			configFilePath: new FormControl<string | null | undefined>(undefined),
			processCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Chainer job settings. */
	export interface ChainerSettings {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs?: string | null;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;

		/** The path to the Python interpreter. */
		pythonInterpreterPath?: string | null;

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: string;
	}

	/** Chainer job settings. */
	export interface ChainerSettingsFormProperties {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreateChainerSettingsFormGroup() {
		return new FormGroup<ChainerSettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			processCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An error response from the Batch AI service. */
	export interface CloudError {

		/** An error response from the Batch AI service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Batch AI service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Batch AI service. */
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

	/** An error response from the Batch AI service. */
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


	/** Information about a Cluster. */
	export interface Cluster extends ProxyResource {

		/** Cluster properties. */
		properties?: ClusterProperties;
	}

	/** Information about a Cluster. */
	export interface ClusterFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a Cluster. */
	export interface ClusterBaseProperties {

		/** Node setup settings. */
		nodeSetup?: NodeSetup;

		/** At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster. */
		scaleSettings?: ScaleSettings;

		/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
		subnet?: ResourceId;

		/**
		 * Settings for user account that gets created on each on the nodes of a cluster.
		 * Required
		 */
		userAccountSettings: UserAccountSettings;

		/** VM configuration. */
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** VM priority. Allowed values are: dedicated (default) and lowpriority. */
		vmPriority?: ClusterBasePropertiesVmPriority | null;

		/**
		 * The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace see Sizes for Virtual Machines (Linux). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: string;
	}

	/** The properties of a Cluster. */
	export interface ClusterBasePropertiesFormProperties {

		/** VM priority. Allowed values are: dedicated (default) and lowpriority. */
		vmPriority: FormControl<ClusterBasePropertiesVmPriority | null | undefined>,

		/**
		 * The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace see Sizes for Virtual Machines (Linux). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateClusterBasePropertiesFormGroup() {
		return new FormGroup<ClusterBasePropertiesFormProperties>({
			vmPriority: new FormControl<ClusterBasePropertiesVmPriority | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClusterBasePropertiesVmPriority { dedicated = 'dedicated', lowpriority = 'lowpriority' }


	/** Cluster creation operation. */
	export interface ClusterCreateParameters {

		/** The properties of a Cluster. */
		properties?: ClusterBaseProperties;
	}

	/** Cluster creation operation. */
	export interface ClusterCreateParametersFormProperties {
	}
	export function CreateClusterCreateParametersFormGroup() {
		return new FormGroup<ClusterCreateParametersFormProperties>({
		});

	}


	/** Values returned by the List Clusters operation. */
	export interface ClusterListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of returned Clusters. */
		value?: Array<Cluster>;
	}

	/** Values returned by the List Clusters operation. */
	export interface ClusterListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateClusterListResultFormGroup() {
		return new FormGroup<ClusterListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cluster properties. */
	export interface ClusterProperties {

		/** Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster. */
		allocationState?: ClusterPropertiesAllocationState | null;

		/** The time at which the cluster entered its current allocation state. */
		allocationStateTransitionTime?: Date | null;

		/** The time when the cluster was created. */
		creationTime?: Date | null;

		/**
		 * The number of compute nodes currently assigned to the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentNodeCount?: number | null;

		/** Collection of errors encountered by various compute nodes during node setup. */
		errors?: Array<BatchAIError>;

		/** Node setup settings. */
		nodeSetup?: NodeSetup;

		/** Counts of various compute node states on the cluster. */
		nodeStateCounts?: NodeStateCounts;

		/** Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted. */
		provisioningState?: ClusterPropertiesProvisioningState | null;

		/** Time when the provisioning state was changed. */
		provisioningStateTransitionTime?: Date | null;

		/** At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster. */
		scaleSettings?: ScaleSettings;

		/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
		subnet?: ResourceId;

		/** Settings for user account that gets created on each on the nodes of a cluster. */
		userAccountSettings?: UserAccountSettings;

		/** VM configuration. */
		virtualMachineConfiguration?: VirtualMachineConfiguration;

		/** VM priority of cluster nodes. */
		vmPriority?: ClusterBasePropertiesVmPriority | null;

		/** The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. */
		vmSize?: string | null;
	}

	/** Cluster properties. */
	export interface ClusterPropertiesFormProperties {

		/** Allocation state of the cluster. Possible values are: steady - Indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing - Indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster. */
		allocationState: FormControl<ClusterPropertiesAllocationState | null | undefined>,

		/** The time at which the cluster entered its current allocation state. */
		allocationStateTransitionTime: FormControl<Date | null | undefined>,

		/** The time when the cluster was created. */
		creationTime: FormControl<Date | null | undefined>,

		/**
		 * The number of compute nodes currently assigned to the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentNodeCount: FormControl<number | null | undefined>,

		/** Provisioning state of the cluster. Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted. */
		provisioningState: FormControl<ClusterPropertiesProvisioningState | null | undefined>,

		/** Time when the provisioning state was changed. */
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,

		/** VM priority of cluster nodes. */
		vmPriority: FormControl<ClusterBasePropertiesVmPriority | null | undefined>,

		/** The size of the virtual machines in the cluster. All nodes in a cluster have the same VM size. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateClusterPropertiesFormGroup() {
		return new FormGroup<ClusterPropertiesFormProperties>({
			allocationState: new FormControl<ClusterPropertiesAllocationState | null | undefined>(undefined),
			allocationStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			currentNodeCount: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<ClusterPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			vmPriority: new FormControl<ClusterBasePropertiesVmPriority | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClusterPropertiesAllocationState { steady = 'steady', resizing = 'resizing' }

	export enum ClusterPropertiesProvisioningState { creating = 'creating', succeeded = 'succeeded', failed = 'failed', deleting = 'deleting' }


	/** Cluster update parameters. */
	export interface ClusterUpdateParameters {

		/** The properties of a Cluster that need to be updated. */
		properties?: ClusterUpdateProperties;
	}

	/** Cluster update parameters. */
	export interface ClusterUpdateParametersFormProperties {
	}
	export function CreateClusterUpdateParametersFormGroup() {
		return new FormGroup<ClusterUpdateParametersFormProperties>({
		});

	}


	/** The properties of a Cluster that need to be updated. */
	export interface ClusterUpdateProperties {

		/** At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster. */
		scaleSettings?: ScaleSettings;
	}

	/** The properties of a Cluster that need to be updated. */
	export interface ClusterUpdatePropertiesFormProperties {
	}
	export function CreateClusterUpdatePropertiesFormGroup() {
		return new FormGroup<ClusterUpdatePropertiesFormProperties>({
		});

	}


	/** Docker container settings. */
	export interface ContainerSettings {

		/**
		 * Information about docker image for the job.
		 * Required
		 */
		imageSourceRegistry: ImageSourceRegistry;

		/** Size of /dev/shm. Please refer to docker documentation for supported argument formats. */
		shmSize?: string | null;
	}

	/** Docker container settings. */
	export interface ContainerSettingsFormProperties {

		/** Size of /dev/shm. Please refer to docker documentation for supported argument formats. */
		shmSize: FormControl<string | null | undefined>,
	}
	export function CreateContainerSettingsFormGroup() {
		return new FormGroup<ContainerSettingsFormProperties>({
			shmSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom MPI job settings. */
	export interface CustomMpiSettings {

		/**
		 * The command line to be executed by mpi runtime on each compute node.
		 * Required
		 */
		commandLine: string;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;
	}

	/** Custom MPI job settings. */
	export interface CustomMpiSettingsFormProperties {

		/**
		 * The command line to be executed by mpi runtime on each compute node.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,
	}
	export function CreateCustomMpiSettingsFormGroup() {
		return new FormGroup<CustomMpiSettingsFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			processCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Custom tool kit job settings. */
	export interface CustomToolkitSettings {

		/** The command line to execute on the master node. */
		commandLine?: string | null;
	}

	/** Custom tool kit job settings. */
	export interface CustomToolkitSettingsFormProperties {

		/** The command line to execute on the master node. */
		commandLine: FormControl<string | null | undefined>,
	}
	export function CreateCustomToolkitSettingsFormGroup() {
		return new FormGroup<CustomToolkitSettingsFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data disks settings. */
	export interface DataDisks {

		/** Caching type for the disks. Available values are none (default), readonly, readwrite. Caching type can be set only for VM sizes supporting premium storage. */
		cachingType?: DataDisksCachingType | null;

		/**
		 * Number of data disks attached to the File Server. If multiple disks attached, they will be configured in RAID level 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskCount: number;

		/**
		 * Disk size in GB for the blank data disks.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeInGB: number;

		/**
		 * Type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS. Premium storage account type can only be used with VM sizes supporting premium storage.
		 * Required
		 */
		storageAccountType: DataDisksStorageAccountType;
	}

	/** Data disks settings. */
	export interface DataDisksFormProperties {

		/** Caching type for the disks. Available values are none (default), readonly, readwrite. Caching type can be set only for VM sizes supporting premium storage. */
		cachingType: FormControl<DataDisksCachingType | null | undefined>,

		/**
		 * Number of data disks attached to the File Server. If multiple disks attached, they will be configured in RAID level 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskCount: FormControl<number | null | undefined>,

		/**
		 * Disk size in GB for the blank data disks.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		diskSizeInGB: FormControl<number | null | undefined>,

		/**
		 * Type of storage account to be used on the disk. Possible values are: Standard_LRS or Premium_LRS. Premium storage account type can only be used with VM sizes supporting premium storage.
		 * Required
		 */
		storageAccountType: FormControl<DataDisksStorageAccountType | null | undefined>,
	}
	export function CreateDataDisksFormGroup() {
		return new FormGroup<DataDisksFormProperties>({
			cachingType: new FormControl<DataDisksCachingType | null | undefined>(undefined),
			diskCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			diskSizeInGB: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			storageAccountType: new FormControl<DataDisksStorageAccountType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataDisksCachingType { none = 'none', readonly = 'readonly', readwrite = 'readwrite' }

	export enum DataDisksStorageAccountType { Standard_LRS = 'Standard_LRS', Premium_LRS = 'Premium_LRS' }


	/** Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. */
	export enum DeallocationOption { requeue = 'requeue', terminate = 'terminate', waitforjobcompletion = 'waitforjobcompletion' }


	/** An environment variable definition. */
	export interface EnvironmentVariable {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: string;

		/**
		 * The value of the environment variable.
		 * Required
		 */
		value: string;
	}

	/** An environment variable definition. */
	export interface EnvironmentVariableFormProperties {

		/**
		 * The name of the environment variable.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The value of the environment variable.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableFormGroup() {
		return new FormGroup<EnvironmentVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An environment variable with secret value definition. */
	export interface EnvironmentVariableWithSecretValue {

		/**
		 * The name of the environment variable to store the secret value.
		 * Required
		 */
		name: string;

		/** The value of the environment variable. This value will never be reported back by Batch AI. */
		value?: string | null;

		/** Key Vault Secret reference. */
		valueSecretReference?: KeyVaultSecretReference;
	}

	/** An environment variable with secret value definition. */
	export interface EnvironmentVariableWithSecretValueFormProperties {

		/**
		 * The name of the environment variable to store the secret value.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The value of the environment variable. This value will never be reported back by Batch AI. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVariableWithSecretValueFormGroup() {
		return new FormGroup<EnvironmentVariableWithSecretValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Experiment information. */
	export interface Experiment extends ProxyResource {

		/** Experiment properties. */
		properties?: ExperimentProperties;
	}

	/** Experiment information. */
	export interface ExperimentFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateExperimentFormGroup() {
		return new FormGroup<ExperimentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface ExperimentListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of experiments. */
		value?: Array<Experiment>;
	}

	/** Values returned by the List operation. */
	export interface ExperimentListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExperimentListResultFormGroup() {
		return new FormGroup<ExperimentListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Experiment properties. */
	export interface ExperimentProperties {

		/** Time when the Experiment was created. */
		creationTime?: Date | null;

		/** The provisioned state of the experiment */
		provisioningState?: ExperimentPropertiesProvisioningState | null;

		/** The time at which the experiment entered its current provisioning state. */
		provisioningStateTransitionTime?: Date | null;
	}

	/** Experiment properties. */
	export interface ExperimentPropertiesFormProperties {

		/** Time when the Experiment was created. */
		creationTime: FormControl<Date | null | undefined>,

		/** The provisioned state of the experiment */
		provisioningState: FormControl<ExperimentPropertiesProvisioningState | null | undefined>,

		/** The time at which the experiment entered its current provisioning state. */
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,
	}
	export function CreateExperimentPropertiesFormGroup() {
		return new FormGroup<ExperimentPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ExperimentPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExperimentPropertiesProvisioningState { creating = 'creating', deleting = 'deleting', succeeded = 'succeeded', failed = 'failed' }


	/** Properties of the file or directory. */
	export interface File {

		/** URL to download the corresponding file. The downloadUrl is not returned for directories. */
		downloadUrl?: string | null;

		/** Type of the file. Possible values are file and directory. */
		fileType?: FileFileType | null;

		/** Name of the file. */
		name?: string | null;

		/** File properties. */
		properties?: FileProperties;
	}

	/** Properties of the file or directory. */
	export interface FileFormProperties {

		/** URL to download the corresponding file. The downloadUrl is not returned for directories. */
		downloadUrl: FormControl<string | null | undefined>,

		/** Type of the file. Possible values are file and directory. */
		fileType: FormControl<FileFileType | null | undefined>,

		/** Name of the file. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<FileFileType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileFileType { file = 'file', directory = 'directory' }


	/** Values returned by the List operation. */
	export interface FileListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of returned job directories and files. */
		value?: Array<File>;
	}

	/** Values returned by the List operation. */
	export interface FileListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFileListResultFormGroup() {
		return new FormGroup<FileListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File properties. */
	export interface FileProperties {

		/**
		 * The file of the size.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentLength?: string | null;

		/** The time at which the file was last modified. */
		lastModified?: Date | null;
	}

	/** File properties. */
	export interface FilePropertiesFormProperties {

		/**
		 * The file of the size.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		contentLength: FormControl<string | null | undefined>,

		/** The time at which the file was last modified. */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateFilePropertiesFormGroup() {
		return new FormGroup<FilePropertiesFormProperties>({
			contentLength: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** File Server information. */
	export interface FileServer extends ProxyResource {

		/** File Server properties. */
		properties?: FileServerProperties;
	}

	/** File Server information. */
	export interface FileServerFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateFileServerFormGroup() {
		return new FormGroup<FileServerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a file server. */
	export interface FileServerBaseProperties {

		/**
		 * Data disks settings.
		 * Required
		 */
		dataDisks: DataDisks;

		/**
		 * SSH configuration.
		 * Required
		 */
		sshConfiguration: SshConfiguration;

		/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
		subnet?: ResourceId;

		/**
		 * The size of the virtual machine for the File Server. For information about available VM sizes from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).
		 * Required
		 */
		vmSize: string;
	}

	/** The properties of a file server. */
	export interface FileServerBasePropertiesFormProperties {

		/**
		 * The size of the virtual machine for the File Server. For information about available VM sizes from the Virtual Machines Marketplace, see Sizes for Virtual Machines (Linux).
		 * Required
		 */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateFileServerBasePropertiesFormGroup() {
		return new FormGroup<FileServerBasePropertiesFormProperties>({
			vmSize: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** File Server creation parameters. */
	export interface FileServerCreateParameters {

		/** The properties of a file server. */
		properties?: FileServerBaseProperties;
	}

	/** File Server creation parameters. */
	export interface FileServerCreateParametersFormProperties {
	}
	export function CreateFileServerCreateParametersFormGroup() {
		return new FormGroup<FileServerCreateParametersFormProperties>({
		});

	}


	/** Values returned by the File Server List operation. */
	export interface FileServerListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of File Servers. */
		value?: Array<FileServer>;
	}

	/** Values returned by the File Server List operation. */
	export interface FileServerListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFileServerListResultFormGroup() {
		return new FormGroup<FileServerListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** File Server properties. */
	export interface FileServerProperties {

		/** Time when the FileServer was created. */
		creationTime?: Date | null;

		/** Data disks settings. */
		dataDisks?: DataDisks;

		/** File Server mount Information. */
		mountSettings?: MountSettings;

		/** Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded. */
		provisioningState?: FileServerPropertiesProvisioningState | null;

		/** Time when the provisioning state was changed. */
		provisioningStateTransitionTime?: Date | null;

		/** SSH configuration. */
		sshConfiguration?: SshConfiguration;

		/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
		subnet?: ResourceId;

		/** VM size of the File Server. */
		vmSize?: string | null;
	}

	/** File Server properties. */
	export interface FileServerPropertiesFormProperties {

		/** Time when the FileServer was created. */
		creationTime: FormControl<Date | null | undefined>,

		/** Provisioning state of the File Server. Possible values: creating - The File Server is getting created; updating - The File Server creation has been accepted and it is getting updated; deleting - The user has requested that the File Server be deleted, and it is in the process of being deleted; failed - The File Server creation has failed with the specified error code. Details about the error code are specified in the message field; succeeded - The File Server creation has succeeded. */
		provisioningState: FormControl<FileServerPropertiesProvisioningState | null | undefined>,

		/** Time when the provisioning state was changed. */
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,

		/** VM size of the File Server. */
		vmSize: FormControl<string | null | undefined>,
	}
	export function CreateFileServerPropertiesFormGroup() {
		return new FormGroup<FileServerPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<FileServerPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FileServerPropertiesProvisioningState { creating = 'creating', updating = 'updating', deleting = 'deleting', succeeded = 'succeeded', failed = 'failed' }


	/** File Server mounting configuration. */
	export interface FileServerReference {

		/**
		 * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
		 * Required
		 */
		fileServer: ResourceId;

		/** Mount options to be passed to mount command. */
		mountOptions?: string | null;

		/**
		 * The relative path on the compute node where the File Server will be mounted. Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: string;

		/** File Server directory that needs to be mounted. If this property is not specified, the entire File Server will be mounted. */
		sourceDirectory?: string | null;
	}

	/** File Server mounting configuration. */
	export interface FileServerReferenceFormProperties {

		/** Mount options to be passed to mount command. */
		mountOptions: FormControl<string | null | undefined>,

		/**
		 * The relative path on the compute node where the File Server will be mounted. Note that all cluster level file servers will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level file servers will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,

		/** File Server directory that needs to be mounted. If this property is not specified, the entire File Server will be mounted. */
		sourceDirectory: FormControl<string | null | undefined>,
	}
	export function CreateFileServerReferenceFormGroup() {
		return new FormGroup<FileServerReferenceFormProperties>({
			mountOptions: new FormControl<string | null | undefined>(undefined),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for Horovod job. */
	export interface HorovodSettings {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs?: string | null;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;

		/** The path to the Python interpreter. */
		pythonInterpreterPath?: string | null;

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: string;
	}

	/** Specifies the settings for Horovod job. */
	export interface HorovodSettingsFormProperties {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreateHorovodSettingsFormGroup() {
		return new FormGroup<HorovodSettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			processCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The OS image reference. */
	export interface ImageReference {

		/**
		 * Offer of the image.
		 * Required
		 */
		offer: string;

		/**
		 * Publisher of the image.
		 * Required
		 */
		publisher: string;

		/**
		 * SKU of the image.
		 * Required
		 */
		sku: string;

		/** Version of the image. */
		version?: string | null;

		/** The ARM resource identifier of the virtual machine image for the compute nodes. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}. The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from. */
		virtualMachineImageId?: string | null;
	}

	/** The OS image reference. */
	export interface ImageReferenceFormProperties {

		/**
		 * Offer of the image.
		 * Required
		 */
		offer: FormControl<string | null | undefined>,

		/**
		 * Publisher of the image.
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/**
		 * SKU of the image.
		 * Required
		 */
		sku: FormControl<string | null | undefined>,

		/** Version of the image. */
		version: FormControl<string | null | undefined>,

		/** The ARM resource identifier of the virtual machine image for the compute nodes. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}. The virtual machine image must be in the same region and subscription as the cluster. For information about the firewall settings for the Batch node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. Note, you need to provide publisher, offer and sku of the base OS image of which the custom image has been derived from. */
		virtualMachineImageId: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			offer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
			virtualMachineImageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about docker image for the job. */
	export interface ImageSourceRegistry {

		/** Credentials to access a container image in a private repository. */
		credentials?: PrivateRegistryCredentials;

		/**
		 * The name of the image in the image repository.
		 * Required
		 */
		image: string;

		/** URL for image repository. */
		serverUrl?: string | null;
	}

	/** Information about docker image for the job. */
	export interface ImageSourceRegistryFormProperties {

		/**
		 * The name of the image in the image repository.
		 * Required
		 */
		image: FormControl<string | null | undefined>,

		/** URL for image repository. */
		serverUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageSourceRegistryFormGroup() {
		return new FormGroup<ImageSourceRegistryFormProperties>({
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serverUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input directory for the job. */
	export interface InputDirectory {

		/**
		 * The ID for the input directory. The job can use AZ_BATCHAI_INPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
		 * Required
		 */
		id: string;

		/**
		 * The path to the input directory.
		 * Required
		 */
		path: string;
	}

	/** Input directory for the job. */
	export interface InputDirectoryFormProperties {

		/**
		 * The ID for the input directory. The job can use AZ_BATCHAI_INPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The path to the input directory.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateInputDirectoryFormGroup() {
		return new FormGroup<InputDirectoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a Job. */
	export interface Job extends ProxyResource {

		/** Job properties. */
		properties?: JobProperties;
	}

	/** Information about a Job. */
	export interface JobFormProperties extends ProxyResourceFormProperties {
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a Batch AI Job. */
	export interface JobBaseProperties {

		/** Caffe2 job settings. */
		caffe2Settings?: Caffe2Settings;

		/** Caffe job settings. */
		caffeSettings?: CaffeSettings;

		/** Chainer job settings. */
		chainerSettings?: ChainerSettings;

		/**
		 * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
		 * Required
		 */
		cluster: ResourceId;

		/** CNTK (aka Microsoft Cognitive Toolkit) job settings. */
		cntkSettings?: CNTKsettings;

		/** Constraints associated with the Job. */
		constraints?: any;

		/** Docker container settings. */
		containerSettings?: ContainerSettings;

		/** Custom MPI job settings. */
		customMpiSettings?: CustomMpiSettings;

		/** Custom tool kit job settings. */
		customToolkitSettings?: CustomToolkitSettings;

		/** A list of user defined environment variables which will be setup for the job. */
		environmentVariables?: Array<EnvironmentVariable>;

		/** Specifies the settings for Horovod job. */
		horovodSettings?: HorovodSettings;

		/** A list of input directories for the job. */
		inputDirectories?: Array<InputDirectory>;

		/** Job preparation settings. */
		jobPreparation?: JobPreparation;

		/** Details of volumes to mount on the cluster. */
		mountVolumes?: MountVolumes;

		/**
		 * Number of compute nodes to run the job on. The job will be gang scheduled on that many compute nodes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: number;

		/** A list of output directories for the job. */
		outputDirectories?: Array<OutputDirectory>;

		/** pyTorch job settings. */
		pyTorchSettings?: PyTorchSettings;

		/** Scheduling priority associated with the job. Possible values: low, normal, high. */
		schedulingPriority?: JobBasePropertiesSchedulingPriority | null;

		/** A list of user defined environment variables with secret values which will be setup for the job. Server will never report values of these variables back. */
		secrets?: Array<EnvironmentVariableWithSecretValue>;

		/**
		 * The path where the Batch AI service will store stdout, stderror and execution log of the job.
		 * Required
		 */
		stdOutErrPathPrefix: string;

		/** TensorFlow job settings. */
		tensorFlowSettings?: TensorFlowSettings;
	}

	/** The properties of a Batch AI Job. */
	export interface JobBasePropertiesFormProperties {

		/** Constraints associated with the Job. */
		constraints: FormControl<any | null | undefined>,

		/**
		 * Number of compute nodes to run the job on. The job will be gang scheduled on that many compute nodes.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,

		/** Scheduling priority associated with the job. Possible values: low, normal, high. */
		schedulingPriority: FormControl<JobBasePropertiesSchedulingPriority | null | undefined>,

		/**
		 * The path where the Batch AI service will store stdout, stderror and execution log of the job.
		 * Required
		 */
		stdOutErrPathPrefix: FormControl<string | null | undefined>,
	}
	export function CreateJobBasePropertiesFormGroup() {
		return new FormGroup<JobBasePropertiesFormProperties>({
			constraints: new FormControl<any | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			schedulingPriority: new FormControl<JobBasePropertiesSchedulingPriority | null | undefined>(undefined),
			stdOutErrPathPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Output directory for the job. */
	export interface OutputDirectory {

		/**
		 * The ID of the output directory. The job can use AZ_BATCHAI_OUTPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
		 * Required
		 */
		id: string;

		/**
		 * The prefix path where the output directory will be created. Note, this is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. The full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
		 * Required
		 */
		pathPrefix: string;

		/** The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. */
		pathSuffix?: string | null;
	}

	/** Output directory for the job. */
	export interface OutputDirectoryFormProperties {

		/**
		 * The ID of the output directory. The job can use AZ_BATCHAI_OUTPUT_<id> environment variable to find the directory path, where <id> is the value of id attribute.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The prefix path where the output directory will be created. Note, this is an absolute path to prefix. E.g. $AZ_BATCHAI_MOUNT_ROOT/MyNFS/MyLogs. The full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix.
		 * Required
		 */
		pathPrefix: FormControl<string | null | undefined>,

		/** The suffix path where the output directory will be created. E.g. models. You can find the full path to the output directory by combining pathPrefix, jobOutputDirectoryPathSegment (reported by get job) and pathSuffix. */
		pathSuffix: FormControl<string | null | undefined>,
	}
	export function CreateOutputDirectoryFormGroup() {
		return new FormGroup<OutputDirectoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pathSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobBasePropertiesSchedulingPriority { low = 'low', normal = 'normal', high = 'high' }


	/** Job creation parameters. */
	export interface JobCreateParameters {

		/** The properties of a Batch AI Job. */
		properties?: JobBaseProperties;
	}

	/** Job creation parameters. */
	export interface JobCreateParametersFormProperties {
	}
	export function CreateJobCreateParametersFormGroup() {
		return new FormGroup<JobCreateParametersFormProperties>({
		});

	}


	/** Values returned by the List operation. */
	export interface JobListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of jobs. */
		value?: Array<Job>;
	}

	/** Values returned by the List operation. */
	export interface JobListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateJobListResultFormGroup() {
		return new FormGroup<JobListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Job preparation settings. */
	export interface JobPreparation {

		/**
		 * The command line to execute. If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.
		 * Required
		 */
		commandLine: string;
	}

	/** Job preparation settings. */
	export interface JobPreparationFormProperties {

		/**
		 * The command line to execute. If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,
	}
	export function CreateJobPreparationFormGroup() {
		return new FormGroup<JobPreparationFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Job properties. */
	export interface JobProperties {

		/** Caffe2 job settings. */
		caffe2Settings?: Caffe2Settings;

		/** Caffe job settings. */
		caffeSettings?: CaffeSettings;

		/** Chainer job settings. */
		chainerSettings?: ChainerSettings;

		/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
		cluster?: ResourceId;

		/** CNTK (aka Microsoft Cognitive Toolkit) job settings. */
		cntkSettings?: CNTKsettings;

		/** Constraints associated with the Job. */
		constraints?: any;

		/** Docker container settings. */
		containerSettings?: ContainerSettings;

		/** The creation time of the job. */
		creationTime?: Date | null;

		/** Custom MPI job settings. */
		customMpiSettings?: CustomMpiSettings;

		/** Custom tool kit job settings. */
		customToolkitSettings?: CustomToolkitSettings;

		/** A collection of user defined environment variables to be setup for the job. */
		environmentVariables?: Array<EnvironmentVariable>;

		/** Information about the execution of a job. */
		executionInfo?: any;

		/** The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job. */
		executionState?: JobPropertiesExecutionState | null;

		/** The time at which the job entered its current execution state. */
		executionStateTransitionTime?: Date | null;

		/** Specifies the settings for Horovod job. */
		horovodSettings?: HorovodSettings;

		/** A list of input directories for the job. */
		inputDirectories?: Array<InputDirectory>;

		/** A segment of job's output directories path created by Batch AI. Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem. */
		jobOutputDirectoryPathSegment?: string | null;

		/** Job preparation settings. */
		jobPreparation?: JobPreparation;

		/** Details of volumes to mount on the cluster. */
		mountVolumes?: MountVolumes;

		/**
		 * The job will be gang scheduled on that many compute nodes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount?: number | null;

		/** A list of output directories for the job. */
		outputDirectories?: Array<OutputDirectory>;

		/** The provisioned state of the Batch AI job */
		provisioningState?: ExperimentPropertiesProvisioningState | null;

		/** The time at which the job entered its current provisioning state. */
		provisioningStateTransitionTime?: Date | null;

		/** pyTorch job settings. */
		pyTorchSettings?: PyTorchSettings;

		/** Scheduling priority associated with the job. */
		schedulingPriority?: JobBasePropertiesSchedulingPriority | null;

		/** A collection of user defined environment variables with secret values to be setup for the job. Server will never report values of these variables back. */
		secrets?: Array<EnvironmentVariableWithSecretValue>;

		/** The path where the Batch AI service stores stdout, stderror and execution log of the job. */
		stdOutErrPathPrefix?: string | null;

		/** TensorFlow job settings. */
		tensorFlowSettings?: TensorFlowSettings;

		/** The toolkit type of the job. */
		toolType?: JobPropertiesToolType | null;
	}

	/** Job properties. */
	export interface JobPropertiesFormProperties {

		/** Constraints associated with the Job. */
		constraints: FormControl<any | null | undefined>,

		/** The creation time of the job. */
		creationTime: FormControl<Date | null | undefined>,

		/** Information about the execution of a job. */
		executionInfo: FormControl<any | null | undefined>,

		/** The current state of the job. Possible values are: queued - The job is queued and able to run. A job enters this state when it is created, or when it is awaiting a retry after a failed run. running - The job is running on a compute cluster. This includes job-level preparation such as downloading resource files or set up container specified on the job - it does not necessarily mean that the job command line has started executing. terminating - The job is terminated by the user, the terminate operation is in progress. succeeded - The job has completed running successfully and exited with exit code 0. failed - The job has finished unsuccessfully (failed with a non-zero exit code) and has exhausted its retry limit. A job is also marked as failed if an error occurred launching the job. */
		executionState: FormControl<JobPropertiesExecutionState | null | undefined>,

		/** The time at which the job entered its current execution state. */
		executionStateTransitionTime: FormControl<Date | null | undefined>,

		/** A segment of job's output directories path created by Batch AI. Batch AI creates job's output directories under an unique path to avoid conflicts between jobs. This value contains a path segment generated by Batch AI to make the path unique and can be used to find the output directory on the node or mounted filesystem. */
		jobOutputDirectoryPathSegment: FormControl<string | null | undefined>,

		/**
		 * The job will be gang scheduled on that many compute nodes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nodeCount: FormControl<number | null | undefined>,

		/** The provisioned state of the Batch AI job */
		provisioningState: FormControl<ExperimentPropertiesProvisioningState | null | undefined>,

		/** The time at which the job entered its current provisioning state. */
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,

		/** Scheduling priority associated with the job. */
		schedulingPriority: FormControl<JobBasePropertiesSchedulingPriority | null | undefined>,

		/** The path where the Batch AI service stores stdout, stderror and execution log of the job. */
		stdOutErrPathPrefix: FormControl<string | null | undefined>,

		/** The toolkit type of the job. */
		toolType: FormControl<JobPropertiesToolType | null | undefined>,
	}
	export function CreateJobPropertiesFormGroup() {
		return new FormGroup<JobPropertiesFormProperties>({
			constraints: new FormControl<any | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			executionInfo: new FormControl<any | null | undefined>(undefined),
			executionState: new FormControl<JobPropertiesExecutionState | null | undefined>(undefined),
			executionStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			jobOutputDirectoryPathSegment: new FormControl<string | null | undefined>(undefined),
			nodeCount: new FormControl<number | null | undefined>(undefined),
			provisioningState: new FormControl<ExperimentPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
			schedulingPriority: new FormControl<JobBasePropertiesSchedulingPriority | null | undefined>(undefined),
			stdOutErrPathPrefix: new FormControl<string | null | undefined>(undefined),
			toolType: new FormControl<JobPropertiesToolType | null | undefined>(undefined),
		});

	}

	export enum JobPropertiesExecutionState { queued = 'queued', running = 'running', terminating = 'terminating', succeeded = 'succeeded', failed = 'failed' }

	export enum JobPropertiesToolType { cntk = 'cntk', tensorflow = 'tensorflow', caffe = 'caffe', caffe2 = 'caffe2', chainer = 'chainer', horovod = 'horovod', custommpi = 'custommpi', custom = 'custom' }


	/** Key Vault Secret reference. */
	export interface KeyVaultSecretReference {

		/**
		 * The URL referencing a secret in the Key Vault.
		 * Required
		 */
		secretUrl: string;

		/**
		 * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
		 * Required
		 */
		sourceVault: ResourceId;
	}

	/** Key Vault Secret reference. */
	export interface KeyVaultSecretReferenceFormProperties {

		/**
		 * The URL referencing a secret in the Key Vault.
		 * Required
		 */
		secretUrl: FormControl<string | null | undefined>,
	}
	export function CreateKeyVaultSecretReferenceFormGroup() {
		return new FormGroup<KeyVaultSecretReferenceFormProperties>({
			secretUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The List Usages operation response. */
	export interface ListUsagesResult {

		/** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
		nextLink?: string | null;

		/** The list of compute resource usages. */
		value?: Array<Usage>;
	}

	/** The List Usages operation response. */
	export interface ListUsagesResultFormProperties {

		/** The URI to fetch the next page of compute resource usage information. Call ListNext() with this to fetch the next page of compute resource usage information. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListUsagesResultFormGroup() {
		return new FormGroup<ListUsagesResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes Batch AI Resource Usage. */
	export interface Usage {

		/**
		 * The current usage of the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue?: number | null;

		/**
		 * The maximum permitted usage of the resource.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit?: string | null;

		/** The Usage Names. */
		name?: UsageName;

		/** An enum describing the unit of usage measurement. */
		unit?: UsageUnit | null;
	}

	/** Describes Batch AI Resource Usage. */
	export interface UsageFormProperties {

		/**
		 * The current usage of the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		currentValue: FormControl<number | null | undefined>,

		/**
		 * The maximum permitted usage of the resource.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: FormControl<string | null | undefined>,

		/** An enum describing the unit of usage measurement. */
		unit: FormControl<UsageUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<UsageUnit | null | undefined>(undefined),
		});

	}

	export enum UsageUnit { Count = 'Count' }


	/** Manual scale settings for the cluster. */
	export interface ManualScaleSettings {

		/** Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. */
		nodeDeallocationOption?: DeallocationOption | null;

		/**
		 * The desired number of compute nodes in the Cluster. Default is 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNodeCount: number;
	}

	/** Manual scale settings for the cluster. */
	export interface ManualScaleSettingsFormProperties {

		/** Actions which should be performed when compute nodes are removed from the cluster. Possible values are: requeue (default) - Terminate running jobs and requeue them so the jobs will run again. Remove compute nodes as soon as jobs have been terminated; terminate - Terminate running jobs. The jobs will not run again. Remove compute nodes as soon as jobs have been terminated. waitforjobcompletion - Allow currently running jobs to complete. Schedule no new jobs while waiting. Remove compute nodes when all jobs have completed. */
		nodeDeallocationOption: FormControl<DeallocationOption | null | undefined>,

		/**
		 * The desired number of compute nodes in the Cluster. Default is 0.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		targetNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateManualScaleSettingsFormGroup() {
		return new FormGroup<ManualScaleSettingsFormProperties>({
			nodeDeallocationOption: new FormControl<DeallocationOption | null | undefined>(undefined),
			targetNodeCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** File Server mount Information. */
	export interface MountSettings {

		/** Internal IP address of the File Server which can be used to access the File Server from within the subnet. */
		fileServerInternalIP?: string | null;

		/** Public IP address of the File Server which can be used to SSH to the node from outside of the subnet. */
		fileServerPublicIP?: string | null;

		/** Path where the data disks are mounted on the File Server. */
		mountPoint?: string | null;
	}

	/** File Server mount Information. */
	export interface MountSettingsFormProperties {

		/** Internal IP address of the File Server which can be used to access the File Server from within the subnet. */
		fileServerInternalIP: FormControl<string | null | undefined>,

		/** Public IP address of the File Server which can be used to SSH to the node from outside of the subnet. */
		fileServerPublicIP: FormControl<string | null | undefined>,

		/** Path where the data disks are mounted on the File Server. */
		mountPoint: FormControl<string | null | undefined>,
	}
	export function CreateMountSettingsFormGroup() {
		return new FormGroup<MountSettingsFormProperties>({
			fileServerInternalIP: new FormControl<string | null | undefined>(undefined),
			fileServerPublicIP: new FormControl<string | null | undefined>(undefined),
			mountPoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of volumes to mount on the cluster. */
	export interface MountVolumes {

		/** A collection of Azure Blob Containers that are to be mounted to the cluster nodes. */
		azureBlobFileSystems?: Array<AzureBlobFileSystemReference>;

		/** A collection of Azure File Shares that are to be mounted to the cluster nodes. */
		azureFileShares?: Array<AzureFileShareReference>;

		/** A collection of Batch AI File Servers that are to be mounted to the cluster nodes. */
		fileServers?: Array<FileServerReference>;

		/** A collection of unmanaged file systems that are to be mounted to the cluster nodes. */
		unmanagedFileSystems?: Array<UnmanagedFileSystemReference>;
	}

	/** Details of volumes to mount on the cluster. */
	export interface MountVolumesFormProperties {
	}
	export function CreateMountVolumesFormGroup() {
		return new FormGroup<MountVolumesFormProperties>({
		});

	}


	/** Unmanaged file system mounting configuration. */
	export interface UnmanagedFileSystemReference {

		/**
		 * Mount command line. Note, Batch AI will append mount path to the command on its own.
		 * Required
		 */
		mountCommand: string;

		/**
		 * The relative path on the compute node where the unmanaged file system will be mounted. Note that all cluster level unmanaged file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level unmanaged file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: string;
	}

	/** Unmanaged file system mounting configuration. */
	export interface UnmanagedFileSystemReferenceFormProperties {

		/**
		 * Mount command line. Note, Batch AI will append mount path to the command on its own.
		 * Required
		 */
		mountCommand: FormControl<string | null | undefined>,

		/**
		 * The relative path on the compute node where the unmanaged file system will be mounted. Note that all cluster level unmanaged file systems will be mounted under $AZ_BATCHAI_MOUNT_ROOT location and all job level unmanaged file systems will be mounted under $AZ_BATCHAI_JOB_MOUNT_ROOT.
		 * Required
		 */
		relativeMountPath: FormControl<string | null | undefined>,
	}
	export function CreateUnmanagedFileSystemReferenceFormGroup() {
		return new FormGroup<UnmanagedFileSystemReferenceFormProperties>({
			mountCommand: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativeMountPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Node setup settings. */
	export interface NodeSetup {

		/** Details of volumes to mount on the cluster. */
		mountVolumes?: MountVolumes;

		/** Performance counters reporting settings. */
		performanceCountersSettings?: PerformanceCountersSettings;

		/** Specifies a setup task which can be used to customize the compute nodes of the cluster. */
		setupTask?: SetupTask;
	}

	/** Node setup settings. */
	export interface NodeSetupFormProperties {
	}
	export function CreateNodeSetupFormGroup() {
		return new FormGroup<NodeSetupFormProperties>({
		});

	}


	/** Counts of various compute node states on the cluster. */
	export interface NodeStateCounts {

		/**
		 * Number of compute nodes in idle state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleNodeCount?: number | null;

		/**
		 * Number of compute nodes which are leaving the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leavingNodeCount?: number | null;

		/**
		 * Number of compute nodes which are being prepared.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preparingNodeCount?: number | null;

		/**
		 * Number of compute nodes which are running jobs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runningNodeCount?: number | null;

		/**
		 * Number of compute nodes which are in unusable state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unusableNodeCount?: number | null;
	}

	/** Counts of various compute node states on the cluster. */
	export interface NodeStateCountsFormProperties {

		/**
		 * Number of compute nodes in idle state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		idleNodeCount: FormControl<number | null | undefined>,

		/**
		 * Number of compute nodes which are leaving the cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		leavingNodeCount: FormControl<number | null | undefined>,

		/**
		 * Number of compute nodes which are being prepared.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preparingNodeCount: FormControl<number | null | undefined>,

		/**
		 * Number of compute nodes which are running jobs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		runningNodeCount: FormControl<number | null | undefined>,

		/**
		 * Number of compute nodes which are in unusable state.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		unusableNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateNodeStateCountsFormGroup() {
		return new FormGroup<NodeStateCountsFormProperties>({
			idleNodeCount: new FormControl<number | null | undefined>(undefined),
			leavingNodeCount: new FormControl<number | null | undefined>(undefined),
			preparingNodeCount: new FormControl<number | null | undefined>(undefined),
			runningNodeCount: new FormControl<number | null | undefined>(undefined),
			unusableNodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details of a REST API operation */
	export interface Operation {

		/** The object that describes the operation. */
		display?: any;

		/** This is of the format {provider}/{resource}/{operation} */
		name?: string | null;
		origin?: string | null;
		properties?: string | null;
	}

	/** Details of a REST API operation */
	export interface OperationFormProperties {

		/** The object that describes the operation. */
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


	/** Contains the list of all operations supported by BatchAI resource provider */
	export interface OperationListResult {
		nextLink?: string | null;
		value?: Array<Operation>;
	}

	/** Contains the list of all operations supported by BatchAI resource provider */
	export interface OperationListResultFormProperties {
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Performance counters reporting settings. */
	export interface PerformanceCountersSettings {

		/**
		 * Azure Application Insights information for performance counters reporting.
		 * Required
		 */
		appInsightsReference: AppInsightsReference;
	}

	/** Performance counters reporting settings. */
	export interface PerformanceCountersSettingsFormProperties {
	}
	export function CreatePerformanceCountersSettingsFormGroup() {
		return new FormGroup<PerformanceCountersSettingsFormProperties>({
		});

	}


	/** Credentials to access a container image in a private repository. */
	export interface PrivateRegistryCredentials {

		/** User password to login to the docker repository. One of password or passwordSecretReference must be specified. */
		password?: string | null;

		/** Key Vault Secret reference. */
		passwordSecretReference?: KeyVaultSecretReference;

		/**
		 * User name to login to the repository.
		 * Required
		 */
		username: string;
	}

	/** Credentials to access a container image in a private repository. */
	export interface PrivateRegistryCredentialsFormProperties {

		/** User password to login to the docker repository. One of password or passwordSecretReference must be specified. */
		password: FormControl<string | null | undefined>,

		/**
		 * User name to login to the repository.
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePrivateRegistryCredentialsFormGroup() {
		return new FormGroup<PrivateRegistryCredentialsFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A definition of an Azure proxy resource. */
	export interface ProxyResource {

		/** The ID of the resource. */
		id?: string | null;

		/** The name of the resource. */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** A definition of an Azure proxy resource. */
	export interface ProxyResourceFormProperties {

		/** The ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** pyTorch job settings. */
	export interface PyTorchSettings {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs?: string | null;

		/** Type of the communication backend for distributed jobs. Valid values are 'TCP', 'Gloo' or 'MPI'. Not required for non-distributed jobs. */
		communicationBackend?: string | null;

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount?: number | null;

		/** The path to the Python interpreter. */
		pythonInterpreterPath?: string | null;

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: string;
	}

	/** pyTorch job settings. */
	export interface PyTorchSettingsFormProperties {

		/** Command line arguments that need to be passed to the python script. */
		commandLineArgs: FormControl<string | null | undefined>,

		/** Type of the communication backend for distributed jobs. Valid values are 'TCP', 'Gloo' or 'MPI'. Not required for non-distributed jobs. */
		communicationBackend: FormControl<string | null | undefined>,

		/**
		 * Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		processCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: FormControl<string | null | undefined>,
	}
	export function CreatePyTorchSettingsFormGroup() {
		return new FormGroup<PyTorchSettingsFormProperties>({
			commandLineArgs: new FormControl<string | null | undefined>(undefined),
			communicationBackend: new FormControl<string | null | undefined>(undefined),
			processCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Login details to SSH to a compute node in cluster. */
	export interface RemoteLoginInformation {

		/** Public IP address of the compute node. */
		ipAddress?: string | null;

		/** ID of the compute node. */
		nodeId?: string | null;

		/** SSH port number of the node. */
		port?: string | null;
	}

	/** Login details to SSH to a compute node in cluster. */
	export interface RemoteLoginInformationFormProperties {

		/** Public IP address of the compute node. */
		ipAddress: FormControl<string | null | undefined>,

		/** ID of the compute node. */
		nodeId: FormControl<string | null | undefined>,

		/** SSH port number of the node. */
		port: FormControl<string | null | undefined>,
	}
	export function CreateRemoteLoginInformationFormGroup() {
		return new FormGroup<RemoteLoginInformationFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface RemoteLoginInformationListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of returned remote login details. */
		value?: Array<RemoteLoginInformation>;
	}

	/** Values returned by the List operation. */
	export interface RemoteLoginInformationListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRemoteLoginInformationListResultFormGroup() {
		return new FormGroup<RemoteLoginInformationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A definition of an Azure resource. */
	export interface Resource {

		/** The ID of the resource */
		id?: string | null;

		/** The location of the resource */
		location?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The tags of the resource */
		tags?: {[id: string]: string };

		/** The type of the resource */
		type?: string | null;
	}

	/** A definition of an Azure resource. */
	export interface ResourceFormProperties {

		/** The ID of the resource */
		id: FormControl<string | null | undefined>,

		/** The location of the resource */
		location: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource */
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


	/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
	export interface ResourceId {

		/**
		 * The ID of the resource
		 * Required
		 */
		id: string;
	}

	/** Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet. */
	export interface ResourceIdFormProperties {

		/**
		 * The ID of the resource
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdFormGroup() {
		return new FormGroup<ResourceIdFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster. */
	export interface ScaleSettings {

		/** Auto-scale settings for the cluster. The system automatically scales the cluster up and down (within minimumNodeCount and maximumNodeCount) based on the number of queued and running jobs assigned to the cluster. */
		autoScale?: AutoScaleSettings;

		/** Manual scale settings for the cluster. */
		manual?: ManualScaleSettings;
	}

	/** At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster. */
	export interface ScaleSettingsFormProperties {
	}
	export function CreateScaleSettingsFormGroup() {
		return new FormGroup<ScaleSettingsFormProperties>({
		});

	}


	/** Specifies a setup task which can be used to customize the compute nodes of the cluster. */
	export interface SetupTask {

		/**
		 * The command line to be executed on each cluster's node after it being allocated or rebooted. The command is executed in a bash subshell as a root.
		 * Required
		 */
		commandLine: string;

		/** A collection of user defined environment variables to be set for setup task. */
		environmentVariables?: Array<EnvironmentVariable>;

		/** A collection of user defined environment variables with secret values to be set for the setup task. Server will never report values of these variables back. */
		secrets?: Array<EnvironmentVariableWithSecretValue>;

		/**
		 * The prefix of a path where the Batch AI service will upload the stdout, stderr and execution log of the setup task.
		 * Required
		 */
		stdOutErrPathPrefix: string;

		/** A path segment appended by Batch AI to stdOutErrPathPrefix to form a path where stdout, stderr and execution log of the setup task will be uploaded. Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. The full path can be obtained by concatenation of stdOutErrPathPrefix and stdOutErrPathSuffix. */
		stdOutErrPathSuffix?: string | null;
	}

	/** Specifies a setup task which can be used to customize the compute nodes of the cluster. */
	export interface SetupTaskFormProperties {

		/**
		 * The command line to be executed on each cluster's node after it being allocated or rebooted. The command is executed in a bash subshell as a root.
		 * Required
		 */
		commandLine: FormControl<string | null | undefined>,

		/**
		 * The prefix of a path where the Batch AI service will upload the stdout, stderr and execution log of the setup task.
		 * Required
		 */
		stdOutErrPathPrefix: FormControl<string | null | undefined>,

		/** A path segment appended by Batch AI to stdOutErrPathPrefix to form a path where stdout, stderr and execution log of the setup task will be uploaded. Batch AI creates the setup task output directories under an unique path to avoid conflicts between different clusters. The full path can be obtained by concatenation of stdOutErrPathPrefix and stdOutErrPathSuffix. */
		stdOutErrPathSuffix: FormControl<string | null | undefined>,
	}
	export function CreateSetupTaskFormGroup() {
		return new FormGroup<SetupTaskFormProperties>({
			commandLine: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stdOutErrPathPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stdOutErrPathSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSH configuration. */
	export interface SshConfiguration {

		/** List of source IP ranges to allow SSH connection from. The default value is '*' (all source IPs are allowed). Maximum number of IP ranges that can be specified is 400. */
		publicIPsToAllow?: Array<string>;

		/**
		 * Settings for user account that gets created on each on the nodes of a cluster.
		 * Required
		 */
		userAccountSettings: UserAccountSettings;
	}

	/** SSH configuration. */
	export interface SshConfigurationFormProperties {
	}
	export function CreateSshConfigurationFormGroup() {
		return new FormGroup<SshConfigurationFormProperties>({
		});

	}


	/** TensorFlow job settings. */
	export interface TensorFlowSettings {

		/** Command line arguments that need to be passed to the python script for the master task. */
		masterCommandLineArgs?: string | null;

		/** Command line arguments that need to be passed to the python script for the parameter server. Optional for single process jobs. */
		parameterServerCommandLineArgs?: string | null;

		/**
		 * The number of parameter server tasks. If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training. This property can be specified only for distributed TensorFlow training.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterServerCount?: number | null;

		/** The path to the Python interpreter. */
		pythonInterpreterPath?: string | null;

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: string;

		/** Command line arguments that need to be passed to the python script for the worker task. Optional for single process jobs. */
		workerCommandLineArgs?: string | null;

		/**
		 * The number of worker tasks. If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount?: number | null;
	}

	/** TensorFlow job settings. */
	export interface TensorFlowSettingsFormProperties {

		/** Command line arguments that need to be passed to the python script for the master task. */
		masterCommandLineArgs: FormControl<string | null | undefined>,

		/** Command line arguments that need to be passed to the python script for the parameter server. Optional for single process jobs. */
		parameterServerCommandLineArgs: FormControl<string | null | undefined>,

		/**
		 * The number of parameter server tasks. If specified, the value must be less than or equal to nodeCount. If not specified, the default value is equal to 1 for distributed TensorFlow training. This property can be specified only for distributed TensorFlow training.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterServerCount: FormControl<number | null | undefined>,

		/** The path to the Python interpreter. */
		pythonInterpreterPath: FormControl<string | null | undefined>,

		/**
		 * The python script to execute.
		 * Required
		 */
		pythonScriptFilePath: FormControl<string | null | undefined>,

		/** Command line arguments that need to be passed to the python script for the worker task. Optional for single process jobs. */
		workerCommandLineArgs: FormControl<string | null | undefined>,

		/**
		 * The number of worker tasks. If specified, the value must be less than or equal to (nodeCount * numberOfGPUs per VM). If not specified, the default value is equal to nodeCount. This property can be specified only for distributed TensorFlow training.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount: FormControl<number | null | undefined>,
	}
	export function CreateTensorFlowSettingsFormGroup() {
		return new FormGroup<TensorFlowSettingsFormProperties>({
			masterCommandLineArgs: new FormControl<string | null | undefined>(undefined),
			parameterServerCommandLineArgs: new FormControl<string | null | undefined>(undefined),
			parameterServerCount: new FormControl<number | null | undefined>(undefined),
			pythonInterpreterPath: new FormControl<string | null | undefined>(undefined),
			pythonScriptFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workerCommandLineArgs: new FormControl<string | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The toolkit type of the job. */
	export enum ToolType { cntk = 'cntk', tensorflow = 'tensorflow', caffe = 'caffe', caffe2 = 'caffe2', chainer = 'chainer', horovod = 'horovod', custommpi = 'custommpi', custom = 'custom' }


	/** The Usage Names. */
	export interface UsageName {

		/** The localized name of the resource. */
		localizedValue?: string | null;

		/** The name of the resource. */
		value?: string | null;
	}

	/** The Usage Names. */
	export interface UsageNameFormProperties {

		/** The localized name of the resource. */
		localizedValue: FormControl<string | null | undefined>,

		/** The name of the resource. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for user account that gets created on each on the nodes of a cluster. */
	export interface UserAccountSettings {

		/**
		 * Name of the administrator user account which can be used to SSH to nodes.
		 * Required
		 */
		adminUserName: string;

		/** Password of the administrator user account. */
		adminUserPassword?: string | null;

		/** SSH public key of the administrator user account. */
		adminUserSshPublicKey?: string | null;
	}

	/** Settings for user account that gets created on each on the nodes of a cluster. */
	export interface UserAccountSettingsFormProperties {

		/**
		 * Name of the administrator user account which can be used to SSH to nodes.
		 * Required
		 */
		adminUserName: FormControl<string | null | undefined>,

		/** Password of the administrator user account. */
		adminUserPassword: FormControl<string | null | undefined>,

		/** SSH public key of the administrator user account. */
		adminUserSshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountSettingsFormGroup() {
		return new FormGroup<UserAccountSettingsFormProperties>({
			adminUserName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adminUserPassword: new FormControl<string | null | undefined>(undefined),
			adminUserSshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** VM configuration. */
	export interface VirtualMachineConfiguration {

		/** The OS image reference. */
		imageReference?: ImageReference;
	}

	/** VM configuration. */
	export interface VirtualMachineConfigurationFormProperties {
	}
	export function CreateVirtualMachineConfigurationFormGroup() {
		return new FormGroup<VirtualMachineConfigurationFormProperties>({
		});

	}


	/** Batch AI Workspace information. */
	export interface Workspace extends Resource {

		/** Workspace specific properties. */
		properties?: WorkspaceProperties;
	}

	/** Batch AI Workspace information. */
	export interface WorkspaceFormProperties extends ResourceFormProperties {
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workspace creation parameters. */
	export interface WorkspaceCreateParameters {

		/**
		 * The region in which to create the Workspace.
		 * Required
		 */
		location: string;

		/** The user specified tags associated with the Workspace. */
		tags?: {[id: string]: string };
	}

	/** Workspace creation parameters. */
	export interface WorkspaceCreateParametersFormProperties {

		/**
		 * The region in which to create the Workspace.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The user specified tags associated with the Workspace. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWorkspaceCreateParametersFormGroup() {
		return new FormGroup<WorkspaceCreateParametersFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Values returned by the List operation. */
	export interface WorkspaceListResult {

		/** The continuation token. */
		nextLink?: string | null;

		/** The collection of workspaces. */
		value?: Array<Workspace>;
	}

	/** Values returned by the List operation. */
	export interface WorkspaceListResultFormProperties {

		/** The continuation token. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceListResultFormGroup() {
		return new FormGroup<WorkspaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Workspace specific properties. */
	export interface WorkspaceProperties {

		/** Time when the Workspace was created. */
		creationTime?: Date | null;

		/** The provisioned state of the Workspace */
		provisioningState?: ExperimentPropertiesProvisioningState | null;

		/** The time at which the workspace entered its current provisioning state. */
		provisioningStateTransitionTime?: Date | null;
	}

	/** Workspace specific properties. */
	export interface WorkspacePropertiesFormProperties {

		/** Time when the Workspace was created. */
		creationTime: FormControl<Date | null | undefined>,

		/** The provisioned state of the Workspace */
		provisioningState: FormControl<ExperimentPropertiesProvisioningState | null | undefined>,

		/** The time at which the workspace entered its current provisioning state. */
		provisioningStateTransitionTime: FormControl<Date | null | undefined>,
	}
	export function CreateWorkspacePropertiesFormGroup() {
		return new FormGroup<WorkspacePropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			provisioningState: new FormControl<ExperimentPropertiesProvisioningState | null | undefined>(undefined),
			provisioningStateTransitionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Workspace update parameters. */
	export interface WorkspaceUpdateParameters {

		/** The user specified tags associated with the Workspace. */
		tags?: {[id: string]: string };
	}

	/** Workspace update parameters. */
	export interface WorkspaceUpdateParametersFormProperties {

		/** The user specified tags associated with the Workspace. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWorkspaceUpdateParametersFormGroup() {
		return new FormGroup<WorkspaceUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available operations for the Microsoft.BatchAI provider.
		 * Get providers/Microsoft.BatchAI/operations
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.BatchAI/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the current usage information as well as limits for Batch AI resources for given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.BatchAI/locations/{location}/usages
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {string} location The location for which resource usage is queried.
		 * @return {ListUsagesResult} OK
		 */
		Usages_List(api_version: string, subscriptionId: string, location: string): Observable<ListUsagesResult> {
			return this.http.get<ListUsagesResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.BatchAI/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/usages?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of Workspaces associated with the given subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.BatchAI/workspaces
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {WorkspaceListResult} The operation was successful. The response contains a formatted list of workspaces and their properties.
		 */
		Workspaces_List(maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.BatchAI/workspaces?maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a list of Workspaces within the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {WorkspaceListResult} The operation was successful. The response contains a list of workspaces within the resource group.
		 */
		Workspaces_ListByResourceGroup(resourceGroupName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a Workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {Workspace} The operation was successful. The response contains information about the Workspace.
		 */
		Workspaces_Get(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string): Observable<Workspace> {
			return this.http.get<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Workspace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {WorkspaceCreateParameters} requestBody Workspace creation parameters.
		 * @return {Workspace} The operation was successful. The response contains the workspace entity.
		 */
		Workspaces_Create(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string, requestBody: WorkspaceCreateParameters): Observable<Workspace> {
			return this.http.put<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Workspace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		Workspaces_Delete(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates properties of a Workspace.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {WorkspaceUpdateParameters} requestBody Additional parameters for workspace update.
		 * @return {Workspace} The operation was successful. The response contains the Workspace entity.
		 */
		Workspaces_Update(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string, requestBody: WorkspaceUpdateParameters): Observable<Workspace> {
			return this.http.patch<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about Clusters associated with the given Workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {ClusterListResult} The operation was successful. The response contains a list of Clusters and their properties.
		 */
		Clusters_ListByWorkspace(resourceGroupName: string, workspaceName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<ClusterListResult> {
			return this.http.get<ClusterListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a Cluster.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} clusterName The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {Cluster} The operation was successful. The response contains information about the Cluster.
		 */
		Clusters_Get(resourceGroupName: string, workspaceName: string, clusterName: string, api_version: string, subscriptionId: string): Observable<Cluster> {
			return this.http.get<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Cluster in the given Workspace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} clusterName The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {ClusterCreateParameters} requestBody The parameters to provide for the Cluster creation.
		 * @return {Cluster} The operation was successful. The response contains the Cluster entity.
		 */
		Clusters_Create(resourceGroupName: string, workspaceName: string, clusterName: string, api_version: string, subscriptionId: string, requestBody: ClusterCreateParameters): Observable<Cluster> {
			return this.http.put<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Cluster.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} clusterName The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		Clusters_Delete(resourceGroupName: string, workspaceName: string, clusterName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates properties of a Cluster.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} clusterName The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {ClusterUpdateParameters} requestBody Additional parameters for cluster update.
		 * @return {Cluster} The operation was successful. The response contains the Cluster entity.
		 */
		Clusters_Update(resourceGroupName: string, workspaceName: string, clusterName: string, api_version: string, subscriptionId: string, requestBody: ClusterUpdateParameters): Observable<Cluster> {
			return this.http.patch<Cluster>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the IP address, port of all the compute nodes in the Cluster.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/clusters/{clusterName}/listRemoteLoginInformation
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} clusterName The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {RemoteLoginInformationListResult} The operation was successful. The response contains the list of IP addresses.
		 */
		Clusters_ListRemoteLoginInformation(resourceGroupName: string, workspaceName: string, clusterName: string, api_version: string, subscriptionId: string): Observable<RemoteLoginInformationListResult> {
			return this.http.post<RemoteLoginInformationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/clusters/' + (clusterName == null ? '' : encodeURIComponent(clusterName)) + '/listRemoteLoginInformation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets a list of Experiments within the specified Workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {ExperimentListResult} The operation was successful. The response contains a list of experiments within the workspace.
		 */
		Experiments_ListByWorkspace(resourceGroupName: string, workspaceName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<ExperimentListResult> {
			return this.http.get<ExperimentListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about an Experiment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {Experiment} The operation was successful. The response contains information about the experiment.
		 */
		Experiments_Get(resourceGroupName: string, workspaceName: string, experimentName: string, api_version: string, subscriptionId: string): Observable<Experiment> {
			return this.http.get<Experiment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an Experiment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {Experiment} The operation was successful. The response contains the experiment entity.
		 */
		Experiments_Create(resourceGroupName: string, workspaceName: string, experimentName: string, api_version: string, subscriptionId: string): Observable<Experiment> {
			return this.http.put<Experiment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes an Experiment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		Experiments_Delete(resourceGroupName: string, workspaceName: string, experimentName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of Jobs within the specified Experiment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {JobListResult} The operation was successful. The response contains a list of ExperimentJob entities associated with the experiment.
		 */
		Jobs_ListByExperiment(resourceGroupName: string, workspaceName: string, experimentName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<JobListResult> {
			return this.http.get<JobListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a Job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {Job} The operation was successful. The response contains the Job entity.
		 */
		Jobs_Get(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, api_version: string, subscriptionId: string): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Job in the given Experiment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {JobCreateParameters} requestBody The parameters to provide for job creation.
		 * @return {Job} The operation was successful. The response contains the job entity.
		 */
		Jobs_Create(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, api_version: string, subscriptionId: string, requestBody: JobCreateParameters): Observable<Job> {
			return this.http.put<Job>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Job.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		Jobs_Delete(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all directories and files inside the given directory of the Job's output directory (if the output directory is on Azure File Share or Azure Storage Container).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/listOutputFiles
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} outputdirectoryid Id of the job output directory. This is the OutputDirectory-->id parameter that is given by the user during Create Job.
		 * @param {string} directory The path to the directory.
		 * @param {number} linkexpiryinminutes The number of minutes after which the download link will expire.
		 *     Minimum: 5    Maximum: 600
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {FileListResult} The operation was successful. The response contains the list of files.
		 */
		Jobs_ListOutputFiles(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, outputdirectoryid: string, directory: string | null | undefined, linkexpiryinminutes: number | null | undefined, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<FileListResult> {
			return this.http.post<FileListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/listOutputFiles&outputdirectoryid=' + (outputdirectoryid == null ? '' : encodeURIComponent(outputdirectoryid)) + '&directory=' + (directory == null ? '' : encodeURIComponent(directory)) + '&linkexpiryinminutes=' + linkexpiryinminutes + '&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Gets a list of currently existing nodes which were used for the Job execution. The returned information contains the node ID, its public IP and SSH port.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/listRemoteLoginInformation
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {RemoteLoginInformationListResult} The operation was successful. The response contains compute node remote login information.
		 */
		Jobs_ListRemoteLoginInformation(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, api_version: string, subscriptionId: string): Observable<RemoteLoginInformationListResult> {
			return this.http.post<RemoteLoginInformationListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/listRemoteLoginInformation&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Terminates a job.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}/jobs/{jobName}/terminate
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} experimentName The name of the experiment. Experiment names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} jobName The name of the job within the specified resource group. Job names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		Jobs_Terminate(resourceGroupName: string, workspaceName: string, experimentName: string, jobName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/experiments/' + (experimentName == null ? '' : encodeURIComponent(experimentName)) + '/jobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/terminate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of File Servers associated with the specified workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/fileServers
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {number} maxresults The maximum number of items to return in the response. A maximum of 1000 files can be returned.
		 *     Minimum: 1    Maximum: 1000
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {FileServerListResult} The operation was successful. The response contains a list of File Servers and their properties.
		 */
		FileServers_ListByWorkspace(resourceGroupName: string, workspaceName: string, maxresults: number | null | undefined, api_version: string, subscriptionId: string): Observable<FileServerListResult> {
			return this.http.get<FileServerListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/fileServers&maxresults=' + maxresults + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets information about a File Server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/fileServers/{fileServerName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} fileServerName The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {FileServer} The operation was successful. The response contains information about the FileServer.
		 */
		FileServers_Get(resourceGroupName: string, workspaceName: string, fileServerName: string, api_version: string, subscriptionId: string): Observable<FileServer> {
			return this.http.get<FileServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/fileServers/' + (fileServerName == null ? '' : encodeURIComponent(fileServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a File Server in the given workspace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/fileServers/{fileServerName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} fileServerName The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @param {FileServerCreateParameters} requestBody The parameters to provide for File Server creation.
		 * @return {FileServer} The operation was successful. The response contains the file server entity.
		 */
		FileServers_Create(resourceGroupName: string, workspaceName: string, fileServerName: string, api_version: string, subscriptionId: string, requestBody: FileServerCreateParameters): Observable<FileServer> {
			return this.http.put<FileServer>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/fileServers/' + (fileServerName == null ? '' : encodeURIComponent(fileServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a File Server.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/fileServers/{fileServerName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} workspaceName The name of the workspace. Workspace names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} fileServerName The name of the file server within the specified resource group. File server names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Specifies the version of API used for this request.
		 * @param {string} subscriptionId The subscriptionID for the Azure user.
		 * @return {void} The operation was successful.
		 */
		FileServers_Delete(resourceGroupName: string, workspaceName: string, fileServerName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BatchAI/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/fileServers/' + (fileServerName == null ? '' : encodeURIComponent(fileServerName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

