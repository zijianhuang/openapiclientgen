import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Dimension of blobs, possibly be blob type or access tier. */
	export interface Dimension {

		/** Display name of dimension. */
		displayName?: string | null;

		/** Display name of dimension. */
		name?: string | null;
	}

	/** Dimension of blobs, possibly be blob type or access tier. */
	export interface DimensionFormProperties {

		/** Display name of dimension. */
		displayName: FormControl<string | null | undefined>,

		/** Display name of dimension. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metric specification of operation. */
	export interface MetricSpecification {

		/** Aggregation type could be Average. */
		aggregationType?: string | null;

		/** The category this metric specification belong to, could be Capacity. */
		category?: string | null;

		/** Dimensions of blobs, including blob type and access tier. */
		dimensions?: Array<Dimension>;

		/** Display description of metric specification. */
		displayDescription?: string | null;

		/** Display name of metric specification. */
		displayName?: string | null;

		/** The property to decide fill gap with zero or not. */
		fillGapWithZero?: boolean | null;

		/** Name of metric specification. */
		name?: string | null;

		/** Account Resource Id. */
		resourceIdDimensionNameOverride?: string | null;

		/** Unit could be Bytes or Count. */
		unit?: string | null;
	}

	/** Metric specification of operation. */
	export interface MetricSpecificationFormProperties {

		/** Aggregation type could be Average. */
		aggregationType: FormControl<string | null | undefined>,

		/** The category this metric specification belong to, could be Capacity. */
		category: FormControl<string | null | undefined>,

		/** Display description of metric specification. */
		displayDescription: FormControl<string | null | undefined>,

		/** Display name of metric specification. */
		displayName: FormControl<string | null | undefined>,

		/** The property to decide fill gap with zero or not. */
		fillGapWithZero: FormControl<boolean | null | undefined>,

		/** Name of metric specification. */
		name: FormControl<string | null | undefined>,

		/** Account Resource Id. */
		resourceIdDimensionNameOverride: FormControl<string | null | undefined>,

		/** Unit could be Bytes or Count. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateMetricSpecificationFormGroup() {
		return new FormGroup<MetricSpecificationFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resourceIdDimensionNameOverride: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Microsoft.NetApp REST API operation definition. */
	export interface Operation {

		/** Display metadata associated with the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;

		/** The origin of operations. */
		origin?: string | null;

		/** Properties of operation, include metric specifications. */
		properties?: OperationProperties;
	}

	/** Microsoft.NetApp REST API operation definition. */
	export interface OperationFormProperties {

		/** Display metadata associated with the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,

		/** The origin of operations. */
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the request to list Cloud Volume operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** List of Storage operations supported by the Storage resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Cloud Volume operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** Properties of operation, include metric specifications. */
	export interface OperationProperties {

		/** One property of operation, include metric specifications. */
		serviceSpecification?: ServiceSpecification;
	}

	/** Properties of operation, include metric specifications. */
	export interface OperationPropertiesFormProperties {
	}
	export function CreateOperationPropertiesFormGroup() {
		return new FormGroup<OperationPropertiesFormProperties>({
		});

	}


	/** Information regarding availability of a resource name. */
	export interface ResourceNameAvailability {

		/** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
		isAvailable?: boolean | null;

		/** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
		message?: string | null;

		/** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
		reason?: ResourceNameAvailabilityReason | null;
	}

	/** Information regarding availability of a resource name. */
	export interface ResourceNameAvailabilityFormProperties {

		/** <code>true</code> indicates name is valid and available. <code>false</code> indicates the name is invalid, unavailable, or both. */
		isAvailable: FormControl<boolean | null | undefined>,

		/** If reason == invalid, provide the user with the reason why the given name is invalid, and provide the resource naming requirements so that the user can select a valid name. If reason == AlreadyExists, explain that resource name is already in use, and direct them to select a different name. */
		message: FormControl<string | null | undefined>,

		/** <code>Invalid</code> indicates the name provided does not match Azure App Service naming requirements. <code>AlreadyExists</code> indicates that the name is already in use and is therefore unavailable. */
		reason: FormControl<ResourceNameAvailabilityReason | null | undefined>,
	}
	export function CreateResourceNameAvailabilityFormGroup() {
		return new FormGroup<ResourceNameAvailabilityFormProperties>({
			isAvailable: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<ResourceNameAvailabilityReason | null | undefined>(undefined),
		});

	}

	export enum ResourceNameAvailabilityReason { Invalid = 'Invalid', AlreadyExists = 'AlreadyExists' }


	/** Resource name availability request content. */
	export interface ResourceNameAvailabilityRequest {

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: string;

		/**
		 * Resource group name.
		 * Required
		 */
		resourceGroup: string;

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: ResourceNameAvailabilityRequestType;
	}

	/** Resource name availability request content. */
	export interface ResourceNameAvailabilityRequestFormProperties {

		/**
		 * Resource name to verify.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Resource group name.
		 * Required
		 */
		resourceGroup: FormControl<string | null | undefined>,

		/**
		 * Resource type used for verification.
		 * Required
		 */
		type: FormControl<ResourceNameAvailabilityRequestType | null | undefined>,
	}
	export function CreateResourceNameAvailabilityRequestFormGroup() {
		return new FormGroup<ResourceNameAvailabilityRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceNameAvailabilityRequestType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceNameAvailabilityRequestType { 'Microsoft.NetApp/netAppAccounts' = 'Microsoft.NetApp/netAppAccounts', 'Microsoft.NetApp/netAppAccounts/capacityPools' = 'Microsoft.NetApp/netAppAccounts/capacityPools', 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes' = 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes', 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' = 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots' }


	/** One property of operation, include metric specifications. */
	export interface ServiceSpecification {

		/** Metric specifications of operation. */
		metricSpecifications?: Array<MetricSpecification>;
	}

	/** One property of operation, include metric specifications. */
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}


	/** NetApp account properties */
	export interface AccountProperties {

		/** Active Directories */
		activeDirectories?: Array<ActiveDirectory>;

		/** Azure lifecycle management */
		provisioningState?: string | null;
	}

	/** NetApp account properties */
	export interface AccountPropertiesFormProperties {

		/** Azure lifecycle management */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateAccountPropertiesFormGroup() {
		return new FormGroup<AccountPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Active Directory */
	export interface ActiveDirectory {

		/** Id of the Active Directory */
		activeDirectoryId?: string | null;

		/** Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain */
		dns?: string | null;

		/** Name of the Active Directory domain */
		domain?: string | null;

		/** The Organizational Unit (OU) within the Windows Active Directory */
		organizationalUnit?: string | null;

		/** Plain text password of Active Directory domain administrator */
		password?: string | null;

		/** The Active Directory site the service will limit Domain Controller discovery to */
		site?: string | null;

		/** NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes */
		smbServerName?: string | null;

		/** Status of the Active Directory */
		status?: string | null;

		/** Username of Active Directory domain administrator */
		username?: string | null;
	}

	/** Active Directory */
	export interface ActiveDirectoryFormProperties {

		/** Id of the Active Directory */
		activeDirectoryId: FormControl<string | null | undefined>,

		/** Comma separated list of DNS server IP addresses (IPv4 only) for the Active Directory domain */
		dns: FormControl<string | null | undefined>,

		/** Name of the Active Directory domain */
		domain: FormControl<string | null | undefined>,

		/** The Organizational Unit (OU) within the Windows Active Directory */
		organizationalUnit: FormControl<string | null | undefined>,

		/** Plain text password of Active Directory domain administrator */
		password: FormControl<string | null | undefined>,

		/** The Active Directory site the service will limit Domain Controller discovery to */
		site: FormControl<string | null | undefined>,

		/** NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes */
		smbServerName: FormControl<string | null | undefined>,

		/** Status of the Active Directory */
		status: FormControl<string | null | undefined>,

		/** Username of Active Directory domain administrator */
		username: FormControl<string | null | undefined>,
	}
	export function CreateActiveDirectoryFormGroup() {
		return new FormGroup<ActiveDirectoryFormProperties>({
			activeDirectoryId: new FormControl<string | null | undefined>(undefined),
			dns: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			organizationalUnit: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			site: new FormControl<string | null | undefined>(undefined),
			smbServerName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authorize request */
	export interface AuthorizeRequest {

		/** Resource id of the remote volume */
		remoteVolumeResourceId?: string | null;
	}

	/** Authorize request */
	export interface AuthorizeRequestFormProperties {

		/** Resource id of the remote volume */
		remoteVolumeResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeRequestFormGroup() {
		return new FormGroup<AuthorizeRequestFormProperties>({
			remoteVolumeResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Capacity pool resource */
	export interface CapacityPool {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/**
		 * Pool properties
		 * Required
		 */
		properties: PoolProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** Capacity pool resource */
	export interface CapacityPoolFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCapacityPoolFormGroup() {
		return new FormGroup<CapacityPoolFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pool properties */
	export interface PoolProperties {

		/**
		 * UUID v4 used to identify the Pool
		 * Min length: 36
		 * Max length: 36
		 */
		poolId?: string | null;

		/** Azure lifecycle management */
		provisioningState?: string | null;

		/**
		 * The service level of the file system
		 * Required
		 */
		serviceLevel: PoolPropertiesServiceLevel;

		/**
		 * Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
		 * Required
		 * Minimum: 4398046511104
		 * Maximum: 549755813888000
		 */
		size: string;
	}

	/** Pool properties */
	export interface PoolPropertiesFormProperties {

		/**
		 * UUID v4 used to identify the Pool
		 * Min length: 36
		 * Max length: 36
		 */
		poolId: FormControl<string | null | undefined>,

		/** Azure lifecycle management */
		provisioningState: FormControl<string | null | undefined>,

		/**
		 * The service level of the file system
		 * Required
		 */
		serviceLevel: FormControl<PoolPropertiesServiceLevel | null | undefined>,

		/**
		 * Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
		 * Required
		 * Minimum: 4398046511104
		 * Maximum: 549755813888000
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreatePoolPropertiesFormGroup() {
		return new FormGroup<PoolPropertiesFormProperties>({
			poolId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceLevel: new FormControl<PoolPropertiesServiceLevel | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(4398046511104), Validators.max(549755813888000)]),
		});

	}

	export enum PoolPropertiesServiceLevel { Standard = 'Standard', Premium = 'Premium', Ultra = 'Ultra' }


	/** Tags are a list of key-value pairs that describe the resource */
	export interface ResourceTags {
	}

	/** Tags are a list of key-value pairs that describe the resource */
	export interface ResourceTagsFormProperties {
	}
	export function CreateResourceTagsFormGroup() {
		return new FormGroup<ResourceTagsFormProperties>({
		});

	}


	/** List of capacity pool resources */
	export interface CapacityPoolList {

		/** List of Capacity pools */
		value?: Array<CapacityPool>;
	}

	/** List of capacity pool resources */
	export interface CapacityPoolListFormProperties {
	}
	export function CreateCapacityPoolListFormGroup() {
		return new FormGroup<CapacityPoolListFormProperties>({
		});

	}


	/** Capacity pool patch resource */
	export interface CapacityPoolPatch {

		/** Resource Id */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Patchable pool properties */
		properties?: PoolPatchProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** Capacity pool patch resource */
	export interface CapacityPoolPatchFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCapacityPoolPatchFormGroup() {
		return new FormGroup<CapacityPoolPatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Patchable pool properties */
	export interface PoolPatchProperties {

		/** The service level of the file system */
		serviceLevel?: PoolPropertiesServiceLevel | null;

		/**
		 * Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
		 * Minimum: 4398046511104
		 * Maximum: 549755813888000
		 */
		size?: string | null;
	}

	/** Patchable pool properties */
	export interface PoolPatchPropertiesFormProperties {

		/** The service level of the file system */
		serviceLevel: FormControl<PoolPropertiesServiceLevel | null | undefined>,

		/**
		 * Provisioned size of the pool (in bytes). Allowed values are in 4TiB chunks (value must be multiply of 4398046511104).
		 * Minimum: 4398046511104
		 * Maximum: 549755813888000
		 */
		size: FormControl<string | null | undefined>,
	}
	export function CreatePoolPatchPropertiesFormGroup() {
		return new FormGroup<PoolPatchPropertiesFormProperties>({
			serviceLevel: new FormControl<PoolPropertiesServiceLevel | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined, [Validators.min(4398046511104), Validators.max(549755813888000)]),
		});

	}


	/** Volume Export Policy Rule */
	export interface ExportPolicyRule {

		/** Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names */
		allowedClients?: string | null;

		/** Allows CIFS protocol */
		cifs?: boolean | null;

		/** Allows NFSv3 protocol */
		nfsv3?: boolean | null;

		/** Allows NFSv4.1 protocol */
		nfsv41?: boolean | null;

		/**
		 * Order index
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleIndex?: number | null;

		/** Read only access */
		unixReadOnly?: boolean | null;

		/** Read and write access */
		unixReadWrite?: boolean | null;
	}

	/** Volume Export Policy Rule */
	export interface ExportPolicyRuleFormProperties {

		/** Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names */
		allowedClients: FormControl<string | null | undefined>,

		/** Allows CIFS protocol */
		cifs: FormControl<boolean | null | undefined>,

		/** Allows NFSv3 protocol */
		nfsv3: FormControl<boolean | null | undefined>,

		/** Allows NFSv4.1 protocol */
		nfsv41: FormControl<boolean | null | undefined>,

		/**
		 * Order index
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ruleIndex: FormControl<number | null | undefined>,

		/** Read only access */
		unixReadOnly: FormControl<boolean | null | undefined>,

		/** Read and write access */
		unixReadWrite: FormControl<boolean | null | undefined>,
	}
	export function CreateExportPolicyRuleFormGroup() {
		return new FormGroup<ExportPolicyRuleFormProperties>({
			allowedClients: new FormControl<string | null | undefined>(undefined),
			cifs: new FormControl<boolean | null | undefined>(undefined),
			nfsv3: new FormControl<boolean | null | undefined>(undefined),
			nfsv41: new FormControl<boolean | null | undefined>(undefined),
			ruleIndex: new FormControl<number | null | undefined>(undefined),
			unixReadOnly: new FormControl<boolean | null | undefined>(undefined),
			unixReadWrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Mount Target */
	export interface MountTarget {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/**
		 * Mount target properties
		 * Required
		 */
		properties: MountTargetProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** Mount Target */
	export interface MountTargetFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMountTargetFormGroup() {
		return new FormGroup<MountTargetFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mount target properties */
	export interface MountTargetProperties {

		/**
		 * UUID v4 used to identify the MountTarget
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId: string;

		/** The mount target's IPv4 address */
		ipAddress?: string | null;

		/**
		 * UUID v4 used to identify the MountTarget
		 * Min length: 36
		 * Max length: 36
		 */
		mountTargetId?: string | null;

		/** The SMB server's Fully Qualified Domain Name, FQDN */
		smbServerFqdn?: string | null;
	}

	/** Mount target properties */
	export interface MountTargetPropertiesFormProperties {

		/**
		 * UUID v4 used to identify the MountTarget
		 * Required
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId: FormControl<string | null | undefined>,

		/** The mount target's IPv4 address */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * UUID v4 used to identify the MountTarget
		 * Min length: 36
		 * Max length: 36
		 */
		mountTargetId: FormControl<string | null | undefined>,

		/** The SMB server's Fully Qualified Domain Name, FQDN */
		smbServerFqdn: FormControl<string | null | undefined>,
	}
	export function CreateMountTargetPropertiesFormGroup() {
		return new FormGroup<MountTargetPropertiesFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			mountTargetId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			smbServerFqdn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Mount Targets */
	export interface MountTargetList {

		/** A list of Mount targets */
		value?: Array<MountTarget>;
	}

	/** List of Mount Targets */
	export interface MountTargetListFormProperties {
	}
	export function CreateMountTargetListFormGroup() {
		return new FormGroup<MountTargetListFormProperties>({
		});

	}


	/** NetApp account resource */
	export interface NetAppAccount {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** NetApp account properties */
		properties?: AccountProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** NetApp account resource */
	export interface NetAppAccountFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetAppAccountFormGroup() {
		return new FormGroup<NetAppAccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of NetApp account resources */
	export interface NetAppAccountList {

		/** Multiple NetApp accounts */
		value?: Array<NetAppAccount>;
	}

	/** List of NetApp account resources */
	export interface NetAppAccountListFormProperties {
	}
	export function CreateNetAppAccountListFormGroup() {
		return new FormGroup<NetAppAccountListFormProperties>({
		});

	}


	/** NetApp account patch resource */
	export interface NetAppAccountPatch {

		/** Resource Id */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** NetApp account properties */
		properties?: AccountProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** NetApp account patch resource */
	export interface NetAppAccountPatchFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetAppAccountPatchFormGroup() {
		return new FormGroup<NetAppAccountPatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replication properties */
	export interface ReplicationObject {

		/** Indicates whether the local volume is the source or destination for the Volume Replication */
		endpointType?: ReplicationObjectEndpointType | null;

		/** The remote region for the other end of the Volume Replication. */
		remoteVolumeRegion?: string | null;

		/**
		 * The resource ID of the remote volume.
		 * Required
		 */
		remoteVolumeResourceId: string;

		/** Id */
		replicationId?: string | null;

		/**
		 * Schedule
		 * Required
		 */
		replicationSchedule: ReplicationObjectReplicationSchedule;
	}

	/** Replication properties */
	export interface ReplicationObjectFormProperties {

		/** Indicates whether the local volume is the source or destination for the Volume Replication */
		endpointType: FormControl<ReplicationObjectEndpointType | null | undefined>,

		/** The remote region for the other end of the Volume Replication. */
		remoteVolumeRegion: FormControl<string | null | undefined>,

		/**
		 * The resource ID of the remote volume.
		 * Required
		 */
		remoteVolumeResourceId: FormControl<string | null | undefined>,

		/** Id */
		replicationId: FormControl<string | null | undefined>,

		/**
		 * Schedule
		 * Required
		 */
		replicationSchedule: FormControl<ReplicationObjectReplicationSchedule | null | undefined>,
	}
	export function CreateReplicationObjectFormGroup() {
		return new FormGroup<ReplicationObjectFormProperties>({
			endpointType: new FormControl<ReplicationObjectEndpointType | null | undefined>(undefined),
			remoteVolumeRegion: new FormControl<string | null | undefined>(undefined),
			remoteVolumeResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			replicationId: new FormControl<string | null | undefined>(undefined),
			replicationSchedule: new FormControl<ReplicationObjectReplicationSchedule | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ReplicationObjectEndpointType { src = 'src', dst = 'dst' }

	export enum ReplicationObjectReplicationSchedule { _10minutely = '_10minutely', hourly = 'hourly', daily = 'daily', weekly = 'weekly', monthly = 'monthly' }


	/** Replication status */
	export interface ReplicationStatus {

		/** Displays error message if the replication is in an error state */
		errorMessage?: string | null;

		/** Replication health check */
		healthy?: boolean | null;

		/** The status of the replication */
		mirrorState?: ReplicationStatusMirrorState | null;

		/** Status of the mirror relationship */
		relationshipStatus?: ReplicationStatusRelationshipStatus | null;

		/** The progress of the replication */
		totalProgress?: string | null;
	}

	/** Replication status */
	export interface ReplicationStatusFormProperties {

		/** Displays error message if the replication is in an error state */
		errorMessage: FormControl<string | null | undefined>,

		/** Replication health check */
		healthy: FormControl<boolean | null | undefined>,

		/** The status of the replication */
		mirrorState: FormControl<ReplicationStatusMirrorState | null | undefined>,

		/** Status of the mirror relationship */
		relationshipStatus: FormControl<ReplicationStatusRelationshipStatus | null | undefined>,

		/** The progress of the replication */
		totalProgress: FormControl<string | null | undefined>,
	}
	export function CreateReplicationStatusFormGroup() {
		return new FormGroup<ReplicationStatusFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			healthy: new FormControl<boolean | null | undefined>(undefined),
			mirrorState: new FormControl<ReplicationStatusMirrorState | null | undefined>(undefined),
			relationshipStatus: new FormControl<ReplicationStatusRelationshipStatus | null | undefined>(undefined),
			totalProgress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplicationStatusMirrorState { Uninitialized = 'Uninitialized', Mirrored = 'Mirrored', Broken = 'Broken' }

	export enum ReplicationStatusRelationshipStatus { Idle = 'Idle', Transferring = 'Transferring' }


	/** Snapshot of a Volume */
	export interface Snapshot {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Snapshot properties */
		properties?: SnapshotProperties;

		/** Resource type */
		type?: string | null;
	}

	/** Snapshot of a Volume */
	export interface SnapshotFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotFormGroup() {
		return new FormGroup<SnapshotFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Snapshot properties */
	export interface SnapshotProperties {

		/** The creation date of the snapshot */
		created?: Date | null;

		/**
		 * UUID v4 used to identify the FileSystem
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId?: string | null;

		/** Azure lifecycle management */
		provisioningState?: string | null;

		/**
		 * UUID v4 used to identify the Snapshot
		 * Min length: 36
		 * Max length: 36
		 */
		snapshotId?: string | null;
	}

	/** Snapshot properties */
	export interface SnapshotPropertiesFormProperties {

		/** The creation date of the snapshot */
		created: FormControl<Date | null | undefined>,

		/**
		 * UUID v4 used to identify the FileSystem
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId: FormControl<string | null | undefined>,

		/** Azure lifecycle management */
		provisioningState: FormControl<string | null | undefined>,

		/**
		 * UUID v4 used to identify the Snapshot
		 * Min length: 36
		 * Max length: 36
		 */
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateSnapshotPropertiesFormGroup() {
		return new FormGroup<SnapshotPropertiesFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
		});

	}


	/** Snapshot patch */
	export interface SnapshotPatch {
	}

	/** Snapshot patch */
	export interface SnapshotPatchFormProperties {
	}
	export function CreateSnapshotPatchFormGroup() {
		return new FormGroup<SnapshotPatchFormProperties>({
		});

	}


	/** List of Snapshots */
	export interface SnapshotsList {

		/** A list of Snapshots */
		value?: Array<Snapshot>;
	}

	/** List of Snapshots */
	export interface SnapshotsListFormProperties {
	}
	export function CreateSnapshotsListFormGroup() {
		return new FormGroup<SnapshotsListFormProperties>({
		});

	}


	/** Volume resource */
	export interface Volume {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/**
		 * Volume properties
		 * Required
		 */
		properties: VolumeProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** Volume resource */
	export interface VolumeFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Volume properties */
	export interface VolumeProperties {

		/**
		 * Unique Baremetal Tenant Identifier.
		 * Min length: 36
		 * Max length: 36
		 */
		baremetalTenantId?: string | null;

		/**
		 * A unique file path for the volume. Used when creating mount targets
		 * Required
		 * Min length: 1
		 * Max length: 80
		 */
		creationToken: string;

		/** DataProtection type volumes include an object containing details of the replication */
		dataProtection?: any;

		/** Set of export policy rules */
		exportPolicy?: any;

		/**
		 * Unique FileSystem Identifier.
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId?: string | null;

		/** Restoring */
		isRestoring?: boolean | null;

		/** List of mount targets */
		mountTargets?: any;

		/** Set of protocol types */
		protocolTypes?: Array<string>;

		/** Azure lifecycle management */
		provisioningState?: string | null;

		/** The service level of the file system */
		serviceLevel?: PoolPropertiesServiceLevel | null;

		/**
		 * UUID v4 or resource identifier used to identify the Snapshot.
		 * Min length: 36
		 * Max length: 36
		 */
		snapshotId?: string | null;

		/**
		 * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
		 * Required
		 */
		subnetId: string;

		/**
		 * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
		 * Required
		 * Minimum: 107374182400
		 * Maximum: 109951162777600
		 */
		usageThreshold: string;

		/** What type of volume is this */
		volumeType?: string | null;
	}

	/** Volume properties */
	export interface VolumePropertiesFormProperties {

		/**
		 * Unique Baremetal Tenant Identifier.
		 * Min length: 36
		 * Max length: 36
		 */
		baremetalTenantId: FormControl<string | null | undefined>,

		/**
		 * A unique file path for the volume. Used when creating mount targets
		 * Required
		 * Min length: 1
		 * Max length: 80
		 */
		creationToken: FormControl<string | null | undefined>,

		/** DataProtection type volumes include an object containing details of the replication */
		dataProtection: FormControl<any | null | undefined>,

		/** Set of export policy rules */
		exportPolicy: FormControl<any | null | undefined>,

		/**
		 * Unique FileSystem Identifier.
		 * Min length: 36
		 * Max length: 36
		 */
		fileSystemId: FormControl<string | null | undefined>,

		/** Restoring */
		isRestoring: FormControl<boolean | null | undefined>,

		/** List of mount targets */
		mountTargets: FormControl<any | null | undefined>,

		/** Azure lifecycle management */
		provisioningState: FormControl<string | null | undefined>,

		/** The service level of the file system */
		serviceLevel: FormControl<PoolPropertiesServiceLevel | null | undefined>,

		/**
		 * UUID v4 or resource identifier used to identify the Snapshot.
		 * Min length: 36
		 * Max length: 36
		 */
		snapshotId: FormControl<string | null | undefined>,

		/**
		 * The Azure Resource URI for a delegated subnet. Must have the delegation Microsoft.NetApp/volumes
		 * Required
		 */
		subnetId: FormControl<string | null | undefined>,

		/**
		 * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
		 * Required
		 * Minimum: 107374182400
		 * Maximum: 109951162777600
		 */
		usageThreshold: FormControl<string | null | undefined>,

		/** What type of volume is this */
		volumeType: FormControl<string | null | undefined>,
	}
	export function CreateVolumePropertiesFormGroup() {
		return new FormGroup<VolumePropertiesFormProperties>({
			baremetalTenantId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			creationToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(80), Validators.pattern('^[a-zA-Z][a-zA-Z0-9\-]{0,79}$')]),
			dataProtection: new FormControl<any | null | undefined>(undefined),
			exportPolicy: new FormControl<any | null | undefined>(undefined),
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$')]),
			isRestoring: new FormControl<boolean | null | undefined>(undefined),
			mountTargets: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			serviceLevel: new FormControl<PoolPropertiesServiceLevel | null | undefined>(undefined),
			snapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}|(\\?([^\/]*[\/])*)([^\/]+)$')]),
			subnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			usageThreshold: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.min(107374182400), Validators.max(109951162777600)]),
			volumeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of volume resources */
	export interface VolumeList {

		/** List of volumes */
		value?: Array<Volume>;
	}

	/** List of volume resources */
	export interface VolumeListFormProperties {
	}
	export function CreateVolumeListFormGroup() {
		return new FormGroup<VolumeListFormProperties>({
		});

	}


	/** Volume patch resource */
	export interface VolumePatch {

		/** Resource Id */
		id?: string | null;

		/** Resource location */
		location?: string | null;

		/** Resource name */
		name?: string | null;

		/** Patchable volume properties */
		properties?: VolumePatchProperties;

		/** Tags are a list of key-value pairs that describe the resource */
		tags?: ResourceTags;

		/** Resource type */
		type?: string | null;
	}

	/** Volume patch resource */
	export interface VolumePatchFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource location */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVolumePatchFormGroup() {
		return new FormGroup<VolumePatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Patchable volume properties */
	export interface VolumePatchProperties {

		/** Set of export policy rules */
		exportPolicy?: any;

		/** The service level of the file system */
		serviceLevel?: PoolPropertiesServiceLevel | null;

		/**
		 * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
		 * Minimum: 107374182400
		 * Maximum: 109951162777600
		 */
		usageThreshold?: string | null;
	}

	/** Patchable volume properties */
	export interface VolumePatchPropertiesFormProperties {

		/** Set of export policy rules */
		exportPolicy: FormControl<any | null | undefined>,

		/** The service level of the file system */
		serviceLevel: FormControl<PoolPropertiesServiceLevel | null | undefined>,

		/**
		 * Maximum storage quota allowed for a file system in bytes. This is a soft quota used for alerting only. Minimum size is 100 GiB. Upper limit is 100TiB. Specified in bytes.
		 * Minimum: 107374182400
		 * Maximum: 109951162777600
		 */
		usageThreshold: FormControl<string | null | undefined>,
	}
	export function CreateVolumePatchPropertiesFormGroup() {
		return new FormGroup<VolumePatchPropertiesFormProperties>({
			exportPolicy: new FormControl<any | null | undefined>(undefined),
			serviceLevel: new FormControl<PoolPropertiesServiceLevel | null | undefined>(undefined),
			usageThreshold: new FormControl<string | null | undefined>(undefined, [Validators.min(107374182400), Validators.max(109951162777600)]),
		});

	}


	/** revert a volume to the snapshot */
	export interface VolumeRevert {

		/** Resource id of the snapshot */
		snapshotId?: string | null;
	}

	/** revert a volume to the snapshot */
	export interface VolumeRevertFormProperties {

		/** Resource id of the snapshot */
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateVolumeRevertFormGroup() {
		return new FormGroup<VolumeRevertFormProperties>({
			snapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Describes the Resource Provider
		 * Lists all of the available Microsoft.NetApp Rest API operations
		 * Get providers/Microsoft.NetApp/operations
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {OperationListResult} OK
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.NetApp/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check file path availability
		 * Check if a file path is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkFilePathAvailability
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The location
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {ResourceNameAvailabilityRequest} requestBody File path availability request.
		 * @return {ResourceNameAvailability} OK
		 */
		NetAppResource_CheckFilePathAvailability(subscriptionId: string, location: string, api_version: string, requestBody: ResourceNameAvailabilityRequest): Observable<ResourceNameAvailability> {
			return this.http.post<ResourceNameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.NetApp/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkFilePathAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check resource name availability
		 * Check if a resource name is available.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.NetApp/locations/{location}/checkNameAvailability
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} location The location
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {ResourceNameAvailabilityRequest} requestBody Name availability request.
		 * @return {ResourceNameAvailability} OK
		 */
		NetAppResource_CheckNameAvailability(subscriptionId: string, location: string, api_version: string, requestBody: ResourceNameAvailabilityRequest): Observable<ResourceNameAvailability> {
			return this.http.post<ResourceNameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.NetApp/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe all NetApp Accounts in a resource group
		 * List and describe all NetApp accounts in the resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {NetAppAccountList} OK
		 */
		Accounts_List(subscriptionId: string, resourceGroupName: string, api_version: string): Observable<NetAppAccountList> {
			return this.http.get<NetAppAccountList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Describe a NetApp Account
		 * Get the NetApp account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {NetAppAccount} OK
		 */
		Accounts_Get(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<NetAppAccount> {
			return this.http.get<NetAppAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or update a NetApp account
		 * Create or update the specified NetApp account within the resource group
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {NetAppAccount} requestBody NetApp Account object supplied in the body of the operation.
		 * @return {NetAppAccount} OK - account updated
		 */
		Accounts_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: NetAppAccount): Observable<NetAppAccount> {
			return this.http.put<NetAppAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a NetApp account
		 * Delete the specified NetApp account
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		Accounts_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a NetApp account
		 * Patch the specified NetApp account
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {NetAppAccountPatch} requestBody NetApp Account object supplied in the body of the operation.
		 * @return {NetAppAccount} OK - account updated
		 */
		Accounts_Update(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string, requestBody: NetAppAccountPatch): Observable<NetAppAccount> {
			return this.http.patch<NetAppAccount>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe all Capacity Pools
		 * List all capacity pools in the NetApp Account
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {CapacityPoolList} OK
		 */
		Pools_List(subscriptionId: string, resourceGroupName: string, accountName: string, api_version: string): Observable<CapacityPoolList> {
			return this.http.get<CapacityPoolList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Describe a Capacity Pool
		 * Get details of the specified capacity pool
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {CapacityPool} OK
		 */
		Pools_Get(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, api_version: string): Observable<CapacityPool> {
			return this.http.get<CapacityPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update the specified capacity pool within the resource group
		 * Create or Update a capacity pool
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {CapacityPool} requestBody Capacity pool object supplied in the body of the operation.
		 * @return {CapacityPool} OK - pool updated
		 */
		Pools_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, api_version: string, requestBody: CapacityPool): Observable<CapacityPool> {
			return this.http.put<CapacityPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a capacity pool
		 * Delete the specified capacity pool
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		Pools_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a capacity pool
		 * Patch the specified capacity pool
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {CapacityPoolPatch} requestBody Capacity pool object supplied in the body of the operation.
		 * @return {CapacityPool} OK
		 */
		Pools_Update(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, api_version: string, requestBody: CapacityPoolPatch): Observable<CapacityPool> {
			return this.http.patch<CapacityPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describe all volumes
		 * List all volumes within the capacity pool
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {VolumeList} OK
		 */
		Volumes_List(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, api_version: string): Observable<VolumeList> {
			return this.http.get<VolumeList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Describe a volume
		 * Get the details of the specified volume
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {Volume} OK
		 */
		Volumes_Get(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<Volume> {
			return this.http.get<Volume>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create or Update a volume
		 * Create or update the specified volume within the capacity pool
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {Volume} requestBody Volume object supplied in the body of the operation.
		 * @return {Volume} Ok - volume updated
		 */
		Volumes_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string, requestBody: Volume): Observable<Volume> {
			return this.http.put<Volume>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a volume
		 * Delete the specified volume
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} 
		 */
		Volumes_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a volume
		 * Patch the specified volume
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {VolumePatch} requestBody Volume object supplied in the body of the operation.
		 * @return {Volume} OK
		 */
		Volumes_Update(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string, requestBody: VolumePatch): Observable<Volume> {
			return this.http.patch<Volume>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Authorize source volume replication
		 * Authorize the replication connection on the source volume
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/authorizeReplication
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {AuthorizeRequest} requestBody Authorize request object supplied in the body of the operation.
		 * @return {void} OK - terminal state
		 */
		Volumes_AuthorizeReplication(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string, requestBody: AuthorizeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/authorizeReplication&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Break volume replication
		 * Break the replication connection on the destination volume
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/breakReplication
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} OK - terminal state
		 */
		Volumes_BreakReplication(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/breakReplication&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete volume replication
		 * Delete the replication connection on the destination volume, and send release to the source replication
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/deleteReplication
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} OK - terminal state
		 */
		Volumes_DeleteReplication(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/deleteReplication&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get volume replication status
		 * Get the status of the replication
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/replicationStatus
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ReplicationStatus} OK
		 */
		Volumes_ReplicationStatus(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<ReplicationStatus> {
			return this.http.get<ReplicationStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/replicationStatus&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Resync volume replication
		 * Resync the connection on the destination volume. If the operation is ran on the source volume it will reverse-resync the connection and sync from source to destination.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/resyncReplication
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} OK - terminal state
		 */
		Volumes_ResyncReplication(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/resyncReplication&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Revert a volume to one of its snapshots
		 * Revert a volume to the snapshot specified in the body
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/revert
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {VolumeRevert} requestBody Object for snapshot to revert supplied in the body of the operation.
		 * @return {void} OK - terminal state
		 */
		Volumes_Revert(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string, requestBody: VolumeRevert): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/revert&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe all snapshots
		 * List all snapshots associated with the volume
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {SnapshotsList} OK
		 */
		Snapshots_List(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, api_version: string): Observable<SnapshotsList> {
			return this.http.get<SnapshotsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/snapshots&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Describe a snapshot
		 * Get details of the specified snapshot
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} snapshotName The name of the mount target
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {Snapshot} OK
		 */
		Snapshots_Get(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, api_version: string): Observable<Snapshot> {
			return this.http.get<Snapshot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a snapshot
		 * Create the specified snapshot within the given volume
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} snapshotName The name of the mount target
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {Snapshot} requestBody Snapshot object supplied in the body of the operation.
		 * @return {void} 
		 */
		Snapshots_Create(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, api_version: string, requestBody: Snapshot): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a snapshot
		 * Delete snapshot
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} snapshotName The name of the mount target
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {void} OK
		 */
		Snapshots_Delete(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a snapshot
		 * Patch a snapshot
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.NetApp/netAppAccounts/{accountName}/capacityPools/{poolName}/volumes/{volumeName}/snapshots/{snapshotName}
		 * @param {string} subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 *     Min length: 1    Max length: 90
		 * @param {string} accountName The name of the NetApp account
		 * @param {string} poolName The name of the capacity pool
		 *     Min length: 1    Max length: 64
		 * @param {string} volumeName The name of the volume
		 *     Min length: 1    Max length: 64
		 * @param {string} snapshotName The name of the mount target
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {SnapshotPatch} requestBody Snapshot object supplied in the body of the operation.
		 * @return {Snapshot} OK
		 */
		Snapshots_Update(subscriptionId: string, resourceGroupName: string, accountName: string, poolName: string, volumeName: string, snapshotName: string, api_version: string, requestBody: SnapshotPatch): Observable<Snapshot> {
			return this.http.patch<Snapshot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.NetApp/netAppAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/capacityPools/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/volumes/' + (volumeName == null ? '' : encodeURIComponent(volumeName)) + '/snapshots/' + (snapshotName == null ? '' : encodeURIComponent(snapshotName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

