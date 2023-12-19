import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/**
	 * Describes a Compute Engine resource that is being managed by a running
	 * pipeline.
	 */
	export interface ComputeEngine {

		/** The names of the disks that were created for this pipeline. */
		diskNames?: Array<string>;

		/** The instance on which the operation is running. */
		instanceName?: string | null;

		/** The machine type of the instance. */
		machineType?: string | null;

		/** The availability zone in which the instance resides. */
		zone?: string | null;
	}

	/**
	 * Describes a Compute Engine resource that is being managed by a running
	 * pipeline.
	 */
	export interface ComputeEngineFormProperties {

		/** The instance on which the operation is running. */
		instanceName: FormControl<string | null | undefined>,

		/** The machine type of the instance. */
		machineType: FormControl<string | null | undefined>,

		/** The availability zone in which the instance resides. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateComputeEngineFormGroup() {
		return new FormGroup<ComputeEngineFormProperties>({
			instanceName: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An event generated when a container is forcibly terminated by the
	 * worker. Currently, this only occurs when the container outlives the
	 * timeout specified by the user.
	 */
	export interface ContainerKilledEvent {

		/** The numeric ID of the action that started the container. */
		actionId?: number | null;
	}

	/**
	 * An event generated when a container is forcibly terminated by the
	 * worker. Currently, this only occurs when the container outlives the
	 * timeout specified by the user.
	 */
	export interface ContainerKilledEventFormProperties {

		/** The numeric ID of the action that started the container. */
		actionId: FormControl<number | null | undefined>,
	}
	export function CreateContainerKilledEventFormGroup() {
		return new FormGroup<ContainerKilledEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An event generated when a container starts. */
	export interface ContainerStartedEvent {

		/** The numeric ID of the action that started this container. */
		actionId?: number | null;

		/**
		 * The public IP address that can be used to connect to the container. This
		 * field is only populated when at least one port mapping is present. If the
		 * instance was created with a private address, this field will be empty even
		 * if port mappings exist.
		 */
		ipAddress?: string | null;

		/**
		 * The container-to-host port mappings installed for this container. This
		 * set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag
		 * as well as any specified in the `Action` definition.
		 */
		portMappings?: {[id: string]: number };
	}

	/** An event generated when a container starts. */
	export interface ContainerStartedEventFormProperties {

		/** The numeric ID of the action that started this container. */
		actionId: FormControl<number | null | undefined>,

		/**
		 * The public IP address that can be used to connect to the container. This
		 * field is only populated when at least one port mapping is present. If the
		 * instance was created with a private address, this field will be empty even
		 * if port mappings exist.
		 */
		ipAddress: FormControl<string | null | undefined>,

		/**
		 * The container-to-host port mappings installed for this container. This
		 * set will contain any ports exposed using the `PUBLISH_EXPOSED_PORTS` flag
		 * as well as any specified in the `Action` definition.
		 */
		portMappings: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateContainerStartedEventFormGroup() {
		return new FormGroup<ContainerStartedEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			portMappings: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** An event generated when a container exits. */
	export interface ContainerStoppedEvent {

		/** The numeric ID of the action that started this container. */
		actionId?: number | null;

		/** The exit status of the container. */
		exitStatus?: number | null;

		/**
		 * The tail end of any content written to standard error by the container.
		 * If the content emits large amounts of debugging noise or contains
		 * sensitive information, you can prevent the content from being printed by
		 * setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag.
		 * Note that only a small amount of the end of the stream is captured here.
		 * The entire stream is stored in the `/google/logs` directory mounted into
		 * each action, and can be copied off the machine as described elsewhere.
		 */
		stderr?: string | null;
	}

	/** An event generated when a container exits. */
	export interface ContainerStoppedEventFormProperties {

		/** The numeric ID of the action that started this container. */
		actionId: FormControl<number | null | undefined>,

		/** The exit status of the container. */
		exitStatus: FormControl<number | null | undefined>,

		/**
		 * The tail end of any content written to standard error by the container.
		 * If the content emits large amounts of debugging noise or contains
		 * sensitive information, you can prevent the content from being printed by
		 * setting the `DISABLE_STANDARD_ERROR_CAPTURE` flag.
		 * Note that only a small amount of the end of the stream is captured here.
		 * The entire stream is stored in the `/google/logs` directory mounted into
		 * each action, and can be copied off the machine as described elsewhere.
		 */
		stderr: FormControl<string | null | undefined>,
	}
	export function CreateContainerStoppedEventFormGroup() {
		return new FormGroup<ContainerStoppedEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			exitStatus: new FormControl<number | null | undefined>(undefined),
			stderr: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An event generated whenever a resource limitation or transient error
	 * delays execution of a pipeline that was otherwise ready to run.
	 */
	export interface DelayedEvent {

		/**
		 * A textual description of the cause of the delay. The string can change
		 * without notice because it is often generated by another service (such as
		 * Compute Engine).
		 */
		cause?: string | null;

		/**
		 * If the delay was caused by a resource shortage, this field lists the
		 * Compute Engine metrics that are preventing this operation from running
		 * (for example, `CPUS` or `INSTANCES`). If the particular metric is not
		 * known, a single `UNKNOWN` metric will be present.
		 */
		metrics?: Array<string>;
	}

	/**
	 * An event generated whenever a resource limitation or transient error
	 * delays execution of a pipeline that was otherwise ready to run.
	 */
	export interface DelayedEventFormProperties {

		/**
		 * A textual description of the cause of the delay. The string can change
		 * without notice because it is often generated by another service (such as
		 * Compute Engine).
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateDelayedEventFormGroup() {
		return new FormGroup<DelayedEventFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
		});

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


	/** Carries information about events that occur during pipeline execution. */
	export interface Event {

		/**
		 * A human-readable description of the event. Note that these strings can
		 * change at any time without notice. Any application logic must use the
		 * information in the `details` field.
		 */
		description?: string | null;

		/** Machine-readable details about the event. */
		details?: {[id: string]: any };

		/** The time at which the event occurred. */
		timestamp?: string | null;
	}

	/** Carries information about events that occur during pipeline execution. */
	export interface EventFormProperties {

		/**
		 * A human-readable description of the event. Note that these strings can
		 * change at any time without notice. Any application logic must use the
		 * information in the `details` field.
		 */
		description: FormControl<string | null | undefined>,

		/** Machine-readable details about the event. */
		details: FormControl<{[id: string]: any } | null | undefined>,

		/** The time at which the event occurred. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An event generated when the execution of a pipeline has failed. Note
	 * that other events can continue to occur after this event.
	 */
	export interface FailedEvent {

		/** The human-readable description of the cause of the failure. */
		cause?: string | null;

		/** The Google standard error code that best describes this failure. */
		code?: FailedEventCode | null;
	}

	/**
	 * An event generated when the execution of a pipeline has failed. Note
	 * that other events can continue to occur after this event.
	 */
	export interface FailedEventFormProperties {

		/** The human-readable description of the cause of the failure. */
		cause: FormControl<string | null | undefined>,

		/** The Google standard error code that best describes this failure. */
		code: FormControl<FailedEventCode | null | undefined>,
	}
	export function CreateFailedEventFormGroup() {
		return new FormGroup<FailedEventFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<FailedEventCode | null | undefined>(undefined),
		});

	}

	export enum FailedEventCode { OK = 0, CANCELLED = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, NOT_FOUND = 5, ALREADY_EXISTS = 6, PERMISSION_DENIED = 7, UNAUTHENTICATED = 8, RESOURCE_EXHAUSTED = 9, FAILED_PRECONDITION = 10, ABORTED = 11, OUT_OF_RANGE = 12, UNIMPLEMENTED = 13, INTERNAL = 14, UNAVAILABLE = 15, DATA_LOSS = 16 }


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

		/** An OperationMetadata or Metadata object. This will always be returned with the Operation. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. For example&#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw` */
		name?: string | null;

		/** An Empty object. */
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

		/** An OperationMetadata or Metadata object. This will always be returned with the Operation. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. For example&#58; `operations/CJHU7Oi_ChDrveSpBRjfuL-qzoWAgEw` */
		name: FormControl<string | null | undefined>,

		/** An Empty object. */
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


	/** An event that occurred during an Operation. */
	export interface OperationEvent {

		/** Required description of event. */
		description?: string | null;

		/**
		 * Optional time of when event finished. An event can have a start time and no
		 * finish time. If an event has a finish time, there must be a start time.
		 */
		endTime?: string | null;

		/** Optional time of when event started. */
		startTime?: string | null;
	}

	/** An event that occurred during an Operation. */
	export interface OperationEventFormProperties {

		/** Required description of event. */
		description: FormControl<string | null | undefined>,

		/**
		 * Optional time of when event finished. An event can have a start time and no
		 * finish time. If an event has a finish time, there must be a start time.
		 */
		endTime: FormControl<string | null | undefined>,

		/** Optional time of when event started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationEventFormGroup() {
		return new FormGroup<OperationEventFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing an Operation. */
	export interface OperationMetadata {

		/**
		 * This field is deprecated. Use `labels` instead. Optionally provided by the
		 * caller when submitting the request that creates the operation.
		 */
		clientId?: string | null;

		/** The time at which the job was submitted to the Genomics service. */
		createTime?: string | null;

		/** The time at which the job stopped running. */
		endTime?: string | null;

		/**
		 * Optional event messages that were generated during the job's execution.
		 * This also contains any warnings that were generated during import
		 * or export.
		 */
		events?: Array<OperationEvent>;

		/**
		 * Optionally provided by the caller when submitting the request that creates
		 * the operation.
		 */
		labels?: {[id: string]: string };

		/** The Google Cloud Project in which the job is scoped. */
		projectId?: string | null;

		/**
		 * The original request that started the operation. Note that this will be in
		 * current version of the API. If the operation was started with v1beta2 API
		 * and a GetOperation is performed on v1 API, a v1 request will be returned.
		 */
		request?: {[id: string]: any };

		/** Runtime metadata on this Operation. */
		runtimeMetadata?: {[id: string]: any };

		/** The time at which the job began to run. */
		startTime?: string | null;
	}

	/** Metadata describing an Operation. */
	export interface OperationMetadataFormProperties {

		/**
		 * This field is deprecated. Use `labels` instead. Optionally provided by the
		 * caller when submitting the request that creates the operation.
		 */
		clientId: FormControl<string | null | undefined>,

		/** The time at which the job was submitted to the Genomics service. */
		createTime: FormControl<string | null | undefined>,

		/** The time at which the job stopped running. */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Optionally provided by the caller when submitting the request that creates
		 * the operation.
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The Google Cloud Project in which the job is scoped. */
		projectId: FormControl<string | null | undefined>,

		/**
		 * The original request that started the operation. Note that this will be in
		 * current version of the API. If the operation was started with v1beta2 API
		 * and a GetOperation is performed on v1 API, a v1 request will be returned.
		 */
		request: FormControl<{[id: string]: any } | null | undefined>,

		/** Runtime metadata on this Operation. */
		runtimeMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The time at which the job began to run. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateOperationMetadataFormGroup() {
		return new FormGroup<OperationMetadataFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			request: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			runtimeMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the worker starts pulling an image. */
	export interface PullStartedEvent {

		/** The URI of the image that was pulled. */
		imageUri?: string | null;
	}

	/** An event generated when the worker starts pulling an image. */
	export interface PullStartedEventFormProperties {

		/** The URI of the image that was pulled. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreatePullStartedEventFormGroup() {
		return new FormGroup<PullStartedEventFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event generated when the worker stops pulling an image. */
	export interface PullStoppedEvent {

		/** The URI of the image that was pulled. */
		imageUri?: string | null;
	}

	/** An event generated when the worker stops pulling an image. */
	export interface PullStoppedEventFormProperties {

		/** The URI of the image that was pulled. */
		imageUri: FormControl<string | null | undefined>,
	}
	export function CreatePullStoppedEventFormGroup() {
		return new FormGroup<PullStoppedEventFormProperties>({
			imageUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The response to the RunPipeline method, returned in the operation's result
	 * field on success.
	 */
	export interface RunPipelineResponse {
	}

	/**
	 * The response to the RunPipeline method, returned in the operation's result
	 * field on success.
	 */
	export interface RunPipelineResponseFormProperties {
	}
	export function CreateRunPipelineResponseFormGroup() {
		return new FormGroup<RunPipelineResponseFormProperties>({
		});

	}


	/**
	 * Runtime metadata that will be populated in the
	 * runtimeMetadata
	 * field of the Operation associated with a RunPipeline execution.
	 */
	export interface RuntimeMetadata {

		/**
		 * Describes a Compute Engine resource that is being managed by a running
		 * pipeline.
		 */
		computeEngine?: ComputeEngine;
	}

	/**
	 * Runtime metadata that will be populated in the
	 * runtimeMetadata
	 * field of the Operation associated with a RunPipeline execution.
	 */
	export interface RuntimeMetadataFormProperties {
	}
	export function CreateRuntimeMetadataFormGroup() {
		return new FormGroup<RuntimeMetadataFormProperties>({
		});

	}


	/**
	 * An event generated when the execution of a container results in a
	 * non-zero exit status that was not otherwise ignored. Execution will
	 * continue, but only actions that are flagged as `ALWAYS_RUN` will be
	 * executed. Other actions will be skipped.
	 */
	export interface UnexpectedExitStatusEvent {

		/** The numeric ID of the action that started the container. */
		actionId?: number | null;

		/** The exit status of the container. */
		exitStatus?: number | null;
	}

	/**
	 * An event generated when the execution of a container results in a
	 * non-zero exit status that was not otherwise ignored. Execution will
	 * continue, but only actions that are flagged as `ALWAYS_RUN` will be
	 * executed. Other actions will be skipped.
	 */
	export interface UnexpectedExitStatusEventFormProperties {

		/** The numeric ID of the action that started the container. */
		actionId: FormControl<number | null | undefined>,

		/** The exit status of the container. */
		exitStatus: FormControl<number | null | undefined>,
	}
	export function CreateUnexpectedExitStatusEventFormGroup() {
		return new FormGroup<UnexpectedExitStatusEventFormProperties>({
			actionId: new FormControl<number | null | undefined>(undefined),
			exitStatus: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * An event generated after a worker VM has been assigned to run the
	 * pipeline.
	 */
	export interface WorkerAssignedEvent {

		/** The worker's instance name. */
		instance?: string | null;

		/** The machine type that was assigned for the worker. */
		machineType?: string | null;

		/** The zone the worker is running in. */
		zone?: string | null;
	}

	/**
	 * An event generated after a worker VM has been assigned to run the
	 * pipeline.
	 */
	export interface WorkerAssignedEventFormProperties {

		/** The worker's instance name. */
		instance: FormControl<string | null | undefined>,

		/** The machine type that was assigned for the worker. */
		machineType: FormControl<string | null | undefined>,

		/** The zone the worker is running in. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkerAssignedEventFormGroup() {
		return new FormGroup<WorkerAssignedEventFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			machineType: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An event generated when the worker VM that was assigned to the pipeline
	 * has been released (deleted).
	 */
	export interface WorkerReleasedEvent {

		/** The worker's instance name. */
		instance?: string | null;

		/** The zone the worker was running in. */
		zone?: string | null;
	}

	/**
	 * An event generated when the worker VM that was assigned to the pipeline
	 * has been released (deleted).
	 */
	export interface WorkerReleasedEventFormProperties {

		/** The worker's instance name. */
		instance: FormControl<string | null | undefined>,

		/** The zone the worker was running in. */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWorkerReleasedEventFormGroup() {
		return new FormGroup<WorkerReleasedEventFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the latest state of a long-running operation.
		 * Clients can use this method to poll the operation result at intervals as
		 * recommended by the API service.
		 * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;
		 * * `genomics.operations.get`
		 * Get v1/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {void} Successful response
		 */
		Genomics_operations_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation.
		 * The server makes a best effort to cancel the operation, but success is not
		 * guaranteed. Clients may use Operations.GetOperation
		 * or Operations.ListOperations
		 * to check whether the cancellation succeeded or the operation completed
		 * despite cancellation.
		 * Authorization requires the following [Google IAM](https://cloud.google.com/iam) permission&#58;
		 * * `genomics.operations.cancel`
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {void} Successful response
		 */
		Genomics_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

