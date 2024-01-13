import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services. */
	export interface BillingMeter {

		/** BillingMeter resource specific properties */
		properties?: any;
	}

	/** App Service billing entity that contains information about meter which the Azure billing system utilizes to charge users for services. */
	export interface BillingMeterFormProperties {

		/** BillingMeter resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateBillingMeterFormGroup() {
		return new FormGroup<BillingMeterFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of Billing Meters */
	export interface BillingMeterCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<BillingMeter>;
	}

	/** Collection of Billing Meters */
	export interface BillingMeterCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBillingMeterCollectionFormGroup() {
		return new FormGroup<BillingMeterCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object with a list of the resources that need to be moved and the resource group they should be moved to. */
	export interface CsmMoveResourceEnvelope {
		resources?: Array<string>;

		/**
		 * Max length: 90
		 * Min length: 1
		 */
		targetResourceGroup?: string | null;
	}

	/** Object with a list of the resources that need to be moved and the resource group they should be moved to. */
	export interface CsmMoveResourceEnvelopeFormProperties {

		/**
		 * Max length: 90
		 * Min length: 1
		 */
		targetResourceGroup: FormControl<string | null | undefined>,
	}
	export function CreateCsmMoveResourceEnvelopeFormGroup() {
		return new FormGroup<CsmMoveResourceEnvelopeFormProperties>({
			targetResourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(90), Validators.pattern(' ^[-\w\._\(\)]+[^\.]$')]),
		});

	}


	/**
	 * List of available locations (regions or App Service Environments) for
	 * deployment of App Service resources.
	 */
	export interface DeploymentLocations {

		/** Available App Service Environments with basic information. */
		hostingEnvironmentDeploymentInfos?: Array<HostingEnvironmentDeploymentInfo>;

		/** Available App Service Environments with full descriptions of the environments. */
		DeploymentLocationsHostingEnvironments?: Array<DeploymentLocationsHostingEnvironments>;

		/** Available regions. */
		locations?: Array<GeoRegion>;
	}

	/**
	 * List of available locations (regions or App Service Environments) for
	 * deployment of App Service resources.
	 */
	export interface DeploymentLocationsFormProperties {
	}
	export function CreateDeploymentLocationsFormGroup() {
		return new FormGroup<DeploymentLocationsFormProperties>({
		});

	}


	/** Information needed to create resources on an App Service Environment. */
	export interface HostingEnvironmentDeploymentInfo {

		/** Location of the App Service Environment. */
		location?: string | null;

		/** Name of the App Service Environment. */
		name?: string | null;
	}

	/** Information needed to create resources on an App Service Environment. */
	export interface HostingEnvironmentDeploymentInfoFormProperties {

		/** Location of the App Service Environment. */
		location: FormControl<string | null | undefined>,

		/** Name of the App Service Environment. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateHostingEnvironmentDeploymentInfoFormGroup() {
		return new FormGroup<HostingEnvironmentDeploymentInfoFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentLocationsHostingEnvironments {

		/** List of comma separated strings describing which VM sizes are allowed for front-ends. */
		allowedMultiSizes?: string | null;

		/** List of comma separated strings describing which VM sizes are allowed for workers. */
		allowedWorkerSizes?: string | null;

		/** API Management Account associated with the App Service Environment. */
		apiManagementAccountId?: string | null;

		/** Custom settings for changing the behavior of the App Service Environment. */
		DeploymentLocationsHostingEnvironmentsClusterSettings?: Array<DeploymentLocationsHostingEnvironmentsClusterSettings>;

		/** Edition of the metadata database for the App Service Environment, e.g. "Standard". */
		databaseEdition?: string | null;

		/** Service objective of the metadata database for the App Service Environment, e.g. "S0". */
		databaseServiceObjective?: string | null;

		/** Default Scale Factor for FrontEnds. */
		defaultFrontEndScaleFactor?: number | null;

		/** DNS suffix of the App Service Environment. */
		dnsSuffix?: string | null;

		/**
		 * True/false indicating whether the App Service Environment is suspended. The environment can be suspended e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		dynamicCacheEnabled?: boolean | null;

		/** Current total, used, and available worker capacities. */
		DeploymentLocationsHostingEnvironmentsEnvironmentCapacities?: Array<DeploymentLocationsHostingEnvironmentsEnvironmentCapacities>;

		/** True/false indicating whether the App Service Environment is healthy. */
		environmentIsHealthy?: boolean | null;

		/** Detailed message about with results of the last check of the App Service Environment. */
		environmentStatus?: string | null;

		/** Scale factor for front-ends. */
		frontEndScaleFactor?: number | null;

		/** Flag that displays whether an ASE has linux workers or not */
		hasLinuxWorkers?: boolean | null;

		/** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
		internalLoadBalancingMode?: DeploymentLocationsHostingEnvironmentsInternalLoadBalancingMode | null;

		/** Number of IP SSL addresses reserved for the App Service Environment. */
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

		/** Maximum number of VMs in the App Service Environment. */
		maximumNumberOfMachines?: number | null;

		/** Number of front-end instances. */
		multiRoleCount?: number | null;

		/** Front-end VM size, e.g. "Medium", "Large". */
		multiSize?: string | null;

		/**
		 * Name of the App Service Environment.
		 * Required
		 */
		name: string;

		/** Access control list for controlling traffic to the App Service Environment. */
		DeploymentLocationsHostingEnvironmentsNetworkAccessControlList?: Array<DeploymentLocationsHostingEnvironmentsNetworkAccessControlList>;

		/** Provisioning state of the App Service Environment. */
		provisioningState?: DeploymentLocationsHostingEnvironmentsProvisioningState | null;

		/** Resource group of the App Service Environment. */
		resourceGroup?: string | null;

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId?: string | null;

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName?: string | null;

		/** Current status of the App Service Environment. */
		status?: DeploymentLocationsHostingEnvironmentsStatus | null;

		/** Subscription of the App Service Environment. */
		subscriptionId?: string | null;

		/**
		 * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		suspended?: boolean | null;

		/** Number of upgrade domains of the App Service Environment. */
		upgradeDomains?: number | null;

		/** User added ip ranges to whitelist on ASE db */
		userWhitelistedIpRanges?: Array<string>;

		/** Description of IP SSL mapping for the App Service Environment. */
		DeploymentLocationsHostingEnvironmentsVipMappings?: Array<DeploymentLocationsHostingEnvironmentsVipMappings>;

		/**
		 * Specification for using a Virtual Network.
		 * Required
		 */
		virtualNetwork: DeploymentLocationsVirtualNetwork;

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
		DeploymentLocationsHostingEnvironmentsWorkerPools: Array<DeploymentLocationsHostingEnvironmentsWorkerPools>;
	}
	export interface DeploymentLocationsHostingEnvironmentsFormProperties {

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

		/** Default Scale Factor for FrontEnds. */
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

		/** Scale factor for front-ends. */
		frontEndScaleFactor: FormControl<number | null | undefined>,

		/** Flag that displays whether an ASE has linux workers or not */
		hasLinuxWorkers: FormControl<boolean | null | undefined>,

		/** Specifies which endpoints to serve internally in the Virtual Network for the App Service Environment. */
		internalLoadBalancingMode: FormControl<DeploymentLocationsHostingEnvironmentsInternalLoadBalancingMode | null | undefined>,

		/** Number of IP SSL addresses reserved for the App Service Environment. */
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

		/** Maximum number of VMs in the App Service Environment. */
		maximumNumberOfMachines: FormControl<number | null | undefined>,

		/** Number of front-end instances. */
		multiRoleCount: FormControl<number | null | undefined>,

		/** Front-end VM size, e.g. "Medium", "Large". */
		multiSize: FormControl<string | null | undefined>,

		/**
		 * Name of the App Service Environment.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Provisioning state of the App Service Environment. */
		provisioningState: FormControl<DeploymentLocationsHostingEnvironmentsProvisioningState | null | undefined>,

		/** Resource group of the App Service Environment. */
		resourceGroup: FormControl<string | null | undefined>,

		/** Key Vault ID for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultId: FormControl<string | null | undefined>,

		/** Key Vault Secret Name for ILB App Service Environment default SSL certificate */
		sslCertKeyVaultSecretName: FormControl<string | null | undefined>,

		/** Current status of the App Service Environment. */
		status: FormControl<DeploymentLocationsHostingEnvironmentsStatus | null | undefined>,

		/** Subscription of the App Service Environment. */
		subscriptionId: FormControl<string | null | undefined>,

		/**
		 * <code>true</code> if the App Service Environment is suspended; otherwise, <code>false</code>. The environment can be suspended, e.g. when the management endpoint is no longer available
		 * (most likely because NSG blocked the incoming traffic).
		 */
		suspended: FormControl<boolean | null | undefined>,

		/** Number of upgrade domains of the App Service Environment. */
		upgradeDomains: FormControl<number | null | undefined>,

		/** Name of the Virtual Network for the App Service Environment. */
		vnetName: FormControl<string | null | undefined>,

		/** Resource group of the Virtual Network. */
		vnetResourceGroupName: FormControl<string | null | undefined>,

		/** Subnet of the Virtual Network. */
		vnetSubnetName: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsFormProperties>({
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
			internalLoadBalancingMode: new FormControl<DeploymentLocationsHostingEnvironmentsInternalLoadBalancingMode | null | undefined>(undefined),
			ipsslAddressCount: new FormControl<number | null | undefined>(undefined),
			lastAction: new FormControl<string | null | undefined>(undefined),
			lastActionResult: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximumNumberOfMachines: new FormControl<number | null | undefined>(undefined),
			multiRoleCount: new FormControl<number | null | undefined>(undefined),
			multiSize: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<DeploymentLocationsHostingEnvironmentsProvisioningState | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultId: new FormControl<string | null | undefined>(undefined),
			sslCertKeyVaultSecretName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DeploymentLocationsHostingEnvironmentsStatus | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			upgradeDomains: new FormControl<number | null | undefined>(undefined),
			vnetName: new FormControl<string | null | undefined>(undefined),
			vnetResourceGroupName: new FormControl<string | null | undefined>(undefined),
			vnetSubnetName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentLocationsHostingEnvironmentsClusterSettings {

		/** Pair name. */
		name?: string | null;

		/** Pair value. */
		value?: string | null;
	}
	export interface DeploymentLocationsHostingEnvironmentsClusterSettingsFormProperties {

		/** Pair name. */
		name: FormControl<string | null | undefined>,

		/** Pair value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsClusterSettingsFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsClusterSettingsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentLocationsHostingEnvironmentsEnvironmentCapacities {

		/** Available capacity (# of machines, bytes of storage etc...). */
		availableCapacity?: number | null;

		/** Shared/dedicated workers. */
		computeMode?: DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null;

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

		/** Total capacity (# of machines, bytes of storage etc...). */
		totalCapacity?: number | null;

		/** Name of the unit. */
		unit?: string | null;

		/** Size of the machines. */
		workerSize?: DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesWorkerSize | null;

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 */
		workerSizeId?: number | null;
	}
	export interface DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesFormProperties {

		/** Available capacity (# of machines, bytes of storage etc...). */
		availableCapacity: FormControl<number | null | undefined>,

		/** Shared/dedicated workers. */
		computeMode: FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null | undefined>,

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

		/** Total capacity (# of machines, bytes of storage etc...). */
		totalCapacity: FormControl<number | null | undefined>,

		/** Name of the unit. */
		unit: FormControl<string | null | undefined>,

		/** Size of the machines. */
		workerSize: FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesWorkerSize | null | undefined>,

		/**
		 * Size ID of machines:
		 * 0 - Small
		 * 1 - Medium
		 * 2 - Large
		 */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesFormProperties>({
			availableCapacity: new FormControl<number | null | undefined>(undefined),
			computeMode: new FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			excludeFromCapacityAllocation: new FormControl<boolean | null | undefined>(undefined),
			isApplicableForAllComputeModes: new FormControl<boolean | null | undefined>(undefined),
			isLinux: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			siteMode: new FormControl<string | null | undefined>(undefined),
			totalCapacity: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			workerSize: new FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesWorkerSize | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode { Shared = 0, Dedicated = 1, Dynamic = 2 }

	export enum DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesWorkerSize { Small = 0, Medium = 1, Large = 2, D1 = 3, D2 = 4, D3 = 5, NestedSmall = 6, Default = 7 }

	export enum DeploymentLocationsHostingEnvironmentsInternalLoadBalancingMode { None = 0, Web = 1, Publishing = 2 }

	export interface DeploymentLocationsHostingEnvironmentsNetworkAccessControlList {

		/** Action object. */
		action?: DeploymentLocationsHostingEnvironmentsNetworkAccessControlListAction | null;

		/** Description of network access control entry. */
		description?: string | null;

		/** Order of precedence. */
		order?: number | null;

		/** Remote subnet. */
		remoteSubnet?: string | null;
	}
	export interface DeploymentLocationsHostingEnvironmentsNetworkAccessControlListFormProperties {

		/** Action object. */
		action: FormControl<DeploymentLocationsHostingEnvironmentsNetworkAccessControlListAction | null | undefined>,

		/** Description of network access control entry. */
		description: FormControl<string | null | undefined>,

		/** Order of precedence. */
		order: FormControl<number | null | undefined>,

		/** Remote subnet. */
		remoteSubnet: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsNetworkAccessControlListFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsNetworkAccessControlListFormProperties>({
			action: new FormControl<DeploymentLocationsHostingEnvironmentsNetworkAccessControlListAction | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			remoteSubnet: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentLocationsHostingEnvironmentsNetworkAccessControlListAction { Permit = 0, Deny = 1 }

	export enum DeploymentLocationsHostingEnvironmentsProvisioningState { Succeeded = 0, Failed = 1, Canceled = 2, InProgress = 3, Deleting = 4 }

	export enum DeploymentLocationsHostingEnvironmentsStatus { Preparing = 0, Ready = 1, Scaling = 2, Deleting = 3 }

	export interface DeploymentLocationsHostingEnvironmentsVipMappings {

		/** Is virtual IP mapping in use. */
		inUse?: boolean | null;

		/** Internal HTTP port. */
		internalHttpPort?: number | null;

		/** Internal HTTPS port. */
		internalHttpsPort?: number | null;

		/** name of the service that virtual IP is assigned to */
		serviceName?: string | null;

		/** Virtual IP address. */
		virtualIP?: string | null;
	}
	export interface DeploymentLocationsHostingEnvironmentsVipMappingsFormProperties {

		/** Is virtual IP mapping in use. */
		inUse: FormControl<boolean | null | undefined>,

		/** Internal HTTP port. */
		internalHttpPort: FormControl<number | null | undefined>,

		/** Internal HTTPS port. */
		internalHttpsPort: FormControl<number | null | undefined>,

		/** name of the service that virtual IP is assigned to */
		serviceName: FormControl<string | null | undefined>,

		/** Virtual IP address. */
		virtualIP: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsVipMappingsFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsVipMappingsFormProperties>({
			inUse: new FormControl<boolean | null | undefined>(undefined),
			internalHttpPort: new FormControl<number | null | undefined>(undefined),
			internalHttpsPort: new FormControl<number | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
			virtualIP: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentLocationsVirtualNetwork {

		/** Resource id of the Virtual Network. */
		id?: string | null;

		/** Name of the Virtual Network (read-only). */
		name?: string | null;

		/** Subnet within the Virtual Network. */
		subnet?: string | null;

		/** Resource type of the Virtual Network (read-only). */
		type?: string | null;
	}
	export interface DeploymentLocationsVirtualNetworkFormProperties {

		/** Resource id of the Virtual Network. */
		id: FormControl<string | null | undefined>,

		/** Name of the Virtual Network (read-only). */
		name: FormControl<string | null | undefined>,

		/** Subnet within the Virtual Network. */
		subnet: FormControl<string | null | undefined>,

		/** Resource type of the Virtual Network (read-only). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentLocationsVirtualNetworkFormGroup() {
		return new FormGroup<DeploymentLocationsVirtualNetworkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subnet: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeploymentLocationsHostingEnvironmentsWorkerPools {

		/** Shared or dedicated app hosting. */
		computeMode?: DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null;

		/** Names of all instances in the worker pool (read only). */
		instanceNames?: Array<string>;

		/** Number of instances in the worker pool. */
		workerCount?: number | null;

		/** VM size of the worker pool instances. */
		workerSize?: string | null;

		/** Worker size ID for referencing this worker pool. */
		workerSizeId?: number | null;
	}
	export interface DeploymentLocationsHostingEnvironmentsWorkerPoolsFormProperties {

		/** Shared or dedicated app hosting. */
		computeMode: FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null | undefined>,

		/** Number of instances in the worker pool. */
		workerCount: FormControl<number | null | undefined>,

		/** VM size of the worker pool instances. */
		workerSize: FormControl<string | null | undefined>,

		/** Worker size ID for referencing this worker pool. */
		workerSizeId: FormControl<number | null | undefined>,
	}
	export function CreateDeploymentLocationsHostingEnvironmentsWorkerPoolsFormGroup() {
		return new FormGroup<DeploymentLocationsHostingEnvironmentsWorkerPoolsFormProperties>({
			computeMode: new FormControl<DeploymentLocationsHostingEnvironmentsEnvironmentCapacitiesComputeMode | null | undefined>(undefined),
			workerCount: new FormControl<number | null | undefined>(undefined),
			workerSize: new FormControl<string | null | undefined>(undefined),
			workerSizeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Geographical region. */
	export interface GeoRegion {

		/** GeoRegion resource specific properties */
		properties?: any;
	}

	/** Geographical region. */
	export interface GeoRegionFormProperties {

		/** GeoRegion resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateGeoRegionFormGroup() {
		return new FormGroup<GeoRegionFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of geographical regions. */
	export interface GeoRegionCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<GeoRegion>;
	}

	/** Collection of geographical regions. */
	export interface GeoRegionCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateGeoRegionCollectionFormGroup() {
		return new FormGroup<GeoRegionCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Global SKU Description. */
	export interface GlobalCsmSkuDescription {

		/** Capabilities of the SKU, e.g., is traffic manager enabled? */
		GlobalCsmSkuDescriptionCapabilities?: Array<GlobalCsmSkuDescriptionCapabilities>;

		/** Description of the App Service plan scale options. */
		capacity?: GlobalCsmSkuDescriptionCapacity;

		/** Family code of the resource SKU. */
		family?: string | null;

		/** Locations of the SKU. */
		locations?: Array<string>;

		/** Name of the resource SKU. */
		name?: string | null;

		/** Size specifier of the resource SKU. */
		size?: string | null;

		/** Service Tier of the resource SKU. */
		tier?: string | null;
	}

	/** A Global SKU Description. */
	export interface GlobalCsmSkuDescriptionFormProperties {

		/** Family code of the resource SKU. */
		family: FormControl<string | null | undefined>,

		/** Name of the resource SKU. */
		name: FormControl<string | null | undefined>,

		/** Size specifier of the resource SKU. */
		size: FormControl<string | null | undefined>,

		/** Service Tier of the resource SKU. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateGlobalCsmSkuDescriptionFormGroup() {
		return new FormGroup<GlobalCsmSkuDescriptionFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalCsmSkuDescriptionCapabilities {

		/** Name of the SKU capability. */
		name?: string | null;

		/** Reason of the SKU capability. */
		reason?: string | null;

		/** Value of the SKU capability. */
		value?: string | null;
	}
	export interface GlobalCsmSkuDescriptionCapabilitiesFormProperties {

		/** Name of the SKU capability. */
		name: FormControl<string | null | undefined>,

		/** Reason of the SKU capability. */
		reason: FormControl<string | null | undefined>,

		/** Value of the SKU capability. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGlobalCsmSkuDescriptionCapabilitiesFormGroup() {
		return new FormGroup<GlobalCsmSkuDescriptionCapabilitiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlobalCsmSkuDescriptionCapacity {

		/** Default number of workers for this App Service plan SKU. */
		default?: number | null;

		/** Maximum number of workers for this App Service plan SKU. */
		maximum?: number | null;

		/** Minimum number of workers for this App Service plan SKU. */
		minimum?: number | null;

		/** Available scale configurations for an App Service plan. */
		scaleType?: string | null;
	}
	export interface GlobalCsmSkuDescriptionCapacityFormProperties {

		/** Default number of workers for this App Service plan SKU. */
		default: FormControl<number | null | undefined>,

		/** Maximum number of workers for this App Service plan SKU. */
		maximum: FormControl<number | null | undefined>,

		/** Minimum number of workers for this App Service plan SKU. */
		minimum: FormControl<number | null | undefined>,

		/** Available scale configurations for an App Service plan. */
		scaleType: FormControl<string | null | undefined>,
	}
	export function CreateGlobalCsmSkuDescriptionCapacityFormGroup() {
		return new FormGroup<GlobalCsmSkuDescriptionCapacityFormProperties>({
			default: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			scaleType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Premier add-on offer. */
	export interface PremierAddOnOffer {

		/** PremierAddOnOffer resource specific properties */
		properties?: any;
	}

	/** Premier add-on offer. */
	export interface PremierAddOnOfferFormProperties {

		/** PremierAddOnOffer resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreatePremierAddOnOfferFormGroup() {
		return new FormGroup<PremierAddOnOfferFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of premier add-on offers. */
	export interface PremierAddOnOfferCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<PremierAddOnOffer>;
	}

	/** Collection of premier add-on offers. */
	export interface PremierAddOnOfferCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePremierAddOnOfferCollectionFormGroup() {
		return new FormGroup<PremierAddOnOfferCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information regarding availability of a resource name. */
	export interface ResourceNameAvailability {

		/** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
		message?: string | null;

		/** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
		nameAvailable?: boolean | null;

		/** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
		reason?: ResourceNameAvailabilityReason | null;
	}

	/** Information regarding availability of a resource name. */
	export interface ResourceNameAvailabilityFormProperties {

		/** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
		message: FormControl<string | null | undefined>,

		/** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
		reason: FormControl<ResourceNameAvailabilityReason | null | undefined>,
	}
	export function CreateResourceNameAvailabilityFormGroup() {
		return new FormGroup<ResourceNameAvailabilityFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<ResourceNameAvailabilityReason | null | undefined>(undefined),
		});

	}

	export enum ResourceNameAvailabilityReason { Invalid = 0, AlreadyExists = 1 }


	/** Resource name availability request content. */
	export interface ResourceNameAvailabilityRequest {

		/** Is fully qualified domain name. */
		isFqdn?: boolean | null;

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: string;

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: ResourceNameAvailabilityRequestType;
	}

	/** Resource name availability request content. */
	export interface ResourceNameAvailabilityRequestFormProperties {

		/** Is fully qualified domain name. */
		isFqdn: FormControl<boolean | null | undefined>,

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: FormControl<ResourceNameAvailabilityRequestType | null | undefined>,
	}
	export function CreateResourceNameAvailabilityRequestFormGroup() {
		return new FormGroup<ResourceNameAvailabilityRequestFormProperties>({
			isFqdn: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceNameAvailabilityRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceNameAvailabilityRequestType { Site = 0, Slot = 1, HostingEnvironment = 2, PublishingUser = 3, 'Microsoft.Web/sites' = 4, 'Microsoft.Web/sites/slots' = 5, 'Microsoft.Web/hostingEnvironments' = 6, 'Microsoft.Web/publishingUsers' = 7 }


	/** Collection of SKU information. */
	export interface SkuInfos {

		/** Resource type that this SKU applies to. */
		resourceType?: string | null;

		/** List of SKUs the subscription is able to use. */
		skus?: Array<GlobalCsmSkuDescription>;
	}

	/** Collection of SKU information. */
	export interface SkuInfosFormProperties {

		/** Resource type that this SKU applies to. */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateSkuInfosFormGroup() {
		return new FormGroup<SkuInfosFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source control OAuth token. */
	export interface SourceControl {

		/** SourceControl resource specific properties */
		properties?: any;
	}

	/** The source control OAuth token. */
	export interface SourceControlFormProperties {

		/** SourceControl resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateSourceControlFormGroup() {
		return new FormGroup<SourceControlFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Collection of source controls. */
	export interface SourceControlCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<SourceControl>;
	}

	/** Collection of source controls. */
	export interface SourceControlCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSourceControlCollectionFormGroup() {
		return new FormGroup<SourceControlCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** App properties used for validation. */
	export interface ValidateProperties {

		/**
		 * Target capacity of the App Service plan (number of VMs).
		 * Minimum: 1
		 */
		capacity?: number | null;

		/** Platform (windows or linux) */
		containerImagePlatform?: string | null;

		/** Repository name (image name) */
		containerImageRepository?: string | null;

		/** Image tag */
		containerImageTag?: string | null;

		/** Base URL of the container registry */
		containerRegistryBaseUrl?: string | null;

		/** Password for to access the container registry */
		containerRegistryPassword?: string | null;

		/** Username for to access the container registry */
		containerRegistryUsername?: string | null;

		/** Name of App Service Environment where app or App Service plan should be created. */
		hostingEnvironment?: string | null;

		/** <code>true</code> if App Service plan is for Spot instances; otherwise, <code>false</code>. */
		isSpot?: boolean | null;

		/** <code>true</code> if App Service plan is running as a windows container */
		isXenon?: boolean | null;

		/** <code>true</code> if App Service plan is for Linux workers; otherwise, <code>false</code>. */
		needLinuxWorkers?: boolean | null;

		/** ARM resource ID of an App Service plan that would host the app. */
		serverFarmId?: string | null;

		/** Name of the target SKU for the App Service plan. */
		skuName?: string | null;
	}

	/** App properties used for validation. */
	export interface ValidatePropertiesFormProperties {

		/**
		 * Target capacity of the App Service plan (number of VMs).
		 * Minimum: 1
		 */
		capacity: FormControl<number | null | undefined>,

		/** Platform (windows or linux) */
		containerImagePlatform: FormControl<string | null | undefined>,

		/** Repository name (image name) */
		containerImageRepository: FormControl<string | null | undefined>,

		/** Image tag */
		containerImageTag: FormControl<string | null | undefined>,

		/** Base URL of the container registry */
		containerRegistryBaseUrl: FormControl<string | null | undefined>,

		/** Password for to access the container registry */
		containerRegistryPassword: FormControl<string | null | undefined>,

		/** Username for to access the container registry */
		containerRegistryUsername: FormControl<string | null | undefined>,

		/** Name of App Service Environment where app or App Service plan should be created. */
		hostingEnvironment: FormControl<string | null | undefined>,

		/** <code>true</code> if App Service plan is for Spot instances; otherwise, <code>false</code>. */
		isSpot: FormControl<boolean | null | undefined>,

		/** <code>true</code> if App Service plan is running as a windows container */
		isXenon: FormControl<boolean | null | undefined>,

		/** <code>true</code> if App Service plan is for Linux workers; otherwise, <code>false</code>. */
		needLinuxWorkers: FormControl<boolean | null | undefined>,

		/** ARM resource ID of an App Service plan that would host the app. */
		serverFarmId: FormControl<string | null | undefined>,

		/** Name of the target SKU for the App Service plan. */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateValidatePropertiesFormGroup() {
		return new FormGroup<ValidatePropertiesFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			containerImagePlatform: new FormControl<string | null | undefined>(undefined),
			containerImageRepository: new FormControl<string | null | undefined>(undefined),
			containerImageTag: new FormControl<string | null | undefined>(undefined),
			containerRegistryBaseUrl: new FormControl<string | null | undefined>(undefined),
			containerRegistryPassword: new FormControl<string | null | undefined>(undefined),
			containerRegistryUsername: new FormControl<string | null | undefined>(undefined),
			hostingEnvironment: new FormControl<string | null | undefined>(undefined),
			isSpot: new FormControl<boolean | null | undefined>(undefined),
			isXenon: new FormControl<boolean | null | undefined>(undefined),
			needLinuxWorkers: new FormControl<boolean | null | undefined>(undefined),
			serverFarmId: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource validation request content. */
	export interface ValidateRequest {

		/**
		 * Expected location of the resource.
		 * Required
		 */
		location: string;

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: string;

		/**
		 * App properties used for validation.
		 * Required
		 */
		properties: ValidateProperties;

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: ValidateRequestType;
	}

	/** Resource validation request content. */
	export interface ValidateRequestFormProperties {

		/**
		 * Expected location of the resource.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: FormControl<ValidateRequestType | null | undefined>,
	}
	export function CreateValidateRequestFormGroup() {
		return new FormGroup<ValidateRequestFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ValidateRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ValidateRequestType { ServerFarm = 0, Site = 1 }


	/** Describes the result of resource validation. */
	export interface ValidateResponse {

		/** Error details for when validation fails. */
		error?: ValidateResponseError;

		/** Result of validation. */
		status?: string | null;
	}

	/** Describes the result of resource validation. */
	export interface ValidateResponseFormProperties {

		/** Result of validation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateValidateResponseFormGroup() {
		return new FormGroup<ValidateResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error details for when validation fails. */
	export interface ValidateResponseError {

		/** Validation error code. */
		code?: string | null;

		/** Validation error message. */
		message?: string | null;
	}

	/** Error details for when validation fails. */
	export interface ValidateResponseErrorFormProperties {

		/** Validation error code. */
		code: FormControl<string | null | undefined>,

		/** Validation error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateValidateResponseErrorFormGroup() {
		return new FormGroup<ValidateResponseErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The required set of inputs to validate a VNET */
	export interface VnetParameters {

		/** VnetParameters resource specific properties */
		properties?: any;
	}

	/** The required set of inputs to validate a VNET */
	export interface VnetParametersFormProperties {

		/** VnetParameters resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetParametersFormGroup() {
		return new FormGroup<VnetParametersFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A class that describes the reason for a validation failure. */
	export interface VnetValidationFailureDetails {

		/** VnetValidationFailureDetails resource specific properties */
		properties?: any;
	}

	/** A class that describes the reason for a validation failure. */
	export interface VnetValidationFailureDetailsFormProperties {

		/** VnetValidationFailureDetails resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetValidationFailureDetailsFormGroup() {
		return new FormGroup<VnetValidationFailureDetailsFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A class that describes a test that failed during NSG and UDR validation. */
	export interface VnetValidationTestFailure {

		/** VnetValidationTestFailure resource specific properties */
		properties?: any;
	}

	/** A class that describes a test that failed during NSG and UDR validation. */
	export interface VnetValidationTestFailureFormProperties {

		/** VnetValidationTestFailure resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateVnetValidationTestFailureFormGroup() {
		return new FormGroup<VnetValidationTestFailureFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets publishing user
		 * Description for Gets publishing user
		 * Get providers/Microsoft.Web/publishingUsers/web
		 * @param {string} api_version API Version
		 * @return {GetPublishingUserReturn} OK
		 */
		GetPublishingUser(api_version: string): Observable<GetPublishingUserReturn> {
			return this.http.get<GetPublishingUserReturn>(this.baseUri + 'providers/Microsoft.Web/publishingUsers/web?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates publishing user
		 * Description for Updates publishing user
		 * Put providers/Microsoft.Web/publishingUsers/web
		 * @param {string} api_version API Version
		 * @param {UpdatePublishingUserPutBody} requestBody Details of publishing user
		 * @return {UpdatePublishingUserReturn} OK
		 */
		UpdatePublishingUser(api_version: string, requestBody: UpdatePublishingUserPutBody): Observable<UpdatePublishingUserReturn> {
			return this.http.put<UpdatePublishingUserReturn>(this.baseUri + 'providers/Microsoft.Web/publishingUsers/web?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the source controls available for Azure websites.
		 * Description for Gets the source controls available for Azure websites.
		 * Get providers/Microsoft.Web/sourcecontrols
		 * @param {string} api_version API Version
		 * @return {SourceControlCollection} OK
		 */
		ListSourceControls(api_version: string): Observable<SourceControlCollection> {
			return this.http.get<SourceControlCollection>(this.baseUri + 'providers/Microsoft.Web/sourcecontrols?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets source control token
		 * Description for Gets source control token
		 * Get providers/Microsoft.Web/sourcecontrols/{sourceControlType}
		 * @param {string} sourceControlType Type of source control
		 * @param {string} api_version API Version
		 * @return {SourceControl} OK
		 */
		GetSourceControl(sourceControlType: string, api_version: string): Observable<SourceControl> {
			return this.http.get<SourceControl>(this.baseUri + 'providers/Microsoft.Web/sourcecontrols/' + (sourceControlType == null ? '' : encodeURIComponent(sourceControlType)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates source control token
		 * Description for Updates source control token
		 * Put providers/Microsoft.Web/sourcecontrols/{sourceControlType}
		 * @param {string} sourceControlType Type of source control
		 * @param {string} api_version API Version
		 * @param {SourceControl} requestBody Source control token information
		 * @return {SourceControl} OK
		 */
		UpdateSourceControl(sourceControlType: string, api_version: string, requestBody: SourceControl): Observable<SourceControl> {
			return this.http.put<SourceControl>(this.baseUri + 'providers/Microsoft.Web/sourcecontrols/' + (sourceControlType == null ? '' : encodeURIComponent(sourceControlType)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of meters for a given location.
		 * Description for Gets a list of meters for a given location.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/billingMeters
		 * @param {string} billingLocation Azure Location of billable resource
		 * @param {string} osType App Service OS type meters used for
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {BillingMeterCollection} OK
		 */
		ListBillingMeters(billingLocation: string | null | undefined, osType: string | null | undefined, subscriptionId: string, api_version: string): Observable<BillingMeterCollection> {
			return this.http.get<BillingMeterCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/billingMeters?billingLocation=' + (billingLocation == null ? '' : encodeURIComponent(billingLocation)) + '&osType=' + (osType == null ? '' : encodeURIComponent(osType)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check if a resource name is available.
		 * Description for Check if a resource name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Web/checknameavailability
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ResourceNameAvailabilityRequest} requestBody Name availability request.
		 * @return {ResourceNameAvailability} OK
		 */
		CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: ResourceNameAvailabilityRequest): Observable<ResourceNameAvailability> {
			return this.http.post<ResourceNameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/checknameavailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets list of available geo regions plus ministamps
		 * Description for Gets list of available geo regions plus ministamps
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/deploymentLocations
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {DeploymentLocations} OK
		 */
		GetSubscriptionDeploymentLocations(subscriptionId: string, api_version: string): Observable<DeploymentLocations> {
			return this.http.get<DeploymentLocations>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/deploymentLocations&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of available geographical regions.
		 * Description for Get a list of available geographical regions.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/geoRegions
		 * @param {ListGeoRegionsSku} sku Name of SKU used to filter the regions.
		 * @param {boolean} linuxWorkersEnabled Specify <code>true</code> if you want to filter to only regions that support Linux workers.
		 * @param {boolean} xenonWorkersEnabled Specify <code>true</code> if you want to filter to only regions that support Xenon workers.
		 * @param {boolean} linuxDynamicWorkersEnabled Specify <code>true</code> if you want to filter to only regions that support Linux Consumption Workers.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {GeoRegionCollection} OK
		 */
		ListGeoRegions(sku: ListGeoRegionsSku | null | undefined, linuxWorkersEnabled: boolean | null | undefined, xenonWorkersEnabled: boolean | null | undefined, linuxDynamicWorkersEnabled: boolean | null | undefined, subscriptionId: string, api_version: string): Observable<GeoRegionCollection> {
			return this.http.get<GeoRegionCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/geoRegions?sku=' + sku + '&linuxWorkersEnabled=' + linuxWorkersEnabled + '&xenonWorkersEnabled=' + xenonWorkersEnabled + '&linuxDynamicWorkersEnabled=' + linuxDynamicWorkersEnabled + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all apps that are assigned to a hostname.
		 * Description for List all apps that are assigned to a hostname.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Web/listSitesAssignedToHostName
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ListSiteIdentifiersAssignedToHostNamePostBody} requestBody Hostname information.
		 * @return {ListSiteIdentifiersAssignedToHostNameReturn} OK
		 */
		ListSiteIdentifiersAssignedToHostName(subscriptionId: string, api_version: string, requestBody: ListSiteIdentifiersAssignedToHostNamePostBody): Observable<ListSiteIdentifiersAssignedToHostNameReturn> {
			return this.http.post<ListSiteIdentifiersAssignedToHostNameReturn>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/listSitesAssignedToHostName&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all premier add-on offers.
		 * Description for List all premier add-on offers.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/premieraddonoffers
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {PremierAddOnOfferCollection} OK
		 */
		ListPremierAddOnOffers(subscriptionId: string, api_version: string): Observable<PremierAddOnOfferCollection> {
			return this.http.get<PremierAddOnOfferCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/premieraddonoffers&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * List all SKUs.
		 * Description for List all SKUs.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/skus
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {SkuInfos} OK
		 */
		ListSkus(subscriptionId: string, api_version: string): Observable<SkuInfos> {
			return this.http.get<SkuInfos>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/skus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.
		 * Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the Network Security Group rules.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Web/verifyHostingEnvironmentVnet
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {VnetParameters} requestBody VNET information
		 * @return {VnetValidationFailureDetails} OK
		 */
		VerifyHostingEnvironmentVnet(subscriptionId: string, api_version: string, requestBody: VnetParameters): Observable<VnetValidationFailureDetails> {
			return this.http.post<VnetValidationFailureDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/verifyHostingEnvironmentVnet&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Move resources between resource groups.
		 * Description for Move resources between resource groups.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmMoveResourceEnvelope} requestBody Object that represents the resource to move.
		 * @return {void} 
		 */
		Move(resourceGroupName: string, subscriptionId: string, api_version: string, requestBody: CsmMoveResourceEnvelope): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/moveResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate if a resource can be created.
		 * Description for Validate if a resource can be created.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/validate
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {ValidateRequest} requestBody Request with the resources to validate.
		 * @return {ValidateResponse} OK
		 */
		Validate(resourceGroupName: string, subscriptionId: string, api_version: string, requestBody: ValidateRequest): Observable<ValidateResponse> {
			return this.http.post<ValidateResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Web/validate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Validate whether a resource can be moved.
		 * Description for Validate whether a resource can be moved.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/validateMoveResources
		 * @param {string} resourceGroupName Name of the resource group to which the resource belongs.
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @param {CsmMoveResourceEnvelope} requestBody Object that represents the resource to move.
		 * @return {void} 
		 */
		ValidateMove(resourceGroupName: string, subscriptionId: string, api_version: string, requestBody: CsmMoveResourceEnvelope): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/validateMoveResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface GetPublishingUserReturn {

		/** User resource specific properties */
		properties?: any;
	}
	export interface GetPublishingUserReturnFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateGetPublishingUserReturnFormGroup() {
		return new FormGroup<GetPublishingUserReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdatePublishingUserPutBody {

		/** User resource specific properties */
		properties?: any;
	}
	export interface UpdatePublishingUserPutBodyFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateUpdatePublishingUserPutBodyFormGroup() {
		return new FormGroup<UpdatePublishingUserPutBodyFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdatePublishingUserReturn {

		/** User resource specific properties */
		properties?: any;
	}
	export interface UpdatePublishingUserReturnFormProperties {

		/** User resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateUpdatePublishingUserReturnFormGroup() {
		return new FormGroup<UpdatePublishingUserReturnFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum ListGeoRegionsSku { Free = 0, Shared = 1, Basic = 2, Standard = 3, Premium = 4, Dynamic = 5, Isolated = 6, PremiumV2 = 7, ElasticPremium = 8, ElasticIsolated = 9 }

	export interface ListSiteIdentifiersAssignedToHostNamePostBody {

		/** Name of the object. */
		name?: string | null;
	}
	export interface ListSiteIdentifiersAssignedToHostNamePostBodyFormProperties {

		/** Name of the object. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateListSiteIdentifiersAssignedToHostNamePostBodyFormGroup() {
		return new FormGroup<ListSiteIdentifiersAssignedToHostNamePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSiteIdentifiersAssignedToHostNameReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		ListSiteIdentifiersAssignedToHostNameReturnValue: Array<ListSiteIdentifiersAssignedToHostNameReturnValue>;
	}
	export interface ListSiteIdentifiersAssignedToHostNameReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateListSiteIdentifiersAssignedToHostNameReturnFormGroup() {
		return new FormGroup<ListSiteIdentifiersAssignedToHostNameReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSiteIdentifiersAssignedToHostNameReturnValue {

		/** Identifier resource specific properties */
		properties?: any;
	}
	export interface ListSiteIdentifiersAssignedToHostNameReturnValueFormProperties {

		/** Identifier resource specific properties */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateListSiteIdentifiersAssignedToHostNameReturnValueFormGroup() {
		return new FormGroup<ListSiteIdentifiersAssignedToHostNameReturnValueFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

}

