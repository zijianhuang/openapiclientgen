import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Request for Export. */
	export interface ExportInstanceRequest {

		/** The output content */
		outputConfig?: OutputConfig;
	}

	/** Request for Export. */
	export interface ExportInstanceRequestFormProperties {
	}
	export function CreateExportInstanceRequestFormGroup() {
		return new FormGroup<ExportInstanceRequestFormProperties>({
		});

	}


	/** The output content */
	export interface OutputConfig {

		/** The Cloud Storage location for the output content */
		gcsDestination?: GcsDestination;
	}

	/** The output content */
	export interface OutputConfigFormProperties {
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
		});

	}


	/** The Cloud Storage location for the output content */
	export interface GcsDestination {

		/**
		 * Required. Data destination URI (e.g.
		 * 'gs://my_bucket/my_object'). Existing files will be overwritten.
		 */
		uri?: string | null;
	}

	/** The Cloud Storage location for the output content */
	export interface GcsDestinationFormProperties {

		/**
		 * Required. Data destination URI (e.g.
		 * 'gs://my_bucket/my_object'). Existing files will be overwritten.
		 */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsDestinationFormGroup() {
		return new FormGroup<GcsDestinationFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for Failover. */
	export interface FailoverInstanceRequest {

		/**
		 * Optional. Available data protection modes that the user can choose. If it's
		 * unspecified, data protection mode will be LIMITED_DATA_LOSS by default.
		 */
		dataProtectionMode?: FailoverInstanceRequestDataProtectionMode | null;
	}

	/** Request for Failover. */
	export interface FailoverInstanceRequestFormProperties {

		/**
		 * Optional. Available data protection modes that the user can choose. If it's
		 * unspecified, data protection mode will be LIMITED_DATA_LOSS by default.
		 */
		dataProtectionMode: FormControl<FailoverInstanceRequestDataProtectionMode | null | undefined>,
	}
	export function CreateFailoverInstanceRequestFormGroup() {
		return new FormGroup<FailoverInstanceRequestFormProperties>({
			dataProtectionMode: new FormControl<FailoverInstanceRequestDataProtectionMode | null | undefined>(undefined),
		});

	}

	export enum FailoverInstanceRequestDataProtectionMode { DATA_PROTECTION_MODE_UNSPECIFIED = 0, LIMITED_DATA_LOSS = 1, FORCE_DATA_LOSS = 2 }


	/** The Cloud Storage location for the input content */
	export interface GcsSource {

		/** Required. Source data URI. (e.g. 'gs://my_bucket/my_object'). */
		uri?: string | null;
	}

	/** The Cloud Storage location for the input content */
	export interface GcsSourceFormProperties {

		/** Required. Source data URI. (e.g. 'gs://my_bucket/my_object'). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGcsSourceFormGroup() {
		return new FormGroup<GcsSourceFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * This location metadata represents additional configuration options for a
	 * given location where a Redis instance may be created. All fields are output
	 * only. It is returned as content of the
	 * `google.cloud.location.Location.metadata` field.
	 */
	export interface GoogleCloudRedisV1LocationMetadata {

		/**
		 * Output only. The set of available zones in the location. The map is keyed
		 * by the lowercase ID of each zone, as defined by GCE. These keys can be
		 * specified in `location_id` or `alternative_location_id` fields when
		 * creating a Redis instance.
		 */
		availableZones?: {[id: string]: GoogleCloudRedisV1ZoneMetadata };
	}

	/**
	 * This location metadata represents additional configuration options for a
	 * given location where a Redis instance may be created. All fields are output
	 * only. It is returned as content of the
	 * `google.cloud.location.Location.metadata` field.
	 */
	export interface GoogleCloudRedisV1LocationMetadataFormProperties {

		/**
		 * Output only. The set of available zones in the location. The map is keyed
		 * by the lowercase ID of each zone, as defined by GCE. These keys can be
		 * specified in `location_id` or `alternative_location_id` fields when
		 * creating a Redis instance.
		 */
		availableZones: FormControl<{[id: string]: GoogleCloudRedisV1ZoneMetadata } | null | undefined>,
	}
	export function CreateGoogleCloudRedisV1LocationMetadataFormGroup() {
		return new FormGroup<GoogleCloudRedisV1LocationMetadataFormProperties>({
			availableZones: new FormControl<{[id: string]: GoogleCloudRedisV1ZoneMetadata } | null | undefined>(undefined),
		});

	}


	/**
	 * Defines specific information for a particular zone. Currently empty and
	 * reserved for future use only.
	 */
	export interface GoogleCloudRedisV1ZoneMetadata {
	}

	/**
	 * Defines specific information for a particular zone. Currently empty and
	 * reserved for future use only.
	 */
	export interface GoogleCloudRedisV1ZoneMetadataFormProperties {
	}
	export function CreateGoogleCloudRedisV1ZoneMetadataFormGroup() {
		return new FormGroup<GoogleCloudRedisV1ZoneMetadataFormProperties>({
		});

	}


	/** Represents the v1 metadata of the long-running operation. */
	export interface GoogleCloudRedisV1OperationMetadata {

		/** API version. */
		apiVersion?: string | null;

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested?: boolean | null;

		/** Creation timestamp. */
		createTime?: string | null;

		/** End timestamp. */
		endTime?: string | null;

		/** Operation status details. */
		statusDetail?: string | null;

		/** Operation target. */
		target?: string | null;

		/** Operation verb. */
		verb?: string | null;
	}

	/** Represents the v1 metadata of the long-running operation. */
	export interface GoogleCloudRedisV1OperationMetadataFormProperties {

		/** API version. */
		apiVersion: FormControl<string | null | undefined>,

		/** Specifies if cancellation was requested for the operation. */
		cancelRequested: FormControl<boolean | null | undefined>,

		/** Creation timestamp. */
		createTime: FormControl<string | null | undefined>,

		/** End timestamp. */
		endTime: FormControl<string | null | undefined>,

		/** Operation status details. */
		statusDetail: FormControl<string | null | undefined>,

		/** Operation target. */
		target: FormControl<string | null | undefined>,

		/** Operation verb. */
		verb: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRedisV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudRedisV1OperationMetadataFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for Import. */
	export interface ImportInstanceRequest {

		/** The input content */
		inputConfig?: InputConfig;
	}

	/** Request for Import. */
	export interface ImportInstanceRequestFormProperties {
	}
	export function CreateImportInstanceRequestFormGroup() {
		return new FormGroup<ImportInstanceRequestFormProperties>({
		});

	}


	/** The input content */
	export interface InputConfig {

		/** The Cloud Storage location for the input content */
		gcsSource?: GcsSource;
	}

	/** The input content */
	export interface InputConfigFormProperties {
	}
	export function CreateInputConfigFormGroup() {
		return new FormGroup<InputConfigFormProperties>({
		});

	}


	/** A Google Cloud Redis instance. */
	export interface Instance {

		/**
		 * Optional. Only applicable to STANDARD_HA tier which protects the instance
		 * against zonal failures by provisioning it across two zones. If provided, it
		 * must be a different zone from the one provided in location_id.
		 */
		alternativeLocationId?: string | null;

		/**
		 * Optional. The full name of the Google Compute Engine
		 * [network](/compute/docs/networks-and-firewalls#networks) to which the
		 * instance is connected. If left unspecified, the `default` network
		 * will be used.
		 */
		authorizedNetwork?: string | null;

		/**
		 * Optional. The network connect mode of the Redis instance.
		 * If not provided, the connect mode defaults to DIRECT_PEERING.
		 */
		connectMode?: InstanceConnectMode | null;

		/** Output only. The time the instance was created. */
		createTime?: string | null;

		/**
		 * Output only. The current zone where the Redis endpoint is placed. For Basic
		 * Tier instances, this will always be the same as the location_id
		 * provided by the user at creation time. For Standard Tier instances,
		 * this can be either location_id or alternative_location_id and can
		 * change after a failover event.
		 */
		currentLocationId?: string | null;

		/** An arbitrary and optional user-provided name for the instance. */
		displayName?: string | null;

		/**
		 * Output only. Hostname or IP address of the exposed Redis endpoint used by
		 * clients to connect to the service.
		 */
		host?: string | null;

		/** Resource labels to represent user provided metadata */
		labels?: {[id: string]: string };

		/**
		 * Optional. The zone where the instance will be provisioned. If not provided,
		 * the service will choose a zone for the instance. For STANDARD_HA tier,
		 * instances will be created across two zones for protection against zonal
		 * failures. If alternative_location_id is also provided, it must be
		 * different from location_id.
		 */
		locationId?: string | null;

		/** Required. Redis memory size in GiB. */
		memorySizeGb?: number | null;

		/**
		 * Required. Unique name of the resource in this scope including project and
		 * location using the form:
		 * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * Note: Redis instances are managed and addressed at regional level so
		 * location_id here refers to a GCP region; however, users may choose which
		 * specific zone (or collection of zones for cross-zone instances) an instance
		 * should be provisioned in. Refer to location_id and
		 * alternative_location_id fields for more details.
		 */
		name?: string | null;

		/**
		 * Output only. Cloud IAM identity used by import / export operations to
		 * transfer data to/from Cloud Storage. Format is
		 * "serviceAccount:<service_account_email>". The value may change over time
		 * for a given instance so should be checked before each import/export
		 * operation.
		 */
		persistenceIamIdentity?: string | null;

		/** Output only. The port number of the exposed Redis endpoint. */
		port?: number | null;

		/**
		 * Optional. Redis configuration parameters, according to
		 * http://redis.io/topics/config. Currently, the only supported parameters
		 * are:
		 * Redis version 3.2 and newer:
		 * *   maxmemory-policy
		 * *   notify-keyspace-events
		 * Redis version 4.0 and newer:
		 * *   activedefrag
		 * *   lfu-decay-time
		 * *   lfu-log-factor
		 * *   maxmemory-gb
		 * Redis version 5.0 and newer:
		 * *   stream-node-max-bytes
		 * *   stream-node-max-entries
		 */
		redisConfigs?: {[id: string]: string };

		/**
		 * Optional. The version of Redis software.
		 * If not provided, latest supported version will be used. Currently, the
		 * supported values are:
		 * *   `REDIS_3_2` for Redis 3.2 compatibility
		 * *   `REDIS_4_0` for Redis 4.0 compatibility (default)
		 * *   `REDIS_5_0` for Redis 5.0 compatibility
		 */
		redisVersion?: string | null;

		/**
		 * Optional. The CIDR range of internal addresses that are reserved for this
		 * instance. If not provided, the service will choose an unused /29 block,
		 * for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be unique
		 * and non-overlapping with existing subnets in an authorized network.
		 */
		reservedIpRange?: string | null;

		/** Output only. The current state of this instance. */
		state?: InstanceState | null;

		/**
		 * Output only. Additional information about the current status of this
		 * instance, if available.
		 */
		statusMessage?: string | null;

		/** Required. The service tier of the instance. */
		tier?: InstanceTier | null;
	}

	/** A Google Cloud Redis instance. */
	export interface InstanceFormProperties {

		/**
		 * Optional. Only applicable to STANDARD_HA tier which protects the instance
		 * against zonal failures by provisioning it across two zones. If provided, it
		 * must be a different zone from the one provided in location_id.
		 */
		alternativeLocationId: FormControl<string | null | undefined>,

		/**
		 * Optional. The full name of the Google Compute Engine
		 * [network](/compute/docs/networks-and-firewalls#networks) to which the
		 * instance is connected. If left unspecified, the `default` network
		 * will be used.
		 */
		authorizedNetwork: FormControl<string | null | undefined>,

		/**
		 * Optional. The network connect mode of the Redis instance.
		 * If not provided, the connect mode defaults to DIRECT_PEERING.
		 */
		connectMode: FormControl<InstanceConnectMode | null | undefined>,

		/** Output only. The time the instance was created. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The current zone where the Redis endpoint is placed. For Basic
		 * Tier instances, this will always be the same as the location_id
		 * provided by the user at creation time. For Standard Tier instances,
		 * this can be either location_id or alternative_location_id and can
		 * change after a failover event.
		 */
		currentLocationId: FormControl<string | null | undefined>,

		/** An arbitrary and optional user-provided name for the instance. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. Hostname or IP address of the exposed Redis endpoint used by
		 * clients to connect to the service.
		 */
		host: FormControl<string | null | undefined>,

		/** Resource labels to represent user provided metadata */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Optional. The zone where the instance will be provisioned. If not provided,
		 * the service will choose a zone for the instance. For STANDARD_HA tier,
		 * instances will be created across two zones for protection against zonal
		 * failures. If alternative_location_id is also provided, it must be
		 * different from location_id.
		 */
		locationId: FormControl<string | null | undefined>,

		/** Required. Redis memory size in GiB. */
		memorySizeGb: FormControl<number | null | undefined>,

		/**
		 * Required. Unique name of the resource in this scope including project and
		 * location using the form:
		 * `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * Note: Redis instances are managed and addressed at regional level so
		 * location_id here refers to a GCP region; however, users may choose which
		 * specific zone (or collection of zones for cross-zone instances) an instance
		 * should be provisioned in. Refer to location_id and
		 * alternative_location_id fields for more details.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. Cloud IAM identity used by import / export operations to
		 * transfer data to/from Cloud Storage. Format is
		 * "serviceAccount:<service_account_email>". The value may change over time
		 * for a given instance so should be checked before each import/export
		 * operation.
		 */
		persistenceIamIdentity: FormControl<string | null | undefined>,

		/** Output only. The port number of the exposed Redis endpoint. */
		port: FormControl<number | null | undefined>,

		/**
		 * Optional. Redis configuration parameters, according to
		 * http://redis.io/topics/config. Currently, the only supported parameters
		 * are:
		 * Redis version 3.2 and newer:
		 * *   maxmemory-policy
		 * *   notify-keyspace-events
		 * Redis version 4.0 and newer:
		 * *   activedefrag
		 * *   lfu-decay-time
		 * *   lfu-log-factor
		 * *   maxmemory-gb
		 * Redis version 5.0 and newer:
		 * *   stream-node-max-bytes
		 * *   stream-node-max-entries
		 */
		redisConfigs: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Optional. The version of Redis software.
		 * If not provided, latest supported version will be used. Currently, the
		 * supported values are:
		 * *   `REDIS_3_2` for Redis 3.2 compatibility
		 * *   `REDIS_4_0` for Redis 4.0 compatibility (default)
		 * *   `REDIS_5_0` for Redis 5.0 compatibility
		 */
		redisVersion: FormControl<string | null | undefined>,

		/**
		 * Optional. The CIDR range of internal addresses that are reserved for this
		 * instance. If not provided, the service will choose an unused /29 block,
		 * for example, 10.0.0.0/29 or 192.168.0.0/29. Ranges must be unique
		 * and non-overlapping with existing subnets in an authorized network.
		 */
		reservedIpRange: FormControl<string | null | undefined>,

		/** Output only. The current state of this instance. */
		state: FormControl<InstanceState | null | undefined>,

		/**
		 * Output only. Additional information about the current status of this
		 * instance, if available.
		 */
		statusMessage: FormControl<string | null | undefined>,

		/** Required. The service tier of the instance. */
		tier: FormControl<InstanceTier | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			alternativeLocationId: new FormControl<string | null | undefined>(undefined),
			authorizedNetwork: new FormControl<string | null | undefined>(undefined),
			connectMode: new FormControl<InstanceConnectMode | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			currentLocationId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			memorySizeGb: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			persistenceIamIdentity: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			redisConfigs: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			redisVersion: new FormControl<string | null | undefined>(undefined),
			reservedIpRange: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<InstanceTier | null | undefined>(undefined),
		});

	}

	export enum InstanceConnectMode { CONNECT_MODE_UNSPECIFIED = 0, DIRECT_PEERING = 1, PRIVATE_SERVICE_ACCESS = 2 }

	export enum InstanceState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, UPDATING = 3, DELETING = 4, REPAIRING = 5, MAINTENANCE = 6, IMPORTING = 7, FAILING_OVER = 8 }

	export enum InstanceTier { TIER_UNSPECIFIED = 0, BASIC = 1, STANDARD_HA = 2 }


	/** Response for ListInstances. */
	export interface ListInstancesResponse {

		/**
		 * A list of Redis instances in the project in the specified location,
		 * or across all locations.
		 * If the `location_id` in the parent field of the request is "-", all regions
		 * available to the project are queried, and the results aggregated.
		 * If in such an aggregated query a location is unavailable, a dummy Redis
		 * entry is included in the response with the `name` field set to a value of
		 * the form `projects/{project_id}/locations/{location_id}/instances/`- and
		 * the `status` field set to ERROR and `status_message` field set to "location
		 * not available for ListInstances".
		 */
		instances?: Array<Instance>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
		nextPageToken?: string | null;

		/** Locations that could not be reached. */
		unreachable?: Array<string>;
	}

	/** Response for ListInstances. */
	export interface ListInstancesResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no more
		 * results in the list.
		 */
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


	/** A resource that represents Google Cloud Platform location. */
	export interface Location {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName?: string | null;

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels?: {[id: string]: string };

		/** Resource ID for the region. For example: "us-east1". */
		locationId?: string | null;

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		metadata?: {[id: string]: any };

		/** Full resource name for the region. For example: "projects/example-project/locations/us-east1". */
		name?: string | null;
	}

	/** A resource that represents Google Cloud Platform location. */
	export interface LocationFormProperties {

		/**
		 * The friendly name for this location, typically a nearby city name.
		 * For example, "Tokyo".
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Cross-service attributes for the location. For example
		 * {"cloud.googleapis.com/region": "us-east1"}
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource ID for the region. For example: "us-east1". */
		locationId: FormControl<string | null | undefined>,

		/** Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in `location_id` or `alternative_location_id` fields when creating a Redis instance. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Full resource name for the region. For example: "projects/example-project/locations/us-east1". */
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
		done?: boolean | null;

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
		 * {
		 * `createTime`: The time the operation was created.
		 * `endTime`: The time the operation finished running.
		 * `target`: Server-defined resource path for the target of the operation.
		 * `verb`: Name of the verb executed by the operation.
		 * `statusDetail`: Human-readable status of the operation, if any.
		 * `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * `apiVersion`: API version used to start the operation.
		 * }
		 */
		metadata?: {[id: string]: any };

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

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
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface OperationFormProperties {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done: FormControl<boolean | null | undefined>,

		/**
		 * {
		 * `createTime`: The time the operation was created.
		 * `endTime`: The time the operation finished running.
		 * `target`: Server-defined resource path for the target of the operation.
		 * `verb`: Name of the verb executed by the operation.
		 * `statusDetail`: Human-readable status of the operation, if any.
		 * `cancelRequested`: Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * `apiVersion`: API version used to start the operation.
		 * }
		 */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name: FormControl<string | null | undefined>,

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
		code?: number | null;

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
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for UpgradeInstance. */
	export interface UpgradeInstanceRequest {

		/** Required. Specifies the target version of Redis software to upgrade to. */
		redisVersion?: string | null;
	}

	/** Request for UpgradeInstance. */
	export interface UpgradeInstanceRequestFormProperties {

		/** Required. Specifies the target version of Redis software to upgrade to. */
		redisVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpgradeInstanceRequestFormGroup() {
		return new FormGroup<UpgradeInstanceRequestFormProperties>({
			redisVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is
		 * no longer interested in the operation result. It does not cancel the
		 * operation. If the server doesn't support this method, it returns
		 * `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_operations_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest state of a long-running operation.  Clients can use this
		 * method to poll the operation result at intervals as recommended by the API
		 * service.
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the metadata and configuration of a specific Redis instance.
		 * Completed longrunning.Operation will contain the new instance object
		 * in the response field. The returned operation is automatically deleted
		 * after a few hours, so there is no need to call DeleteOperation.
		 * Patch v1/{name}
		 * @param {string} name Required. Unique name of the resource in this scope including project and
		 * location using the form:
		 *     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * Note: Redis instances are managed and addressed at regional level so
		 * location_id here refers to a GCP region; however, users may choose which
		 * specific zone (or collection of zones for cross-zone instances) an instance
		 * should be provisioned in. Refer to location_id and
		 * alternative_location_id fields for more details.
		 * @param {string} updateMask Required. Mask of fields to update. At least one path must be supplied in
		 * this field. The elements of the repeated paths field may only include these
		 * fields from Instance:
		 *  *   `displayName`
		 *  *   `labels`
		 *  *   `memorySizeGb`
		 *  *   `redisConfig`
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_patch(name: string, updateMask: string | null | undefined, requestBody: Instance): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		Redis_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		Redis_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
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
		Redis_projects_locations_operations_cancel(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Export Redis instance data into a Redis RDB format file in Cloud Storage.
		 * Redis will continue serving during this operation.
		 * The returned operation is automatically deleted after a few hours, so
		 * there is no need to call DeleteOperation.
		 * Post v1/{name}:export
		 * @param {string} name Required. Redis instance resource name using the form:
		 *     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * where `location_id` refers to a GCP region.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_export(name: string, requestBody: ExportInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Initiates a failover of the master node to current replica node for a
		 * specific STANDARD tier Cloud Memorystore for Redis instance.
		 * Post v1/{name}:failover
		 * @param {string} name Required. Redis instance resource name using the form:
		 *     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * where `location_id` refers to a GCP region.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_failover(name: string, requestBody: FailoverInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':failover', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Import a Redis RDB snapshot file from Cloud Storage into a Redis instance.
		 * Redis may stop serving during this operation. Instance state will be
		 * IMPORTING for entire operation. When complete, the instance will contain
		 * only data from the imported file.
		 * The returned operation is automatically deleted after a few hours, so
		 * there is no need to call DeleteOperation.
		 * Post v1/{name}:import
		 * @param {string} name Required. Redis instance resource name using the form:
		 *     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * where `location_id` refers to a GCP region.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_import(name: string, requestBody: ImportInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Upgrades Redis instance to the newer Redis version specified in the
		 * request.
		 * Post v1/{name}:upgrade
		 * @param {string} name Required. Redis instance resource name using the form:
		 *     `projects/{project_id}/locations/{location_id}/instances/{instance_id}`
		 * where `location_id` refers to a GCP region.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_upgrade(name: string, requestBody: UpgradeInstanceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':upgrade', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all Redis instances owned by a project in either the specified
		 * location (region) or all locations.
		 * The location should have the following format:
		 * * `projects/{project_id}/locations/{location_id}`
		 * If `location_id` is specified as `-` (wildcard), then all regions
		 * available to the project are queried, and the results are aggregated.
		 * Get v1/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form:
		 *     `projects/{project_id}/locations/{location_id}`
		 * where `location_id` refers to a GCP region.
		 * @param {number} pageSize The maximum number of items to return.
		 * If not specified, a default value of 1000 will be used by the service.
		 * Regardless of the page_size value, the response may include a partial list
		 * and a caller should only rely on response's
		 * `next_page_token`
		 * to determine if there are more instances left to be queried.
		 * @param {string} pageToken The `next_page_token` value returned from a previous
		 * ListInstances request, if any.
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Redis instance based on the specified tier and memory size.
		 * By default, the instance is accessible from the project's
		 * [default network](/compute/docs/networks-and-firewalls#networks).
		 * The creation is executed asynchronously and callers may check the returned
		 * operation to track its progress. Once the operation is completed the Redis
		 * instance will be fully functional. Completed longrunning.Operation will
		 * contain the new instance object in the response field.
		 * The returned operation is automatically deleted after a few hours, so there
		 * is no need to call DeleteOperation.
		 * Post v1/{parent}/instances
		 * @param {string} parent Required. The resource name of the instance location using the form:
		 *     `projects/{project_id}/locations/{location_id}`
		 * where `location_id` refers to a GCP region.
		 * @param {string} instanceId Required. The logical name of the Redis instance in the customer project
		 * with the following restrictions:
		 * * Must contain only lowercase letters, numbers, and hyphens.
		 * * Must start with a letter.
		 * * Must be between 1-40 characters.
		 * * Must end with a number or a letter.
		 * * Must be unique within the customer project / location
		 * @return {void} Successful response
		 */
		Redis_projects_locations_instances_create(parent: string, instanceId: string | null | undefined, requestBody: Instance): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instances&instanceId=' + (instanceId == null ? '' : encodeURIComponent(instanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

