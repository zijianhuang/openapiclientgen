import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Resource provider available operation model */
	export interface AvailableOperation {

		/** Resource provider available operation display model */
		display?: AvailableOperationDisplay;

		/** Indicating whether the operation is a data action or not */
		isDataAction?: boolean | null;

		/** {resourceProviderNamespace}/{resourceType}/{read|write|delete|action} */
		name?: string | null;

		/** The origin of operation */
		origin?: AvailableOperationOrigin | null;

		/** Available operation display property service specification model */
		properties?: AvailableOperationDisplayPropertyServiceSpecification;
	}

	/** Resource provider available operation model */
	export interface AvailableOperationFormProperties {

		/** Indicating whether the operation is a data action or not */
		isDataAction: FormControl<boolean | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType}/{read|write|delete|action} */
		name: FormControl<string | null | undefined>,

		/** The origin of operation */
		origin: FormControl<AvailableOperationOrigin | null | undefined>,
	}
	export function CreateAvailableOperationFormGroup() {
		return new FormGroup<AvailableOperationFormProperties>({
			isDataAction: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<AvailableOperationOrigin | null | undefined>(undefined),
		});

	}


	/** Resource provider available operation display model */
	export interface AvailableOperationDisplay {

		/** Description of the operation for display purposes */
		description?: string | null;

		/** Name of the operation for display purposes */
		operation?: string | null;

		/** Name of the provider for display purposes */
		provider?: string | null;

		/** Name of the resource type for display purposes */
		resource?: string | null;
	}

	/** Resource provider available operation display model */
	export interface AvailableOperationDisplayFormProperties {

		/** Description of the operation for display purposes */
		description: FormControl<string | null | undefined>,

		/** Name of the operation for display purposes */
		operation: FormControl<string | null | undefined>,

		/** Name of the provider for display purposes */
		provider: FormControl<string | null | undefined>,

		/** Name of the resource type for display purposes */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationDisplayFormGroup() {
		return new FormGroup<AvailableOperationDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AvailableOperationOrigin { user = 'user', system = 'system', 'user,system' = 'user,system' }


	/** Available operation display property service specification model */
	export interface AvailableOperationDisplayPropertyServiceSpecification {

		/** List of available operation display property service specification metrics */
		serviceSpecification?: AvailableOperationDisplayPropertyServiceSpecificationMetricsList;
	}

	/** Available operation display property service specification model */
	export interface AvailableOperationDisplayPropertyServiceSpecificationFormProperties {
	}
	export function CreateAvailableOperationDisplayPropertyServiceSpecificationFormGroup() {
		return new FormGroup<AvailableOperationDisplayPropertyServiceSpecificationFormProperties>({
		});

	}


	/** Available operation display property service specification metrics item */
	export interface AvailableOperationDisplayPropertyServiceSpecificationMetricsItem {

		/**
		 * Metric's aggregation type for e.g. (Average, Total)
		 * Required
		 */
		aggregationType: AvailableOperationDisplayPropertyServiceSpecificationMetricsItemAggregationType;

		/**
		 * Metric's description
		 * Required
		 */
		displayDescription: string;

		/**
		 * Human readable metric's name
		 * Required
		 */
		displayName: string;

		/**
		 * Metric's name/id
		 * Required
		 */
		name: string;

		/**
		 * Metric's unit
		 * Required
		 */
		unit: string;
	}

	/** Available operation display property service specification metrics item */
	export interface AvailableOperationDisplayPropertyServiceSpecificationMetricsItemFormProperties {

		/**
		 * Metric's aggregation type for e.g. (Average, Total)
		 * Required
		 */
		aggregationType: FormControl<AvailableOperationDisplayPropertyServiceSpecificationMetricsItemAggregationType | null | undefined>,

		/**
		 * Metric's description
		 * Required
		 */
		displayDescription: FormControl<string | null | undefined>,

		/**
		 * Human readable metric's name
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Metric's name/id
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Metric's unit
		 * Required
		 */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationDisplayPropertyServiceSpecificationMetricsItemFormGroup() {
		return new FormGroup<AvailableOperationDisplayPropertyServiceSpecificationMetricsItemFormProperties>({
			aggregationType: new FormControl<AvailableOperationDisplayPropertyServiceSpecificationMetricsItemAggregationType | null | undefined>(undefined, [Validators.required]),
			displayDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AvailableOperationDisplayPropertyServiceSpecificationMetricsItemAggregationType { Average = 'Average', Total = 'Total' }


	/** List of available operation display property service specification metrics */
	export interface AvailableOperationDisplayPropertyServiceSpecificationMetricsList {

		/** Metric specifications of operation */
		metricSpecifications?: Array<AvailableOperationDisplayPropertyServiceSpecificationMetricsItem>;
	}

	/** List of available operation display property service specification metrics */
	export interface AvailableOperationDisplayPropertyServiceSpecificationMetricsListFormProperties {
	}
	export function CreateAvailableOperationDisplayPropertyServiceSpecificationMetricsListFormGroup() {
		return new FormGroup<AvailableOperationDisplayPropertyServiceSpecificationMetricsListFormProperties>({
		});

	}


	/** List of available operations */
	export interface AvailableOperationsListResponse {

		/** Link for next list of available operations */
		nextLink?: string | null;

		/** Returns a list of available operations */
		value?: Array<AvailableOperation>;
	}

	/** List of available operations */
	export interface AvailableOperationsListResponseFormProperties {

		/** Link for next list of available operations */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAvailableOperationsListResponseFormGroup() {
		return new FormGroup<AvailableOperationsListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** General error model */
	export interface CSRPError {

		/** Error properties */
		error?: CSRPErrorBody;
	}

	/** General error model */
	export interface CSRPErrorFormProperties {
	}
	export function CreateCSRPErrorFormGroup() {
		return new FormGroup<CSRPErrorFormProperties>({
		});

	}


	/** Error properties */
	export interface CSRPErrorBody {

		/** Error's code */
		code?: string | null;

		/** Error's details */
		details?: Array<CSRPErrorBody>;

		/** Error's message */
		message?: string | null;

		/** Error's target */
		target?: string | null;
	}

	/** Error properties */
	export interface CSRPErrorBodyFormProperties {

		/** Error's code */
		code: FormControl<string | null | undefined>,

		/** Error's message */
		message: FormControl<string | null | undefined>,

		/** Error's target */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCSRPErrorBodyFormGroup() {
		return new FormGroup<CSRPErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Host name model */
	export interface CustomizationHostName {

		/** Hostname */
		name?: string | null;

		/** Type of host name */
		type?: CustomizationHostNameType | null;
	}

	/** Host name model */
	export interface CustomizationHostNameFormProperties {

		/** Hostname */
		name: FormControl<string | null | undefined>,

		/** Type of host name */
		type: FormControl<CustomizationHostNameType | null | undefined>,
	}
	export function CreateCustomizationHostNameFormGroup() {
		return new FormGroup<CustomizationHostNameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomizationHostNameType | null | undefined>(undefined),
		});

	}

	export enum CustomizationHostNameType { USER_DEFINED = 'USER_DEFINED', PREFIX_BASED = 'PREFIX_BASED', FIXED = 'FIXED', VIRTUAL_MACHINE_NAME = 'VIRTUAL_MACHINE_NAME', CUSTOM_NAME = 'CUSTOM_NAME' }

	export interface CustomizationIPAddress {

		/** Argument when Custom ip type is selected */
		argument?: string | null;

		/** Defined Ip Address when Fixed ip type is selected */
		ipAddress?: string | null;

		/** Customization Specification ip type */
		type?: CustomizationIPAddressType | null;
	}
	export interface CustomizationIPAddressFormProperties {

		/** Argument when Custom ip type is selected */
		argument: FormControl<string | null | undefined>,

		/** Defined Ip Address when Fixed ip type is selected */
		ipAddress: FormControl<string | null | undefined>,

		/** Customization Specification ip type */
		type: FormControl<CustomizationIPAddressType | null | undefined>,
	}
	export function CreateCustomizationIPAddressFormGroup() {
		return new FormGroup<CustomizationIPAddressFormProperties>({
			argument: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomizationIPAddressType | null | undefined>(undefined),
		});

	}

	export enum CustomizationIPAddressType { CUSTOM = 'CUSTOM', DHCP_IP = 'DHCP_IP', FIXED_IP = 'FIXED_IP', USER_DEFINED = 'USER_DEFINED' }

	export interface CustomizationIPSettings {

		/** The list of gateways */
		gateway?: Array<string>;
		ip?: CustomizationIPAddress;

		/** Adapter subnet mask */
		subnetMask?: string | null;
	}
	export interface CustomizationIPSettingsFormProperties {

		/** Adapter subnet mask */
		subnetMask: FormControl<string | null | undefined>,
	}
	export function CreateCustomizationIPSettingsFormGroup() {
		return new FormGroup<CustomizationIPSettingsFormProperties>({
			subnetMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomizationIdentity {

		/** Windows Text Identity. Prepared data */
		data?: string | null;

		/** Host name model */
		hostName?: CustomizationHostName;

		/** Identity type */
		type?: CustomizationIdentityType | null;

		/** Windows Identity. User data customization */
		userData?: CustomizationIdentityUserData;
	}
	export interface CustomizationIdentityFormProperties {

		/** Windows Text Identity. Prepared data */
		data: FormControl<string | null | undefined>,

		/** Identity type */
		type: FormControl<CustomizationIdentityType | null | undefined>,
	}
	export function CreateCustomizationIdentityFormGroup() {
		return new FormGroup<CustomizationIdentityFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomizationIdentityType | null | undefined>(undefined),
		});

	}

	export enum CustomizationIdentityType { WINDOWS_TEXT = 'WINDOWS_TEXT', WINDOWS = 'WINDOWS', LINUX = 'LINUX' }

	export interface CustomizationIdentityUserData {

		/** Is password predefined in customization policy */
		isPasswordPredefined?: boolean | null;
	}
	export interface CustomizationIdentityUserDataFormProperties {

		/** Is password predefined in customization policy */
		isPasswordPredefined: FormControl<boolean | null | undefined>,
	}
	export function CreateCustomizationIdentityUserDataFormGroup() {
		return new FormGroup<CustomizationIdentityUserDataFormProperties>({
			isPasswordPredefined: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CustomizationNicSetting {
		adapter?: CustomizationIPSettings;

		/** NIC mac address */
		macAddress?: string | null;
	}
	export interface CustomizationNicSettingFormProperties {

		/** NIC mac address */
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateCustomizationNicSettingFormGroup() {
		return new FormGroup<CustomizationNicSettingFormProperties>({
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of customization polices response model */
	export interface CustomizationPoliciesListResponse {

		/** Link for next list of the Customization policy */
		nextLink?: string | null;

		/** List of the customization policies */
		value?: Array<CustomizationPolicy>;
	}

	/** List of customization polices response model */
	export interface CustomizationPoliciesListResponseFormProperties {

		/** Link for next list of the Customization policy */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCustomizationPoliciesListResponseFormGroup() {
		return new FormGroup<CustomizationPoliciesListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The virtual machine customization policy */
	export interface CustomizationPolicy {

		/** Customization policy azure id */
		id?: string | null;

		/** Azure region */
		location?: string | null;

		/** Customization policy name */
		name?: string | null;

		/** The properties of Customization policy */
		properties?: CustomizationPolicyProperties;
		type?: string | null;
	}

	/** The virtual machine customization policy */
	export interface CustomizationPolicyFormProperties {

		/** Customization policy azure id */
		id: FormControl<string | null | undefined>,

		/** Azure region */
		location: FormControl<string | null | undefined>,

		/** Customization policy name */
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCustomizationPolicyFormGroup() {
		return new FormGroup<CustomizationPolicyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of Customization policy */
	export interface CustomizationPolicyProperties {

		/** Policy description */
		description?: string | null;

		/** The Private cloud id */
		privateCloudId?: string | null;

		/** The specification for Customization Policy */
		specification?: CustomizationSpecification;

		/** The type of customization (Linux or Windows) */
		type?: CustomizationPolicyPropertiesType | null;

		/** Policy version */
		version?: string | null;
	}

	/** The properties of Customization policy */
	export interface CustomizationPolicyPropertiesFormProperties {

		/** Policy description */
		description: FormControl<string | null | undefined>,

		/** The Private cloud id */
		privateCloudId: FormControl<string | null | undefined>,

		/** The type of customization (Linux or Windows) */
		type: FormControl<CustomizationPolicyPropertiesType | null | undefined>,

		/** Policy version */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCustomizationPolicyPropertiesFormGroup() {
		return new FormGroup<CustomizationPolicyPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CustomizationPolicyPropertiesType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specification for Customization Policy */
	export interface CustomizationSpecification {
		identity?: CustomizationIdentity;

		/** Network interface settings */
		nicSettings?: Array<CustomizationNicSetting>;
	}

	/** The specification for Customization Policy */
	export interface CustomizationSpecificationFormProperties {
	}
	export function CreateCustomizationSpecificationFormGroup() {
		return new FormGroup<CustomizationSpecificationFormProperties>({
		});

	}

	export enum CustomizationPolicyPropertiesType { LINUX = 'LINUX', WINDOWS = 'WINDOWS' }


	/** Dedicated cloud node model */
	export interface DedicatedCloudNode {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudNodes/{dedicatedCloudNodeName} */
		id?: string | null;

		/**
		 * Azure region
		 * Required
		 */
		location: string;

		/** {dedicatedCloudNodeName} */
		name?: string | null;

		/** Properties of dedicated cloud node */
		properties?: DedicatedCloudNodeProperties;

		/** The purchase SKU for CloudSimple paid resources */
		sku?: Sku;

		/** Tags model */
		tags?: Tags;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Dedicated cloud node model */
	export interface DedicatedCloudNodeFormProperties {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudNodes/{dedicatedCloudNodeName} */
		id: FormControl<string | null | undefined>,

		/**
		 * Azure region
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** {dedicatedCloudNodeName} */
		name: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudNodeFormGroup() {
		return new FormGroup<DedicatedCloudNodeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9]([-_.a-zA-Z0-9]*[a-zA-Z0-9])?$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of dedicated nodes response model */
	export interface DedicatedCloudNodeListResponse {

		/** Link for next list of DedicatedCloudNode */
		nextLink?: string | null;

		/** Results of the DedicatedCloudNode list */
		value?: Array<DedicatedCloudNode>;
	}

	/** List of dedicated nodes response model */
	export interface DedicatedCloudNodeListResponseFormProperties {

		/** Link for next list of DedicatedCloudNode */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudNodeListResponseFormGroup() {
		return new FormGroup<DedicatedCloudNodeListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of dedicated cloud node */
	export interface DedicatedCloudNodeProperties {

		/**
		 * Availability Zone id, e.g. "az1"
		 * Required
		 */
		availabilityZoneId: string;

		/** Availability Zone name, e.g. "Availability Zone 1" */
		availabilityZoneName?: string | null;

		/** VMWare Cloud Rack Name */
		cloudRackName?: string | null;

		/** date time the resource was created */
		created?: any;

		/**
		 * count of nodes to create
		 * Required
		 */
		nodesCount: number;

		/**
		 * Placement Group id, e.g. "n1"
		 * Required
		 */
		placementGroupId: string;

		/** Placement Name, e.g. "Placement Group 1" */
		placementGroupName?: string | null;

		/** Private Cloud Id */
		privateCloudId?: string | null;

		/** Resource Pool Name */
		privateCloudName?: string | null;

		/** The provisioning status of the resource */
		provisioningState?: string | null;

		/**
		 * purchase id
		 * Required
		 */
		purchaseId: string;

		/** The purchase SKU for CloudSimple paid resources */
		skuDescription?: SkuDescription;

		/** Node status, indicates is private cloud set up on this node or not */
		status?: DedicatedCloudNodePropertiesStatus | null;

		/** VMWare Cluster Name */
		vmwareClusterName?: string | null;
	}

	/** Properties of dedicated cloud node */
	export interface DedicatedCloudNodePropertiesFormProperties {

		/**
		 * Availability Zone id, e.g. "az1"
		 * Required
		 */
		availabilityZoneId: FormControl<string | null | undefined>,

		/** Availability Zone name, e.g. "Availability Zone 1" */
		availabilityZoneName: FormControl<string | null | undefined>,

		/** VMWare Cloud Rack Name */
		cloudRackName: FormControl<string | null | undefined>,

		/** date time the resource was created */
		created: FormControl<any | null | undefined>,

		/**
		 * count of nodes to create
		 * Required
		 */
		nodesCount: FormControl<number | null | undefined>,

		/**
		 * Placement Group id, e.g. "n1"
		 * Required
		 */
		placementGroupId: FormControl<string | null | undefined>,

		/** Placement Name, e.g. "Placement Group 1" */
		placementGroupName: FormControl<string | null | undefined>,

		/** Private Cloud Id */
		privateCloudId: FormControl<string | null | undefined>,

		/** Resource Pool Name */
		privateCloudName: FormControl<string | null | undefined>,

		/** The provisioning status of the resource */
		provisioningState: FormControl<string | null | undefined>,

		/**
		 * purchase id
		 * Required
		 */
		purchaseId: FormControl<string | null | undefined>,

		/** Node status, indicates is private cloud set up on this node or not */
		status: FormControl<DedicatedCloudNodePropertiesStatus | null | undefined>,

		/** VMWare Cluster Name */
		vmwareClusterName: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudNodePropertiesFormGroup() {
		return new FormGroup<DedicatedCloudNodePropertiesFormProperties>({
			availabilityZoneId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			availabilityZoneName: new FormControl<string | null | undefined>(undefined),
			cloudRackName: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<any | null | undefined>(undefined),
			nodesCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			placementGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			placementGroupName: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined),
			privateCloudName: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			purchaseId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DedicatedCloudNodePropertiesStatus | null | undefined>(undefined),
			vmwareClusterName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedCloudNodePropertiesStatus { unused = 'unused', used = 'used' }


	/** Dedicated cloud service model */
	export interface DedicatedCloudService {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudServices/{dedicatedCloudServiceName} */
		id?: string | null;

		/**
		 * Azure region
		 * Required
		 */
		location: string;

		/** {dedicatedCloudServiceName} */
		name?: string | null;

		/** Properties of dedicated cloud service */
		properties?: DedicatedCloudServiceProperties;

		/** Tags model */
		tags?: Tags;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Dedicated cloud service model */
	export interface DedicatedCloudServiceFormProperties {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/dedicatedCloudServices/{dedicatedCloudServiceName} */
		id: FormControl<string | null | undefined>,

		/**
		 * Azure region
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** {dedicatedCloudServiceName} */
		name: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudServiceFormGroup() {
		return new FormGroup<DedicatedCloudServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9]([-_.a-zA-Z0-9]*[a-zA-Z0-9])?$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of dedicated cloud services */
	export interface DedicatedCloudServiceListResponse {

		/** Link for next list of DedicatedCloudNode */
		nextLink?: string | null;

		/** Results of the DedicatedCloudService list */
		value?: Array<DedicatedCloudService>;
	}

	/** List of dedicated cloud services */
	export interface DedicatedCloudServiceListResponseFormProperties {

		/** Link for next list of DedicatedCloudNode */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudServiceListResponseFormGroup() {
		return new FormGroup<DedicatedCloudServiceListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of dedicated cloud service */
	export interface DedicatedCloudServiceProperties {

		/**
		 * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
		 * Required
		 */
		gatewaySubnet: string;

		/** indicates whether account onboarded or not in a given region */
		isAccountOnboarded?: DedicatedCloudServicePropertiesIsAccountOnboarded | null;

		/** total nodes purchased */
		nodes?: number | null;

		/** link to a service management web portal */
		serviceURL?: string | null;
	}

	/** Properties of dedicated cloud service */
	export interface DedicatedCloudServicePropertiesFormProperties {

		/**
		 * gateway Subnet for the account. It will collect the subnet address and always treat it as /28
		 * Required
		 */
		gatewaySubnet: FormControl<string | null | undefined>,

		/** indicates whether account onboarded or not in a given region */
		isAccountOnboarded: FormControl<DedicatedCloudServicePropertiesIsAccountOnboarded | null | undefined>,

		/** total nodes purchased */
		nodes: FormControl<number | null | undefined>,

		/** link to a service management web portal */
		serviceURL: FormControl<string | null | undefined>,
	}
	export function CreateDedicatedCloudServicePropertiesFormGroup() {
		return new FormGroup<DedicatedCloudServicePropertiesFormProperties>({
			gatewaySubnet: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isAccountOnboarded: new FormControl<DedicatedCloudServicePropertiesIsAccountOnboarded | null | undefined>(undefined),
			nodes: new FormControl<number | null | undefined>(undefined),
			serviceURL: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DedicatedCloudServicePropertiesIsAccountOnboarded { notOnBoarded = 'notOnBoarded', onBoarded = 'onBoarded', onBoardingFailed = 'onBoardingFailed', onBoarding = 'onBoarding' }


	/** Guest OS Customization properties */
	export interface GuestOSCustomization {

		/** List of dns servers to use */
		dnsServers?: Array<string>;

		/** Virtual Machine hostname */
		hostName?: string | null;

		/** Password for login */
		password?: string | null;

		/** id of customization policy */
		policyId?: string | null;

		/** Username for login */
		username?: string | null;
	}

	/** Guest OS Customization properties */
	export interface GuestOSCustomizationFormProperties {

		/** Virtual Machine hostname */
		hostName: FormControl<string | null | undefined>,

		/** Password for login */
		password: FormControl<string | null | undefined>,

		/** id of customization policy */
		policyId: FormControl<string | null | undefined>,

		/** Username for login */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGuestOSCustomizationFormGroup() {
		return new FormGroup<GuestOSCustomizationFormProperties>({
			hostName: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			policyId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guest OS nic customization */
	export interface GuestOSNICCustomization {

		/** IP address allocation method */
		allocation?: GuestOSNICCustomizationAllocation | null;

		/** List of dns servers to use */
		dnsServers?: Array<string>;

		/** Gateway addresses assigned to nic */
		gateway?: Array<string>;
		ipAddress?: string | null;
		mask?: string | null;
		primaryWinsServer?: string | null;
		secondaryWinsServer?: string | null;
	}

	/** Guest OS nic customization */
	export interface GuestOSNICCustomizationFormProperties {

		/** IP address allocation method */
		allocation: FormControl<GuestOSNICCustomizationAllocation | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		mask: FormControl<string | null | undefined>,
		primaryWinsServer: FormControl<string | null | undefined>,
		secondaryWinsServer: FormControl<string | null | undefined>,
	}
	export function CreateGuestOSNICCustomizationFormGroup() {
		return new FormGroup<GuestOSNICCustomizationFormProperties>({
			allocation: new FormControl<GuestOSNICCustomizationAllocation | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')]),
			mask: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')]),
			primaryWinsServer: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')]),
			secondaryWinsServer: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])[.]){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$')]),
		});

	}

	export enum GuestOSNICCustomizationAllocation { static = 'static', dynamic = 'dynamic' }


	/** Operation error model */
	export interface OperationError {

		/** Error's code */
		code?: string | null;

		/** Error's message */
		message?: string | null;
	}

	/** Operation error model */
	export interface OperationErrorFormProperties {

		/** Error's code */
		code: FormControl<string | null | undefined>,

		/** Error's message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateOperationErrorFormGroup() {
		return new FormGroup<OperationErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation status response */
	export interface OperationResource {

		/** End time of the operation */
		endTime?: Date | null;

		/** Operation error model */
		error?: OperationError;

		/** Operation Id */
		id?: string | null;

		/** Operation ID */
		name?: string | null;

		/** Start time of the operation */
		startTime?: Date | null;

		/** Operation status */
		status?: string | null;
	}

	/** Operation status response */
	export interface OperationResourceFormProperties {

		/** End time of the operation */
		endTime: FormControl<Date | null | undefined>,

		/** Operation Id */
		id: FormControl<string | null | undefined>,

		/** Operation ID */
		name: FormControl<string | null | undefined>,

		/** Start time of the operation */
		startTime: FormControl<Date | null | undefined>,

		/** Operation status */
		status: FormControl<string | null | undefined>,
	}
	export function CreateOperationResourceFormGroup() {
		return new FormGroup<OperationResourceFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** General patch payload modal */
	export interface PatchPayload {

		/** Tags model */
		tags?: Tags;
	}

	/** General patch payload modal */
	export interface PatchPayloadFormProperties {
	}
	export function CreatePatchPayloadFormGroup() {
		return new FormGroup<PatchPayloadFormProperties>({
		});

	}


	/** Private cloud model */
	export interface PrivateCloud {

		/** Azure Id, e.g. "/subscriptions/4da99247-a172-4ed6-8ae9-ebed2d12f839/providers/Microsoft.VMwareCloudSimple/privateClouds/cloud123" */
		id?: string | null;

		/** Location where private cloud created, e.g "westus" */
		location?: string | null;

		/** Private cloud name */
		name?: string | null;

		/** Properties of private */
		properties?: PrivateCloudProperties;

		/** Azure Resource type */
		type?: PrivateCloudType | null;
	}

	/** Private cloud model */
	export interface PrivateCloudFormProperties {

		/** Azure Id, e.g. "/subscriptions/4da99247-a172-4ed6-8ae9-ebed2d12f839/providers/Microsoft.VMwareCloudSimple/privateClouds/cloud123" */
		id: FormControl<string | null | undefined>,

		/** Location where private cloud created, e.g "westus" */
		location: FormControl<string | null | undefined>,

		/** Private cloud name */
		name: FormControl<string | null | undefined>,

		/** Azure Resource type */
		type: FormControl<PrivateCloudType | null | undefined>,
	}
	export function CreatePrivateCloudFormGroup() {
		return new FormGroup<PrivateCloudFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PrivateCloudType | null | undefined>(undefined),
		});

	}

	export enum PrivateCloudType { 'Microsoft.VMwareCloudSimple/privateClouds' = 'Microsoft.VMwareCloudSimple/privateClouds' }


	/** List of private clouds */
	export interface PrivateCloudList {

		/** Link for next list of Private Clouds */
		nextLink?: string | null;

		/** the list of private clouds */
		value?: Array<PrivateCloud>;
	}

	/** List of private clouds */
	export interface PrivateCloudListFormProperties {

		/** Link for next list of Private Clouds */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePrivateCloudListFormGroup() {
		return new FormGroup<PrivateCloudListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of private */
	export interface PrivateCloudProperties {

		/** Availability Zone id, e.g. "az1" */
		availabilityZoneId?: string | null;

		/** Availability Zone name, e.g. "Availability Zone 1" */
		availabilityZoneName?: string | null;

		/** Number of clusters */
		clustersNumber?: number | null;

		/** User's emails who created cloud */
		createdBy?: string | null;

		/** When private cloud was created */
		createdOn?: Date | null;

		/** Array of DNS servers */
		dnsServers?: Array<string>;

		/** Expiration date of PC */
		expires?: string | null;

		/** Nsx Type, e.g. "Advanced" */
		nsxType?: string | null;

		/** Placement Group id, e.g. "n1" */
		placementGroupId?: string | null;

		/** Placement Group name */
		placementGroupName?: string | null;

		/** Id of a private cloud */
		privateCloudId?: string | null;

		/** The list of Resource Pools */
		resourcePools?: Array<ResourcePool>;

		/** Private Cloud state, e.g. "operational" */
		state?: string | null;

		/** Number of cores */
		totalCpuCores?: number | null;

		/** Number of nodes */
		totalNodes?: number | null;

		/** Memory size */
		totalRam?: number | null;

		/** Disk space in TB */
		totalStorage?: number | null;

		/** Virtualization type e.g. "vSphere" */
		type?: string | null;

		/** e.g. "6.5u2" */
		vSphereVersion?: string | null;

		/** FQDN for vcenter access */
		vcenterFqdn?: string | null;

		/** Vcenter ip address */
		vcenterRefid?: string | null;

		/** The list of Virtual Machine Templates */
		virtualMachineTemplates?: Array<VirtualMachineTemplate>;

		/** The list of Virtual Networks */
		virtualNetworks?: Array<VirtualNetwork>;

		/** Is Vrops enabled/disabled */
		vrOpsEnabled?: boolean | null;
	}

	/** Properties of private */
	export interface PrivateCloudPropertiesFormProperties {

		/** Availability Zone id, e.g. "az1" */
		availabilityZoneId: FormControl<string | null | undefined>,

		/** Availability Zone name, e.g. "Availability Zone 1" */
		availabilityZoneName: FormControl<string | null | undefined>,

		/** Number of clusters */
		clustersNumber: FormControl<number | null | undefined>,

		/** User's emails who created cloud */
		createdBy: FormControl<string | null | undefined>,

		/** When private cloud was created */
		createdOn: FormControl<Date | null | undefined>,

		/** Expiration date of PC */
		expires: FormControl<string | null | undefined>,

		/** Nsx Type, e.g. "Advanced" */
		nsxType: FormControl<string | null | undefined>,

		/** Placement Group id, e.g. "n1" */
		placementGroupId: FormControl<string | null | undefined>,

		/** Placement Group name */
		placementGroupName: FormControl<string | null | undefined>,

		/** Id of a private cloud */
		privateCloudId: FormControl<string | null | undefined>,

		/** Private Cloud state, e.g. "operational" */
		state: FormControl<string | null | undefined>,

		/** Number of cores */
		totalCpuCores: FormControl<number | null | undefined>,

		/** Number of nodes */
		totalNodes: FormControl<number | null | undefined>,

		/** Memory size */
		totalRam: FormControl<number | null | undefined>,

		/** Disk space in TB */
		totalStorage: FormControl<number | null | undefined>,

		/** Virtualization type e.g. "vSphere" */
		type: FormControl<string | null | undefined>,

		/** e.g. "6.5u2" */
		vSphereVersion: FormControl<string | null | undefined>,

		/** FQDN for vcenter access */
		vcenterFqdn: FormControl<string | null | undefined>,

		/** Vcenter ip address */
		vcenterRefid: FormControl<string | null | undefined>,

		/** Is Vrops enabled/disabled */
		vrOpsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateCloudPropertiesFormGroup() {
		return new FormGroup<PrivateCloudPropertiesFormProperties>({
			availabilityZoneId: new FormControl<string | null | undefined>(undefined),
			availabilityZoneName: new FormControl<string | null | undefined>(undefined),
			clustersNumber: new FormControl<number | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			createdOn: new FormControl<Date | null | undefined>(undefined),
			expires: new FormControl<string | null | undefined>(undefined),
			nsxType: new FormControl<string | null | undefined>(undefined),
			placementGroupId: new FormControl<string | null | undefined>(undefined),
			placementGroupName: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			totalCpuCores: new FormControl<number | null | undefined>(undefined),
			totalNodes: new FormControl<number | null | undefined>(undefined),
			totalRam: new FormControl<number | null | undefined>(undefined),
			totalStorage: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			vSphereVersion: new FormControl<string | null | undefined>(undefined),
			vcenterFqdn: new FormControl<string | null | undefined>(undefined),
			vcenterRefid: new FormControl<string | null | undefined>(undefined),
			vrOpsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Resource pool model */
	export interface ResourcePool {

		/**
		 * resource pool id (privateCloudId:vsphereId)
		 * Required
		 */
		id: string;

		/** Azure region */
		location?: string | null;

		/** {ResourcePoolName} */
		name?: string | null;

		/** The Private Cloud Id */
		privateCloudId?: string | null;

		/** Properties of resource pool */
		properties?: ResourcePoolProperties;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Resource pool model */
	export interface ResourcePoolFormProperties {

		/**
		 * resource pool id (privateCloudId:vsphereId)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Azure region */
		location: FormControl<string | null | undefined>,

		/** {ResourcePoolName} */
		name: FormControl<string | null | undefined>,

		/** The Private Cloud Id */
		privateCloudId: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourcePoolFormGroup() {
		return new FormGroup<ResourcePoolFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual machine template model */
	export interface VirtualMachineTemplate {

		/** virtual machine template id (privateCloudId:vsphereId) */
		id?: string | null;

		/** Azure region */
		location?: string | null;

		/** {virtualMachineTemplateName} */
		name?: string | null;

		/** Properties of virtual machine template */
		properties?: VirtualMachineTemplateProperties;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Virtual machine template model */
	export interface VirtualMachineTemplateFormProperties {

		/** virtual machine template id (privateCloudId:vsphereId) */
		id: FormControl<string | null | undefined>,

		/** Azure region */
		location: FormControl<string | null | undefined>,

		/** {virtualMachineTemplateName} */
		name: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineTemplateFormGroup() {
		return new FormGroup<VirtualMachineTemplateFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual network model */
	export interface VirtualNetwork {

		/** can be used in vm creation/deletion */
		assignable?: boolean | null;

		/**
		 * virtual network id (privateCloudId:vsphereId)
		 * Required
		 */
		id: string;

		/** Azure region */
		location?: string | null;

		/** {VirtualNetworkName} */
		name?: string | null;

		/** Properties of virtual network */
		properties?: VirtualNetworkProperties;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Virtual network model */
	export interface VirtualNetworkFormProperties {

		/** can be used in vm creation/deletion */
		assignable: FormControl<boolean | null | undefined>,

		/**
		 * virtual network id (privateCloudId:vsphereId)
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Azure region */
		location: FormControl<string | null | undefined>,

		/** {VirtualNetworkName} */
		name: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkFormGroup() {
		return new FormGroup<VirtualNetworkFormProperties>({
			assignable: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of resource pool */
	export interface ResourcePoolProperties {

		/** Hierarchical resource pool name */
		fullName?: string | null;
	}

	/** Properties of resource pool */
	export interface ResourcePoolPropertiesFormProperties {

		/** Hierarchical resource pool name */
		fullName: FormControl<string | null | undefined>,
	}
	export function CreateResourcePoolPropertiesFormGroup() {
		return new FormGroup<ResourcePoolPropertiesFormProperties>({
			fullName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of resource pools response model */
	export interface ResourcePoolsListResponse {

		/** Link for next list of ResourcePoolsList */
		nextLink?: string | null;

		/** Results of the Resource pools list */
		value?: Array<ResourcePool>;
	}

	/** List of resource pools response model */
	export interface ResourcePoolsListResponseFormProperties {

		/** Link for next list of ResourcePoolsList */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateResourcePoolsListResponseFormGroup() {
		return new FormGroup<ResourcePoolsListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The purchase SKU for CloudSimple paid resources */
	export interface Sku {

		/** The capacity of the SKU */
		capacity?: string | null;

		/** dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ... */
		description?: string | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here */
		family?: string | null;

		/**
		 * The name of the SKU for VMWare CloudSimple Node
		 * Required
		 */
		name: string;

		/** The tier of the SKU */
		tier?: string | null;
	}

	/** The purchase SKU for CloudSimple paid resources */
	export interface SkuFormProperties {

		/** The capacity of the SKU */
		capacity: FormControl<string | null | undefined>,

		/** dedicatedCloudNode example: 8 x Ten-Core Intel® Xeon® Processor E5-2640 v4 2.40GHz 25MB Cache (90W); 12 x 64GB PC4-19200 2400MHz DDR4 ECC Registered DIMM, ... */
		description: FormControl<string | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU for VMWare CloudSimple Node
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The tier of the SKU */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SKU availability model */
	export interface SkuAvailability {

		/** CloudSimple Availability Zone id */
		dedicatedAvailabilityZoneId?: string | null;

		/** CloudSimple Availability Zone Name */
		dedicatedAvailabilityZoneName?: string | null;

		/** CloudSimple Placement Group Id */
		dedicatedPlacementGroupId?: string | null;

		/** CloudSimple Placement Group name */
		dedicatedPlacementGroupName?: string | null;

		/**
		 * indicates how many resources of a given SKU is available in a AZ->PG
		 * Required
		 */
		limit: number;

		/** resource type e.g. DedicatedCloudNodes */
		resourceType?: string | null;

		/** sku id */
		skuId?: string | null;

		/** sku name */
		skuName?: string | null;
	}

	/** SKU availability model */
	export interface SkuAvailabilityFormProperties {

		/** CloudSimple Availability Zone id */
		dedicatedAvailabilityZoneId: FormControl<string | null | undefined>,

		/** CloudSimple Availability Zone Name */
		dedicatedAvailabilityZoneName: FormControl<string | null | undefined>,

		/** CloudSimple Placement Group Id */
		dedicatedPlacementGroupId: FormControl<string | null | undefined>,

		/** CloudSimple Placement Group name */
		dedicatedPlacementGroupName: FormControl<string | null | undefined>,

		/**
		 * indicates how many resources of a given SKU is available in a AZ->PG
		 * Required
		 */
		limit: FormControl<number | null | undefined>,

		/** resource type e.g. DedicatedCloudNodes */
		resourceType: FormControl<string | null | undefined>,

		/** sku id */
		skuId: FormControl<string | null | undefined>,

		/** sku name */
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateSkuAvailabilityFormGroup() {
		return new FormGroup<SkuAvailabilityFormProperties>({
			dedicatedAvailabilityZoneId: new FormControl<string | null | undefined>(undefined),
			dedicatedAvailabilityZoneName: new FormControl<string | null | undefined>(undefined),
			dedicatedPlacementGroupId: new FormControl<string | null | undefined>(undefined),
			dedicatedPlacementGroupName: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<string | null | undefined>(undefined),
			skuId: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of SKU availabilities */
	export interface SkuAvailabilityListResponse {

		/** Link for next list of DedicatedCloudNode */
		nextLink?: string | null;

		/** Results of the DedicatedPlacementGroupSkuAvailability list */
		value?: Array<SkuAvailability>;
	}

	/** List of SKU availabilities */
	export interface SkuAvailabilityListResponseFormProperties {

		/** Link for next list of DedicatedCloudNode */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSkuAvailabilityListResponseFormGroup() {
		return new FormGroup<SkuAvailabilityListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The purchase SKU for CloudSimple paid resources */
	export interface SkuDescription {

		/**
		 * SKU's id
		 * Required
		 */
		id: string;

		/**
		 * SKU's name
		 * Required
		 */
		name: string;
	}

	/** The purchase SKU for CloudSimple paid resources */
	export interface SkuDescriptionFormProperties {

		/**
		 * SKU's id
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * SKU's name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSkuDescriptionFormGroup() {
		return new FormGroup<SkuDescriptionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Tags model */
	export interface Tags {
	}

	/** Tags model */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Usage model */
	export interface Usage {

		/**
		 * The current usage value
		 * Required
		 */
		currentValue: number;

		/**
		 * limit of a given sku in a region for a subscription. The maximum permitted value for the usage quota. If there is no limit, this value will be -1
		 * Required
		 */
		limit: number;

		/** User name model */
		name?: UsageName;

		/** The usages' unit */
		unit?: UsageUnit | null;
	}

	/** Usage model */
	export interface UsageFormProperties {

		/**
		 * The current usage value
		 * Required
		 */
		currentValue: FormControl<number | null | undefined>,

		/**
		 * limit of a given sku in a region for a subscription. The maximum permitted value for the usage quota. If there is no limit, this value will be -1
		 * Required
		 */
		limit: FormControl<number | null | undefined>,

		/** The usages' unit */
		unit: FormControl<UsageUnit | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<UsageUnit | null | undefined>(undefined),
		});

	}

	export enum UsageUnit { Count = 'Count', Bytes = 'Bytes', Seconds = 'Seconds', Percent = 'Percent', CountPerSecond = 'CountPerSecond', BytesPerSecond = 'BytesPerSecond' }


	/** List of usages */
	export interface UsageListResponse {

		/** Link for next list of DedicatedCloudNode */
		nextLink?: string | null;

		/** The list of usages */
		value?: Array<Usage>;
	}

	/** List of usages */
	export interface UsageListResponseFormProperties {

		/** Link for next list of DedicatedCloudNode */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateUsageListResponseFormGroup() {
		return new FormGroup<UsageListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User name model */
	export interface UsageName {

		/** e.g. "Virtual Machines" */
		localizedValue?: string | null;

		/** resource type or resource type sku name, e.g. virtualMachines */
		value?: string | null;
	}

	/** User name model */
	export interface UsageNameFormProperties {

		/** e.g. "Virtual Machines" */
		localizedValue: FormControl<string | null | undefined>,

		/** resource type or resource type sku name, e.g. virtualMachines */
		value: FormControl<string | null | undefined>,
	}
	export function CreateUsageNameFormGroup() {
		return new FormGroup<UsageNameFormProperties>({
			localizedValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual disk model */
	export interface VirtualDisk {

		/**
		 * Disk's Controller id
		 * Required
		 */
		controllerId: string;

		/**
		 * Disk's independence mode type
		 * Required
		 */
		independenceMode: VirtualDiskIndependenceMode;

		/**
		 * Disk's total size
		 * Required
		 */
		totalSize: number;

		/** Disk's id */
		virtualDiskId?: string | null;

		/** Disk's display name */
		virtualDiskName?: string | null;
	}

	/** Virtual disk model */
	export interface VirtualDiskFormProperties {

		/**
		 * Disk's Controller id
		 * Required
		 */
		controllerId: FormControl<string | null | undefined>,

		/**
		 * Disk's independence mode type
		 * Required
		 */
		independenceMode: FormControl<VirtualDiskIndependenceMode | null | undefined>,

		/**
		 * Disk's total size
		 * Required
		 */
		totalSize: FormControl<number | null | undefined>,

		/** Disk's id */
		virtualDiskId: FormControl<string | null | undefined>,

		/** Disk's display name */
		virtualDiskName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualDiskFormGroup() {
		return new FormGroup<VirtualDiskFormProperties>({
			controllerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			independenceMode: new FormControl<VirtualDiskIndependenceMode | null | undefined>(undefined, [Validators.required]),
			totalSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			virtualDiskId: new FormControl<string | null | undefined>(undefined),
			virtualDiskName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualDiskIndependenceMode { persistent = 'persistent', independent_persistent = 'independent_persistent', independent_nonpersistent = 'independent_nonpersistent' }


	/** Virtual disk controller model */
	export interface VirtualDiskController {

		/** Controller's id */
		id?: string | null;

		/** The display name of Controller */
		name?: string | null;

		/** dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS) */
		subType?: string | null;

		/** disk controller type (SCSI) */
		type?: string | null;
	}

	/** Virtual disk controller model */
	export interface VirtualDiskControllerFormProperties {

		/** Controller's id */
		id: FormControl<string | null | undefined>,

		/** The display name of Controller */
		name: FormControl<string | null | undefined>,

		/** dik controller subtype (VMWARE_PARAVIRTUAL, BUS_PARALLEL, LSI_PARALLEL, LSI_SAS) */
		subType: FormControl<string | null | undefined>,

		/** disk controller type (SCSI) */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualDiskControllerFormGroup() {
		return new FormGroup<VirtualDiskControllerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			subType: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Virtual machine model */
	export interface VirtualMachine {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/virtualMachines/{virtualMachineName} */
		id?: string | null;

		/**
		 * Azure region
		 * Required
		 */
		location: string;

		/** {virtualMachineName} */
		name?: string | null;

		/** Properties of virtual machine */
		properties?: VirtualMachineProperties;

		/** Tags model */
		tags?: Tags;

		/** {resourceProviderNamespace}/{resourceType} */
		type?: string | null;
	}

	/** Virtual machine model */
	export interface VirtualMachineFormProperties {

		/** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/virtualMachines/{virtualMachineName} */
		id: FormControl<string | null | undefined>,

		/**
		 * Azure region
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** {virtualMachineName} */
		name: FormControl<string | null | undefined>,

		/** {resourceProviderNamespace}/{resourceType} */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineFormGroup() {
		return new FormGroup<VirtualMachineFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9]([-_.a-zA-Z0-9]*[a-zA-Z0-9])?$')]),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of virtual machines */
	export interface VirtualMachineListResponse {

		/** Link for next list of VirtualMachines */
		nextLink?: string | null;

		/** Results of the VirtualMachine list */
		value?: Array<VirtualMachine>;
	}

	/** List of virtual machines */
	export interface VirtualMachineListResponseFormProperties {

		/** Link for next list of VirtualMachines */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineListResponseFormGroup() {
		return new FormGroup<VirtualMachineListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of virtual machine */
	export interface VirtualMachineProperties {

		/**
		 * The amount of memory
		 * Required
		 */
		amountOfRam: number;

		/** The list of Virtual Disks' Controllers */
		controllers?: Array<VirtualDiskController>;

		/** Guest OS Customization properties */
		customization?: GuestOSCustomization;

		/** The list of Virtual Disks */
		disks?: Array<VirtualDisk>;

		/** The DNS name of Virtual Machine in VCenter */
		dnsname?: string | null;

		/** Expose Guest OS or not */
		exposeToGuestVM?: boolean | null;

		/** The path to virtual machine folder in VCenter */
		folder?: string | null;

		/** The name of Guest OS */
		guestOS?: string | null;

		/** The Guest OS type */
		guestOSType?: VirtualMachinePropertiesGuestOSType | null;

		/** The list of Virtual NICs */
		nics?: Array<VirtualNic>;

		/**
		 * The number of CPU cores
		 * Required
		 */
		numberOfCores: number;

		/** Password for login. Deprecated - use customization property */
		password?: string | null;

		/**
		 * Private Cloud Id
		 * Required
		 */
		privateCloudId: string;

		/** The provisioning status of the resource */
		provisioningState?: string | null;

		/** The public ip of Virtual Machine */
		publicIP?: string | null;

		/** Resource pool model */
		resourcePool?: ResourcePool;

		/** The status of Virtual machine */
		status?: VirtualMachinePropertiesStatus | null;

		/** Virtual Machine Template Id */
		templateId?: string | null;

		/** Username for login. Deprecated - use customization property */
		username?: string | null;

		/** The list of Virtual VSphere Networks */
		vSphereNetworks?: Array<string>;

		/** The internal id of Virtual Machine in VCenter */
		vmId?: string | null;

		/** VMware tools version */
		vmwaretools?: string | null;
	}

	/** Properties of virtual machine */
	export interface VirtualMachinePropertiesFormProperties {

		/**
		 * The amount of memory
		 * Required
		 */
		amountOfRam: FormControl<number | null | undefined>,

		/** The DNS name of Virtual Machine in VCenter */
		dnsname: FormControl<string | null | undefined>,

		/** Expose Guest OS or not */
		exposeToGuestVM: FormControl<boolean | null | undefined>,

		/** The path to virtual machine folder in VCenter */
		folder: FormControl<string | null | undefined>,

		/** The name of Guest OS */
		guestOS: FormControl<string | null | undefined>,

		/** The Guest OS type */
		guestOSType: FormControl<VirtualMachinePropertiesGuestOSType | null | undefined>,

		/**
		 * The number of CPU cores
		 * Required
		 */
		numberOfCores: FormControl<number | null | undefined>,

		/** Password for login. Deprecated - use customization property */
		password: FormControl<string | null | undefined>,

		/**
		 * Private Cloud Id
		 * Required
		 */
		privateCloudId: FormControl<string | null | undefined>,

		/** The provisioning status of the resource */
		provisioningState: FormControl<string | null | undefined>,

		/** The public ip of Virtual Machine */
		publicIP: FormControl<string | null | undefined>,

		/** The status of Virtual machine */
		status: FormControl<VirtualMachinePropertiesStatus | null | undefined>,

		/** Virtual Machine Template Id */
		templateId: FormControl<string | null | undefined>,

		/** Username for login. Deprecated - use customization property */
		username: FormControl<string | null | undefined>,

		/** The internal id of Virtual Machine in VCenter */
		vmId: FormControl<string | null | undefined>,

		/** VMware tools version */
		vmwaretools: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachinePropertiesFormGroup() {
		return new FormGroup<VirtualMachinePropertiesFormProperties>({
			amountOfRam: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			dnsname: new FormControl<string | null | undefined>(undefined),
			exposeToGuestVM: new FormControl<boolean | null | undefined>(undefined),
			folder: new FormControl<string | null | undefined>(undefined),
			guestOS: new FormControl<string | null | undefined>(undefined),
			guestOSType: new FormControl<VirtualMachinePropertiesGuestOSType | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			publicIP: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VirtualMachinePropertiesStatus | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			vmwaretools: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualMachinePropertiesGuestOSType { linux = 'linux', windows = 'windows', other = 'other' }


	/** Virtual NIC model */
	export interface VirtualNic {

		/** Guest OS nic customization */
		customization?: GuestOSNICCustomization;

		/** NIC ip address */
		ipAddresses?: Array<string>;

		/** NIC MAC address */
		macAddress?: string | null;

		/**
		 * Virtual network model
		 * Required
		 */
		network: VirtualNetwork;

		/**
		 * NIC type
		 * Required
		 */
		nicType: VirtualNicNicType;

		/** Is NIC powered on/off on boot */
		powerOnBoot?: boolean | null;

		/** NIC id */
		virtualNicId?: string | null;

		/** NIC name */
		virtualNicName?: string | null;
	}

	/** Virtual NIC model */
	export interface VirtualNicFormProperties {

		/** NIC MAC address */
		macAddress: FormControl<string | null | undefined>,

		/**
		 * NIC type
		 * Required
		 */
		nicType: FormControl<VirtualNicNicType | null | undefined>,

		/** Is NIC powered on/off on boot */
		powerOnBoot: FormControl<boolean | null | undefined>,

		/** NIC id */
		virtualNicId: FormControl<string | null | undefined>,

		/** NIC name */
		virtualNicName: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNicFormGroup() {
		return new FormGroup<VirtualNicFormProperties>({
			macAddress: new FormControl<string | null | undefined>(undefined),
			nicType: new FormControl<VirtualNicNicType | null | undefined>(undefined, [Validators.required]),
			powerOnBoot: new FormControl<boolean | null | undefined>(undefined),
			virtualNicId: new FormControl<string | null | undefined>(undefined),
			virtualNicName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VirtualNicNicType { E1000 = 'E1000', E1000E = 'E1000E', PCNET32 = 'PCNET32', VMXNET = 'VMXNET', VMXNET2 = 'VMXNET2', VMXNET3 = 'VMXNET3' }

	export enum VirtualMachinePropertiesStatus { running = 'running', suspended = 'suspended', poweredoff = 'poweredoff', updating = 'updating', deallocating = 'deallocating', deleting = 'deleting' }


	/** List of virtual machine stop modes */
	export interface VirtualMachineStopMode {

		/** mode indicates a type of stop operation - reboot, suspend, shutdown or power-off */
		mode?: VirtualMachineStopModeMode | null;
	}

	/** List of virtual machine stop modes */
	export interface VirtualMachineStopModeFormProperties {

		/** mode indicates a type of stop operation - reboot, suspend, shutdown or power-off */
		mode: FormControl<VirtualMachineStopModeMode | null | undefined>,
	}
	export function CreateVirtualMachineStopModeFormGroup() {
		return new FormGroup<VirtualMachineStopModeFormProperties>({
			mode: new FormControl<VirtualMachineStopModeMode | null | undefined>(undefined),
		});

	}

	export enum VirtualMachineStopModeMode { reboot = 'reboot', suspend = 'suspend', shutdown = 'shutdown', poweroff = 'poweroff' }


	/** List of virtual machine templates */
	export interface VirtualMachineTemplateListResponse {

		/** Link for next list of VirtualMachineTemplate */
		nextLink?: string | null;

		/** Results of the VM template list */
		value?: Array<VirtualMachineTemplate>;
	}

	/** List of virtual machine templates */
	export interface VirtualMachineTemplateListResponseFormProperties {

		/** Link for next list of VirtualMachineTemplate */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineTemplateListResponseFormGroup() {
		return new FormGroup<VirtualMachineTemplateListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of virtual machine template */
	export interface VirtualMachineTemplateProperties {

		/** The amount of memory */
		amountOfRam?: number | null;

		/** The list of Virtual Disk Controllers */
		controllers?: Array<VirtualDiskController>;

		/** The description of Virtual Machine Template */
		description?: string | null;

		/** The list of Virtual Disks */
		disks?: Array<VirtualDisk>;

		/** Expose Guest OS or not */
		exposeToGuestVM?: boolean | null;

		/** The Guest OS */
		guestOS?: string | null;

		/** The Guest OS types */
		guestOSType?: string | null;

		/** The list of Virtual NICs */
		nics?: Array<VirtualNic>;

		/** The number of CPU cores */
		numberOfCores?: number | null;

		/** path to folder */
		path?: string | null;

		/**
		 * The Private Cloud Id
		 * Required
		 */
		privateCloudId: string;

		/** The list of VSphere networks */
		vSphereNetworks?: Array<string>;

		/** The tags from VSphere */
		vSphereTags?: Array<string>;

		/** The VMware tools version */
		vmwaretools?: string | null;
	}

	/** Properties of virtual machine template */
	export interface VirtualMachineTemplatePropertiesFormProperties {

		/** The amount of memory */
		amountOfRam: FormControl<number | null | undefined>,

		/** The description of Virtual Machine Template */
		description: FormControl<string | null | undefined>,

		/** Expose Guest OS or not */
		exposeToGuestVM: FormControl<boolean | null | undefined>,

		/** The Guest OS */
		guestOS: FormControl<string | null | undefined>,

		/** The Guest OS types */
		guestOSType: FormControl<string | null | undefined>,

		/** The number of CPU cores */
		numberOfCores: FormControl<number | null | undefined>,

		/** path to folder */
		path: FormControl<string | null | undefined>,

		/**
		 * The Private Cloud Id
		 * Required
		 */
		privateCloudId: FormControl<string | null | undefined>,

		/** The VMware tools version */
		vmwaretools: FormControl<string | null | undefined>,
	}
	export function CreateVirtualMachineTemplatePropertiesFormGroup() {
		return new FormGroup<VirtualMachineTemplatePropertiesFormProperties>({
			amountOfRam: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			exposeToGuestVM: new FormControl<boolean | null | undefined>(undefined),
			guestOS: new FormControl<string | null | undefined>(undefined),
			guestOSType: new FormControl<string | null | undefined>(undefined),
			numberOfCores: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			privateCloudId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vmwaretools: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of virtual networks */
	export interface VirtualNetworkListResponse {

		/** Link for next list of VirtualNetwork */
		nextLink?: string | null;

		/** Results of the VirtualNetwork list */
		value?: Array<VirtualNetwork>;
	}

	/** List of virtual networks */
	export interface VirtualNetworkListResponseFormProperties {

		/** Link for next list of VirtualNetwork */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkListResponseFormGroup() {
		return new FormGroup<VirtualNetworkListResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of virtual network */
	export interface VirtualNetworkProperties {

		/** The Private Cloud id */
		privateCloudId?: string | null;
	}

	/** Properties of virtual network */
	export interface VirtualNetworkPropertiesFormProperties {

		/** The Private Cloud id */
		privateCloudId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkPropertiesFormGroup() {
		return new FormGroup<VirtualNetworkPropertiesFormProperties>({
			privateCloudId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Implements list of available operations
		 * Return list of operations
		 * Get providers/Microsoft.VMwareCloudSimple/operations
		 * @param {string} api_version Client API version.
		 * @return {AvailableOperationsListResponse} successful operation
		 */
		Operations_List(api_version: string): Observable<AvailableOperationsListResponse> {
			return this.http.get<AvailableOperationsListResponse>(this.baseUri + 'providers/Microsoft.VMwareCloudSimple/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements list of dedicated cloud nodes within subscription method
		 * Returns list of dedicate cloud nodes within subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {DedicatedCloudNodeListResponse} successful operation
		 */
		DedicatedCloudNodes_ListBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<DedicatedCloudNodeListResponse> {
			return this.http.get<DedicatedCloudNodeListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements list of dedicatedCloudService objects within subscription method
		 * Returns list of dedicated cloud services within a subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {DedicatedCloudServiceListResponse} successful operation
		 */
		DedicatedCloudServices_ListBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<DedicatedCloudServiceListResponse> {
			return this.http.get<DedicatedCloudServiceListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements SkuAvailability List method
		 * Returns list of available resources in region
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/availabilities
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} skuId sku id, if no sku is passed availability for all skus will be returned
		 * @param {string} api_version Client API version.
		 * @return {SkuAvailabilityListResponse} successful operation
		 */
		SkusAvailability_List(subscriptionId: string, regionId: string, skuId: string | null | undefined, api_version: string): Observable<SkuAvailabilityListResponse> {
			return this.http.get<SkuAvailabilityListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/availabilities&skuId=' + (skuId == null ? '' : encodeURIComponent(skuId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements get of async operation
		 * Return an async operation
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/operationResults/{operationId}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} operationId operation id
		 * @return {OperationResource} Successful operation
		 */
		Operations_Get(subscriptionId: string, api_version: string, regionId: string, operationId: string): Observable<OperationResource> {
			return this.http.get<OperationResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/operationResults/' + (operationId == null ? '' : encodeURIComponent(operationId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements private cloud list GET method
		 * Returns list of private clouds in particular region
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} api_version Client API version.
		 * @return {PrivateCloudList} successful operation
		 */
		PrivateClouds_List(subscriptionId: string, regionId: string, api_version: string): Observable<PrivateCloudList> {
			return this.http.get<PrivateCloudList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements private cloud GET method
		 * Returns private cloud by its name
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} pcName The private cloud name
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} api_version Client API version.
		 * @return {PrivateCloud} successful operation
		 */
		PrivateClouds_Get(subscriptionId: string, pcName: string, regionId: string, api_version: string): Observable<PrivateCloud> {
			return this.http.get<PrivateCloud>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements get of customization policies list
		 * Returns list of customization policies in region for private cloud
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation. only type is allowed here as a filter e.g. $filter=type eq 'xxxx'
		 * @return {CustomizationPoliciesListResponse} successful operation
		 */
		CustomizationPolicies_List(subscriptionId: string, regionId: string, pcName: string, api_version: string, filter: string | null | undefined): Observable<CustomizationPoliciesListResponse> {
			return this.http.get<CustomizationPoliciesListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/customizationPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Implements get of customization policy
		 * Returns customization policy by its name
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/customizationPolicies/{customizationPolicyName}
		 * @param {string} api_version Client API version.
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} customizationPolicyName customization policy name
		 * @return {CustomizationPolicy} successful operation
		 */
		CustomizationPolicies_Get(api_version: string, subscriptionId: string, regionId: string, pcName: string, customizationPolicyName: string): Observable<CustomizationPolicy> {
			return this.http.get<CustomizationPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/customizationPolicies/' + (customizationPolicyName == null ? '' : encodeURIComponent(customizationPolicyName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements get of resource pools list
		 * Returns list of resource pools in region for private cloud
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} api_version Client API version.
		 * @return {ResourcePoolsListResponse} successful operation
		 */
		ResourcePools_List(subscriptionId: string, regionId: string, pcName: string, api_version: string): Observable<ResourcePoolsListResponse> {
			return this.http.get<ResourcePoolsListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/resourcePools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements get of resource pool
		 * Returns resource pool templates by its name
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/resourcePools/{resourcePoolName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} resourcePoolName resource pool id (vsphereId)
		 * @return {ResourcePool} successful operation
		 */
		ResourcePools_Get(subscriptionId: string, api_version: string, regionId: string, pcName: string, resourcePoolName: string): Observable<ResourcePool> {
			return this.http.get<ResourcePool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/resourcePools/' + (resourcePoolName == null ? '' : encodeURIComponent(resourcePoolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements list of available VM templates
		 * Returns list of virtual machine templates in region for private cloud
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} pcName The private cloud name
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} resourcePoolName Resource pool used to derive vSphere cluster which contains VM templates
		 * @return {VirtualMachineTemplateListResponse} successful operation
		 */
		VirtualMachineTemplates_List(subscriptionId: string, api_version: string, pcName: string, regionId: string, resourcePoolName: string): Observable<VirtualMachineTemplateListResponse> {
			return this.http.get<VirtualMachineTemplateListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/virtualMachineTemplates&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&resourcePoolName=' + (resourcePoolName == null ? '' : encodeURIComponent(resourcePoolName)), {});
		}

		/**
		 * Implements virtual machine template GET method
		 * Returns virtual machine templates by its name
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualMachineTemplates/{virtualMachineTemplateName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} virtualMachineTemplateName virtual machine template id (vsphereId)
		 * @param {string} api_version Client API version.
		 * @return {VirtualMachineTemplate} successful operation
		 */
		VirtualMachineTemplates_Get(subscriptionId: string, regionId: string, pcName: string, virtualMachineTemplateName: string, api_version: string): Observable<VirtualMachineTemplate> {
			return this.http.get<VirtualMachineTemplate>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/virtualMachineTemplates/' + (virtualMachineTemplateName == null ? '' : encodeURIComponent(virtualMachineTemplateName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements list available virtual networks within a subscription method
		 * Return list of virtual networks in location for private cloud
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} api_version Client API version.
		 * @param {string} resourcePoolName Resource pool used to derive vSphere cluster which contains virtual networks
		 * @return {VirtualNetworkListResponse} successful operation
		 */
		VirtualNetworks_List(subscriptionId: string, regionId: string, pcName: string, api_version: string, resourcePoolName: string): Observable<VirtualNetworkListResponse> {
			return this.http.get<VirtualNetworkListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/virtualNetworks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&resourcePoolName=' + (resourcePoolName == null ? '' : encodeURIComponent(resourcePoolName)), {});
		}

		/**
		 * Implements virtual network GET method
		 * Return virtual network by its name
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/privateClouds/{pcName}/virtualNetworks/{virtualNetworkName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} pcName The private cloud name
		 * @param {string} virtualNetworkName virtual network id (vsphereId)
		 * @param {string} api_version Client API version.
		 * @return {VirtualNetwork} successful operation
		 */
		VirtualNetworks_Get(subscriptionId: string, regionId: string, pcName: string, virtualNetworkName: string, api_version: string): Observable<VirtualNetwork> {
			return this.http.get<VirtualNetwork>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/privateClouds/' + (pcName == null ? '' : encodeURIComponent(pcName)) + '/virtualNetworks/' + (virtualNetworkName == null ? '' : encodeURIComponent(virtualNetworkName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements Usages List method
		 * Returns list of usage in region
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/locations/{regionId}/usages
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} regionId The region Id (westus, eastus)
		 * @param {string} filter The filter to apply on the list operation. only name.value is allowed here as a filter e.g. $filter=name.value eq 'xxxx'
		 * @param {string} api_version Client API version.
		 * @return {UsageListResponse} successful operation
		 */
		Usages_List(subscriptionId: string, regionId: string, filter: string | null | undefined, api_version: string): Observable<UsageListResponse> {
			return this.http.get<UsageListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/locations/' + (regionId == null ? '' : encodeURIComponent(regionId)) + '/usages&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements list virtual machine within subscription method
		 * Returns list virtual machine within subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/virtualMachines
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {VirtualMachineListResponse} successful operation
		 */
		VirtualMachines_ListBySubscription(subscriptionId: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<VirtualMachineListResponse> {
			return this.http.get<VirtualMachineListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements list of dedicated cloud nodes within RG method
		 * Returns list of dedicate cloud nodes within resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {DedicatedCloudNodeListResponse} successful operation
		 */
		DedicatedCloudNodes_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<DedicatedCloudNodeListResponse> {
			return this.http.get<DedicatedCloudNodeListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements dedicated cloud node GET method
		 * Returns dedicated cloud node
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudNodeName dedicated cloud node name
		 * @param {string} api_version Client API version.
		 * @return {DedicatedCloudNode} successful operation
		 */
		DedicatedCloudNodes_Get(subscriptionId: string, resourceGroupName: string, dedicatedCloudNodeName: string, api_version: string): Observable<DedicatedCloudNode> {
			return this.http.get<DedicatedCloudNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/' + (dedicatedCloudNodeName == null ? '' : encodeURIComponent(dedicatedCloudNodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements dedicated cloud node PUT method
		 * Returns dedicated cloud node by its name
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudNodeName dedicated cloud node name
		 * @param {string} api_version Client API version.
		 * @param {DedicatedCloudNode} requestBody Create Dedicated Cloud Node request
		 * @return {DedicatedCloudNode} If resource is created or updated successfully, 200 should be returned
		 */
		DedicatedCloudNodes_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, dedicatedCloudNodeName: string, api_version: string, requestBody: DedicatedCloudNode): Observable<DedicatedCloudNode> {
			return this.http.put<DedicatedCloudNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/' + (dedicatedCloudNodeName == null ? '' : encodeURIComponent(dedicatedCloudNodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements dedicated cloud node DELETE method
		 * Delete dedicated cloud node
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudNodeName dedicated cloud node name
		 * @param {string} api_version Client API version.
		 * @return {void} 
		 */
		DedicatedCloudNodes_Delete(subscriptionId: string, resourceGroupName: string, dedicatedCloudNodeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/' + (dedicatedCloudNodeName == null ? '' : encodeURIComponent(dedicatedCloudNodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Implements dedicated cloud node PATCH method
		 * Patches dedicated node properties
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/{dedicatedCloudNodeName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudNodeName dedicated cloud node name
		 * @param {string} api_version Client API version.
		 * @param {PatchPayload} requestBody Patch Dedicated Cloud Node request
		 * @return {DedicatedCloudNode} If resource is created or updated successfully, 200 should be returned
		 */
		DedicatedCloudNodes_Update(subscriptionId: string, resourceGroupName: string, dedicatedCloudNodeName: string, api_version: string, requestBody: PatchPayload): Observable<DedicatedCloudNode> {
			return this.http.patch<DedicatedCloudNode>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudNodes/' + (dedicatedCloudNodeName == null ? '' : encodeURIComponent(dedicatedCloudNodeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements list of dedicatedCloudService objects within RG method
		 * Returns list of dedicated cloud services within a resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {DedicatedCloudServiceListResponse} successful operation
		 */
		DedicatedCloudServices_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<DedicatedCloudServiceListResponse> {
			return this.http.get<DedicatedCloudServiceListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements dedicatedCloudService GET method
		 * Returns Dedicate Cloud Service
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudServiceName dedicated cloud Service name
		 * @param {string} api_version Client API version.
		 * @return {DedicatedCloudService} successful operation
		 */
		DedicatedCloudServices_Get(subscriptionId: string, resourceGroupName: string, dedicatedCloudServiceName: string, api_version: string): Observable<DedicatedCloudService> {
			return this.http.get<DedicatedCloudService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/' + (dedicatedCloudServiceName == null ? '' : encodeURIComponent(dedicatedCloudServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements dedicated cloud service PUT method
		 * Create dedicate cloud service
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudServiceName dedicated cloud Service name
		 * @param {string} api_version Client API version.
		 * @param {DedicatedCloudService} requestBody Create Dedicated Cloud Service request
		 * @return {DedicatedCloudService} If resource is created or updated successfully, 200 should be returned
		 */
		DedicatedCloudServices_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, dedicatedCloudServiceName: string, api_version: string, requestBody: DedicatedCloudService): Observable<DedicatedCloudService> {
			return this.http.put<DedicatedCloudService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/' + (dedicatedCloudServiceName == null ? '' : encodeURIComponent(dedicatedCloudServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements dedicatedCloudService DELETE method
		 * Delete dedicate cloud service
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudServiceName dedicated cloud service name
		 * @param {string} api_version Client API version.
		 * @return {void} 
		 */
		DedicatedCloudServices_Delete(subscriptionId: string, resourceGroupName: string, dedicatedCloudServiceName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/' + (dedicatedCloudServiceName == null ? '' : encodeURIComponent(dedicatedCloudServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Implements dedicatedCloudService PATCH method
		 * Patch dedicated cloud service's properties
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} dedicatedCloudServiceName dedicated cloud service name
		 * @param {string} api_version Client API version.
		 * @param {PatchPayload} requestBody Patch Dedicated Cloud Service request
		 * @return {DedicatedCloudService} If resource is created or updated successfully, 200 should be returned
		 */
		DedicatedCloudServices_Update(subscriptionId: string, resourceGroupName: string, dedicatedCloudServiceName: string, api_version: string, requestBody: PatchPayload): Observable<DedicatedCloudService> {
			return this.http.patch<DedicatedCloudService>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/' + (dedicatedCloudServiceName == null ? '' : encodeURIComponent(dedicatedCloudServiceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements list virtual machine within RG method
		 * Returns list of virtual machine within resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} api_version Client API version.
		 * @param {string} filter The filter to apply on the list operation
		 * @param {number} top The maximum number of record sets to return
		 * @param {string} skipToken to be used by nextLink implementation
		 * @return {VirtualMachineListResponse} successful operation
		 */
		VirtualMachines_ListByResourceGroup(subscriptionId: string, resourceGroupName: string, api_version: string, filter: string | null | undefined, top: number | null | undefined, skipToken: string | null | undefined): Observable<VirtualMachineListResponse> {
			return this.http.get<VirtualMachineListResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skipToken=' + (skipToken == null ? '' : encodeURIComponent(skipToken)), {});
		}

		/**
		 * Implements virtual machine GET method
		 * Get virtual machine
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {string} api_version Client API version.
		 * @return {VirtualMachine} successful operation
		 */
		VirtualMachines_Get(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, api_version: string): Observable<VirtualMachine> {
			return this.http.get<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Implements virtual machine PUT method
		 * Create Or Update Virtual Machine
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {string} api_version Client API version.
		 * @param {VirtualMachine} requestBody Create or Update Virtual Machine request
		 * @return {VirtualMachine} If resource is created or updated successfully, 200 should be returned
		 */
		VirtualMachines_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, api_version: string, requestBody: VirtualMachine): Observable<VirtualMachine> {
			return this.http.put<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements virtual machine DELETE method
		 * Delete virtual machine
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {string} api_version Client API version.
		 * @return {void} 
		 */
		VirtualMachines_Delete(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Implements virtual machine PATCH method
		 * Patch virtual machine properties
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {string} api_version Client API version.
		 * @param {PatchPayload} requestBody Patch virtual machine request
		 * @return {VirtualMachine} If resource is created or updated successfully, 200 should be returned
		 */
		VirtualMachines_Update(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, api_version: string, requestBody: PatchPayload): Observable<VirtualMachine> {
			return this.http.patch<VirtualMachine>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Implements a start method for a virtual machine
		 * Power on virtual machine
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/start
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {string} api_version Client API version.
		 * @return {void} OK
		 */
		VirtualMachines_Start(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/start&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Implements shutdown, poweroff, and suspend method for a virtual machine
		 * Power off virtual machine, options: shutdown, poweroff, and suspend
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/stop
		 * @param {string} subscriptionId The subscription ID.
		 * @param {string} resourceGroupName The name of the resource group
		 * @param {string} virtualMachineName virtual machine name
		 * @param {VirtualMachineStopModeMode} mode query stop mode parameter (reboot, shutdown, etc...)
		 * @param {string} api_version Client API version.
		 * @param {VirtualMachineStopMode} requestBody body stop mode parameter (reboot, shutdown, etc...)
		 * @return {void} OK
		 */
		VirtualMachines_Stop(subscriptionId: string, resourceGroupName: string, virtualMachineName: string, mode: VirtualMachineStopModeMode | null | undefined, api_version: string, requestBody: VirtualMachineStopMode): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.VMwareCloudSimple/virtualMachines/' + (virtualMachineName == null ? '' : encodeURIComponent(virtualMachineName)) + '/stop&mode=' + mode + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

