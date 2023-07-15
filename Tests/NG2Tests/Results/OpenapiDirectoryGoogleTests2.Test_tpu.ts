import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** A accelerator type that a Node can be configured with. */
	export interface AcceleratorType {

		/** The resource name. */
		name?: string;

		/** the accelerator type. */
		type?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** Response for ListAcceleratorTypes. */
	export interface ListAcceleratorTypesResponse {

		/** The listed nodes. */
		acceleratorTypes?: Array<AcceleratorType>;

		/** The next page token or empty if none. */
		nextPageToken?: string;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string;
	}


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string;

		/**
		 * Service-specific metadata. For example the available capacity at the given
		 * location.
		 */
		metadata?: {[id: string]: any };

		/**
		 * Resource name for the location, which may vary between implementations.
		 * For example: `"projects/example-project/locations/us-east1"`
		 */
		name?: string;
	}


	/** Response for ListNodes. */
	export interface ListNodesResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string;

		/** The listed nodes. */
		nodes?: Array<Node>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}


	/** A TPU instance. */
	export interface Node {

		/**
		 * The type of hardware accelerators associated with this node.
		 * Required.
		 */
		acceleratorType?: string;

		/**
		 * The CIDR block that the TPU node will use when selecting an IP address.
		 * This CIDR block must be a /29 block; the Compute Engine networks API
		 * forbids a smaller block, and using a larger block would be wasteful (a
		 * node can only consume one IP address). Errors will occur if the CIDR block
		 * has already been used for a currently existing TPU node, the CIDR block
		 * conflicts with any subnetworks in the user's provided network, or the
		 * provided network is peered with another network that is using that CIDR
		 * block.
		 */
		cidrBlock?: string;

		/** Output only. The time when the node was created. */
		createTime?: string;

		/** The user-supplied description of the TPU. Maximum of 512 characters. */
		description?: string;

		/** The health status of the TPU node. */
		health?: NodeHealth;

		/**
		 * Output only. If this field is populated, it contains a description of why the TPU Node
		 * is unhealthy.
		 */
		healthDescription?: string;

		/**
		 * Output only. DEPRECATED! Use network_endpoints instead.
		 * The network address for the TPU Node as visible to Compute Engine
		 * instances.
		 */
		ipAddress?: string;

		/** Resource labels to represent user-provided metadata. */
		labels?: {[id: string]: string };

		/** Output only. The immutable name of the TPU */
		name?: string;

		/**
		 * The name of a network they wish to peer the TPU node to. It must be a
		 * preexisting Compute Engine network inside of the project on which this API
		 * has been activated. If none is provided, "default" will be used.
		 */
		network?: string;

		/**
		 * Output only. The network endpoints where TPU workers can be accessed and
		 * sent work. It is recommended that Tensorflow clients of the node reach out
		 * to the 0th entry in this map first.
		 */
		networkEndpoints?: Array<NetworkEndpoint>;

		/**
		 * Output only. DEPRECATED! Use network_endpoints instead.
		 * The network port for the TPU Node as visible to Compute Engine instances.
		 */
		port?: string;
		schedulingConfig?: SchedulingConfig;

		/**
		 * Output only. The service account used to run the tensor flow services within the node.
		 * To share resources, including Google Cloud Storage data, with the
		 * Tensorflow job running in the Node, this account must have permissions to
		 * that data.
		 */
		serviceAccount?: string;

		/** Output only. The current state for the TPU Node. */
		state?: NodeState;

		/**
		 * The version of Tensorflow running in the Node.
		 * Required.
		 */
		tensorflowVersion?: string;
	}

	export enum NodeHealth { HEALTH_UNSPECIFIED = 0, HEALTHY = 1, DEPRECATED_UNHEALTHY = 2, TIMEOUT = 3, UNHEALTHY_TENSORFLOW = 4, UNHEALTHY_MAINTENANCE = 5 }


	/** A network endpoint over which a TPU worker can be reached. */
	export interface NetworkEndpoint {

		/** The IP address of this network endpoint. */
		ipAddress?: string;

		/** The port of this network endpoint. */
		port?: number;
	}

	export interface SchedulingConfig {
		preemptible?: boolean;

		/** Whether the node is created under a reservation. */
		reserved?: boolean;
	}

	export enum NodeState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, RESTARTING = 3, REIMAGING = 4, DELETING = 5, REPAIRING = 6, STOPPED = 7, STOPPING = 8, STARTING = 9, PREEMPTED = 10, TERMINATED = 11, HIDING = 12, HIDDEN = 13, UNHIDING = 14 }


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any };
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}


	/** Response for ListTensorFlowVersions. */
	export interface ListTensorFlowVersionsResponse {

		/** The next page token or empty if none. */
		nextPageToken?: string;

		/** The listed nodes. */
		tensorflowVersions?: Array<TensorFlowVersion>;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}


	/** A tensorflow version that a Node can be configured with. */
	export interface TensorFlowVersion {

		/** The resource name. */
		name?: string;

		/** the tensorflow version. */
		version?: string;
	}


	/** Represents the metadata of the long-running operation. */
	export interface OperationMetadata {

		/** [Output only] API version used to start the operation. */
		apiVersion?: string;

		/**
		 * [Output only] Identifies whether the user has requested cancellation
		 * of the operation. Operations that have successfully been cancelled
		 * have Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 */
		cancelRequested?: boolean;

		/** [Output only] The time the operation was created. */
		createTime?: string;

		/** [Output only] The time the operation finished running. */
		endTime?: string;

		/** [Output only] Human-readable status of the operation, if any. */
		statusDetail?: string;

		/** [Output only] Server-defined resource path for the target of the operation. */
		target?: string;

		/** [Output only] Name of the verb executed by the operation. */
		verb?: string;
	}


	/** Request for ReimageNode. */
	export interface ReimageNodeRequest {

		/** The version for reimage to create. */
		tensorflowVersion?: string;
	}


	/** Request for StartNode. */
	export interface StartNodeRequest {
	}


	/** Request for StopNode. */
	export interface StopNodeRequest {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a node.
		 * Delete v1/{name}
		 * @param {string} name The resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the details of a node.
		 * Get v1/{name}
		 * @param {string} name The resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the
		 * server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * NOTE: the `name` binding allows API services to override the binding
		 * to use different resource name schemes, such as `users/operations`. To
		 * override the binding, API services can add a binding such as
		 * `"/v1/{name=users/*}/operations"` to their service configuration.
		 * For backwards compatibility, the default name includes the operations
		 * collection id, however overriding users must ensure the name binding
		 * is the parent resource, without the operations collection id.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_operations_list(name: string, filter: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.  The server
		 * makes a best effort to cancel the operation, but success is not
		 * guaranteed.  If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
		 * Operations.GetOperation or
		 * other methods to check whether the cancellation succeeded or whether the
		 * operation completed despite cancellation. On successful cancellation,
		 * the operation is not deleted; instead, it becomes an operation with
		 * an Operation.error value with a google.rpc.Status.code of 1,
		 * corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reimages a node's OS.
		 * Post v1/{name}:reimage
		 * @param {string} name The resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_reimage(name: string, requestBody: ReimageNodeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':reimage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts a node.
		 * Post v1/{name}:start
		 * @param {string} name The resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_start(name: string, requestBody: StartNodeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a node.
		 * Post v1/{name}:stop
		 * @param {string} name The resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_stop(name: string, requestBody: StopNodeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists accelerator types supported by this API.
		 * Get v1/{parent}/acceleratorTypes
		 * @param {string} parent The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_acceleratorTypes_list(parent: string, filter: string, orderBy: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/acceleratorTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists nodes.
		 * Get v1/{parent}/nodes
		 * @param {string} parent The parent resource name.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_list(parent: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a node.
		 * Post v1/{parent}/nodes
		 * @param {string} parent The parent resource name.
		 * @param {string} nodeId The unqualified resource name.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_nodes_create(parent: string, nodeId: string, requestBody: Node): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/nodes&nodeId=' + (nodeId == null ? '' : encodeURIComponent(nodeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List TensorFlow versions supported by this API.
		 * Get v1/{parent}/tensorflowVersions
		 * @param {string} parent The parent resource name.
		 * @param {string} filter List filter.
		 * @param {string} orderBy Sort results.
		 * @param {number} pageSize The maximum number of items to return.
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {void} Successful response
		 */
		Tpu_projects_locations_tensorflowVersions_list(parent: string, filter: string, orderBy: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tensorflowVersions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

