import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Configuration parameters for a new instance. */
	export interface InstanceConfig {

		/** A network. */
		clientNetwork?: NetworkAddress;

		/** Whether the instance should be provisioned with Hyperthreading enabled. */
		hyperthreading?: boolean | null;

		/** A transient unique identifier to idenfity an instance within an ProvisioningConfig request. */
		id?: string | null;

		/** Instance type. */
		instanceType?: string | null;

		/** Location where to deploy the instance. */
		location?: string | null;

		/** OS image to initialize the instance. */
		osImage?: string | null;

		/** A network. */
		privateNetwork?: NetworkAddress;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote?: string | null;
	}

	/** Configuration parameters for a new instance. */
	export interface InstanceConfigFormProperties {

		/** Whether the instance should be provisioned with Hyperthreading enabled. */
		hyperthreading: FormControl<boolean | null | undefined>,

		/** A transient unique identifier to idenfity an instance within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** Instance type. */
		instanceType: FormControl<string | null | undefined>,

		/** Location where to deploy the instance. */
		location: FormControl<string | null | undefined>,

		/** OS image to initialize the instance. */
		osImage: FormControl<string | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote: FormControl<string | null | undefined>,
	}
	export function CreateInstanceConfigFormGroup() {
		return new FormGroup<InstanceConfigFormProperties>({
			hyperthreading: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			osImage: new FormControl<string | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network. */
	export interface NetworkAddress {

		/** IP address to be assigned to the server. */
		address?: string | null;

		/** Name of the existing network to use. Will be of the format at--vlan for pre-intake UI networks like for eg, at-123456-vlan001 or any user-defined name like for eg, my-network-name for networks provisioned using intake UI. The field is exclusively filled only in case of an already existing network. Mutually exclusive with network_id. */
		existingNetworkId?: string | null;

		/** Name of the network to use, within the same ProvisioningConfig request. This represents a new network being provisioned in the same request. Can have any user-defined name like for eg, my-network-name. Mutually exclusive with existing_network_id. */
		networkId?: string | null;
	}

	/** A network. */
	export interface NetworkAddressFormProperties {

		/** IP address to be assigned to the server. */
		address: FormControl<string | null | undefined>,

		/** Name of the existing network to use. Will be of the format at--vlan for pre-intake UI networks like for eg, at-123456-vlan001 or any user-defined name like for eg, my-network-name for networks provisioned using intake UI. The field is exclusively filled only in case of an already existing network. Mutually exclusive with network_id. */
		existingNetworkId: FormControl<string | null | undefined>,

		/** Name of the network to use, within the same ProvisioningConfig request. This represents a new network being provisioned in the same request. Can have any user-defined name like for eg, my-network-name. Mutually exclusive with existing_network_id. */
		networkId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkAddressFormGroup() {
		return new FormGroup<NetworkAddressFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			existingNetworkId: new FormControl<string | null | undefined>(undefined),
			networkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource budget. */
	export interface InstanceQuota {

		/** Number of machines than can be created for the given location and instance_type. */
		availableMachineCount?: number | null;

		/** Instance type. */
		instanceType?: string | null;

		/** Location where the quota applies. */
		location?: string | null;
	}

	/** A resource budget. */
	export interface InstanceQuotaFormProperties {

		/** Number of machines than can be created for the given location and instance_type. */
		availableMachineCount: FormControl<number | null | undefined>,

		/** Instance type. */
		instanceType: FormControl<string | null | undefined>,

		/** Location where the quota applies. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateInstanceQuotaFormGroup() {
		return new FormGroup<InstanceQuotaFormProperties>({
			availableMachineCount: new FormControl<number | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListProvisioningQuotas. */
	export interface ListProvisioningQuotasResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The provisioning quotas registered in this project. */
		provisioningQuotas?: Array<ProvisioningQuota>;
	}

	/** Response for ListProvisioningQuotas. */
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

		/** A resource budget. */
		instanceQuota?: InstanceQuota;
	}

	/** A provisioning quota for a given project. */
	export interface ProvisioningQuotaFormProperties {
	}
	export function CreateProvisioningQuotaFormGroup() {
		return new FormGroup<ProvisioningQuotaFormProperties>({
		});

	}


	/** A LUN range. */
	export interface LunRange {

		/** Number of LUNs to create. */
		quantity?: number | null;

		/** The requested size of each LUN, in GB. */
		sizeGb?: number | null;
	}

	/** A LUN range. */
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

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id?: string | null;

		/** Location where to deploy the network. */
		location?: string | null;

		/** Service CIDR, if any. */
		serviceCidr?: NetworkConfigServiceCidr | null;

		/** The type of this network. */
		type?: NetworkConfigType | null;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote?: string | null;

		/** List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan). */
		vlanAttachments?: Array<VlanAttachment>;
	}

	/** Configuration parameters for a new network. */
	export interface NetworkConfigFormProperties {

		/** Interconnect bandwidth. Set only when type is CLIENT. */
		bandwidth: FormControl<NetworkConfigBandwidth | null | undefined>,

		/** CIDR range of the network. */
		cidr: FormControl<string | null | undefined>,

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** Location where to deploy the network. */
		location: FormControl<string | null | undefined>,

		/** Service CIDR, if any. */
		serviceCidr: FormControl<NetworkConfigServiceCidr | null | undefined>,

		/** The type of this network. */
		type: FormControl<NetworkConfigType | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			bandwidth: new FormControl<NetworkConfigBandwidth | null | undefined>(undefined),
			cidr: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			serviceCidr: new FormControl<NetworkConfigServiceCidr | null | undefined>(undefined),
			type: new FormControl<NetworkConfigType | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NetworkConfigBandwidth { BANDWIDTH_UNSPECIFIED = 0, BW_1_GBPS = 1, BW_2_GBPS = 2, BW_5_GBPS = 3, BW_10_GBPS = 4 }

	export enum NetworkConfigServiceCidr { SERVICE_CIDR_UNSPECIFIED = 0, DISABLED = 1, HIGH_26 = 2, HIGH_27 = 3, HIGH_28 = 4 }

	export enum NetworkConfigType { TYPE_UNSPECIFIED = 0, CLIENT = 1, PRIVATE = 2 }


	/** A GCP vlan attachment. */
	export interface VlanAttachment {

		/** Identifier of the VLAN attachment. */
		id?: string | null;

		/** Attachment pairing key. */
		pairingKey?: string | null;
	}

	/** A GCP vlan attachment. */
	export interface VlanAttachmentFormProperties {

		/** Identifier of the VLAN attachment. */
		id: FormControl<string | null | undefined>,

		/** Attachment pairing key. */
		pairingKey: FormControl<string | null | undefined>,
	}
	export function CreateVlanAttachmentFormGroup() {
		return new FormGroup<VlanAttachmentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			pairingKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A NFS export entry. */
	export interface NfsExport {

		/** Allow dev. */
		allowDev?: boolean | null;

		/** Allow the setuid flag. */
		allowSuid?: boolean | null;

		/** A CIDR range. */
		cidr?: string | null;

		/** Either a single machine, identified by an ID, or a comma-separated list of machine IDs. */
		machineId?: string | null;

		/** Network to use to publish the export. */
		networkId?: string | null;

		/** Disable root squashing. */
		noRootSquash?: boolean | null;

		/** Export permissions. */
		permissions?: NfsExportPermissions | null;
	}

	/** A NFS export entry. */
	export interface NfsExportFormProperties {

		/** Allow dev. */
		allowDev: FormControl<boolean | null | undefined>,

		/** Allow the setuid flag. */
		allowSuid: FormControl<boolean | null | undefined>,

		/** A CIDR range. */
		cidr: FormControl<string | null | undefined>,

		/** Either a single machine, identified by an ID, or a comma-separated list of machine IDs. */
		machineId: FormControl<string | null | undefined>,

		/** Network to use to publish the export. */
		networkId: FormControl<string | null | undefined>,

		/** Disable root squashing. */
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

	export enum NfsExportPermissions { PERMISSIONS_UNSPECIFIED = 0, READ_ONLY = 1, READ_WRITE = 2 }


	/** An provisioning configuration. */
	export interface ProvisioningConfig {

		/** Instances to be created. */
		instances?: Array<InstanceConfig>;

		/** Networks to be created. */
		networks?: Array<NetworkConfig>;

		/** A reference to track the request. */
		ticketId?: string | null;

		/** Volumes to be created. */
		volumes?: Array<VolumeConfig>;
	}

	/** An provisioning configuration. */
	export interface ProvisioningConfigFormProperties {

		/** A reference to track the request. */
		ticketId: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningConfigFormGroup() {
		return new FormGroup<ProvisioningConfigFormProperties>({
			ticketId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration parameters for a new volume. */
	export interface VolumeConfig {

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id?: string | null;

		/** Location where to deploy the volume. */
		location?: string | null;

		/** LUN ranges to be configured. Set only when protocol is PROTOCOL_FC. */
		lunRanges?: Array<LunRange>;

		/** Machine ids connected to this volume. Set only when protocol is PROTOCOL_FC. */
		machineIds?: Array<string>;

		/** NFS exports. Set only when protocol is PROTOCOL_NFS. */
		nfsExports?: Array<NfsExport>;

		/** Volume protocol. */
		protocol?: VolumeConfigProtocol | null;

		/** The requested size of this volume, in GB. This will be updated in a later iteration with a generic size field. */
		sizeGb?: number | null;

		/** Whether snapshots should be enabled. */
		snapshotsEnabled?: boolean | null;

		/** The type of this Volume. */
		type?: VolumeConfigType | null;

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote?: string | null;
	}

	/** Configuration parameters for a new volume. */
	export interface VolumeConfigFormProperties {

		/** A transient unique identifier to identify a volume within an ProvisioningConfig request. */
		id: FormControl<string | null | undefined>,

		/** Location where to deploy the volume. */
		location: FormControl<string | null | undefined>,

		/** Volume protocol. */
		protocol: FormControl<VolumeConfigProtocol | null | undefined>,

		/** The requested size of this volume, in GB. This will be updated in a later iteration with a generic size field. */
		sizeGb: FormControl<number | null | undefined>,

		/** Whether snapshots should be enabled. */
		snapshotsEnabled: FormControl<boolean | null | undefined>,

		/** The type of this Volume. */
		type: FormControl<VolumeConfigType | null | undefined>,

		/** User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617). */
		userNote: FormControl<string | null | undefined>,
	}
	export function CreateVolumeConfigFormGroup() {
		return new FormGroup<VolumeConfigFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<VolumeConfigProtocol | null | undefined>(undefined),
			sizeGb: new FormControl<number | null | undefined>(undefined),
			snapshotsEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<VolumeConfigType | null | undefined>(undefined),
			userNote: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VolumeConfigProtocol { PROTOCOL_UNSPECIFIED = 0, PROTOCOL_FC = 1, PROTOCOL_NFS = 2 }

	export enum VolumeConfigType { TYPE_UNSPECIFIED = 0, FLASH = 1, DISK = 2 }


	/** Request for SubmitProvisioningConfig. */
	export interface SubmitProvisioningConfigRequest {

		/** Optional. Email provided to send a confirmation with provisioning config to. */
		email?: string | null;

		/** An provisioning configuration. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List the budget details to provision resources on a given project.
		 * Get v1alpha1/{parent}/provisioningQuotas
		 * @param {string} parent Required. The parent project containing the provisioning quotas.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListProvisioningQuotasResponse} Successful response
		 */
		Baremetalsolution_projects_provisioningQuotas_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProvisioningQuotasResponse> {
			return this.http.get<ListProvisioningQuotasResponse>(this.baseUri + 'v1alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/provisioningQuotas&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Submit a provisiong configuration for a given project.
		 * Post v1alpha1/{project}/{location}:submitProvisioningConfig
		 * @param {string} project Required. The target project of the provisioning request.
		 * @param {string} location Required. The target location of the provisioning request.
		 * @return {ProvisioningConfig} Successful response
		 */
		Baremetalsolution_projects_locations_submitProvisioningConfig(project: string, location: string, requestBody: SubmitProvisioningConfigRequest): Observable<ProvisioningConfig> {
			return this.http.post<ProvisioningConfig>(this.baseUri + 'v1alpha1/' + (project == null ? '' : encodeURIComponent(project)) + '/' + (location == null ? '' : encodeURIComponent(location)) + ':submitProvisioningConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

