import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A TPU accelerator configuration. */
	export interface AcceleratorConfig {

		/** Required. Topology of TPU in chips. */
		topology?: string | null;

		/** Required. Type of TPU. */
		type?: AcceleratorConfigType | null;
	}

	/** A TPU accelerator configuration. */
	export interface AcceleratorConfigFormProperties {

		/** Required. Topology of TPU in chips. */
		topology: FormControl<string | null | undefined>,

		/** Required. Type of TPU. */
		type: FormControl<AcceleratorConfigType | null | undefined>,
	}
	export function CreateAcceleratorConfigFormGroup() {
		return new FormGroup<AcceleratorConfigFormProperties>({
			topology: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AcceleratorConfigType | null | undefined>(undefined),
		});

	}

	export enum AcceleratorConfigType { TYPE_UNSPECIFIED = 0, V2 = 1, V3 = 2, V4 = 3, V5P = 4 }


	/** A accelerator type that a Node can be configured with. */
	export interface AcceleratorType {

		/** The accelerator config. */
		acceleratorConfigs?: Array<AcceleratorConfig>;

		/** The resource name. */
		name?: string | null;

		/** The accelerator type. */
		type?: string | null;
	}

	/** A accelerator type that a Node can be configured with. */
	export interface AcceleratorTypeFormProperties {

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The accelerator type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAcceleratorTypeFormGroup() {
		return new FormGroup<AcceleratorTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Further data for the accepted state. */
	export interface AcceptedData {
	}

	/** Further data for the accepted state. */
	export interface AcceptedDataFormProperties {
	}
	export function CreateAcceptedDataFormGroup() {
		return new FormGroup<AcceptedDataFormProperties>({
		});

	}


	/** An access config attached to the TPU worker. */
	export interface AccessConfig {

		/** Output only. An external IP address associated with the TPU worker. */
		externalIp?: string | null;
	}

	/** An access config attached to the TPU worker. */
	export interface AccessConfigFormProperties {

		/** Output only. An external IP address associated with the TPU worker. */
		externalIp: FormControl<string | null | undefined>,
	}
	export function CreateAccessConfigFormGroup() {
		return new FormGroup<AccessConfigFormProperties>({
			externalIp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Further data for the active state. */
	export interface ActiveData {
	}

	/** Further data for the active state. */
	export interface ActiveDataFormProperties {
	}
	export function CreateActiveDataFormGroup() {
		return new FormGroup<ActiveDataFormProperties>({
		});

	}


	/** A node-attached disk resource. Next ID: 8; */
	export interface AttachedDisk {

		/** The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks. */
		mode?: AttachedDiskMode | null;

		/** Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". */
		sourceDisk?: string | null;
	}

	/** A node-attached disk resource. Next ID: 8; */
	export interface AttachedDiskFormProperties {

		/** The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks. */
		mode: FormControl<AttachedDiskMode | null | undefined>,

		/** Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk". */
		sourceDisk: FormControl<string | null | undefined>,
	}
	export function CreateAttachedDiskFormGroup() {
		return new FormGroup<AttachedDiskFormProperties>({
			mode: new FormControl<AttachedDiskMode | null | undefined>(undefined),
			sourceDisk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttachedDiskMode { DISK_MODE_UNSPECIFIED = 0, READ_WRITE = 1, READ_ONLY = 2 }


	/** BestEffort tier definition. */
	export interface BestEffort {
	}

	/** BestEffort tier definition. */
	export interface BestEffortFormProperties {
	}
	export function CreateBestEffortFormGroup() {
		return new FormGroup<BestEffortFormProperties>({
		});

	}


	/** Boot disk configurations. */
	export interface BootDiskConfig {

		/** Customer's encryption key. */
		customerEncryptionKey?: CustomerEncryptionKey;

		/** Optional. Whether the boot disk will be created with confidential compute mode. */
		enableConfidentialCompute?: boolean | null;
	}

	/** Boot disk configurations. */
	export interface BootDiskConfigFormProperties {

		/** Optional. Whether the boot disk will be created with confidential compute mode. */
		enableConfidentialCompute: FormControl<boolean | null | undefined>,
	}
	export function CreateBootDiskConfigFormGroup() {
		return new FormGroup<BootDiskConfigFormProperties>({
			enableConfidentialCompute: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Customer's encryption key. */
	export interface CustomerEncryptionKey {

		/** The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeyVersions/1 */
		kmsKeyName?: string | null;
	}

	/** Customer's encryption key. */
	export interface CustomerEncryptionKeyFormProperties {

		/** The name of the encryption key that is stored in Google Cloud KMS. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key The fully-qualifed key name may be returned for resource GET requests. For example: "kmsKeyName": "projects/kms_project_id/locations/region/keyRings/ key_region/cryptoKeys/key /cryptoKeyVersions/1 */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateCustomerEncryptionKeyFormGroup() {
		return new FormGroup<CustomerEncryptionKeyFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Further data for the creating state. */
	export interface CreatingData {
	}

	/** Further data for the creating state. */
	export interface CreatingDataFormProperties {
	}
	export function CreateCreatingDataFormGroup() {
		return new FormGroup<CreatingDataFormProperties>({
		});

	}


	/** Further data for the deleting state. */
	export interface DeletingData {
	}

	/** Further data for the deleting state. */
	export interface DeletingDataFormProperties {
	}
	export function CreateDeletingDataFormGroup() {
		return new FormGroup<DeletingDataFormProperties>({
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


	/** Further data for the failed state. */
	export interface FailedData {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;
	}

	/** Further data for the failed state. */
	export interface FailedDataFormProperties {
	}
	export function CreateFailedDataFormGroup() {
		return new FormGroup<FailedDataFormProperties>({
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


	/** Request for GenerateServiceIdentity. */
	export interface GenerateServiceIdentityRequest {
	}

	/** Request for GenerateServiceIdentity. */
	export interface GenerateServiceIdentityRequestFormProperties {
	}
	export function CreateGenerateServiceIdentityRequestFormGroup() {
		return new FormGroup<GenerateServiceIdentityRequestFormProperties>({
		});

	}


	/** Response for GenerateServiceIdentity. */
	export interface GenerateServiceIdentityResponse {

		/** The per-product per-project service identity for Cloud TPU service. */
		identity?: ServiceIdentity;
	}

	/** Response for GenerateServiceIdentity. */
	export interface GenerateServiceIdentityResponseFormProperties {
	}
	export function CreateGenerateServiceIdentityResponseFormGroup() {
		return new FormGroup<GenerateServiceIdentityResponseFormProperties>({
		});

	}


	/** The per-product per-project service identity for Cloud TPU service. */
	export interface ServiceIdentity {

		/** The email address of the service identity. */
		email?: string | null;
	}

	/** The per-product per-project service identity for Cloud TPU service. */
	export interface ServiceIdentityFormProperties {

		/** The email address of the service identity. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceIdentityFormGroup() {
		return new FormGroup<ServiceIdentityFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for GetGuestAttributes. */
	export interface GetGuestAttributesRequest {

		/** The guest attributes path to be queried. */
		queryPath?: string | null;

		/** The 0-based worker ID. If it is empty, all workers' GuestAttributes will be returned. */
		workerIds?: Array<string>;
	}

	/** Request for GetGuestAttributes. */
	export interface GetGuestAttributesRequestFormProperties {

		/** The guest attributes path to be queried. */
		queryPath: FormControl<string | null | undefined>,
	}
	export function CreateGetGuestAttributesRequestFormGroup() {
		return new FormGroup<GetGuestAttributesRequestFormProperties>({
			queryPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for GetGuestAttributes. */
	export interface GetGuestAttributesResponse {

		/** The guest attributes for the TPU workers. */
		guestAttributes?: Array<GuestAttributes>;
	}

	/** Response for GetGuestAttributes. */
	export interface GetGuestAttributesResponseFormProperties {
	}
	export function CreateGetGuestAttributesResponseFormGroup() {
		return new FormGroup<GetGuestAttributesResponseFormProperties>({
		});

	}


	/** A guest attributes. */
	export interface GuestAttributes {

		/** The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\') */
		queryPath?: string | null;

		/** Array of guest attribute namespace/key/value tuples. */
		queryValue?: GuestAttributesValue;
	}

	/** A guest attributes. */
	export interface GuestAttributesFormProperties {

		/** The path to be queried. This can be the default namespace ('/') or a nested namespace ('/\/') or a specified key ('/\/\') */
		queryPath: FormControl<string | null | undefined>,
	}
	export function CreateGuestAttributesFormGroup() {
		return new FormGroup<GuestAttributesFormProperties>({
			queryPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Array of guest attribute namespace/key/value tuples. */
	export interface GuestAttributesValue {

		/** The list of guest attributes entries. */
		items?: Array<GuestAttributesEntry>;
	}

	/** Array of guest attribute namespace/key/value tuples. */
	export interface GuestAttributesValueFormProperties {
	}
	export function CreateGuestAttributesValueFormGroup() {
		return new FormGroup<GuestAttributesValueFormProperties>({
		});

	}


	/** A guest attributes namespace/key/value entry. */
	export interface GuestAttributesEntry {

		/** Key for the guest attribute entry. */
		key?: string | null;

		/** Namespace for the guest attribute entry. */
		namespace?: string | null;

		/** Value for the guest attribute entry. */
		value?: string | null;
	}

	/** A guest attributes namespace/key/value entry. */
	export interface GuestAttributesEntryFormProperties {

		/** Key for the guest attribute entry. */
		key: FormControl<string | null | undefined>,

		/** Namespace for the guest attribute entry. */
		namespace: FormControl<string | null | undefined>,

		/** Value for the guest attribute entry. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGuestAttributesEntryFormGroup() {
		return new FormGroup<GuestAttributesEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guaranteed tier definition. */
	export interface Guaranteed {

		/** Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration. */
		minDuration?: string | null;

		/** Optional. Specifies the request should be scheduled on reserved capacity. */
		reserved?: boolean | null;
	}

	/** Guaranteed tier definition. */
	export interface GuaranteedFormProperties {

		/** Optional. Defines the minimum duration of the guarantee. If specified, the requested resources will only be provisioned if they can be allocated for at least the given duration. */
		minDuration: FormControl<string | null | undefined>,

		/** Optional. Specifies the request should be scheduled on reserved capacity. */
		reserved: FormControl<boolean | null | undefined>,
	}
	export function CreateGuaranteedFormGroup() {
		return new FormGroup<GuaranteedFormProperties>({
			minDuration: new FormControl<string | null | undefined>(undefined),
			reserved: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListAcceleratorTypes. */
	export interface ListAcceleratorTypesResponse {

		/** The listed nodes. */
		acceleratorTypes?: Array<AcceleratorType>;

		/** The next page token or empty if none. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListAcceleratorTypes. */
	export interface ListAcceleratorTypesResponseFormProperties {

		/** The next page token or empty if none. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAcceleratorTypesResponseFormGroup() {
		return new FormGroup<ListAcceleratorTypesResponseFormProperties>({
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


	/** Response for ListNodes. */
	export interface ListNodesResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string | null;

		/** The listed nodes. */
		nodes?: Array<Node>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListNodes. */
	export interface ListNodesResponseFormProperties {

		/** The next page token or empty if none. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNodesResponseFormGroup() {
		return new FormGroup<ListNodesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A TPU instance. */
	export interface Node {

		/** A TPU accelerator configuration. */
		acceleratorConfig?: AcceleratorConfig;

		/** The type of hardware accelerators associated with this node. */
		acceleratorType?: string | null;

		/** Output only. The API version that created this Node. */
		apiVersion?: NodeApiVersion | null;

		/** Optional. Whether Autocheckpoint is enabled. */
		autocheckpointEnabled?: boolean | null;

		/** Boot disk configurations. */
		bootDiskConfig?: BootDiskConfig;

		/** The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block. */
		cidrBlock?: string | null;

		/** Output only. The time when the node was created. */
		createTime?: string | null;

		/** The additional data disks for the Node. */
		dataDisks?: Array<AttachedDisk>;

		/** The user-supplied description of the TPU. Maximum of 512 characters. */
		description?: string | null;

		/** The health status of the TPU node. */
		health?: NodeHealth | null;

		/** Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. */
		healthDescription?: string | null;

		/** Output only. The unique identifier for the TPU Node. */
		id?: string | null;

		/** Resource labels to represent user-provided metadata. */
		labels?: {[id: string]: string };

		/** Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script */
		metadata?: {[id: string]: string };

		/** Output only. Whether the Node belongs to a Multislice group. */
		multisliceNode?: boolean | null;

		/** Output only. Immutable. The name of the TPU. */
		name?: string | null;

		/** Network related configurations. */
		networkConfig?: NetworkConfig;

		/** Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first. */
		networkEndpoints?: Array<NetworkEndpoint>;

		/** Output only. The qualified name of the QueuedResource that requested this Node. */
		queuedResource?: string | null;

		/** Required. The runtime version running in the Node. */
		runtimeVersion?: string | null;

		/** Sets the scheduling options for this node. */
		schedulingConfig?: SchedulingConfig;

		/** A service account. */
		serviceAccount?: ServiceAccount;

		/** A set of Shielded Instance options. */
		shieldedInstanceConfig?: ShieldedInstanceConfig;

		/** Output only. The current state for the TPU Node. */
		state?: NodeState | null;

		/** Output only. The Symptoms that have occurred to the TPU Node. */
		symptoms?: Array<Symptom>;

		/** Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. */
		tags?: Array<string>;
	}

	/** A TPU instance. */
	export interface NodeFormProperties {

		/** The type of hardware accelerators associated with this node. */
		acceleratorType: FormControl<string | null | undefined>,

		/** Output only. The API version that created this Node. */
		apiVersion: FormControl<NodeApiVersion | null | undefined>,

		/** Optional. Whether Autocheckpoint is enabled. */
		autocheckpointEnabled: FormControl<boolean | null | undefined>,

		/** The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user's provided network, or the provided network is peered with another network that is using that CIDR block. */
		cidrBlock: FormControl<string | null | undefined>,

		/** Output only. The time when the node was created. */
		createTime: FormControl<string | null | undefined>,

		/** The user-supplied description of the TPU. Maximum of 512 characters. */
		description: FormControl<string | null | undefined>,

		/** The health status of the TPU node. */
		health: FormControl<NodeHealth | null | undefined>,

		/** Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. */
		healthDescription: FormControl<string | null | undefined>,

		/** Output only. The unique identifier for the TPU Node. */
		id: FormControl<string | null | undefined>,

		/** Resource labels to represent user-provided metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Whether the Node belongs to a Multislice group. */
		multisliceNode: FormControl<boolean | null | undefined>,

		/** Output only. Immutable. The name of the TPU. */
		name: FormControl<string | null | undefined>,

		/** Output only. The qualified name of the QueuedResource that requested this Node. */
		queuedResource: FormControl<string | null | undefined>,

		/** Required. The runtime version running in the Node. */
		runtimeVersion: FormControl<string | null | undefined>,

		/** Output only. The current state for the TPU Node. */
		state: FormControl<NodeState | null | undefined>,
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
			acceleratorType: new FormControl<string | null | undefined>(undefined),
			apiVersion: new FormControl<NodeApiVersion | null | undefined>(undefined),
			autocheckpointEnabled: new FormControl<boolean | null | undefined>(undefined),
			cidrBlock: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<NodeHealth | null | undefined>(undefined),
			healthDescription: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			multisliceNode: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queuedResource: new FormControl<string | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<NodeState | null | undefined>(undefined),
		});

	}

	export enum NodeApiVersion { API_VERSION_UNSPECIFIED = 0, V1_ALPHA1 = 1, V1 = 2, V2_ALPHA1 = 3 }

	export enum NodeHealth { HEALTH_UNSPECIFIED = 0, HEALTHY = 1, TIMEOUT = 2, UNHEALTHY_TENSORFLOW = 3, UNHEALTHY_MAINTENANCE = 4 }


	/** Network related configurations. */
	export interface NetworkConfig {

		/** Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes. */
		canIpForward?: boolean | null;

		/** Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled. */
		enableExternalIps?: boolean | null;

		/** The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used. */
		network?: string | null;

		/** The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used. */
		subnetwork?: string | null;
	}

	/** Network related configurations. */
	export interface NetworkConfigFormProperties {

		/** Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes. */
		canIpForward: FormControl<boolean | null | undefined>,

		/** Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled. */
		enableExternalIps: FormControl<boolean | null | undefined>,

		/** The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used. */
		network: FormControl<string | null | undefined>,

		/** The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used. */
		subnetwork: FormControl<string | null | undefined>,
	}
	export function CreateNetworkConfigFormGroup() {
		return new FormGroup<NetworkConfigFormProperties>({
			canIpForward: new FormControl<boolean | null | undefined>(undefined),
			enableExternalIps: new FormControl<boolean | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			subnetwork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A network endpoint over which a TPU worker can be reached. */
	export interface NetworkEndpoint {

		/** An access config attached to the TPU worker. */
		accessConfig?: AccessConfig;

		/** The internal IP address of this network endpoint. */
		ipAddress?: string | null;

		/** The port of this network endpoint. */
		port?: number | null;
	}

	/** A network endpoint over which a TPU worker can be reached. */
	export interface NetworkEndpointFormProperties {

		/** The internal IP address of this network endpoint. */
		ipAddress: FormControl<string | null | undefined>,

		/** The port of this network endpoint. */
		port: FormControl<number | null | undefined>,
	}
	export function CreateNetworkEndpointFormGroup() {
		return new FormGroup<NetworkEndpointFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sets the scheduling options for this node. */
	export interface SchedulingConfig {

		/** Defines whether the node is preemptible. */
		preemptible?: boolean | null;

		/** Whether the node is created under a reservation. */
		reserved?: boolean | null;
	}

	/** Sets the scheduling options for this node. */
	export interface SchedulingConfigFormProperties {

		/** Defines whether the node is preemptible. */
		preemptible: FormControl<boolean | null | undefined>,

		/** Whether the node is created under a reservation. */
		reserved: FormControl<boolean | null | undefined>,
	}
	export function CreateSchedulingConfigFormGroup() {
		return new FormGroup<SchedulingConfigFormProperties>({
			preemptible: new FormControl<boolean | null | undefined>(undefined),
			reserved: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A service account. */
	export interface ServiceAccount {

		/** Email address of the service account. If empty, default Compute service account will be used. */
		email?: string | null;

		/** The list of scopes to be made available for this service account. If empty, access to all Cloud APIs will be allowed. */
		scope?: Array<string>;
	}

	/** A service account. */
	export interface ServiceAccountFormProperties {

		/** Email address of the service account. If empty, default Compute service account will be used. */
		email: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountFormGroup() {
		return new FormGroup<ServiceAccountFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of Shielded Instance options. */
	export interface ShieldedInstanceConfig {

		/** Defines whether the instance has Secure Boot enabled. */
		enableSecureBoot?: boolean | null;
	}

	/** A set of Shielded Instance options. */
	export interface ShieldedInstanceConfigFormProperties {

		/** Defines whether the instance has Secure Boot enabled. */
		enableSecureBoot: FormControl<boolean | null | undefined>,
	}
	export function CreateShieldedInstanceConfigFormGroup() {
		return new FormGroup<ShieldedInstanceConfigFormProperties>({
			enableSecureBoot: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum NodeState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, RESTARTING = 3, REIMAGING = 4, DELETING = 5, REPAIRING = 6, STOPPED = 7, STOPPING = 8, STARTING = 9, PREEMPTED = 10, TERMINATED = 11, HIDING = 12, HIDDEN = 13, UNHIDING = 14 }


	/** A Symptom instance. */
	export interface Symptom {

		/** Timestamp when the Symptom is created. */
		createTime?: string | null;

		/** Detailed information of the current Symptom. */
		details?: string | null;

		/** Type of the Symptom. */
		symptomType?: SymptomSymptomType | null;

		/** A string used to uniquely distinguish a worker within a TPU node. */
		workerId?: string | null;
	}

	/** A Symptom instance. */
	export interface SymptomFormProperties {

		/** Timestamp when the Symptom is created. */
		createTime: FormControl<string | null | undefined>,

		/** Detailed information of the current Symptom. */
		details: FormControl<string | null | undefined>,

		/** Type of the Symptom. */
		symptomType: FormControl<SymptomSymptomType | null | undefined>,

		/** A string used to uniquely distinguish a worker within a TPU node. */
		workerId: FormControl<string | null | undefined>,
	}
	export function CreateSymptomFormGroup() {
		return new FormGroup<SymptomFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			symptomType: new FormControl<SymptomSymptomType | null | undefined>(undefined),
			workerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SymptomSymptomType { SYMPTOM_TYPE_UNSPECIFIED = 0, LOW_MEMORY = 1, OUT_OF_MEMORY = 2, EXECUTE_TIMED_OUT = 3, MESH_BUILD_FAIL = 4, HBM_OUT_OF_MEMORY = 5, PROJECT_ABUSE = 6 }


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Response for ListQueuedResources. */
	export interface ListQueuedResourcesResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string | null;

		/** The listed queued resources. */
		queuedResources?: Array<QueuedResource>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListQueuedResources. */
	export interface ListQueuedResourcesResponseFormProperties {

		/** The next page token or empty if none. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListQueuedResourcesResponseFormGroup() {
		return new FormGroup<ListQueuedResourcesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available. */
	export interface QueuedResource {

		/** BestEffort tier definition. */
		bestEffort?: BestEffort;

		/** Output only. The time when the QueuedResource was created. */
		createTime?: string | null;

		/** Guaranteed tier definition. */
		guaranteed?: Guaranteed;

		/** Output only. Immutable. The name of the QueuedResource. */
		name?: string | null;

		/** Defines the policy of the QueuedRequest. */
		queueingPolicy?: QueueingPolicy;

		/** Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation} */
		reservationName?: string | null;

		/** Spot tier definition. */
		spot?: Spot;

		/** QueuedResourceState defines the details of the QueuedResource request. */
		state?: QueuedResourceState;

		/** Details of the TPU resource(s) being requested. */
		tpu?: Tpu;
	}

	/** A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available. */
	export interface QueuedResourceFormProperties {

		/** Output only. The time when the QueuedResource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Immutable. The name of the QueuedResource. */
		name: FormControl<string | null | undefined>,

		/** Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation} */
		reservationName: FormControl<string | null | undefined>,
	}
	export function CreateQueuedResourceFormGroup() {
		return new FormGroup<QueuedResourceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reservationName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the policy of the QueuedRequest. */
	export interface QueueingPolicy {

		/** A relative time after which resources may be created. */
		validAfterDuration?: string | null;

		/** An absolute time at which resources may be created. */
		validAfterTime?: string | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		validInterval?: Interval;

		/** A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
		validUntilDuration?: string | null;

		/** An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
		validUntilTime?: string | null;
	}

	/** Defines the policy of the QueuedRequest. */
	export interface QueueingPolicyFormProperties {

		/** A relative time after which resources may be created. */
		validAfterDuration: FormControl<string | null | undefined>,

		/** An absolute time at which resources may be created. */
		validAfterTime: FormControl<string | null | undefined>,

		/** A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
		validUntilDuration: FormControl<string | null | undefined>,

		/** An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed. */
		validUntilTime: FormControl<string | null | undefined>,
	}
	export function CreateQueueingPolicyFormGroup() {
		return new FormGroup<QueueingPolicyFormProperties>({
			validAfterDuration: new FormControl<string | null | undefined>(undefined),
			validAfterTime: new FormControl<string | null | undefined>(undefined),
			validUntilDuration: new FormControl<string | null | undefined>(undefined),
			validUntilTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Spot tier definition. */
	export interface Spot {
	}

	/** Spot tier definition. */
	export interface SpotFormProperties {
	}
	export function CreateSpotFormGroup() {
		return new FormGroup<SpotFormProperties>({
		});

	}


	/** QueuedResourceState defines the details of the QueuedResource request. */
	export interface QueuedResourceState {

		/** Further data for the accepted state. */
		acceptedData?: AcceptedData;

		/** Further data for the active state. */
		activeData?: ActiveData;

		/** Further data for the creating state. */
		creatingData?: CreatingData;

		/** Further data for the deleting state. */
		deletingData?: DeletingData;

		/** Further data for the failed state. */
		failedData?: FailedData;

		/** Further data for the provisioning state. */
		provisioningData?: ProvisioningData;

		/** State of the QueuedResource request. */
		state?: QueuedResourceStateState | null;

		/** Output only. The initiator of the QueuedResources's current state. */
		stateInitiator?: QueuedResourceStateStateInitiator | null;

		/** Further data for the suspended state. */
		suspendedData?: SuspendedData;

		/** Further data for the suspending state. */
		suspendingData?: SuspendingData;
	}

	/** QueuedResourceState defines the details of the QueuedResource request. */
	export interface QueuedResourceStateFormProperties {

		/** State of the QueuedResource request. */
		state: FormControl<QueuedResourceStateState | null | undefined>,

		/** Output only. The initiator of the QueuedResources's current state. */
		stateInitiator: FormControl<QueuedResourceStateStateInitiator | null | undefined>,
	}
	export function CreateQueuedResourceStateFormGroup() {
		return new FormGroup<QueuedResourceStateFormProperties>({
			state: new FormControl<QueuedResourceStateState | null | undefined>(undefined),
			stateInitiator: new FormControl<QueuedResourceStateStateInitiator | null | undefined>(undefined),
		});

	}


	/** Further data for the provisioning state. */
	export interface ProvisioningData {
	}

	/** Further data for the provisioning state. */
	export interface ProvisioningDataFormProperties {
	}
	export function CreateProvisioningDataFormGroup() {
		return new FormGroup<ProvisioningDataFormProperties>({
		});

	}

	export enum QueuedResourceStateState { STATE_UNSPECIFIED = 0, CREATING = 1, ACCEPTED = 2, PROVISIONING = 3, FAILED = 4, DELETING = 5, ACTIVE = 6, SUSPENDING = 7, SUSPENDED = 8, WAITING_FOR_RESOURCES = 9 }

	export enum QueuedResourceStateStateInitiator { STATE_INITIATOR_UNSPECIFIED = 0, USER = 1, SERVICE = 2 }


	/** Further data for the suspended state. */
	export interface SuspendedData {
	}

	/** Further data for the suspended state. */
	export interface SuspendedDataFormProperties {
	}
	export function CreateSuspendedDataFormGroup() {
		return new FormGroup<SuspendedDataFormProperties>({
		});

	}


	/** Further data for the suspending state. */
	export interface SuspendingData {
	}

	/** Further data for the suspending state. */
	export interface SuspendingDataFormProperties {
	}
	export function CreateSuspendingDataFormGroup() {
		return new FormGroup<SuspendingDataFormProperties>({
		});

	}


	/** Details of the TPU resource(s) being requested. */
	export interface Tpu {

		/** The TPU node(s) being requested. */
		nodeSpec?: Array<NodeSpec>;
	}

	/** Details of the TPU resource(s) being requested. */
	export interface TpuFormProperties {
	}
	export function CreateTpuFormGroup() {
		return new FormGroup<TpuFormProperties>({
		});

	}


	/** Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created. */
	export interface NodeSpec {

		/** Parameters to specify for multi-node QueuedResource requests. This field must be populated in case of multi-node requests instead of node_id. It's an error to specify both node_id and multi_node_params. */
		multiNodeParams?: MultiNodeParams;

		/** A TPU instance. */
		node?: Node;

		/** The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params. */
		nodeId?: string | null;

		/** Required. The parent resource name. */
		parent?: string | null;
	}

	/** Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created. */
	export interface NodeSpecFormProperties {

		/** The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. This is only specified when requesting a single node. In case of multi-node requests, multi_node_params must be populated instead. It's an error to specify both node_id and multi_node_params. */
		nodeId: FormControl<string | null | undefined>,

		/** Required. The parent resource name. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateNodeSpecFormGroup() {
		return new FormGroup<NodeSpecFormProperties>({
			nodeId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to specify for multi-node QueuedResource requests. This field must be populated in case of multi-node requests instead of node_id. It's an error to specify both node_id and multi_node_params. */
	export interface MultiNodeParams {

		/** Required. Number of nodes with this spec. The system will attempt to provison "node_count" nodes as part of the request. This needs to be > 1. */
		nodeCount?: number | null;

		/** Prefix of node_ids in case of multi-node request Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. If node_count = 3 and node_id_prefix = "np", node ids of nodes created will be "np-0", "np-1", "np-2". If this field is not provided we use queued_resource_id as the node_id_prefix. */
		nodeIdPrefix?: string | null;
	}

	/** Parameters to specify for multi-node QueuedResource requests. This field must be populated in case of multi-node requests instead of node_id. It's an error to specify both node_id and multi_node_params. */
	export interface MultiNodeParamsFormProperties {

		/** Required. Number of nodes with this spec. The system will attempt to provison "node_count" nodes as part of the request. This needs to be > 1. */
		nodeCount: FormControl<number | null | undefined>,

		/** Prefix of node_ids in case of multi-node request Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format. If node_count = 3 and node_id_prefix = "np", node ids of nodes created will be "np-0", "np-1", "np-2". If this field is not provided we use queued_resource_id as the node_id_prefix. */
		nodeIdPrefix: FormControl<string | null | undefined>,
	}
	export function CreateMultiNodeParamsFormGroup() {
		return new FormGroup<MultiNodeParamsFormProperties>({
			nodeCount: new FormControl<number | null | undefined>(undefined),
			nodeIdPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListReservations. */
	export interface ListReservationsResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string | null;

		/** The listed reservations. */
		reservations?: Array<Reservation>;
	}

	/** Response for ListReservations. */
	export interface ListReservationsResponseFormProperties {

		/** The next page token or empty if none. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListReservationsResponseFormGroup() {
		return new FormGroup<ListReservationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reservation describes the amount of a resource 'allotted' for a defined period of time. */
	export interface Reservation {

		/** The reservation name with the format: projects/{projectID}/locations/{location}/reservations/{reservationID} */
		name?: string | null;
		standard?: Standard;
	}

	/** A reservation describes the amount of a resource 'allotted' for a defined period of time. */
	export interface ReservationFormProperties {

		/** The reservation name with the format: projects/{projectID}/locations/{location}/reservations/{reservationID} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReservationFormGroup() {
		return new FormGroup<ReservationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Standard {
		capacityUnits?: StandardCapacityUnits | null;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		interval?: Interval;

		/** The resource type of the reservation. */
		resourceType?: string | null;

		/** The size of the reservation, in the units specified in the 'capacity_units' field. */
		size?: number | null;
		usage?: Usage;
	}
	export interface StandardFormProperties {
		capacityUnits: FormControl<StandardCapacityUnits | null | undefined>,

		/** The resource type of the reservation. */
		resourceType: FormControl<string | null | undefined>,

		/** The size of the reservation, in the units specified in the 'capacity_units' field. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateStandardFormGroup() {
		return new FormGroup<StandardFormProperties>({
			capacityUnits: new FormControl<StandardCapacityUnits | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StandardCapacityUnits { CAPACITY_UNITS_UNSPECIFIED = 0, CORES = 1, CHIPS = 2 }

	export interface Usage {

		/** The real-time value of usage within the reservation, with the unit specified in field capacity_units. */
		total?: string | null;
	}
	export interface UsageFormProperties {

		/** The real-time value of usage within the reservation, with the unit specified in field capacity_units. */
		total: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			total: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListRuntimeVersions. */
	export interface ListRuntimeVersionsResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string | null;

		/** The listed nodes. */
		runtimeVersions?: Array<RuntimeVersion>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListRuntimeVersions. */
	export interface ListRuntimeVersionsResponseFormProperties {

		/** The next page token or empty if none. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuntimeVersionsResponseFormGroup() {
		return new FormGroup<ListRuntimeVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A runtime version that a Node can be configured with. */
	export interface RuntimeVersion {

		/** The resource name. */
		name?: string | null;

		/** The runtime version. */
		version?: string | null;
	}

	/** A runtime version that a Node can be configured with. */
	export interface RuntimeVersionFormProperties {

		/** The resource name. */
		name: FormControl<string | null | undefined>,

		/** The runtime version. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeVersionFormGroup() {
		return new FormGroup<RuntimeVersionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing an Operation */
	export interface OperationMetadata {

		/** API version. */
		apiVersion?: string | null;

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested?: boolean | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Human-readable status of the operation, if any. */
		statusDetail?: string | null;

		/** Target of the operation - for example projects/project-1/connectivityTests/test-1 */
		target?: string | null;

		/** Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Metadata describing an Operation */
	export interface OperationMetadataFormProperties {

		/** API version. */
		apiVersion: FormControl<string | null | undefined>,

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Human-readable status of the operation, if any. */
		statusDetail: FormControl<string | null | undefined>,

		/** Target of the operation - for example projects/project-1/connectivityTests/test-1 */
		target: FormControl<string | null | undefined>,

		/** Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for ResetQueuedResource. */
	export interface ResetQueuedResourceRequest {
	}

	/** Request for ResetQueuedResource. */
	export interface ResetQueuedResourceRequestFormProperties {
	}
	export function CreateResetQueuedResourceRequestFormGroup() {
		return new FormGroup<ResetQueuedResourceRequestFormProperties>({
		});

	}


	/** Request for SimulateMaintenanceEvent. */
	export interface SimulateMaintenanceEventRequest {

		/** The 0-based worker ID. If it is empty, worker ID 0 will be selected for maintenance event simulation. A maintenance event will only be fired on the first specified worker ID. Future implementations may support firing on multiple workers. */
		workerIds?: Array<string>;
	}

	/** Request for SimulateMaintenanceEvent. */
	export interface SimulateMaintenanceEventRequestFormProperties {
	}
	export function CreateSimulateMaintenanceEventRequestFormGroup() {
		return new FormGroup<SimulateMaintenanceEventRequestFormProperties>({
		});

	}


	/** Request for StartNode. */
	export interface StartNodeRequest {
	}

	/** Request for StartNode. */
	export interface StartNodeRequestFormProperties {
	}
	export function CreateStartNodeRequestFormGroup() {
		return new FormGroup<StartNodeRequestFormProperties>({
		});

	}


	/** Request for StopNode. */
	export interface StopNodeRequest {
	}

	/** Request for StopNode. */
	export interface StopNodeRequestFormProperties {
	}
	export function CreateStopNodeRequestFormGroup() {
		return new FormGroup<StopNodeRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a QueuedResource TPU instance.
		 * Delete v2alpha1/{name}
		 * @param {string} name Required. The resource name.
		 * @param {boolean} force If set to true, all running nodes belonging to this queued resource will be deleted first and then the queued resource will be deleted. Otherwise (i.e. force=false), the queued resource will only be deleted if its nodes have already been deleted or the queued resource is in the ACCEPTED, FAILED, or SUSPENDED state.
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_queuedResources_delete(name: string, force: boolean | null | undefined, requestId: string | null | undefined): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets a runtime version.
		 * Get v2alpha1/{name}
		 * @param {string} name Required. The resource name.
		 * @return {RuntimeVersion} Successful response
		 */
		Tpu_projects_locations_runtimeVersions_get(name: string): Observable<RuntimeVersion> {
			return this.http.get<RuntimeVersion>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the configurations of a node.
		 * Patch v2alpha1/{name}
		 * @param {string} name Output only. Immutable. The name of the TPU.
		 * @param {string} updateMask Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_patch(name: string, updateMask: string | null | undefined, requestBody: Node): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2alpha1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Tpu_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2alpha1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Tpu_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v2alpha1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Tpu_projects_locations_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Retrieves the guest attributes for the node.
		 * Post v2alpha1/{name}:getGuestAttributes
		 * @param {string} name Required. The resource name.
		 * @return {GetGuestAttributesResponse} Successful response
		 */
		Tpu_projects_locations_nodes_getGuestAttributes(name: string, requestBody: GetGuestAttributesRequest): Observable<GetGuestAttributesResponse> {
			return this.http.post<GetGuestAttributesResponse>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':getGuestAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resets a QueuedResource TPU instance
		 * Post v2alpha1/{name}:reset
		 * @param {string} name Required. The name of the queued resource.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_queuedResources_reset(name: string, requestBody: ResetQueuedResourceRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':reset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Simulates a maintenance event.
		 * Post v2alpha1/{name}:simulateMaintenanceEvent
		 * @param {string} name Required. The resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_simulateMaintenanceEvent(name: string, requestBody: SimulateMaintenanceEventRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':simulateMaintenanceEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a node.
		 * Post v2alpha1/{name}:start
		 * @param {string} name Required. The resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_start(name: string, requestBody: StartNodeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a node. This operation is only available with single TPU nodes.
		 * Post v2alpha1/{name}:stop
		 * @param {string} name Required. The resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_stop(name: string, requestBody: StopNodeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists accelerator types supported by this API.
		 * Get v2alpha1/{parent}/acceleratorTypes
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListAcceleratorTypesResponse} Successful response
		 */
		Tpu_projects_locations_acceleratorTypes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAcceleratorTypesResponse> {
			return this.http.get<ListAcceleratorTypesResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/acceleratorTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists nodes.
		 * Get v2alpha1/{parent}/nodes
		 * @param {string} parent Required. The parent resource name.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListNodesResponse} Successful response
		 */
		Tpu_projects_locations_nodes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a node.
		 * Post v2alpha1/{parent}/nodes
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} nodeId The unqualified resource name.
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_create(parent: string, nodeId: string | null | undefined, requestId: string | null | undefined, requestBody: Node): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&nodeId=' + (nodeId == null ? '' : encodeURIComponent(nodeId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists queued resources.
		 * Get v2alpha1/{parent}/queuedResources
		 * @param {string} parent Required. The parent resource name.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListQueuedResourcesResponse} Successful response
		 */
		Tpu_projects_locations_queuedResources_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListQueuedResourcesResponse> {
			return this.http.get<ListQueuedResourcesResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queuedResources&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a QueuedResource TPU instance.
		 * Post v2alpha1/{parent}/queuedResources
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} queuedResourceId The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format.
		 * @param {string} requestId Idempotent request UUID.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_queuedResources_create(parent: string, queuedResourceId: string | null | undefined, requestId: string | null | undefined, requestBody: QueuedResource): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/queuedResources&queuedResourceId=' + (queuedResourceId == null ? '' : encodeURIComponent(queuedResourceId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the reservations for the given project in the given location.
		 * Get v2alpha1/{parent}/reservations
		 * @param {string} parent Required. The parent for reservations.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListReservationsResponse} Successful response
		 */
		Tpu_projects_locations_reservations_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListReservationsResponse> {
			return this.http.get<ListReservationsResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reservations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists runtime versions supported by this API.
		 * Get v2alpha1/{parent}/runtimeVersions
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListRuntimeVersionsResponse} Successful response
		 */
		Tpu_projects_locations_runtimeVersions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRuntimeVersionsResponse> {
			return this.http.get<ListRuntimeVersionsResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generates the Cloud TPU service identity for the project.
		 * Post v2alpha1/{parent}:generateServiceIdentity
		 * @param {string} parent Required. The parent resource name.
		 * @return {GenerateServiceIdentityResponse} Successful response
		 */
		Tpu_projects_locations_generateServiceIdentity(parent: string, requestBody: GenerateServiceIdentityRequest): Observable<GenerateServiceIdentityResponse> {
			return this.http.post<GenerateServiceIdentityResponse>(this.baseUri + 'v2alpha1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':generateServiceIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

