import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about the formal API definition for the app. */
	export interface ApiDefinitionInfo {

		/** The URL of the API definition. */
		url?: string | null;
	}

	/** Information about the formal API definition for the app. */
	export interface ApiDefinitionInfoFormProperties {

		/** The URL of the API definition. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateApiDefinitionInfoFormGroup() {
		return new FormGroup<ApiDefinitionInfoFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure API management (APIM) configuration linked to the app. */
	export interface ApiManagementConfig {

		/** APIM-Api Identifier. */
		id?: string | null;
	}

	/** Azure API management (APIM) configuration linked to the app. */
	export interface ApiManagementConfigFormProperties {

		/** APIM-Api Identifier. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateApiManagementConfigFormGroup() {
		return new FormGroup<ApiManagementConfigFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an App Service Environment. */
	export interface AppServiceEnvironment {

		/** List of comma separated strings describing which VM sizes are allowed for front-ends. */
		allowedMultiSizes?: string | null;

		/** List of comma separated strings describing which VM sizes are allowed for workers. */
		allowedWorkerSizes?: string | null;

		/** API Management Account associated with the App Service Environment. */
		apiManagementAccountId?: string | null;

		/** Custom settings for changing the behavior of the App Service Environment. */
		clusterSettings?: Array<NameValuePair>;

		/** Edition of the metadata database for the App Service Environment, e.g. "Standard". */
		databaseEdition?: string | null;

		/** Service objective of the metadata database for the App Service Environment, e.g. "S0". */
		databaseServiceObjective?: string | null;

		/**
		 * Default Scale Factor for FrontEnds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultFrontEndScaleFactor?: number | null;

		/** DNS suffix of the App Service Environment. */
		dnsSuffix?: string | null;

		/**
		 * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		dynamicCacheEnabled?: boolean | null;

		/** Current total, used, and available worker capacities. */
		environmentCapacities?: Array<StampCapacity>;

		/** True/false indicating whether the App Service Environment is healthy. */
		environmentIsHealthy?: boolean | null;

		/** Detailed message about with results of the last check of the App Service Environment. */
		environmentStatus?: string | null;

		/**
		 * Scale factor for front-ends.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndScaleFactor?: number | null;

		/** Flag that displays whether an ASE has linux workers or not */
		hasLinuxWorkers?: boolean | null;

		/** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
		internalLoadBalancingMode?: AppServiceEnvironmentInternalLoadBalancingMode | null;

		/**
		 * Number of IP SSL addresses reserved for the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ipsslAddressCount?: number | null;

		/** Last deployment action on the App Service Environment. */
		lastAction?: string | null;

		/** Result of the last deployment action on the App Service Environment. */
		lastActionResult?: string | null;

		/**
		 * Location of the App Service Environment, e.g. "West US".
		 * Required
		 */
		location: string;

		/**
		 * Maximum number of VMs in the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumNumberOfMachines?: number | null;

		/**
		 * Number of front-end instances.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		multiRoleCount?: number | null;

		/** Front-end VM size, e.g. "Medium", "Large". */
		multiSize?: string | null;

		/**
		 * Name of the App Service Environment.
		 * Required
		 */
		name: string;

		/** Access control list for controlling traffic to the App Service Environment. */
		networkAccessControlList?: Array<NetworkAccessControlEntry>;

		/** Provisioning state of the App Service Environment. */
		provisioningState?: AppServiceEnvironmentProvisioningState | null;

		/** Resource group of the App Service Environment. */
		resourceGroup?: string | null;

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId?: string | null;

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName?: string | null;

		/** Current status of the App Service Environment. */
		status?: AppServiceEnvironmentStatus | null;

		/** Subscription of the App Service Environment. */
		subscriptionId?: string | null;

		/**
		 * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		suspended?: boolean | null;

		/**
		 * Number of upgrade domains of the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upgradeDomains?: number | null;

		/** User added ip ranges to whitelist on ASE db */
		userWhitelistedIpRanges?: Array<string>;

		/** Description of IP SSL mapping for the App Service Environment. */
		vipMappings?: Array<VirtualIPMapping>;

		/**
		 * Specification for using a Virtual Network.
		 * Required
		 */
		virtualNetwork: VirtualNetworkProfile;

		/** Name of the Virtual Network for the App Service Environment. */
		vnetName?: string | null;

		/** Resource group of the Virtual Network. */
		vnetResourceGroupName?: string | null;

		/** Subnet of the Virtual Network. */
		vnetSubnetName?: string | null;

		/**
		 * Description of worker pools with worker size IDs, VM sizes, and number of workers in each pool.
		 * Required
		 */
		workerPools: Array<WorkerPool>;
	}

	/** Description of an App Service Environment. */
	export interface AppServiceEnvironmentFormProperties {

		/** List of comma separated strings describing which VM sizes are allowed for front-ends. */
		allowedMultiSizes: FormControl<string | null | undefined>,

		/** List of comma separated strings describing which VM sizes are allowed for workers. */
		allowedWorkerSizes: FormControl<string | null | undefined>,

		/** API Management Account associated with the App Service Environment. */
		apiManagementAccountId: FormControl<string | null | undefined>,

		/** Edition of the metadata database for the App Service Environment, e.g. "Standard". */
		databaseEdition: FormControl<string | null | undefined>,

		/** Service objective of the metadata database for the App Service Environment, e.g. "S0". */
		databaseServiceObjective: FormControl<string | null | undefined>,

		/**
		 * Default Scale Factor for FrontEnds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		defaultFrontEndScaleFactor: FormControl<number | null | undefined>,

		/** DNS suffix of the App Service Environment. */
		dnsSuffix: FormControl<string | null | undefined>,

		/**
		 * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		dynamicCacheEnabled: FormControl<boolean | null | undefined>,

		/** True/false indicating whether the App Service Environment is healthy. */
		environmentIsHealthy: FormControl<boolean | null | undefined>,

		/** Detailed message about with results of the last check of the App Service Environment. */
		environmentStatus: FormControl<string | null | undefined>,

		/**
		 * Scale factor for front-ends.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frontEndScaleFactor: FormControl<number | null | undefined>,

		/** Flag that displays whether an ASE has linux workers or not */
		hasLinuxWorkers: FormControl<boolean | null | undefined>,

		/** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
		internalLoadBalancingMode: FormControl<AppServiceEnvironmentInternalLoadBalancingMode | null | undefined>,

		/**
		 * Number of IP SSL addresses reserved for the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ipsslAddressCount: FormControl<number | null | undefined>,

		/** Last deployment action on the App Service Environment. */
		lastAction: FormControl<string | null | undefined>,

		/** Result of the last deployment action on the App Service Environment. */
		lastActionResult: FormControl<string | null | undefined>,

		/**
		 * Location of the App Service Environment, e.g. "West US".
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Maximum number of VMs in the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximumNumberOfMachines: FormControl<number | null | undefined>,

		/**
		 * Number of front-end instances.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		multiRoleCount: FormControl<number | null | undefined>,

		/** Front-end VM size, e.g. "Medium", "Large". */
		multiSize: FormControl<string | null | undefined>,

		/**
		 * Name of the App Service Environment.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Provisioning state of the App Service Environment. */
		provisioningState: FormControl<AppServiceEnvironmentProvisioningState | null | undefined>,

		/** Resource group of the App Service Environment. */
		resourceGroup: FormControl<string | null | undefined>,

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId: FormControl<string | null | undefined>,

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName: FormControl<string | null | undefined>,

		/** Current status of the App Service Environment. */
		status: FormControl<AppServiceEnvironmentStatus | null | undefined>,

		/** Subscription of the App Service Environment. */
		subscriptionId: FormControl<string | null | undefined>,

		/**
		 * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		suspended: FormControl<boolean | null | undefined>,

		/**
		 * Number of upgrade domains of the App Service Environment.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		upgradeDomains: FormControl<number | null | undefined>,

		/** Name of the Virtual Network for the App Service Environment. */
		vnetName: FormControl<string | null | undefined>,

		/** Resource group of the Virtual Network. */
		vnetResourceGroupName: FormControl<string | null | undefined>,

		/** Subnet of the Virtual Network. */
		vnetSubnetName: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentFormGroup() {
		return new FormGroup<AppServiceEnvironmentFormProperties>({
			allowedMultiSizes: new FormControl<string | null | undefined>(undefined),
			allowedWorkerSizes: new FormControl<string | null | undefined>(undefined),
			apiManagementAccountId: new FormControl<string | null | undefined>(undefined),
			databaseEdition: new FormControl<string | null | undefined>(undefined),
			databaseServiceObjective: new FormControl<string | null | undefined>(undefined),
			defaultFrontEndScaleFactor: new FormControl<number | null | undefined>(undefined),
			dnsSuffix: new FormControl<string | null | undefined>(undefined),
			dynamicCacheEnabled: new FormControl<boolean | null | undefined>(undefined),
			environmentIsHealthy: new FormControl<boolean | null | undefined>(undefined),
			environmentStatus: new FormControl<string | null | undefined>(undefined),
			frontEndScaleFactor: new FormControl<number | null | undefined>(undefined),
			hasLinuxWorkers: new FormControl<boolean | null | undefined>(undefined),
			internalLoadBalancingMode: new FormControl<AppServiceEnvironmentInternalLoadBalancingMode | null | undefined>(undefined),
			ipsslAddressCount: new FormControl<number | null | undefined>(undefined),
			lastAction: new FormControl<string | null | undefined>(undefined),
			lastActionResult: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumNumberOfMachines: new FormControl<number | null | undefined>(undefined),
			multiRoleCount: new FormControl<number | null | undefined>(undefined),
			multiSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AppServiceEnvironmentProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultId: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultSecretName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppServiceEnvironmentStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			upgradeDomains: new FormControl<number | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			vnetResourceGroupName: new FormControl<string | null | undefined>(undefined),
			vnetSubnetName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Name value pair. */
	export interface NameValuePair {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}

	/** Name value pair. */
	export interface NameValuePairFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNameValuePairFormGroup() {
		return new FormGroup<NameValuePairFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stamp capacity information. */
	export interface StampCapacity {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity?: string | null;

		/** Shared/dedicated workers. */
		computeMode?: StampCapacityComputeMode | null;

		/**
		 * If <code>true</code>, it includes basic apps.
		 * Basic apps are not used for capacity allocation.
		 */
		excludeFromCapacityAllocation?: boolean | null;

		/** <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>. */
		isApplicableForAllComputeModes?: boolean | null;

		/** Is this a linux stamp capacity */
		isLinux?: boolean | null;

		/** Name of the stamp. */
		name?: string | null;

		/** Shared or Dedicated. */
		siteMode?: string | null;

		/**
		 * Total capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCapacity?: string | null;

		/** Name of the unit. */
		unit?: string | null;

		/** Size of the machines. */
		workerSize?: StampCapacityWorkerSize | null;

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId?: number | null;
	}

	/** Stamp capacity information. */
	export interface StampCapacityFormProperties {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity: FormControl<string | null | undefined>,

		/** Shared/dedicated workers. */
		computeMode: FormControl<StampCapacityComputeMode | null | undefined>,

		/**
		 * If <code>true</code>, it includes basic apps.
		 * Basic apps are not used for capacity allocation.
		 */
		excludeFromCapacityAllocation: FormControl<boolean | null | undefined>,

		/** <code>true</code> if capacity is applicable for all apps; otherwise, <code>false</code>. */
		isApplicableForAllComputeModes: FormControl<boolean | null | undefined>,

		/** Is this a linux stamp capacity */
		isLinux: FormControl<boolean | null | undefined>,

		/** Name of the stamp. */
		name: FormControl<string | null | undefined>,

		/** Shared or Dedicated. */
		siteMode: FormControl<string | null | undefined>,

		/**
		 * Total capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		totalCapacity: FormControl<string | null | undefined>,

		/** Name of the unit. */
		unit: FormControl<string | null | undefined>,

		/** Size of the machines. */
		workerSize: FormControl<StampCapacityWorkerSize | null | undefined>,

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateStampCapacityFormGroup() {
		return new FormGroup<StampCapacityFormProperties>({
			availableCapacity: new FormControl<string | null | undefined>(undefined),
			computeMode: new FormControl<StampCapacityComputeMode | null | undefined>(undefined),
			excludeFromCapacityAllocation: new FormControl<boolean | null | undefined>(undefined),
			isApplicableForAllComputeModes: new FormControl<boolean | null | undefined>(undefined),
			isLinux: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteMode: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			workerSize: new FormControl<StampCapacityWorkerSize | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StampCapacityComputeMode { Shared = 'Shared', Dedicated = 'Dedicated', Dynamic = 'Dynamic' }

	export enum StampCapacityWorkerSize { Small = 'Small', Medium = 'Medium', Large = 'Large', D1 = 'D1', D2 = 'D2', D3 = 'D3', NestedSmall = 'NestedSmall', Default = 'Default' }

	export enum AppServiceEnvironmentInternalLoadBalancingMode { None = 'None', Web = 'Web', Publishing = 'Publishing' }


	/** Network access control entry. */
	export interface NetworkAccessControlEntry {

		/** Action object. */
		action?: NetworkAccessControlEntryAction | null;

		/** Description of network access control entry. */
		description?: string | null;

		/**
		 * Order of precedence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order?: number | null;

		/** Remote subnet. */
		remoteSubnet?: string | null;
	}

	/** Network access control entry. */
	export interface NetworkAccessControlEntryFormProperties {

		/** Action object. */
		action: FormControl<NetworkAccessControlEntryAction | null | undefined>,

		/** Description of network access control entry. */
		description: FormControl<string | null | undefined>,

		/**
		 * Order of precedence.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: FormControl<number | null | undefined>,

		/** Remote subnet. */
		remoteSubnet: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAccessControlEntryFormGroup() {
		return new FormGroup<NetworkAccessControlEntryFormProperties>({
			action: new FormControl<NetworkAccessControlEntryAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			remoteSubnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkAccessControlEntryAction { Permit = 'Permit', Deny = 'Deny' }

	export enum AppServiceEnvironmentProvisioningState { Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', InProgress = 'InProgress', Deleting = 'Deleting' }

	export enum AppServiceEnvironmentStatus { Preparing = 'Preparing', Ready = 'Ready', Scaling = 'Scaling', Deleting = 'Deleting' }


	/** Virtual IP mapping. */
	export interface VirtualIPMapping {

		/** Is virtual IP mapping in use. */
		inUse?: boolean | null;

		/**
		 * Internal HTTP port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		internalHttpPort?: number | null;

		/**
		 * Internal HTTPS port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		internalHttpsPort?: number | null;

		/** name of the service that virtual IP is assigned to */
		serviceName?: string | null;

		/** Virtual IP address. */
		virtualIP?: string | null;
	}

	/** Virtual IP mapping. */
	export interface VirtualIPMappingFormProperties {

		/** Is virtual IP mapping in use. */
		inUse: FormControl<boolean | null | undefined>,

		/**
		 * Internal HTTP port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		internalHttpPort: FormControl<number | null | undefined>,

		/**
		 * Internal HTTPS port.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		internalHttpsPort: FormControl<number | null | undefined>,

		/** name of the service that virtual IP is assigned to */
		serviceName: FormControl<string | null | undefined>,

		/** Virtual IP address. */
		virtualIP: FormControl<string | null | undefined>,
	}
	export function CreateVirtualIPMappingFormGroup() {
		return new FormGroup<VirtualIPMappingFormProperties>({
			inUse: new FormControl<boolean | null | undefined>(undefined),
			internalHttpPort: new FormControl<number | null | undefined>(undefined),
			internalHttpsPort: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			virtualIP: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification for using a Virtual Network. */
	export interface VirtualNetworkProfile {

		/** Resource id of the Virtual Network. */
		id?: string | null;

		/** Name of the Virtual Network (read-only). */
		name?: string | null;

		/** Subnet within the Virtual Network. */
		subnet?: string | null;

		/** Resource type of the Virtual Network (read-only). */
		type?: string | null;
	}

	/** Specification for using a Virtual Network. */
	export interface VirtualNetworkProfileFormProperties {

		/** Resource id of the Virtual Network. */
		id: FormControl<string | null | undefined>,

		/** Name of the Virtual Network (read-only). */
		name: FormControl<string | null | undefined>,

		/** Subnet within the Virtual Network. */
		subnet: FormControl<string | null | undefined>,

		/** Resource type of the Virtual Network (read-only). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkProfileFormGroup() {
		return new FormGroup<VirtualNetworkProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Worker pool of an App Service Environment. */
	export interface WorkerPool {

		/** Shared or dedicated app hosting. */
		computeMode?: StampCapacityComputeMode | null;

		/** Names of all instances in the worker pool (read only). */
		instanceNames?: Array<string>;

		/**
		 * Number of instances in the worker pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount?: number | null;

		/** VM size of the worker pool instances. */
		workerSize?: string | null;

		/**
		 * Worker size ID for referencing this worker pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId?: number | null;
	}

	/** Worker pool of an App Service Environment. */
	export interface WorkerPoolFormProperties {

		/** Shared or dedicated app hosting. */
		computeMode: FormControl<StampCapacityComputeMode | null | undefined>,

		/**
		 * Number of instances in the worker pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerCount: FormControl<number | null | undefined>,

		/** VM size of the worker pool instances. */
		workerSize: FormControl<string | null | undefined>,

		/**
		 * Worker size ID for referencing this worker pool.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateWorkerPoolFormGroup() {
		return new FormGroup<WorkerPoolFormProperties>({
			computeMode: new FormControl<StampCapacityComputeMode | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
			workerSize: new FormControl<string | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** App Service plan. */
	export interface AppServicePlan {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: SkuDescription;
	}

	/** App Service plan. */
	export interface AppServicePlanFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServicePlanFormGroup() {
		return new FormGroup<AppServicePlanFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Description of a SKU for a scalable resource. */
	export interface SkuDescription {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		capabilities?: Array<Capability>;

		/**
		 * Current number of instances assigned to the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity?: number | null;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Description of the App Service plan scale options. */
		skuCapacity?: SkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}

	/** Description of a SKU for a scalable resource. */
	export interface SkuDescriptionFormProperties {

		/**
		 * Current number of instances assigned to the resource.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		capacity: FormControl<number | null | undefined>,

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuDescriptionFormGroup() {
		return new FormGroup<SkuDescriptionFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the capabilities/features allowed for a specific SKU. */
	export interface Capability {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}

	/** Describes the capabilities/features allowed for a specific SKU. */
	export interface CapabilityFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCapabilityFormGroup() {
		return new FormGroup<CapabilityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of the App Service plan scale options. */
	export interface SkuCapacity {

		/**
		 * Default number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default?: number | null;

		/**
		 * Maximum number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum?: number | null;

		/**
		 * Minimum number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}

	/** Description of the App Service plan scale options. */
	export interface SkuCapacityFormProperties {

		/**
		 * Default number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		default: FormControl<number | null | undefined>,

		/**
		 * Maximum number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Minimum number of workers for this App Service plan SKU.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateSkuCapacityFormGroup() {
		return new FormGroup<SkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of App Service plans. */
	export interface AppServicePlanCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<AppServicePlan>;
	}

	/** Collection of App Service plans. */
	export interface AppServicePlanCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServicePlanCollectionFormGroup() {
		return new FormGroup<AppServicePlanCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Actions which to take by the auto-heal module when a rule is triggered. */
	export interface AutoHealActions {

		/** Predefined action to be taken. */
		actionType?: AutoHealActionsActionType | null;

		/**
		 * Custom action to be executed
		 * when an auto heal rule is triggered.
		 */
		customAction?: AutoHealCustomAction;

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime?: string | null;
	}

	/** Actions which to take by the auto-heal module when a rule is triggered. */
	export interface AutoHealActionsFormProperties {

		/** Predefined action to be taken. */
		actionType: FormControl<AutoHealActionsActionType | null | undefined>,

		/**
		 * Minimum time the process must execute
		 * before taking the action
		 */
		minProcessExecutionTime: FormControl<string | null | undefined>,
	}
	export function CreateAutoHealActionsFormGroup() {
		return new FormGroup<AutoHealActionsFormProperties>({
			actionType: new FormControl<AutoHealActionsActionType | null | undefined>(undefined),
			minProcessExecutionTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AutoHealActionsActionType { Recycle = 'Recycle', LogEvent = 'LogEvent', CustomAction = 'CustomAction' }


	/**
	 * Custom action to be executed
	 * when an auto heal rule is triggered.
	 */
	export interface AutoHealCustomAction {

		/** Executable to be run. */
		exe?: string | null;

		/** Parameters for the executable. */
		parameters?: string | null;
	}

	/**
	 * Custom action to be executed
	 * when an auto heal rule is triggered.
	 */
	export interface AutoHealCustomActionFormProperties {

		/** Executable to be run. */
		exe: FormControl<string | null | undefined>,

		/** Parameters for the executable. */
		parameters: FormControl<string | null | undefined>,
	}
	export function CreateAutoHealCustomActionFormGroup() {
		return new FormGroup<AutoHealCustomActionFormProperties>({
			exe: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rules that can be defined for auto-heal. */
	export interface AutoHealRules {

		/** Actions which to take by the auto-heal module when a rule is triggered. */
		actions?: AutoHealActions;

		/** Triggers for auto-heal. */
		triggers?: AutoHealTriggers;
	}

	/** Rules that can be defined for auto-heal. */
	export interface AutoHealRulesFormProperties {
	}
	export function CreateAutoHealRulesFormGroup() {
		return new FormGroup<AutoHealRulesFormProperties>({
		});

	}


	/** Triggers for auto-heal. */
	export interface AutoHealTriggers {

		/**
		 * A rule based on private bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		privateBytesInKB?: number | null;

		/** Trigger based on total requests. */
		requests?: RequestsBasedTrigger;

		/** Trigger based on request execution time. */
		slowRequests?: SlowRequestsBasedTrigger;

		/** A rule based on status codes. */
		statusCodes?: Array<StatusCodesBasedTrigger>;
	}

	/** Triggers for auto-heal. */
	export interface AutoHealTriggersFormProperties {

		/**
		 * A rule based on private bytes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		privateBytesInKB: FormControl<number | null | undefined>,
	}
	export function CreateAutoHealTriggersFormGroup() {
		return new FormGroup<AutoHealTriggersFormProperties>({
			privateBytesInKB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Trigger based on total requests. */
	export interface RequestsBasedTrigger {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;
	}

	/** Trigger based on total requests. */
	export interface RequestsBasedTriggerFormProperties {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,
	}
	export function CreateRequestsBasedTriggerFormGroup() {
		return new FormGroup<RequestsBasedTriggerFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trigger based on request execution time. */
	export interface SlowRequestsBasedTrigger {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/** Time taken. */
		timeTaken?: string | null;
	}

	/** Trigger based on request execution time. */
	export interface SlowRequestsBasedTriggerFormProperties {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/** Time taken. */
		timeTaken: FormControl<string | null | undefined>,
	}
	export function CreateSlowRequestsBasedTriggerFormGroup() {
		return new FormGroup<SlowRequestsBasedTriggerFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			timeTaken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Trigger based on status code. */
	export interface StatusCodesBasedTrigger {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * HTTP status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/**
		 * Request Sub Status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subStatus?: number | null;

		/** Time interval. */
		timeInterval?: string | null;

		/**
		 * Win32 error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		win32Status?: number | null;
	}

	/** Trigger based on status code. */
	export interface StatusCodesBasedTriggerFormProperties {

		/**
		 * Request Count.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * HTTP status code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * Request Sub Status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subStatus: FormControl<number | null | undefined>,

		/** Time interval. */
		timeInterval: FormControl<string | null | undefined>,

		/**
		 * Win32 error code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		win32Status: FormControl<number | null | undefined>,
	}
	export function CreateStatusCodesBasedTriggerFormGroup() {
		return new FormGroup<StatusCodesBasedTriggerFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			subStatus: new FormControl<number | null | undefined>(undefined),
			timeInterval: new FormControl<string | null | undefined>(undefined),
			win32Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information needed for cloning operation. */
	export interface CloningInfo {

		/**
		 * Application setting overrides for cloned app. If specified, these settings override the settings cloned
		 * from source app. Otherwise, application settings from source app are retained.
		 */
		appSettingsOverrides?: {[id: string]: string };

		/** <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>. */
		cloneCustomHostNames?: boolean | null;

		/** <code>true</code> to clone source control from source app; otherwise, <code>false</code>. */
		cloneSourceControl?: boolean | null;

		/** <code>true</code> to configure load balancing for source and destination app. */
		configureLoadBalancing?: boolean | null;

		/**
		 * Correlation ID of cloning operation. This ID ties multiple cloning operations
		 * together to use the same snapshot.
		 */
		correlationId?: string | null;

		/** App Service Environment. */
		hostingEnvironment?: string | null;

		/** <code>true</code> to overwrite destination app; otherwise, <code>false</code>. */
		overwrite?: boolean | null;

		/**
		 * ARM resource ID of the source app. App resource ID is of the form
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
		 * Required
		 */
		sourceWebAppId: string;

		/** Location of source app ex: West US or North Europe */
		sourceWebAppLocation?: string | null;

		/**
		 * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
		 */
		trafficManagerProfileId?: string | null;

		/** Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. */
		trafficManagerProfileName?: string | null;
	}

	/** Information needed for cloning operation. */
	export interface CloningInfoFormProperties {

		/**
		 * Application setting overrides for cloned app. If specified, these settings override the settings cloned
		 * from source app. Otherwise, application settings from source app are retained.
		 */
		appSettingsOverrides: FormControl<{[id: string]: string } | null | undefined>,

		/** <code>true</code> to clone custom hostnames from source app; otherwise, <code>false</code>. */
		cloneCustomHostNames: FormControl<boolean | null | undefined>,

		/** <code>true</code> to clone source control from source app; otherwise, <code>false</code>. */
		cloneSourceControl: FormControl<boolean | null | undefined>,

		/** <code>true</code> to configure load balancing for source and destination app. */
		configureLoadBalancing: FormControl<boolean | null | undefined>,

		/**
		 * Correlation ID of cloning operation. This ID ties multiple cloning operations
		 * together to use the same snapshot.
		 */
		correlationId: FormControl<string | null | undefined>,

		/** App Service Environment. */
		hostingEnvironment: FormControl<string | null | undefined>,

		/** <code>true</code> to overwrite destination app; otherwise, <code>false</code>. */
		overwrite: FormControl<boolean | null | undefined>,

		/**
		 * ARM resource ID of the source app. App resource ID is of the form
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots.
		 * Required
		 */
		sourceWebAppId: FormControl<string | null | undefined>,

		/** Location of source app ex: West US or North Europe */
		sourceWebAppLocation: FormControl<string | null | undefined>,

		/**
		 * ARM resource ID of the Traffic Manager profile to use, if it exists. Traffic Manager resource ID is of the form
		 * /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName}.
		 */
		trafficManagerProfileId: FormControl<string | null | undefined>,

		/** Name of Traffic Manager profile to create. This is only needed if Traffic Manager profile does not already exist. */
		trafficManagerProfileName: FormControl<string | null | undefined>,
	}
	export function CreateCloningInfoFormGroup() {
		return new FormGroup<CloningInfoFormProperties>({
			appSettingsOverrides: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			cloneCustomHostNames: new FormControl<boolean | null | undefined>(undefined),
			cloneSourceControl: new FormControl<boolean | null | undefined>(undefined),
			configureLoadBalancing: new FormControl<boolean | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			hostingEnvironment: new FormControl<string | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
			sourceWebAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceWebAppLocation: new FormControl<string | null | undefined>(undefined),
			trafficManagerProfileId: new FormControl<string | null | undefined>(undefined),
			trafficManagerProfileName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Database connection string information. */
	export interface ConnStringInfo {

		/** Connection string value. */
		connectionString?: string | null;

		/** Name of connection string. */
		name?: string | null;

		/** Type of database. */
		type?: ConnStringInfoType | null;
	}

	/** Database connection string information. */
	export interface ConnStringInfoFormProperties {

		/** Connection string value. */
		connectionString: FormControl<string | null | undefined>,

		/** Name of connection string. */
		name: FormControl<string | null | undefined>,

		/** Type of database. */
		type: FormControl<ConnStringInfoType | null | undefined>,
	}
	export function CreateConnStringInfoFormGroup() {
		return new FormGroup<ConnStringInfoFormProperties>({
			connectionString: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ConnStringInfoType | null | undefined>(undefined),
		});

	}

	export enum ConnStringInfoType { MySql = 'MySql', SQLServer = 'SQLServer', SQLAzure = 'SQLAzure', Custom = 'Custom', NotificationHub = 'NotificationHub', ServiceBus = 'ServiceBus', EventHub = 'EventHub', ApiHub = 'ApiHub', DocDb = 'DocDb', RedisCache = 'RedisCache', PostgreSQL = 'PostgreSQL' }


	/** Cross-Origin Resource Sharing (CORS) settings for the app. */
	export interface CorsSettings {

		/**
		 * Gets or sets the list of origins that should be allowed to make cross-origin
		 * calls (for example: http://example.com:12345). Use "*" to allow all.
		 */
		allowedOrigins?: Array<string>;

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials?: boolean | null;
	}

	/** Cross-Origin Resource Sharing (CORS) settings for the app. */
	export interface CorsSettingsFormProperties {

		/**
		 * Gets or sets whether CORS requests with credentials are allowed. See
		 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Requests_with_credentials
		 * for more details.
		 */
		supportCredentials: FormControl<boolean | null | undefined>,
	}
	export function CreateCorsSettingsFormGroup() {
		return new FormGroup<CorsSettingsFormProperties>({
			supportCredentials: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Collection of Azure resource manager operation metadata. */
	export interface CsmOperationCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<CsmOperationDescription>;
	}

	/** Collection of Azure resource manager operation metadata. */
	export interface CsmOperationCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCsmOperationCollectionFormGroup() {
		return new FormGroup<CsmOperationCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an operation available for Microsoft.Web resource provider. */
	export interface CsmOperationDescription {

		/** Meta data about operation used for display in portal. */
		display?: CsmOperationDisplay;
		name?: string | null;
		origin?: string | null;

		/** Properties available for a Microsoft.Web resource provider operation. */
		properties?: CsmOperationDescriptionProperties;
	}

	/** Description of an operation available for Microsoft.Web resource provider. */
	export interface CsmOperationDescriptionFormProperties {
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
	}
	export function CreateCsmOperationDescriptionFormGroup() {
		return new FormGroup<CsmOperationDescriptionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meta data about operation used for display in portal. */
	export interface CsmOperationDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}

	/** Meta data about operation used for display in portal. */
	export interface CsmOperationDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateCsmOperationDisplayFormGroup() {
		return new FormGroup<CsmOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties available for a Microsoft.Web resource provider operation. */
	export interface CsmOperationDescriptionProperties {

		/** Resource metrics service provided by Microsoft.Insights resource provider. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Properties available for a Microsoft.Web resource provider operation. */
	export interface CsmOperationDescriptionPropertiesFormProperties {
	}
	export function CreateCsmOperationDescriptionPropertiesFormGroup() {
		return new FormGroup<CsmOperationDescriptionPropertiesFormProperties>({
		});

	}


	/** Resource metrics service provided by Microsoft.Insights resource provider. */
	export interface ServiceSpecification {
		logSpecifications?: Array<LogSpecification>;
		metricSpecifications?: Array<MetricSpecification>;
	}

	/** Resource metrics service provided by Microsoft.Insights resource provider. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** Log Definition of a single resource metric. */
	export interface LogSpecification {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}

	/** Log Definition of a single resource metric. */
	export interface LogSpecificationFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogSpecificationFormGroup() {
		return new FormGroup<LogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition of a single resource metric. */
	export interface MetricSpecification {
		aggregationType?: string | null;
		availabilities?: Array<MetricAvailability>;
		category?: string | null;
		dimensions?: Array<Dimension>;
		displayDescription?: string | null;
		displayName?: string | null;
		enableRegionalMdmAccount?: boolean | null;
		fillGapWithZero?: boolean | null;
		isInternal?: boolean | null;
		metricFilterPattern?: string | null;
		name?: string | null;
		sourceMdmAccount?: string | null;
		sourceMdmNamespace?: string | null;
		supportedTimeGrainTypes?: Array<string>;
		supportsInstanceLevelAggregation?: boolean | null;
		unit?: string | null;
	}

	/** Definition of a single resource metric. */
	export interface MetricSpecificationFormProperties {
		aggregationType: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		displayDescription: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enableRegionalMdmAccount: FormControl<boolean | null | undefined>,
		fillGapWithZero: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		metricFilterPattern: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceMdmAccount: FormControl<string | null | undefined>,
		sourceMdmNamespace: FormControl<string | null | undefined>,
		supportsInstanceLevelAggregation: FormControl<boolean | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricSpecificationFormGroup() {
		return new FormGroup<MetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableRegionalMdmAccount: new FormControl<boolean | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			metricFilterPattern: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceMdmAccount: new FormControl<string | null | undefined>(undefined),
			sourceMdmNamespace: new FormControl<string | null | undefined>(undefined),
			supportsInstanceLevelAggregation: new FormControl<boolean | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Retention policy of a resource metric. */
	export interface MetricAvailability {
		blobDuration?: string | null;
		timeGrain?: string | null;
	}

	/** Retention policy of a resource metric. */
	export interface MetricAvailabilityFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateMetricAvailabilityFormGroup() {
		return new FormGroup<MetricAvailabilityFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app, 
	 * where instance name is dimension of the metric HTTP request
	 */
	export interface Dimension {
		displayName?: string | null;
		internalName?: string | null;
		name?: string | null;
		toBeExportedForShoebox?: boolean | null;
	}

	/**
	 * Dimension of a resource metric. For e.g. instance specific HTTP requests for a web app, 
	 * where instance name is dimension of the metric HTTP request
	 */
	export interface DimensionFormProperties {
		displayName: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Usage of the quota resource. */
	export interface CsmUsageQuota {

		/**
		 * The current value of the resource counter.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		currentValue?: string | null;

		/**
		 * The resource limit.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit?: string | null;

		/** Localizable string object containing the name and a localized value. */
		name?: LocalizableString;

		/** Next reset time for the resource counter. */
		nextResetTime?: Date | null;

		/** Units of measurement for the quota resource. */
		unit?: string | null;
	}

	/** Usage of the quota resource. */
	export interface CsmUsageQuotaFormProperties {

		/**
		 * The current value of the resource counter.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		currentValue: FormControl<string | null | undefined>,

		/**
		 * The resource limit.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		limit: FormControl<string | null | undefined>,

		/** Next reset time for the resource counter. */
		nextResetTime: FormControl<Date | null | undefined>,

		/** Units of measurement for the quota resource. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateCsmUsageQuotaFormGroup() {
		return new FormGroup<CsmUsageQuotaFormProperties>({
			currentValue: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			nextResetTime: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Localizable string object containing the name and a localized value. */
	export interface LocalizableString {

		/** Localized name. */
		localizedValue?: string | null;

		/** Non-localized name. */
		value?: string | null;
	}

	/** Localizable string object containing the name and a localized value. */
	export interface LocalizableStringFormProperties {

		/** Localized name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Non-localized name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateLocalizableStringFormGroup() {
		return new FormGroup<LocalizableStringFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of CSM usage quotas. */
	export interface CsmUsageQuotaCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<CsmUsageQuota>;
	}

	/** Collection of CSM usage quotas. */
	export interface CsmUsageQuotaCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCsmUsageQuotaCollectionFormGroup() {
		return new FormGroup<CsmUsageQuotaCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App Service error response. */
	export interface DefaultErrorResponse {

		/** Error model. */
		error?: DefaultErrorResponseError;
	}

	/** App Service error response. */
	export interface DefaultErrorResponseFormProperties {
	}
	export function CreateDefaultErrorResponseFormGroup() {
		return new FormGroup<DefaultErrorResponseFormProperties>({
		});

	}

	export interface DefaultErrorResponseError {

		/** Standardized string to programmatically identify the error. */
		code?: string | null;
		DefaultErrorResponseErrorDetails?: Array<DefaultErrorResponseErrorDetails>;

		/** More information to debug error. */
		innererror?: string | null;

		/** Detailed error description and debugging information. */
		message?: string | null;

		/** Detailed error description and debugging information. */
		target?: string | null;
	}
	export interface DefaultErrorResponseErrorFormProperties {

		/** Standardized string to programmatically identify the error. */
		code: FormControl<string | null | undefined>,

		/** More information to debug error. */
		innererror: FormControl<string | null | undefined>,

		/** Detailed error description and debugging information. */
		message: FormControl<string | null | undefined>,

		/** Detailed error description and debugging information. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDefaultErrorResponseErrorFormGroup() {
		return new FormGroup<DefaultErrorResponseErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			innererror: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DefaultErrorResponseErrorDetails {

		/** Standardized string to programmatically identify the error. */
		code?: string | null;

		/** Detailed error description and debugging information. */
		message?: string | null;

		/** Detailed error description and debugging information. */
		target?: string | null;
	}
	export interface DefaultErrorResponseErrorDetailsFormProperties {

		/** Standardized string to programmatically identify the error. */
		code: FormControl<string | null | undefined>,

		/** Detailed error description and debugging information. */
		message: FormControl<string | null | undefined>,

		/** Detailed error description and debugging information. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateDefaultErrorResponseErrorDetailsFormGroup() {
		return new FormGroup<DefaultErrorResponseErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A deleted app. */
	export interface DeletedSite {

		/** DeletedSite resource specific properties */
		properties?: any;
	}

	/** A deleted app. */
	export interface DeletedSiteFormProperties {

		/** DeletedSite resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDeletedSiteFormGroup() {
		return new FormGroup<DeletedSiteFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Body of the error response returned from the API. */
	export interface ErrorEntity {

		/** Basic error code. */
		code?: string | null;

		/** Type of error. */
		extendedCode?: string | null;

		/** Inner errors. */
		innerErrors?: Array<ErrorEntity>;

		/** Any details of the error. */
		message?: string | null;

		/** Message template. */
		messageTemplate?: string | null;

		/** Parameters for the template. */
		parameters?: Array<string>;
	}

	/** Body of the error response returned from the API. */
	export interface ErrorEntityFormProperties {

		/** Basic error code. */
		code: FormControl<string | null | undefined>,

		/** Type of error. */
		extendedCode: FormControl<string | null | undefined>,

		/** Any details of the error. */
		message: FormControl<string | null | undefined>,

		/** Message template. */
		messageTemplate: FormControl<string | null | undefined>,
	}
	export function CreateErrorEntityFormGroup() {
		return new FormGroup<ErrorEntityFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			extendedCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Routing rules in production experiments. */
	export interface Experiments {

		/** List of ramp-up rules. */
		rampUpRules?: Array<RampUpRule>;
	}

	/** Routing rules in production experiments. */
	export interface ExperimentsFormProperties {
	}
	export function CreateExperimentsFormGroup() {
		return new FormGroup<ExperimentsFormProperties>({
		});

	}


	/** Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance. */
	export interface RampUpRule {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName?: string | null;

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl?: string | null;

		/**
		 * Specifies interval in minutes to reevaluate ReroutePercentage.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		changeIntervalInMinutes?: number | null;

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 * Type: double
		 */
		changeStep?: number | null;

		/**
		 * Specifies upper boundary below which ReroutePercentage will stay.
		 * Type: double
		 */
		maxReroutePercentage?: number | null;

		/**
		 * Specifies lower boundary above which ReroutePercentage will stay.
		 * Type: double
		 */
		minReroutePercentage?: number | null;

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name?: string | null;

		/**
		 * Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
		 * Type: double
		 */
		reroutePercentage?: number | null;
	}

	/** Routing rules for ramp up testing. This rule allows to redirect static traffic % to a slot or to gradually change routing % based on performance. */
	export interface RampUpRuleFormProperties {

		/** Hostname of a slot to which the traffic will be redirected if decided to. E.g. myapp-stage.azurewebsites.net. */
		actionHostName: FormControl<string | null | undefined>,

		/**
		 * Custom decision algorithm can be provided in TiPCallback site extension which URL can be specified. See TiPCallback site extension for the scaffold and contracts.
		 * https://www.siteextensions.net/packages/TiPCallback/
		 */
		changeDecisionCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * Specifies interval in minutes to reevaluate ReroutePercentage.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		changeIntervalInMinutes: FormControl<number | null | undefined>,

		/**
		 * In auto ramp up scenario this is the step to add/remove from <code>ReroutePercentage</code> until it reaches \n<code>MinReroutePercentage</code> or
		 * <code>MaxReroutePercentage</code>. Site metrics are checked every N minutes specified in <code>ChangeIntervalInMinutes</code>.\nCustom decision algorithm
		 * can be provided in TiPCallback site extension which URL can be specified in <code>ChangeDecisionCallbackUrl</code>.
		 * Type: double
		 */
		changeStep: FormControl<number | null | undefined>,

		/**
		 * Specifies upper boundary below which ReroutePercentage will stay.
		 * Type: double
		 */
		maxReroutePercentage: FormControl<number | null | undefined>,

		/**
		 * Specifies lower boundary above which ReroutePercentage will stay.
		 * Type: double
		 */
		minReroutePercentage: FormControl<number | null | undefined>,

		/** Name of the routing rule. The recommended name would be to point to the slot which will receive the traffic in the experiment. */
		name: FormControl<string | null | undefined>,

		/**
		 * Percentage of the traffic which will be redirected to <code>ActionHostName</code>.
		 * Type: double
		 */
		reroutePercentage: FormControl<number | null | undefined>,
	}
	export function CreateRampUpRuleFormGroup() {
		return new FormGroup<RampUpRuleFormProperties>({
			actionHostName: new FormControl<string | null | undefined>(undefined),
			changeDecisionCallbackUrl: new FormControl<string | null | undefined>(undefined),
			changeIntervalInMinutes: new FormControl<number | null | undefined>(undefined),
			changeStep: new FormControl<number | null | undefined>(undefined),
			maxReroutePercentage: new FormControl<number | null | undefined>(undefined),
			minReroutePercentage: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reroutePercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
	 * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
	 */
	export interface HandlerMapping {

		/** Command-line arguments to be passed to the script processor. */
		arguments?: string | null;

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension?: string | null;

		/** The absolute path to the FastCGI application. */
		scriptProcessor?: string | null;
	}

	/**
	 * The IIS handler mappings used to define which handler processes HTTP requests with certain extension. 
	 * For example, it is used to configure php-cgi.exe process to handle all HTTP requests with *.php extension.
	 */
	export interface HandlerMappingFormProperties {

		/** Command-line arguments to be passed to the script processor. */
		arguments: FormControl<string | null | undefined>,

		/** Requests with this extension will be handled using the specified FastCGI application. */
		extension: FormControl<string | null | undefined>,

		/** The absolute path to the FastCGI application. */
		scriptProcessor: FormControl<string | null | undefined>,
	}
	export function CreateHandlerMappingFormGroup() {
		return new FormGroup<HandlerMappingFormProperties>({
			arguments: new FormControl<string | null | undefined>(undefined),
			extension: new FormControl<string | null | undefined>(undefined),
			scriptProcessor: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SSL-enabled hostname. */
	export interface HostNameSslState {

		/** Indicates whether the hostname is a standard or repository hostname. */
		hostType?: HostNameSslStateHostType | null;

		/** Hostname. */
		name?: string | null;

		/** SSL type. */
		sslState?: HostNameSslStateSslState | null;

		/** SSL certificate thumbprint. */
		thumbprint?: string | null;

		/** Set to <code>true</code> to update existing hostname. */
		toUpdate?: boolean | null;

		/** Virtual IP address assigned to the hostname if IP based SSL is enabled. */
		virtualIP?: string | null;
	}

	/** SSL-enabled hostname. */
	export interface HostNameSslStateFormProperties {

		/** Indicates whether the hostname is a standard or repository hostname. */
		hostType: FormControl<HostNameSslStateHostType | null | undefined>,

		/** Hostname. */
		name: FormControl<string | null | undefined>,

		/** SSL type. */
		sslState: FormControl<HostNameSslStateSslState | null | undefined>,

		/** SSL certificate thumbprint. */
		thumbprint: FormControl<string | null | undefined>,

		/** Set to <code>true</code> to update existing hostname. */
		toUpdate: FormControl<boolean | null | undefined>,

		/** Virtual IP address assigned to the hostname if IP based SSL is enabled. */
		virtualIP: FormControl<string | null | undefined>,
	}
	export function CreateHostNameSslStateFormGroup() {
		return new FormGroup<HostNameSslStateFormProperties>({
			hostType: new FormControl<HostNameSslStateHostType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sslState: new FormControl<HostNameSslStateSslState | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			toUpdate: new FormControl<boolean | null | undefined>(undefined),
			virtualIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HostNameSslStateHostType { Standard = 'Standard', Repository = 'Repository' }

	export enum HostNameSslStateSslState { Disabled = 'Disabled', SniEnabled = 'SniEnabled', IpBasedEnabled = 'IpBasedEnabled' }


	/** Specification for an App Service Environment to use for this resource. */
	export interface HostingEnvironmentProfile {

		/** Resource ID of the App Service Environment. */
		id?: string | null;

		/** Name of the App Service Environment. */
		name?: string | null;

		/** Resource type of the App Service Environment. */
		type?: string | null;
	}

	/** Specification for an App Service Environment to use for this resource. */
	export interface HostingEnvironmentProfileFormProperties {

		/** Resource ID of the App Service Environment. */
		id: FormControl<string | null | undefined>,

		/** Name of the App Service Environment. */
		name: FormControl<string | null | undefined>,

		/** Resource type of the App Service Environment. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateHostingEnvironmentProfileFormGroup() {
		return new FormGroup<HostingEnvironmentProfileFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hybrid Connection contract. This is used to configure a Hybrid Connection. */
	export interface HybridConnection {

		/** HybridConnection resource specific properties */
		properties?: any;
	}

	/** Hybrid Connection contract. This is used to configure a Hybrid Connection. */
	export interface HybridConnectionFormProperties {

		/** HybridConnection resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateHybridConnectionFormGroup() {
		return new FormGroup<HybridConnectionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A domain specific resource identifier. */
	export interface Identifier {

		/** Identifier resource specific properties */
		properties?: any;
	}

	/** A domain specific resource identifier. */
	export interface IdentifierFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of identifiers. */
	export interface IdentifierCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Identifier>;
	}

	/** Collection of identifiers. */
	export interface IdentifierCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierCollectionFormGroup() {
		return new FormGroup<IdentifierCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IP security restriction on an app. */
	export interface IpSecurityRestriction {

		/** Allow or Deny access for this IP range. */
		action?: string | null;

		/** IP restriction rule description. */
		description?: string | null;

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress?: string | null;

		/** IP restriction rule name. */
		name?: string | null;

		/**
		 * Priority of IP restriction rule.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask?: string | null;

		/**
		 * (internal) Subnet traffic tag
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnetTrafficTag?: number | null;

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag?: IpSecurityRestrictionTag | null;

		/** Virtual network resource id */
		vnetSubnetResourceId?: string | null;

		/**
		 * (internal) Vnet traffic tag
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vnetTrafficTag?: number | null;
	}

	/** IP security restriction on an app. */
	export interface IpSecurityRestrictionFormProperties {

		/** Allow or Deny access for this IP range. */
		action: FormControl<string | null | undefined>,

		/** IP restriction rule description. */
		description: FormControl<string | null | undefined>,

		/**
		 * IP address the security restriction is valid for.
		 * It can be in form of pure ipv4 address (required SubnetMask property) or
		 * CIDR notation such as ipv4/mask (leading bit match). For CIDR,
		 * SubnetMask property must not be specified.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/** IP restriction rule name. */
		name: FormControl<string | null | undefined>,

		/**
		 * Priority of IP restriction rule.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,

		/** Subnet mask for the range of IP addresses the restriction is valid for. */
		subnetMask: FormControl<string | null | undefined>,

		/**
		 * (internal) Subnet traffic tag
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		subnetTrafficTag: FormControl<number | null | undefined>,

		/** Defines what this IP filter will be used for. This is to support IP filtering on proxies. */
		tag: FormControl<IpSecurityRestrictionTag | null | undefined>,

		/** Virtual network resource id */
		vnetSubnetResourceId: FormControl<string | null | undefined>,

		/**
		 * (internal) Vnet traffic tag
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		vnetTrafficTag: FormControl<number | null | undefined>,
	}
	export function CreateIpSecurityRestrictionFormGroup() {
		return new FormGroup<IpSecurityRestrictionFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			subnetMask: new FormControl<string | null | undefined>(undefined),
			subnetTrafficTag: new FormControl<number | null | undefined>(undefined),
			tag: new FormControl<IpSecurityRestrictionTag | null | undefined>(undefined),
			vnetSubnetResourceId: new FormControl<string | null | undefined>(undefined),
			vnetTrafficTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum IpSecurityRestrictionTag { Default = 'Default', XffProxy = 'XffProxy' }


	/** Managed service identity. */
	export interface ManagedServiceIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: ManagedServiceIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: ManagedServiceIdentityUserAssignedIdentities };
	}

	/** Managed service identity. */
	export interface ManagedServiceIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<ManagedServiceIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: ManagedServiceIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateManagedServiceIdentityFormGroup() {
		return new FormGroup<ManagedServiceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedServiceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: ManagedServiceIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum ManagedServiceIdentityType { None = 'None', SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned' }

	export interface ManagedServiceIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface ManagedServiceIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateManagedServiceIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<ManagedServiceIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies an object. */
	export interface NameIdentifier {

		/** Name of the object. */
		name?: string | null;
	}

	/** Identifies an object. */
	export interface NameIdentifierFormProperties {

		/** Name of the object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNameIdentifierFormGroup() {
		return new FormGroup<NameIdentifierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An operation on a resource. */
	export interface Operation {

		/** Time when operation has started. */
		createdTime?: Date | null;

		/** Any errors associate with the operation. */
		errors?: Array<ErrorEntity>;

		/** Time when operation will expire. */
		expirationTime?: Date | null;

		/** Applicable only for stamp operation ids. */
		geoMasterOperationId?: string | null;

		/** Operation ID. */
		id?: string | null;

		/** Time when operation has been updated. */
		modifiedTime?: Date | null;

		/** Operation name. */
		name?: string | null;

		/** The current status of the operation. */
		status?: OperationStatus | null;
	}

	/** An operation on a resource. */
	export interface OperationFormProperties {

		/** Time when operation has started. */
		createdTime: FormControl<Date | null | undefined>,

		/** Time when operation will expire. */
		expirationTime: FormControl<Date | null | undefined>,

		/** Applicable only for stamp operation ids. */
		geoMasterOperationId: FormControl<string | null | undefined>,

		/** Operation ID. */
		id: FormControl<string | null | undefined>,

		/** Time when operation has been updated. */
		modifiedTime: FormControl<Date | null | undefined>,

		/** Operation name. */
		name: FormControl<string | null | undefined>,

		/** The current status of the operation. */
		status: FormControl<OperationStatus | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			geoMasterOperationId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<OperationStatus | null | undefined>(undefined),
		});

	}

	export enum OperationStatus { InProgress = 'InProgress', Failed = 'Failed', Succeeded = 'Succeeded', TimedOut = 'TimedOut', Created = 'Created' }


	/** Azure proxy only resource. This resource is not tracked by Azure Resource Manager. */
	export interface ProxyOnlyResource {

		/** Resource Id. */
		id?: string | null;

		/** Kind of resource. */
		kind?: string | null;

		/** Resource Name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** Azure proxy only resource. This resource is not tracked by Azure Resource Manager. */
	export interface ProxyOnlyResourceFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource. */
		kind: FormControl<string | null | undefined>,

		/** Resource Name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyOnlyResourceFormGroup() {
		return new FormGroup<ProxyOnlyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Push settings for the App. */
	export interface PushSettings {

		/** PushSettings resource specific properties */
		properties?: any;
	}

	/** Push settings for the App. */
	export interface PushSettingsFormProperties {

		/** PushSettings resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePushSettingsFormGroup() {
		return new FormGroup<PushSettingsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Azure resource. This resource is tracked in Azure Resource Manager */
	export interface Resource {

		/** Resource Id. */
		id?: string | null;

		/** Kind of resource. */
		kind?: string | null;

		/**
		 * Resource Location.
		 * Required
		 */
		location: string;

		/** Resource Name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Azure resource. This resource is tracked in Azure Resource Manager */
	export interface ResourceFormProperties {

		/** Resource Id. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource. */
		kind: FormControl<string | null | undefined>,

		/**
		 * Resource Location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource Name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A web app, a mobile app backend, or an API app. */
	export interface Site {

		/** Managed service identity. */
		identity?: ManagedServiceIdentity;

		/** Site resource specific properties */
		properties?: any;
	}

	/** A web app, a mobile app backend, or an API app. */
	export interface SiteFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Configuration of an App Service app. */
	export interface SiteConfig {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn?: boolean | null;

		/** Information about the formal API definition for the app. */
		apiDefinition?: ApiDefinitionInfo;

		/** Azure API management (APIM) configuration linked to the app. */
		apiManagementConfig?: ApiManagementConfig;

		/** App command line to launch. */
		appCommandLine?: string | null;

		/** Application settings. */
		appSettings?: Array<NameValuePair>;

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled?: boolean | null;

		/** Rules that can be defined for auto-heal. */
		autoHealRules?: AutoHealRules;

		/** Auto-swap slot name. */
		autoSwapSlotName?: string | null;

		/** Connection strings. */
		connectionStrings?: Array<ConnStringInfo>;

		/** Cross-Origin Resource Sharing (CORS) settings for the app. */
		cors?: CorsSettings;

		/** Default documents. */
		defaultDocuments?: Array<string>;

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled?: boolean | null;

		/** Document root. */
		documentRoot?: string | null;

		/** Routing rules in production experiments. */
		experiments?: Experiments;

		/** State of FTP / FTPS service */
		ftpsState?: SiteConfigFtpsState | null;

		/** Handler mappings. */
		handlerMappings?: Array<HandlerMapping>;

		/** Health check path */
		healthCheckPath?: string | null;

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled?: boolean | null;

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled?: boolean | null;

		/** IP security restrictions for main. */
		ipSecurityRestrictions?: Array<IpSecurityRestriction>;

		/** Java container. */
		javaContainer?: string | null;

		/** Java container version. */
		javaContainerVersion?: string | null;

		/** Java version. */
		javaVersion?: string | null;

		/** Metric limits set on an app. */
		limits?: SiteLimits;

		/** Linux App Framework and version */
		linuxFxVersion?: string | null;

		/** Site load balancing. */
		loadBalancing?: SiteConfigLoadBalancing | null;

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled?: boolean | null;

		/**
		 * HTTP logs directory size limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		logsDirectorySizeLimit?: number | null;

		/** MachineKey of an app. */
		machineKey?: SiteMachineKey;

		/** Managed pipeline mode. */
		managedPipelineMode?: SiteConfigManagedPipelineMode | null;

		/**
		 * Managed Service Identity Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedServiceIdentityId?: number | null;

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion?: SiteConfigMinTlsVersion | null;

		/** .NET Framework version. */
		netFrameworkVersion?: string | null;

		/** Version of Node.js. */
		nodeVersion?: string | null;

		/**
		 * Number of workers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfWorkers?: number | null;

		/** Version of PHP. */
		phpVersion?: string | null;

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount?: number | null;

		/** Publishing user name. */
		publishingUsername?: string | null;

		/** Push settings for the App. */
		push?: PushSettings;

		/** Version of Python. */
		pythonVersion?: string | null;

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled?: boolean | null;

		/** Remote debugging version. */
		remoteDebuggingVersion?: string | null;

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled?: boolean | null;

		/** Request tracing expiration time. */
		requestTracingExpirationTime?: Date | null;

		/** IP security restrictions for scm. */
		scmIpSecurityRestrictions?: Array<IpSecurityRestriction>;

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain?: boolean | null;

		/** SCM type. */
		scmType?: SiteConfigScmType | null;

		/** Tracing options. */
		tracingOptions?: string | null;

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess?: boolean | null;

		/** Virtual applications. */
		virtualApplications?: Array<VirtualApplication>;

		/** Virtual Network name. */
		vnetName?: string | null;

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled?: boolean | null;

		/** Xenon App Framework and version */
		windowsFxVersion?: string | null;

		/**
		 * Explicit Managed Service Identity Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		xManagedServiceIdentityId?: number | null;
	}

	/** Configuration of an App Service app. */
	export interface SiteConfigFormProperties {

		/** <code>true</code> if Always On is enabled; otherwise, <code>false</code>. */
		alwaysOn: FormControl<boolean | null | undefined>,

		/** App command line to launch. */
		appCommandLine: FormControl<string | null | undefined>,

		/** <code>true</code> if Auto Heal is enabled; otherwise, <code>false</code>. */
		autoHealEnabled: FormControl<boolean | null | undefined>,

		/** Auto-swap slot name. */
		autoSwapSlotName: FormControl<string | null | undefined>,

		/** <code>true</code> if detailed error logging is enabled; otherwise, <code>false</code>. */
		detailedErrorLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Document root. */
		documentRoot: FormControl<string | null | undefined>,

		/** State of FTP / FTPS service */
		ftpsState: FormControl<SiteConfigFtpsState | null | undefined>,

		/** Health check path */
		healthCheckPath: FormControl<string | null | undefined>,

		/** Http20Enabled: configures a web site to allow clients to connect over http2.0 */
		http20Enabled: FormControl<boolean | null | undefined>,

		/** <code>true</code> if HTTP logging is enabled; otherwise, <code>false</code>. */
		httpLoggingEnabled: FormControl<boolean | null | undefined>,

		/** Java container. */
		javaContainer: FormControl<string | null | undefined>,

		/** Java container version. */
		javaContainerVersion: FormControl<string | null | undefined>,

		/** Java version. */
		javaVersion: FormControl<string | null | undefined>,

		/** Linux App Framework and version */
		linuxFxVersion: FormControl<string | null | undefined>,

		/** Site load balancing. */
		loadBalancing: FormControl<SiteConfigLoadBalancing | null | undefined>,

		/** <code>true</code> to enable local MySQL; otherwise, <code>false</code>. */
		localMySqlEnabled: FormControl<boolean | null | undefined>,

		/**
		 * HTTP logs directory size limit.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		logsDirectorySizeLimit: FormControl<number | null | undefined>,

		/** Managed pipeline mode. */
		managedPipelineMode: FormControl<SiteConfigManagedPipelineMode | null | undefined>,

		/**
		 * Managed Service Identity Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		managedServiceIdentityId: FormControl<number | null | undefined>,

		/** MinTlsVersion: configures the minimum version of TLS required for SSL requests */
		minTlsVersion: FormControl<SiteConfigMinTlsVersion | null | undefined>,

		/** .NET Framework version. */
		netFrameworkVersion: FormControl<string | null | undefined>,

		/** Version of Node.js. */
		nodeVersion: FormControl<string | null | undefined>,

		/**
		 * Number of workers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfWorkers: FormControl<number | null | undefined>,

		/** Version of PHP. */
		phpVersion: FormControl<string | null | undefined>,

		/**
		 * Number of preWarmed instances.
		 * This setting only applies to the Consumption and Elastic Plans
		 * Minimum: 0
		 * Maximum: 10
		 */
		preWarmedInstanceCount: FormControl<number | null | undefined>,

		/** Publishing user name. */
		publishingUsername: FormControl<string | null | undefined>,

		/** Version of Python. */
		pythonVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if remote debugging is enabled; otherwise, <code>false</code>. */
		remoteDebuggingEnabled: FormControl<boolean | null | undefined>,

		/** Remote debugging version. */
		remoteDebuggingVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if request tracing is enabled; otherwise, <code>false</code>. */
		requestTracingEnabled: FormControl<boolean | null | undefined>,

		/** Request tracing expiration time. */
		requestTracingExpirationTime: FormControl<Date | null | undefined>,

		/** IP security restrictions for scm to use main. */
		scmIpSecurityRestrictionsUseMain: FormControl<boolean | null | undefined>,

		/** SCM type. */
		scmType: FormControl<SiteConfigScmType | null | undefined>,

		/** Tracing options. */
		tracingOptions: FormControl<string | null | undefined>,

		/** <code>true</code> to use 32-bit worker process; otherwise, <code>false</code>. */
		use32BitWorkerProcess: FormControl<boolean | null | undefined>,

		/** Virtual Network name. */
		vnetName: FormControl<string | null | undefined>,

		/** <code>true</code> if WebSocket is enabled; otherwise, <code>false</code>. */
		webSocketsEnabled: FormControl<boolean | null | undefined>,

		/** Xenon App Framework and version */
		windowsFxVersion: FormControl<string | null | undefined>,

		/**
		 * Explicit Managed Service Identity Id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		xManagedServiceIdentityId: FormControl<number | null | undefined>,
	}
	export function CreateSiteConfigFormGroup() {
		return new FormGroup<SiteConfigFormProperties>({
			alwaysOn: new FormControl<boolean | null | undefined>(undefined),
			appCommandLine: new FormControl<string | null | undefined>(undefined),
			autoHealEnabled: new FormControl<boolean | null | undefined>(undefined),
			autoSwapSlotName: new FormControl<string | null | undefined>(undefined),
			detailedErrorLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			documentRoot: new FormControl<string | null | undefined>(undefined),
			ftpsState: new FormControl<SiteConfigFtpsState | null | undefined>(undefined),
			healthCheckPath: new FormControl<string | null | undefined>(undefined),
			http20Enabled: new FormControl<boolean | null | undefined>(undefined),
			httpLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			javaContainer: new FormControl<string | null | undefined>(undefined),
			javaContainerVersion: new FormControl<string | null | undefined>(undefined),
			javaVersion: new FormControl<string | null | undefined>(undefined),
			linuxFxVersion: new FormControl<string | null | undefined>(undefined),
			loadBalancing: new FormControl<SiteConfigLoadBalancing | null | undefined>(undefined),
			localMySqlEnabled: new FormControl<boolean | null | undefined>(undefined),
			logsDirectorySizeLimit: new FormControl<number | null | undefined>(undefined),
			managedPipelineMode: new FormControl<SiteConfigManagedPipelineMode | null | undefined>(undefined),
			managedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
			minTlsVersion: new FormControl<SiteConfigMinTlsVersion | null | undefined>(undefined),
			netFrameworkVersion: new FormControl<string | null | undefined>(undefined),
			nodeVersion: new FormControl<string | null | undefined>(undefined),
			numberOfWorkers: new FormControl<number | null | undefined>(undefined),
			phpVersion: new FormControl<string | null | undefined>(undefined),
			preWarmedInstanceCount: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(10)]),
			publishingUsername: new FormControl<string | null | undefined>(undefined),
			pythonVersion: new FormControl<string | null | undefined>(undefined),
			remoteDebuggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			remoteDebuggingVersion: new FormControl<string | null | undefined>(undefined),
			requestTracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			requestTracingExpirationTime: new FormControl<Date | null | undefined>(undefined),
			scmIpSecurityRestrictionsUseMain: new FormControl<boolean | null | undefined>(undefined),
			scmType: new FormControl<SiteConfigScmType | null | undefined>(undefined),
			tracingOptions: new FormControl<string | null | undefined>(undefined),
			use32BitWorkerProcess: new FormControl<boolean | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			webSocketsEnabled: new FormControl<boolean | null | undefined>(undefined),
			windowsFxVersion: new FormControl<string | null | undefined>(undefined),
			xManagedServiceIdentityId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SiteConfigFtpsState { AllAllowed = 'AllAllowed', FtpsOnly = 'FtpsOnly', Disabled = 'Disabled' }


	/** Metric limits set on an app. */
	export interface SiteLimits {

		/**
		 * Maximum allowed disk size usage in MB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxDiskSizeInMb?: string | null;

		/**
		 * Maximum allowed memory usage in MB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxMemoryInMb?: string | null;

		/**
		 * Maximum allowed CPU usage percentage.
		 * Type: double
		 */
		maxPercentageCpu?: number | null;
	}

	/** Metric limits set on an app. */
	export interface SiteLimitsFormProperties {

		/**
		 * Maximum allowed disk size usage in MB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxDiskSizeInMb: FormControl<string | null | undefined>,

		/**
		 * Maximum allowed memory usage in MB.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		maxMemoryInMb: FormControl<string | null | undefined>,

		/**
		 * Maximum allowed CPU usage percentage.
		 * Type: double
		 */
		maxPercentageCpu: FormControl<number | null | undefined>,
	}
	export function CreateSiteLimitsFormGroup() {
		return new FormGroup<SiteLimitsFormProperties>({
			maxDiskSizeInMb: new FormControl<string | null | undefined>(undefined),
			maxMemoryInMb: new FormControl<string | null | undefined>(undefined),
			maxPercentageCpu: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SiteConfigLoadBalancing { WeightedRoundRobin = 'WeightedRoundRobin', LeastRequests = 'LeastRequests', LeastResponseTime = 'LeastResponseTime', WeightedTotalTraffic = 'WeightedTotalTraffic', RequestHash = 'RequestHash' }


	/** MachineKey of an app. */
	export interface SiteMachineKey {

		/** Algorithm used for decryption. */
		decryption?: string | null;

		/** Decryption key. */
		decryptionKey?: string | null;

		/** MachineKey validation. */
		validation?: string | null;

		/** Validation key. */
		validationKey?: string | null;
	}

	/** MachineKey of an app. */
	export interface SiteMachineKeyFormProperties {

		/** Algorithm used for decryption. */
		decryption: FormControl<string | null | undefined>,

		/** Decryption key. */
		decryptionKey: FormControl<string | null | undefined>,

		/** MachineKey validation. */
		validation: FormControl<string | null | undefined>,

		/** Validation key. */
		validationKey: FormControl<string | null | undefined>,
	}
	export function CreateSiteMachineKeyFormGroup() {
		return new FormGroup<SiteMachineKeyFormProperties>({
			decryption: new FormControl<string | null | undefined>(undefined),
			decryptionKey: new FormControl<string | null | undefined>(undefined),
			validation: new FormControl<string | null | undefined>(undefined),
			validationKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SiteConfigManagedPipelineMode { Integrated = 'Integrated', Classic = 'Classic' }

	export enum SiteConfigMinTlsVersion { _1_0 = '1.0', _1_1 = '1.1', _1_2 = '1.2' }

	export enum SiteConfigScmType { None = 'None', Dropbox = 'Dropbox', Tfs = 'Tfs', LocalGit = 'LocalGit', GitHub = 'GitHub', CodePlexGit = 'CodePlexGit', CodePlexHg = 'CodePlexHg', BitbucketGit = 'BitbucketGit', BitbucketHg = 'BitbucketHg', ExternalGit = 'ExternalGit', ExternalHg = 'ExternalHg', OneDrive = 'OneDrive', VSO = 'VSO', VSTSRM = 'VSTSRM' }


	/** Virtual application in an app. */
	export interface VirtualApplication {

		/** Physical path. */
		physicalPath?: string | null;

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled?: boolean | null;

		/** Virtual directories for virtual application. */
		virtualDirectories?: Array<VirtualDirectory>;

		/** Virtual path. */
		virtualPath?: string | null;
	}

	/** Virtual application in an app. */
	export interface VirtualApplicationFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** <code>true</code> if preloading is enabled; otherwise, <code>false</code>. */
		preloadEnabled: FormControl<boolean | null | undefined>,

		/** Virtual path. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateVirtualApplicationFormGroup() {
		return new FormGroup<VirtualApplicationFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			preloadEnabled: new FormControl<boolean | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Directory for virtual application. */
	export interface VirtualDirectory {

		/** Physical path. */
		physicalPath?: string | null;

		/** Path to virtual application. */
		virtualPath?: string | null;
	}

	/** Directory for virtual application. */
	export interface VirtualDirectoryFormProperties {

		/** Physical path. */
		physicalPath: FormControl<string | null | undefined>,

		/** Path to virtual application. */
		virtualPath: FormControl<string | null | undefined>,
	}
	export function CreateVirtualDirectoryFormGroup() {
		return new FormGroup<VirtualDirectoryFormProperties>({
			physicalPath: new FormControl<string | null | undefined>(undefined),
			virtualPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the last successful slot swap operation. */
	export interface SlotSwapStatus {

		/** The destination slot of the last swap operation. */
		destinationSlotName?: string | null;

		/** The source slot of the last swap operation. */
		sourceSlotName?: string | null;

		/** The time the last successful slot swap completed. */
		timestampUtc?: Date | null;
	}

	/** The status of the last successful slot swap operation. */
	export interface SlotSwapStatusFormProperties {

		/** The destination slot of the last swap operation. */
		destinationSlotName: FormControl<string | null | undefined>,

		/** The source slot of the last swap operation. */
		sourceSlotName: FormControl<string | null | undefined>,

		/** The time the last successful slot swap completed. */
		timestampUtc: FormControl<Date | null | undefined>,
	}
	export function CreateSlotSwapStatusFormGroup() {
		return new FormGroup<SlotSwapStatusFormProperties>({
			destinationSlotName: new FormControl<string | null | undefined>(undefined),
			sourceSlotName: new FormControl<string | null | undefined>(undefined),
			timestampUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A snapshot of an app. */
	export interface Snapshot {

		/** Snapshot resource specific properties */
		properties?: any;
	}

	/** A snapshot of an app. */
	export interface SnapshotFormProperties {

		/** Snapshot resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** User credentials used for publishing activity. */
	export interface User {

		/** User resource specific properties */
		properties?: any;
	}

	/** User credentials used for publishing activity. */
	export interface UserFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package. */
	export interface VnetGateway {

		/** VnetGateway resource specific properties */
		properties?: any;
	}

	/** The Virtual Network gateway contract. This is used to give the Virtual Network gateway access to the VPN package. */
	export interface VnetGatewayFormProperties {

		/** VnetGateway resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetGatewayFormGroup() {
		return new FormGroup<VnetGatewayFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Virtual Network information contract. */
	export interface VnetInfo {

		/** VnetInfo resource specific properties */
		properties?: any;
	}

	/** Virtual Network information contract. */
	export interface VnetInfoFormProperties {

		/** VnetInfo resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetInfoFormGroup() {
		return new FormGroup<VnetInfoFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Virtual Network route contract used to pass routing information for a Virtual Network. */
	export interface VnetRoute {

		/** VnetRoute resource specific properties */
		properties?: any;
	}

	/** Virtual Network route contract used to pass routing information for a Virtual Network. */
	export interface VnetRouteFormProperties {

		/** VnetRoute resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetRouteFormGroup() {
		return new FormGroup<VnetRouteFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of App Service apps. */
	export interface WebAppCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Site>;
	}

	/** Collection of App Service apps. */
	export interface WebAppCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWebAppCollectionFormGroup() {
		return new FormGroup<WebAppCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

