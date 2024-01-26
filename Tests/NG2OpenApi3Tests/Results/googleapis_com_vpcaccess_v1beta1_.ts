import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Definition of a Serverless VPC Access connector. */
	export interface Connector {

		/** Output only. List of projects using the connector. */
		connectedProjects?: Array<string>;

		/** Output only. The creation time of the connector. */
		createTime?: string | null;

		/** The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`. */
		ipCidrRange?: string | null;

		/** Output only. The last restart time of the connector. */
		lastRestartTime?: string | null;

		/** Machine type of VM Instance underlying connector. Default is e2-micro */
		machineType?: string | null;

		/** Maximum value of instances in autoscaling group underlying the connector. */
		maxInstances?: number | null;

		/** Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of `max-throughput` is discouraged in favor of `max-instances`. */
		maxThroughput?: number | null;

		/** Minimum value of instances in autoscaling group underlying the connector. */
		minInstances?: number | null;

		/** Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of `min-throughput` is discouraged in favor of `min-instances`. */
		minThroughput?: number | null;

		/** The resource name in the format `projects/locations/connectors/*`. */
		name?: string | null;

		/** Name of a VPC network. */
		network?: string | null;

		/** Output only. State of the VPC access connector. */
		state?: ConnectorState | null;

		/** The subnet in which to house the connector */
		subnet?: Subnet;
	}

	/** Definition of a Serverless VPC Access connector. */
	export interface ConnectorFormProperties {

		/** Output only. The creation time of the connector. */
		createTime: FormControl<string | null | undefined>,

		/** The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`. */
		ipCidrRange: FormControl<string | null | undefined>,

		/** Output only. The last restart time of the connector. */
		lastRestartTime: FormControl<string | null | undefined>,

		/** Machine type of VM Instance underlying connector. Default is e2-micro */
		machineType: FormControl<string | null | undefined>,

		/** Maximum value of instances in autoscaling group underlying the connector. */
		maxInstances: FormControl<number | null | undefined>,

		/** Maximum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by --min-throughput. If both max-throughput and max-instances are provided, max-instances takes precedence over max-throughput. The use of `max-throughput` is discouraged in favor of `max-instances`. */
		maxThroughput: FormControl<number | null | undefined>,

		/** Minimum value of instances in autoscaling group underlying the connector. */
		minInstances: FormControl<number | null | undefined>,

		/** Minimum throughput of the connector in Mbps. Refers to the expected throughput when using an `e2-micro` machine type. Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by --max-throughput. If both min-throughput and min-instances are provided, min-instances takes precedence over min-throughput. The use of `min-throughput` is discouraged in favor of `min-instances`. */
		minThroughput: FormControl<number | null | undefined>,

		/** The resource name in the format `projects/locations/connectors/*`. */
		name: FormControl<string | null | undefined>,

		/** Name of a VPC network. */
		network: FormControl<string | null | undefined>,

		/** Output only. State of the VPC access connector. */
		state: FormControl<ConnectorState | null | undefined>,
	}
	export function CreateConnectorFormGroup() {
		return new FormGroup<ConnectorFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			ipCidrRange: new FormControl<string | null | undefined>(undefined),
			lastRestartTime: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			maxInstances: new FormControl<number | null | undefined>(undefined),
			maxThroughput: new FormControl<number | null | undefined>(undefined),
			minInstances: new FormControl<number | null | undefined>(undefined),
			minThroughput: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ConnectorState | null | undefined>(undefined),
		});

	}

	export enum ConnectorState { STATE_UNSPECIFIED = 0, READY = 1, CREATING = 2, DELETING = 3, ERROR = 4, UPDATING = 5 }


	/** The subnet in which to house the connector */
	export interface Subnet {

		/** Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName} */
		name?: string | null;

		/** Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued. */
		projectId?: string | null;
	}

	/** The subnet in which to house the connector */
	export interface SubnetFormProperties {

		/** Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName} */
		name: FormControl<string | null | undefined>,

		/** Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateSubnetFormGroup() {
		return new FormGroup<SubnetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing Serverless VPC Access connectors. */
	export interface ListConnectorsResponse {

		/** List of Serverless VPC Access connectors. */
		connectors?: Array<Connector>;

		/** Continuation token. */
		nextPageToken?: string | null;
	}

	/** Response for listing Serverless VPC Access connectors. */
	export interface ListConnectorsResponseFormProperties {

		/** Continuation token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectorsResponseFormGroup() {
		return new FormGroup<ListConnectorsResponseFormProperties>({
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


	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadata {

		/** Output only. Time when the operation was created. */
		createTime?: string | null;

		/** Output only. Time when the operation completed. */
		endTime?: string | null;

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1.Connectors.CreateConnector. */
		method?: string | null;

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target?: string | null;
	}

	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadataFormProperties {

		/** Output only. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the operation completed. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1.Connectors.CreateConnector. */
		method: FormControl<string | null | undefined>,

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadataV1Alpha1 {

		/** Output only. Time when the operation completed. */
		endTime?: string | null;

		/** Output only. Time when the operation was created. */
		insertTime?: string | null;

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1alpha1.Connectors.CreateConnector. */
		method?: string | null;

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target?: string | null;
	}

	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadataV1Alpha1FormProperties {

		/** Output only. Time when the operation completed. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Time when the operation was created. */
		insertTime: FormControl<string | null | undefined>,

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1alpha1.Connectors.CreateConnector. */
		method: FormControl<string | null | undefined>,

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataV1Alpha1FormGroup() {
		return new FormGroup<OperationMetadataV1Alpha1FormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			insertTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadataV1Beta1 {

		/** Output only. Time when the operation was created. */
		createTime?: string | null;

		/** Output only. Time when the operation completed. */
		endTime?: string | null;

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1beta1.Connectors.CreateConnector. */
		method?: string | null;

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target?: string | null;
	}

	/** Metadata for google.longrunning.Operation. */
	export interface OperationMetadataV1Beta1FormProperties {

		/** Output only. Time when the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the operation completed. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Method that initiated the operation e.g. google.cloud.vpcaccess.v1beta1.Connectors.CreateConnector. */
		method: FormControl<string | null | undefined>,

		/** Output only. Name of the resource that this operation is acting on e.g. projects/my-project/locations/us-central1/connectors/v1. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataV1Beta1FormGroup() {
		return new FormGroup<OperationMetadataV1Beta1FormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.
		 * Delete v1beta1/{name}
		 * @param {string} name Required. Name of a Serverless VPC Access connector to delete.
		 * @return {Operation} Successful response
		 */
		Vpcaccess_projects_locations_connectors_delete(name: string): Observable<Operation> {
			return this.http.delete<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Vpcaccess_projects_locations_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Serverless VPC Access connector, returns an operation.
		 * Patch v1beta1/{name}
		 * @param {string} name The resource name in the format `projects/locations/connectors/*`.
		 * @param {string} updateMask The fields to update on the entry group. If absent or empty, all modifiable fields are updated.
		 * @return {Operation} Successful response
		 */
		Vpcaccess_projects_locations_connectors_patch(name: string, updateMask: string | null | undefined, requestBody: Connector): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1beta1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Vpcaccess_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Vpcaccess_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists Serverless VPC Access connectors.
		 * Get v1beta1/{parent}/connectors
		 * @param {string} parent Required. The project and location from which the routes should be listed.
		 * @param {number} pageSize Maximum number of functions to return per call.
		 * @param {string} pageToken Continuation token.
		 * @return {ListConnectorsResponse} Successful response
		 */
		Vpcaccess_projects_locations_connectors_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListConnectorsResponse> {
			return this.http.get<ListConnectorsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Serverless VPC Access connector, returns an operation.
		 * Post v1beta1/{parent}/connectors
		 * @param {string} parent Required. The project ID and location in which the configuration should be created, specified in the format `projects/locations/*`.
		 * @param {string} connectorId Required. The ID to use for this connector.
		 * @return {Operation} Successful response
		 */
		Vpcaccess_projects_locations_connectors_create(parent: string, connectorId: string | null | undefined, requestBody: Connector): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connectors&connectorId=' + (connectorId == null ? '' : encodeURIComponent(connectorId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

