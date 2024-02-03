import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This is the response from the Attested_GetDocument operation. */
	export interface AttestedData {

		/** This is the encoding scheme of the signature. */
		encoding?: string | null;

		/** This is the encoded string containing the VM ID, SKU, plan information, public key, timestamp, and nonce value. */
		signature?: string | null;
	}

	/** This is the response from the Attested_GetDocument operation. */
	export interface AttestedDataFormProperties {

		/** This is the encoding scheme of the signature. */
		encoding: FormControl<string | null | undefined>,

		/** This is the encoded string containing the VM ID, SKU, plan information, public key, timestamp, and nonce value. */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateAttestedDataFormGroup() {
		return new FormGroup<AttestedDataFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compute Metadata */
	export interface Compute {

		/** This is the name of the environment in which the VM is running. */
		azEnvironment?: string | null;

		/** This is the Azure Region in which the VM is running. */
		location?: string | null;

		/** This is the name of the VM. */
		name?: string | null;

		/** This is the offer information for the VM image. This value is only present for images deployed from the Azure Image Gallery. */
		offer?: string | null;

		/** This value indicates the type of OS the VM is running, either Linux or Windows. */
		osType?: string | null;

		/** This is the placement group of your Virtual Machine Scale Set. */
		placementGroupId?: string | null;

		/** This contains the data about the plan. */
		plan?: PlanProperties;

		/** This is the fault domain in which the VM. */
		platformFaultDomain?: string | null;

		/** This is the update domain in which the VM. */
		platformUpdateDomain?: string | null;

		/** This is the provider of the VM. */
		provider?: string | null;

		/** This is information about the SSH certificate */
		publicKeys?: Array<PublicKeysProperties>;

		/** This is the publisher of the VM image. */
		publisher?: string | null;

		/** This is the resource group for the VM. */
		resourceGroupName?: string | null;

		/** This is the fully qualified ID for the VM. */
		resourceId?: string | null;

		/** This is the specific SKU for the VM image. */
		sku?: string | null;

		/** This contains the data about the storage disks associated with the VM. */
		storageProfile?: StorageProfile;

		/** This is the Azure subscription for the VM. */
		subscriptionId?: string | null;

		/** This is the list of tags for your VM. */
		tags?: string | null;

		/** This is the version of the VM image. */
		version?: string | null;

		/** This is the unique identifier for the VM. */
		vmId?: string | null;

		/** This is the resource name of the VMSS. */
		vmScaleSetName?: string | null;

		/** This is the size of the VM. */
		vmSize?: string | null;

		/** This is the availability zone of the VM. */
		zone?: string | null;
	}

	/** Compute Metadata */
	export interface ComputeFormProperties {

		/** This is the name of the environment in which the VM is running. */
		azEnvironment: FormControl<string | null | undefined>,

		/** This is the Azure Region in which the VM is running. */
		location: FormControl<string | null | undefined>,

		/** This is the name of the VM. */
		name: FormControl<string | null | undefined>,

		/** This is the offer information for the VM image. This value is only present for images deployed from the Azure Image Gallery. */
		offer: FormControl<string | null | undefined>,

		/** This value indicates the type of OS the VM is running, either Linux or Windows. */
		osType: FormControl<string | null | undefined>,

		/** This is the placement group of your Virtual Machine Scale Set. */
		placementGroupId: FormControl<string | null | undefined>,

		/** This is the fault domain in which the VM. */
		platformFaultDomain: FormControl<string | null | undefined>,

		/** This is the update domain in which the VM. */
		platformUpdateDomain: FormControl<string | null | undefined>,

		/** This is the provider of the VM. */
		provider: FormControl<string | null | undefined>,

		/** This is the publisher of the VM image. */
		publisher: FormControl<string | null | undefined>,

		/** This is the resource group for the VM. */
		resourceGroupName: FormControl<string | null | undefined>,

		/** This is the fully qualified ID for the VM. */
		resourceId: FormControl<string | null | undefined>,

		/** This is the specific SKU for the VM image. */
		sku: FormControl<string | null | undefined>,

		/** This is the Azure subscription for the VM. */
		subscriptionId: FormControl<string | null | undefined>,

		/** This is the list of tags for your VM. */
		tags: FormControl<string | null | undefined>,

		/** This is the version of the VM image. */
		version: FormControl<string | null | undefined>,

		/** This is the unique identifier for the VM. */
		vmId: FormControl<string | null | undefined>,

		/** This is the resource name of the VMSS. */
		vmScaleSetName: FormControl<string | null | undefined>,

		/** This is the size of the VM. */
		vmSize: FormControl<string | null | undefined>,

		/** This is the availability zone of the VM. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateComputeFormGroup() {
		return new FormGroup<ComputeFormProperties>({
			azEnvironment: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offer: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			placementGroupId: new FormControl<string | null | undefined>(undefined),
			platformFaultDomain: new FormControl<string | null | undefined>(undefined),
			platformUpdateDomain: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			resourceGroupName: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			vmId: new FormControl<string | null | undefined>(undefined),
			vmScaleSetName: new FormControl<string | null | undefined>(undefined),
			vmSize: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains the data about the plan. */
	export interface PlanProperties {

		/** This is the Plan ID. */
		name?: string | null;

		/** This is the product of the image from the Marketplace. */
		product?: string | null;

		/** This is the publisher ID. */
		publisher?: string | null;
	}

	/** This contains the data about the plan. */
	export interface PlanPropertiesFormProperties {

		/** This is the Plan ID. */
		name: FormControl<string | null | undefined>,

		/** This is the product of the image from the Marketplace. */
		product: FormControl<string | null | undefined>,

		/** This is the publisher ID. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreatePlanPropertiesFormGroup() {
		return new FormGroup<PlanPropertiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains the data about the public key. */
	export interface PublicKeysProperties {

		/** This is the SSH public key certificate used to authenticate with the VM. */
		keyData?: string | null;

		/** This specifies the full path on the VM where the SSH public key is stored. */
		path?: string | null;
	}

	/** This contains the data about the public key. */
	export interface PublicKeysPropertiesFormProperties {

		/** This is the SSH public key certificate used to authenticate with the VM. */
		keyData: FormControl<string | null | undefined>,

		/** This specifies the full path on the VM where the SSH public key is stored. */
		path: FormControl<string | null | undefined>,
	}
	export function CreatePublicKeysPropertiesFormGroup() {
		return new FormGroup<PublicKeysPropertiesFormProperties>({
			keyData: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains the data about the storage disks associated with the VM. */
	export interface StorageProfile {

		/** Data disk information */
		dataDisks?: Array<DataDisk>;

		/** This contains information about the OS image. */
		imageReference?: ImageReference;

		/** This contains information about the OS disk used by the VM. */
		osDisk?: OsDisk;
	}

	/** This contains the data about the storage disks associated with the VM. */
	export interface StorageProfileFormProperties {
	}
	export function CreateStorageProfileFormGroup() {
		return new FormGroup<StorageProfileFormProperties>({
		});

	}


	/** This contains information about the data disk. */
	export interface DataDisk {

		/** This is the caching requirements. */
		caching?: string | null;

		/** This is information about how the VM was created. */
		createOption?: string | null;

		/** This is the size of the disk in GB. */
		diskSizeGB?: string | null;

		/** This is the source user image virtual hard disk. */
		image?: DiskImage;

		/** This is the logical unit number of the disk. */
		lun?: string | null;

		/** This is managed disk parameters. */
		managedDisk?: ManagedDisk;

		/** This is the disk name. */
		name?: string | null;

		/** This is the virtual hard disk. */
		vhd?: VirtualHardDisk;

		/** This specifies whether or not writeAccelerator is enabled on the disk. */
		writeAcceleratorEnabled?: string | null;
	}

	/** This contains information about the data disk. */
	export interface DataDiskFormProperties {

		/** This is the caching requirements. */
		caching: FormControl<string | null | undefined>,

		/** This is information about how the VM was created. */
		createOption: FormControl<string | null | undefined>,

		/** This is the size of the disk in GB. */
		diskSizeGB: FormControl<string | null | undefined>,

		/** This is the logical unit number of the disk. */
		lun: FormControl<string | null | undefined>,

		/** This is the disk name. */
		name: FormControl<string | null | undefined>,

		/** This specifies whether or not writeAccelerator is enabled on the disk. */
		writeAcceleratorEnabled: FormControl<string | null | undefined>,
	}
	export function CreateDataDiskFormGroup() {
		return new FormGroup<DataDiskFormProperties>({
			caching: new FormControl<string | null | undefined>(undefined),
			createOption: new FormControl<string | null | undefined>(undefined),
			diskSizeGB: new FormControl<string | null | undefined>(undefined),
			lun: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the source user image virtual hard disk. */
	export interface DiskImage {

		/** This is the uri of the virtual hard disk. */
		uri?: string | null;
	}

	/** This is the source user image virtual hard disk. */
	export interface DiskImageFormProperties {

		/** This is the uri of the virtual hard disk. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateDiskImageFormGroup() {
		return new FormGroup<DiskImageFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is managed disk parameters. */
	export interface ManagedDisk {

		/** This is the resource ID. */
		id?: string | null;

		/** This is the storage account type for the managed disk. */
		storageAccountType?: string | null;
	}

	/** This is managed disk parameters. */
	export interface ManagedDiskFormProperties {

		/** This is the resource ID. */
		id: FormControl<string | null | undefined>,

		/** This is the storage account type for the managed disk. */
		storageAccountType: FormControl<string | null | undefined>,
	}
	export function CreateManagedDiskFormGroup() {
		return new FormGroup<ManagedDiskFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			storageAccountType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the virtual hard disk. */
	export interface VirtualHardDisk {

		/** This is the uri of the virtual hard disk. */
		uri?: string | null;
	}

	/** This is the virtual hard disk. */
	export interface VirtualHardDiskFormProperties {

		/** This is the uri of the virtual hard disk. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateVirtualHardDiskFormGroup() {
		return new FormGroup<VirtualHardDiskFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains information about the OS image. */
	export interface ImageReference {

		/** This is the resource ID. */
		id?: string | null;

		/** This is the offer of the platform or marketplace image. */
		offer?: string | null;

		/** This is the image publisher. */
		publisher?: string | null;

		/** This is the image SKU. */
		sku?: string | null;

		/** This is the version of the platform or marketplace image. */
		version?: string | null;
	}

	/** This contains information about the OS image. */
	export interface ImageReferenceFormProperties {

		/** This is the resource ID. */
		id: FormControl<string | null | undefined>,

		/** This is the offer of the platform or marketplace image. */
		offer: FormControl<string | null | undefined>,

		/** This is the image publisher. */
		publisher: FormControl<string | null | undefined>,

		/** This is the image SKU. */
		sku: FormControl<string | null | undefined>,

		/** This is the version of the platform or marketplace image. */
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


	/** This contains information about the OS disk used by the VM. */
	export interface OsDisk {

		/** This is the caching requirements. */
		caching?: string | null;

		/** This is information about how the VM was created. */
		createOption?: string | null;

		/** This is the ephemeral disk settings. */
		diffDiskSettings?: DiffDiskSettings;

		/** This is the size of the disk in GB. */
		diskSizeGB?: string | null;

		/** This is the encryption settings for the disk. */
		encryptionSettings?: EncryptionSettings;

		/** This is the source user image virtual hard disk. */
		image?: DiskImage;

		/** This is managed disk parameters. */
		managedDisk?: ManagedDisk;

		/** This is the disk name. */
		name?: string | null;

		/** This is the type of OS included in the disk. */
		osType?: string | null;

		/** This is the virtual hard disk. */
		vhd?: VirtualHardDisk;

		/** This specifies whether or not writeAccelerator is enabled on the disk. */
		writeAcceleratorEnabled?: string | null;
	}

	/** This contains information about the OS disk used by the VM. */
	export interface OsDiskFormProperties {

		/** This is the caching requirements. */
		caching: FormControl<string | null | undefined>,

		/** This is information about how the VM was created. */
		createOption: FormControl<string | null | undefined>,

		/** This is the size of the disk in GB. */
		diskSizeGB: FormControl<string | null | undefined>,

		/** This is the disk name. */
		name: FormControl<string | null | undefined>,

		/** This is the type of OS included in the disk. */
		osType: FormControl<string | null | undefined>,

		/** This specifies whether or not writeAccelerator is enabled on the disk. */
		writeAcceleratorEnabled: FormControl<string | null | undefined>,
	}
	export function CreateOsDiskFormGroup() {
		return new FormGroup<OsDiskFormProperties>({
			caching: new FormControl<string | null | undefined>(undefined),
			createOption: new FormControl<string | null | undefined>(undefined),
			diskSizeGB: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<string | null | undefined>(undefined),
			writeAcceleratorEnabled: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the ephemeral disk settings. */
	export interface DiffDiskSettings {

		/** This specifies the ephemeral disk settings. */
		option?: string | null;
	}

	/** This is the ephemeral disk settings. */
	export interface DiffDiskSettingsFormProperties {

		/** This specifies the ephemeral disk settings. */
		option: FormControl<string | null | undefined>,
	}
	export function CreateDiffDiskSettingsFormGroup() {
		return new FormGroup<DiffDiskSettingsFormProperties>({
			option: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the encryption settings for the disk. */
	export interface EncryptionSettings {

		/** This specifies whether or not disk encryption is enabled on the VM. */
		enabled?: string | null;
	}

	/** This is the encryption settings for the disk. */
	export interface EncryptionSettingsFormProperties {

		/** This specifies whether or not disk encryption is enabled on the VM. */
		enabled: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionSettingsFormGroup() {
		return new FormGroup<EncryptionSettingsFormProperties>({
			enabled: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the response from an operation in the case an error occurs. */
	export interface ErrorResponse {

		/** Error message indicating why the operation failed. */
		error?: string | null;
	}

	/** This is the response from an operation in the case an error occurs. */
	export interface ErrorResponseFormProperties {

		/** Error message indicating why the operation failed. */
		error: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the response from an Identity operation in the case an error occurs. */
	export interface IdentityErrorResponse {

		/** Error code */
		error?: IdentityErrorResponseError | null;

		/** Error message indicating why the operation failed. */
		error_description?: string | null;
	}

	/** This is the response from an Identity operation in the case an error occurs. */
	export interface IdentityErrorResponseFormProperties {

		/** Error code */
		error: FormControl<IdentityErrorResponseError | null | undefined>,

		/** Error message indicating why the operation failed. */
		error_description: FormControl<string | null | undefined>,
	}
	export function CreateIdentityErrorResponseFormGroup() {
		return new FormGroup<IdentityErrorResponseFormProperties>({
			error: new FormControl<IdentityErrorResponseError | null | undefined>(undefined),
			error_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IdentityErrorResponseError { invalid_request = 'invalid_request', unauthorized_client = 'unauthorized_client', access_denied = 'access_denied', unsupported_response_type = 'unsupported_response_type', invalid_scope = 'invalid_scope', server_error = 'server_error', service_unavailable = 'service_unavailable', bad_request = 'bad_request', forbidden = 'forbidden', not_found = 'not_found', method_not_allowed = 'method_not_allowed', too_many_requests = 'too_many_requests' }


	/** This is the response from the Identity_GetInfo operation. */
	export interface IdentityInfoResponse {

		/** This is the AAD tenantId of the identity of the system assigned managed identity. */
		tenantId?: string | null;
	}

	/** This is the response from the Identity_GetInfo operation. */
	export interface IdentityInfoResponseFormProperties {

		/** This is the AAD tenantId of the identity of the system assigned managed identity. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateIdentityInfoResponseFormGroup() {
		return new FormGroup<IdentityInfoResponseFormProperties>({
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the response from the Identity_GetToken operation. */
	export interface IdentityTokenResponse {

		/** This is the requested access token. The app can use this token to authenticate to the sink resource. */
		access_token?: string | null;

		/** This is the client_id specified in the request, if any. */
		client_id?: string | null;

		/** This is how long the access token is valid (in seconds). */
		expires_in?: string | null;

		/** This is the time when the access token expires. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. This value is used to determine the lifetime of cached tokens. */
		expires_on?: string | null;

		/** This indicates the extended lifetime of the token (in seconds). */
		ext_expires_in?: string | null;

		/** This is the msi_res_id specified in the request, if any. */
		msi_res_id?: string | null;

		/** This is the time when the access token becomes effective. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. */
		not_before?: string | null;

		/** This is the object_id specified in the request, if any. */
		object_id?: string | null;

		/** This is the app ID URI of the sink resource. */
		resource?: string | null;

		/** This indicates the token type value. */
		token_type?: string | null;
	}

	/** This is the response from the Identity_GetToken operation. */
	export interface IdentityTokenResponseFormProperties {

		/** This is the requested access token. The app can use this token to authenticate to the sink resource. */
		access_token: FormControl<string | null | undefined>,

		/** This is the client_id specified in the request, if any. */
		client_id: FormControl<string | null | undefined>,

		/** This is how long the access token is valid (in seconds). */
		expires_in: FormControl<string | null | undefined>,

		/** This is the time when the access token expires. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. This value is used to determine the lifetime of cached tokens. */
		expires_on: FormControl<string | null | undefined>,

		/** This indicates the extended lifetime of the token (in seconds). */
		ext_expires_in: FormControl<string | null | undefined>,

		/** This is the msi_res_id specified in the request, if any. */
		msi_res_id: FormControl<string | null | undefined>,

		/** This is the time when the access token becomes effective. The date is represented as the number of seconds from 1970-01-01T0:0:0Z UTC until the expiration time. */
		not_before: FormControl<string | null | undefined>,

		/** This is the object_id specified in the request, if any. */
		object_id: FormControl<string | null | undefined>,

		/** This is the app ID URI of the sink resource. */
		resource: FormControl<string | null | undefined>,

		/** This indicates the token type value. */
		token_type: FormControl<string | null | undefined>,
	}
	export function CreateIdentityTokenResponseFormGroup() {
		return new FormGroup<IdentityTokenResponseFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			client_id: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<string | null | undefined>(undefined),
			expires_on: new FormControl<string | null | undefined>(undefined),
			ext_expires_in: new FormControl<string | null | undefined>(undefined),
			msi_res_id: new FormControl<string | null | undefined>(undefined),
			not_before: new FormControl<string | null | undefined>(undefined),
			object_id: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is the response from the Instance_GetMetadata operation. */
	export interface Instance {

		/** Compute Metadata */
		compute?: Compute;

		/** Network Metadata */
		network?: Network;
	}

	/** This is the response from the Instance_GetMetadata operation. */
	export interface InstanceFormProperties {
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
		});

	}


	/** Network Metadata */
	export interface Network {

		/** This contains data about the network interface. */
		interface?: Array<NetworkInterface>;
	}

	/** Network Metadata */
	export interface NetworkFormProperties {
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
		});

	}


	/** This contains data about the network interface. */
	export interface NetworkInterface {

		/** This contains the IPv4 address. */
		ipv4?: NetworkInterfaceIpv4;

		/** This contains the IPv6 address. */
		ipv6?: NetworkInterfaceIpv6;

		/** This is the MAC address of the interface. */
		macAddress?: string | null;
	}

	/** This contains data about the network interface. */
	export interface NetworkInterfaceFormProperties {

		/** This is the MAC address of the interface. */
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInterfaceFormGroup() {
		return new FormGroup<NetworkInterfaceFormProperties>({
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkInterfaceIpv4 {

		/** This is the IP address */
		ipAddress?: Array<Ipv4Properties>;

		/** This is the subnet */
		subnet?: Array<SubnetProperties>;
	}
	export interface NetworkInterfaceIpv4FormProperties {
	}
	export function CreateNetworkInterfaceIpv4FormGroup() {
		return new FormGroup<NetworkInterfaceIpv4FormProperties>({
		});

	}


	/** This contains the IPv4 properties. */
	export interface Ipv4Properties {

		/** This is the private IP address assigned to the interface. */
		privateIpAddress?: string | null;

		/** This is the public IP address assigned to the interface. */
		publicIpAddress?: string | null;
	}

	/** This contains the IPv4 properties. */
	export interface Ipv4PropertiesFormProperties {

		/** This is the private IP address assigned to the interface. */
		privateIpAddress: FormControl<string | null | undefined>,

		/** This is the public IP address assigned to the interface. */
		publicIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateIpv4PropertiesFormGroup() {
		return new FormGroup<Ipv4PropertiesFormProperties>({
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
			publicIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This contains the properties of the subnet. */
	export interface SubnetProperties {

		/** This is the address range of the subnet. */
		address?: string | null;

		/** This is the prefix of the subnet. */
		prefix?: string | null;
	}

	/** This contains the properties of the subnet. */
	export interface SubnetPropertiesFormProperties {

		/** This is the address range of the subnet. */
		address: FormControl<string | null | undefined>,

		/** This is the prefix of the subnet. */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateSubnetPropertiesFormGroup() {
		return new FormGroup<SubnetPropertiesFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkInterfaceIpv6 {

		/** This is the IP address */
		ipAddress?: Array<Ipv6Properties>;
	}
	export interface NetworkInterfaceIpv6FormProperties {
	}
	export function CreateNetworkInterfaceIpv6FormGroup() {
		return new FormGroup<NetworkInterfaceIpv6FormProperties>({
		});

	}


	/** This contains the IPv6 properties. */
	export interface Ipv6Properties {

		/** This is the private IPv6 address assigned to the interface. */
		privateIpAddress?: string | null;
	}

	/** This contains the IPv6 properties. */
	export interface Ipv6PropertiesFormProperties {

		/** This is the private IPv6 address assigned to the interface. */
		privateIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateIpv6PropertiesFormGroup() {
		return new FormGroup<Ipv6PropertiesFormProperties>({
			privateIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Attested Data for the Virtual Machine.
		 * Get attested/document
		 * @param {Attested_GetDocumentApi_version} api_version This is the API version to use.
		 * @param {string} nonce This is a string of up to 32 random alphanumeric characters.
		 * @return {AttestedData} OK
		 */
		Attested_GetDocument(api_version: Attested_GetDocumentApi_version, nonce: string | null | undefined): Observable<AttestedData> {
			return this.http.get<AttestedData>(this.baseUri + 'attested/document?api_version=' + api_version + '&nonce=' + (nonce == null ? '' : encodeURIComponent(nonce)), {});
		}

		/**
		 * Get information about AAD Metadata
		 * Get identity/info
		 * @param {Attested_GetDocumentApi_version} api_version This is the API version to use.
		 * @return {IdentityInfoResponse} Successful operation
		 */
		Identity_GetInfo(api_version: Attested_GetDocumentApi_version): Observable<IdentityInfoResponse> {
			return this.http.get<IdentityInfoResponse>(this.baseUri + 'identity/info?api_version=' + api_version, {});
		}

		/**
		 * Get a Token from Azure AD
		 * Get identity/oauth2/token
		 * @param {string} resource This is the urlencoded identifier URI of the sink resource for the requested Azure AD token. The resulting token contains the corresponding aud for this resource.
		 * @param {Attested_GetDocumentApi_version} api_version This is the API version to use.
		 * @param {string} client_id This identifies, by Azure AD client id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with object_id and msi_res_id.
		 * @param {string} object_id This identifies, by Azure AD object id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and msi_res_id.
		 * @param {string} msi_res_id This identifies, by urlencoded ARM resource id, a specific explicit identity to use when authenticating to Azure AD. Mutually exclusive with client_id and object_id.
		 * @param {string} authority This indicates the authority to request AAD tokens from. Defaults to the known authority of the identity to be used.
		 * @param {Attested_GetDocumentMetadata} bypass_cache If provided, the value must be 'true'. This indicates to the server that the token must be retrieved from Azure AD and cannot be retrieved from an internal cache.
		 * @return {IdentityTokenResponse} Successful operation
		 */
		Identity_GetToken(resource: string, api_version: Attested_GetDocumentApi_version, client_id: string | null | undefined, object_id: string | null | undefined, msi_res_id: string | null | undefined, authority: string | null | undefined, bypass_cache: Attested_GetDocumentMetadata | null | undefined): Observable<IdentityTokenResponse> {
			return this.http.get<IdentityTokenResponse>(this.baseUri + 'identity/oauth2/token?resource=' + (resource == null ? '' : encodeURIComponent(resource)) + '&api_version=' + api_version + '&client_id=' + (client_id == null ? '' : encodeURIComponent(client_id)) + '&object_id=' + (object_id == null ? '' : encodeURIComponent(object_id)) + '&msi_res_id=' + (msi_res_id == null ? '' : encodeURIComponent(msi_res_id)) + '&authority=' + (authority == null ? '' : encodeURIComponent(authority)) + '&bypass_cache=' + bypass_cache, {});
		}

		/**
		 * Get Instance Metadata for the Virtual Machine.
		 * Get instance
		 * @param {Attested_GetDocumentApi_version} api_version This is the API version to use.
		 * @return {Instance} OK
		 */
		Instances_GetMetadata(api_version: Attested_GetDocumentApi_version): Observable<Instance> {
			return this.http.get<Instance>(this.baseUri + 'instance?api_version=' + api_version, {});
		}
	}

	export enum Attested_GetDocumentApi_version { '2018-10-01' = '2018-10-01' }

	export enum Attested_GetDocumentMetadata { true = 'true' }

}

