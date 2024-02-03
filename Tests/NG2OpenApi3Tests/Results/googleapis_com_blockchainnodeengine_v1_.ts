import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A representation of a blockchain node. */
	export interface BlockchainNode {

		/** Immutable. The blockchain type of the node. */
		blockchainType?: BlockchainNodeBlockchainType | null;

		/** The connection information through which to interact with a blockchain node. */
		connectionInfo?: ConnectionInfo;

		/** Output only. The timestamp at which the blockchain node was first created. */
		createTime?: string | null;

		/** Ethereum-specific blockchain node details. */
		ethereumDetails?: EthereumDetails;

		/** User-provided key-value pairs. */
		labels?: {[id: string]: string };

		/** Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
		name?: string | null;

		/** Output only. A status representing the state of the node. */
		state?: BlockchainNodeState | null;

		/** Output only. The timestamp at which the blockchain node was last updated. */
		updateTime?: string | null;
	}

	/** A representation of a blockchain node. */
	export interface BlockchainNodeFormProperties {

		/** Immutable. The blockchain type of the node. */
		blockchainType: FormControl<BlockchainNodeBlockchainType | null | undefined>,

		/** Output only. The timestamp at which the blockchain node was first created. */
		createTime: FormControl<string | null | undefined>,

		/** User-provided key-value pairs. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`. */
		name: FormControl<string | null | undefined>,

		/** Output only. A status representing the state of the node. */
		state: FormControl<BlockchainNodeState | null | undefined>,

		/** Output only. The timestamp at which the blockchain node was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateBlockchainNodeFormGroup() {
		return new FormGroup<BlockchainNodeFormProperties>({
			blockchainType: new FormControl<BlockchainNodeBlockchainType | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BlockchainNodeState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlockchainNodeBlockchainType { BLOCKCHAIN_TYPE_UNSPECIFIED = 'BLOCKCHAIN_TYPE_UNSPECIFIED', ETHEREUM = 'ETHEREUM' }


	/** The connection information through which to interact with a blockchain node. */
	export interface ConnectionInfo {

		/** Contains endpoint information through which to interact with a blockchain node. */
		endpointInfo?: EndpointInfo;

		/** Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
		serviceAttachment?: string | null;
	}

	/** The connection information through which to interact with a blockchain node. */
	export interface ConnectionInfoFormProperties {

		/** Output only. A service attachment that exposes a node, and has the following format: projects/{project}/regions/{region}/serviceAttachments/{service_attachment_name} */
		serviceAttachment: FormControl<string | null | undefined>,
	}
	export function CreateConnectionInfoFormGroup() {
		return new FormGroup<ConnectionInfoFormProperties>({
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains endpoint information through which to interact with a blockchain node. */
	export interface EndpointInfo {

		/** Output only. The assigned URL for the node JSON-RPC API endpoint. */
		jsonRpcApiEndpoint?: string | null;

		/** Output only. The assigned URL for the node WebSockets API endpoint. */
		websocketsApiEndpoint?: string | null;
	}

	/** Contains endpoint information through which to interact with a blockchain node. */
	export interface EndpointInfoFormProperties {

		/** Output only. The assigned URL for the node JSON-RPC API endpoint. */
		jsonRpcApiEndpoint: FormControl<string | null | undefined>,

		/** Output only. The assigned URL for the node WebSockets API endpoint. */
		websocketsApiEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateEndpointInfoFormGroup() {
		return new FormGroup<EndpointInfoFormProperties>({
			jsonRpcApiEndpoint: new FormControl<string | null | undefined>(undefined),
			websocketsApiEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ethereum-specific blockchain node details. */
	export interface EthereumDetails {

		/** Contains endpoint information specific to Ethereum nodes. */
		additionalEndpoints?: EthereumEndpoints;

		/** Immutable. Enables JSON-RPC access to functions in the `admin` namespace. Defaults to `false`. */
		apiEnableAdmin?: boolean | null;

		/** Immutable. Enables JSON-RPC access to functions in the `debug` namespace. Defaults to `false`. */
		apiEnableDebug?: boolean | null;

		/** Immutable. The consensus client. */
		consensusClient?: EthereumDetailsConsensusClient | null;

		/** Immutable. The execution client */
		executionClient?: EthereumDetailsExecutionClient | null;

		/** Options for the Geth execution client. See [Command-line Options](https://geth.ethereum.org/docs/fundamentals/command-line-options) for more details. */
		gethDetails?: GethDetails;

		/** Immutable. The Ethereum environment being accessed. */
		network?: EthereumDetailsNetwork | null;

		/** Immutable. The type of Ethereum node. */
		nodeType?: EthereumDetailsNodeType | null;

		/** Configuration for validator-related parameters on the beacon client, and for any GCP-managed validator client. */
		validatorConfig?: ValidatorConfig;
	}

	/** Ethereum-specific blockchain node details. */
	export interface EthereumDetailsFormProperties {

		/** Immutable. Enables JSON-RPC access to functions in the `admin` namespace. Defaults to `false`. */
		apiEnableAdmin: FormControl<boolean | null | undefined>,

		/** Immutable. Enables JSON-RPC access to functions in the `debug` namespace. Defaults to `false`. */
		apiEnableDebug: FormControl<boolean | null | undefined>,

		/** Immutable. The consensus client. */
		consensusClient: FormControl<EthereumDetailsConsensusClient | null | undefined>,

		/** Immutable. The execution client */
		executionClient: FormControl<EthereumDetailsExecutionClient | null | undefined>,

		/** Immutable. The Ethereum environment being accessed. */
		network: FormControl<EthereumDetailsNetwork | null | undefined>,

		/** Immutable. The type of Ethereum node. */
		nodeType: FormControl<EthereumDetailsNodeType | null | undefined>,
	}
	export function CreateEthereumDetailsFormGroup() {
		return new FormGroup<EthereumDetailsFormProperties>({
			apiEnableAdmin: new FormControl<boolean | null | undefined>(undefined),
			apiEnableDebug: new FormControl<boolean | null | undefined>(undefined),
			consensusClient: new FormControl<EthereumDetailsConsensusClient | null | undefined>(undefined),
			executionClient: new FormControl<EthereumDetailsExecutionClient | null | undefined>(undefined),
			network: new FormControl<EthereumDetailsNetwork | null | undefined>(undefined),
			nodeType: new FormControl<EthereumDetailsNodeType | null | undefined>(undefined),
		});

	}


	/** Contains endpoint information specific to Ethereum nodes. */
	export interface EthereumEndpoints {

		/** Output only. The assigned URL for the node's Beacon API endpoint. */
		beaconApiEndpoint?: string | null;

		/** Output only. The assigned URL for the node's Beacon Prometheus metrics endpoint. See [Prometheus Metrics](https://lighthouse-book.sigmaprime.io/advanced_metrics.html) for more details. */
		beaconPrometheusMetricsApiEndpoint?: string | null;

		/** Output only. The assigned URL for the node's execution client's Prometheus metrics endpoint. */
		executionClientPrometheusMetricsApiEndpoint?: string | null;
	}

	/** Contains endpoint information specific to Ethereum nodes. */
	export interface EthereumEndpointsFormProperties {

		/** Output only. The assigned URL for the node's Beacon API endpoint. */
		beaconApiEndpoint: FormControl<string | null | undefined>,

		/** Output only. The assigned URL for the node's Beacon Prometheus metrics endpoint. See [Prometheus Metrics](https://lighthouse-book.sigmaprime.io/advanced_metrics.html) for more details. */
		beaconPrometheusMetricsApiEndpoint: FormControl<string | null | undefined>,

		/** Output only. The assigned URL for the node's execution client's Prometheus metrics endpoint. */
		executionClientPrometheusMetricsApiEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateEthereumEndpointsFormGroup() {
		return new FormGroup<EthereumEndpointsFormProperties>({
			beaconApiEndpoint: new FormControl<string | null | undefined>(undefined),
			beaconPrometheusMetricsApiEndpoint: new FormControl<string | null | undefined>(undefined),
			executionClientPrometheusMetricsApiEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EthereumDetailsConsensusClient { CONSENSUS_CLIENT_UNSPECIFIED = 'CONSENSUS_CLIENT_UNSPECIFIED', LIGHTHOUSE = 'LIGHTHOUSE', ERIGON_EMBEDDED_CONSENSUS_LAYER = 'ERIGON_EMBEDDED_CONSENSUS_LAYER' }

	export enum EthereumDetailsExecutionClient { EXECUTION_CLIENT_UNSPECIFIED = 'EXECUTION_CLIENT_UNSPECIFIED', GETH = 'GETH', ERIGON = 'ERIGON' }


	/** Options for the Geth execution client. See [Command-line Options](https://geth.ethereum.org/docs/fundamentals/command-line-options) for more details. */
	export interface GethDetails {

		/** Immutable. Blockchain garbage collection mode. */
		garbageCollectionMode?: GethDetailsGarbageCollectionMode | null;
	}

	/** Options for the Geth execution client. See [Command-line Options](https://geth.ethereum.org/docs/fundamentals/command-line-options) for more details. */
	export interface GethDetailsFormProperties {

		/** Immutable. Blockchain garbage collection mode. */
		garbageCollectionMode: FormControl<GethDetailsGarbageCollectionMode | null | undefined>,
	}
	export function CreateGethDetailsFormGroup() {
		return new FormGroup<GethDetailsFormProperties>({
			garbageCollectionMode: new FormControl<GethDetailsGarbageCollectionMode | null | undefined>(undefined),
		});

	}

	export enum GethDetailsGarbageCollectionMode { GARBAGE_COLLECTION_MODE_UNSPECIFIED = 'GARBAGE_COLLECTION_MODE_UNSPECIFIED', FULL = 'FULL', ARCHIVE = 'ARCHIVE' }

	export enum EthereumDetailsNetwork { NETWORK_UNSPECIFIED = 'NETWORK_UNSPECIFIED', MAINNET = 'MAINNET', TESTNET_GOERLI_PRATER = 'TESTNET_GOERLI_PRATER', TESTNET_SEPOLIA = 'TESTNET_SEPOLIA', TESTNET_HOLESKY = 'TESTNET_HOLESKY' }

	export enum EthereumDetailsNodeType { NODE_TYPE_UNSPECIFIED = 'NODE_TYPE_UNSPECIFIED', LIGHT = 'LIGHT', FULL = 'FULL', ARCHIVE = 'ARCHIVE' }


	/** Configuration for validator-related parameters on the beacon client, and for any GCP-managed validator client. */
	export interface ValidatorConfig {

		/** URLs for MEV-relay services to use for block building. When set, a GCP-managed MEV-boost service is configured on the beacon client. */
		mevRelayUrls?: Array<string>;
	}

	/** Configuration for validator-related parameters on the beacon client, and for any GCP-managed validator client. */
	export interface ValidatorConfigFormProperties {
	}
	export function CreateValidatorConfigFormGroup() {
		return new FormGroup<ValidatorConfigFormProperties>({
		});

	}

	export enum BlockchainNodeState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', DELETING = 'DELETING', RUNNING = 'RUNNING', ERROR = 'ERROR', UPDATING = 'UPDATING', REPAIRING = 'REPAIRING', RECONCILING = 'RECONCILING' }


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}


	/** Message for response to listing blockchain nodes. */
	export interface ListBlockchainNodesResponse {

		/** The list of nodes */
		blockchainNodes?: Array<BlockchainNode>;

		/** A token identifying a page of results the server should return. */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Message for response to listing blockchain nodes. */
	export interface ListBlockchainNodesResponseFormProperties {

		/** A token identifying a page of results the server should return. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBlockchainNodesResponseFormGroup() {
		return new FormGroup<ListBlockchainNodesResponseFormProperties>({
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


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** Output only. API version used to start the operation. */
		apiVersion?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have `Operation.error` value with a `google.rpc.Status.code` of `1`, corresponding to `Code.CANCELLED`. */
		requestedCancellation?: boolean | null;

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage?: string | null;

		/** Output only. Server-defined resource path for the target of the operation. */
		target?: string | null;

		/** Output only. Name of the verb executed by the operation. */
		verb?: string | null;
	}

	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. API version used to start the operation. */
		apiVersion: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Identifies whether the user has requested cancellation of the operation. Operations that have been cancelled successfully have `Operation.error` value with a `google.rpc.Status.code` of `1`, corresponding to `Code.CANCELLED`. */
		requestedCancellation: FormControl<boolean | null | undefined>,

		/** Output only. Human-readable status of the operation, if any. */
		statusMessage: FormControl<string | null | undefined>,

		/** Output only. Server-defined resource path for the target of the operation. */
		target: FormControl<string | null | undefined>,

		/** Output only. Name of the verb executed by the operation. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			requestedCancellation: new FormControl<boolean | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Blockchainnodeengine_projects_locations_operations_delete(name: string, requestId: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Blockchainnodeengine_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates the parameters of a single blockchain node.
		 * Patch v1/{name}
		 * @param {string} name Output only. The fully qualified name of the blockchain node. e.g. `projects/my-project/locations/us-central1/blockchainNodes/my-node`.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @param {string} updateMask Required. Field mask is used to specify the fields to be overwritten in the Blockchain node resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
		 * @return {Operation} Successful response
		 */
		Blockchainnodeengine_projects_locations_blockchainNodes_patch(name: string, requestId: string | null | undefined, updateMask: string | null | undefined, requestBody: BlockchainNode): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Blockchainnodeengine_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Blockchainnodeengine_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Blockchainnodeengine_projects_locations_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists blockchain nodes in a given project and location.
		 * Get v1/{parent}/blockchainNodes
		 * @param {string} parent Required. Parent value for `ListNodesRequest`.
		 * @param {string} filter Filtering results.
		 * @param {string} orderBy Hint for how to order the results.
		 * @param {number} pageSize Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * @return {ListBlockchainNodesResponse} Successful response
		 */
		Blockchainnodeengine_projects_locations_blockchainNodes_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBlockchainNodesResponse> {
			return this.http.get<ListBlockchainNodesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/blockchainNodes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new blockchain node in a given project and location.
		 * Post v1/{parent}/blockchainNodes
		 * @param {string} parent Required. Value for parent.
		 * @param {string} blockchainNodeId Required. ID of the requesting object.
		 * @param {string} requestId Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
		 * @return {Operation} Successful response
		 */
		Blockchainnodeengine_projects_locations_blockchainNodes_create(parent: string, blockchainNodeId: string | null | undefined, requestId: string | null | undefined, requestBody: BlockchainNode): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/blockchainNodes&blockchainNodeId=' + (blockchainNodeId == null ? '' : encodeURIComponent(blockchainNodeId)) + '&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

