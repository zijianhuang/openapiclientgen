import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents an 'access point' for the share. */
	export interface AllowedClient {

		/** Allow dev flag. Which controls whether to allow creation of devices. */
		allowDev?: boolean | null;

		/** Allow the setuid flag. */
		allowSuid?: boolean | null;

		/** The subnet of IP addresses permitted to access the share. */
		allowedClientsCidr?: string | null;

		/** Mount permissions. */
		mountPermissions?: AllowedClientMountPermissions | null;

		/** The network the access point sits on. */
		network?: string | null;

		/** Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like "10.0.0.0:/g123456789-nfs001" */
		nfsPath?: string | null;

		/** Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. */
		noRootSquash?: boolean | null;

		/** Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network's services_cidr. */
		shareIp?: string | null;
	}

	/** Represents an 'access point' for the share. */
	export interface AllowedClientFormProperties {

		/** Allow dev flag. Which controls whether to allow creation of devices. */
		allowDev: FormControl<boolean | null | undefined>,

		/** Allow the setuid flag. */
		allowSuid: FormControl<boolean | null | undefined>,

		/** The subnet of IP addresses permitted to access the share. */
		allowedClientsCidr: FormControl<string | null | undefined>,

		/** Mount permissions. */
		mountPermissions: FormControl<AllowedClientMountPermissions | null | undefined>,

		/** The network the access point sits on. */
		network: FormControl<string | null | undefined>,

		/** Output only. The path to access NFS, in format shareIP:/InstanceID InstanceID is the generated ID instead of customer provided name. example like "10.0.0.0:/g123456789-nfs001" */
		nfsPath: FormControl<string | null | undefined>,

		/** Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. */
		noRootSquash: FormControl<boolean | null | undefined>,

		/** Output only. The IP address of the share on this network. Assigned automatically during provisioning based on the network's services_cidr. */
		shareIp: FormControl<string | null | undefined>,
	}
	export function CreateAllowedClientFormGroup() {
		return new FormGroup<AllowedClientFormProperties>({
			allowDev: new FormControl<boolean | null | undefined>(undefined),
			allowSuid: new FormControl<boolean | null | undefined>(undefined),
			allowedClientsCidr: new FormControl<string | null | undefined>(undefined),
			mountPermissions: new FormControl<AllowedClientMountPermissions | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			nfsPath: new FormControl<string | null | undefined>(undefined),
			noRootSquash: new FormControl<boolean | null | undefined>(undefined),
			shareIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AllowedClientMountPermissions { MOUNT_PERMISSIONS_UNSPECIFIED = 'MOUNT_PERMISSIONS_UNSPECIFIED', READ = 'READ', READ_WRITE = 'READ_WRITE' }


	/** Message for detach specific LUN from an Instance. */
	export interface DetachLunRequest {

		/** Required. Name of the Lun to detach. */
		lun?: string | null;

		/** If true, performs lun unmapping without instance reboot. */
		skipReboot?: boolean | null;
	}

	/** Message for detach specific LUN from an Instance. */
	export interface DetachLunRequestFormProperties {

		/** Required. Name of the Lun to detach. */
		lun: FormControl<string | null | undefined>,

		/** If true, performs lun unmapping without instance reboot. */
		skipReboot: FormControl<boolean | null | undefined>,
	}
	export function CreateDetachLunRequestFormGroup() {
		return new FormGroup<DetachLunRequestFormProperties>({
			lun: new FormControl<string | null | undefined>(undefined),
			skipReboot: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message for disabling the interactive serial console on an instance. */
	export interface DisableInteractiveSerialConsoleRequest {
	}

	/** Message for disabling the interactive serial console on an instance. */
	export interface DisableInteractiveSerialConsoleRequestFormProperties {
	}
	export function CreateDisableInteractiveSerialConsoleRequestFormGroup() {
		return new FormGroup<DisableInteractiveSerialConsoleRequestFormProperties>({
		});

	}


	/** Message for response of DisableInteractiveSerialConsole. */
	export interface DisableInteractiveSerialConsoleResponse {
	}

	/** Message for response of DisableInteractiveSerialConsole. */
	export interface DisableInteractiveSerialConsoleResponseFormProperties {
	}
	export function CreateDisableInteractiveSerialConsoleResponseFormGroup() {
		return new FormGroup<DisableInteractiveSerialConsoleResponseFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Message for enabling the interactive serial console on an instance. */
	export interface EnableInteractiveSerialConsoleRequest {
	}

	/** Message for enabling the interactive serial console on an instance. */
	export interface EnableInteractiveSerialConsoleRequestFormProperties {
	}
	export function CreateEnableInteractiveSerialConsoleRequestFormGroup() {
		return new FormGroup<EnableInteractiveSerialConsoleRequestFormProperties>({
		});

	}


	/** Message for response of EnableInteractiveSerialConsole. */
	export interface EnableInteractiveSerialConsoleResponse {
	}

	/** Message for response of EnableInteractiveSerialConsole. */
	export interface EnableInteractiveSerialConsoleResponseFormProperties {
	}
	export function CreateEnableInteractiveSerialConsoleResponseFormGroup() {
		return new FormGroup<EnableInteractiveSerialConsoleResponseFormProperties>({
		});

	}


	/** Request for skip lun cooloff and delete it. */
	export interface EvictLunRequest {
	}

	/** Request for skip lun cooloff and delete it. */
	export interface EvictLunRequestFormProperties {
	}
	export function CreateEvictLunRequestFormGroup() {
		return new FormGroup<EvictLunRequestFormProperties>({
		});

	}


	/** Request for skip volume cooloff and delete it. */
	export interface EvictVolumeRequest {
	}

	/** Request for skip volume cooloff and delete it. */
	export interface EvictVolumeRequestFormProperties {
	}
	export function CreateEvictVolumeRequestFormGroup() {
		return new FormGroup<EvictVolumeRequestFormProperties>({
		});

	}


	/** Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface. */
	export interface GoogleCloudBaremetalsolutionV2LogicalInterface {

		/** The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated. */
		interfaceIndex?: number | null;

		/** List of logical network interfaces within a logical interface. */
		logicalNetworkInterfaces?: Array<LogicalNetworkInterface>;

		/** Interface name. This is of syntax or and forms part of the network template name. */
		name?: string | null;
	}

	/** Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface. */
	export interface GoogleCloudBaremetalsolutionV2LogicalInterfaceFormProperties {

		/** The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated. */
		interfaceIndex: FormControl<number | null | undefined>,

		/** Interface name. This is of syntax or and forms part of the network template name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudBaremetalsolutionV2LogicalInterfaceFormGroup() {
		return new FormGroup<GoogleCloudBaremetalsolutionV2LogicalInterfaceFormProperties>({
			interfaceIndex: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Each logical network interface is effectively a network and IP pair. */
	export interface LogicalNetworkInterface {

		/** Whether this interface is the default gateway for the instance. Only one interface can be the default gateway for the instance. */
		defaultGateway?: boolean | null;

		/** An identifier for the `Network`, generated by the backend. */
		id?: string | null;

		/** IP address in the network */
		ipAddress?: string | null;

		/** Name of the network */
		network?: string | null;

		/** Type of network. */
		networkType?: LogicalNetworkInterfaceNetworkType | null;
	}

	/** Each logical network interface is effectively a network and IP pair. */
	export interface LogicalNetworkInterfaceFormProperties {

		/** Whether this interface is the default gateway for the instance. Only one interface can be the default gateway for the instance. */
		defaultGateway: FormControl<boolean | null | undefined>,

		/** An identifier for the `Network`, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** IP address in the network */
		ipAddress: FormControl<string | null | undefined>,

		/** Name of the network */
		network: FormControl<string | null | undefined>,

		/** Type of network. */
		networkType: FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>,
	}
	export function CreateLogicalNetworkInterfaceFormGroup() {
		return new FormGroup<LogicalNetworkInterfaceFormProperties>({
			defaultGateway: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			networkType: new FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>(undefined),
		});

	}

	export enum LogicalNetworkInterfaceNetworkType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', CLIENT = 'CLIENT', PRIVATE = 'PRIVATE' }


	/** Logical interface. */
	export interface GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface {

		/** Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name. */
		name?: string | null;

		/** If true, interface must have network connected. */
		required?: boolean | null;

		/** Interface type. */
		type?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceType | null;
	}

	/** Logical interface. */
	export interface GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceFormProperties {

		/** Interface name. This is not a globally unique identifier. Name is unique only inside the ServerNetworkTemplate. This is of syntax or and forms part of the network template name. */
		name: FormControl<string | null | undefined>,

		/** If true, interface must have network connected. */
		required: FormControl<boolean | null | undefined>,

		/** Interface type. */
		type: FormControl<GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceType | null | undefined>,
	}
	export function CreateGoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceFormGroup() {
		return new FormGroup<GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceType { INTERFACE_TYPE_UNSPECIFIED = 'INTERFACE_TYPE_UNSPECIFIED', BOND = 'BOND', NIC = 'NIC' }


	/** A server. */
	export interface Instance {

		/** Output only. Create a time stamp. */
		createTime?: string | null;

		/** Output only. The firmware version for the instance. */
		firmwareVersion?: string | null;

		/** True if you enable hyperthreading for the server, otherwise false. The default value is false. */
		hyperthreadingEnabled?: boolean | null;

		/** Output only. An identifier for the `Instance`, generated by the backend. */
		id?: string | null;

		/** Output only. True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false. */
		interactiveSerialConsoleEnabled?: boolean | null;

		/** Optional. Name of the KMS crypto key version used to encrypt the initial passwords. The key has to have ASYMMETRIC_DECRYPT purpose. Format is `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}`. */
		kmsKeyVersion?: string | null;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. For the non-multivlan configurations (for eg, existing servers) that use existing default network template (bondaa-bondaa), both the Instance.networks field and the Instance.logical_interfaces fields will be filled to ensure backward compatibility. For the others, only Instance.logical_interfaces will be filled. */
		logicalInterfaces?: Array<GoogleCloudBaremetalsolutionV2LogicalInterface>;

		/** Output only. Text field about info for logging in. */
		loginInfo?: string | null;

		/** Immutable. List of LUNs associated with this server. */
		luns?: Array<Lun>;

		/** Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		machineType?: string | null;

		/** Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}` */
		name?: string | null;

		/** Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of "bond" or "nic". */
		networkTemplate?: string | null;

		/** Output only. List of networks associated with this server. */
		networks?: Array<Network>;

		/** The OS image currently installed on the server. */
		osImage?: string | null;

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Instance can only be connected to the assets (networks, volumes) allocated in the same pod. */
		pod?: string | null;

		/** Optional. List of SSH Keys used during instance provisioning. */
		sshKeys?: Array<string>;

		/** Output only. The state of the server. */
		state?: InstanceState | null;

		/** Output only. Update a time stamp. */
		updateTime?: string | null;

		/** Input only. List of Volumes to attach to this Instance on creation. This field won't be populated in Get/List responses. */
		volumes?: Array<Volume>;

		/** The workload profile for the instance. */
		workloadProfile?: InstanceWorkloadProfile | null;
	}

	/** A server. */
	export interface InstanceFormProperties {

		/** Output only. Create a time stamp. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The firmware version for the instance. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** True if you enable hyperthreading for the server, otherwise false. The default value is false. */
		hyperthreadingEnabled: FormControl<boolean | null | undefined>,

		/** Output only. An identifier for the `Instance`, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** Output only. True if the interactive serial console feature is enabled for the instance, false otherwise. The default value is false. */
		interactiveSerialConsoleEnabled: FormControl<boolean | null | undefined>,

		/** Optional. Name of the KMS crypto key version used to encrypt the initial passwords. The key has to have ASYMMETRIC_DECRYPT purpose. Format is `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}`. */
		kmsKeyVersion: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Text field about info for logging in. */
		loginInfo: FormControl<string | null | undefined>,

		/** Immutable. The server type. [Available server types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		machineType: FormControl<string | null | undefined>,

		/** Immutable. The resource name of this `Instance`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/instances/{instance}` */
		name: FormControl<string | null | undefined>,

		/** Instance network template name. For eg, bondaa-bondaa, bondab-nic, etc. Generally, the template name follows the syntax of "bond" or "nic". */
		networkTemplate: FormControl<string | null | undefined>,

		/** The OS image currently installed on the server. */
		osImage: FormControl<string | null | undefined>,

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Instance can only be connected to the assets (networks, volumes) allocated in the same pod. */
		pod: FormControl<string | null | undefined>,

		/** Output only. The state of the server. */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. Update a time stamp. */
		updateTime: FormControl<string | null | undefined>,

		/** The workload profile for the instance. */
		workloadProfile: FormControl<InstanceWorkloadProfile | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			hyperthreadingEnabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			interactiveSerialConsoleEnabled: new FormControl<boolean | null | undefined>(undefined),
			kmsKeyVersion: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			loginInfo: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkTemplate: new FormControl<string | null | undefined>(undefined),
			osImage: new FormControl<string | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			workloadProfile: new FormControl<InstanceWorkloadProfile | null | undefined>(undefined),
		});

	}


	/** A storage volume logical unit number (LUN). */
	export interface Lun {

		/** Display if this LUN is a boot LUN. */
		bootLun?: boolean | null;

		/** Output only. Time after which LUN will be fully deleted. It is filled only for LUNs in COOL_OFF state. */
		expireTime?: string | null;

		/** An identifier for the LUN, generated by the backend. */
		id?: string | null;

		/** Output only. Instances this Lun is attached to. */
		instances?: Array<string>;

		/** The LUN multiprotocol type ensures the characteristics of the LUN are optimized for each operating system. */
		multiprotocolType?: LunMultiprotocolType | null;

		/** Output only. The name of the LUN. */
		name?: string | null;

		/** Display if this LUN can be shared between multiple physical servers. */
		shareable?: boolean | null;

		/** The size of this LUN, in GiB. */
		sizeGb?: string | null;

		/** The state of this storage volume. */
		state?: LunState | null;

		/** The storage type for this LUN. */
		storageType?: LunStorageType | null;

		/** Display the storage volume for this LUN. */
		storageVolume?: string | null;

		/** The WWID for this LUN. */
		wwid?: string | null;
	}

	/** A storage volume logical unit number (LUN). */
	export interface LunFormProperties {

		/** Display if this LUN is a boot LUN. */
		bootLun: FormControl<boolean | null | undefined>,

		/** Output only. Time after which LUN will be fully deleted. It is filled only for LUNs in COOL_OFF state. */
		expireTime: FormControl<string | null | undefined>,

		/** An identifier for the LUN, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** The LUN multiprotocol type ensures the characteristics of the LUN are optimized for each operating system. */
		multiprotocolType: FormControl<LunMultiprotocolType | null | undefined>,

		/** Output only. The name of the LUN. */
		name: FormControl<string | null | undefined>,

		/** Display if this LUN can be shared between multiple physical servers. */
		shareable: FormControl<boolean | null | undefined>,

		/** The size of this LUN, in GiB. */
		sizeGb: FormControl<string | null | undefined>,

		/** The state of this storage volume. */
		state: FormControl<LunState | null | undefined>,

		/** The storage type for this LUN. */
		storageType: FormControl<LunStorageType | null | undefined>,

		/** Display the storage volume for this LUN. */
		storageVolume: FormControl<string | null | undefined>,

		/** The WWID for this LUN. */
		wwid: FormControl<string | null | undefined>,
	}
	export function CreateLunFormGroup() {
		return new FormGroup<LunFormProperties>({
			bootLun: new FormControl<boolean | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			multiprotocolType: new FormControl<LunMultiprotocolType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shareable: new FormControl<boolean | null | undefined>(undefined),
			sizeGb: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<LunState | null | undefined>(undefined),
			storageType: new FormControl<LunStorageType | null | undefined>(undefined),
			storageVolume: new FormControl<string | null | undefined>(undefined),
			wwid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LunMultiprotocolType { MULTIPROTOCOL_TYPE_UNSPECIFIED = 'MULTIPROTOCOL_TYPE_UNSPECIFIED', LINUX = 'LINUX' }

	export enum LunState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', UPDATING = 'UPDATING', READY = 'READY', DELETING = 'DELETING', COOL_OFF = 'COOL_OFF' }

	export enum LunStorageType { STORAGE_TYPE_UNSPECIFIED = 'STORAGE_TYPE_UNSPECIFIED', SSD = 'SSD', HDD = 'HDD' }


	/** A Network. */
	export interface Network {

		/** The cidr of the Network. */
		cidr?: string | null;

		/** Output only. Gateway ip address. */
		gatewayIp?: string | null;

		/** An identifier for the `Network`, generated by the backend. */
		id?: string | null;

		/** IP address configured. */
		ipAddress?: string | null;

		/** Whether network uses standard frames or jumbo ones. */
		jumboFramesEnabled?: boolean | null;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** List of physical interfaces. */
		macAddress?: Array<string>;

		/** Input only. List of mount points to attach the network to. */
		mountPoints?: Array<NetworkMountPoint>;

		/** Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}` */
		name?: string | null;

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Network can only be connected to the assets (instances, nfsshares) allocated in the same pod. */
		pod?: string | null;

		/** List of IP address reservations in this network. When updating this field, an error will be generated if a reservation conflicts with an IP address already allocated to a physical server. */
		reservations?: Array<NetworkAddressReservation>;

		/** IP range for reserved for services (e.g. NFS). */
		servicesCidr?: string | null;

		/** The Network state. */
		state?: NetworkState | null;

		/** The type of this network. */
		type?: LogicalNetworkInterfaceNetworkType | null;

		/** The vlan id of the Network. */
		vlanId?: string | null;

		/** A network VRF. */
		vrf?: VRF;

		/** Optional. The name of a pre-existing Vrf that the network should be attached to. Format is `vrfs/{vrf}`. */
		vrfAttachment?: string | null;
	}

	/** A Network. */
	export interface NetworkFormProperties {

		/** The cidr of the Network. */
		cidr: FormControl<string | null | undefined>,

		/** Output only. Gateway ip address. */
		gatewayIp: FormControl<string | null | undefined>,

		/** An identifier for the `Network`, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** IP address configured. */
		ipAddress: FormControl<string | null | undefined>,

		/** Whether network uses standard frames or jumbo ones. */
		jumboFramesEnabled: FormControl<boolean | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The resource name of this `Network`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/networks/{network}` */
		name: FormControl<string | null | undefined>,

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Network can only be connected to the assets (instances, nfsshares) allocated in the same pod. */
		pod: FormControl<string | null | undefined>,

		/** IP range for reserved for services (e.g. NFS). */
		servicesCidr: FormControl<string | null | undefined>,

		/** The Network state. */
		state: FormControl<NetworkState | null | undefined>,

		/** The type of this network. */
		type: FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>,

		/** The vlan id of the Network. */
		vlanId: FormControl<string | null | undefined>,

		/** Optional. The name of a pre-existing Vrf that the network should be attached to. Format is `vrfs/{vrf}`. */
		vrfAttachment: FormControl<string | null | undefined>,
	}
	export function CreateNetworkFormGroup() {
		return new FormGroup<NetworkFormProperties>({
			cidr: new FormControl<string | null | undefined>(undefined),
			gatewayIp: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			jumboFramesEnabled: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			servicesCidr: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<NetworkState | null | undefined>(undefined),
			type: new FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>(undefined),
			vlanId: new FormControl<string | null | undefined>(undefined),
			vrfAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mount point for a network. */
	export interface NetworkMountPoint {

		/** Network should be a default gateway. */
		defaultGateway?: boolean | null;

		/** Instance to attach network to. */
		instance?: string | null;

		/** Ip address of the server. */
		ipAddress?: string | null;

		/** Logical interface to detach from. */
		logicalInterface?: string | null;
	}

	/** Mount point for a network. */
	export interface NetworkMountPointFormProperties {

		/** Network should be a default gateway. */
		defaultGateway: FormControl<boolean | null | undefined>,

		/** Instance to attach network to. */
		instance: FormControl<string | null | undefined>,

		/** Ip address of the server. */
		ipAddress: FormControl<string | null | undefined>,

		/** Logical interface to detach from. */
		logicalInterface: FormControl<string | null | undefined>,
	}
	export function CreateNetworkMountPointFormGroup() {
		return new FormGroup<NetworkMountPointFormProperties>({
			defaultGateway: new FormControl<boolean | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			logicalInterface: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reservation of one or more addresses in a network. */
	export interface NetworkAddressReservation {

		/** The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2. */
		endAddress?: string | null;

		/** A note about this reservation, intended for human consumption. */
		note?: string | null;

		/** The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2. */
		startAddress?: string | null;
	}

	/** A reservation of one or more addresses in a network. */
	export interface NetworkAddressReservationFormProperties {

		/** The last address of this reservation block, inclusive. I.e., for cases when reservations are only single addresses, end_address and start_address will be the same. Must be specified as a single IPv4 address, e.g. 10.1.2.2. */
		endAddress: FormControl<string | null | undefined>,

		/** A note about this reservation, intended for human consumption. */
		note: FormControl<string | null | undefined>,

		/** The first address of this reservation block. Must be specified as a single IPv4 address, e.g. 10.1.2.2. */
		startAddress: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAddressReservationFormGroup() {
		return new FormGroup<NetworkAddressReservationFormProperties>({
			endAddress: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			startAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PROVISIONING = 'PROVISIONING', PROVISIONED = 'PROVISIONED', DEPROVISIONING = 'DEPROVISIONING', UPDATING = 'UPDATING' }


	/** A network VRF. */
	export interface VRF {

		/** The name of the VRF. */
		name?: string | null;

		/** QOS policy parameters. */
		qosPolicy?: QosPolicy;

		/** The possible state of VRF. */
		state?: VRFState | null;

		/** The list of VLAN attachments for the VRF. */
		vlanAttachments?: Array<VlanAttachment>;
	}

	/** A network VRF. */
	export interface VRFFormProperties {

		/** The name of the VRF. */
		name: FormControl<string | null | undefined>,

		/** The possible state of VRF. */
		state: FormControl<VRFState | null | undefined>,
	}
	export function CreateVRFFormGroup() {
		return new FormGroup<VRFFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<VRFState | null | undefined>(undefined),
		});

	}


	/** QOS policy parameters. */
	export interface QosPolicy {

		/** The bandwidth permitted by the QOS policy, in gbps. */
		bandwidthGbps?: number | null;
	}

	/** QOS policy parameters. */
	export interface QosPolicyFormProperties {

		/** The bandwidth permitted by the QOS policy, in gbps. */
		bandwidthGbps: FormControl<number | null | undefined>,
	}
	export function CreateQosPolicyFormGroup() {
		return new FormGroup<QosPolicyFormProperties>({
			bandwidthGbps: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VRFState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PROVISIONING = 'PROVISIONING', PROVISIONED = 'PROVISIONED' }


	/** VLAN attachment details. */
	export interface VlanAttachment {

		/** Immutable. The identifier of the attachment within vrf. */
		id?: string | null;

		/** Optional. The name of the vlan attachment within vrf. This is of the form projects/{project_number}/regions/{region}/interconnectAttachments/{interconnect_attachment} */
		interconnectAttachment?: string | null;

		/** Input only. Pairing key. */
		pairingKey?: string | null;

		/** The peer IP of the attachment. */
		peerIp?: string | null;

		/** The peer vlan ID of the attachment. */
		peerVlanId?: string | null;

		/** QOS policy parameters. */
		qosPolicy?: QosPolicy;

		/** The router IP of the attachment. */
		routerIp?: string | null;
	}

	/** VLAN attachment details. */
	export interface VlanAttachmentFormProperties {

		/** Immutable. The identifier of the attachment within vrf. */
		id: FormControl<string | null | undefined>,

		/** Optional. The name of the vlan attachment within vrf. This is of the form projects/{project_number}/regions/{region}/interconnectAttachments/{interconnect_attachment} */
		interconnectAttachment: FormControl<string | null | undefined>,

		/** Input only. Pairing key. */
		pairingKey: FormControl<string | null | undefined>,

		/** The peer IP of the attachment. */
		peerIp: FormControl<string | null | undefined>,

		/** The peer vlan ID of the attachment. */
		peerVlanId: FormControl<string | null | undefined>,

		/** The router IP of the attachment. */
		routerIp: FormControl<string | null | undefined>,
	}
	export function CreateVlanAttachmentFormGroup() {
		return new FormGroup<VlanAttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			interconnectAttachment: new FormControl<string | null | undefined>(undefined),
			pairingKey: new FormControl<string | null | undefined>(undefined),
			peerIp: new FormControl<string | null | undefined>(undefined),
			peerVlanId: new FormControl<string | null | undefined>(undefined),
			routerIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PROVISIONING = 'PROVISIONING', RUNNING = 'RUNNING', DELETED = 'DELETED', UPDATING = 'UPDATING', STARTING = 'STARTING', STOPPING = 'STOPPING', SHUTDOWN = 'SHUTDOWN' }


	/** A storage volume. */
	export interface Volume {

		/** Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well. */
		attached?: boolean | null;

		/** The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0. */
		autoGrownSizeGib?: string | null;

		/** Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN. */
		bootVolume?: boolean | null;

		/** The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink. */
		currentSizeGib?: string | null;

		/** Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value. */
		emergencySizeGib?: string | null;

		/** Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state. */
		expireTime?: string | null;

		/** An identifier for the `Volume`, generated by the backend. */
		id?: string | null;

		/** Output only. Instances this Volume is attached to. This field is set only in Get requests. */
		instances?: Array<string>;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Maximum size volume can be expanded to in case of evergency, in GiB. */
		maxSizeGib?: string | null;

		/** Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}` */
		name?: string | null;

		/** Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention. */
		notes?: string | null;

		/** Originally requested size, in GiB. */
		originallyRequestedSizeGib?: string | null;

		/** Immutable. Performance tier of the Volume. Default is SHARED. */
		performanceTier?: VolumePerformanceTier | null;

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Volume can only be connected to the instances allocated in the same pod. */
		pod?: string | null;

		/** Output only. Storage protocol for the Volume. */
		protocol?: VolumeProtocol | null;

		/** The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots. */
		remainingSpaceGib?: string | null;

		/** The requested size of this storage volume, in GiB. */
		requestedSizeGib?: string | null;

		/** The behavior to use when snapshot reserved space is full. */
		snapshotAutoDeleteBehavior?: VolumeSnapshotAutoDeleteBehavior | null;

		/** Whether snapshots are enabled. */
		snapshotEnabled?: boolean | null;

		/** Details about snapshot space reservation and usage on the storage volume. */
		snapshotReservationDetail?: SnapshotReservationDetail;

		/** The state of this storage volume. */
		state?: VolumeState | null;

		/** The storage type for this volume. */
		storageType?: LunStorageType | null;

		/** The workload profile for the volume. */
		workloadProfile?: VolumeWorkloadProfile | null;
	}

	/** A storage volume. */
	export interface VolumeFormProperties {

		/** Output only. Is the Volume attached at at least one instance. This field is a lightweight counterpart of `instances` field. It is filled in List responses as well. */
		attached: FormControl<boolean | null | undefined>,

		/** The size, in GiB, that this storage volume has expanded as a result of an auto grow policy. In the absence of auto-grow, the value is 0. */
		autoGrownSizeGib: FormControl<string | null | undefined>,

		/** Output only. Whether this volume is a boot volume. A boot volume is one which contains a boot LUN. */
		bootVolume: FormControl<boolean | null | undefined>,

		/** The current size of this storage volume, in GiB, including space reserved for snapshots. This size might be different than the requested size if the storage volume has been configured with auto grow or auto shrink. */
		currentSizeGib: FormControl<string | null | undefined>,

		/** Additional emergency size that was requested for this Volume, in GiB. current_size_gib includes this value. */
		emergencySizeGib: FormControl<string | null | undefined>,

		/** Output only. Time after which volume will be fully deleted. It is filled only for volumes in COOLOFF state. */
		expireTime: FormControl<string | null | undefined>,

		/** An identifier for the `Volume`, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Maximum size volume can be expanded to in case of evergency, in GiB. */
		maxSizeGib: FormControl<string | null | undefined>,

		/** Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}` */
		name: FormControl<string | null | undefined>,

		/** Input only. User-specified notes for new Volume. Used to provision Volumes that require manual intervention. */
		notes: FormControl<string | null | undefined>,

		/** Originally requested size, in GiB. */
		originallyRequestedSizeGib: FormControl<string | null | undefined>,

		/** Immutable. Performance tier of the Volume. Default is SHARED. */
		performanceTier: FormControl<VolumePerformanceTier | null | undefined>,

		/** Immutable. Pod name. Pod is an independent part of infrastructure. Volume can only be connected to the instances allocated in the same pod. */
		pod: FormControl<string | null | undefined>,

		/** Output only. Storage protocol for the Volume. */
		protocol: FormControl<VolumeProtocol | null | undefined>,

		/** The space remaining in the storage volume for new LUNs, in GiB, excluding space reserved for snapshots. */
		remainingSpaceGib: FormControl<string | null | undefined>,

		/** The requested size of this storage volume, in GiB. */
		requestedSizeGib: FormControl<string | null | undefined>,

		/** The behavior to use when snapshot reserved space is full. */
		snapshotAutoDeleteBehavior: FormControl<VolumeSnapshotAutoDeleteBehavior | null | undefined>,

		/** Whether snapshots are enabled. */
		snapshotEnabled: FormControl<boolean | null | undefined>,

		/** The state of this storage volume. */
		state: FormControl<VolumeState | null | undefined>,

		/** The storage type for this volume. */
		storageType: FormControl<LunStorageType | null | undefined>,

		/** The workload profile for the volume. */
		workloadProfile: FormControl<VolumeWorkloadProfile | null | undefined>,
	}
	export function CreateVolumeFormGroup() {
		return new FormGroup<VolumeFormProperties>({
			attached: new FormControl<boolean | null | undefined>(undefined),
			autoGrownSizeGib: new FormControl<string | null | undefined>(undefined),
			bootVolume: new FormControl<boolean | null | undefined>(undefined),
			currentSizeGib: new FormControl<string | null | undefined>(undefined),
			emergencySizeGib: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maxSizeGib: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			originallyRequestedSizeGib: new FormControl<string | null | undefined>(undefined),
			performanceTier: new FormControl<VolumePerformanceTier | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<VolumeProtocol | null | undefined>(undefined),
			remainingSpaceGib: new FormControl<string | null | undefined>(undefined),
			requestedSizeGib: new FormControl<string | null | undefined>(undefined),
			snapshotAutoDeleteBehavior: new FormControl<VolumeSnapshotAutoDeleteBehavior | null | undefined>(undefined),
			snapshotEnabled: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<VolumeState | null | undefined>(undefined),
			storageType: new FormControl<LunStorageType | null | undefined>(undefined),
			workloadProfile: new FormControl<VolumeWorkloadProfile | null | undefined>(undefined),
		});

	}

	export enum VolumePerformanceTier { VOLUME_PERFORMANCE_TIER_UNSPECIFIED = 'VOLUME_PERFORMANCE_TIER_UNSPECIFIED', VOLUME_PERFORMANCE_TIER_SHARED = 'VOLUME_PERFORMANCE_TIER_SHARED', VOLUME_PERFORMANCE_TIER_ASSIGNED = 'VOLUME_PERFORMANCE_TIER_ASSIGNED', VOLUME_PERFORMANCE_TIER_HT = 'VOLUME_PERFORMANCE_TIER_HT' }

	export enum VolumeProtocol { PROTOCOL_UNSPECIFIED = 'PROTOCOL_UNSPECIFIED', FIBRE_CHANNEL = 'FIBRE_CHANNEL', NFS = 'NFS' }

	export enum VolumeSnapshotAutoDeleteBehavior { SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED = 'SNAPSHOT_AUTO_DELETE_BEHAVIOR_UNSPECIFIED', DISABLED = 'DISABLED', OLDEST_FIRST = 'OLDEST_FIRST', NEWEST_FIRST = 'NEWEST_FIRST' }


	/** Details about snapshot space reservation and usage on the storage volume. */
	export interface SnapshotReservationDetail {

		/** The space on this storage volume reserved for snapshots, shown in GiB. */
		reservedSpaceGib?: string | null;

		/** Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true. */
		reservedSpacePercent?: number | null;

		/** The amount, in GiB, of available space in this storage volume's reserved snapshot space. */
		reservedSpaceRemainingGib?: string | null;

		/** The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume. */
		reservedSpaceUsedPercent?: number | null;
	}

	/** Details about snapshot space reservation and usage on the storage volume. */
	export interface SnapshotReservationDetailFormProperties {

		/** The space on this storage volume reserved for snapshots, shown in GiB. */
		reservedSpaceGib: FormControl<string | null | undefined>,

		/** Percent of the total Volume size reserved for snapshot copies. Enabling snapshots requires reserving 20% or more of the storage volume space for snapshots. Maximum reserved space for snapshots is 40%. Setting this field will effectively set snapshot_enabled to true. */
		reservedSpacePercent: FormControl<number | null | undefined>,

		/** The amount, in GiB, of available space in this storage volume's reserved snapshot space. */
		reservedSpaceRemainingGib: FormControl<string | null | undefined>,

		/** The percent of snapshot space on this storage volume actually being used by the snapshot copies. This value might be higher than 100% if the snapshot copies have overflowed into the data portion of the storage volume. */
		reservedSpaceUsedPercent: FormControl<number | null | undefined>,
	}
	export function CreateSnapshotReservationDetailFormGroup() {
		return new FormGroup<SnapshotReservationDetailFormProperties>({
			reservedSpaceGib: new FormControl<string | null | undefined>(undefined),
			reservedSpacePercent: new FormControl<number | null | undefined>(undefined),
			reservedSpaceRemainingGib: new FormControl<string | null | undefined>(undefined),
			reservedSpaceUsedPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum VolumeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', DELETING = 'DELETING', UPDATING = 'UPDATING', COOL_OFF = 'COOL_OFF' }

	export enum VolumeWorkloadProfile { WORKLOAD_PROFILE_UNSPECIFIED = 'WORKLOAD_PROFILE_UNSPECIFIED', GENERIC = 'GENERIC', HANA = 'HANA' }

	export enum InstanceWorkloadProfile { WORKLOAD_PROFILE_UNSPECIFIED = 'WORKLOAD_PROFILE_UNSPECIFIED', WORKLOAD_PROFILE_GENERIC = 'WORKLOAD_PROFILE_GENERIC', WORKLOAD_PROFILE_HANA = 'WORKLOAD_PROFILE_HANA' }


	/** Configuration parameters for a new instance. */
	export interface InstanceConfig {

		/** If true networks can be from different projects of the same vendor account. */
		accountNetworksEnabled?: boolean | null;

		/** A network. */
		clientNetwork?: NetworkAddress;

		/** Whether the instance should be provisioned with Hyperthreading enabled. */
		hyperthreading?: boolean | null;

		/** A transient unique identifier to idenfity an instance within an ProvisioningConfig request. */
		id?: string | null;

		/** Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		instanceType?: string | null;

		/** Name of the KMS crypto key version used to encrypt the initial passwords. The key has to have ASYMMETRIC_DECRYPT purpose. */
		kmsKeyVersion?: string | null;

		/** List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true. */
		logicalInterfaces?: Array<GoogleCloudBaremetalsolutionV2LogicalInterface>;

		/** The name of the instance config. */
		name?: string | null;

		/** The type of network configuration on the instance. */
		networkConfig?: InstanceConfigNetworkConfig | null;

		/** Server network template name. Filled if InstanceConfig.multivlan_config is true. */
		networkTemplate?: string | null;

		/** OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		osImage?: string | null;

		/** A network. */
		privateNetwork?: NetworkAddress;

		/** Optional. List of names of ssh keys used to provision the instance. */
		sshKeyNames?: Array<string>;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote?: string | null;
	}

	/** Configuration parameters for a new instance. */
	export interface InstanceConfigFormProperties {

		/** If true networks can be from different projects of the same vendor account. */
		accountNetworksEnabled: FormControl<boolean | null | undefined>,

		/** Whether the instance should be provisioned with Hyperthreading enabled. */
		hyperthreading: FormControl<boolean | null | undefined>,

		/** A transient unique identifier to idenfity an instance within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		instanceType: FormControl<string | null | undefined>,

		/** Name of the KMS crypto key version used to encrypt the initial passwords. The key has to have ASYMMETRIC_DECRYPT purpose. */
		kmsKeyVersion: FormControl<string | null | undefined>,

		/** The name of the instance config. */
		name: FormControl<string | null | undefined>,

		/** The type of network configuration on the instance. */
		networkConfig: FormControl<InstanceConfigNetworkConfig | null | undefined>,

		/** Server network template name. Filled if InstanceConfig.multivlan_config is true. */
		networkTemplate: FormControl<string | null | undefined>,

		/** OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		osImage: FormControl<string | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			accountNetworksEnabled: new FormControl<boolean | null | undefined>(undefined),
			hyperthreading: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersion: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkConfig: new FormControl<InstanceConfigNetworkConfig | null | undefined>(undefined),
			networkTemplate: new FormControl<string | null | undefined>(undefined),
			osImage: new FormControl<string | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network. */
	export interface NetworkAddress {

		/** IPv4 address to be assigned to the server. */
		address?: string | null;

		/** Name of the existing network to use. */
		existingNetworkId?: string | null;

		/** Id of the network to use, within the same ProvisioningConfig request. */
		networkId?: string | null;
	}

	/** A network. */
	export interface NetworkAddressFormProperties {

		/** IPv4 address to be assigned to the server. */
		address: FormControl<string | null | undefined>,

		/** Name of the existing network to use. */
		existingNetworkId: FormControl<string | null | undefined>,

		/** Id of the network to use, within the same ProvisioningConfig request. */
		networkId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAddressFormGroup() {
		return new FormGroup<NetworkAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			existingNetworkId: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceConfigNetworkConfig { NETWORKCONFIG_UNSPECIFIED = 'NETWORKCONFIG_UNSPECIFIED', SINGLE_VLAN = 'SINGLE_VLAN', MULTI_VLAN = 'MULTI_VLAN' }


	/** A resource budget. */
	export interface InstanceQuota {

		/** Number of machines than can be created for the given location and instance_type. */
		availableMachineCount?: number | null;

		/** The gcp service of the provisioning quota. */
		gcpService?: string | null;

		/** Instance type. Deprecated: use gcp_service. */
		instanceType?: string | null;

		/** Location where the quota applies. */
		location?: string | null;

		/** Output only. The name of the instance quota. */
		name?: string | null;
	}

	/** A resource budget. */
	export interface InstanceQuotaFormProperties {

		/** Number of machines than can be created for the given location and instance_type. */
		availableMachineCount: FormControl<number | null | undefined>,

		/** The gcp service of the provisioning quota. */
		gcpService: FormControl<string | null | undefined>,

		/** Instance type. Deprecated: use gcp_service. */
		instanceType: FormControl<string | null | undefined>,

		/** Location where the quota applies. */
		location: FormControl<string | null | undefined>,

		/** Output only. The name of the instance quota. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInstanceQuotaFormGroup() {
		return new FormGroup<InstanceQuotaFormProperties>({
			availableMachineCount: new FormControl<number | null | undefined>(undefined),
			gcpService: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A GCP vlan attachment. */
	export interface IntakeVlanAttachment {

		/** Identifier of the VLAN attachment. */
		id?: string | null;

		/** Attachment pairing key. */
		pairingKey?: string | null;
	}

	/** A GCP vlan attachment. */
	export interface IntakeVlanAttachmentFormProperties {

		/** Identifier of the VLAN attachment. */
		id: FormControl<string | null | undefined>,

		/** Attachment pairing key. */
		pairingKey: FormControl<string | null | undefined>,
	}
	export function CreateIntakeVlanAttachmentFormGroup() {
		return new FormGroup<IntakeVlanAttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			pairingKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the list of servers. */
	export interface ListInstancesResponse {

		/** The list of servers. */
		instances?: Array<Instance>;

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message for the list of servers. */
	export interface ListInstancesResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInstancesResponseFormGroup() {
		return new FormGroup<ListInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing the list of storage volume luns. */
	export interface ListLunsResponse {

		/** The list of luns. */
		luns?: Array<Lun>;

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message containing the list of storage volume luns. */
	export interface ListLunsResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLunsResponseFormGroup() {
		return new FormGroup<ListLunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response with Networks with IPs */
	export interface ListNetworkUsageResponse {

		/** Networks with IPs. */
		networks?: Array<NetworkUsage>;
	}

	/** Response with Networks with IPs */
	export interface ListNetworkUsageResponseFormProperties {
	}
	export function CreateListNetworkUsageResponseFormGroup() {
		return new FormGroup<ListNetworkUsageResponseFormProperties>({
		});

	}


	/** Network with all used IP addresses. */
	export interface NetworkUsage {

		/** A Network. */
		network?: Network;

		/** All used IP addresses in this network. */
		usedIps?: Array<string>;
	}

	/** Network with all used IP addresses. */
	export interface NetworkUsageFormProperties {
	}
	export function CreateNetworkUsageFormGroup() {
		return new FormGroup<NetworkUsageFormProperties>({
		});

	}


	/** Response message containing the list of networks. */
	export interface ListNetworksResponse {

		/** The list of networks. */
		networks?: Array<Network>;

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message containing the list of networks. */
	export interface ListNetworksResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNetworksResponseFormGroup() {
		return new FormGroup<ListNetworksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing the list of NFS shares. */
	export interface ListNfsSharesResponse {

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** The list of NFS shares. */
		nfsShares?: Array<NfsShare>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response message containing the list of NFS shares. */
	export interface ListNfsSharesResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNfsSharesResponseFormGroup() {
		return new FormGroup<ListNfsSharesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An NFS share. */
	export interface NfsShare {

		/** List of allowed access points. */
		allowedClients?: Array<AllowedClient>;

		/** Output only. An identifier for the NFS share, generated by the backend. This is the same value as nfs_share_id and will replace it in the future. */
		id?: string | null;

		/** Labels as key value pairs. */
		labels?: {[id: string]: string };

		/** Immutable. The name of the NFS share. */
		name?: string | null;

		/** Output only. An identifier for the NFS share, generated by the backend. This field will be deprecated in the future, use `id` instead. */
		nfsShareId?: string | null;

		/** Immutable. Pod name. Pod is an independent part of infrastructure. NFSShare can only be connected to the assets (networks, instances) allocated in the same pod. */
		pod?: string | null;

		/** The requested size, in GiB. */
		requestedSizeGib?: string | null;

		/** Output only. The state of the NFS share. */
		state?: NfsShareState | null;

		/** Immutable. The storage type of the underlying volume. */
		storageType?: LunStorageType | null;

		/** Output only. The underlying volume of the share. Created automatically during provisioning. */
		volume?: string | null;
	}

	/** An NFS share. */
	export interface NfsShareFormProperties {

		/** Output only. An identifier for the NFS share, generated by the backend. This is the same value as nfs_share_id and will replace it in the future. */
		id: FormControl<string | null | undefined>,

		/** Labels as key value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The name of the NFS share. */
		name: FormControl<string | null | undefined>,

		/** Output only. An identifier for the NFS share, generated by the backend. This field will be deprecated in the future, use `id` instead. */
		nfsShareId: FormControl<string | null | undefined>,

		/** Immutable. Pod name. Pod is an independent part of infrastructure. NFSShare can only be connected to the assets (networks, instances) allocated in the same pod. */
		pod: FormControl<string | null | undefined>,

		/** The requested size, in GiB. */
		requestedSizeGib: FormControl<string | null | undefined>,

		/** Output only. The state of the NFS share. */
		state: FormControl<NfsShareState | null | undefined>,

		/** Immutable. The storage type of the underlying volume. */
		storageType: FormControl<LunStorageType | null | undefined>,

		/** Output only. The underlying volume of the share. Created automatically during provisioning. */
		volume: FormControl<string | null | undefined>,
	}
	export function CreateNfsShareFormGroup() {
		return new FormGroup<NfsShareFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nfsShareId: new FormControl<string | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			requestedSizeGib: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<NfsShareState | null | undefined>(undefined),
			storageType: new FormControl<LunStorageType | null | undefined>(undefined),
			volume: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NfsShareState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PROVISIONED = 'PROVISIONED', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING' }


	/** Request for getting all available OS images. */
	export interface ListOSImagesResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The OS images available. */
		osImages?: Array<OSImage>;
	}

	/** Request for getting all available OS images. */
	export interface ListOSImagesResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOSImagesResponseFormGroup() {
		return new FormGroup<ListOSImagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Operation System image. */
	export interface OSImage {

		/** Instance types this image is applicable to. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations) */
		applicableInstanceTypes?: Array<string>;

		/** OS Image code. */
		code?: string | null;

		/** OS Image description. */
		description?: string | null;

		/** Output only. OS Image's unique name. */
		name?: string | null;

		/** Network templates that can be used with this OS Image. */
		supportedNetworkTemplates?: Array<string>;
	}

	/** Operation System image. */
	export interface OSImageFormProperties {

		/** OS Image code. */
		code: FormControl<string | null | undefined>,

		/** OS Image description. */
		description: FormControl<string | null | undefined>,

		/** Output only. OS Image's unique name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOSImageFormGroup() {
		return new FormGroup<OSImageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the list of provisioning quotas. */
	export interface ListProvisioningQuotasResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The provisioning quotas registered in this project. */
		provisioningQuotas?: Array<ProvisioningQuota>;
	}

	/** Response message for the list of provisioning quotas. */
	export interface ListProvisioningQuotasResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProvisioningQuotasResponseFormGroup() {
		return new FormGroup<ListProvisioningQuotasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A provisioning quota for a given project. */
	export interface ProvisioningQuota {

		/** The asset type of this provisioning quota. */
		assetType?: ProvisioningQuotaAssetType | null;

		/** The available count of the provisioning quota. */
		availableCount?: number | null;

		/** The gcp service of the provisioning quota. */
		gcpService?: string | null;

		/** A resource budget. */
		instanceQuota?: InstanceQuota;

		/** The specific location of the provisioining quota. */
		location?: string | null;

		/** Output only. The name of the provisioning quota. */
		name?: string | null;

		/** Network bandwidth, Gbps */
		networkBandwidth?: string | null;

		/** Server count. */
		serverCount?: string | null;

		/** Storage size (GB). */
		storageGib?: string | null;
	}

	/** A provisioning quota for a given project. */
	export interface ProvisioningQuotaFormProperties {

		/** The asset type of this provisioning quota. */
		assetType: FormControl<ProvisioningQuotaAssetType | null | undefined>,

		/** The available count of the provisioning quota. */
		availableCount: FormControl<number | null | undefined>,

		/** The gcp service of the provisioning quota. */
		gcpService: FormControl<string | null | undefined>,

		/** The specific location of the provisioining quota. */
		location: FormControl<string | null | undefined>,

		/** Output only. The name of the provisioning quota. */
		name: FormControl<string | null | undefined>,

		/** Network bandwidth, Gbps */
		networkBandwidth: FormControl<string | null | undefined>,

		/** Server count. */
		serverCount: FormControl<string | null | undefined>,

		/** Storage size (GB). */
		storageGib: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningQuotaFormGroup() {
		return new FormGroup<ProvisioningQuotaFormProperties>({
			assetType: new FormControl<ProvisioningQuotaAssetType | null | undefined>(undefined),
			availableCount: new FormControl<number | null | undefined>(undefined),
			gcpService: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			networkBandwidth: new FormControl<string | null | undefined>(undefined),
			serverCount: new FormControl<string | null | undefined>(undefined),
			storageGib: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProvisioningQuotaAssetType { ASSET_TYPE_UNSPECIFIED = 'ASSET_TYPE_UNSPECIFIED', ASSET_TYPE_SERVER = 'ASSET_TYPE_SERVER', ASSET_TYPE_STORAGE = 'ASSET_TYPE_STORAGE', ASSET_TYPE_NETWORK = 'ASSET_TYPE_NETWORK' }


	/** Message for response of ListSSHKeys. */
	export interface ListSSHKeysResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The SSH keys registered in the project. */
		sshKeys?: Array<SSHKey>;
	}

	/** Message for response of ListSSHKeys. */
	export interface ListSSHKeysResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListSSHKeysResponseFormGroup() {
		return new FormGroup<ListSSHKeysResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An SSH key, used for authorizing with the interactive serial console feature. */
	export interface SSHKey {

		/** Output only. The name of this SSH key. Currently, the only valid value for the location is "global". */
		name?: string | null;

		/** The public SSH key. This must be in OpenSSH .authorized_keys format. */
		publicKey?: string | null;
	}

	/** An SSH key, used for authorizing with the interactive serial console feature. */
	export interface SSHKeyFormProperties {

		/** Output only. The name of this SSH key. Currently, the only valid value for the location is "global". */
		name: FormControl<string | null | undefined>,

		/** The public SSH key. This must be in OpenSSH .authorized_keys format. */
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateSSHKeyFormGroup() {
		return new FormGroup<SSHKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message containing the list of volume snapshots. */
	export interface ListVolumeSnapshotsResponse {

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The list of snapshots. */
		volumeSnapshots?: Array<VolumeSnapshot>;
	}

	/** Response message containing the list of volume snapshots. */
	export interface ListVolumeSnapshotsResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVolumeSnapshotsResponseFormGroup() {
		return new FormGroup<ListVolumeSnapshotsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A snapshot of a volume. Only boot volumes can have snapshots. */
	export interface VolumeSnapshot {

		/** Output only. The creation time of the snapshot. */
		createTime?: string | null;

		/** The description of the snapshot. */
		description?: string | null;

		/** Output only. An identifier for the snapshot, generated by the backend. */
		id?: string | null;

		/** The name of the snapshot. */
		name?: string | null;

		/** Output only. The name of the volume which this snapshot belongs to. */
		storageVolume?: string | null;

		/** Output only. The type of the snapshot which indicates whether it was scheduled or manual/ad-hoc. */
		type?: VolumeSnapshotType | null;
	}

	/** A snapshot of a volume. Only boot volumes can have snapshots. */
	export interface VolumeSnapshotFormProperties {

		/** Output only. The creation time of the snapshot. */
		createTime: FormControl<string | null | undefined>,

		/** The description of the snapshot. */
		description: FormControl<string | null | undefined>,

		/** Output only. An identifier for the snapshot, generated by the backend. */
		id: FormControl<string | null | undefined>,

		/** The name of the snapshot. */
		name: FormControl<string | null | undefined>,

		/** Output only. The name of the volume which this snapshot belongs to. */
		storageVolume: FormControl<string | null | undefined>,

		/** Output only. The type of the snapshot which indicates whether it was scheduled or manual/ad-hoc. */
		type: FormControl<VolumeSnapshotType | null | undefined>,
	}
	export function CreateVolumeSnapshotFormGroup() {
		return new FormGroup<VolumeSnapshotFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			storageVolume: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<VolumeSnapshotType | null | undefined>(undefined),
		});

	}

	export enum VolumeSnapshotType { SNAPSHOT_TYPE_UNSPECIFIED = 'SNAPSHOT_TYPE_UNSPECIFIED', AD_HOC = 'AD_HOC', SCHEDULED = 'SCHEDULED' }


	/** Response message containing the list of storage volumes. */
	export interface ListVolumesResponse {

		/** A token identifying a page of results from the server. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;

		/** The list of storage volumes. */
		volumes?: Array<Volume>;
	}

	/** Response message containing the list of storage volumes. */
	export interface ListVolumesResponseFormProperties {

		/** A token identifying a page of results from the server. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVolumesResponseFormGroup() {
		return new FormGroup<ListVolumesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for LoadInstanceAuthInfo. */
	export interface LoadInstanceAuthInfoResponse {

		/** List of ssh keys. */
		sshKeys?: Array<SSHKey>;

		/** Map of username to the user account info. */
		userAccounts?: {[id: string]: UserAccount };
	}

	/** Response for LoadInstanceAuthInfo. */
	export interface LoadInstanceAuthInfoResponseFormProperties {

		/** Map of username to the user account info. */
		userAccounts: FormControl<{[id: string]: UserAccount } | null | undefined>,
	}
	export function CreateLoadInstanceAuthInfoResponseFormGroup() {
		return new FormGroup<LoadInstanceAuthInfoResponseFormProperties>({
			userAccounts: new FormControl<{[id: string]: UserAccount } | null | undefined>(undefined),
		});

	}


	/** User account provisioned for the customer. */
	export interface UserAccount {

		/** Encrypted initial password value. */
		encryptedPassword?: string | null;

		/** KMS CryptoKey Version used to encrypt the password. */
		kmsKeyVersion?: string | null;
	}

	/** User account provisioned for the customer. */
	export interface UserAccountFormProperties {

		/** Encrypted initial password value. */
		encryptedPassword: FormControl<string | null | undefined>,

		/** KMS CryptoKey Version used to encrypt the password. */
		kmsKeyVersion: FormControl<string | null | undefined>,
	}
	export function CreateUserAccountFormGroup() {
		return new FormGroup<UserAccountFormProperties>({
			encryptedPassword: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A LUN(Logical Unit Number) range. */
	export interface LunRange {

		/** Number of LUNs to create. */
		quantity?: number | null;

		/** The requested size of each LUN, in GB. */
		sizeGb?: number | null;
	}

	/** A LUN(Logical Unit Number) range. */
	export interface LunRangeFormProperties {

		/** Number of LUNs to create. */
		quantity: FormControl<number | null | undefined>,

		/** The requested size of each LUN, in GB. */
		sizeGb: FormControl<number | null | undefined>,
	}
	export function CreateLunRangeFormGroup() {
		return new FormGroup<LunRangeFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration parameters for a new network. */
	export interface NetworkConfig {

		/** Interconnect bandwidth. Set only when type is CLIENT. */
		bandwidth?: NetworkConfigBandwidth | null;

		/** CIDR range of the network. */
		cidr?: string | null;

		/** The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. */
		gcpService?: string | null;

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id?: string | null;

		/** The JumboFramesEnabled option for customer to set. */
		jumboFramesEnabled?: boolean | null;

		/** Output only. The name of the network config. */
		name?: string | null;

		/** Service CIDR, if any. */
		serviceCidr?: NetworkConfigServiceCidr | null;

		/** The type of this network, either Client or Private. */
		type?: LogicalNetworkInterfaceNetworkType | null;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote?: string | null;

		/** List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan). */
		vlanAttachments?: Array<IntakeVlanAttachment>;

		/** Whether the VLAN attachment pair is located in the same project. */
		vlanSameProject?: boolean | null;
	}

	/** Configuration parameters for a new network. */
	export interface NetworkConfigFormProperties {

		/** Interconnect bandwidth. Set only when type is CLIENT. */
		bandwidth: FormControl<NetworkConfigBandwidth | null | undefined>,

		/** CIDR range of the network. */
		cidr: FormControl<string | null | undefined>,

		/** The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. */
		gcpService: FormControl<string | null | undefined>,

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** The JumboFramesEnabled option for customer to set. */
		jumboFramesEnabled: FormControl<boolean | null | undefined>,

		/** Output only. The name of the network config. */
		name: FormControl<string | null | undefined>,

		/** Service CIDR, if any. */
		serviceCidr: FormControl<NetworkConfigServiceCidr | null | undefined>,

		/** The type of this network, either Client or Private. */
		type: FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote: FormControl<string | null | undefined>,

		/** Whether the VLAN attachment pair is located in the same project. */
		vlanSameProject: FormControl<boolean | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			bandwidth: new FormControl<NetworkConfigBandwidth | null | undefined>(undefined),
			cidr: new FormControl<string | null | undefined>(undefined),
			gcpService: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jumboFramesEnabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceCidr: new FormControl<NetworkConfigServiceCidr | null | undefined>(undefined),
			type: new FormControl<LogicalNetworkInterfaceNetworkType | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
			vlanSameProject: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigBandwidth { BANDWIDTH_UNSPECIFIED = 'BANDWIDTH_UNSPECIFIED', BW_1_GBPS = 'BW_1_GBPS', BW_2_GBPS = 'BW_2_GBPS', BW_5_GBPS = 'BW_5_GBPS', BW_10_GBPS = 'BW_10_GBPS' }

	export enum NetworkConfigServiceCidr { SERVICE_CIDR_UNSPECIFIED = 'SERVICE_CIDR_UNSPECIFIED', DISABLED = 'DISABLED', HIGH_26 = 'HIGH_26', HIGH_27 = 'HIGH_27', HIGH_28 = 'HIGH_28' }


	/** A NFS export entry. */
	export interface NfsExport {

		/** Allow dev flag in NfsShare AllowedClientsRequest. */
		allowDev?: boolean | null;

		/** Allow the setuid flag. */
		allowSuid?: boolean | null;

		/** A CIDR range. */
		cidr?: string | null;

		/** Either a single machine, identified by an ID, or a comma-separated list of machine IDs. */
		machineId?: string | null;

		/** Network to use to publish the export. */
		networkId?: string | null;

		/** Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. */
		noRootSquash?: boolean | null;

		/** Export permissions. */
		permissions?: NfsExportPermissions | null;
	}

	/** A NFS export entry. */
	export interface NfsExportFormProperties {

		/** Allow dev flag in NfsShare AllowedClientsRequest. */
		allowDev: FormControl<boolean | null | undefined>,

		/** Allow the setuid flag. */
		allowSuid: FormControl<boolean | null | undefined>,

		/** A CIDR range. */
		cidr: FormControl<string | null | undefined>,

		/** Either a single machine, identified by an ID, or a comma-separated list of machine IDs. */
		machineId: FormControl<string | null | undefined>,

		/** Network to use to publish the export. */
		networkId: FormControl<string | null | undefined>,

		/** Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. */
		noRootSquash: FormControl<boolean | null | undefined>,

		/** Export permissions. */
		permissions: FormControl<NfsExportPermissions | null | undefined>,
	}
	export function CreateNfsExportFormGroup() {
		return new FormGroup<NfsExportFormProperties>({
			allowDev: new FormControl<boolean | null | undefined>(undefined),
			allowSuid: new FormControl<boolean | null | undefined>(undefined),
			cidr: new FormControl<string | null | undefined>(undefined),
			machineId: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<string | null | undefined>(undefined),
			noRootSquash: new FormControl<boolean | null | undefined>(undefined),
			permissions: new FormControl<NfsExportPermissions | null | undefined>(undefined),
		});

	}

	export enum NfsExportPermissions { PERMISSIONS_UNSPECIFIED = 'PERMISSIONS_UNSPECIFIED', READ_ONLY = 'READ_ONLY', READ_WRITE = 'READ_WRITE' }


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A provisioning configuration. */
	export interface ProvisioningConfig {

		/** Output only. URI to Cloud Console UI view of this provisioning config. */
		cloudConsoleUri?: string | null;

		/** Optional. The user-defined identifier of the provisioning config. */
		customId?: string | null;

		/** Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages. */
		email?: string | null;

		/** A service account to enable customers to access instance credentials upon handover. */
		handoverServiceAccount?: string | null;

		/** Instances to be created. */
		instances?: Array<InstanceConfig>;

		/** Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period. */
		location?: string | null;

		/** Output only. The system-generated name of the provisioning config. This follows the UUID format. */
		name?: string | null;

		/** Networks to be created. */
		networks?: Array<NetworkConfig>;

		/** Optional. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes, nfsshares) allocated in the same pod only. */
		pod?: string | null;

		/** Output only. State of ProvisioningConfig. */
		state?: ProvisioningConfigState | null;

		/** Optional status messages associated with the FAILED state. */
		statusMessage?: string | null;

		/** A generated ticket id to track provisioning request. */
		ticketId?: string | null;

		/** Output only. Last update timestamp. */
		updateTime?: string | null;

		/** Volumes to be created. */
		volumes?: Array<VolumeConfig>;

		/** If true, VPC SC is enabled for the cluster. */
		vpcScEnabled?: boolean | null;
	}

	/** A provisioning configuration. */
	export interface ProvisioningConfigFormProperties {

		/** Output only. URI to Cloud Console UI view of this provisioning config. */
		cloudConsoleUri: FormControl<string | null | undefined>,

		/** Optional. The user-defined identifier of the provisioning config. */
		customId: FormControl<string | null | undefined>,

		/** Email provided to send a confirmation with provisioning config to. Deprecated in favour of email field in request messages. */
		email: FormControl<string | null | undefined>,

		/** A service account to enable customers to access instance credentials upon handover. */
		handoverServiceAccount: FormControl<string | null | undefined>,

		/** Optional. Location name of this ProvisioningConfig. It is optional only for Intake UI transition period. */
		location: FormControl<string | null | undefined>,

		/** Output only. The system-generated name of the provisioning config. This follows the UUID format. */
		name: FormControl<string | null | undefined>,

		/** Optional. Pod name. Pod is an independent part of infrastructure. Instance can be connected to the assets (networks, volumes, nfsshares) allocated in the same pod only. */
		pod: FormControl<string | null | undefined>,

		/** Output only. State of ProvisioningConfig. */
		state: FormControl<ProvisioningConfigState | null | undefined>,

		/** Optional status messages associated with the FAILED state. */
		statusMessage: FormControl<string | null | undefined>,

		/** A generated ticket id to track provisioning request. */
		ticketId: FormControl<string | null | undefined>,

		/** Output only. Last update timestamp. */
		updateTime: FormControl<string | null | undefined>,

		/** If true, VPC SC is enabled for the cluster. */
		vpcScEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateProvisioningConfigFormGroup() {
		return new FormGroup<ProvisioningConfigFormProperties>({
			cloudConsoleUri: new FormControl<string | null | undefined>(undefined),
			customId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			handoverServiceAccount: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pod: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ProvisioningConfigState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			ticketId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			vpcScEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ProvisioningConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', DRAFT = 'DRAFT', SUBMITTED = 'SUBMITTED', PROVISIONING = 'PROVISIONING', PROVISIONED = 'PROVISIONED', VALIDATED = 'VALIDATED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }


	/** Configuration parameters for a new volume. */
	export interface VolumeConfig {

		/** The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. */
		gcpService?: string | null;

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id?: string | null;

		/** LUN ranges to be configured. Set only when protocol is PROTOCOL_FC. */
		lunRanges?: Array<LunRange>;

		/** Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC. */
		machineIds?: Array<string>;

		/** Output only. The name of the volume config. */
		name?: string | null;

		/** NFS exports. Set only when protocol is PROTOCOL_NFS. */
		nfsExports?: Array<NfsExport>;

		/** Performance tier of the Volume. Default is SHARED. */
		performanceTier?: VolumePerformanceTier | null;

		/** Volume protocol. */
		protocol?: VolumeConfigProtocol | null;

		/** The requested size of this volume, in GB. */
		sizeGb?: number | null;

		/** Whether snapshots should be enabled. */
		snapshotsEnabled?: boolean | null;

		/** The type of this Volume. */
		type?: VolumeConfigType | null;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote?: string | null;
	}

	/** Configuration parameters for a new volume. */
	export interface VolumeConfigFormProperties {

		/** The GCP service of the storage volume. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning. */
		gcpService: FormControl<string | null | undefined>,

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** Output only. The name of the volume config. */
		name: FormControl<string | null | undefined>,

		/** Performance tier of the Volume. Default is SHARED. */
		performanceTier: FormControl<VolumePerformanceTier | null | undefined>,

		/** Volume protocol. */
		protocol: FormControl<VolumeConfigProtocol | null | undefined>,

		/** The requested size of this volume, in GB. */
		sizeGb: FormControl<number | null | undefined>,

		/** Whether snapshots should be enabled. */
		snapshotsEnabled: FormControl<boolean | null | undefined>,

		/** The type of this Volume. */
		type: FormControl<VolumeConfigType | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team . */
		userNote: FormControl<string | null | undefined>,
	}
	export function CreateVolumeConfigFormGroup() {
		return new FormGroup<VolumeConfigFormProperties>({
			gcpService: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			performanceTier: new FormControl<VolumePerformanceTier | null | undefined>(undefined),
			protocol: new FormControl<VolumeConfigProtocol | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			snapshotsEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<VolumeConfigType | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VolumeConfigProtocol { PROTOCOL_UNSPECIFIED = 'PROTOCOL_UNSPECIFIED', PROTOCOL_FC = 'PROTOCOL_FC', PROTOCOL_NFS = 'PROTOCOL_NFS' }

	export enum VolumeConfigType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', FLASH = 'FLASH', DISK = 'DISK' }


	/** Message requesting rename of a server. */
	export interface RenameInstanceRequest {

		/** Required. The new `id` of the instance. */
		newInstanceId?: string | null;
	}

	/** Message requesting rename of a server. */
	export interface RenameInstanceRequestFormProperties {

		/** Required. The new `id` of the instance. */
		newInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateRenameInstanceRequestFormGroup() {
		return new FormGroup<RenameInstanceRequestFormProperties>({
			newInstanceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message requesting rename of a server. */
	export interface RenameNetworkRequest {

		/** Required. The new `id` of the network. */
		newNetworkId?: string | null;
	}

	/** Message requesting rename of a server. */
	export interface RenameNetworkRequestFormProperties {

		/** Required. The new `id` of the network. */
		newNetworkId: FormControl<string | null | undefined>,
	}
	export function CreateRenameNetworkRequestFormGroup() {
		return new FormGroup<RenameNetworkRequestFormProperties>({
			newNetworkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message requesting rename of a server. */
	export interface RenameNfsShareRequest {

		/** Required. The new `id` of the nfsshare. */
		newNfsshareId?: string | null;
	}

	/** Message requesting rename of a server. */
	export interface RenameNfsShareRequestFormProperties {

		/** Required. The new `id` of the nfsshare. */
		newNfsshareId: FormControl<string | null | undefined>,
	}
	export function CreateRenameNfsShareRequestFormGroup() {
		return new FormGroup<RenameNfsShareRequestFormProperties>({
			newNfsshareId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message requesting rename of a server. */
	export interface RenameVolumeRequest {

		/** Required. The new `id` of the volume. */
		newVolumeId?: string | null;
	}

	/** Message requesting rename of a server. */
	export interface RenameVolumeRequestFormProperties {

		/** Required. The new `id` of the volume. */
		newVolumeId: FormControl<string | null | undefined>,
	}
	export function CreateRenameVolumeRequestFormGroup() {
		return new FormGroup<RenameVolumeRequestFormProperties>({
			newVolumeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message requesting to reset a server. */
	export interface ResetInstanceRequest {
	}

	/** Message requesting to reset a server. */
	export interface ResetInstanceRequestFormProperties {
	}
	export function CreateResetInstanceRequestFormGroup() {
		return new FormGroup<ResetInstanceRequestFormProperties>({
		});

	}


	/** Response message from resetting a server. */
	export interface ResetInstanceResponse {
	}

	/** Response message from resetting a server. */
	export interface ResetInstanceResponseFormProperties {
	}
	export function CreateResetInstanceResponseFormGroup() {
		return new FormGroup<ResetInstanceResponseFormProperties>({
		});

	}


	/** Request for emergency resize Volume. */
	export interface ResizeVolumeRequest {

		/** New Volume size, in GiB. */
		sizeGib?: string | null;
	}

	/** Request for emergency resize Volume. */
	export interface ResizeVolumeRequestFormProperties {

		/** New Volume size, in GiB. */
		sizeGib: FormControl<string | null | undefined>,
	}
	export function CreateResizeVolumeRequestFormGroup() {
		return new FormGroup<ResizeVolumeRequestFormProperties>({
			sizeGib: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for restoring a volume snapshot. */
	export interface RestoreVolumeSnapshotRequest {
	}

	/** Message for restoring a volume snapshot. */
	export interface RestoreVolumeSnapshotRequestFormProperties {
	}
	export function CreateRestoreVolumeSnapshotRequestFormGroup() {
		return new FormGroup<RestoreVolumeSnapshotRequestFormProperties>({
		});

	}


	/** Network template. */
	export interface ServerNetworkTemplate {

		/** Instance types this template is applicable to. */
		applicableInstanceTypes?: Array<string>;

		/** Logical interfaces. */
		logicalInterfaces?: Array<GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface>;

		/** Output only. Template's unique name. The full resource name follows the pattern: `projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}` Generally, the {server_network_template} follows the syntax of "bond" or "nic". */
		name?: string | null;
	}

	/** Network template. */
	export interface ServerNetworkTemplateFormProperties {

		/** Output only. Template's unique name. The full resource name follows the pattern: `projects/{project}/locations/{location}/serverNetworkTemplate/{server_network_template}` Generally, the {server_network_template} follows the syntax of "bond" or "nic". */
		name: FormControl<string | null | undefined>,
	}
	export function CreateServerNetworkTemplateFormGroup() {
		return new FormGroup<ServerNetworkTemplateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message requesting to start a server. */
	export interface StartInstanceRequest {
	}

	/** Message requesting to start a server. */
	export interface StartInstanceRequestFormProperties {
	}
	export function CreateStartInstanceRequestFormGroup() {
		return new FormGroup<StartInstanceRequestFormProperties>({
		});

	}


	/** Response message from starting a server. */
	export interface StartInstanceResponse {
	}

	/** Response message from starting a server. */
	export interface StartInstanceResponseFormProperties {
	}
	export function CreateStartInstanceResponseFormGroup() {
		return new FormGroup<StartInstanceResponseFormProperties>({
		});

	}


	/** Message requesting to stop a server. */
	export interface StopInstanceRequest {
	}

	/** Message requesting to stop a server. */
	export interface StopInstanceRequestFormProperties {
	}
	export function CreateStopInstanceRequestFormGroup() {
		return new FormGroup<StopInstanceRequestFormProperties>({
		});

	}


	/** Response message from stopping a server. */
	export interface StopInstanceResponse {
	}

	/** Response message from stopping a server. */
	export interface StopInstanceResponseFormProperties {
	}
	export function CreateStopInstanceResponseFormGroup() {
		return new FormGroup<StopInstanceResponseFormProperties>({
		});

	}


	/** Request for SubmitProvisioningConfig. */
	export interface SubmitProvisioningConfigRequest {

		/** Optional. Email provided to send a confirmation with provisioning config to. */
		email?: string | null;

		/** A provisioning configuration. */
		provisioningConfig?: ProvisioningConfig;
	}

	/** Request for SubmitProvisioningConfig. */
	export interface SubmitProvisioningConfigRequestFormProperties {

		/** Optional. Email provided to send a confirmation with provisioning config to. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateSubmitProvisioningConfigRequestFormGroup() {
		return new FormGroup<SubmitProvisioningConfigRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for SubmitProvisioningConfig. */
	export interface SubmitProvisioningConfigResponse {

		/** A provisioning configuration. */
		provisioningConfig?: ProvisioningConfig;
	}

	/** Response for SubmitProvisioningConfig. */
	export interface SubmitProvisioningConfigResponseFormProperties {
	}
	export function CreateSubmitProvisioningConfigResponseFormGroup() {
		return new FormGroup<SubmitProvisioningConfigResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Detach LUN from Instance.
		 * Post v2/{instance}:detachLun
		 * @param {string} instance Required. Name of the instance.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_detachLun(instance: string, requestBody: DetachLunRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (instance == null ? '' : encodeURIComponent(instance)) + ':detachLun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all Networks (and used IPs for each Network) in the vendor account associated with the specified project.
		 * Get v2/{location}/networks:listNetworkUsage
		 * @param {string} location Required. Parent value (project and location).
		 * @return {ListNetworkUsageResponse} Successful response
		 */
		Baremetalsolution_projects_locations_networks_listNetworkUsage(location: string): Observable<ListNetworkUsageResponse> {
			return this.http.get<ListNetworkUsageResponse>(this.baseUri + 'v2/' + (location == null ? '' : encodeURIComponent(location)) + '/networks:listNetworkUsage', {});
		}

		/**
		 * Deletes a volume snapshot. Returns INVALID_ARGUMENT if called for a non-boot volume.
		 * Delete v2/{name}
		 * @param {string} name Required. The name of the snapshot to delete.
		 * @return {Empty} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_snapshots_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the specified snapshot resource. Returns INVALID_ARGUMENT if called for a non-boot volume.
		 * Get v2/{name}
		 * @param {string} name Required. The name of the snapshot.
		 * @return {VolumeSnapshot} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_snapshots_get(name: string): Observable<VolumeSnapshot> {
			return this.http.get<VolumeSnapshot>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update details of a single storage volume.
		 * Patch v2/{name}
		 * @param {string} name Output only. The resource name of this `Volume`. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. Format: `projects/{project}/locations/{location}/volumes/{volume}`
		 * @param {string} updateMask The list of fields to update. The only currently supported fields are: 'labels'
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_patch(name: string, updateMask: string | null | undefined, requestBody: Volume): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Baremetalsolution_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Disable the interactive serial console feature on an instance.
		 * Post v2/{name}:disableInteractiveSerialConsole
		 * @param {string} name Required. Name of the resource.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_disableInteractiveSerialConsole(name: string, requestBody: DisableInteractiveSerialConsoleRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':disableInteractiveSerialConsole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable the interactive serial console feature on an instance.
		 * Post v2/{name}:enableInteractiveSerialConsole
		 * @param {string} name Required. Name of the resource.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_enableInteractiveSerialConsole(name: string, requestBody: EnableInteractiveSerialConsoleRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':enableInteractiveSerialConsole', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Skips lun's cooloff and deletes it now. Lun must be in cooloff state.
		 * Post v2/{name}:evict
		 * @param {string} name Required. The name of the lun.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_luns_evict(name: string, requestBody: EvictLunRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':evict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Load auth info for a server.
		 * Get v2/{name}:loadAuthInfo
		 * @param {string} name Required. Name of the server.
		 * @return {LoadInstanceAuthInfoResponse} Successful response
		 */
		Baremetalsolution_projects_locations_instances_loadAuthInfo(name: string): Observable<LoadInstanceAuthInfoResponse> {
			return this.http.get<LoadInstanceAuthInfoResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':loadAuthInfo', {});
		}

		/**
		 * RenameVolume sets a new name for a volume. Use with caution, previous names become immediately invalidated.
		 * Post v2/{name}:rename
		 * @param {string} name Required. The `name` field is used to identify the volume. Format: projects/{project}/locations/{location}/volumes/{volume}
		 * @return {Volume} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_rename(name: string, requestBody: RenameVolumeRequest): Observable<Volume> {
			return this.http.post<Volume>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':rename', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Perform an ungraceful, hard reset on a server. Equivalent to shutting the power off and then turning it back on.
		 * Post v2/{name}:reset
		 * @param {string} name Required. Name of the resource.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_reset(name: string, requestBody: ResetInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a server that was shutdown.
		 * Post v2/{name}:start
		 * @param {string} name Required. Name of the resource.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_start(name: string, requestBody: StartInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop a running server.
		 * Post v2/{name}:stop
		 * @param {string} name Required. Name of the resource.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_instances_stop(name: string, requestBody: StopInstanceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List servers in a given project and location.
		 * Get v2/{parent}/instances
		 * @param {string} parent Required. Parent value for ListInstancesRequest.
		 * @param {string} filter List filter.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListInstancesResponse} Successful response
		 */
		Baremetalsolution_projects_locations_instances_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListInstancesResponse> {
			return this.http.get<ListInstancesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List storage volume luns for given storage volume.
		 * Get v2/{parent}/luns
		 * @param {string} parent Required. Parent value for ListLunsRequest.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListLunsResponse} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_luns_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLunsResponse> {
			return this.http.get<ListLunsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/luns&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List network in a given project and location.
		 * Get v2/{parent}/networks
		 * @param {string} parent Required. Parent value for ListNetworksRequest.
		 * @param {string} filter List filter.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListNetworksResponse} Successful response
		 */
		Baremetalsolution_projects_locations_networks_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNetworksResponse> {
			return this.http.get<ListNetworksResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/networks&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List NFS shares.
		 * Get v2/{parent}/nfsShares
		 * @param {string} parent Required. Parent value for ListNfsSharesRequest.
		 * @param {string} filter List filter.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListNfsSharesResponse} Successful response
		 */
		Baremetalsolution_projects_locations_nfsShares_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNfsSharesResponse> {
			return this.http.get<ListNfsSharesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nfsShares&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an NFS share.
		 * Post v2/{parent}/nfsShares
		 * @param {string} parent Required. The parent project and location.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_nfsShares_create(parent: string, requestBody: NfsShare): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nfsShares', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of OS images which are currently approved.
		 * Get v2/{parent}/osImages
		 * @param {string} parent Required. Parent value for ListOSImagesRequest.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListOSImagesResponse} Successful response
		 */
		Baremetalsolution_projects_locations_osImages_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOSImagesResponse> {
			return this.http.get<ListOSImagesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/osImages&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create new ProvisioningConfig.
		 * Post v2/{parent}/provisioningConfigs
		 * @param {string} parent Required. The parent project and location containing the ProvisioningConfig.
		 * @param {string} email Optional. Email provided to send a confirmation with provisioning config to.
		 * @return {ProvisioningConfig} Successful response
		 */
		Baremetalsolution_projects_locations_provisioningConfigs_create(parent: string, email: string | null | undefined, requestBody: ProvisioningConfig): Observable<ProvisioningConfig> {
			return this.http.post<ProvisioningConfig>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/provisioningConfigs&email=' + (email == null ? '' : encodeURIComponent(email)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submit a provisiong configuration for a given project.
		 * Post v2/{parent}/provisioningConfigs:submit
		 * @param {string} parent Required. The parent project and location containing the ProvisioningConfig.
		 * @return {SubmitProvisioningConfigResponse} Successful response
		 */
		Baremetalsolution_projects_locations_provisioningConfigs_submit(parent: string, requestBody: SubmitProvisioningConfigRequest): Observable<SubmitProvisioningConfigResponse> {
			return this.http.post<SubmitProvisioningConfigResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/provisioningConfigs:submit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the budget details to provision resources on a given project.
		 * Get v2/{parent}/provisioningQuotas
		 * @param {string} parent Required. Parent value for ListProvisioningQuotasRequest.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default. Notice that page_size field is not supported and won't be respected in the API request for now, will be updated when pagination is supported.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListProvisioningQuotasResponse} Successful response
		 */
		Baremetalsolution_projects_locations_provisioningQuotas_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProvisioningQuotasResponse> {
			return this.http.get<ListProvisioningQuotasResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/provisioningQuotas&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves the list of snapshots for the specified volume. Returns a response with an empty list of snapshots if called for a non-boot volume.
		 * Get v2/{parent}/snapshots
		 * @param {string} parent Required. Parent value for ListVolumesRequest.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListVolumeSnapshotsResponse} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_snapshots_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVolumeSnapshotsResponse> {
			return this.http.get<ListVolumeSnapshotsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snapshots&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Takes a snapshot of a boot volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
		 * Post v2/{parent}/snapshots
		 * @param {string} parent Required. The volume to snapshot.
		 * @return {VolumeSnapshot} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_snapshots_create(parent: string, requestBody: VolumeSnapshot): Observable<VolumeSnapshot> {
			return this.http.post<VolumeSnapshot>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/snapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the public SSH keys registered for the specified project. These SSH keys are used only for the interactive serial console feature.
		 * Get v2/{parent}/sshKeys
		 * @param {string} parent Required. The parent containing the SSH keys. Currently, the only valid value for the location is "global".
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListSSHKeysResponse} Successful response
		 */
		Baremetalsolution_projects_locations_sshKeys_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListSSHKeysResponse> {
			return this.http.get<ListSSHKeysResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sshKeys&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Register a public SSH key in the specified project for use with the interactive serial console feature.
		 * Post v2/{parent}/sshKeys
		 * @param {string} parent Required. The parent containing the SSH keys.
		 * @param {string} sshKeyId Required. The ID to use for the key, which will become the final component of the key's resource name. This value must match the regex: [a-zA-Z0-9@.\-_]{1,64}
		 * @return {SSHKey} Successful response
		 */
		Baremetalsolution_projects_locations_sshKeys_create(parent: string, sshKeyId: string | null | undefined, requestBody: SSHKey): Observable<SSHKey> {
			return this.http.post<SSHKey>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sshKeys&sshKeyId=' + (sshKeyId == null ? '' : encodeURIComponent(sshKeyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List storage volumes in a given project and location.
		 * Get v2/{parent}/volumes
		 * @param {string} parent Required. Parent value for ListVolumesRequest.
		 * @param {string} filter List filter.
		 * @param {number} pageSize Requested page size. The server might return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results from the server.
		 * @return {ListVolumesResponse} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVolumesResponse> {
			return this.http.get<ListVolumesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/volumes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Uses the specified snapshot to restore its parent volume. Returns INVALID_ARGUMENT if called for a non-boot volume.
		 * Post v2/{volumeSnapshot}:restoreVolumeSnapshot
		 * @param {string} volumeSnapshot Required. Name of the snapshot which will be used to restore its parent volume.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_snapshots_restoreVolumeSnapshot(volumeSnapshot: string, requestBody: RestoreVolumeSnapshotRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (volumeSnapshot == null ? '' : encodeURIComponent(volumeSnapshot)) + ':restoreVolumeSnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Emergency Volume resize.
		 * Post v2/{volume}:resize
		 * @param {string} volume Required. Volume to resize.
		 * @return {Operation} Successful response
		 */
		Baremetalsolution_projects_locations_volumes_resize(volume: string, requestBody: ResizeVolumeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (volume == null ? '' : encodeURIComponent(volume)) + ':resize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

