import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes main public IP address and any extra virtual IPs. */
	export interface AddressResponse {

		/** AddressResponse resource specific properties */
		properties?: any;
	}

	/** Describes main public IP address and any extra virtual IPs. */
	export interface AddressResponseFormProperties {

		/** AddressResponse resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAddressResponseFormGroup() {
		return new FormGroup<AddressResponseFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of App Service Environments. */
	export interface AppServiceEnvironmentCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<AppServiceEnvironmentResource>;
	}

	/** Collection of App Service Environments. */
	export interface AppServiceEnvironmentCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentCollectionFormGroup() {
		return new FormGroup<AppServiceEnvironmentCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App Service Environment ARM resource. */
	export interface AppServiceEnvironmentResource {

		/** Description of an App Service Environment. */
		properties?: AppServiceEnvironmentResourceProperties;
	}

	/** App Service Environment ARM resource. */
	export interface AppServiceEnvironmentResourceFormProperties {
	}
	export function CreateAppServiceEnvironmentResourceFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourceFormProperties>({
		});

	}

	export interface AppServiceEnvironmentResourceProperties {

		/** List of comma separated strings describing which VM sizes are allowed for front-ends. */
		allowedMultiSizes?: string | null;

		/** List of comma separated strings describing which VM sizes are allowed for workers. */
		allowedWorkerSizes?: string | null;

		/** API Management Account associated with the App Service Environment. */
		apiManagementAccountId?: string | null;

		/** Custom settings for changing the behavior of the App Service Environment. */
		AppServiceEnvironmentResourcePropertiesClusterSettings?: Array<AppServiceEnvironmentResourcePropertiesClusterSettings>;

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
		AppServiceEnvironmentResourcePropertiesEnvironmentCapacities?: Array<AppServiceEnvironmentResourcePropertiesEnvironmentCapacities>;

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
		internalLoadBalancingMode?: AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null;

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
		AppServiceEnvironmentResourcePropertiesNetworkAccessControlList?: Array<AppServiceEnvironmentResourcePropertiesNetworkAccessControlList>;

		/** Provisioning state of the App Service Environment. */
		provisioningState?: AppServiceEnvironmentResourcePropertiesProvisioningState | null;

		/** Resource group of the App Service Environment. */
		resourceGroup?: string | null;

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId?: string | null;

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName?: string | null;

		/** Current status of the App Service Environment. */
		status?: AppServiceEnvironmentResourcePropertiesStatus | null;

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
		AppServiceEnvironmentResourcePropertiesVipMappings?: Array<AppServiceEnvironmentResourcePropertiesVipMappings>;

		/**
		 * Specification for using a Virtual Network.
		 * Required
		 */
		virtualNetwork: AppServiceEnvironmentResourcePropertiesVirtualNetwork;

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
		AppServiceEnvironmentResourcePropertiesWorkerPools: Array<AppServiceEnvironmentResourcePropertiesWorkerPools>;
	}
	export interface AppServiceEnvironmentResourcePropertiesFormProperties {

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
		internalLoadBalancingMode: FormControl<AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null | undefined>,

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
		provisioningState: FormControl<AppServiceEnvironmentResourcePropertiesProvisioningState | null | undefined>,

		/** Resource group of the App Service Environment. */
		resourceGroup: FormControl<string | null | undefined>,

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId: FormControl<string | null | undefined>,

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName: FormControl<string | null | undefined>,

		/** Current status of the App Service Environment. */
		status: FormControl<AppServiceEnvironmentResourcePropertiesStatus | null | undefined>,

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
	export function CreateAppServiceEnvironmentResourcePropertiesFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesFormProperties>({
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
			internalLoadBalancingMode: new FormControl<AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null | undefined>(undefined),
			ipsslAddressCount: new FormControl<number | null | undefined>(undefined),
			lastAction: new FormControl<string | null | undefined>(undefined),
			lastActionResult: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumNumberOfMachines: new FormControl<number | null | undefined>(undefined),
			multiRoleCount: new FormControl<number | null | undefined>(undefined),
			multiSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AppServiceEnvironmentResourcePropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultId: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultSecretName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppServiceEnvironmentResourcePropertiesStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			upgradeDomains: new FormControl<number | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			vnetResourceGroupName: new FormControl<string | null | undefined>(undefined),
			vnetSubnetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentResourcePropertiesClusterSettings {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface AppServiceEnvironmentResourcePropertiesClusterSettingsFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentResourcePropertiesClusterSettingsFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesClusterSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentResourcePropertiesEnvironmentCapacities {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity?: string | null;

		/** Shared/dedicated workers. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
		workerSize?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null;

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId?: number | null;
	}
	export interface AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesFormProperties {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity: FormControl<string | null | undefined>,

		/** Shared/dedicated workers. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
		workerSize: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>,

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateAppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesFormProperties>({
			availableCapacity: new FormControl<string | null | undefined>(undefined),
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			excludeFromCapacityAllocation: new FormControl<boolean | null | undefined>(undefined),
			isApplicableForAllComputeModes: new FormControl<boolean | null | undefined>(undefined),
			isLinux: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteMode: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			workerSize: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode { Shared = 'Shared', Dedicated = 'Dedicated', Dynamic = 'Dynamic' }

	export enum AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize { Small = 'Small', Medium = 'Medium', Large = 'Large', D1 = 'D1', D2 = 'D2', D3 = 'D3', NestedSmall = 'NestedSmall', Default = 'Default' }

	export enum AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode { None = 'None', Web = 'Web', Publishing = 'Publishing' }

	export interface AppServiceEnvironmentResourcePropertiesNetworkAccessControlList {

		/** Action object. */
		action?: AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null;

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
	export interface AppServiceEnvironmentResourcePropertiesNetworkAccessControlListFormProperties {

		/** Action object. */
		action: FormControl<AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null | undefined>,

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
	export function CreateAppServiceEnvironmentResourcePropertiesNetworkAccessControlListFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesNetworkAccessControlListFormProperties>({
			action: new FormControl<AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			remoteSubnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction { Permit = 'Permit', Deny = 'Deny' }

	export enum AppServiceEnvironmentResourcePropertiesProvisioningState { Succeeded = 'Succeeded', Failed = 'Failed', Canceled = 'Canceled', InProgress = 'InProgress', Deleting = 'Deleting' }

	export enum AppServiceEnvironmentResourcePropertiesStatus { Preparing = 'Preparing', Ready = 'Ready', Scaling = 'Scaling', Deleting = 'Deleting' }

	export interface AppServiceEnvironmentResourcePropertiesVipMappings {

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
	export interface AppServiceEnvironmentResourcePropertiesVipMappingsFormProperties {

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
	export function CreateAppServiceEnvironmentResourcePropertiesVipMappingsFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesVipMappingsFormProperties>({
			inUse: new FormControl<boolean | null | undefined>(undefined),
			internalHttpPort: new FormControl<number | null | undefined>(undefined),
			internalHttpsPort: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			virtualIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentResourcePropertiesVirtualNetwork {

		/** Resource id of the Virtual Network. */
		id?: string | null;

		/** Name of the Virtual Network (read-only). */
		name?: string | null;

		/** Subnet within the Virtual Network. */
		subnet?: string | null;

		/** Resource type of the Virtual Network (read-only). */
		type?: string | null;
	}
	export interface AppServiceEnvironmentResourcePropertiesVirtualNetworkFormProperties {

		/** Resource id of the Virtual Network. */
		id: FormControl<string | null | undefined>,

		/** Name of the Virtual Network (read-only). */
		name: FormControl<string | null | undefined>,

		/** Subnet within the Virtual Network. */
		subnet: FormControl<string | null | undefined>,

		/** Resource type of the Virtual Network (read-only). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentResourcePropertiesVirtualNetworkFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesVirtualNetworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentResourcePropertiesWorkerPools {

		/** Shared or dedicated app hosting. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
	export interface AppServiceEnvironmentResourcePropertiesWorkerPoolsFormProperties {

		/** Shared or dedicated app hosting. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
	export function CreateAppServiceEnvironmentResourcePropertiesWorkerPoolsFormGroup() {
		return new FormGroup<AppServiceEnvironmentResourcePropertiesWorkerPoolsFormProperties>({
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
			workerSize: new FormControl<string | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ARM resource for a app service environment. */
	export interface AppServiceEnvironmentPatchResource {

		/** Description of an App Service Environment. */
		properties?: AppServiceEnvironmentPatchResourceProperties;
	}

	/** ARM resource for a app service environment. */
	export interface AppServiceEnvironmentPatchResourceFormProperties {
	}
	export function CreateAppServiceEnvironmentPatchResourceFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourceFormProperties>({
		});

	}

	export interface AppServiceEnvironmentPatchResourceProperties {

		/** List of comma separated strings describing which VM sizes are allowed for front-ends. */
		allowedMultiSizes?: string | null;

		/** List of comma separated strings describing which VM sizes are allowed for workers. */
		allowedWorkerSizes?: string | null;

		/** API Management Account associated with the App Service Environment. */
		apiManagementAccountId?: string | null;

		/** Custom settings for changing the behavior of the App Service Environment. */
		AppServiceEnvironmentPatchResourcePropertiesClusterSettings?: Array<AppServiceEnvironmentPatchResourcePropertiesClusterSettings>;

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
		AppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacities?: Array<AppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacities>;

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
		internalLoadBalancingMode?: AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null;

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
		AppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlList?: Array<AppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlList>;

		/** Provisioning state of the App Service Environment. */
		provisioningState?: AppServiceEnvironmentResourcePropertiesProvisioningState | null;

		/** Resource group of the App Service Environment. */
		resourceGroup?: string | null;

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId?: string | null;

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName?: string | null;

		/** Current status of the App Service Environment. */
		status?: AppServiceEnvironmentResourcePropertiesStatus | null;

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
		AppServiceEnvironmentPatchResourcePropertiesVipMappings?: Array<AppServiceEnvironmentPatchResourcePropertiesVipMappings>;

		/**
		 * Specification for using a Virtual Network.
		 * Required
		 */
		virtualNetwork: AppServiceEnvironmentPatchResourcePropertiesVirtualNetwork;

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
		AppServiceEnvironmentPatchResourcePropertiesWorkerPools: Array<AppServiceEnvironmentPatchResourcePropertiesWorkerPools>;
	}
	export interface AppServiceEnvironmentPatchResourcePropertiesFormProperties {

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
		internalLoadBalancingMode: FormControl<AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null | undefined>,

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
		provisioningState: FormControl<AppServiceEnvironmentResourcePropertiesProvisioningState | null | undefined>,

		/** Resource group of the App Service Environment. */
		resourceGroup: FormControl<string | null | undefined>,

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId: FormControl<string | null | undefined>,

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName: FormControl<string | null | undefined>,

		/** Current status of the App Service Environment. */
		status: FormControl<AppServiceEnvironmentResourcePropertiesStatus | null | undefined>,

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
	export function CreateAppServiceEnvironmentPatchResourcePropertiesFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesFormProperties>({
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
			internalLoadBalancingMode: new FormControl<AppServiceEnvironmentResourcePropertiesInternalLoadBalancingMode | null | undefined>(undefined),
			ipsslAddressCount: new FormControl<number | null | undefined>(undefined),
			lastAction: new FormControl<string | null | undefined>(undefined),
			lastActionResult: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumNumberOfMachines: new FormControl<number | null | undefined>(undefined),
			multiRoleCount: new FormControl<number | null | undefined>(undefined),
			multiSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<AppServiceEnvironmentResourcePropertiesProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultId: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultSecretName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppServiceEnvironmentResourcePropertiesStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			upgradeDomains: new FormControl<number | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			vnetResourceGroupName: new FormControl<string | null | undefined>(undefined),
			vnetSubnetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesClusterSettings {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface AppServiceEnvironmentPatchResourcePropertiesClusterSettingsFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentPatchResourcePropertiesClusterSettingsFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesClusterSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacities {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity?: string | null;

		/** Shared/dedicated workers. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
		workerSize?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null;

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId?: number | null;
	}
	export interface AppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacitiesFormProperties {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity: FormControl<string | null | undefined>,

		/** Shared/dedicated workers. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
		workerSize: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>,

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateAppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacitiesFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesEnvironmentCapacitiesFormProperties>({
			availableCapacity: new FormControl<string | null | undefined>(undefined),
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			excludeFromCapacityAllocation: new FormControl<boolean | null | undefined>(undefined),
			isApplicableForAllComputeModes: new FormControl<boolean | null | undefined>(undefined),
			isLinux: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteMode: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			workerSize: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlList {

		/** Action object. */
		action?: AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null;

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
	export interface AppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlListFormProperties {

		/** Action object. */
		action: FormControl<AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null | undefined>,

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
	export function CreateAppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlListFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesNetworkAccessControlListFormProperties>({
			action: new FormControl<AppServiceEnvironmentResourcePropertiesNetworkAccessControlListAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			remoteSubnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesVipMappings {

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
	export interface AppServiceEnvironmentPatchResourcePropertiesVipMappingsFormProperties {

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
	export function CreateAppServiceEnvironmentPatchResourcePropertiesVipMappingsFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesVipMappingsFormProperties>({
			inUse: new FormControl<boolean | null | undefined>(undefined),
			internalHttpPort: new FormControl<number | null | undefined>(undefined),
			internalHttpsPort: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			virtualIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesVirtualNetwork {

		/** Resource id of the Virtual Network. */
		id?: string | null;

		/** Name of the Virtual Network (read-only). */
		name?: string | null;

		/** Subnet within the Virtual Network. */
		subnet?: string | null;

		/** Resource type of the Virtual Network (read-only). */
		type?: string | null;
	}
	export interface AppServiceEnvironmentPatchResourcePropertiesVirtualNetworkFormProperties {

		/** Resource id of the Virtual Network. */
		id: FormControl<string | null | undefined>,

		/** Name of the Virtual Network (read-only). */
		name: FormControl<string | null | undefined>,

		/** Subnet within the Virtual Network. */
		subnet: FormControl<string | null | undefined>,

		/** Resource type of the Virtual Network (read-only). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironmentPatchResourcePropertiesVirtualNetworkFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesVirtualNetworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironmentPatchResourcePropertiesWorkerPools {

		/** Shared or dedicated app hosting. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
	export interface AppServiceEnvironmentPatchResourcePropertiesWorkerPoolsFormProperties {

		/** Shared or dedicated app hosting. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
	export function CreateAppServiceEnvironmentPatchResourcePropertiesWorkerPoolsFormGroup() {
		return new FormGroup<AppServiceEnvironmentPatchResourcePropertiesWorkerPoolsFormProperties>({
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
			workerSize: new FormControl<string | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A domain name that a service is reached at, including details of the current connection status. */
	export interface EndpointDependency {

		/** The domain name of the dependency. */
		domainName?: string | null;

		/** The IP Addresses and Ports used when connecting to DomainName. */
		endpointDetails?: Array<EndpointDetail>;
	}

	/** A domain name that a service is reached at, including details of the current connection status. */
	export interface EndpointDependencyFormProperties {

		/** The domain name of the dependency. */
		domainName: FormControl<string | null | undefined>,
	}
	export function CreateEndpointDependencyFormGroup() {
		return new FormGroup<EndpointDependencyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Current TCP connectivity information from the App Service Environment to a single endpoint. */
	export interface EndpointDetail {

		/** An IP Address that Domain Name currently resolves to. */
		ipAddress?: string | null;

		/** Whether it is possible to create a TCP connection from the App Service Environment to this IpAddress at this Port. */
		isAccessible?: boolean | null;

		/**
		 * The time in milliseconds it takes for a TCP connection to be created from the App Service Environment to this IpAddress at this Port.
		 * Type: double
		 */
		latency?: number | null;

		/**
		 * The port an endpoint is connected to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;
	}

	/** Current TCP connectivity information from the App Service Environment to a single endpoint. */
	export interface EndpointDetailFormProperties {

		/** An IP Address that Domain Name currently resolves to. */
		ipAddress: FormControl<string | null | undefined>,

		/** Whether it is possible to create a TCP connection from the App Service Environment to this IpAddress at this Port. */
		isAccessible: FormControl<boolean | null | undefined>,

		/**
		 * The time in milliseconds it takes for a TCP connection to be created from the App Service Environment to this IpAddress at this Port.
		 * Type: double
		 */
		latency: FormControl<number | null | undefined>,

		/**
		 * The port an endpoint is connected to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,
	}
	export function CreateEndpointDetailFormGroup() {
		return new FormGroup<EndpointDetailFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			isAccessible: new FormControl<boolean | null | undefined>(undefined),
			latency: new FormControl<number | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorEntity {
	}
	export interface ErrorEntityFormProperties {
	}
	export function CreateErrorEntityFormGroup() {
		return new FormGroup<ErrorEntityFormProperties>({
		});

	}


	/** Diagnostics for an App Service Environment. */
	export interface HostingEnvironmentDiagnostics {

		/** Diagnostics output. */
		diagnosticsOutput?: string | null;

		/** Name/identifier of the diagnostics. */
		name?: string | null;
	}

	/** Diagnostics for an App Service Environment. */
	export interface HostingEnvironmentDiagnosticsFormProperties {

		/** Diagnostics output. */
		diagnosticsOutput: FormControl<string | null | undefined>,

		/** Name/identifier of the diagnostics. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHostingEnvironmentDiagnosticsFormGroup() {
		return new FormGroup<HostingEnvironmentDiagnosticsFormProperties>({
			diagnosticsOutput: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The IP Addresses and Ports that require inbound network access to and within the subnet of the App Service Environment. */
	export interface InboundEnvironmentEndpoint {

		/** Short text describing the purpose of the network traffic. */
		description?: string | null;

		/** The IP addresses that network traffic will originate from in cidr notation. */
		endpoints?: Array<string>;

		/** The ports that network traffic will arrive to the App Service Environment at. */
		ports?: Array<string>;
	}

	/** The IP Addresses and Ports that require inbound network access to and within the subnet of the App Service Environment. */
	export interface InboundEnvironmentEndpointFormProperties {

		/** Short text describing the purpose of the network traffic. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateInboundEnvironmentEndpointFormGroup() {
		return new FormGroup<InboundEnvironmentEndpointFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of Inbound Environment Endpoints */
	export interface InboundEnvironmentEndpointCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<InboundEnvironmentEndpoint>;
	}

	/** Collection of Inbound Environment Endpoints */
	export interface InboundEnvironmentEndpointCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInboundEnvironmentEndpointCollectionFormGroup() {
		return new FormGroup<InboundEnvironmentEndpointCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Endpoints accessed for a common purpose that the App Service Environment requires outbound network access to. */
	export interface OutboundEnvironmentEndpoint {

		/** The type of service accessed by the App Service Environment, e.g., Azure Storage, Azure SQL Database, and Azure Active Directory. */
		category?: string | null;

		/** The endpoints that the App Service Environment reaches the service at. */
		endpoints?: Array<EndpointDependency>;
	}

	/** Endpoints accessed for a common purpose that the App Service Environment requires outbound network access to. */
	export interface OutboundEnvironmentEndpointFormProperties {

		/** The type of service accessed by the App Service Environment, e.g., Azure Storage, Azure SQL Database, and Azure Active Directory. */
		category: FormControl<string | null | undefined>,
	}
	export function CreateOutboundEnvironmentEndpointFormGroup() {
		return new FormGroup<OutboundEnvironmentEndpointFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of Outbound Environment Endpoints */
	export interface OutboundEnvironmentEndpointCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<OutboundEnvironmentEndpoint>;
	}

	/** Collection of Outbound Environment Endpoints */
	export interface OutboundEnvironmentEndpointCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOutboundEnvironmentEndpointCollectionFormGroup() {
		return new FormGroup<OutboundEnvironmentEndpointCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics availability and retention. */
	export interface ResourceMetricAvailability {

		/** Retention period for the current time grain. */
		retention?: string | null;

		/** Time grain . */
		timeGrain?: string | null;
	}

	/** Metrics availability and retention. */
	export interface ResourceMetricAvailabilityFormProperties {

		/** Retention period for the current time grain. */
		retention: FormControl<string | null | undefined>,

		/** Time grain . */
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateResourceMetricAvailabilityFormGroup() {
		return new FormGroup<ResourceMetricAvailabilityFormProperties>({
			retention: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for the metrics. */
	export interface ResourceMetricDefinition {

		/** ResourceMetricDefinition resource specific properties */
		properties?: any;
	}

	/** Metadata for the metrics. */
	export interface ResourceMetricDefinitionFormProperties {

		/** ResourceMetricDefinition resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateResourceMetricDefinitionFormGroup() {
		return new FormGroup<ResourceMetricDefinitionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of metric definitions. */
	export interface ResourceMetricDefinitionCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ResourceMetricDefinition>;
	}

	/** Collection of metric definitions. */
	export interface ResourceMetricDefinitionCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourceMetricDefinitionCollectionFormGroup() {
		return new FormGroup<ResourceMetricDefinitionCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SKU discovery information. */
	export interface SkuInfo {

		/** Description of the App Service plan scale options. */
		capacity?: SkuInfoCapacity;

		/** Resource type that this SKU applies to. */
		resourceType?: string | null;

		/** Description of a SKU for a scalable resource. */
		sku?: SkuInfoSku;
	}

	/** SKU discovery information. */
	export interface SkuInfoFormProperties {

		/** Resource type that this SKU applies to. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateSkuInfoFormGroup() {
		return new FormGroup<SkuInfoFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SkuInfoCapacity {

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
	export interface SkuInfoCapacityFormProperties {

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
	export function CreateSkuInfoCapacityFormGroup() {
		return new FormGroup<SkuInfoCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SkuInfoSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		SkuInfoSkuCapabilities?: Array<SkuInfoSkuCapabilities>;

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
		skuCapacity?: SkuInfoSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface SkuInfoSkuFormProperties {

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
	export function CreateSkuInfoSkuFormGroup() {
		return new FormGroup<SkuInfoSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SkuInfoSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface SkuInfoSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSkuInfoSkuCapabilitiesFormGroup() {
		return new FormGroup<SkuInfoSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SkuInfoSkuSkuCapacity {

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
	export interface SkuInfoSkuSkuCapacityFormProperties {

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
	export function CreateSkuInfoSkuSkuCapacityFormGroup() {
		return new FormGroup<SkuInfoSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of SKU information. */
	export interface SkuInfoCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SkuInfo>;
	}

	/** Collection of SKU information. */
	export interface SkuInfoCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSkuInfoCollectionFormGroup() {
		return new FormGroup<SkuInfoCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of stamp capacities. */
	export interface StampCapacityCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		StampCapacityCollectionValue: Array<StampCapacityCollectionValue>;
	}

	/** Collection of stamp capacities. */
	export interface StampCapacityCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateStampCapacityCollectionFormGroup() {
		return new FormGroup<StampCapacityCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StampCapacityCollectionValue {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity?: string | null;

		/** Shared/dedicated workers. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
		workerSize?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null;

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId?: number | null;
	}
	export interface StampCapacityCollectionValueFormProperties {

		/**
		 * Available capacity (# of machines, bytes of storage etc...).
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		availableCapacity: FormControl<string | null | undefined>,

		/** Shared/dedicated workers. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
		workerSize: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>,

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateStampCapacityCollectionValueFormGroup() {
		return new FormGroup<StampCapacityCollectionValueFormProperties>({
			availableCapacity: new FormControl<string | null | undefined>(undefined),
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			excludeFromCapacityAllocation: new FormControl<boolean | null | undefined>(undefined),
			isApplicableForAllComputeModes: new FormControl<boolean | null | undefined>(undefined),
			isLinux: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteMode: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			workerSize: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesWorkerSize | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Usage of the quota resource. */
	export interface Usage {

		/** Usage resource specific properties */
		properties?: any;
	}

	/** Usage of the quota resource. */
	export interface UsageFormProperties {

		/** Usage resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of usages. */
	export interface UsageCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<Usage>;
	}

	/** Collection of usages. */
	export interface UsageCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageCollectionFormGroup() {
		return new FormGroup<UsageCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of worker pools. */
	export interface WorkerPoolCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<WorkerPoolResource>;
	}

	/** Collection of worker pools. */
	export interface WorkerPoolCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkerPoolCollectionFormGroup() {
		return new FormGroup<WorkerPoolCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Worker pool of an App Service Environment ARM resource. */
	export interface WorkerPoolResource {

		/** Worker pool of an App Service Environment. */
		properties?: WorkerPoolResourceProperties;

		/** Description of a SKU for a scalable resource. */
		sku?: WorkerPoolResourceSku;
	}

	/** Worker pool of an App Service Environment ARM resource. */
	export interface WorkerPoolResourceFormProperties {
	}
	export function CreateWorkerPoolResourceFormGroup() {
		return new FormGroup<WorkerPoolResourceFormProperties>({
		});

	}

	export interface WorkerPoolResourceProperties {

		/** Shared or dedicated app hosting. */
		computeMode?: AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null;

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
	export interface WorkerPoolResourcePropertiesFormProperties {

		/** Shared or dedicated app hosting. */
		computeMode: FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>,

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
	export function CreateWorkerPoolResourcePropertiesFormGroup() {
		return new FormGroup<WorkerPoolResourcePropertiesFormProperties>({
			computeMode: new FormControl<AppServiceEnvironmentResourcePropertiesEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
			workerSize: new FormControl<string | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WorkerPoolResourceSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		WorkerPoolResourceSkuCapabilities?: Array<WorkerPoolResourceSkuCapabilities>;

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
		skuCapacity?: WorkerPoolResourceSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface WorkerPoolResourceSkuFormProperties {

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
	export function CreateWorkerPoolResourceSkuFormGroup() {
		return new FormGroup<WorkerPoolResourceSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkerPoolResourceSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface WorkerPoolResourceSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWorkerPoolResourceSkuCapabilitiesFormGroup() {
		return new FormGroup<WorkerPoolResourceSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkerPoolResourceSkuSkuCapacity {

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
	export interface WorkerPoolResourceSkuSkuCapacityFormProperties {

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
	export function CreateWorkerPoolResourceSkuSkuCapacityFormGroup() {
		return new FormGroup<WorkerPoolResourceSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all App Service Environments for a subscription.
		 * Description for Get all App Service Environments for a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/hostingEnvironments
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironmentCollection} OK
		 */
		AppServiceEnvironments_List(subscriptionId: string, api_version: string): Observable<AppServiceEnvironmentCollection> {
			return this.http.get<AppServiceEnvironmentCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/hostingEnvironments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all App Service Environments in a resource group.
		 * Description for Get all App Service Environments in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironmentCollection} OK
		 */
		AppServiceEnvironments_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<AppServiceEnvironmentCollection> {
			return this.http.get<AppServiceEnvironmentCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the properties of an App Service Environment.
		 * Description for Get the properties of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironmentResource} OK
		 */
		AppServiceEnvironments_Get(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServiceEnvironmentResource> {
			return this.http.get<AppServiceEnvironmentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update an App Service Environment.
		 * Description for Create or update an App Service Environment.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceEnvironmentResource} requestBody Configuration details of the App Service Environment.
		 * @return {AppServiceEnvironmentResource} OK
		 */
		AppServiceEnvironments_CreateOrUpdate(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServiceEnvironmentResource): Observable<AppServiceEnvironmentResource> {
			return this.http.put<AppServiceEnvironmentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an App Service Environment.
		 * Description for Delete an App Service Environment.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {boolean} forceDelete Specify <code>true</code> to force the deletion even if the App Service Environment contains resources. The default is <code>false</code>.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServiceEnvironments_Delete(resourceGroupName: string, name: string, forceDelete: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '&forceDelete=' + forceDelete + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update an App Service Environment.
		 * Description for Create or update an App Service Environment.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceEnvironmentPatchResource} requestBody Configuration details of the App Service Environment.
		 * @return {AppServiceEnvironmentResource} OK
		 */
		AppServiceEnvironments_Update(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServiceEnvironmentPatchResource): Observable<AppServiceEnvironmentResource> {
			return this.http.patch<AppServiceEnvironmentResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the used, available, and total worker capacity an App Service Environment.
		 * Description for Get the used, available, and total worker capacity an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/compute
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {StampCapacityCollection} OK
		 */
		AppServiceEnvironments_ListCapacities(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<StampCapacityCollection> {
			return this.http.get<StampCapacityCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/capacities/compute&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get IP addresses assigned to an App Service Environment.
		 * Description for Get IP addresses assigned to an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/capacities/virtualip
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AddressResponse} OK
		 */
		AppServiceEnvironments_GetVipInfo(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AddressResponse> {
			return this.http.get<AddressResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/capacities/virtualip&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Move an App Service Environment to a different VNET.
		 * Description for Move an App Service Environment to a different VNET.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/changeVirtualNetwork
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {AppServiceEnvironments_ChangeVnetPostBody} requestBody Details for the new virtual network.
		 * @return {AppServiceEnvironments_ChangeVnetReturn} OK.
		 */
		AppServiceEnvironments_ChangeVnet(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: AppServiceEnvironments_ChangeVnetPostBody): Observable<AppServiceEnvironments_ChangeVnetReturn> {
			return this.http.post<AppServiceEnvironments_ChangeVnetReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/changeVirtualNetwork&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get diagnostic information for an App Service Environment.
		 * Description for Get diagnostic information for an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<HostingEnvironmentDiagnostics>} OK
		 */
		AppServiceEnvironments_ListDiagnostics(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<HostingEnvironmentDiagnostics>> {
			return this.http.get<Array<HostingEnvironmentDiagnostics>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/diagnostics&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a diagnostics item for an App Service Environment.
		 * Description for Get a diagnostics item for an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/diagnostics/{diagnosticsName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} diagnosticsName Name of the diagnostics item.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {HostingEnvironmentDiagnostics} OK
		 */
		AppServiceEnvironments_GetDiagnosticsItem(resourceGroupName: string, name: string, diagnosticsName: string, subscriptionId: string, api_version: string): Observable<HostingEnvironmentDiagnostics> {
			return this.http.get<HostingEnvironmentDiagnostics>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/diagnostics/' + (diagnosticsName == null ? '' : encodeURIComponent(diagnosticsName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the network endpoints of all inbound dependencies of an App Service Environment.
		 * Description for Get the network endpoints of all inbound dependencies of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/inboundNetworkDependenciesEndpoints
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {InboundEnvironmentEndpointCollection} OK
		 */
		AppServiceEnvironments_GetInboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<InboundEnvironmentEndpointCollection> {
			return this.http.get<InboundEnvironmentEndpointCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/inboundNetworkDependenciesEndpoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all multi-role pools.
		 * Description for Get all multi-role pools.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WorkerPoolCollection} OK
		 */
		AppServiceEnvironments_ListMultiRolePools(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WorkerPoolCollection> {
			return this.http.get<WorkerPoolCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get properties of a multi-role pool.
		 * Description for Get properties of a multi-role pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WorkerPoolResource} OK
		 */
		AppServiceEnvironments_GetMultiRolePool(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WorkerPoolResource> {
			return this.http.get<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a multi-role pool.
		 * Description for Create or update a multi-role pool.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WorkerPoolResource} requestBody Properties of the multi-role pool.
		 * @return {WorkerPoolResource} OK.
		 */
		AppServiceEnvironments_CreateOrUpdateMultiRolePool(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: WorkerPoolResource): Observable<WorkerPoolResource> {
			return this.http.put<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update a multi-role pool.
		 * Description for Create or update a multi-role pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WorkerPoolResource} requestBody Properties of the multi-role pool.
		 * @return {WorkerPoolResource} OK.
		 */
		AppServiceEnvironments_UpdateMultiRolePool(resourceGroupName: string, name: string, subscriptionId: string, api_version: string, requestBody: WorkerPoolResource): Observable<WorkerPoolResource> {
			return this.http.patch<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
		 * Description for Get metric definitions for a specific instance of a multi-role pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/instances/{instance}/metricdefinitions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} instance Name of the instance in the multi-role pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceMetricDefinitionCollection} OK
		 */
		AppServiceEnvironments_ListMultiRolePoolInstanceMetricDefinitions(resourceGroupName: string, name: string, instance: string, subscriptionId: string, api_version: string): Observable<ResourceMetricDefinitionCollection> {
			return this.http.get<ResourceMetricDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get metric definitions for a multi-role pool of an App Service Environment.
		 * Description for Get metric definitions for a multi-role pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/metricdefinitions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceMetricDefinitionCollection} OK
		 */
		AppServiceEnvironments_ListMultiRoleMetricDefinitions(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<ResourceMetricDefinitionCollection> {
			return this.http.get<ResourceMetricDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get available SKUs for scaling a multi-role pool.
		 * Description for Get available SKUs for scaling a multi-role pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/skus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SkuInfoCollection} OK
		 */
		AppServiceEnvironments_ListMultiRolePoolSkus(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<SkuInfoCollection> {
			return this.http.get<SkuInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get usage metrics for a multi-role pool of an App Service Environment.
		 * Description for Get usage metrics for a multi-role pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/multiRolePools/default/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {UsageCollection} OK
		 */
		AppServiceEnvironments_ListMultiRoleUsages(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<UsageCollection> {
			return this.http.get<UsageCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/multiRolePools/default/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all currently running operations on the App Service Environment.
		 * Description for List all currently running operations on the App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/operations
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {Array<AppServiceEnvironments_ListOperationsReturn>} OK
		 */
		AppServiceEnvironments_ListOperations(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<Array<AppServiceEnvironments_ListOperationsReturn>> {
			return this.http.get<Array<AppServiceEnvironments_ListOperationsReturn>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the network endpoints of all outbound dependencies of an App Service Environment.
		 * Description for Get the network endpoints of all outbound dependencies of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/outboundNetworkDependenciesEndpoints
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {OutboundEnvironmentEndpointCollection} OK
		 */
		AppServiceEnvironments_GetOutboundNetworkDependenciesEndpoints(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<OutboundEnvironmentEndpointCollection> {
			return this.http.get<OutboundEnvironmentEndpointCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/outboundNetworkDependenciesEndpoints&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Reboot all machines in an App Service Environment.
		 * Description for Reboot all machines in an App Service Environment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/reboot
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {void} 
		 */
		AppServiceEnvironments_Reboot(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/reboot&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Resume an App Service Environment.
		 * Description for Resume an App Service Environment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/resume
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironments_ResumeReturn} OK.
		 */
		AppServiceEnvironments_Resume(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServiceEnvironments_ResumeReturn> {
			return this.http.post<AppServiceEnvironments_ResumeReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/resume&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get all App Service plans in an App Service Environment.
		 * Description for Get all App Service plans in an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/serverfarms
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironments_ListAppServicePlansReturn} OK
		 */
		AppServiceEnvironments_ListAppServicePlans(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServiceEnvironments_ListAppServicePlansReturn> {
			return this.http.get<AppServiceEnvironments_ListAppServicePlansReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/serverfarms&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all apps in an App Service Environment.
		 * Description for Get all apps in an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/sites
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} propertiesToInclude Comma separated list of app properties to include.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironments_ListWebAppsReturn} OK
		 */
		AppServiceEnvironments_ListWebApps(resourceGroupName: string, name: string, propertiesToInclude: string | null | undefined, subscriptionId: string, api_version: string): Observable<AppServiceEnvironments_ListWebAppsReturn> {
			return this.http.get<AppServiceEnvironments_ListWebAppsReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/sites&propertiesToInclude=' + (propertiesToInclude == null ? '' : encodeURIComponent(propertiesToInclude)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Suspend an App Service Environment.
		 * Description for Suspend an App Service Environment.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/suspend
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironments_SuspendReturn} OK.
		 */
		AppServiceEnvironments_Suspend(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<AppServiceEnvironments_SuspendReturn> {
			return this.http.post<AppServiceEnvironments_SuspendReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/suspend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Get global usage metrics of an App Service Environment.
		 * Description for Get global usage metrics of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} filter Return only usages/metrics specified in the filter. Filter conforms to odata syntax. Example: $filter=(name.value eq 'Metric1' or name.value eq 'Metric2') and startTime eq 2014-01-01T00:00:00Z and endTime eq 2014-12-31T23:59:59Z and timeGrain eq duration'[Hour|Minute|Day]'.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {AppServiceEnvironments_ListUsagesReturn} OK
		 */
		AppServiceEnvironments_ListUsages(resourceGroupName: string, name: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<AppServiceEnvironments_ListUsagesReturn> {
			return this.http.get<AppServiceEnvironments_ListUsagesReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/usages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get all worker pools of an App Service Environment.
		 * Description for Get all worker pools of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WorkerPoolCollection} OK
		 */
		AppServiceEnvironments_ListWorkerPools(resourceGroupName: string, name: string, subscriptionId: string, api_version: string): Observable<WorkerPoolCollection> {
			return this.http.get<WorkerPoolCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get properties of a worker pool.
		 * Description for Get properties of a worker pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {WorkerPoolResource} OK
		 */
		AppServiceEnvironments_GetWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string): Observable<WorkerPoolResource> {
			return this.http.get<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a worker pool.
		 * Description for Create or update a worker pool.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WorkerPoolResource} requestBody Properties of the worker pool.
		 * @return {WorkerPoolResource} OK.
		 */
		AppServiceEnvironments_CreateOrUpdateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string, requestBody: WorkerPoolResource): Observable<WorkerPoolResource> {
			return this.http.put<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create or update a worker pool.
		 * Description for Create or update a worker pool.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {WorkerPoolResource} requestBody Properties of the worker pool.
		 * @return {WorkerPoolResource} OK.
		 */
		AppServiceEnvironments_UpdateWorkerPool(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string, requestBody: WorkerPoolResource): Observable<WorkerPoolResource> {
			return this.http.patch<WorkerPoolResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get metric definitions for a specific instance of a worker pool of an App Service Environment.
		 * Description for Get metric definitions for a specific instance of a worker pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/instances/{instance}/metricdefinitions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} instance Name of the instance in the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceMetricDefinitionCollection} OK
		 */
		AppServiceEnvironments_ListWorkerPoolInstanceMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, instance: string, subscriptionId: string, api_version: string): Observable<ResourceMetricDefinitionCollection> {
			return this.http.get<ResourceMetricDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '/instances/' + (instance == null ? '' : encodeURIComponent(instance)) + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get metric definitions for a worker pool of an App Service Environment.
		 * Description for Get metric definitions for a worker pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/metricdefinitions
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ResourceMetricDefinitionCollection} OK
		 */
		AppServiceEnvironments_ListWebWorkerMetricDefinitions(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string): Observable<ResourceMetricDefinitionCollection> {
			return this.http.get<ResourceMetricDefinitionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '/metricdefinitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get available SKUs for scaling a worker pool.
		 * Description for Get available SKUs for scaling a worker pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/skus
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SkuInfoCollection} OK
		 */
		AppServiceEnvironments_ListWorkerPoolSkus(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string): Observable<SkuInfoCollection> {
			return this.http.get<SkuInfoCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get usage metrics for a worker pool of an App Service Environment.
		 * Description for Get usage metrics for a worker pool of an App Service Environment.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/hostingEnvironments/{name}/workerPools/{workerPoolName}/usages
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} name Name of the App Service Environment.
		 * @param {string} workerPoolName Name of the worker pool.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {UsageCollection} OK
		 */
		AppServiceEnvironments_ListWebWorkerUsages(resourceGroupName: string, name: string, workerPoolName: string, subscriptionId: string, api_version: string): Observable<UsageCollection> {
			return this.http.get<UsageCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/hostingEnvironments/' + (name == null ? '' : encodeURIComponent(name)) + '/workerPools/' + (workerPoolName == null ? '' : encodeURIComponent(workerPoolName)) + '/usages&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface AppServiceEnvironments_ChangeVnetPostBody {

		/** Resource id of the Virtual Network. */
		id?: string | null;

		/** Name of the Virtual Network (read-only). */
		name?: string | null;

		/** Subnet within the Virtual Network. */
		subnet?: string | null;

		/** Resource type of the Virtual Network (read-only). */
		type?: string | null;
	}
	export interface AppServiceEnvironments_ChangeVnetPostBodyFormProperties {

		/** Resource id of the Virtual Network. */
		id: FormControl<string | null | undefined>,

		/** Name of the Virtual Network (read-only). */
		name: FormControl<string | null | undefined>,

		/** Subnet within the Virtual Network. */
		subnet: FormControl<string | null | undefined>,

		/** Resource type of the Virtual Network (read-only). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ChangeVnetPostBodyFormGroup() {
		return new FormGroup<AppServiceEnvironments_ChangeVnetPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ChangeVnetReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_ChangeVnetReturnValue: Array<AppServiceEnvironments_ChangeVnetReturnValue>;
	}
	export interface AppServiceEnvironments_ChangeVnetReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ChangeVnetReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ChangeVnetReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ChangeVnetReturnValue {

		/** Managed service identity. */
		identity?: AppServiceEnvironments_ChangeVnetReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface AppServiceEnvironments_ChangeVnetReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ChangeVnetReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_ChangeVnetReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ChangeVnetReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentities };
	}
	export interface AppServiceEnvironments_ChangeVnetReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ChangeVnetReturnValueIdentityFormGroup() {
		return new FormGroup<AppServiceEnvironments_ChangeVnetReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum AppServiceEnvironments_ChangeVnetReturnValueIdentityType { None = 'None', SystemAssigned = 'SystemAssigned', UserAssigned = 'UserAssigned' }

	export interface AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<AppServiceEnvironments_ChangeVnetReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListOperationsReturn {

		/** Time when operation has started. */
		createdTime?: Date | null;

		/** Any errors associate with the operation. */
		AppServiceEnvironments_ListOperationsReturnErrors?: Array<AppServiceEnvironments_ListOperationsReturnErrors>;

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
		status?: AppServiceEnvironments_ListOperationsReturnStatus | null;
	}
	export interface AppServiceEnvironments_ListOperationsReturnFormProperties {

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
		status: FormControl<AppServiceEnvironments_ListOperationsReturnStatus | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListOperationsReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListOperationsReturnFormProperties>({
			createdTime: new FormControl<Date | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			geoMasterOperationId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			modifiedTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AppServiceEnvironments_ListOperationsReturnStatus | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListOperationsReturnErrors {

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
	export interface AppServiceEnvironments_ListOperationsReturnErrorsFormProperties {

		/** Basic error code. */
		code: FormControl<string | null | undefined>,

		/** Type of error. */
		extendedCode: FormControl<string | null | undefined>,

		/** Any details of the error. */
		message: FormControl<string | null | undefined>,

		/** Message template. */
		messageTemplate: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListOperationsReturnErrorsFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListOperationsReturnErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			extendedCode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AppServiceEnvironments_ListOperationsReturnStatus { InProgress = 'InProgress', Failed = 'Failed', Succeeded = 'Succeeded', TimedOut = 'TimedOut', Created = 'Created' }

	export interface AppServiceEnvironments_ResumeReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_ResumeReturnValue: Array<AppServiceEnvironments_ResumeReturnValue>;
	}
	export interface AppServiceEnvironments_ResumeReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ResumeReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ResumeReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ResumeReturnValue {

		/** Managed service identity. */
		identity?: AppServiceEnvironments_ResumeReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface AppServiceEnvironments_ResumeReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ResumeReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_ResumeReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ResumeReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentities };
	}
	export interface AppServiceEnvironments_ResumeReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ResumeReturnValueIdentityFormGroup() {
		return new FormGroup<AppServiceEnvironments_ResumeReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<AppServiceEnvironments_ResumeReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListAppServicePlansReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_ListAppServicePlansReturnValue: Array<AppServiceEnvironments_ListAppServicePlansReturnValue>;
	}
	export interface AppServiceEnvironments_ListAppServicePlansReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListAppServicePlansReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListAppServicePlansReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListAppServicePlansReturnValue {

		/** AppServicePlan resource specific properties */
		properties?: any;

		/** Description of a SKU for a scalable resource. */
		sku?: AppServiceEnvironments_ListAppServicePlansReturnValueSku;
	}
	export interface AppServiceEnvironments_ListAppServicePlansReturnValueFormProperties {

		/** AppServicePlan resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListAppServicePlansReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListAppServicePlansReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSku {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		AppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilities?: Array<AppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilities>;

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
		skuCapacity?: AppServiceEnvironments_ListAppServicePlansReturnValueSkuSkuCapacity;

		/** Service tier of the resource SKU. */
		tier?: string | null;
	}
	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSkuFormProperties {

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
	export function CreateAppServiceEnvironments_ListAppServicePlansReturnValueSkuFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListAppServicePlansReturnValueSkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilitiesFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListAppServicePlansReturnValueSkuCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSkuSkuCapacity {

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
	export interface AppServiceEnvironments_ListAppServicePlansReturnValueSkuSkuCapacityFormProperties {

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
	export function CreateAppServiceEnvironments_ListAppServicePlansReturnValueSkuSkuCapacityFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListAppServicePlansReturnValueSkuSkuCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListWebAppsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_ListWebAppsReturnValue: Array<AppServiceEnvironments_ListWebAppsReturnValue>;
	}
	export interface AppServiceEnvironments_ListWebAppsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListWebAppsReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListWebAppsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListWebAppsReturnValue {

		/** Managed service identity. */
		identity?: AppServiceEnvironments_ListWebAppsReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface AppServiceEnvironments_ListWebAppsReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListWebAppsReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListWebAppsReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListWebAppsReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentities };
	}
	export interface AppServiceEnvironments_ListWebAppsReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListWebAppsReturnValueIdentityFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListWebAppsReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListWebAppsReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_SuspendReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_SuspendReturnValue: Array<AppServiceEnvironments_SuspendReturnValue>;
	}
	export interface AppServiceEnvironments_SuspendReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_SuspendReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_SuspendReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_SuspendReturnValue {

		/** Managed service identity. */
		identity?: AppServiceEnvironments_SuspendReturnValueIdentity;

		/** Site resource specific properties */
		properties?: any;
	}
	export interface AppServiceEnvironments_SuspendReturnValueFormProperties {

		/** Site resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAppServiceEnvironments_SuspendReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_SuspendReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_SuspendReturnValueIdentity {

		/** Principal Id of managed service identity. */
		principalId?: string | null;

		/** Tenant of managed service identity. */
		tenantId?: string | null;

		/** Type of managed service identity. */
		type?: AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null;

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities?: {[id: string]: AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentities };
	}
	export interface AppServiceEnvironments_SuspendReturnValueIdentityFormProperties {

		/** Principal Id of managed service identity. */
		principalId: FormControl<string | null | undefined>,

		/** Tenant of managed service identity. */
		tenantId: FormControl<string | null | undefined>,

		/** Type of managed service identity. */
		type: FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>,

		/** The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName} */
		userAssignedIdentities: FormControl<{[id: string]: AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateAppServiceEnvironments_SuspendReturnValueIdentityFormGroup() {
		return new FormGroup<AppServiceEnvironments_SuspendReturnValueIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AppServiceEnvironments_ChangeVnetReturnValueIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentities {

		/** Client Id of user assigned identity */
		clientId?: string | null;

		/** Principal Id of user assigned identity */
		principalId?: string | null;
	}
	export interface AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentitiesFormProperties {

		/** Client Id of user assigned identity */
		clientId: FormControl<string | null | undefined>,

		/** Principal Id of user assigned identity */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<AppServiceEnvironments_SuspendReturnValueIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListUsagesReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		AppServiceEnvironments_ListUsagesReturnValue: Array<AppServiceEnvironments_ListUsagesReturnValue>;
	}
	export interface AppServiceEnvironments_ListUsagesReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListUsagesReturnFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListUsagesReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListUsagesReturnValue {

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
		name?: AppServiceEnvironments_ListUsagesReturnValueName;

		/** Next reset time for the resource counter. */
		nextResetTime?: Date | null;

		/** Units of measurement for the quota resource. */
		unit?: string | null;
	}
	export interface AppServiceEnvironments_ListUsagesReturnValueFormProperties {

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
	export function CreateAppServiceEnvironments_ListUsagesReturnValueFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListUsagesReturnValueFormProperties>({
			currentValue: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<string | null | undefined>(undefined),
			nextResetTime: new FormControl<Date | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppServiceEnvironments_ListUsagesReturnValueName {

		/** Localized name. */
		localizedValue?: string | null;

		/** Non-localized name. */
		value?: string | null;
	}
	export interface AppServiceEnvironments_ListUsagesReturnValueNameFormProperties {

		/** Localized name. */
		localizedValue: FormControl<string | null | undefined>,

		/** Non-localized name. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAppServiceEnvironments_ListUsagesReturnValueNameFormGroup() {
		return new FormGroup<AppServiceEnvironments_ListUsagesReturnValueNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

