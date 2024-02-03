import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBody {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType?: string | null;

		/** The HTTP request/response body as raw binary. */
		data?: string | null;

		/** Application specific response metadata. Must be set in the first response for streaming APIs. */
		extensions?: Array<string>;
	}

	/** Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged. */
	export interface GoogleApiHttpBodyFormProperties {

		/** The HTTP Content-Type header value specifying the content type of the body. */
		contentType: FormControl<string | null | undefined>,

		/** The HTTP request/response body as raw binary. */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGoogleApiHttpBodyFormGroup() {
		return new FormGroup<GoogleApiHttpBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the context in which an error occurred. */
	export interface GoogleCloudRetailLoggingErrorContext {

		/** HTTP request data that is related to a reported error. */
		httpRequest?: GoogleCloudRetailLoggingHttpRequestContext;

		/** Indicates a location in the source code of the service for which errors are reported. */
		reportLocation?: GoogleCloudRetailLoggingSourceLocation;
	}

	/** A description of the context in which an error occurred. */
	export interface GoogleCloudRetailLoggingErrorContextFormProperties {
	}
	export function CreateGoogleCloudRetailLoggingErrorContextFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingErrorContextFormProperties>({
		});

	}


	/** HTTP request data that is related to a reported error. */
	export interface GoogleCloudRetailLoggingHttpRequestContext {

		/** The HTTP response status code for the request. */
		responseStatusCode?: number | null;
	}

	/** HTTP request data that is related to a reported error. */
	export interface GoogleCloudRetailLoggingHttpRequestContextFormProperties {

		/** The HTTP response status code for the request. */
		responseStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailLoggingHttpRequestContextFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingHttpRequestContextFormProperties>({
			responseStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates a location in the source code of the service for which errors are reported. */
	export interface GoogleCloudRetailLoggingSourceLocation {

		/** Human-readable name of a function or method. For example, "google.cloud.retail.v2.UserEventService.ImportUserEvents". */
		functionName?: string | null;
	}

	/** Indicates a location in the source code of the service for which errors are reported. */
	export interface GoogleCloudRetailLoggingSourceLocationFormProperties {

		/** Human-readable name of a function or method. For example, "google.cloud.retail.v2.UserEventService.ImportUserEvents". */
		functionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailLoggingSourceLocationFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingSourceLocationFormProperties>({
			functionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent. */
	export interface GoogleCloudRetailLoggingErrorLog {

		/** A description of the context in which an error occurred. */
		context?: GoogleCloudRetailLoggingErrorContext;

		/** The error payload that is populated on LRO import APIs, including "google.cloud.retail.v2.ProductService.ImportProducts" and "google.cloud.retail.v2.EventService.ImportUserEvents". */
		importPayload?: GoogleCloudRetailLoggingImportErrorContext;

		/** A message describing the error. */
		message?: string | null;

		/** The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest" "type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest" */
		requestPayload?: {[id: string]: any };

		/** The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.retail.v2.PredictionService.Predict" "google.cloud.retail.v2.UserEventService.WriteUserEvent" "google.cloud.retail.v2.UserEventService.CollectUserEvent" */
		responsePayload?: {[id: string]: any };

		/** Describes a running service that sends errors. */
		serviceContext?: GoogleCloudRetailLoggingServiceContext;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent. */
	export interface GoogleCloudRetailLoggingErrorLogFormProperties {

		/** A message describing the error. */
		message: FormControl<string | null | undefined>,

		/** The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest" "type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest" */
		requestPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.retail.v2.PredictionService.Predict" "google.cloud.retail.v2.UserEventService.WriteUserEvent" "google.cloud.retail.v2.UserEventService.CollectUserEvent" */
		responsePayload: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRetailLoggingErrorLogFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingErrorLogFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			requestPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			responsePayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The error payload that is populated on LRO import APIs, including "google.cloud.retail.v2.ProductService.ImportProducts" and "google.cloud.retail.v2.EventService.ImportUserEvents". */
	export interface GoogleCloudRetailLoggingImportErrorContext {

		/** The detailed content which caused the error on importing a catalog item. */
		catalogItem?: string | null;

		/** Cloud Storage file path of the import source. Can be set for batch operation error. */
		gcsPath?: string | null;

		/** Line number of the content in file. Should be empty for permission or batch operation error. */
		lineNumber?: string | null;

		/** The operation resource name of the LRO. */
		operationName?: string | null;

		/** The detailed content which caused the error on importing a product. */
		product?: string | null;

		/** The detailed content which caused the error on importing a user event. */
		userEvent?: string | null;
	}

	/** The error payload that is populated on LRO import APIs, including "google.cloud.retail.v2.ProductService.ImportProducts" and "google.cloud.retail.v2.EventService.ImportUserEvents". */
	export interface GoogleCloudRetailLoggingImportErrorContextFormProperties {

		/** The detailed content which caused the error on importing a catalog item. */
		catalogItem: FormControl<string | null | undefined>,

		/** Cloud Storage file path of the import source. Can be set for batch operation error. */
		gcsPath: FormControl<string | null | undefined>,

		/** Line number of the content in file. Should be empty for permission or batch operation error. */
		lineNumber: FormControl<string | null | undefined>,

		/** The operation resource name of the LRO. */
		operationName: FormControl<string | null | undefined>,

		/** The detailed content which caused the error on importing a product. */
		product: FormControl<string | null | undefined>,

		/** The detailed content which caused the error on importing a user event. */
		userEvent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailLoggingImportErrorContextFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingImportErrorContextFormProperties>({
			catalogItem: new FormControl<string | null | undefined>(undefined),
			gcsPath: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<string | null | undefined>(undefined),
			userEvent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a running service that sends errors. */
	export interface GoogleCloudRetailLoggingServiceContext {

		/** An identifier of the service. For example, "retail.googleapis.com". */
		service?: string | null;
	}

	/** Describes a running service that sends errors. */
	export interface GoogleCloudRetailLoggingServiceContextFormProperties {

		/** An identifier of the service. For example, "retail.googleapis.com". */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailLoggingServiceContextFormGroup() {
		return new FormGroup<GoogleCloudRetailLoggingServiceContextFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2AddFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2AddFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2AddFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2AddFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2AddFulfillmentPlacesResponse {
	}

	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2AddFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2AddFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2AddFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2AddLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2AddLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2AddLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2AddLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2AddLocalInventoriesResponse {
	}

	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2AddLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2AddLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2AddLocalInventoriesResponseFormProperties>({
		});

	}


	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2CreateModelMetadata {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2CreateModelMetadataFormProperties {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2CreateModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2CreateModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2ImportCompletionDataResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2ImportCompletionDataResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2ImportCompletionDataResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ImportCompletionDataResponseFormProperties>({
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2ImportErrorsConfig {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2ImportErrorsConfigFormProperties {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2ImportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ImportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2ImportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic?: string | null;

		/** Deprecated. This field is never set. */
		requestId?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2ImportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** Deprecated. This field is never set. */
		requestId: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2ImportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ImportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2ImportProductsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;
	}

	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2ImportProductsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2ImportProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ImportProductsResponseFormProperties>({
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2ImportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2ImportErrorsConfig;

		/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
		importSummary?: GoogleCloudRetailV2UserEventImportSummary;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2ImportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2ImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ImportUserEventsResponseFormProperties>({
		});

	}


	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2UserEventImportSummary {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount?: string | null;
	}

	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2UserEventImportSummaryFormProperties {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2UserEventImportSummaryFormGroup() {
		return new FormGroup<GoogleCloudRetailV2UserEventImportSummaryFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2Model {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime?: string | null;

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState?: GoogleCloudRetailV2ModelDataState | null;

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName?: string | null;

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption?: GoogleCloudRetailV2ModelFilteringOption | null;

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime?: string | null;

		/** Additional model features config. */
		modelFeaturesConfig?: GoogleCloudRetailV2ModelModelFeaturesConfig;

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name?: string | null;

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective?: string | null;

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState?: GoogleCloudRetailV2ModelPeriodicTuningState | null;

		/** Output only. The list of valid serving configs associated with the PageOptimizationConfig. */
		servingConfigLists?: Array<GoogleCloudRetailV2ModelServingConfigList>;

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState?: GoogleCloudRetailV2ModelServingState | null;

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState?: GoogleCloudRetailV2ModelTrainingState | null;

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation?: string | null;

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type?: string | null;

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime?: string | null;
	}

	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2ModelFormProperties {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState: FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>,

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption: FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>,

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime: FormControl<string | null | undefined>,

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name: FormControl<string | null | undefined>,

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective: FormControl<string | null | undefined>,

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState: FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>,

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState: FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>,

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState: FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>,

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation: FormControl<string | null | undefined>,

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type: FormControl<string | null | undefined>,

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2ModelFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataState: new FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			filteringOption: new FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>(undefined),
			lastTuneTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimizationObjective: new FormControl<string | null | undefined>(undefined),
			periodicTuningState: new FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>(undefined),
			servingState: new FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>(undefined),
			trainingState: new FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>(undefined),
			tuningOperation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2ModelDataState { DATA_STATE_UNSPECIFIED = 'DATA_STATE_UNSPECIFIED', DATA_OK = 'DATA_OK', DATA_ERROR = 'DATA_ERROR' }

	export enum GoogleCloudRetailV2ModelFilteringOption { RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED = 'RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED', RECOMMENDATIONS_FILTERING_DISABLED = 'RECOMMENDATIONS_FILTERING_DISABLED', RECOMMENDATIONS_FILTERING_ENABLED = 'RECOMMENDATIONS_FILTERING_ENABLED' }


	/** Additional model features config. */
	export interface GoogleCloudRetailV2ModelModelFeaturesConfig {

		/** Additional configs for the frequently-bought-together model type. */
		frequentlyBoughtTogetherConfig?: GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig;
	}

	/** Additional model features config. */
	export interface GoogleCloudRetailV2ModelModelFeaturesConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2ModelModelFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ModelModelFeaturesConfigFormProperties>({
		});

	}


	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfig {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType?: GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null;
	}

	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigFormProperties {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType: FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigFormProperties>({
			contextProductsType: new FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType { CONTEXT_PRODUCTS_TYPE_UNSPECIFIED = 'CONTEXT_PRODUCTS_TYPE_UNSPECIFIED', SINGLE_CONTEXT_PRODUCT = 'SINGLE_CONTEXT_PRODUCT', MULTIPLE_CONTEXT_PRODUCTS = 'MULTIPLE_CONTEXT_PRODUCTS' }

	export enum GoogleCloudRetailV2ModelPeriodicTuningState { PERIODIC_TUNING_STATE_UNSPECIFIED = 'PERIODIC_TUNING_STATE_UNSPECIFIED', PERIODIC_TUNING_DISABLED = 'PERIODIC_TUNING_DISABLED', ALL_TUNING_DISABLED = 'ALL_TUNING_DISABLED', PERIODIC_TUNING_ENABLED = 'PERIODIC_TUNING_ENABLED' }


	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2ModelServingConfigList {

		/** Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`. */
		servingConfigIds?: Array<string>;
	}

	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2ModelServingConfigListFormProperties {
	}
	export function CreateGoogleCloudRetailV2ModelServingConfigListFormGroup() {
		return new FormGroup<GoogleCloudRetailV2ModelServingConfigListFormProperties>({
		});

	}

	export enum GoogleCloudRetailV2ModelServingState { SERVING_STATE_UNSPECIFIED = 'SERVING_STATE_UNSPECIFIED', INACTIVE = 'INACTIVE', ACTIVE = 'ACTIVE', TUNED = 'TUNED' }

	export enum GoogleCloudRetailV2ModelTrainingState { TRAINING_STATE_UNSPECIFIED = 'TRAINING_STATE_UNSPECIFIED', PAUSED = 'PAUSED', TRAINING = 'TRAINING' }


	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2PurgeMetadata {
	}

	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2PurgeMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2PurgeMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2PurgeMetadataFormProperties>({
		});

	}


	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2PurgeProductsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2PurgeProductsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2PurgeProductsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2PurgeProductsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2PurgeProductsResponse {

		/** The total count of products purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of the product names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2PurgeProductsResponseFormProperties {

		/** The total count of products purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2PurgeProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2PurgeProductsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2PurgeUserEventsResponse {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount?: string | null;
	}

	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2PurgeUserEventsResponseFormProperties {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2PurgeUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2PurgeUserEventsResponseFormProperties>({
			purgedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2RejoinUserEventsMetadata {
	}

	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2RejoinUserEventsMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2RejoinUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RejoinUserEventsMetadataFormProperties>({
		});

	}


	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2RejoinUserEventsResponse {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount?: string | null;
	}

	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2RejoinUserEventsResponseFormProperties {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2RejoinUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RejoinUserEventsResponseFormProperties>({
			rejoinedUserEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2RemoveFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2RemoveFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RemoveFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2RemoveFulfillmentPlacesResponse {
	}

	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2RemoveFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2RemoveFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RemoveFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2RemoveLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2RemoveLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2RemoveLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RemoveLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2RemoveLocalInventoriesResponse {
	}

	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2RemoveLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2RemoveLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2RemoveLocalInventoriesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2SetInventoryMetadata {
	}

	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2SetInventoryMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2SetInventoryMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2SetInventoryMetadataFormProperties>({
		});

	}


	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2SetInventoryResponse {
	}

	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2SetInventoryResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2SetInventoryResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2SetInventoryResponseFormProperties>({
		});

	}


	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2TuneModelMetadata {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2TuneModelMetadataFormProperties {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2TuneModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2TuneModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2TuneModelResponse {
	}

	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2TuneModelResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2TuneModelResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2TuneModelResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaAddFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse {
	}

	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaAddFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaAddFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaAddFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2alphaAddLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2alphaAddLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaAddLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaAddLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2alphaAddLocalInventoriesResponse {
	}

	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2alphaAddLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaAddLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaAddLocalInventoriesResponseFormProperties>({
		});

	}


	/** A BigQuery output result. */
	export interface GoogleCloudRetailV2alphaBigQueryOutputResult {

		/** The ID of a BigQuery Dataset. */
		datasetId?: string | null;

		/** The ID of a BigQuery Table. */
		tableId?: string | null;
	}

	/** A BigQuery output result. */
	export interface GoogleCloudRetailV2alphaBigQueryOutputResultFormProperties {

		/** The ID of a BigQuery Dataset. */
		datasetId: FormControl<string | null | undefined>,

		/** The ID of a BigQuery Table. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaBigQueryOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaBigQueryOutputResultFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common metadata related to the progress of the operations. */
	export interface GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Common metadata related to the progress of the operations. */
	export interface GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2alphaCreateModelMetadata {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2alphaCreateModelMetadataFormProperties {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaCreateModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaCreateModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the EnrollSolution method. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaEnrollSolutionMetadata {
	}

	/** Metadata related to the EnrollSolution method. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaEnrollSolutionMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaEnrollSolutionMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaEnrollSolutionMetadataFormProperties>({
		});

	}


	/** Response for EnrollSolution method. */
	export interface GoogleCloudRetailV2alphaEnrollSolutionResponse {

		/** Retail API solution that the project has enrolled. */
		enrolledSolution?: GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution | null;
	}

	/** Response for EnrollSolution method. */
	export interface GoogleCloudRetailV2alphaEnrollSolutionResponseFormProperties {

		/** Retail API solution that the project has enrolled. */
		enrolledSolution: FormControl<GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaEnrollSolutionResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaEnrollSolutionResponseFormProperties>({
			enrolledSolution: new FormControl<GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution { SOLUTION_TYPE_UNSPECIFIED = 'SOLUTION_TYPE_UNSPECIFIED', SOLUTION_TYPE_RECOMMENDATION = 'SOLUTION_TYPE_RECOMMENDATION', SOLUTION_TYPE_SEARCH = 'SOLUTION_TYPE_SEARCH' }


	/** Response of the ExportAnalyticsMetricsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportAnalyticsMetricsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Export related errors. */
		errorsConfig?: GoogleCloudRetailV2alphaExportErrorsConfig;

		/** Output result that stores the information about where the exported data is stored. */
		outputResult?: GoogleCloudRetailV2alphaOutputResult;
	}

	/** Response of the ExportAnalyticsMetricsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportAnalyticsMetricsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaExportAnalyticsMetricsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaExportAnalyticsMetricsResponseFormProperties>({
		});

	}


	/** Configuration of destination for Export related errors. */
	export interface GoogleCloudRetailV2alphaExportErrorsConfig {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Export related errors. */
	export interface GoogleCloudRetailV2alphaExportErrorsConfigFormProperties {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaExportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaExportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output result that stores the information about where the exported data is stored. */
	export interface GoogleCloudRetailV2alphaOutputResult {

		/** The BigQuery location where the result is stored. */
		bigqueryResult?: Array<GoogleCloudRetailV2alphaBigQueryOutputResult>;

		/** The Google Cloud Storage location where the result is stored. */
		gcsResult?: Array<GoogleCloudRetailV2alphaGcsOutputResult>;
	}

	/** Output result that stores the information about where the exported data is stored. */
	export interface GoogleCloudRetailV2alphaOutputResultFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaOutputResultFormProperties>({
		});

	}


	/** A Gcs output result. */
	export interface GoogleCloudRetailV2alphaGcsOutputResult {

		/** The uri of Gcs output */
		outputUri?: string | null;
	}

	/** A Gcs output result. */
	export interface GoogleCloudRetailV2alphaGcsOutputResultFormProperties {

		/** The uri of Gcs output */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaGcsOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaGcsOutputResultFormProperties>({
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaExportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaExportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaExportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaExportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportProductsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Export related errors. */
		errorsConfig?: GoogleCloudRetailV2alphaExportErrorsConfig;

		/** Output result that stores the information about where the exported data is stored. */
		outputResult?: GoogleCloudRetailV2alphaOutputResult;
	}

	/** Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportProductsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaExportProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaExportProductsResponseFormProperties>({
		});

	}


	/** Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Export related errors. */
		errorsConfig?: GoogleCloudRetailV2alphaExportErrorsConfig;

		/** Output result that stores the information about where the exported data is stored. */
		outputResult?: GoogleCloudRetailV2alphaOutputResult;
	}

	/** Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaExportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaExportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaExportUserEventsResponseFormProperties>({
		});

	}


	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2alphaImportCompletionDataResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2alphaImportCompletionDataResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaImportCompletionDataResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaImportCompletionDataResponseFormProperties>({
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2alphaImportErrorsConfig {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2alphaImportErrorsConfigFormProperties {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaImportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaImportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaImportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic?: string | null;

		/** Deprecated. This field is never set. */
		requestId?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Metadata related to transform user events operation. */
		transformedUserEventsMetadata?: GoogleCloudRetailV2alphaTransformedUserEventsMetadata;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaImportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** Deprecated. This field is never set. */
		requestId: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaImportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaImportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to transform user events operation. */
	export interface GoogleCloudRetailV2alphaTransformedUserEventsMetadata {

		/** Count of entries in the source user events BigQuery table. */
		sourceEventsCount?: string | null;

		/** Count of entries in the transformed user events BigQuery table, which could be different from the actually imported number of user events. */
		transformedEventsCount?: string | null;
	}

	/** Metadata related to transform user events operation. */
	export interface GoogleCloudRetailV2alphaTransformedUserEventsMetadataFormProperties {

		/** Count of entries in the source user events BigQuery table. */
		sourceEventsCount: FormControl<string | null | undefined>,

		/** Count of entries in the transformed user events BigQuery table, which could be different from the actually imported number of user events. */
		transformedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaTransformedUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaTransformedUserEventsMetadataFormProperties>({
			sourceEventsCount: new FormControl<string | null | undefined>(undefined),
			transformedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaImportProductsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;
	}

	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaImportProductsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaImportProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaImportProductsResponseFormProperties>({
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaImportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2alphaImportErrorsConfig;

		/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
		importSummary?: GoogleCloudRetailV2alphaUserEventImportSummary;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2alphaImportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaImportUserEventsResponseFormProperties>({
		});

	}


	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2alphaUserEventImportSummary {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount?: string | null;
	}

	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2alphaUserEventImportSummaryFormProperties {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaUserEventImportSummaryFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaUserEventImportSummaryFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2alphaMerchantCenterAccountLink {

		/** Required. The branch ID (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId?: string | null;

		/** Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds. */
		feedFilters?: Array<GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter>;

		/** The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`. */
		feedLabel?: string | null;

		/** Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`. */
		id?: string | null;

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`. */
		languageCode?: string | null;

		/** Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId?: string | null;

		/** Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`. */
		name?: string | null;

		/** Output only. Google Cloud project ID. */
		projectId?: string | null;

		/** Optional. An optional arbitrary string that could be used as a tag for tracking link source. */
		source?: string | null;

		/** Output only. Represents the state of the link. */
		state?: GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null;
	}

	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2alphaMerchantCenterAccountLinkFormProperties {

		/** Required. The branch ID (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId: FormControl<string | null | undefined>,

		/** The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`. */
		feedLabel: FormControl<string | null | undefined>,

		/** Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`. */
		id: FormControl<string | null | undefined>,

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId: FormControl<string | null | undefined>,

		/** Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Google Cloud project ID. */
		projectId: FormControl<string | null | undefined>,

		/** Optional. An optional arbitrary string that could be used as a tag for tracking link source. */
		source: FormControl<string | null | undefined>,

		/** Output only. Represents the state of the link. */
		state: FormControl<GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaMerchantCenterAccountLinkFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaMerchantCenterAccountLinkFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			feedLabel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			merchantCenterAccountId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null | undefined>(undefined),
		});

	}


	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter {

		/** Merchant Center primary feed ID. */
		primaryFeedId?: string | null;

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName?: string | null;
	}

	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilterFormProperties {

		/** Merchant Center primary feed ID. */
		primaryFeedId: FormControl<string | null | undefined>,

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilterFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilterFormProperties>({
			primaryFeedId: new FormControl<string | null | undefined>(undefined),
			primaryFeedName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2alphaMerchantCenterAccountLinkState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', ACTIVE = 'ACTIVE', FAILED = 'FAILED' }


	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2alphaModel {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime?: string | null;

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState?: GoogleCloudRetailV2ModelDataState | null;

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName?: string | null;

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption?: GoogleCloudRetailV2ModelFilteringOption | null;

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime?: string | null;

		/** Additional model features config. */
		modelFeaturesConfig?: GoogleCloudRetailV2alphaModelModelFeaturesConfig;

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name?: string | null;

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective?: string | null;

		/** The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey. */
		pageOptimizationConfig?: GoogleCloudRetailV2alphaModelPageOptimizationConfig;

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState?: GoogleCloudRetailV2ModelPeriodicTuningState | null;

		/** Output only. The list of valid serving configs associated with the PageOptimizationConfig. */
		servingConfigLists?: Array<GoogleCloudRetailV2alphaModelServingConfigList>;

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState?: GoogleCloudRetailV2ModelServingState | null;

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState?: GoogleCloudRetailV2ModelTrainingState | null;

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation?: string | null;

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type?: string | null;

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime?: string | null;
	}

	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2alphaModelFormProperties {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState: FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>,

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption: FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>,

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime: FormControl<string | null | undefined>,

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name: FormControl<string | null | undefined>,

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective: FormControl<string | null | undefined>,

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState: FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>,

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState: FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>,

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState: FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>,

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation: FormControl<string | null | undefined>,

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type: FormControl<string | null | undefined>,

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaModelFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataState: new FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			filteringOption: new FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>(undefined),
			lastTuneTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimizationObjective: new FormControl<string | null | undefined>(undefined),
			periodicTuningState: new FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>(undefined),
			servingState: new FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>(undefined),
			trainingState: new FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>(undefined),
			tuningOperation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional model features config. */
	export interface GoogleCloudRetailV2alphaModelModelFeaturesConfig {

		/** Additional configs for the frequently-bought-together model type. */
		frequentlyBoughtTogetherConfig?: GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig;
	}

	/** Additional model features config. */
	export interface GoogleCloudRetailV2alphaModelModelFeaturesConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaModelModelFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelModelFeaturesConfigFormProperties>({
		});

	}


	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfig {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType?: GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null;
	}

	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigFormProperties {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType: FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelFrequentlyBoughtTogetherFeaturesConfigFormProperties>({
			contextProductsType: new FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>(undefined),
		});

	}


	/** The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfig {

		/** Required. The type of UserEvent this page optimization is shown for. Each page has an associated event type - this will be the corresponding event type for the page that the page optimization model is used on. Supported types: * `add-to-cart`: Products being added to cart. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed * `category-page-view`: Homepage viewed * `shopping-cart-page-view`: User viewing a shopping cart. `home-page-view` only allows models with type `recommended-for-you`. All other page_optimization_event_type allow all Model.types. */
		pageOptimizationEventType?: string | null;

		/** Required. A list of panel configurations. Limit = 5. */
		panels?: Array<GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel>;

		/** Optional. How to restrict results across panels e.g. can the same ServingConfig be shown on multiple panels at once. If unspecified, default to `UNIQUE_MODEL_RESTRICTION`. */
		restriction?: GoogleCloudRetailV2alphaModelPageOptimizationConfigRestriction | null;
	}

	/** The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfigFormProperties {

		/** Required. The type of UserEvent this page optimization is shown for. Each page has an associated event type - this will be the corresponding event type for the page that the page optimization model is used on. Supported types: * `add-to-cart`: Products being added to cart. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed * `category-page-view`: Homepage viewed * `shopping-cart-page-view`: User viewing a shopping cart. `home-page-view` only allows models with type `recommended-for-you`. All other page_optimization_event_type allow all Model.types. */
		pageOptimizationEventType: FormControl<string | null | undefined>,

		/** Optional. How to restrict results across panels e.g. can the same ServingConfig be shown on multiple panels at once. If unspecified, default to `UNIQUE_MODEL_RESTRICTION`. */
		restriction: FormControl<GoogleCloudRetailV2alphaModelPageOptimizationConfigRestriction | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaModelPageOptimizationConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelPageOptimizationConfigFormProperties>({
			pageOptimizationEventType: new FormControl<string | null | undefined>(undefined),
			restriction: new FormControl<GoogleCloudRetailV2alphaModelPageOptimizationConfigRestriction | null | undefined>(undefined),
		});

	}


	/** An individual panel with a list of ServingConfigs to consider for it. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel {

		/** Required. The candidates to consider on the panel. */
		candidates?: Array<GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate>;

		/** A candidate to consider for a given panel. Currently only ServingConfig are valid candidates. */
		defaultCandidate?: GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate;

		/** Optional. The name to display for the panel. */
		displayName?: string | null;
	}

	/** An individual panel with a list of ServingConfigs to consider for it. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfigPanelFormProperties {

		/** Optional. The name to display for the panel. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaModelPageOptimizationConfigPanelFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelPageOptimizationConfigPanelFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A candidate to consider for a given panel. Currently only ServingConfig are valid candidates. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate {

		/** This has to be a valid ServingConfig identifier. For example, for a ServingConfig with full name: `projects/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config`, this would be `my_candidate_config`. */
		servingConfigId?: string | null;
	}

	/** A candidate to consider for a given panel. Currently only ServingConfig are valid candidates. */
	export interface GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateFormProperties {

		/** This has to be a valid ServingConfig identifier. For example, for a ServingConfig with full name: `projects/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config`, this would be `my_candidate_config`. */
		servingConfigId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidateFormProperties>({
			servingConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2alphaModelPageOptimizationConfigRestriction { RESTRICTION_UNSPECIFIED = 'RESTRICTION_UNSPECIFIED', NO_RESTRICTION = 'NO_RESTRICTION', UNIQUE_SERVING_CONFIG_RESTRICTION = 'UNIQUE_SERVING_CONFIG_RESTRICTION', UNIQUE_MODEL_RESTRICTION = 'UNIQUE_MODEL_RESTRICTION', UNIQUE_MODEL_TYPE_RESTRICTION = 'UNIQUE_MODEL_TYPE_RESTRICTION' }


	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2alphaModelServingConfigList {

		/** Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`. */
		servingConfigIds?: Array<string>;
	}

	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2alphaModelServingConfigListFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaModelServingConfigListFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaModelServingConfigListFormProperties>({
		});

	}


	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaPurgeMetadata {
	}

	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaPurgeMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaPurgeMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaPurgeMetadataFormProperties>({
		});

	}


	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaPurgeProductsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2alphaPurgeProductsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaPurgeProductsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaPurgeProductsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2alphaPurgeProductsResponse {

		/** The total count of products purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of the product names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2alphaPurgeProductsResponseFormProperties {

		/** The total count of products purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaPurgeProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaPurgeProductsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2alphaPurgeUserEventsResponse {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount?: string | null;
	}

	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2alphaPurgeUserEventsResponseFormProperties {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaPurgeUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaPurgeUserEventsResponseFormProperties>({
			purgedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2alphaRejoinUserEventsMetadata {
	}

	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2alphaRejoinUserEventsMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaRejoinUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRejoinUserEventsMetadataFormProperties>({
		});

	}


	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2alphaRejoinUserEventsResponse {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount?: string | null;
	}

	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2alphaRejoinUserEventsResponseFormProperties {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaRejoinUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRejoinUserEventsResponseFormProperties>({
			rejoinedUserEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse {
	}

	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaRemoveLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2alphaRemoveLocalInventoriesResponse {
	}

	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2alphaRemoveLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaRemoveLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaRemoveLocalInventoriesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2alphaSetInventoryMetadata {
	}

	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2alphaSetInventoryMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaSetInventoryMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaSetInventoryMetadataFormProperties>({
		});

	}


	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2alphaSetInventoryResponse {
	}

	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2alphaSetInventoryResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaSetInventoryResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaSetInventoryResponseFormProperties>({
		});

	}


	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2alphaTuneModelMetadata {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2alphaTuneModelMetadataFormProperties {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2alphaTuneModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaTuneModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2alphaTuneModelResponse {
	}

	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2alphaTuneModelResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2alphaTuneModelResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2alphaTuneModelResponseFormProperties>({
		});

	}


	/** Request for CatalogService.AddCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaAddCatalogAttributeRequest {

		/** Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute. */
		catalogAttribute?: GoogleCloudRetailV2betaCatalogAttribute;
	}

	/** Request for CatalogService.AddCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaAddCatalogAttributeRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAddCatalogAttributeRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddCatalogAttributeRequestFormProperties>({
		});

	}


	/** Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute. */
	export interface GoogleCloudRetailV2betaCatalogAttribute {

		/** If DYNAMIC_FACETABLE_ENABLED, attribute values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if CatalogAttribute.indexable_option is INDEXABLE_DISABLED. Otherwise, an INVALID_ARGUMENT error is returned. Must be specified, otherwise throws INVALID_FORMAT error. */
		dynamicFacetableOption?: GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOption | null;

		/** If EXACT_SEARCHABLE_ENABLED, attribute values will be exact searchable. This property only applies to textual custom attributes and requires indexable set to enabled to enable exact-searchable. If unset, the server behavior defaults to EXACT_SEARCHABLE_DISABLED. */
		exactSearchableOption?: GoogleCloudRetailV2betaCatalogAttributeExactSearchableOption | null;

		/** Possible options for the facet that corresponds to the current attribute config. */
		facetConfig?: GoogleCloudRetailV2betaCatalogAttributeFacetConfig;

		/** Output only. Indicates whether this attribute has been used by any products. `True` if at least one Product is using this attribute in Product.attributes. Otherwise, this field is `False`. CatalogAttribute can be pre-loaded by using CatalogService.AddCatalogAttribute, CatalogService.ImportCatalogAttributes, or CatalogService.UpdateAttributesConfig APIs. This field is `False` for pre-loaded CatalogAttributes. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. After catalog changes, it takes about 10 minutes for this field to update. */
		inUse?: boolean | null;

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if INDEXABLE_ENABLED attribute values are indexed so that it can be filtered, faceted, or boosted in SearchService.Search. Must be specified when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. */
		indexableOption?: GoogleCloudRetailV2betaCatalogAttributeIndexableOption | null;

		/** Required. Attribute name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. To be indexable, the attribute name can contain only alpha-numeric characters and underscores. For example, an attribute named `attributes.abc_xyz` can be indexed, but an attribute named `attributes.abc-xyz` cannot be indexed. If the attribute key starts with `attributes.`, then the attribute is a custom attribute. Attributes such as `brands`, `patterns`, and `title` are built-in and called system attributes. */
		key?: string | null;

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if RECOMMENDATIONS_FILTERING_ENABLED, attribute values are filterable for recommendations. This option works for categorical features only, does not work for numerical features, inventory filtering. */
		recommendationsFilteringOption?: GoogleCloudRetailV2ModelFilteringOption | null;

		/** If RETRIEVABLE_ENABLED, attribute values are retrievable in the search results. If unset, the server behavior defaults to RETRIEVABLE_DISABLED. */
		retrievableOption?: GoogleCloudRetailV2betaCatalogAttributeRetrievableOption | null;

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if SEARCHABLE_ENABLED, attribute values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but attribute type is numerical, attribute values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical attributes. Must be specified, when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. */
		searchableOption?: GoogleCloudRetailV2betaCatalogAttributeSearchableOption | null;

		/** Output only. The type of this attribute. This is derived from the attribute in Product.attributes. */
		type?: GoogleCloudRetailV2betaCatalogAttributeType | null;
	}

	/** Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFormProperties {

		/** If DYNAMIC_FACETABLE_ENABLED, attribute values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if CatalogAttribute.indexable_option is INDEXABLE_DISABLED. Otherwise, an INVALID_ARGUMENT error is returned. Must be specified, otherwise throws INVALID_FORMAT error. */
		dynamicFacetableOption: FormControl<GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOption | null | undefined>,

		/** If EXACT_SEARCHABLE_ENABLED, attribute values will be exact searchable. This property only applies to textual custom attributes and requires indexable set to enabled to enable exact-searchable. If unset, the server behavior defaults to EXACT_SEARCHABLE_DISABLED. */
		exactSearchableOption: FormControl<GoogleCloudRetailV2betaCatalogAttributeExactSearchableOption | null | undefined>,

		/** Output only. Indicates whether this attribute has been used by any products. `True` if at least one Product is using this attribute in Product.attributes. Otherwise, this field is `False`. CatalogAttribute can be pre-loaded by using CatalogService.AddCatalogAttribute, CatalogService.ImportCatalogAttributes, or CatalogService.UpdateAttributesConfig APIs. This field is `False` for pre-loaded CatalogAttributes. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. After catalog changes, it takes about 10 minutes for this field to update. */
		inUse: FormControl<boolean | null | undefined>,

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if INDEXABLE_ENABLED attribute values are indexed so that it can be filtered, faceted, or boosted in SearchService.Search. Must be specified when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. */
		indexableOption: FormControl<GoogleCloudRetailV2betaCatalogAttributeIndexableOption | null | undefined>,

		/** Required. Attribute name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. To be indexable, the attribute name can contain only alpha-numeric characters and underscores. For example, an attribute named `attributes.abc_xyz` can be indexed, but an attribute named `attributes.abc-xyz` cannot be indexed. If the attribute key starts with `attributes.`, then the attribute is a custom attribute. Attributes such as `brands`, `patterns`, and `title` are built-in and called system attributes. */
		key: FormControl<string | null | undefined>,

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if RECOMMENDATIONS_FILTERING_ENABLED, attribute values are filterable for recommendations. This option works for categorical features only, does not work for numerical features, inventory filtering. */
		recommendationsFilteringOption: FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>,

		/** If RETRIEVABLE_ENABLED, attribute values are retrievable in the search results. If unset, the server behavior defaults to RETRIEVABLE_DISABLED. */
		retrievableOption: FormControl<GoogleCloudRetailV2betaCatalogAttributeRetrievableOption | null | undefined>,

		/** When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if SEARCHABLE_ENABLED, attribute values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but attribute type is numerical, attribute values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical attributes. Must be specified, when AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, otherwise throws INVALID_FORMAT error. */
		searchableOption: FormControl<GoogleCloudRetailV2betaCatalogAttributeSearchableOption | null | undefined>,

		/** Output only. The type of this attribute. This is derived from the attribute in Product.attributes. */
		type: FormControl<GoogleCloudRetailV2betaCatalogAttributeType | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCatalogAttributeFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogAttributeFormProperties>({
			dynamicFacetableOption: new FormControl<GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOption | null | undefined>(undefined),
			exactSearchableOption: new FormControl<GoogleCloudRetailV2betaCatalogAttributeExactSearchableOption | null | undefined>(undefined),
			inUse: new FormControl<boolean | null | undefined>(undefined),
			indexableOption: new FormControl<GoogleCloudRetailV2betaCatalogAttributeIndexableOption | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			recommendationsFilteringOption: new FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>(undefined),
			retrievableOption: new FormControl<GoogleCloudRetailV2betaCatalogAttributeRetrievableOption | null | undefined>(undefined),
			searchableOption: new FormControl<GoogleCloudRetailV2betaCatalogAttributeSearchableOption | null | undefined>(undefined),
			type: new FormControl<GoogleCloudRetailV2betaCatalogAttributeType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOption { DYNAMIC_FACETABLE_OPTION_UNSPECIFIED = 'DYNAMIC_FACETABLE_OPTION_UNSPECIFIED', DYNAMIC_FACETABLE_ENABLED = 'DYNAMIC_FACETABLE_ENABLED', DYNAMIC_FACETABLE_DISABLED = 'DYNAMIC_FACETABLE_DISABLED' }

	export enum GoogleCloudRetailV2betaCatalogAttributeExactSearchableOption { EXACT_SEARCHABLE_OPTION_UNSPECIFIED = 'EXACT_SEARCHABLE_OPTION_UNSPECIFIED', EXACT_SEARCHABLE_ENABLED = 'EXACT_SEARCHABLE_ENABLED', EXACT_SEARCHABLE_DISABLED = 'EXACT_SEARCHABLE_DISABLED' }


	/** Possible options for the facet that corresponds to the current attribute config. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfig {

		/** If you don't set the facet SearchRequest.FacetSpec.FacetKey.intervals in the request to a numerical attribute, then we use the computed intervals with rounded bounds obtained from all its product numerical attribute values. The computed intervals might not be ideal for some attributes. Therefore, we give you the option to overwrite them with the facet_intervals field. The maximum of facet intervals per CatalogAttribute is 40. Each interval must have a lower bound or an upper bound. If both bounds are provided, then the lower bound must be smaller or equal than the upper bound. */
		facetIntervals?: Array<GoogleCloudRetailV2betaInterval>;

		/** Each instance represents a list of attribute values to ignore as facet values for a specific time range. The maximum number of instances per CatalogAttribute is 25. */
		ignoredFacetValues?: Array<GoogleCloudRetailV2betaCatalogAttributeFacetConfigIgnoredFacetValues>;

		/** Each instance replaces a list of facet values by a merged facet value. If a facet value is not in any list, then it will stay the same. To avoid conflicts, only paths of length 1 are accepted. In other words, if "dark_blue" merged into "BLUE", then the latter can't merge into "blues" because this would create a path of length 2. The maximum number of instances of MergedFacetValue per CatalogAttribute is 100. This feature is available only for textual custom attributes. */
		mergedFacetValues?: Array<GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValue>;

		/** Options to rerank based on facet values engaged by the user for the current key. That key needs to be a custom textual key and facetable. To use this control, you also need to pass all the facet keys engaged by the user in the request using the field [SearchRequest.FacetSpec]. In particular, if you don't pass the facet keys engaged that you want to rerank on, this control won't be effective. Moreover, to obtain better results, the facet values that you want to rerank on should be close to English (ideally made of words, underscores, and spaces). */
		rerankConfig?: GoogleCloudRetailV2betaCatalogAttributeFacetConfigRerankConfig;
	}

	/** Possible options for the facet that corresponds to the current attribute config. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaCatalogAttributeFacetConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogAttributeFacetConfigFormProperties>({
		});

	}


	/** A floating point interval. */
	export interface GoogleCloudRetailV2betaInterval {

		/** Exclusive upper bound. */
		exclusiveMaximum?: number | null;

		/** Exclusive lower bound. */
		exclusiveMinimum?: number | null;

		/** Inclusive upper bound. */
		maximum?: number | null;

		/** Inclusive lower bound. */
		minimum?: number | null;
	}

	/** A floating point interval. */
	export interface GoogleCloudRetailV2betaIntervalFormProperties {

		/** Exclusive upper bound. */
		exclusiveMaximum: FormControl<number | null | undefined>,

		/** Exclusive lower bound. */
		exclusiveMinimum: FormControl<number | null | undefined>,

		/** Inclusive upper bound. */
		maximum: FormControl<number | null | undefined>,

		/** Inclusive lower bound. */
		minimum: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaIntervalFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaIntervalFormProperties>({
			exclusiveMaximum: new FormControl<number | null | undefined>(undefined),
			exclusiveMinimum: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Facet values to ignore on facets during the specified time range for the given SearchResponse.Facet.key attribute. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigIgnoredFacetValues {

		/** If start time is empty and end time is not empty, then ignore these facet values before end time. */
		endTime?: string | null;

		/** Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time. */
		startTime?: string | null;

		/** List of facet values to ignore for the following time range. The facet values are the same as the attribute values. There is a limit of 10 values per instance of IgnoredFacetValues. Each value can have at most 128 characters. */
		values?: Array<string>;
	}

	/** Facet values to ignore on facets during the specified time range for the given SearchResponse.Facet.key attribute. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigIgnoredFacetValuesFormProperties {

		/** If start time is empty and end time is not empty, then ignore these facet values before end time. */
		endTime: FormControl<string | null | undefined>,

		/** Time range for the current list of facet values to ignore. If multiple time ranges are specified for an facet value for the current attribute, consider all of them. If both are empty, ignore always. If start time and end time are set, then start time must be before end time. If start time is not empty and end time is empty, then will ignore these facet values after the start time. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCatalogAttributeFacetConfigIgnoredFacetValuesFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogAttributeFacetConfigIgnoredFacetValuesFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replaces a set of textual facet values by the same (possibly different) merged facet value. Each facet value should appear at most once as a value per CatalogAttribute. This feature is available only for textual custom attributes. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValue {

		/** All the previous values are replaced by this merged facet value. This merged_value must be non-empty and can have up to 128 characters. */
		mergedValue?: string | null;

		/** All the facet values that are replaces by the same merged_value that follows. The maximum number of values per MergedFacetValue is 25. Each value can have up to 128 characters. */
		values?: Array<string>;
	}

	/** Replaces a set of textual facet values by the same (possibly different) merged facet value. Each facet value should appear at most once as a value per CatalogAttribute. This feature is available only for textual custom attributes. */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValueFormProperties {

		/** All the previous values are replaced by this merged facet value. This merged_value must be non-empty and can have up to 128 characters. */
		mergedValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValueFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogAttributeFacetConfigMergedFacetValueFormProperties>({
			mergedValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options to rerank based on facet values engaged by the user for the current key. That key needs to be a custom textual key and facetable. To use this control, you also need to pass all the facet keys engaged by the user in the request using the field [SearchRequest.FacetSpec]. In particular, if you don't pass the facet keys engaged that you want to rerank on, this control won't be effective. Moreover, to obtain better results, the facet values that you want to rerank on should be close to English (ideally made of words, underscores, and spaces). */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigRerankConfig {

		/** If empty, rerank on all facet values for the current key. Otherwise, will rerank on the facet values from this list only. */
		facetValues?: Array<string>;

		/** If set to true, then we also rerank the dynamic facets based on the facet values engaged by the user for the current attribute key during serving. */
		rerankFacet?: boolean | null;
	}

	/** Options to rerank based on facet values engaged by the user for the current key. That key needs to be a custom textual key and facetable. To use this control, you also need to pass all the facet keys engaged by the user in the request using the field [SearchRequest.FacetSpec]. In particular, if you don't pass the facet keys engaged that you want to rerank on, this control won't be effective. Moreover, to obtain better results, the facet values that you want to rerank on should be close to English (ideally made of words, underscores, and spaces). */
	export interface GoogleCloudRetailV2betaCatalogAttributeFacetConfigRerankConfigFormProperties {

		/** If set to true, then we also rerank the dynamic facets based on the facet values engaged by the user for the current attribute key during serving. */
		rerankFacet: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCatalogAttributeFacetConfigRerankConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogAttributeFacetConfigRerankConfigFormProperties>({
			rerankFacet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaCatalogAttributeIndexableOption { INDEXABLE_OPTION_UNSPECIFIED = 'INDEXABLE_OPTION_UNSPECIFIED', INDEXABLE_ENABLED = 'INDEXABLE_ENABLED', INDEXABLE_DISABLED = 'INDEXABLE_DISABLED' }

	export enum GoogleCloudRetailV2betaCatalogAttributeRetrievableOption { RETRIEVABLE_OPTION_UNSPECIFIED = 'RETRIEVABLE_OPTION_UNSPECIFIED', RETRIEVABLE_ENABLED = 'RETRIEVABLE_ENABLED', RETRIEVABLE_DISABLED = 'RETRIEVABLE_DISABLED' }

	export enum GoogleCloudRetailV2betaCatalogAttributeSearchableOption { SEARCHABLE_OPTION_UNSPECIFIED = 'SEARCHABLE_OPTION_UNSPECIFIED', SEARCHABLE_ENABLED = 'SEARCHABLE_ENABLED', SEARCHABLE_DISABLED = 'SEARCHABLE_DISABLED' }

	export enum GoogleCloudRetailV2betaCatalogAttributeType { UNKNOWN = 'UNKNOWN', TEXTUAL = 'TEXTUAL', NUMERICAL = 'NUMERICAL' }


	/** Request for AddControl method. */
	export interface GoogleCloudRetailV2betaAddControlRequest {

		/** Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned. */
		controlId?: string | null;
	}

	/** Request for AddControl method. */
	export interface GoogleCloudRetailV2betaAddControlRequestFormProperties {

		/** Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned. */
		controlId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaAddControlRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddControlRequestFormProperties>({
			controlId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAddFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Request message for ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesRequest {

		/** The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. */
		addTime?: string | null;

		/** If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing?: boolean | null;

		/** Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery" to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected. */
		placeIds?: Array<string>;

		/** Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. */
		type?: string | null;
	}

	/** Request message for ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesRequestFormProperties {

		/** The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. */
		addTime: FormControl<string | null | undefined>,

		/** If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaAddFulfillmentPlacesRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddFulfillmentPlacesRequestFormProperties>({
			addTime: new FormControl<string | null | undefined>(undefined),
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesResponse {
	}

	/** Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaAddFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAddFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAddLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Request message for ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesRequest {

		/** Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. */
		addMask?: string | null;

		/** The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used. */
		addTime?: string | null;

		/** If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing?: boolean | null;

		/** Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request. */
		localInventories?: Array<GoogleCloudRetailV2betaLocalInventory>;
	}

	/** Request message for ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesRequestFormProperties {

		/** Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. */
		addMask: FormControl<string | null | undefined>,

		/** The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used. */
		addTime: FormControl<string | null | undefined>,

		/** If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaAddLocalInventoriesRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddLocalInventoriesRequestFormProperties>({
			addMask: new FormControl<string | null | undefined>(undefined),
			addTime: new FormControl<string | null | undefined>(undefined),
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The inventory information at a place (e.g. a store) identified by a place ID. */
	export interface GoogleCloudRetailV2betaLocalInventory {

		/** Additional local inventory attributes, for example, store name, promotion tags, etc. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * At most 30 attributes are allowed. * The key must be a UTF-8 encoded string with a length limit of 32 characters. * The key must match the pattern: `a-zA-Z0-9*`. For example, key0LikeThis or KEY_1_LIKE_THIS. * The attribute values must be of the same type (text or number). * Only 1 value is allowed for each attribute. * For text values, the length limit is 256 UTF-8 characters. * The attribute does not support search. The `searchable` field should be unset or set to false. * The max summed total bytes of custom attribute keys and values per product is 5MiB. */
		attributes?: {[id: string]: GoogleCloudRetailV2betaCustomAttribute };

		/** Input only. Supported fulfillment types. Valid fulfillment type values include commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. All the elements must be distinct. Otherwise, an INVALID_ARGUMENT error is returned. */
		fulfillmentTypes?: Array<string>;

		/** The place ID for the current set of inventory information. */
		placeId?: string | null;

		/** The price information of a Product. */
		priceInfo?: GoogleCloudRetailV2betaPriceInfo;
	}

	/** The inventory information at a place (e.g. a store) identified by a place ID. */
	export interface GoogleCloudRetailV2betaLocalInventoryFormProperties {

		/** Additional local inventory attributes, for example, store name, promotion tags, etc. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * At most 30 attributes are allowed. * The key must be a UTF-8 encoded string with a length limit of 32 characters. * The key must match the pattern: `a-zA-Z0-9*`. For example, key0LikeThis or KEY_1_LIKE_THIS. * The attribute values must be of the same type (text or number). * Only 1 value is allowed for each attribute. * For text values, the length limit is 256 UTF-8 characters. * The attribute does not support search. The `searchable` field should be unset or set to false. * The max summed total bytes of custom attribute keys and values per product is 5MiB. */
		attributes: FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>,

		/** The place ID for the current set of inventory information. */
		placeId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaLocalInventoryFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaLocalInventoryFormProperties>({
			attributes: new FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>(undefined),
			placeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom attribute that is not explicitly modeled in Product. */
	export interface GoogleCloudRetailV2betaCustomAttribute {

		/** This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are indexed, so that they can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details. */
		indexable?: boolean | null;

		/** The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned. */
		numbers?: Array<number>;

		/** This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned. */
		searchable?: boolean | null;

		/** The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned. */
		text?: Array<string>;
	}

	/** A custom attribute that is not explicitly modeled in Product. */
	export interface GoogleCloudRetailV2betaCustomAttributeFormProperties {

		/** This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are indexed, so that they can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details. */
		indexable: FormControl<boolean | null | undefined>,

		/** This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned. */
		searchable: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCustomAttributeFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCustomAttributeFormProperties>({
			indexable: new FormControl<boolean | null | undefined>(undefined),
			searchable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The price information of a Product. */
	export interface GoogleCloudRetailV2betaPriceInfo {

		/** The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895). */
		cost?: number | null;

		/** The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned. */
		currencyCode?: string | null;

		/** Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown. */
		originalPrice?: number | null;

		/** Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price). */
		price?: number | null;

		/** The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search. */
		priceEffectiveTime?: string | null;

		/** The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search. */
		priceExpireTime?: string | null;

		/** The price range of all variant Product having the same Product.primary_product_id. */
		priceRange?: GoogleCloudRetailV2betaPriceInfoPriceRange;
	}

	/** The price information of a Product. */
	export interface GoogleCloudRetailV2betaPriceInfoFormProperties {

		/** The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895). */
		cost: FormControl<number | null | undefined>,

		/** The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned. */
		currencyCode: FormControl<string | null | undefined>,

		/** Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown. */
		originalPrice: FormControl<number | null | undefined>,

		/** Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price). */
		price: FormControl<number | null | undefined>,

		/** The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search. */
		priceEffectiveTime: FormControl<string | null | undefined>,

		/** The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search. */
		priceExpireTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPriceInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPriceInfoFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			originalPrice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			priceEffectiveTime: new FormControl<string | null | undefined>(undefined),
			priceExpireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The price range of all variant Product having the same Product.primary_product_id. */
	export interface GoogleCloudRetailV2betaPriceInfoPriceRange {

		/** A floating point interval. */
		originalPrice?: GoogleCloudRetailV2betaInterval;

		/** A floating point interval. */
		price?: GoogleCloudRetailV2betaInterval;
	}

	/** The price range of all variant Product having the same Product.primary_product_id. */
	export interface GoogleCloudRetailV2betaPriceInfoPriceRangeFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaPriceInfoPriceRangeFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPriceInfoPriceRangeFormProperties>({
		});

	}


	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesResponse {
	}

	/** Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method. */
	export interface GoogleCloudRetailV2betaAddLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAddLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAddLocalInventoriesResponseFormProperties>({
		});

	}


	/** Catalog level attribute config. */
	export interface GoogleCloudRetailV2betaAttributesConfig {

		/** Output only. The AttributeConfigLevel used for this catalog. */
		attributeConfigLevel?: GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevel | null;

		/** Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. The maximum number of catalog attributes allowed in a request is 1000. */
		catalogAttributes?: {[id: string]: GoogleCloudRetailV2betaCatalogAttribute };

		/** Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/locations/catalogs/attributesConfig` */
		name?: string | null;
	}

	/** Catalog level attribute config. */
	export interface GoogleCloudRetailV2betaAttributesConfigFormProperties {

		/** Output only. The AttributeConfigLevel used for this catalog. */
		attributeConfigLevel: FormControl<GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevel | null | undefined>,

		/** Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. The maximum number of catalog attributes allowed in a request is 1000. */
		catalogAttributes: FormControl<{[id: string]: GoogleCloudRetailV2betaCatalogAttribute } | null | undefined>,

		/** Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/locations/catalogs/attributesConfig` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaAttributesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAttributesConfigFormProperties>({
			attributeConfigLevel: new FormControl<GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevel | null | undefined>(undefined),
			catalogAttributes: new FormControl<{[id: string]: GoogleCloudRetailV2betaCatalogAttribute } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaAttributesConfigAttributeConfigLevel { ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED = 'ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED', PRODUCT_LEVEL_ATTRIBUTE_CONFIG = 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG', CATALOG_LEVEL_ATTRIBUTE_CONFIG = 'CATALOG_LEVEL_ATTRIBUTE_CONFIG' }


	/** An intended audience of the Product for whom it's sold. */
	export interface GoogleCloudRetailV2betaAudience {

		/** The age groups of the audience. Strongly encouraged to use the standard values: "newborn" (up to 3 months old), "infant" (3–12 months old), "toddler" (1–5 years old), "kids" (5–13 years old), "adult" (typically teens or older). At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [age_group](https://support.google.com/merchants/answer/6324463). Schema.org property [Product.audience.suggestedMinAge](https://schema.org/suggestedMinAge) and [Product.audience.suggestedMaxAge](https://schema.org/suggestedMaxAge). */
		ageGroups?: Array<string>;

		/** The genders of the audience. Strongly encouraged to use the standard values: "male", "female", "unisex". At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gender](https://support.google.com/merchants/answer/6324479). Schema.org property [Product.audience.suggestedGender](https://schema.org/suggestedGender). */
		genders?: Array<string>;
	}

	/** An intended audience of the Product for whom it's sold. */
	export interface GoogleCloudRetailV2betaAudienceFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaAudienceFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaAudienceFormProperties>({
		});

	}


	/** Request for CatalogService.BatchRemoveCatalogAttributes method. */
	export interface GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest {

		/** Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch. */
		attributeKeys?: Array<string>;
	}

	/** Request for CatalogService.BatchRemoveCatalogAttributes method. */
	export interface GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequestFormProperties>({
		});

	}


	/** Response of the CatalogService.BatchRemoveCatalogAttributes. */
	export interface GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse {

		/** Catalog attributes that were deleted. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. */
		deletedCatalogAttributes?: Array<string>;

		/** Catalog attributes that were reset. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. */
		resetCatalogAttributes?: Array<string>;
	}

	/** Response of the CatalogService.BatchRemoveCatalogAttributes. */
	export interface GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponseFormProperties>({
		});

	}


	/** A BigQuery output result. */
	export interface GoogleCloudRetailV2betaBigQueryOutputResult {

		/** The ID of a BigQuery Dataset. */
		datasetId?: string | null;

		/** The ID of a BigQuery Table. */
		tableId?: string | null;
	}

	/** A BigQuery output result. */
	export interface GoogleCloudRetailV2betaBigQueryOutputResultFormProperties {

		/** The ID of a BigQuery Dataset. */
		datasetId: FormControl<string | null | undefined>,

		/** The ID of a BigQuery Table. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaBigQueryOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaBigQueryOutputResultFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery source import data from. */
	export interface GoogleCloudRetailV2betaBigQuerySource {

		/** The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: The schema is available here: https://support.google.com/analytics/answer/3437719. * `user_event_ga4`: The schema is available here: https://support.google.com/analytics/answer/7029846. Supported values for autocomplete imports: * `suggestions` (default): One JSON completion suggestion per line. * `denylist`: One JSON deny suggestion per line. * `allowlist`: One JSON allow suggestion per line. */
		dataSchema?: string | null;

		/** Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters. */
		datasetId?: string | null;

		/** Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. */
		gcsStagingDir?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		partitionDate?: GoogleTypeDate;

		/** The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request. */
		projectId?: string | null;

		/** Required. The BigQuery table to copy the data from with a length limit of 1,024 characters. */
		tableId?: string | null;
	}

	/** BigQuery source import data from. */
	export interface GoogleCloudRetailV2betaBigQuerySourceFormProperties {

		/** The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: The schema is available here: https://support.google.com/analytics/answer/3437719. * `user_event_ga4`: The schema is available here: https://support.google.com/analytics/answer/7029846. Supported values for autocomplete imports: * `suggestions` (default): One JSON completion suggestion per line. * `denylist`: One JSON deny suggestion per line. * `allowlist`: One JSON allow suggestion per line. */
		dataSchema: FormControl<string | null | undefined>,

		/** Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters. */
		datasetId: FormControl<string | null | undefined>,

		/** Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory. */
		gcsStagingDir: FormControl<string | null | undefined>,

		/** The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request. */
		projectId: FormControl<string | null | undefined>,

		/** Required. The BigQuery table to copy the data from with a length limit of 1,024 characters. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaBigQuerySourceFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaBigQuerySourceFormProperties>({
			dataSchema: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			gcsStagingDir: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The catalog configuration. */
	export interface GoogleCloudRetailV2betaCatalog {

		/** Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName?: string | null;

		/** Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch. */
		merchantCenterLinkingConfig?: GoogleCloudRetailV2betaMerchantCenterLinkingConfig;

		/** Required. Immutable. The fully qualified resource name of the catalog. */
		name?: string | null;

		/** Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made. */
		productLevelConfig?: GoogleCloudRetailV2betaProductLevelConfig;
	}

	/** The catalog configuration. */
	export interface GoogleCloudRetailV2betaCatalogFormProperties {

		/** Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName: FormControl<string | null | undefined>,

		/** Required. Immutable. The fully qualified resource name of the catalog. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCatalogFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCatalogFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterLinkingConfig {

		/** Links between Merchant Center accounts and branches. */
		links?: Array<GoogleCloudRetailV2betaMerchantCenterLink>;
	}

	/** Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterLinkingConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaMerchantCenterLinkingConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaMerchantCenterLinkingConfigFormProperties>({
		});

	}


	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterLink {

		/** The branch ID (e.g. 0/1/2) within this catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId?: string | null;

		/** String representing the destination to import for, all if left empty. List of possible values is given in [Included destination](https://support.google.com/merchants/answer/7501026). List of allowed string values: "Shopping_ads", "Buy_on_google_listings", "Display_ads", "Local_inventory _ads", "Free_listings", "Free_local_listings" NOTE: The string values are case sensitive. */
		destinations?: Array<string>;

		/** Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds. */
		feeds?: Array<GoogleCloudRetailV2betaMerchantCenterFeedFilter>;

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty no language filtering will be performed. Example value: `en`. */
		languageCode?: string | null;

		/** Required. The linked [Merchant Center account ID](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId?: string | null;

		/** Region code of offers to accept. 2-letter Uppercase ISO 3166-1 alpha-2 code. List of values can be found [here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) under the `region` tag. If left blank no region filtering will be performed. Example value: `US`. */
		regionCode?: string | null;
	}

	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterLinkFormProperties {

		/** The branch ID (e.g. 0/1/2) within this catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId: FormControl<string | null | undefined>,

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty no language filtering will be performed. Example value: `en`. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The linked [Merchant Center account ID](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId: FormControl<string | null | undefined>,

		/** Region code of offers to accept. 2-letter Uppercase ISO 3166-1 alpha-2 code. List of values can be found [here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) under the `region` tag. If left blank no region filtering will be performed. Example value: `US`. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaMerchantCenterLinkFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaMerchantCenterLinkFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			merchantCenterAccountId: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2betaMerchantCenterFeedFilter {

		/** Merchant Center primary feed ID. */
		primaryFeedId?: string | null;

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName?: string | null;
	}

	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2betaMerchantCenterFeedFilterFormProperties {

		/** Merchant Center primary feed ID. */
		primaryFeedId: FormControl<string | null | undefined>,

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaMerchantCenterFeedFilterFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaMerchantCenterFeedFilterFormProperties>({
			primaryFeedId: new FormControl<string | null | undefined>(undefined),
			primaryFeedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made. */
	export interface GoogleCloudRetailV2betaProductLevelConfig {

		/** The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset. * `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. */
		ingestionProductType?: string | null;

		/** Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. */
		merchantCenterProductIdField?: string | null;
	}

	/** Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made. */
	export interface GoogleCloudRetailV2betaProductLevelConfigFormProperties {

		/** The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset. * `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. */
		ingestionProductType: FormControl<string | null | undefined>,

		/** Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details. */
		merchantCenterProductIdField: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaProductLevelConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaProductLevelConfigFormProperties>({
			ingestionProductType: new FormControl<string | null | undefined>(undefined),
			merchantCenterProductIdField: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The color information of a Product. */
	export interface GoogleCloudRetailV2betaColorInfo {

		/** The standard color families. Strongly recommended to use the following standard color groups: "Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Cyan", "Blue", "Brown", "White", "Gray", "Black" and "Mixed". Normally it is expected to have only 1 color family. May consider using single "Mixed" instead of multiple values. A maximum of 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color). */
		colorFamilies?: Array<string>;

		/** The color display names, which may be different from standard color family names, such as the color aliases used in the website frontend. Normally it is expected to have only 1 color. May consider using single "Mixed" instead of multiple values. A maximum of 75 colors are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color). */
		colors?: Array<string>;
	}

	/** The color information of a Product. */
	export interface GoogleCloudRetailV2betaColorInfoFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaColorInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaColorInfoFormProperties>({
		});

	}


	/** Response of the autocomplete query. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponse {

		/** A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance. */
		attributionToken?: string | null;

		/** Results of the matching suggestions. The result list is ordered and the first result is top suggestion. */
		completionResults?: Array<GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult>;

		/** Deprecated. Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. If you want to enable it, contact Retail Search support. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower case. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens. */
		recentSearchResults?: Array<GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult>;
	}

	/** Response of the autocomplete query. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponseFormProperties {

		/** A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance. */
		attributionToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCompleteQueryResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompleteQueryResponseFormProperties>({
			attributionToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource that represents completion results. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult {

		/** Custom attributes for the suggestion term. * For "user-data", the attributes are additional custom attributes ingested through BigQuery. * For "cloud-retail", the attributes are product attributes generated by Cloud Retail. It requires UserEvent.product_details is imported properly. */
		attributes?: {[id: string]: GoogleCloudRetailV2betaCustomAttribute };

		/** The suggestion for the query. */
		suggestion?: string | null;
	}

	/** Resource that represents completion results. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponseCompletionResultFormProperties {

		/** Custom attributes for the suggestion term. * For "user-data", the attributes are additional custom attributes ingested through BigQuery. * For "cloud-retail", the attributes are product attributes generated by Cloud Retail. It requires UserEvent.product_details is imported properly. */
		attributes: FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>,

		/** The suggestion for the query. */
		suggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCompleteQueryResponseCompletionResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompleteQueryResponseCompletionResultFormProperties>({
			attributes: new FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>(undefined),
			suggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Recent search of this user. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult {

		/** The recent search query. */
		recentSearch?: string | null;
	}

	/** Recent search of this user. */
	export interface GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResultFormProperties {

		/** The recent search query. */
		recentSearch: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResultFormProperties>({
			recentSearch: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Catalog level autocomplete config for customers to customize autocomplete feature's settings. */
	export interface GoogleCloudRetailV2betaCompletionConfig {

		/** The input config source for completion data. */
		allowlistInputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;

		/** If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use `cloud-retail` data in CompleteQueryRequest. */
		autoLearning?: boolean | null;

		/** The input config source for completion data. */
		denylistInputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;

		/** Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. */
		lastAllowlistImportOperation?: string | null;

		/** Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. */
		lastDenylistImportOperation?: string | null;

		/** Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API method to retrieve the latest state of the Long Running Operation. */
		lastSuggestionsImportOperation?: string | null;

		/** Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest "women's shoes", whereas a query of 'red s' with 'exact-prefix' specified would suggest "red shoes". Currently supported values: * 'out-of-order' * 'exact-prefix' Default value: 'exact-prefix'. */
		matchingOrder?: string | null;

		/** The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. */
		maxSuggestions?: number | null;

		/** The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. */
		minPrefixLength?: number | null;

		/** Required. Immutable. Fully qualified name `projects/locations/catalogs/completionConfig` */
		name?: string | null;

		/** The input config source for completion data. */
		suggestionsInputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;
	}

	/** Catalog level autocomplete config for customers to customize autocomplete feature's settings. */
	export interface GoogleCloudRetailV2betaCompletionConfigFormProperties {

		/** If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use `cloud-retail` data in CompleteQueryRequest. */
		autoLearning: FormControl<boolean | null | undefined>,

		/** Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. */
		lastAllowlistImportOperation: FormControl<string | null | undefined>,

		/** Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation. */
		lastDenylistImportOperation: FormControl<string | null | undefined>,

		/** Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API method to retrieve the latest state of the Long Running Operation. */
		lastSuggestionsImportOperation: FormControl<string | null | undefined>,

		/** Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest "women's shoes", whereas a query of 'red s' with 'exact-prefix' specified would suggest "red shoes". Currently supported values: * 'out-of-order' * 'exact-prefix' Default value: 'exact-prefix'. */
		matchingOrder: FormControl<string | null | undefined>,

		/** The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. */
		maxSuggestions: FormControl<number | null | undefined>,

		/** The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20. */
		minPrefixLength: FormControl<number | null | undefined>,

		/** Required. Immutable. Fully qualified name `projects/locations/catalogs/completionConfig` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCompletionConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompletionConfigFormProperties>({
			autoLearning: new FormControl<boolean | null | undefined>(undefined),
			lastAllowlistImportOperation: new FormControl<string | null | undefined>(undefined),
			lastDenylistImportOperation: new FormControl<string | null | undefined>(undefined),
			lastSuggestionsImportOperation: new FormControl<string | null | undefined>(undefined),
			matchingOrder: new FormControl<string | null | undefined>(undefined),
			maxSuggestions: new FormControl<number | null | undefined>(undefined),
			minPrefixLength: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input config source for completion data. */
	export interface GoogleCloudRetailV2betaCompletionDataInputConfig {

		/** BigQuery source import data from. */
		bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;
	}

	/** The input config source for completion data. */
	export interface GoogleCloudRetailV2betaCompletionDataInputConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaCompletionDataInputConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompletionDataInputConfigFormProperties>({
		});

	}


	/** Detailed completion information including completion attribution token and clicked completion info. */
	export interface GoogleCloudRetailV2betaCompletionDetail {

		/** Completion attribution token in CompleteQueryResponse.attribution_token. */
		completionAttributionToken?: string | null;

		/** End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0. */
		selectedPosition?: number | null;

		/** End user selected CompleteQueryResponse.CompletionResult.suggestion. */
		selectedSuggestion?: string | null;
	}

	/** Detailed completion information including completion attribution token and clicked completion info. */
	export interface GoogleCloudRetailV2betaCompletionDetailFormProperties {

		/** Completion attribution token in CompleteQueryResponse.attribution_token. */
		completionAttributionToken: FormControl<string | null | undefined>,

		/** End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0. */
		selectedPosition: FormControl<number | null | undefined>,

		/** End user selected CompleteQueryResponse.CompletionResult.suggestion. */
		selectedSuggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCompletionDetailFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCompletionDetailFormProperties>({
			completionAttributionToken: new FormControl<string | null | undefined>(undefined),
			selectedPosition: new FormControl<number | null | undefined>(undefined),
			selectedSuggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted. */
	export interface GoogleCloudRetailV2betaCondition {

		/** Range of time(s) specifying when Condition is active. Condition true if any time range matches. */
		activeTimeRange?: Array<GoogleCloudRetailV2betaConditionTimeRange>;

		/** Used to support browse uses cases. A list (up to 10 entries) of categories or departments. The format should be the same as UserEvent.page_categories; */
		pageCategories?: Array<string>;

		/** A list (up to 10 entries) of terms to match the query on. If not specified, match all queries. If many query terms are specified, the condition is matched if any of the terms is a match (i.e. using the OR operator). */
		queryTerms?: Array<GoogleCloudRetailV2betaConditionQueryTerm>;
	}

	/** Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted. */
	export interface GoogleCloudRetailV2betaConditionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaConditionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaConditionFormProperties>({
		});

	}


	/** Used for time-dependent conditions. Example: Want to have rule applied for week long sale. */
	export interface GoogleCloudRetailV2betaConditionTimeRange {

		/** End of time range. Range is inclusive. */
		endTime?: string | null;

		/** Start of time range. Range is inclusive. */
		startTime?: string | null;
	}

	/** Used for time-dependent conditions. Example: Want to have rule applied for week long sale. */
	export interface GoogleCloudRetailV2betaConditionTimeRangeFormProperties {

		/** End of time range. Range is inclusive. */
		endTime: FormControl<string | null | undefined>,

		/** Start of time range. Range is inclusive. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaConditionTimeRangeFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaConditionTimeRangeFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query terms that we want to match on. */
	export interface GoogleCloudRetailV2betaConditionQueryTerm {

		/** Whether this is supposed to be a full or partial match. */
		fullMatch?: boolean | null;

		/** The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, "a b c" is 3 terms and allowed, but " a b c d" is 4 terms and not allowed for a partial match. */
		value?: string | null;
	}

	/** Query terms that we want to match on. */
	export interface GoogleCloudRetailV2betaConditionQueryTermFormProperties {

		/** Whether this is supposed to be a full or partial match. */
		fullMatch: FormControl<boolean | null | undefined>,

		/** The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, "a b c" is 3 terms and allowed, but " a b c d" is 4 terms and not allowed for a partial match. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaConditionQueryTermFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaConditionQueryTermFormProperties>({
			fullMatch: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time. */
	export interface GoogleCloudRetailV2betaControl {

		/** Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view. */
		associatedServingConfigIds?: Array<string>;

		/** Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown. */
		displayName?: string | null;

		/** A facet specification to perform faceted search. */
		facetSpec?: GoogleCloudRetailV2betaSearchRequestFacetSpec;

		/** Immutable. Fully qualified name `projects/locations/global/catalogs/controls/*` */
		name?: string | null;

		/** A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH. */
		rule?: GoogleCloudRetailV2betaRule;

		/** Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control. */
		searchSolutionUseCase?: Array<string>;

		/** Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH. */
		solutionTypes?: Array<GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution>;
	}

	/** Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time. */
	export interface GoogleCloudRetailV2betaControlFormProperties {

		/** Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. Fully qualified name `projects/locations/global/catalogs/controls/*` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaControlFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaControlFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A facet specification to perform faceted search. */
	export interface GoogleCloudRetailV2betaSearchRequestFacetSpec {

		/** Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It is ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined by Google Retail Search. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enable, which generates a facet "gender". Then, the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how Google Retail Search orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position values are false. */
		enableDynamicPosition?: boolean | null;

		/** List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 products with the color facet "Red" and 200 products with the color facet "Blue". A query containing the filter "colorFamilies:ANY("Red")" and having "colorFamilies" as FacetKey.key would by default return only "Red" products in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue products available, "Blue" would not be shown as an available facet value. If "colorFamilies" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "colorFamilies" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" products. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. */
		excludedFilterKeys?: Array<string>;

		/** Specifies how a facet is computed. */
		facetKey?: GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;

		/** Maximum of facet values that should be returned for this facet. If unspecified, defaults to 50. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned. */
		limit?: number | null;
	}

	/** A facet specification to perform faceted search. */
	export interface GoogleCloudRetailV2betaSearchRequestFacetSpecFormProperties {

		/** Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It is ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined by Google Retail Search. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enable, which generates a facet "gender". Then, the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how Google Retail Search orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position values are false. */
		enableDynamicPosition: FormControl<boolean | null | undefined>,

		/** Maximum of facet values that should be returned for this facet. If unspecified, defaults to 50. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned. */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestFacetSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestFacetSpecFormProperties>({
			enableDynamicPosition: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies how a facet is computed. */
	export interface GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey {

		/** True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. */
		caseInsensitive?: boolean | null;

		/** Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet gives only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10. */
		contains?: Array<string>;

		/** Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40. For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90, and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles become the bounds for its intervals and are returned in the response. If the facet key intervals are specified in the request, then the specified intervals are returned instead. */
		intervals?: Array<GoogleCloudRetailV2betaInterval>;

		/** Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field = * "brands" * "categories" * "genders" * "ageGroups" * "availability" * "colorFamilies" * "colors" * "sizes" * "materials" * "patterns" * "conditions" * "attributes.key" * "pickupInStore" * "shipToStore" * "sameDayDelivery" * "nextDayDelivery" * "customFulfillment1" * "customFulfillment2" * "customFulfillment3" * "customFulfillment4" * "customFulfillment5" * "inventory(place_id,attributes.key)" * numerical_field = * "price" * "discount" * "rating" * "ratingCount" * "attributes.key" * "inventory(place_id,price)" * "inventory(place_id,original_price)" * "inventory(place_id,attributes.key)" */
		key?: string | null;

		/** The order in which SearchResponse.Facet.values are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values. */
		orderBy?: string | null;

		/** Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet gives only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10. */
		prefixes?: Array<string>;

		/** The query that is used to compute facet for the given facet key. When provided, it overrides the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, SearchResponse.Facet.values.value is always "1" and SearchResponse.Facet.values.count is the number of results that match the query. For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\"IN_STOCK\") AND shipToStore: ANY(\"123\")". Then the facet counts the products that are both in stock and ship to store "123". */
		query?: string | null;

		/** Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to ["store123", "store456"], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20. Must be set for the fulfillment facet keys: * pickupInStore * shipToStore * sameDayDelivery * nextDayDelivery * customFulfillment1 * customFulfillment2 * customFulfillment3 * customFulfillment4 * customFulfillment5 */
		restrictedValues?: Array<string>;

		/** Returns the min and max value for each numerical facet intervals. Ignored for textual facets. */
		returnMinMax?: boolean | null;
	}

	/** Specifies how a facet is computed. */
	export interface GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKeyFormProperties {

		/** True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. */
		caseInsensitive: FormControl<boolean | null | undefined>,

		/** Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field = * "brands" * "categories" * "genders" * "ageGroups" * "availability" * "colorFamilies" * "colors" * "sizes" * "materials" * "patterns" * "conditions" * "attributes.key" * "pickupInStore" * "shipToStore" * "sameDayDelivery" * "nextDayDelivery" * "customFulfillment1" * "customFulfillment2" * "customFulfillment3" * "customFulfillment4" * "customFulfillment5" * "inventory(place_id,attributes.key)" * numerical_field = * "price" * "discount" * "rating" * "ratingCount" * "attributes.key" * "inventory(place_id,price)" * "inventory(place_id,original_price)" * "inventory(place_id,attributes.key)" */
		key: FormControl<string | null | undefined>,

		/** The order in which SearchResponse.Facet.values are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values. */
		orderBy: FormControl<string | null | undefined>,

		/** The query that is used to compute facet for the given facet key. When provided, it overrides the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, SearchResponse.Facet.values.value is always "1" and SearchResponse.Facet.values.count is the number of results that match the query. For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\"IN_STOCK\") AND shipToStore: ANY(\"123\")". Then the facet counts the products that are both in stock and ship to store "123". */
		query: FormControl<string | null | undefined>,

		/** Returns the min and max value for each numerical facet intervals. Ignored for textual facets. */
		returnMinMax: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestFacetSpecFacetKeyFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKeyFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			returnMinMax: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH. */
	export interface GoogleCloudRetailV2betaRule {

		/** A boost action to apply to results matching condition specified above. */
		boostAction?: GoogleCloudRetailV2betaRuleBoostAction;

		/** Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted. */
		condition?: GoogleCloudRetailV2betaCondition;

		/** Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap". */
		doNotAssociateAction?: GoogleCloudRetailV2betaRuleDoNotAssociateAction;

		/** * Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter. */
		filterAction?: GoogleCloudRetailV2betaRuleFilterAction;

		/** Force returns an attribute/facet in the request around a certain position or above. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Inputs: attribute name, position * Action Result: Will force return a facet key around a certain position or above if the condition is satisfied. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes", the ForceReturnFacetAction.FacetPositionAdjustment.attribute_name is "size" and the ForceReturnFacetAction.FacetPositionAdjustment.position is 8. Two cases: a) The facet key "size" is not already in the top 8 slots, then the facet "size" will appear at a position close to 8. b) The facet key "size" in among the top 8 positions in the request, then it will stay at its current rank. */
		forceReturnFacetAction?: GoogleCloudRetailV2betaRuleForceReturnFacetAction;

		/** Prevents a term in the query from being used in search. Example: Don't search for "shoddy". */
		ignoreAction?: GoogleCloudRetailV2betaRuleIgnoreAction;

		/** Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers". */
		onewaySynonymsAction?: GoogleCloudRetailV2betaRuleOnewaySynonymsAction;

		/** Redirects a shopper to a specific page. * Rule Condition: Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri. */
		redirectAction?: GoogleCloudRetailV2betaRuleRedirectAction;

		/** Removes an attribute/facet in the request if is present. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Input: attribute name * Action Result: Will remove the attribute (as a facet) from the request if it is present. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes" and the attribute name "size", then facet key "size" will be removed from the request (if it is present). */
		removeFacetAction?: GoogleCloudRetailV2betaRuleRemoveFacetAction;

		/** Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe". */
		replacementAction?: GoogleCloudRetailV2betaRuleReplacementAction;

		/** Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers". */
		twowaySynonymsAction?: GoogleCloudRetailV2betaRuleTwowaySynonymsAction;
	}

	/** A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH. */
	export interface GoogleCloudRetailV2betaRuleFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleFormProperties>({
		});

	}


	/** A boost action to apply to results matching condition specified above. */
	export interface GoogleCloudRetailV2betaRuleBoostAction {

		/** Strength of the condition boost, which must be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
		boost?: number | null;

		/** The filter can have a max size of 5000 characters. An expression which specifies which products to apply an action to. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) * */
		productsFilter?: string | null;
	}

	/** A boost action to apply to results matching condition specified above. */
	export interface GoogleCloudRetailV2betaRuleBoostActionFormProperties {

		/** Strength of the condition boost, which must be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
		boost: FormControl<number | null | undefined>,

		/** The filter can have a max size of 5000 characters. An expression which specifies which products to apply an action to. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) * */
		productsFilter: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRuleBoostActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleBoostActionFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
			productsFilter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap". */
	export interface GoogleCloudRetailV2betaRuleDoNotAssociateAction {

		/** Cannot contain duplicates or the query term. Can specify up to 100 terms. */
		doNotAssociateTerms?: Array<string>;

		/** Terms from the search query. Will not consider do_not_associate_terms for search if in search query. Can specify up to 100 terms. */
		queryTerms?: Array<string>;

		/** Will be [deprecated = true] post migration; */
		terms?: Array<string>;
	}

	/** Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap". */
	export interface GoogleCloudRetailV2betaRuleDoNotAssociateActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleDoNotAssociateActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleDoNotAssociateActionFormProperties>({
		});

	}


	/** * Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter. */
	export interface GoogleCloudRetailV2betaRuleFilterAction {

		/** A filter to apply on the matching condition results. Supported features: * filter must be set. * Filter syntax is identical to SearchRequest.filter. For more information, see [Filter](/retail/docs/filter-and-order#filter). * To filter products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) * */
		filter?: string | null;
	}

	/** * Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter. */
	export interface GoogleCloudRetailV2betaRuleFilterActionFormProperties {

		/** A filter to apply on the matching condition results. Supported features: * filter must be set. * Filter syntax is identical to SearchRequest.filter. For more information, see [Filter](/retail/docs/filter-and-order#filter). * To filter products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) * */
		filter: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRuleFilterActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleFilterActionFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Force returns an attribute/facet in the request around a certain position or above. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Inputs: attribute name, position * Action Result: Will force return a facet key around a certain position or above if the condition is satisfied. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes", the ForceReturnFacetAction.FacetPositionAdjustment.attribute_name is "size" and the ForceReturnFacetAction.FacetPositionAdjustment.position is 8. Two cases: a) The facet key "size" is not already in the top 8 slots, then the facet "size" will appear at a position close to 8. b) The facet key "size" in among the top 8 positions in the request, then it will stay at its current rank. */
	export interface GoogleCloudRetailV2betaRuleForceReturnFacetAction {

		/** Each instance corresponds to a force return attribute for the given condition. There can't be more 3 instances here. */
		facetPositionAdjustments?: Array<GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment>;
	}

	/** Force returns an attribute/facet in the request around a certain position or above. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Inputs: attribute name, position * Action Result: Will force return a facet key around a certain position or above if the condition is satisfied. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes", the ForceReturnFacetAction.FacetPositionAdjustment.attribute_name is "size" and the ForceReturnFacetAction.FacetPositionAdjustment.position is 8. Two cases: a) The facet key "size" is not already in the top 8 slots, then the facet "size" will appear at a position close to 8. b) The facet key "size" in among the top 8 positions in the request, then it will stay at its current rank. */
	export interface GoogleCloudRetailV2betaRuleForceReturnFacetActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleForceReturnFacetActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleForceReturnFacetActionFormProperties>({
		});

	}


	/** Each facet position adjustment consists of a single attribute name (i.e. facet key) along with a specified position. */
	export interface GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustment {

		/** The attribute name to force return as a facet. Each attribute name should be a valid attribute name, be non-empty and contain at most 80 characters long. */
		attributeName?: string | null;

		/** This is the position in the request as explained above. It should be strictly positive be at most 100. */
		position?: number | null;
	}

	/** Each facet position adjustment consists of a single attribute name (i.e. facet key) along with a specified position. */
	export interface GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustmentFormProperties {

		/** The attribute name to force return as a facet. Each attribute name should be a valid attribute name, be non-empty and contain at most 80 characters long. */
		attributeName: FormControl<string | null | undefined>,

		/** This is the position in the request as explained above. It should be strictly positive be at most 100. */
		position: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustmentFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleForceReturnFacetActionFacetPositionAdjustmentFormProperties>({
			attributeName: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Prevents a term in the query from being used in search. Example: Don't search for "shoddy". */
	export interface GoogleCloudRetailV2betaRuleIgnoreAction {

		/** Terms to ignore in the search query. */
		ignoreTerms?: Array<string>;
	}

	/** Prevents a term in the query from being used in search. Example: Don't search for "shoddy". */
	export interface GoogleCloudRetailV2betaRuleIgnoreActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleIgnoreActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleIgnoreActionFormProperties>({
		});

	}


	/** Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers". */
	export interface GoogleCloudRetailV2betaRuleOnewaySynonymsAction {

		/** Will be [deprecated = true] post migration; */
		onewayTerms?: Array<string>;

		/** Terms from the search query. Will treat synonyms as their synonyms. Not themselves synonyms of the synonyms. Can specify up to 100 terms. */
		queryTerms?: Array<string>;

		/** Defines a set of synonyms. Cannot contain duplicates. Can specify up to 100 synonyms. */
		synonyms?: Array<string>;
	}

	/** Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers". */
	export interface GoogleCloudRetailV2betaRuleOnewaySynonymsActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleOnewaySynonymsActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleOnewaySynonymsActionFormProperties>({
		});

	}


	/** Redirects a shopper to a specific page. * Rule Condition: Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri. */
	export interface GoogleCloudRetailV2betaRuleRedirectAction {

		/** URL must have length equal or less than 2000 characters. */
		redirectUri?: string | null;
	}

	/** Redirects a shopper to a specific page. * Rule Condition: Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri. */
	export interface GoogleCloudRetailV2betaRuleRedirectActionFormProperties {

		/** URL must have length equal or less than 2000 characters. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRuleRedirectActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleRedirectActionFormProperties>({
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Removes an attribute/facet in the request if is present. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Input: attribute name * Action Result: Will remove the attribute (as a facet) from the request if it is present. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes" and the attribute name "size", then facet key "size" will be removed from the request (if it is present). */
	export interface GoogleCloudRetailV2betaRuleRemoveFacetAction {

		/** The attribute names (i.e. facet keys) to remove from the dynamic facets (if present in the request). There can't be more 3 attribute names. Each attribute name should be a valid attribute name, be non-empty and contain at most 80 characters. */
		attributeNames?: Array<string>;
	}

	/** Removes an attribute/facet in the request if is present. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Input: attribute name * Action Result: Will remove the attribute (as a facet) from the request if it is present. Example: Suppose the query is "shoes", the Condition.query_terms is "shoes" and the attribute name "size", then facet key "size" will be removed from the request (if it is present). */
	export interface GoogleCloudRetailV2betaRuleRemoveFacetActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleRemoveFacetActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleRemoveFacetActionFormProperties>({
		});

	}


	/** Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe". */
	export interface GoogleCloudRetailV2betaRuleReplacementAction {

		/** Terms from the search query. Will be replaced by replacement term. Can specify up to 100 terms. */
		queryTerms?: Array<string>;

		/** Term that will be used for replacement. */
		replacementTerm?: string | null;

		/** Will be [deprecated = true] post migration; */
		term?: string | null;
	}

	/** Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe". */
	export interface GoogleCloudRetailV2betaRuleReplacementActionFormProperties {

		/** Term that will be used for replacement. */
		replacementTerm: FormControl<string | null | undefined>,

		/** Will be [deprecated = true] post migration; */
		term: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRuleReplacementActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleReplacementActionFormProperties>({
			replacementTerm: new FormControl<string | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers". */
	export interface GoogleCloudRetailV2betaRuleTwowaySynonymsAction {

		/** Defines a set of synonyms. Can specify up to 100 synonyms. Must specify at least 2 synonyms. */
		synonyms?: Array<string>;
	}

	/** Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers". */
	export interface GoogleCloudRetailV2betaRuleTwowaySynonymsActionFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRuleTwowaySynonymsActionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRuleTwowaySynonymsActionFormProperties>({
		});

	}


	/** Common metadata related to the progress of the operations. */
	export interface GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Common metadata related to the progress of the operations. */
	export interface GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2betaCreateModelMetadata {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a create operation. */
	export interface GoogleCloudRetailV2betaCreateModelMetadataFormProperties {

		/** The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaCreateModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaCreateModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for active A/B testing Experiment. */
	export interface GoogleCloudRetailV2betaExperimentInfo {

		/** The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: `projects/locations/global/catalogs/default_catalog/experiments/experiment_id` */
		experiment?: string | null;

		/** Metadata for active serving config A/B tests. */
		servingConfigExperiment?: GoogleCloudRetailV2betaExperimentInfoServingConfigExperiment;
	}

	/** Metadata for active A/B testing Experiment. */
	export interface GoogleCloudRetailV2betaExperimentInfoFormProperties {

		/** The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: `projects/locations/global/catalogs/default_catalog/experiments/experiment_id` */
		experiment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaExperimentInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExperimentInfoFormProperties>({
			experiment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for active serving config A/B tests. */
	export interface GoogleCloudRetailV2betaExperimentInfoServingConfigExperiment {

		/** The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: `projects/locations/catalogs/servingConfigs/*`. */
		experimentServingConfig?: string | null;

		/** The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: `projects/locations/catalogs/servingConfigs/*`. */
		originalServingConfig?: string | null;
	}

	/** Metadata for active serving config A/B tests. */
	export interface GoogleCloudRetailV2betaExperimentInfoServingConfigExperimentFormProperties {

		/** The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: `projects/locations/catalogs/servingConfigs/*`. */
		experimentServingConfig: FormControl<string | null | undefined>,

		/** The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: `projects/locations/catalogs/servingConfigs/*`. */
		originalServingConfig: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaExperimentInfoServingConfigExperimentFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExperimentInfoServingConfigExperimentFormProperties>({
			experimentServingConfig: new FormControl<string | null | undefined>(undefined),
			originalServingConfig: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of destination for Export related errors. */
	export interface GoogleCloudRetailV2betaExportErrorsConfig {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Export related errors. */
	export interface GoogleCloudRetailV2betaExportErrorsConfigFormProperties {

		/** Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaExportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaExportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaExportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaExportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaExportProductsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Export related errors. */
		errorsConfig?: GoogleCloudRetailV2betaExportErrorsConfig;

		/** Output result that stores the information about where the exported data is stored. */
		outputResult?: GoogleCloudRetailV2betaOutputResult;
	}

	/** Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaExportProductsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaExportProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExportProductsResponseFormProperties>({
		});

	}


	/** Output result that stores the information about where the exported data is stored. */
	export interface GoogleCloudRetailV2betaOutputResult {

		/** The BigQuery location where the result is stored. */
		bigqueryResult?: Array<GoogleCloudRetailV2betaBigQueryOutputResult>;

		/** The Google Cloud Storage location where the result is stored. */
		gcsResult?: Array<GoogleCloudRetailV2betaGcsOutputResult>;
	}

	/** Output result that stores the information about where the exported data is stored. */
	export interface GoogleCloudRetailV2betaOutputResultFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaOutputResultFormProperties>({
		});

	}


	/** A Gcs output result. */
	export interface GoogleCloudRetailV2betaGcsOutputResult {

		/** The uri of Gcs output */
		outputUri?: string | null;
	}

	/** A Gcs output result. */
	export interface GoogleCloudRetailV2betaGcsOutputResultFormProperties {

		/** The uri of Gcs output */
		outputUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaGcsOutputResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaGcsOutputResultFormProperties>({
			outputUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaExportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Export related errors. */
		errorsConfig?: GoogleCloudRetailV2betaExportErrorsConfig;

		/** Output result that stores the information about where the exported data is stored. */
		outputResult?: GoogleCloudRetailV2betaOutputResult;
	}

	/** Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaExportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaExportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaExportUserEventsResponseFormProperties>({
		});

	}


	/** Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. */
	export interface GoogleCloudRetailV2betaFulfillmentInfo {

		/** The IDs for this type, such as the store IDs for FulfillmentInfo.type.pickup-in-store or the region IDs for FulfillmentInfo.type.same-day-delivery. A maximum of 3000 values are allowed. Each value must be a string with a length limit of 30 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. */
		placeIds?: Array<string>;

		/** The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. */
		type?: string | null;
	}

	/** Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. */
	export interface GoogleCloudRetailV2betaFulfillmentInfoFormProperties {

		/** The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaFulfillmentInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaFulfillmentInfoFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Google Cloud Storage location for input content. */
	export interface GoogleCloudRetailV2betaGcsSource {

		/** The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719. Supported values for control imports: * `control` (default): One JSON Control per line. Supported values for catalog attribute imports: * `catalog_attribute` (default): One CSV CatalogAttribute per line. */
		dataSchema?: string | null;

		/** Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions. */
		inputUris?: Array<string>;
	}

	/** Google Cloud Storage location for input content. */
	export interface GoogleCloudRetailV2betaGcsSourceFormProperties {

		/** The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719. Supported values for control imports: * `control` (default): One JSON Control per line. Supported values for catalog attribute imports: * `catalog_attribute` (default): One CSV CatalogAttribute per line. */
		dataSchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaGcsSourceFormProperties>({
			dataSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message of CatalogService.GetDefaultBranch. */
	export interface GoogleCloudRetailV2betaGetDefaultBranchResponse {

		/** Full resource name of the branch id currently set as default branch. */
		branch?: string | null;

		/** This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default. */
		note?: string | null;

		/** The time when this branch is set to default. */
		setTime?: string | null;
	}

	/** Response message of CatalogService.GetDefaultBranch. */
	export interface GoogleCloudRetailV2betaGetDefaultBranchResponseFormProperties {

		/** Full resource name of the branch id currently set as default branch. */
		branch: FormControl<string | null | undefined>,

		/** This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default. */
		note: FormControl<string | null | undefined>,

		/** The time when this branch is set to default. */
		setTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaGetDefaultBranchResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaGetDefaultBranchResponseFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			setTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console. */
	export interface GoogleCloudRetailV2betaImage {

		/** Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		height?: number | null;

		/** Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image). */
		uri?: string | null;

		/** Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		width?: number | null;
	}

	/** Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console. */
	export interface GoogleCloudRetailV2betaImageFormProperties {

		/** Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		height: FormControl<number | null | undefined>,

		/** Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image). */
		uri: FormControl<string | null | undefined>,

		/** Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaImageFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request message for ImportCompletionData methods. */
	export interface GoogleCloudRetailV2betaImportCompletionDataRequest {

		/** The input config source for completion data. */
		inputConfig?: GoogleCloudRetailV2betaCompletionDataInputConfig;

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic?: string | null;
	}

	/** Request message for ImportCompletionData methods. */
	export interface GoogleCloudRetailV2betaImportCompletionDataRequestFormProperties {

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaImportCompletionDataRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportCompletionDataRequestFormProperties>({
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2betaImportCompletionDataResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful. */
	export interface GoogleCloudRetailV2betaImportCompletionDataResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaImportCompletionDataResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportCompletionDataResponseFormProperties>({
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2betaImportErrorsConfig {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudRetailV2betaImportErrorsConfigFormProperties {

		/** Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaImportErrorsConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportErrorsConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaImportMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic?: string | null;

		/** Deprecated. This field is never set. */
		requestId?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaImportMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** Deprecated. This field is never set. */
		requestId: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaImportMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Import methods. */
	export interface GoogleCloudRetailV2betaImportProductsRequest {

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

		/** The input config source for products. */
		inputConfig?: GoogleCloudRetailV2betaProductInputConfig;

		/** Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that both `cloud-retail-customer-data-access@system.gserviceaccount.com` and `service-@gcp-sa-retail.iam.gserviceaccount.com` have the `pubsub.topics.publish` IAM permission on the topic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`. */
		notificationPubsubTopic?: string | null;

		/** The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL. */
		reconciliationMode?: GoogleCloudRetailV2betaImportProductsRequestReconciliationMode | null;

		/** Deprecated. This field has no effect. */
		requestId?: string | null;

		/** Indicates which fields in the provided imported `products` to update. If not set, all fields are updated. */
		updateMask?: string | null;
	}

	/** Request message for Import methods. */
	export interface GoogleCloudRetailV2betaImportProductsRequestFormProperties {

		/** Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that both `cloud-retail-customer-data-access@system.gserviceaccount.com` and `service-@gcp-sa-retail.iam.gserviceaccount.com` have the `pubsub.topics.publish` IAM permission on the topic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`. */
		notificationPubsubTopic: FormControl<string | null | undefined>,

		/** The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL. */
		reconciliationMode: FormControl<GoogleCloudRetailV2betaImportProductsRequestReconciliationMode | null | undefined>,

		/** Deprecated. This field has no effect. */
		requestId: FormControl<string | null | undefined>,

		/** Indicates which fields in the provided imported `products` to update. If not set, all fields are updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaImportProductsRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportProductsRequestFormProperties>({
			notificationPubsubTopic: new FormControl<string | null | undefined>(undefined),
			reconciliationMode: new FormControl<GoogleCloudRetailV2betaImportProductsRequestReconciliationMode | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input config source for products. */
	export interface GoogleCloudRetailV2betaProductInputConfig {

		/** BigQuery source import data from. */
		bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

		/** Google Cloud Storage location for input content. */
		gcsSource?: GoogleCloudRetailV2betaGcsSource;

		/** The inline source for the input config for ImportProducts method. */
		productInlineSource?: GoogleCloudRetailV2betaProductInlineSource;
	}

	/** The input config source for products. */
	export interface GoogleCloudRetailV2betaProductInputConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaProductInputConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaProductInputConfigFormProperties>({
		});

	}


	/** The inline source for the input config for ImportProducts method. */
	export interface GoogleCloudRetailV2betaProductInlineSource {

		/** Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items. */
		products?: Array<GoogleCloudRetailV2betaProduct>;
	}

	/** The inline source for the input config for ImportProducts method. */
	export interface GoogleCloudRetailV2betaProductInlineSourceFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaProductInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaProductInlineSourceFormProperties>({
		});

	}


	/** Product captures all metadata information of items to be recommended or searched. */
	export interface GoogleCloudRetailV2betaProduct {

		/** Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. */
		attributes?: {[id: string]: GoogleCloudRetailV2betaCustomAttribute };

		/** An intended audience of the Product for whom it's sold. */
		audience?: GoogleCloudRetailV2betaAudience;

		/** The online availability of the Product. Default to Availability.IN_STOCK. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability). */
		availability?: GoogleCloudRetailV2betaProductAvailability | null;

		/** The available quantity of the item. */
		availableQuantity?: number | null;

		/** The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. */
		availableTime?: string | null;

		/** The brands of the product. A maximum of 30 brands are allowed unless overridden through the Google Cloud console. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand). */
		brands?: Array<string>;

		/** Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories > Shoes", "Sports & Fitness > Athletic Clothing > Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product unless overridden via pantheon UI. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436 */
		categories?: Array<string>;

		/** The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return. */
		collectionMemberIds?: Array<string>;

		/** The color information of a Product. */
		colorInfo?: GoogleCloudRetailV2betaColorInfo;

		/** The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition). */
		conditions?: Array<string>;

		/** Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description). */
		description?: string | null;

		/** Note that this field is applied in the following ways: * If the Product is already expired when it is uploaded, this product is not indexed for search. * If the Product is not expired when it is uploaded, only the Type.PRIMARY's and Type.COLLECTION's expireTime is respected, and Type.VARIANT's expireTime is not used. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499). */
		expireTime?: string | null;

		/** Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned. */
		fulfillmentInfo?: Array<GoogleCloudRetailV2betaFulfillmentInfo>;

		/** The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned. */
		gtin?: string | null;

		/** Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku). */
		id?: string | null;

		/** Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image). */
		images?: Array<GoogleCloudRetailV2betaImage>;

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset. */
		languageCode?: string | null;

		/** Output only. A list of local inventories specific to different places. This field can be managed by ProductService.AddLocalInventories and ProductService.RemoveLocalInventories APIs if fine-grained, high-volume updates are necessary. */
		localInventories?: Array<GoogleCloudRetailV2betaLocalInventory>;

		/** The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material). */
		materials?: Array<string>;

		/** Immutable. Full resource name of the product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`. */
		name?: string | null;

		/** The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern). */
		patterns?: Array<string>;

		/** The price information of a Product. */
		priceInfo?: GoogleCloudRetailV2betaPriceInfo;

		/** Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID). */
		primaryProductId?: string | null;

		/** The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set. */
		promotions?: Array<GoogleCloudRetailV2betaPromotion>;

		/** The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation. */
		publishTime?: string | null;

		/** The rating of a Product. */
		rating?: GoogleCloudRetailV2betaRating;

		/** Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info The maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead. */
		retrievableFields?: string | null;

		/** The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size). */
		sizes?: Array<string>;

		/** Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473). */
		tags?: Array<string>;

		/** Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name). */
		title?: string | null;

		/** Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. */
		ttl?: string | null;

		/** Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset. */
		type?: GoogleCloudRetailV2betaProductType | null;

		/** Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url). */
		uri?: string | null;

		/** Output only. Product variants grouped together on primary product which share similar product attributes. It's automatically grouped by primary_product_id for all the product variants. Only populated for Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests. */
		variants?: Array<GoogleCloudRetailV2betaProduct>;
	}

	/** Product captures all metadata information of items to be recommended or searched. */
	export interface GoogleCloudRetailV2betaProductFormProperties {

		/** Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. */
		attributes: FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>,

		/** The online availability of the Product. Default to Availability.IN_STOCK. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability). */
		availability: FormControl<GoogleCloudRetailV2betaProductAvailability | null | undefined>,

		/** The available quantity of the item. */
		availableQuantity: FormControl<number | null | undefined>,

		/** The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. */
		availableTime: FormControl<string | null | undefined>,

		/** Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description). */
		description: FormControl<string | null | undefined>,

		/** Note that this field is applied in the following ways: * If the Product is already expired when it is uploaded, this product is not indexed for search. * If the Product is not expired when it is uploaded, only the Type.PRIMARY's and Type.COLLECTION's expireTime is respected, and Type.VARIANT's expireTime is not used. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499). */
		expireTime: FormControl<string | null | undefined>,

		/** The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned. */
		gtin: FormControl<string | null | undefined>,

		/** Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku). */
		id: FormControl<string | null | undefined>,

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset. */
		languageCode: FormControl<string | null | undefined>,

		/** Immutable. Full resource name of the product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`. */
		name: FormControl<string | null | undefined>,

		/** Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID). */
		primaryProductId: FormControl<string | null | undefined>,

		/** The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation. */
		publishTime: FormControl<string | null | undefined>,

		/** Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info The maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead. */
		retrievableFields: FormControl<string | null | undefined>,

		/** Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name). */
		title: FormControl<string | null | undefined>,

		/** Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. */
		ttl: FormControl<string | null | undefined>,

		/** Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset. */
		type: FormControl<GoogleCloudRetailV2betaProductType | null | undefined>,

		/** Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaProductFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaProductFormProperties>({
			attributes: new FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>(undefined),
			availability: new FormControl<GoogleCloudRetailV2betaProductAvailability | null | undefined>(undefined),
			availableQuantity: new FormControl<number | null | undefined>(undefined),
			availableTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			gtin: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			primaryProductId: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			retrievableFields: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudRetailV2betaProductType | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaProductAvailability { AVAILABILITY_UNSPECIFIED = 'AVAILABILITY_UNSPECIFIED', IN_STOCK = 'IN_STOCK', OUT_OF_STOCK = 'OUT_OF_STOCK', PREORDER = 'PREORDER', BACKORDER = 'BACKORDER' }


	/** Promotion specification. */
	export interface GoogleCloudRetailV2betaPromotion {

		/** Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148). */
		promotionId?: string | null;
	}

	/** Promotion specification. */
	export interface GoogleCloudRetailV2betaPromotionFormProperties {

		/** Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148). */
		promotionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPromotionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPromotionFormProperties>({
			promotionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The rating of a Product. */
	export interface GoogleCloudRetailV2betaRating {

		/** The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned. */
		averageRating?: number | null;

		/** The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		ratingCount?: number | null;

		/** List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on. */
		ratingHistogram?: Array<number>;
	}

	/** The rating of a Product. */
	export interface GoogleCloudRetailV2betaRatingFormProperties {

		/** The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned. */
		averageRating: FormControl<number | null | undefined>,

		/** The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned. */
		ratingCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRatingFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRatingFormProperties>({
			averageRating: new FormControl<number | null | undefined>(undefined),
			ratingCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaProductType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PRIMARY = 'PRIMARY', VARIANT = 'VARIANT', COLLECTION = 'COLLECTION' }

	export enum GoogleCloudRetailV2betaImportProductsRequestReconciliationMode { RECONCILIATION_MODE_UNSPECIFIED = 'RECONCILIATION_MODE_UNSPECIFIED', INCREMENTAL = 'INCREMENTAL', FULL = 'FULL' }


	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaImportProductsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;
	}

	/** Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaImportProductsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaImportProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportProductsResponseFormProperties>({
		});

	}


	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudRetailV2betaImportUserEventsRequest {

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

		/** The input config source for user events. */
		inputConfig?: GoogleCloudRetailV2betaUserEventInputConfig;
	}

	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudRetailV2betaImportUserEventsRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaImportUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportUserEventsRequestFormProperties>({
		});

	}


	/** The input config source for user events. */
	export interface GoogleCloudRetailV2betaUserEventInputConfig {

		/** BigQuery source import data from. */
		bigQuerySource?: GoogleCloudRetailV2betaBigQuerySource;

		/** Google Cloud Storage location for input content. */
		gcsSource?: GoogleCloudRetailV2betaGcsSource;

		/** The inline source for the input config for ImportUserEvents method. */
		userEventInlineSource?: GoogleCloudRetailV2betaUserEventInlineSource;
	}

	/** The input config source for user events. */
	export interface GoogleCloudRetailV2betaUserEventInputConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaUserEventInputConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaUserEventInputConfigFormProperties>({
		});

	}


	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudRetailV2betaUserEventInlineSource {

		/** Required. A list of user events to import. Recommended max of 10k items. */
		userEvents?: Array<GoogleCloudRetailV2betaUserEvent>;
	}

	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudRetailV2betaUserEventInlineSourceFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaUserEventInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaUserEventInlineSourceFormProperties>({
		});

	}


	/** UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website. */
	export interface GoogleCloudRetailV2betaUserEvent {

		/** Extra user event features to include in the recommendation model. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways. */
		attributes?: {[id: string]: GoogleCloudRetailV2betaCustomAttribute };

		/** Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field. */
		attributionToken?: string | null;

		/** The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events. */
		cartId?: string | null;

		/** Detailed completion information including completion attribution token and clicked completion info. */
		completionDetail?: GoogleCloudRetailV2betaCompletionDetail;

		/** The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. We recommend that you set this field to get better per-entity search, completion, and prediction results. */
		entity?: string | null;

		/** Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened. */
		eventTime?: string | null;

		/** Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart. */
		eventType?: string | null;

		/** A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models). */
		experimentIds?: Array<string>;

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		filter?: string | null;

		/** An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		offset?: number | null;

		/** The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		orderBy?: string | null;

		/** The categories associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		pageCategories?: Array<string>;

		/** A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		pageViewId?: string | null;

		/** The main product details related to the event. This field is optional except for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished browsing the whole page yet. */
		productDetails?: Array<GoogleCloudRetailV2betaProductDetail>;

		/** A transaction represents the entire purchase transaction. */
		purchaseTransaction?: GoogleCloudRetailV2betaPurchaseTransaction;

		/** The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		referrerUri?: string | null;

		/** The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		searchQuery?: string | null;

		/** A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix. */
		sessionId?: string | null;

		/** Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters. */
		uri?: string | null;

		/** Information of an end user. */
		userInfo?: GoogleCloudRetailV2betaUserInfo;

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field. */
		visitorId?: string | null;
	}

	/** UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website. */
	export interface GoogleCloudRetailV2betaUserEventFormProperties {

		/** Extra user event features to include in the recommendation model. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways. */
		attributes: FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>,

		/** Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field. */
		attributionToken: FormControl<string | null | undefined>,

		/** The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events. */
		cartId: FormControl<string | null | undefined>,

		/** The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. We recommend that you set this field to get better per-entity search, completion, and prediction results. */
		entity: FormControl<string | null | undefined>,

		/** Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened. */
		eventTime: FormControl<string | null | undefined>,

		/** Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart. */
		eventType: FormControl<string | null | undefined>,

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		filter: FormControl<string | null | undefined>,

		/** An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		offset: FormControl<number | null | undefined>,

		/** The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		orderBy: FormControl<string | null | undefined>,

		/** A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		pageViewId: FormControl<string | null | undefined>,

		/** The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		referrerUri: FormControl<string | null | undefined>,

		/** The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned. */
		searchQuery: FormControl<string | null | undefined>,

		/** A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix. */
		sessionId: FormControl<string | null | undefined>,

		/** Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters. */
		uri: FormControl<string | null | undefined>,

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaUserEventFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaUserEventFormProperties>({
			attributes: new FormControl<{[id: string]: GoogleCloudRetailV2betaCustomAttribute } | null | undefined>(undefined),
			attributionToken: new FormControl<string | null | undefined>(undefined),
			cartId: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageViewId: new FormControl<string | null | undefined>(undefined),
			referrerUri: new FormControl<string | null | undefined>(undefined),
			searchQuery: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed product information associated with a user event. */
	export interface GoogleCloudRetailV2betaProductDetail {

		/** Product captures all metadata information of items to be recommended or searched. */
		product?: GoogleCloudRetailV2betaProduct;

		/** Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types. */
		quantity?: number | null;
	}

	/** Detailed product information associated with a user event. */
	export interface GoogleCloudRetailV2betaProductDetailFormProperties {

		/** Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types. */
		quantity: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaProductDetailFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaProductDetailFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudRetailV2betaPurchaseTransaction {

		/** All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost */
		cost?: number | null;

		/** Required. Currency code. Use three-character ISO-4217 code. */
		currencyCode?: string | null;

		/** The transaction ID with a length limit of 128 characters. */
		id?: string | null;

		/** Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. */
		revenue?: number | null;

		/** All the taxes associated with the transaction. */
		tax?: number | null;
	}

	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudRetailV2betaPurchaseTransactionFormProperties {

		/** All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost */
		cost: FormControl<number | null | undefined>,

		/** Required. Currency code. Use three-character ISO-4217 code. */
		currencyCode: FormControl<string | null | undefined>,

		/** The transaction ID with a length limit of 128 characters. */
		id: FormControl<string | null | undefined>,

		/** Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations. */
		revenue: FormControl<number | null | undefined>,

		/** All the taxes associated with the transaction. */
		tax: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurchaseTransactionFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurchaseTransactionFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			currencyCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			revenue: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information of an end user. */
	export interface GoogleCloudRetailV2betaUserInfo {

		/** True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. */
		directUserRequest?: boolean | null;

		/** The end user's IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when: * setting SearchRequest.user_info. * using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. */
		ipAddress?: string | null;

		/** User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. */
		userAgent?: string | null;

		/** Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		userId?: string | null;
	}

	/** Information of an end user. */
	export interface GoogleCloudRetailV2betaUserInfoFormProperties {

		/** True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. */
		directUserRequest: FormControl<boolean | null | undefined>,

		/** The end user's IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when: * setting SearchRequest.user_info. * using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. */
		ipAddress: FormControl<string | null | undefined>,

		/** User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set. */
		userAgent: FormControl<string | null | undefined>,

		/** Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaUserInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaUserInfoFormProperties>({
			directUserRequest: new FormControl<boolean | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaImportUserEventsResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Configuration of destination for Import related errors. */
		errorsConfig?: GoogleCloudRetailV2betaImportErrorsConfig;

		/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
		importSummary?: GoogleCloudRetailV2betaUserEventImportSummary;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudRetailV2betaImportUserEventsResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaImportUserEventsResponseFormProperties>({
		});

	}


	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2betaUserEventImportSummary {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount?: string | null;
	}

	/** A summary of import result. The UserEventImportSummary summarizes the import status for user events. */
	export interface GoogleCloudRetailV2betaUserEventImportSummaryFormProperties {

		/** Count of user events imported with complete existing catalog information. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with catalog information not found in the imported catalog. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaUserEventImportSummaryFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaUserEventImportSummaryFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for CatalogService.ListCatalogs method. */
	export interface GoogleCloudRetailV2betaListCatalogsResponse {

		/** All the customer's Catalogs. */
		catalogs?: Array<GoogleCloudRetailV2betaCatalog>;

		/** A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for CatalogService.ListCatalogs method. */
	export interface GoogleCloudRetailV2betaListCatalogsResponseFormProperties {

		/** A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaListCatalogsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaListCatalogsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListControls method. */
	export interface GoogleCloudRetailV2betaListControlsResponse {

		/** All the Controls for a given catalog. */
		controls?: Array<GoogleCloudRetailV2betaControl>;

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken?: string | null;
	}

	/** Response for ListControls method. */
	export interface GoogleCloudRetailV2betaListControlsResponseFormProperties {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaListControlsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaListControlsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a ListModelRequest. */
	export interface GoogleCloudRetailV2betaListModelsResponse {

		/** List of Models. */
		models?: Array<GoogleCloudRetailV2betaModel>;

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken?: string | null;
	}

	/** Response to a ListModelRequest. */
	export interface GoogleCloudRetailV2betaListModelsResponseFormProperties {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaListModelsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2betaModel {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime?: string | null;

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState?: GoogleCloudRetailV2ModelDataState | null;

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName?: string | null;

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption?: GoogleCloudRetailV2ModelFilteringOption | null;

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime?: string | null;

		/** Additional model features config. */
		modelFeaturesConfig?: GoogleCloudRetailV2betaModelModelFeaturesConfig;

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name?: string | null;

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective?: string | null;

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState?: GoogleCloudRetailV2ModelPeriodicTuningState | null;

		/** Output only. The list of valid serving configs associated with the PageOptimizationConfig. */
		servingConfigLists?: Array<GoogleCloudRetailV2betaModelServingConfigList>;

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState?: GoogleCloudRetailV2ModelServingState | null;

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState?: GoogleCloudRetailV2ModelTrainingState | null;

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation?: string | null;

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type?: string | null;

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime?: string | null;
	}

	/** Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API. */
	export interface GoogleCloudRetailV2betaModelFormProperties {

		/** Output only. Timestamp the Recommendation Model was created at. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training. */
		dataState: FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>,

		/** Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model. */
		filteringOption: FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>,

		/** Output only. The timestamp when the latest successful tune finished. */
		lastTuneTime: FormControl<string | null | undefined>,

		/** Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40. */
		name: FormControl<string | null | undefined>,

		/** Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		optimizationObjective: FormControl<string | null | undefined>,

		/** Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`. */
		periodicTuningState: FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>,

		/** Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`. */
		servingState: FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>,

		/** Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before. */
		trainingState: FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>,

		/** Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on. */
		tuningOperation: FormControl<string | null | undefined>,

		/** Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs. */
		type: FormControl<string | null | undefined>,

		/** Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaModelFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			dataState: new FormControl<GoogleCloudRetailV2ModelDataState | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			filteringOption: new FormControl<GoogleCloudRetailV2ModelFilteringOption | null | undefined>(undefined),
			lastTuneTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimizationObjective: new FormControl<string | null | undefined>(undefined),
			periodicTuningState: new FormControl<GoogleCloudRetailV2ModelPeriodicTuningState | null | undefined>(undefined),
			servingState: new FormControl<GoogleCloudRetailV2ModelServingState | null | undefined>(undefined),
			trainingState: new FormControl<GoogleCloudRetailV2ModelTrainingState | null | undefined>(undefined),
			tuningOperation: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional model features config. */
	export interface GoogleCloudRetailV2betaModelModelFeaturesConfig {

		/** Additional configs for the frequently-bought-together model type. */
		frequentlyBoughtTogetherConfig?: GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig;
	}

	/** Additional model features config. */
	export interface GoogleCloudRetailV2betaModelModelFeaturesConfigFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaModelModelFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaModelModelFeaturesConfigFormProperties>({
		});

	}


	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfig {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType?: GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null;
	}

	/** Additional configs for the frequently-bought-together model type. */
	export interface GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigFormProperties {

		/** Optional. Specifies the context of the model when it is used in predict requests. Can only be set for the `frequently-bought-together` type. If it isn't specified, it defaults to MULTIPLE_CONTEXT_PRODUCTS. */
		contextProductsType: FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaModelFrequentlyBoughtTogetherFeaturesConfigFormProperties>({
			contextProductsType: new FormControl<GoogleCloudRetailV2ModelFrequentlyBoughtTogetherFeaturesConfigContextProductsType | null | undefined>(undefined),
		});

	}


	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2betaModelServingConfigList {

		/** Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`. */
		servingConfigIds?: Array<string>;
	}

	/** Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations. */
	export interface GoogleCloudRetailV2betaModelServingConfigListFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaModelServingConfigListFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaModelServingConfigListFormProperties>({
		});

	}


	/** Response message for ProductService.ListProducts method. */
	export interface GoogleCloudRetailV2betaListProductsResponse {

		/** A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The Products. */
		products?: Array<GoogleCloudRetailV2betaProduct>;
	}

	/** Response message for ProductService.ListProducts method. */
	export interface GoogleCloudRetailV2betaListProductsResponseFormProperties {

		/** A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaListProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaListProductsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListServingConfigs method. */
	export interface GoogleCloudRetailV2betaListServingConfigsResponse {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken?: string | null;

		/** All the ServingConfigs for a given catalog. */
		servingConfigs?: Array<GoogleCloudRetailV2betaServingConfig>;
	}

	/** Response for ListServingConfigs method. */
	export interface GoogleCloudRetailV2betaListServingConfigsResponseFormProperties {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaListServingConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaListServingConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). */
	export interface GoogleCloudRetailV2betaServingConfig {

		/** Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		boostControlIds?: Array<string>;

		/** Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName?: string | null;

		/** How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		diversityLevel?: string | null;

		/** What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY. */
		diversityType?: GoogleCloudRetailV2betaServingConfigDiversityType | null;

		/** Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		doNotAssociateControlIds?: Array<string>;

		/** The specifications of dynamically generated facets. */
		dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;

		/** Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		enableCategoryFilterLevel?: string | null;

		/** Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		facetControlIds?: Array<string>;

		/** Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		filterControlIds?: Array<string>;

		/** Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		ignoreControlIds?: Array<string>;

		/** The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		modelId?: string | null;

		/** Immutable. Fully qualified name `projects/locations/global/catalogs/servingConfig/*` */
		name?: string | null;

		/** Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		onewaySynonymsControlIds?: Array<string>;

		/** The specification for personalization. */
		personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;

		/** How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		priceRerankingLevel?: string | null;

		/** Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		redirectControlIds?: Array<string>;

		/** Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		replacementControlIds?: Array<string>;

		/** Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution. */
		solutionTypes?: Array<GoogleCloudRetailV2alphaEnrollSolutionResponseEnrolledSolution>;

		/** Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. */
		twowaySynonymsControlIds?: Array<string>;
	}

	/** Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions). */
	export interface GoogleCloudRetailV2betaServingConfigFormProperties {

		/** Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName: FormControl<string | null | undefined>,

		/** How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		diversityLevel: FormControl<string | null | undefined>,

		/** What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY. */
		diversityType: FormControl<GoogleCloudRetailV2betaServingConfigDiversityType | null | undefined>,

		/** Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		enableCategoryFilterLevel: FormControl<string | null | undefined>,

		/** The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		modelId: FormControl<string | null | undefined>,

		/** Immutable. Fully qualified name `projects/locations/global/catalogs/servingConfig/*` */
		name: FormControl<string | null | undefined>,

		/** How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION. */
		priceRerankingLevel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaServingConfigFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaServingConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			diversityLevel: new FormControl<string | null | undefined>(undefined),
			diversityType: new FormControl<GoogleCloudRetailV2betaServingConfigDiversityType | null | undefined>(undefined),
			enableCategoryFilterLevel: new FormControl<string | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			priceRerankingLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaServingConfigDiversityType { DIVERSITY_TYPE_UNSPECIFIED = 'DIVERSITY_TYPE_UNSPECIFIED', RULE_BASED_DIVERSITY = 'RULE_BASED_DIVERSITY', DATA_DRIVEN_DIVERSITY = 'DATA_DRIVEN_DIVERSITY' }


	/** The specifications of dynamically generated facets. */
	export interface GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec {

		/** Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset. */
		mode?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecMode | null;
	}

	/** The specifications of dynamically generated facets. */
	export interface GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecFormProperties {

		/** Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset. */
		mode: FormControl<GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecMode | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestDynamicFacetSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecFormProperties>({
			mode: new FormControl<GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecMode | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaSearchRequestDynamicFacetSpecMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', DISABLED = 'DISABLED', ENABLED = 'ENABLED' }


	/** The specification for personalization. */
	export interface GoogleCloudRetailV2betaSearchRequestPersonalizationSpec {

		/** Defaults to Mode.AUTO. */
		mode?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpecMode | null;
	}

	/** The specification for personalization. */
	export interface GoogleCloudRetailV2betaSearchRequestPersonalizationSpecFormProperties {

		/** Defaults to Mode.AUTO. */
		mode: FormControl<GoogleCloudRetailV2betaSearchRequestPersonalizationSpecMode | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestPersonalizationSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestPersonalizationSpecFormProperties>({
			mode: new FormControl<GoogleCloudRetailV2betaSearchRequestPersonalizationSpecMode | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaSearchRequestPersonalizationSpecMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', AUTO = 'AUTO', DISABLED = 'DISABLED' }


	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterAccountLink {

		/** Required. The branch ID (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId?: string | null;

		/** Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds. */
		feedFilters?: Array<GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter>;

		/** The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`. */
		feedLabel?: string | null;

		/** Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`. */
		id?: string | null;

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`. */
		languageCode?: string | null;

		/** Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId?: string | null;

		/** Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`. */
		name?: string | null;

		/** Output only. Google Cloud project ID. */
		projectId?: string | null;

		/** Optional. An optional arbitrary string that could be used as a tag for tracking link source. */
		source?: string | null;

		/** Output only. Represents the state of the link. */
		state?: GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null;
	}

	/** Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch. */
	export interface GoogleCloudRetailV2betaMerchantCenterAccountLinkFormProperties {

		/** Required. The branch ID (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. */
		branchId: FormControl<string | null | undefined>,

		/** The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`. */
		feedLabel: FormControl<string | null | undefined>,

		/** Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`. */
		id: FormControl<string | null | undefined>,

		/** Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. */
		merchantCenterAccountId: FormControl<string | null | undefined>,

		/** Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Google Cloud project ID. */
		projectId: FormControl<string | null | undefined>,

		/** Optional. An optional arbitrary string that could be used as a tag for tracking link source. */
		source: FormControl<string | null | undefined>,

		/** Output only. Represents the state of the link. */
		state: FormControl<GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaMerchantCenterAccountLinkFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaMerchantCenterAccountLinkFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			feedLabel: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			merchantCenterAccountId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudRetailV2alphaMerchantCenterAccountLinkState | null | undefined>(undefined),
		});

	}


	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter {

		/** Merchant Center primary feed ID. */
		primaryFeedId?: string | null;

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName?: string | null;
	}

	/** Merchant Center Feed filter criterion. */
	export interface GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilterFormProperties {

		/** Merchant Center primary feed ID. */
		primaryFeedId: FormControl<string | null | undefined>,

		/** Merchant Center primary feed name. The name is used for the display purposes only. */
		primaryFeedName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilterFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilterFormProperties>({
			primaryFeedId: new FormControl<string | null | undefined>(undefined),
			primaryFeedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for pausing training of a model. */
	export interface GoogleCloudRetailV2betaPauseModelRequest {
	}

	/** Request for pausing training of a model. */
	export interface GoogleCloudRetailV2betaPauseModelRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaPauseModelRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPauseModelRequestFormProperties>({
		});

	}


	/** Request message for Predict method. */
	export interface GoogleCloudRetailV2betaPredictRequest {

		/** Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set `strictFiltering` to False in `PredictRequest.params`. Note that the API will never return items with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices. If `filterSyntaxV2` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones")) * (availability: ANY("IN_STOCK")) AND (colors: ANY("Red") OR categories: ANY("Phones")) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs). */
		filter?: string | null;

		/** The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		labels?: {[id: string]: string };

		/** Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100. */
		pageSize?: number | null;

		/** This field is not used; leave it unset. */
		pageToken?: string | null;

		/** Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of a product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request-level control and adjusts prediction results based on product category. * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter` field is interpreteted according to the new, attribute-based syntax. */
		params?: {[id: string]: any };

		/** UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website. */
		userEvent?: GoogleCloudRetailV2betaUserEvent;

		/** Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready. */
		validateOnly?: boolean | null;
	}

	/** Request message for Predict method. */
	export interface GoogleCloudRetailV2betaPredictRequestFormProperties {

		/** Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set `strictFiltering` to False in `PredictRequest.params`. Note that the API will never return items with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices. If `filterSyntaxV2` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones")) * (availability: ANY("IN_STOCK")) AND (colors: ANY("Red") OR categories: ANY("Phones")) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs). */
		filter: FormControl<string | null | undefined>,

		/** The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100. */
		pageSize: FormControl<number | null | undefined>,

		/** This field is not used; leave it unset. */
		pageToken: FormControl<string | null | undefined>,

		/** Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of a product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request-level control and adjusts prediction results based on product category. * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter` field is interpreteted according to the new, attribute-based syntax. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPredictRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPredictRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for predict method. */
	export interface GoogleCloudRetailV2betaPredictResponse {

		/** A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		attributionToken?: string | null;

		/** IDs of products in the request that were missing from the inventory. */
		missingIds?: Array<string>;

		/** A list of recommended products. The order represents the ranking (from the most relevant product to the least). */
		results?: Array<GoogleCloudRetailV2betaPredictResponsePredictionResult>;

		/** True if the validateOnly property was set in the request. */
		validateOnly?: boolean | null;
	}

	/** Response message for predict method. */
	export interface GoogleCloudRetailV2betaPredictResponseFormProperties {

		/** A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		attributionToken: FormControl<string | null | undefined>,

		/** True if the validateOnly property was set in the request. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPredictResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPredictResponseFormProperties>({
			attributionToken: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** PredictionResult represents the recommendation prediction results. */
	export interface GoogleCloudRetailV2betaPredictResponsePredictionResult {

		/** ID of the recommended product */
		id?: string | null;

		/** Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Is set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Is set if `returnScore` is set to true in `PredictRequest.params`. */
		metadata?: {[id: string]: any };
	}

	/** PredictionResult represents the recommendation prediction results. */
	export interface GoogleCloudRetailV2betaPredictResponsePredictionResultFormProperties {

		/** ID of the recommended product */
		id: FormControl<string | null | undefined>,

		/** Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Is set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Is set if `returnScore` is set to true in `PredictRequest.params`. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPredictResponsePredictionResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPredictResponsePredictionResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaPurgeMetadata {
	}

	/** Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaPurgeMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaPurgeMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeMetadataFormProperties>({
		});

	}


	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaPurgeProductsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudRetailV2betaPurgeProductsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurgeProductsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeProductsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for PurgeProducts method. */
	export interface GoogleCloudRetailV2betaPurgeProductsRequest {

		/** Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. "*" implies delete all items in a branch. The eligible fields for filtering are: * `availability`: Double quoted Product.availability string. * `create_time` : in ISO 8601 "zulu" format. Supported syntax: * Comparators (">", "<", ">=", "<=", "="). Examples: * create_time <= "2015-02-13T17:05:46Z" * availability = "IN_STOCK" * Conjunctions ("AND") Examples: * create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER" * Disjunctions ("OR") Examples: * create_time <= "2015-02-13T17:05:46Z" OR availability = "IN_STOCK" * Can support nested queries. Examples: * (create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER") OR (create_time >= "2015-02-14T13:03:32Z" AND availability = "IN_STOCK") * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time <= "2015-02-13T17:05:46Z" OR availability = "BACKORDER" */
		filter?: string | null;

		/** Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any products. */
		force?: boolean | null;
	}

	/** Request message for PurgeProducts method. */
	export interface GoogleCloudRetailV2betaPurgeProductsRequestFormProperties {

		/** Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. "*" implies delete all items in a branch. The eligible fields for filtering are: * `availability`: Double quoted Product.availability string. * `create_time` : in ISO 8601 "zulu" format. Supported syntax: * Comparators (">", "<", ">=", "<=", "="). Examples: * create_time <= "2015-02-13T17:05:46Z" * availability = "IN_STOCK" * Conjunctions ("AND") Examples: * create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER" * Disjunctions ("OR") Examples: * create_time <= "2015-02-13T17:05:46Z" OR availability = "IN_STOCK" * Can support nested queries. Examples: * (create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER") OR (create_time >= "2015-02-14T13:03:32Z" AND availability = "IN_STOCK") * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time <= "2015-02-13T17:05:46Z" OR availability = "BACKORDER" */
		filter: FormControl<string | null | undefined>,

		/** Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any products. */
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurgeProductsRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeProductsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2betaPurgeProductsResponse {

		/** The total count of products purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of the product names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2betaPurgeProductsResponseFormProperties {

		/** The total count of products purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurgeProductsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeProductsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for PurgeUserEvents method. */
	export interface GoogleCloudRetailV2betaPurgeUserEventsRequest {

		/** Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND. */
		filter?: string | null;

		/** Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events. */
		force?: boolean | null;
	}

	/** Request message for PurgeUserEvents method. */
	export interface GoogleCloudRetailV2betaPurgeUserEventsRequestFormProperties {

		/** Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND. */
		filter: FormControl<string | null | undefined>,

		/** Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events. */
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurgeUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeUserEventsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2betaPurgeUserEventsResponse {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount?: string | null;
	}

	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudRetailV2betaPurgeUserEventsResponseFormProperties {

		/** The total count of events purged as a result of the operation. */
		purgedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaPurgeUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaPurgeUserEventsResponseFormProperties>({
			purgedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsMetadata {
	}

	/** Metadata for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRejoinUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRejoinUserEventsMetadataFormProperties>({
		});

	}


	/** Request message for RejoinUserEvents method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsRequest {

		/** The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value. */
		userEventRejoinScope?: GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScope | null;
	}

	/** Request message for RejoinUserEvents method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsRequestFormProperties {

		/** The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value. */
		userEventRejoinScope: FormControl<GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScope | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRejoinUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRejoinUserEventsRequestFormProperties>({
			userEventRejoinScope: new FormControl<GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScope | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScope { USER_EVENT_REJOIN_SCOPE_UNSPECIFIED = 'USER_EVENT_REJOIN_SCOPE_UNSPECIFIED', JOINED_EVENTS = 'JOINED_EVENTS', UNJOINED_EVENTS = 'UNJOINED_EVENTS' }


	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsResponse {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount?: string | null;
	}

	/** Response message for `RejoinUserEvents` method. */
	export interface GoogleCloudRetailV2betaRejoinUserEventsResponseFormProperties {

		/** Number of user events that were joined with latest product catalog. */
		rejoinedUserEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRejoinUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRejoinUserEventsResponseFormProperties>({
			rejoinedUserEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for CatalogService.RemoveCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaRemoveCatalogAttributeRequest {

		/** Required. The attribute name key of the CatalogAttribute to remove. */
		key?: string | null;
	}

	/** Request for CatalogService.RemoveCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaRemoveCatalogAttributeRequestFormProperties {

		/** Required. The attribute name key of the CatalogAttribute to remove. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRemoveCatalogAttributeRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveCatalogAttributeRequestFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for RemoveControl method. */
	export interface GoogleCloudRetailV2betaRemoveControlRequest {

		/** Required. The id of the control to apply. Assumed to be in the same catalog as the serving config. */
		controlId?: string | null;
	}

	/** Request for RemoveControl method. */
	export interface GoogleCloudRetailV2betaRemoveControlRequestFormProperties {

		/** Required. The id of the control to apply. Assumed to be in the same catalog as the serving config. */
		controlId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRemoveControlRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveControlRequestFormProperties>({
			controlId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata {
	}

	/** Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadataFormProperties>({
		});

	}


	/** Request message for ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest {

		/** If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing?: boolean | null;

		/** Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. */
		placeIds?: Array<string>;

		/** The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. */
		removeTime?: string | null;

		/** Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. */
		type?: string | null;
	}

	/** Request message for ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequestFormProperties {

		/** If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. */
		removeTime: FormControl<string | null | undefined>,

		/** Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRemoveFulfillmentPlacesRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			removeTime: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse {
	}

	/** Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method. */
	export interface GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRemoveFulfillmentPlacesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesMetadata {
	}

	/** Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRemoveLocalInventoriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveLocalInventoriesMetadataFormProperties>({
		});

	}


	/** Request message for ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesRequest {

		/** If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing?: boolean | null;

		/** Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request. */
		placeIds?: Array<string>;

		/** The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used. */
		removeTime?: string | null;
	}

	/** Request message for ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesRequestFormProperties {

		/** If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used. */
		removeTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaRemoveLocalInventoriesRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveLocalInventoriesRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			removeTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesResponse {
	}

	/** Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method. */
	export interface GoogleCloudRetailV2betaRemoveLocalInventoriesResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaRemoveLocalInventoriesResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaRemoveLocalInventoriesResponseFormProperties>({
		});

	}


	/** Request for CatalogService.ReplaceCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaReplaceCatalogAttributeRequest {

		/** Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute. */
		catalogAttribute?: GoogleCloudRetailV2betaCatalogAttribute;

		/** Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated. */
		updateMask?: string | null;
	}

	/** Request for CatalogService.ReplaceCatalogAttribute method. */
	export interface GoogleCloudRetailV2betaReplaceCatalogAttributeRequestFormProperties {

		/** Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaReplaceCatalogAttributeRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaReplaceCatalogAttributeRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for resuming training of a model. */
	export interface GoogleCloudRetailV2betaResumeModelRequest {
	}

	/** Request for resuming training of a model. */
	export interface GoogleCloudRetailV2betaResumeModelRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaResumeModelRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaResumeModelRequestFormProperties>({
		});

	}


	/** Request message for SearchService.Search method. */
	export interface GoogleCloudRetailV2betaSearchRequest {

		/** Boost specification to boost certain items. */
		boostSpec?: GoogleCloudRetailV2betaSearchRequestBoostSpec;

		/** The branch resource name, such as `projects/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch. */
		branch?: string | null;

		/** The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. */
		canonicalFilter?: string | null;

		/** The specifications of dynamically generated facets. */
		dynamicFacetSpec?: GoogleCloudRetailV2betaSearchRequestDynamicFacetSpec;

		/** The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity. */
		entity?: string | null;

		/** Facet specifications for faceted search. If empty, no facets are returned. A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. */
		facetSpecs?: Array<GoogleCloudRetailV2betaSearchRequestFacetSpec>;

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. For more information, see [Filter](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned. */
		filter?: string | null;

		/** The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) in the Resource Manager documentation. */
		labels?: {[id: string]: string };

		/** A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned. */
		offset?: number | null;

		/** The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. For more information, see [Order](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned. */
		orderBy?: string | null;

		/** The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"]. */
		pageCategories?: Array<string>;

		/** Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned. */
		pageSize?: number | null;

		/** A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. */
		pageToken?: string | null;

		/** The specification for personalization. */
		personalizationSpec?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpec;

		/** Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories. */
		query?: string | null;

		/** Specification to determine under which conditions query expansion should occur. */
		queryExpansionSpec?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec;

		/** The search mode of the search request. If not specified, a single search request triggers both product search and faceted search. */
		searchMode?: GoogleCloudRetailV2betaSearchRequestSearchMode | null;

		/** The specification for query spell correction. */
		spellCorrectionSpec?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec;

		/** Information of an end user. */
		userInfo?: GoogleCloudRetailV2betaUserInfo;

		/** The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. */
		variantRollupKeys?: Array<string>;

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		visitorId?: string | null;
	}

	/** Request message for SearchService.Search method. */
	export interface GoogleCloudRetailV2betaSearchRequestFormProperties {

		/** The branch resource name, such as `projects/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch. */
		branch: FormControl<string | null | undefined>,

		/** The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. */
		canonicalFilter: FormControl<string | null | undefined>,

		/** The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity. */
		entity: FormControl<string | null | undefined>,

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. For more information, see [Filter](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned. */
		filter: FormControl<string | null | undefined>,

		/** The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. For more information, see [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) in the Resource Manager documentation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned. */
		offset: FormControl<number | null | undefined>,

		/** The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. For more information, see [Order](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned. */
		orderBy: FormControl<string | null | undefined>,

		/** Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. */
		pageToken: FormControl<string | null | undefined>,

		/** Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories. */
		query: FormControl<string | null | undefined>,

		/** The search mode of the search request. If not specified, a single search request triggers both product search and faceted search. */
		searchMode: FormControl<GoogleCloudRetailV2betaSearchRequestSearchMode | null | undefined>,

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		visitorId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			canonicalFilter: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			searchMode: new FormControl<GoogleCloudRetailV2betaSearchRequestSearchMode | null | undefined>(undefined),
			visitorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Boost specification to boost certain items. */
	export interface GoogleCloudRetailV2betaSearchRequestBoostSpec {

		/** Condition boost specifications. If a product matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. */
		conditionBoostSpecs?: Array<GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec>;

		/** Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied. */
		skipBoostSpecValidation?: boolean | null;
	}

	/** Boost specification to boost certain items. */
	export interface GoogleCloudRetailV2betaSearchRequestBoostSpecFormProperties {

		/** Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied. */
		skipBoostSpecValidation: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestBoostSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestBoostSpecFormProperties>({
			skipBoostSpecValidation: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Boost applies to products which match a condition. */
	export interface GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec {

		/** Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
		boost?: number | null;

		/** An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": * (id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue")) */
		condition?: string | null;
	}

	/** Boost applies to products which match a condition. */
	export interface GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpecFormProperties {

		/** Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored. */
		boost: FormControl<number | null | undefined>,

		/** An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": * (id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue")) */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpecFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification to determine under which conditions query expansion should occur. */
	export interface GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec {

		/** The condition under which query expansion should occur. Default to Condition.DISABLED. */
		condition?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecCondition | null;

		/** Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results. */
		pinUnexpandedResults?: boolean | null;
	}

	/** Specification to determine under which conditions query expansion should occur. */
	export interface GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecFormProperties {

		/** The condition under which query expansion should occur. Default to Condition.DISABLED. */
		condition: FormControl<GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecCondition | null | undefined>,

		/** Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results. */
		pinUnexpandedResults: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestQueryExpansionSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecFormProperties>({
			condition: new FormControl<GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecCondition | null | undefined>(undefined),
			pinUnexpandedResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecCondition { CONDITION_UNSPECIFIED = 'CONDITION_UNSPECIFIED', DISABLED = 'DISABLED', AUTO = 'AUTO' }

	export enum GoogleCloudRetailV2betaSearchRequestSearchMode { SEARCH_MODE_UNSPECIFIED = 'SEARCH_MODE_UNSPECIFIED', PRODUCT_SEARCH_ONLY = 'PRODUCT_SEARCH_ONLY', FACETED_SEARCH_ONLY = 'FACETED_SEARCH_ONLY' }


	/** The specification for query spell correction. */
	export interface GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec {

		/** The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO. */
		mode?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecMode | null;
	}

	/** The specification for query spell correction. */
	export interface GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecFormProperties {

		/** The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO. */
		mode: FormControl<GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecMode | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecFormProperties>({
			mode: new FormControl<GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecMode | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', SUGGESTION_ONLY = 'SUGGESTION_ONLY', AUTO = 'AUTO' }


	/** Response message for SearchService.Search method. */
	export interface GoogleCloudRetailV2betaSearchResponse {

		/** The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules). */
		appliedControls?: Array<string>;

		/** A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. */
		attributionToken?: string | null;

		/** Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. */
		correctedQuery?: string | null;

		/** Metadata related to A/B testing Experiment associated with this response. Only exists when an experiment is triggered. */
		experimentInfo?: Array<GoogleCloudRetailV2betaExperimentInfo>;

		/** Results of facets requested by user. */
		facets?: Array<GoogleCloudRetailV2betaSearchResponseFacet>;

		/** The invalid SearchRequest.BoostSpec.condition_boost_specs that are not applied during serving. */
		invalidConditionBoostSpecs?: Array<GoogleCloudRetailV2betaSearchRequestBoostSpecConditionBoostSpec>;

		/** A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Information describing query expansion including whether expansion has occurred. */
		queryExpansionInfo?: GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo;

		/** The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. */
		redirectUri?: string | null;

		/** A list of matched items. The order represents the ranking. */
		results?: Array<GoogleCloudRetailV2betaSearchResponseSearchResult>;

		/** The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches. */
		totalSize?: number | null;
	}

	/** Response message for SearchService.Search method. */
	export interface GoogleCloudRetailV2betaSearchResponseFormProperties {

		/** A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. */
		attributionToken: FormControl<string | null | undefined>,

		/** Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. */
		correctedQuery: FormControl<string | null | undefined>,

		/** A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. */
		redirectUri: FormControl<string | null | undefined>,

		/** The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchResponseFormProperties>({
			attributionToken: new FormControl<string | null | undefined>(undefined),
			correctedQuery: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A facet result. */
	export interface GoogleCloudRetailV2betaSearchResponseFacet {

		/** Whether the facet is dynamically generated. */
		dynamicFacet?: boolean | null;

		/** The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1". */
		key?: string | null;

		/** The facet values for this field. */
		values?: Array<GoogleCloudRetailV2betaSearchResponseFacetFacetValue>;
	}

	/** A facet result. */
	export interface GoogleCloudRetailV2betaSearchResponseFacetFormProperties {

		/** Whether the facet is dynamically generated. */
		dynamicFacet: FormControl<boolean | null | undefined>,

		/** The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1". */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchResponseFacetFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchResponseFacetFormProperties>({
			dynamicFacet: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A facet value which contains value names and their count. */
	export interface GoogleCloudRetailV2betaSearchResponseFacetFacetValue {

		/** Number of items that have this facet value. */
		count?: string | null;

		/** A floating point interval. */
		interval?: GoogleCloudRetailV2betaInterval;

		/** The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. */
		maxValue?: number | null;

		/** The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. */
		minValue?: number | null;

		/** Text value of a facet, such as "Black" for facet "colorFamilies". */
		value?: string | null;
	}

	/** A facet value which contains value names and their count. */
	export interface GoogleCloudRetailV2betaSearchResponseFacetFacetValueFormProperties {

		/** Number of items that have this facet value. */
		count: FormControl<string | null | undefined>,

		/** The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. */
		maxValue: FormControl<number | null | undefined>,

		/** The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true. */
		minValue: FormControl<number | null | undefined>,

		/** Text value of a facet, such as "Black" for facet "colorFamilies". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchResponseFacetFacetValueFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchResponseFacetFacetValueFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information describing query expansion including whether expansion has occurred. */
	export interface GoogleCloudRetailV2betaSearchResponseQueryExpansionInfo {

		/** Bool describing whether query expansion has occurred. */
		expandedQuery?: boolean | null;

		/** Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true. */
		pinnedResultCount?: string | null;
	}

	/** Information describing query expansion including whether expansion has occurred. */
	export interface GoogleCloudRetailV2betaSearchResponseQueryExpansionInfoFormProperties {

		/** Bool describing whether query expansion has occurred. */
		expandedQuery: FormControl<boolean | null | undefined>,

		/** Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true. */
		pinnedResultCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchResponseQueryExpansionInfoFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchResponseQueryExpansionInfoFormProperties>({
			expandedQuery: new FormControl<boolean | null | undefined>(undefined),
			pinnedResultCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the search results. */
	export interface GoogleCloudRetailV2betaSearchResponseSearchResult {

		/** Product.id of the searched Product. */
		id?: string | null;

		/** The count of matched variant Products. */
		matchingVariantCount?: number | null;

		/** If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key "sku1" with field mask "products.color_info" indicates there is a match between "sku1" ColorInfo and the query. */
		matchingVariantFields?: {[id: string]: string };

		/** Specifies previous events related to this product for this user based on UserEvent with same SearchRequest.visitor_id or UserInfo.user_id. This is set only when SearchRequest.PersonalizationSpec.mode is SearchRequest.PersonalizationSpec.Mode.AUTO. Possible values: * `purchased`: Indicates that this product has been purchased before. */
		personalLabels?: Array<string>;

		/** Product captures all metadata information of items to be recommended or searched. */
		product?: GoogleCloudRetailV2betaProduct;

		/** The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by "colorFamilies:ANY(\"red\")" and rollup "colorFamilies", only "red" is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors "red" and "blue", the rollup values are { key: "colorFamilies" value { list_value { values { string_value: "red" } values { string_value: "blue" } } } } For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, `{key: "pickupInStore.store1" value { number_value: 10 }}` means a there are 10 variants in this product are available in the store "store1". */
		variantRollupValues?: {[id: string]: any };
	}

	/** Represents the search results. */
	export interface GoogleCloudRetailV2betaSearchResponseSearchResultFormProperties {

		/** Product.id of the searched Product. */
		id: FormControl<string | null | undefined>,

		/** The count of matched variant Products. */
		matchingVariantCount: FormControl<number | null | undefined>,

		/** If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key "sku1" with field mask "products.color_info" indicates there is a match between "sku1" ColorInfo and the query. */
		matchingVariantFields: FormControl<{[id: string]: string } | null | undefined>,

		/** The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by "colorFamilies:ANY(\"red\")" and rollup "colorFamilies", only "red" is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors "red" and "blue", the rollup values are { key: "colorFamilies" value { list_value { values { string_value: "red" } values { string_value: "blue" } } } } For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, `{key: "pickupInStore.store1" value { number_value: 10 }}` means a there are 10 variants in this product are available in the store "store1". */
		variantRollupValues: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSearchResponseSearchResultFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSearchResponseSearchResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			matchingVariantCount: new FormControl<number | null | undefined>(undefined),
			matchingVariantFields: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			variantRollupValues: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Request message to set a specified branch as new default_branch. */
	export interface GoogleCloudRetailV2betaSetDefaultBranchRequest {

		/** The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned. */
		branchId?: string | null;

		/** If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products. */
		force?: boolean | null;

		/** Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		note?: string | null;
	}

	/** Request message to set a specified branch as new default_branch. */
	export interface GoogleCloudRetailV2betaSetDefaultBranchRequestFormProperties {

		/** The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned. */
		branchId: FormControl<string | null | undefined>,

		/** If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products. */
		force: FormControl<boolean | null | undefined>,

		/** Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		note: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSetDefaultBranchRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSetDefaultBranchRequestFormProperties>({
			branchId: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryMetadata {
	}

	/** Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryMetadataFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaSetInventoryMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSetInventoryMetadataFormProperties>({
		});

	}


	/** Request message for ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryRequest {

		/** If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing?: boolean | null;

		/** Product captures all metadata information of items to be recommended or searched. */
		inventory?: GoogleCloudRetailV2betaProduct;

		/** Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. */
		setMask?: string | null;

		/** The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used. */
		setTime?: string | null;
	}

	/** Request message for ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryRequestFormProperties {

		/** If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. */
		allowMissing: FormControl<boolean | null | undefined>,

		/** Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored. */
		setMask: FormControl<string | null | undefined>,

		/** The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used. */
		setTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaSetInventoryRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSetInventoryRequestFormProperties>({
			allowMissing: new FormControl<boolean | null | undefined>(undefined),
			setMask: new FormControl<string | null | undefined>(undefined),
			setTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryResponse {
	}

	/** Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method. */
	export interface GoogleCloudRetailV2betaSetInventoryResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaSetInventoryResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaSetInventoryResponseFormProperties>({
		});

	}


	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2betaTuneModelMetadata {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model?: string | null;
	}

	/** Metadata associated with a tune operation. */
	export interface GoogleCloudRetailV2betaTuneModelMetadataFormProperties {

		/** The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` */
		model: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudRetailV2betaTuneModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaTuneModelMetadataFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen). */
	export interface GoogleCloudRetailV2betaTuneModelRequest {
	}

	/** Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen). */
	export interface GoogleCloudRetailV2betaTuneModelRequestFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaTuneModelRequestFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaTuneModelRequestFormProperties>({
		});

	}


	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2betaTuneModelResponse {
	}

	/** Response associated with a tune operation. */
	export interface GoogleCloudRetailV2betaTuneModelResponseFormProperties {
	}
	export function CreateGoogleCloudRetailV2betaTuneModelResponseFormGroup() {
		return new FormGroup<GoogleCloudRetailV2betaTuneModelResponseFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
		 * Post v2beta/{attributesConfig}:addCatalogAttribute
		 * @param {string} attributesConfig Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
		 * @return {GoogleCloudRetailV2betaAttributesConfig} Successful response
		 */
		Retail_projects_locations_catalogs_attributesConfig_addCatalogAttribute(attributesConfig: string, requestBody: GoogleCloudRetailV2betaAddCatalogAttributeRequest): Observable<GoogleCloudRetailV2betaAttributesConfig> {
			return this.http.post<GoogleCloudRetailV2betaAttributesConfig>(this.baseUri + 'v2beta/' + (attributesConfig == null ? '' : encodeURIComponent(attributesConfig)) + ':addCatalogAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes all specified CatalogAttributes from the AttributesConfig.
		 * Post v2beta/{attributesConfig}:batchRemoveCatalogAttributes
		 * @param {string} attributesConfig Required. The attributes config resource shared by all catalog attributes being deleted. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
		 * @return {GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse} Successful response
		 */
		Retail_projects_locations_catalogs_attributesConfig_batchRemoveCatalogAttributes(attributesConfig: string, requestBody: GoogleCloudRetailV2betaBatchRemoveCatalogAttributesRequest): Observable<GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse> {
			return this.http.post<GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse>(this.baseUri + 'v2beta/' + (attributesConfig == null ? '' : encodeURIComponent(attributesConfig)) + ':batchRemoveCatalogAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
		 * Post v2beta/{attributesConfig}:removeCatalogAttribute
		 * @param {string} attributesConfig Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
		 * @return {GoogleCloudRetailV2betaAttributesConfig} Successful response
		 */
		Retail_projects_locations_catalogs_attributesConfig_removeCatalogAttribute(attributesConfig: string, requestBody: GoogleCloudRetailV2betaRemoveCatalogAttributeRequest): Observable<GoogleCloudRetailV2betaAttributesConfig> {
			return this.http.post<GoogleCloudRetailV2betaAttributesConfig>(this.baseUri + 'v2beta/' + (attributesConfig == null ? '' : encodeURIComponent(attributesConfig)) + ':removeCatalogAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
		 * Post v2beta/{attributesConfig}:replaceCatalogAttribute
		 * @param {string} attributesConfig Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`
		 * @return {GoogleCloudRetailV2betaAttributesConfig} Successful response
		 */
		Retail_projects_locations_catalogs_attributesConfig_replaceCatalogAttribute(attributesConfig: string, requestBody: GoogleCloudRetailV2betaReplaceCatalogAttributeRequest): Observable<GoogleCloudRetailV2betaAttributesConfig> {
			return this.http.post<GoogleCloudRetailV2betaAttributesConfig>(this.baseUri + 'v2beta/' + (attributesConfig == null ? '' : encodeURIComponent(attributesConfig)) + ':replaceCatalogAttribute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
		 * Get v2beta/{catalog}:completeQuery
		 * @param {string} catalog Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/locations/global/catalogs/default_catalog`.
		 * @param {string} dataset Determines which dataset to use for fetching completion. "user-data" will use the imported dataset through CompletionService.ImportCompletionData. "cloud-retail" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the "user-data". Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).
		 * @param {string} deviceType The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device types. Supported formats: * `UNKNOWN_DEVICE_TYPE` * `DESKTOP` * `MOBILE` * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.
		 * @param {string} entity The entity for customers who run multiple entities, domains, sites, or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it must be an exact match with UserEvent.entity to get per-entity autocomplete results.
		 * @param {Array<string>} languageCodes Note that this field applies for `user-data` dataset only. For requests with `cloud-retail` dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3.
		 * @param {number} maxSuggestions Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.
		 * @param {string} query Required. The query used to generate suggestions. The maximum number of allowed characters is 255.
		 * @param {string} visitorId Required field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
		 * @return {GoogleCloudRetailV2betaCompleteQueryResponse} Successful response
		 */
		Retail_projects_locations_catalogs_completeQuery(catalog: string, dataset: string | null | undefined, deviceType: string | null | undefined, entity: string | null | undefined, languageCodes: Array<string> | null | undefined, maxSuggestions: number | null | undefined, query: string | null | undefined, visitorId: string | null | undefined): Observable<GoogleCloudRetailV2betaCompleteQueryResponse> {
			return this.http.get<GoogleCloudRetailV2betaCompleteQueryResponse>(this.baseUri + 'v2beta/' + (catalog == null ? '' : encodeURIComponent(catalog)) + ':completeQuery&dataset=' + (dataset == null ? '' : encodeURIComponent(dataset)) + '&deviceType=' + (deviceType == null ? '' : encodeURIComponent(deviceType)) + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&' + languageCodes?.map(z => `languageCodes=${encodeURIComponent(z)}`).join('&') + '&maxSuggestions=' + maxSuggestions + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&visitorId=' + (visitorId == null ? '' : encodeURIComponent(visitorId)), {});
		}

		/**
		 * Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
		 * Get v2beta/{catalog}:getDefaultBranch
		 * @param {string} catalog The parent catalog resource name, such as `projects/locations/global/catalogs/default_catalog`.
		 * @return {GoogleCloudRetailV2betaGetDefaultBranchResponse} Successful response
		 */
		Retail_projects_locations_catalogs_getDefaultBranch(catalog: string): Observable<GoogleCloudRetailV2betaGetDefaultBranchResponse> {
			return this.http.get<GoogleCloudRetailV2betaGetDefaultBranchResponse>(this.baseUri + 'v2beta/' + (catalog == null ? '' : encodeURIComponent(catalog)) + ':getDefaultBranch', {});
		}

		/**
		 * Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/locations/catalogs/branches/1` is set as default, setting SearchRequest.branch to `projects/locations/catalogs/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/locations/catalogs/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/locations/catalogs/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
		 * Post v2beta/{catalog}:setDefaultBranch
		 * @param {string} catalog Full resource name of the catalog, such as `projects/locations/global/catalogs/default_catalog`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Retail_projects_locations_catalogs_setDefaultBranch(catalog: string, requestBody: GoogleCloudRetailV2betaSetDefaultBranchRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v2beta/' + (catalog == null ? '' : encodeURIComponent(catalog)) + ':setDefaultBranch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
		 * Delete v2beta/{name}
		 * @param {string} name Required. The resource name of the ServingConfig to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v2beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a ServingConfig.
		 * Patch v2beta/{name}
		 * @param {string} name Immutable. Fully qualified name `projects/locations/global/catalogs/servingConfig/*`
		 * @param {string} updateMask Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
		 * @return {GoogleCloudRetailV2betaServingConfig} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudRetailV2betaServingConfig): Observable<GoogleCloudRetailV2betaServingConfig> {
			return this.http.patch<GoogleCloudRetailV2betaServingConfig>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v2beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Retail_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Pauses the training of an existing model.
		 * Post v2beta/{name}:pause
		 * @param {string} name Required. The name of the model to pause. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
		 * @return {GoogleCloudRetailV2betaModel} Successful response
		 */
		Retail_projects_locations_catalogs_models_pause(name: string, requestBody: GoogleCloudRetailV2betaPauseModelRequest): Observable<GoogleCloudRetailV2betaModel> {
			return this.http.post<GoogleCloudRetailV2betaModel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resumes the training of an existing model.
		 * Post v2beta/{name}:resume
		 * @param {string} name Required. The name of the model to resume. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
		 * @return {GoogleCloudRetailV2betaModel} Successful response
		 */
		Retail_projects_locations_catalogs_models_resume(name: string, requestBody: GoogleCloudRetailV2betaResumeModelRequest): Observable<GoogleCloudRetailV2betaModel> {
			return this.http.post<GoogleCloudRetailV2betaModel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.
		 * Post v2beta/{name}:setInventory
		 * @param {string} name Immutable. Full resource name of the product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_setInventory(name: string, requestBody: GoogleCloudRetailV2betaSetInventoryRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':setInventory', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tunes an existing model.
		 * Post v2beta/{name}:tune
		 * @param {string} name Required. The resource name of the model to tune. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_models_tune(name: string, requestBody: GoogleCloudRetailV2betaTuneModelRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':tune', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Catalogs associated with the project.
		 * Get v2beta/{parent}/catalogs
		 * @param {string} parent Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.
		 * @param {number} pageSize Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.
		 * @param {string} pageToken A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
		 * @return {GoogleCloudRetailV2betaListCatalogsResponse} Successful response
		 */
		Retail_projects_locations_catalogs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRetailV2betaListCatalogsResponse> {
			return this.http.get<GoogleCloudRetailV2betaListCatalogsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/catalogs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
		 * Post v2beta/{parent}/completionData:import
		 * @param {string} parent Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_completionData_import(parent: string, requestBody: GoogleCloudRetailV2betaImportCompletionDataRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/completionData:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Controls by their parent Catalog.
		 * Get v2beta/{parent}/controls
		 * @param {string} parent Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {string} filter Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: 'serving_config = "boosted_home_page_cvr"'
		 * @param {number} pageSize Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudRetailV2betaListControlsResponse} Successful response
		 */
		Retail_projects_locations_catalogs_controls_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRetailV2betaListControlsResponse> {
			return this.http.get<GoogleCloudRetailV2betaListControlsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/controls&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
		 * Post v2beta/{parent}/controls
		 * @param {string} parent Required. Full resource name of parent catalog. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {string} controlId Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.
		 * @return {GoogleCloudRetailV2betaControl} Successful response
		 */
		Retail_projects_locations_catalogs_controls_create(parent: string, controlId: string | null | undefined, requestBody: GoogleCloudRetailV2betaControl): Observable<GoogleCloudRetailV2betaControl> {
			return this.http.post<GoogleCloudRetailV2betaControl>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/controls&controlId=' + (controlId == null ? '' : encodeURIComponent(controlId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the models linked to this event store.
		 * Get v2beta/{parent}/models
		 * @param {string} parent Required. The parent for which to list models. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {number} pageSize Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListModels` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudRetailV2betaListModelsResponse} Successful response
		 */
		Retail_projects_locations_catalogs_models_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRetailV2betaListModelsResponse> {
			return this.http.get<GoogleCloudRetailV2betaListModelsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new model.
		 * Post v2beta/{parent}/models
		 * @param {string} parent Required. The parent resource under which to create the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {boolean} dryRun Optional. Whether to run a dry run to validate the request (without actually creating the model).
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_models_create(parent: string, dryRun: boolean | null | undefined, requestBody: GoogleCloudRetailV2betaModel): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/models&dryRun=' + dryRun, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of Products.
		 * Get v2beta/{parent}/products
		 * @param {string} parent Required. The parent branch resource name, such as `projects/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
		 * @param {string} filter A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.
		 * @param {number} pageSize Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
		 * @param {string} pageToken A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
		 * @param {string} readMask The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
		 * @return {GoogleCloudRetailV2betaListProductsResponse} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudRetailV2betaListProductsResponse> {
			return this.http.get<GoogleCloudRetailV2betaListProductsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates a Product.
		 * Post v2beta/{parent}/products
		 * @param {string} parent Required. The parent catalog resource name, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch`.
		 * @param {string} productId Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.
		 * @return {GoogleCloudRetailV2betaProduct} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_create(parent: string, productId: string | null | undefined, requestBody: GoogleCloudRetailV2betaProduct): Observable<GoogleCloudRetailV2betaProduct> {
			return this.http.post<GoogleCloudRetailV2betaProduct>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products&productId=' + (productId == null ? '' : encodeURIComponent(productId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
		 * Post v2beta/{parent}/products:import
		 * @param {string} parent Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_import(parent: string, requestBody: GoogleCloudRetailV2betaImportProductsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
		 * Post v2beta/{parent}/products:purge
		 * @param {string} parent Required. The resource name of the branch under which the products are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_purge(parent: string, requestBody: GoogleCloudRetailV2betaPurgeProductsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/products:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all ServingConfigs linked to this catalog.
		 * Get v2beta/{parent}/servingConfigs
		 * @param {string} parent Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {number} pageSize Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudRetailV2betaListServingConfigsResponse} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudRetailV2betaListServingConfigsResponse> {
			return this.http.get<GoogleCloudRetailV2betaListServingConfigsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servingConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
		 * Post v2beta/{parent}/servingConfigs
		 * @param {string} parent Required. Full resource name of parent. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`
		 * @param {string} servingConfigId Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.
		 * @return {GoogleCloudRetailV2betaServingConfig} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_create(parent: string, servingConfigId: string | null | undefined, requestBody: GoogleCloudRetailV2betaServingConfig): Observable<GoogleCloudRetailV2betaServingConfig> {
			return this.http.post<GoogleCloudRetailV2betaServingConfig>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/servingConfigs&servingConfigId=' + (servingConfigId == null ? '' : encodeURIComponent(servingConfigId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
		 * Get v2beta/{parent}/userEvents:collect
		 * @param {string} parent Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.
		 * @param {string} ets The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
		 * @param {string} prebuiltRule The prebuilt rule name that can convert a specific type of raw_json. For example: "ga4_bq" rule for the GA4 user event schema.
		 * @param {string} rawJson An arbitrary serialized JSON string that contains necessary information that can comprise a user event. When this field is specified, the user_event field will be ignored. Note: line-delimited JSON is not supported, a single JSON only.
		 * @param {string} uri The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.
		 * @param {string} userEvent Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Retail_projects_locations_catalogs_userEvents_collect(parent: string, ets: string | null | undefined, prebuiltRule: string | null | undefined, rawJson: string | null | undefined, uri: string | null | undefined, userEvent: string | null | undefined): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:collect&ets=' + (ets == null ? '' : encodeURIComponent(ets)) + '&prebuiltRule=' + (prebuiltRule == null ? '' : encodeURIComponent(prebuiltRule)) + '&rawJson=' + (rawJson == null ? '' : encodeURIComponent(rawJson)) + '&uri=' + (uri == null ? '' : encodeURIComponent(uri)) + '&userEvent=' + (userEvent == null ? '' : encodeURIComponent(userEvent)), {});
		}

		/**
		 * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
		 * Post v2beta/{parent}/userEvents:import
		 * @param {string} parent Required. `projects/1234/locations/global/catalogs/default_catalog`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_userEvents_import(parent: string, requestBody: GoogleCloudRetailV2betaImportUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
		 * Post v2beta/{parent}/userEvents:purge
		 * @param {string} parent Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_userEvents_purge(parent: string, requestBody: GoogleCloudRetailV2betaPurgeUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
		 * Post v2beta/{parent}/userEvents:rejoin
		 * @param {string} parent Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_userEvents_rejoin(parent: string, requestBody: GoogleCloudRetailV2betaRejoinUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:rejoin', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Writes a single user event.
		 * Post v2beta/{parent}/userEvents:write
		 * @param {string} parent Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.
		 * @param {boolean} writeAsync If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs.
		 * @return {GoogleCloudRetailV2betaUserEvent} Successful response
		 */
		Retail_projects_locations_catalogs_userEvents_write(parent: string, writeAsync: boolean | null | undefined, requestBody: GoogleCloudRetailV2betaUserEvent): Observable<GoogleCloudRetailV2betaUserEvent> {
			return this.http.post<GoogleCloudRetailV2betaUserEvent>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:write&writeAsync=' + writeAsync, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes a recommendation prediction.
		 * Post v2beta/{placement}:predict
		 * @param {string} placement Required. Full resource name of the format: `{placement=projects/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs
		 * @return {GoogleCloudRetailV2betaPredictResponse} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_predict(placement: string, requestBody: GoogleCloudRetailV2betaPredictRequest): Observable<GoogleCloudRetailV2betaPredictResponse> {
			return this.http.post<GoogleCloudRetailV2betaPredictResponse>(this.baseUri + 'v2beta/' + (placement == null ? '' : encodeURIComponent(placement)) + ':predict', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
		 * Post v2beta/{placement}:search
		 * @param {string} placement Required. The resource name of the Retail Search serving config, such as `projects/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that are used to make the search.
		 * @return {GoogleCloudRetailV2betaSearchResponse} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_search(placement: string, requestBody: GoogleCloudRetailV2betaSearchRequest): Observable<GoogleCloudRetailV2betaSearchResponse> {
			return this.http.post<GoogleCloudRetailV2betaSearchResponse>(this.baseUri + 'v2beta/' + (placement == null ? '' : encodeURIComponent(placement)) + ':search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * We recommend that you use the ProductService.AddLocalInventories method instead of the ProductService.AddFulfillmentPlaces method. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
		 * Post v2beta/{product}:addFulfillmentPlaces
		 * @param {string} product Required. Full resource name of Product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_addFulfillmentPlaces(product: string, requestBody: GoogleCloudRetailV2betaAddFulfillmentPlacesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (product == null ? '' : encodeURIComponent(product)) + ':addFulfillmentPlaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
		 * Post v2beta/{product}:addLocalInventories
		 * @param {string} product Required. Full resource name of Product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_addLocalInventories(product: string, requestBody: GoogleCloudRetailV2betaAddLocalInventoriesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (product == null ? '' : encodeURIComponent(product)) + ':addLocalInventories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * We recommend that you use the ProductService.RemoveLocalInventories method instead of the ProductService.RemoveFulfillmentPlaces method. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
		 * Post v2beta/{product}:removeFulfillmentPlaces
		 * @param {string} product Required. Full resource name of Product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_removeFulfillmentPlaces(product: string, requestBody: GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (product == null ? '' : encodeURIComponent(product)) + ':removeFulfillmentPlaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.
		 * Post v2beta/{product}:removeLocalInventories
		 * @param {string} product Required. Full resource name of Product, such as `projects/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Retail_projects_locations_catalogs_branches_products_removeLocalInventories(product: string, requestBody: GoogleCloudRetailV2betaRemoveLocalInventoriesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v2beta/' + (product == null ? '' : encodeURIComponent(product)) + ':removeLocalInventories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
		 * Post v2beta/{servingConfig}:addControl
		 * @param {string} servingConfig Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
		 * @return {GoogleCloudRetailV2betaServingConfig} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_addControl(servingConfig: string, requestBody: GoogleCloudRetailV2betaAddControlRequest): Observable<GoogleCloudRetailV2betaServingConfig> {
			return this.http.post<GoogleCloudRetailV2betaServingConfig>(this.baseUri + 'v2beta/' + (servingConfig == null ? '' : encodeURIComponent(servingConfig)) + ':addControl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
		 * Post v2beta/{servingConfig}:removeControl
		 * @param {string} servingConfig Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`
		 * @return {GoogleCloudRetailV2betaServingConfig} Successful response
		 */
		Retail_projects_locations_catalogs_servingConfigs_removeControl(servingConfig: string, requestBody: GoogleCloudRetailV2betaRemoveControlRequest): Observable<GoogleCloudRetailV2betaServingConfig> {
			return this.http.post<GoogleCloudRetailV2betaServingConfig>(this.baseUri + 'v2beta/' + (servingConfig == null ? '' : encodeURIComponent(servingConfig)) + ':removeControl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

