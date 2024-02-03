import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message included in the metadata field of operations returned from AddPublicKey. */
	export interface AddPublicKeyMetadata {
	}

	/** Message included in the metadata field of operations returned from AddPublicKey. */
	export interface AddPublicKeyMetadataFormProperties {
	}
	export function CreateAddPublicKeyMetadataFormGroup() {
		return new FormGroup<AddPublicKeyMetadataFormProperties>({
		});

	}


	/** Request message for AddPublicKey. */
	export interface AddPublicKeyRequest {

		/** Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64. */
		key?: string | null;
	}

	/** Request message for AddPublicKey. */
	export interface AddPublicKeyRequestFormProperties {

		/** Key that should be added to the environment. Supported formats are `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256` (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as <format> <content>, where <content> part is encoded with Base64. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateAddPublicKeyRequestFormGroup() {
		return new FormGroup<AddPublicKeyRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AddPublicKey. */
	export interface AddPublicKeyResponse {

		/** Key that was added to the environment. */
		key?: string | null;
	}

	/** Response message for AddPublicKey. */
	export interface AddPublicKeyResponseFormProperties {

		/** Key that was added to the environment. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateAddPublicKeyResponseFormGroup() {
		return new FormGroup<AddPublicKeyResponseFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message included in the metadata field of operations returned from AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentMetadata {
	}

	/** Message included in the metadata field of operations returned from AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentMetadataFormProperties {
	}
	export function CreateAuthorizeEnvironmentMetadataFormGroup() {
		return new FormGroup<AuthorizeEnvironmentMetadataFormProperties>({
		});

	}


	/** Request message for AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentRequest {

		/** The OAuth access token that should be sent to the environment. */
		accessToken?: string | null;

		/** The time when the credentials expire. If not set, defaults to one hour from when the server received the request. */
		expireTime?: string | null;

		/** The OAuth ID token that should be sent to the environment. */
		idToken?: string | null;
	}

	/** Request message for AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentRequestFormProperties {

		/** The OAuth access token that should be sent to the environment. */
		accessToken: FormControl<string | null | undefined>,

		/** The time when the credentials expire. If not set, defaults to one hour from when the server received the request. */
		expireTime: FormControl<string | null | undefined>,

		/** The OAuth ID token that should be sent to the environment. */
		idToken: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizeEnvironmentRequestFormGroup() {
		return new FormGroup<AuthorizeEnvironmentRequestFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			idToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentResponse {
	}

	/** Response message for AuthorizeEnvironment. */
	export interface AuthorizeEnvironmentResponseFormProperties {
	}
	export function CreateAuthorizeEnvironmentResponseFormGroup() {
		return new FormGroup<AuthorizeEnvironmentResponseFormProperties>({
		});

	}


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


	/** Message included in the metadata field of operations returned from CreateEnvironment. */
	export interface CreateEnvironmentMetadata {
	}

	/** Message included in the metadata field of operations returned from CreateEnvironment. */
	export interface CreateEnvironmentMetadataFormProperties {
	}
	export function CreateCreateEnvironmentMetadataFormGroup() {
		return new FormGroup<CreateEnvironmentMetadataFormProperties>({
		});

	}


	/** Message included in the metadata field of operations returned from DeleteEnvironment. */
	export interface DeleteEnvironmentMetadata {
	}

	/** Message included in the metadata field of operations returned from DeleteEnvironment. */
	export interface DeleteEnvironmentMetadataFormProperties {
	}
	export function CreateDeleteEnvironmentMetadataFormGroup() {
		return new FormGroup<DeleteEnvironmentMetadataFormProperties>({
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


	/** A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default". */
	export interface Environment {

		/** Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest". */
		dockerImage?: string | null;

		/** Output only. The environment's identifier, unique among the user's environments. */
		id?: string | null;

		/** Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`. */
		name?: string | null;

		/** Output only. Public keys associated with the environment. Clients can connect to this environment via SSH only if they possess a private key corresponding to at least one of these public keys. Keys can be added to or removed from the environment using the AddPublicKey and RemovePublicKey methods. */
		publicKeys?: Array<string>;

		/** Output only. Host to which clients can connect to initiate SSH sessions with the environment. */
		sshHost?: string | null;

		/** Output only. Port to which clients can connect to initiate SSH sessions with the environment. */
		sshPort?: number | null;

		/** Output only. Username that clients should use when initiating SSH sessions with the environment. */
		sshUsername?: string | null;

		/** Output only. Current execution state of this environment. */
		state?: EnvironmentState | null;

		/** Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment. */
		webHost?: string | null;
	}

	/** A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default". */
	export interface EnvironmentFormProperties {

		/** Required. Immutable. Full path to the Docker image used to run this environment, e.g. "gcr.io/dev-con/cloud-devshell:latest". */
		dockerImage: FormControl<string | null | undefined>,

		/** Output only. The environment's identifier, unique among the user's environments. */
		id: FormControl<string | null | undefined>,

		/** Immutable. Full name of this resource, in the format `users/{owner_email}/environments/{environment_id}`. `{owner_email}` is the email address of the user to whom this environment belongs, and `{environment_id}` is the identifier of this environment. For example, `users/someone@example.com/environments/default`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Host to which clients can connect to initiate SSH sessions with the environment. */
		sshHost: FormControl<string | null | undefined>,

		/** Output only. Port to which clients can connect to initiate SSH sessions with the environment. */
		sshPort: FormControl<number | null | undefined>,

		/** Output only. Username that clients should use when initiating SSH sessions with the environment. */
		sshUsername: FormControl<string | null | undefined>,

		/** Output only. Current execution state of this environment. */
		state: FormControl<EnvironmentState | null | undefined>,

		/** Output only. Host to which clients can connect to initiate HTTPS or WSS connections with the environment. */
		webHost: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			dockerImage: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sshHost: new FormControl<string | null | undefined>(undefined),
			sshPort: new FormControl<number | null | undefined>(undefined),
			sshUsername: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<EnvironmentState | null | undefined>(undefined),
			webHost: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', SUSPENDED = 'SUSPENDED', PENDING = 'PENDING', RUNNING = 'RUNNING', DELETING = 'DELETING' }


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


	/** Message included in the metadata field of operations returned from RemovePublicKey. */
	export interface RemovePublicKeyMetadata {
	}

	/** Message included in the metadata field of operations returned from RemovePublicKey. */
	export interface RemovePublicKeyMetadataFormProperties {
	}
	export function CreateRemovePublicKeyMetadataFormGroup() {
		return new FormGroup<RemovePublicKeyMetadataFormProperties>({
		});

	}


	/** Request message for RemovePublicKey. */
	export interface RemovePublicKeyRequest {

		/** Key that should be removed from the environment. */
		key?: string | null;
	}

	/** Request message for RemovePublicKey. */
	export interface RemovePublicKeyRequestFormProperties {

		/** Key that should be removed from the environment. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateRemovePublicKeyRequestFormGroup() {
		return new FormGroup<RemovePublicKeyRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for RemovePublicKey. */
	export interface RemovePublicKeyResponse {
	}

	/** Response message for RemovePublicKey. */
	export interface RemovePublicKeyResponseFormProperties {
	}
	export function CreateRemovePublicKeyResponseFormGroup() {
		return new FormGroup<RemovePublicKeyResponseFormProperties>({
		});

	}


	/** Message included in the metadata field of operations returned from StartEnvironment. */
	export interface StartEnvironmentMetadata {

		/** Current state of the environment being started. */
		state?: StartEnvironmentMetadataState | null;
	}

	/** Message included in the metadata field of operations returned from StartEnvironment. */
	export interface StartEnvironmentMetadataFormProperties {

		/** Current state of the environment being started. */
		state: FormControl<StartEnvironmentMetadataState | null | undefined>,
	}
	export function CreateStartEnvironmentMetadataFormGroup() {
		return new FormGroup<StartEnvironmentMetadataFormProperties>({
			state: new FormControl<StartEnvironmentMetadataState | null | undefined>(undefined),
		});

	}

	export enum StartEnvironmentMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTING = 'STARTING', UNARCHIVING_DISK = 'UNARCHIVING_DISK', AWAITING_COMPUTE_RESOURCES = 'AWAITING_COMPUTE_RESOURCES', FINISHED = 'FINISHED' }


	/** Request message for StartEnvironment. */
	export interface StartEnvironmentRequest {

		/** The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment. */
		accessToken?: string | null;

		/** Public keys that should be added to the environment before it is started. */
		publicKeys?: Array<string>;
	}

	/** Request message for StartEnvironment. */
	export interface StartEnvironmentRequestFormProperties {

		/** The initial access token passed to the environment. If this is present and valid, the environment will be pre-authenticated with gcloud so that the user can run gcloud commands in Cloud Shell without having to log in. This code can be updated later by calling AuthorizeEnvironment. */
		accessToken: FormControl<string | null | undefined>,
	}
	export function CreateStartEnvironmentRequestFormGroup() {
		return new FormGroup<StartEnvironmentRequestFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message included in the response field of operations returned from StartEnvironment once the operation is complete. */
	export interface StartEnvironmentResponse {

		/** A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID "default". */
		environment?: Environment;
	}

	/** Message included in the response field of operations returned from StartEnvironment once the operation is complete. */
	export interface StartEnvironmentResponseFormProperties {
	}
	export function CreateStartEnvironmentResponseFormGroup() {
		return new FormGroup<StartEnvironmentResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.
		 * Post v1/{environment}:addPublicKey
		 * @param {string} environment Environment this key should be added to, e.g. `users/me/environments/default`.
		 * @return {Operation} Successful response
		 */
		Cloudshell_users_environments_addPublicKey(environment: string, requestBody: AddPublicKeyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':addPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.
		 * Post v1/{environment}:removePublicKey
		 * @param {string} environment Environment this key should be removed from, e.g. `users/me/environments/default`.
		 * @return {Operation} Successful response
		 */
		Cloudshell_users_environments_removePublicKey(environment: string, requestBody: RemovePublicKeyRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (environment == null ? '' : encodeURIComponent(environment)) + ':removePublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
		 * Delete v1/{name}
		 * @param {string} name The name of the operation resource to be deleted.
		 * @return {Empty} Successful response
		 */
		Cloudshell_operations_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets an environment. Returns NOT_FOUND if the environment does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {Environment} Successful response
		 */
		Cloudshell_users_environments_get(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<Environment> {
			return this.http.get<Environment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.
		 * Post v1/{name}:authorize
		 * @param {string} name Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
		 * @return {Operation} Successful response
		 */
		Cloudshell_users_environments_authorize(name: string, requestBody: AuthorizeEnvironmentRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':authorize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Cloudshell_operations_cancel(name: string, requestBody: CancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.
		 * Post v1/{name}:start
		 * @param {string} name Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`.
		 * @return {Operation} Successful response
		 */
		Cloudshell_users_environments_start(name: string, requestBody: StartEnvironmentRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

