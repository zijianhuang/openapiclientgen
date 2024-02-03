import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The response for downloading a model to device. */
	export interface DownloadModelResponse {

		/** Output only. A download URI for the model/zip file. */
		downloadUri?: string | null;

		/** Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated. */
		expireTime?: string | null;

		/** Output only. The format of the model being downloaded. */
		modelFormat?: DownloadModelResponseModelFormat | null;

		/** Output only. The size of the file(s), if this information is available. */
		sizeBytes?: string | null;
	}

	/** The response for downloading a model to device. */
	export interface DownloadModelResponseFormProperties {

		/** Output only. A download URI for the model/zip file. */
		downloadUri: FormControl<string | null | undefined>,

		/** Output only. The time that the download URI link expires. If the link has expired, the REST call must be repeated. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The format of the model being downloaded. */
		modelFormat: FormControl<DownloadModelResponseModelFormat | null | undefined>,

		/** Output only. The size of the file(s), if this information is available. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateDownloadModelResponseFormGroup() {
		return new FormGroup<DownloadModelResponseFormProperties>({
			downloadUri: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			modelFormat: new FormControl<DownloadModelResponseModelFormat | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DownloadModelResponseModelFormat { MODEL_FORMAT_UNSPECIFIED = 'MODEL_FORMAT_UNSPECIFIED', TFLITE = 'TFLITE' }


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


	/** The response for list models */
	export interface ListModelsResponse {

		/** The list of models */
		models?: Array<Model>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** The response for list models */
	export interface ListModelsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An ML model hosted in Firebase ML */
	export interface Model {

		/** Output only. Lists operation ids associated with this model whose status is NOT done. */
		activeOperations?: Array<Operation>;

		/** Output only. Timestamp when this model was created in Firebase ML. */
		createTime?: string | null;

		/** Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter. */
		displayName?: string | null;

		/** Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3 */
		etag?: string | null;

		/** Output only. The model_hash will change if a new file is available for download. */
		modelHash?: string | null;

		/** The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model. */
		name?: string | null;

		/** State common to all model types. Includes publishing and validation information. */
		state?: ModelState;

		/** User defined tags which can be used to group/filter models during listing */
		tags?: Array<string>;

		/** Information that is specific to TfLite models. */
		tfliteModel?: TfLiteModel;

		/** Output only. Timestamp when this model was updated in Firebase ML. */
		updateTime?: string | null;
	}

	/** An ML model hosted in Firebase ML */
	export interface ModelFormProperties {

		/** Output only. Timestamp when this model was created in Firebase ML. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The name of the model to create. The name can be up to 32 characters long and can consist only of ASCII Latin letters A-Z and a-z, underscores(_) and ASCII digits 0-9. It must start with a letter. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. See RFC7232 https://tools.ietf.org/html/rfc7232#section-2.3 */
		etag: FormControl<string | null | undefined>,

		/** Output only. The model_hash will change if a new file is available for download. */
		modelHash: FormControl<string | null | undefined>,

		/** The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model. */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp when this model was updated in Firebase ML. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			modelHash: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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


	/** State common to all model types. Includes publishing and validation information. */
	export interface ModelState {

		/** Indicates if this model has been published. */
		published?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		validationError?: Status;
	}

	/** State common to all model types. Includes publishing and validation information. */
	export interface ModelStateFormProperties {

		/** Indicates if this model has been published. */
		published: FormControl<boolean | null | undefined>,
	}
	export function CreateModelStateFormGroup() {
		return new FormGroup<ModelStateFormProperties>({
			published: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information that is specific to TfLite models. */
	export interface TfLiteModel {

		/** The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API) */
		automlModel?: string | null;

		/** The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file. */
		gcsTfliteUri?: string | null;

		/** Output only. The size of the TFLite model */
		sizeBytes?: string | null;
	}

	/** Information that is specific to TfLite models. */
	export interface TfLiteModelFormProperties {

		/** The AutoML model id referencing a model you created with the AutoML API. The name should have format 'projects//locations//models/' (This is the model resource name returned from the AutoML API) */
		automlModel: FormControl<string | null | undefined>,

		/** The TfLite file containing the model. (Stored in Google Cloud). The gcs_tflite_uri should have form: gs://some-bucket/some-model.tflite Note: If you update the file in the original location, it is necessary to call UpdateModel for ML to pick up and validate the updated file. */
		gcsTfliteUri: FormControl<string | null | undefined>,

		/** Output only. The size of the TFLite model */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateTfLiteModelFormGroup() {
		return new FormGroup<TfLiteModelFormProperties>({
			automlModel: new FormControl<string | null | undefined>(undefined),
			gcsTfliteUri: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is returned in the longrunning operations for create/update. */
	export interface ModelOperationMetadata {
		basicOperationStatus?: ModelOperationMetadataBasicOperationStatus | null;

		/** The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}` */
		name?: string | null;
	}

	/** This is returned in the longrunning operations for create/update. */
	export interface ModelOperationMetadataFormProperties {
		basicOperationStatus: FormControl<ModelOperationMetadataBasicOperationStatus | null | undefined>,

		/** The name of the model we are creating/updating The name must have the form `projects/{project_id}/models/{model_id}` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateModelOperationMetadataFormGroup() {
		return new FormGroup<ModelOperationMetadataFormProperties>({
			basicOperationStatus: new FormControl<ModelOperationMetadataBasicOperationStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelOperationMetadataBasicOperationStatus { BASIC_OPERATION_STATUS_UNSPECIFIED = 'BASIC_OPERATION_STATUS_UNSPECIFIED', BASIC_OPERATION_STATUS_UPLOADING = 'BASIC_OPERATION_STATUS_UPLOADING', BASIC_OPERATION_STATUS_VERIFYING = 'BASIC_OPERATION_STATUS_VERIFYING' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a model
		 * Delete v1beta2/{name}
		 * @param {string} name Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}`
		 * @return {Empty} Successful response
		 */
		Firebaseml_projects_models_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta2/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Firebaseml_projects_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a model. The longrunning operation will eventually return a Model.
		 * Patch v1beta2/{name}
		 * @param {string} name The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model.
		 * @param {string} updateMask The update mask
		 * @return {Operation} Successful response
		 */
		Firebaseml_projects_models_patch(name: string, updateMask: string | null | undefined, requestBody: Model): Observable<Operation> {
			return this.http.patch<Operation>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.
		 * Get v1beta2/{name}:download
		 * @param {string} name Required. The name of the model to download. The name must have the form `projects/{project}/models/{model}`
		 * @return {DownloadModelResponse} Successful response
		 */
		Firebaseml_projects_models_download(name: string): Observable<DownloadModelResponse> {
			return this.http.get<DownloadModelResponse>(this.baseUri + 'v1beta2/' + (name == null ? '' : encodeURIComponent(name)) + ':download', {});
		}

		/**
		 * Lists the models
		 * Get v1beta2/{parent}/models
		 * @param {string} parent Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}'
		 * @param {string} filter A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc"
		 * @param {number} pageSize The maximum number of items to return
		 * @param {string} pageToken The next_page_token value returned from a previous List request, if any.
		 * @return {ListModelsResponse} Successful response
		 */
		Firebaseml_projects_models_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a model in Firebase ML. The longrunning operation will eventually return a Model
		 * Post v1beta2/{parent}/models
		 * @param {string} parent Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}`
		 * @return {Operation} Successful response
		 */
		Firebaseml_projects_models_create(parent: string, requestBody: Model): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1beta2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

