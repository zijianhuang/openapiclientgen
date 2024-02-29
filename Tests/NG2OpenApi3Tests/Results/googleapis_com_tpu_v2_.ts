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

	export enum AcceleratorConfigType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', V2 = 'V2', V3 = 'V3', V4 = 'V4' }


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

	export enum AttachedDiskMode { DISK_MODE_UNSPECIFIED = 'DISK_MODE_UNSPECIFIED', READ_WRITE = 'READ_WRITE', READ_ONLY = 'READ_ONLY' }


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

		/** Optional. The type of hardware accelerators associated with this node. */
		acceleratorType?: string | null;

		/** Output only. The API version that created this Node. */
		apiVersion?: NodeApiVersion | null;

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

		/** Optional. The type of hardware accelerators associated with this node. */
		acceleratorType: FormControl<string | null | undefined>,

		/** Output only. The API version that created this Node. */
		apiVersion: FormControl<NodeApiVersion | null | undefined>,

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

	export enum NodeApiVersion { API_VERSION_UNSPECIFIED = 'API_VERSION_UNSPECIFIED', V1_ALPHA1 = 'V1_ALPHA1', V1 = 'V1', V2_ALPHA1 = 'V2_ALPHA1', V2 = 'V2' }

	export enum NodeHealth { HEALTH_UNSPECIFIED = 'HEALTH_UNSPECIFIED', HEALTHY = 'HEALTHY', TIMEOUT = 'TIMEOUT', UNHEALTHY_TENSORFLOW = 'UNHEALTHY_TENSORFLOW', UNHEALTHY_MAINTENANCE = 'UNHEALTHY_MAINTENANCE' }


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

		/**
		 * The port of this network endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;
	}

	/** A network endpoint over which a TPU worker can be reached. */
	export interface NetworkEndpointFormProperties {

		/** The internal IP address of this network endpoint. */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * The port of this network endpoint.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

	export enum NodeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', RESTARTING = 'RESTARTING', REIMAGING = 'REIMAGING', DELETING = 'DELETING', REPAIRING = 'REPAIRING', STOPPED = 'STOPPED', STOPPING = 'STOPPING', STARTING = 'STARTING', PREEMPTED = 'PREEMPTED', TERMINATED = 'TERMINATED', HIDING = 'HIDING', HIDDEN = 'HIDDEN', UNHIDING = 'UNHIDING' }


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

	export enum SymptomSymptomType { SYMPTOM_TYPE_UNSPECIFIED = 'SYMPTOM_TYPE_UNSPECIFIED', LOW_MEMORY = 'LOW_MEMORY', OUT_OF_MEMORY = 'OUT_OF_MEMORY', EXECUTE_TIMED_OUT = 'EXECUTE_TIMED_OUT', MESH_BUILD_FAIL = 'MESH_BUILD_FAIL', HBM_OUT_OF_MEMORY = 'HBM_OUT_OF_MEMORY', PROJECT_ABUSE = 'PROJECT_ABUSE' }


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


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v2/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Tpu_projects_locations_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a runtime version.
		 * Get v2/{name}
		 * @param {string} name Required. The resource name.
		 * @return {RuntimeVersion} Successful response
		 */
		Tpu_projects_locations_runtimeVersions_get(name: string): Observable<RuntimeVersion> {
			return this.http.get<RuntimeVersion>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the configurations of a node.
		 * Patch v2/{name}
		 * @param {string} name Output only. Immutable. The name of the TPU.
		 * @param {string} updateMask Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_patch(name: string, updateMask: string | null | undefined, requestBody: Node): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v2/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Tpu_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Tpu_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v2/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Tpu_projects_locations_operations_cancel(name: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Retrieves the guest attributes for the node.
		 * Post v2/{name}:getGuestAttributes
		 * @param {string} name Required. The resource name.
		 * @return {GetGuestAttributesResponse} Successful response
		 */
		Tpu_projects_locations_nodes_getGuestAttributes(name: string, requestBody: GetGuestAttributesRequest): Observable<GetGuestAttributesResponse> {
			return this.http.post<GetGuestAttributesResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':getGuestAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a node.
		 * Post v2/{name}:start
		 * @param {string} name Required. The resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_start(name: string, requestBody: StartNodeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a node. This operation is only available with single TPU nodes.
		 * Post v2/{name}:stop
		 * @param {string} name Required. The resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_stop(name: string, requestBody: StopNodeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists accelerator types supported by this API.
		 * Get v2/{parent}/acceleratorTypes
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListAcceleratorTypesResponse} Successful response
		 */
		Tpu_projects_locations_acceleratorTypes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAcceleratorTypesResponse> {
			return this.http.get<ListAcceleratorTypesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/acceleratorTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists nodes.
		 * Get v2/{parent}/nodes
		 * @param {string} parent Required. The parent resource name.
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListNodesResponse} Successful response
		 */
		Tpu_projects_locations_nodes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNodesResponse> {
			return this.http.get<ListNodesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a node.
		 * Post v2/{parent}/nodes
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} nodeId The unqualified resource name.
		 * @return {Operation} Successful response
		 */
		Tpu_projects_locations_nodes_create(parent: string, nodeId: string | null | undefined, requestBody: Node): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&nodeId=' + (nodeId == null ? '' : encodeURIComponent(nodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists runtime versions supported by this API.
		 * Get v2/{parent}/runtimeVersions
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListRuntimeVersionsResponse} Successful response
		 */
		Tpu_projects_locations_runtimeVersions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRuntimeVersionsResponse> {
			return this.http.get<ListRuntimeVersionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Generates the Cloud TPU service identity for the project.
		 * Post v2/{parent}:generateServiceIdentity
		 * @param {string} parent Required. The parent resource name.
		 * @return {GenerateServiceIdentityResponse} Successful response
		 */
		Tpu_projects_locations_generateServiceIdentity(parent: string, requestBody: GenerateServiceIdentityRequest): Observable<GenerateServiceIdentityResponse> {
			return this.http.post<GenerateServiceIdentityResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + ':generateServiceIdentity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

