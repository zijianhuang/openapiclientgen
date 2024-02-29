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
	export interface GoogleCloudDiscoveryengineLoggingErrorContext {

		/** HTTP request data that is related to a reported error. */
		httpRequest?: GoogleCloudDiscoveryengineLoggingHttpRequestContext;

		/** Indicates a location in the source code of the service for which errors are reported. */
		reportLocation?: GoogleCloudDiscoveryengineLoggingSourceLocation;
	}

	/** A description of the context in which an error occurred. */
	export interface GoogleCloudDiscoveryengineLoggingErrorContextFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineLoggingErrorContextFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingErrorContextFormProperties>({
		});

	}


	/** HTTP request data that is related to a reported error. */
	export interface GoogleCloudDiscoveryengineLoggingHttpRequestContext {

		/**
		 * The HTTP response status code for the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode?: number | null;
	}

	/** HTTP request data that is related to a reported error. */
	export interface GoogleCloudDiscoveryengineLoggingHttpRequestContextFormProperties {

		/**
		 * The HTTP response status code for the request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		responseStatusCode: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineLoggingHttpRequestContextFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingHttpRequestContextFormProperties>({
			responseStatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Indicates a location in the source code of the service for which errors are reported. */
	export interface GoogleCloudDiscoveryengineLoggingSourceLocation {

		/** Human-readable name of a function or method—for example, `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend`. */
		functionName?: string | null;
	}

	/** Indicates a location in the source code of the service for which errors are reported. */
	export interface GoogleCloudDiscoveryengineLoggingSourceLocationFormProperties {

		/** Human-readable name of a function or method—for example, `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend`. */
		functionName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineLoggingSourceLocationFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingSourceLocationFormProperties>({
			functionName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error log which is reported to the Error Reporting system. */
	export interface GoogleCloudDiscoveryengineLoggingErrorLog {

		/** A description of the context in which an error occurred. */
		context?: GoogleCloudDiscoveryengineLoggingErrorContext;

		/** The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents` */
		importPayload?: GoogleCloudDiscoveryengineLoggingImportErrorContext;

		/** A message describing the error. */
		message?: string | null;

		/** The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest` * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest` */
		requestPayload?: {[id: string]: any };

		/** The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend` * `google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent` * `google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent` */
		responsePayload?: {[id: string]: any };

		/** Describes a running service that sends errors. */
		serviceContext?: GoogleCloudDiscoveryengineLoggingServiceContext;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: GoogleRpcStatus;
	}

	/** An error log which is reported to the Error Reporting system. */
	export interface GoogleCloudDiscoveryengineLoggingErrorLogFormProperties {

		/** A message describing the error. */
		message: FormControl<string | null | undefined>,

		/** The API request payload, represented as a protocol buffer. Most API request types are supported—for example: * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.DocumentService.CreateDocumentRequest` * `type.googleapis.com/google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEventRequest` */
		requestPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported, and no PII is included: * `google.cloud.discoveryengine.v1alpha.RecommendationService.Recommend` * `google.cloud.discoveryengine.v1alpha.UserEventService.WriteUserEvent` * `google.cloud.discoveryengine.v1alpha.UserEventService.CollectUserEvent` */
		responsePayload: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineLoggingErrorLogFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingErrorLogFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			requestPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			responsePayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents` */
	export interface GoogleCloudDiscoveryengineLoggingImportErrorContext {

		/** The detailed content which caused the error on importing a document. */
		document?: string | null;

		/** Google Cloud Storage file path of the import source. Can be set for batch operation error. */
		gcsPath?: string | null;

		/** Line number of the content in file. Should be empty for permission or batch operation error. */
		lineNumber?: string | null;

		/** The operation resource name of the LRO. */
		operation?: string | null;

		/** The detailed content which caused the error on importing a user event. */
		userEvent?: string | null;
	}

	/** The error payload that is populated on LRO import APIs, including the following: * `google.cloud.discoveryengine.v1alpha.DocumentService.ImportDocuments` * `google.cloud.discoveryengine.v1alpha.UserEventService.ImportUserEvents` */
	export interface GoogleCloudDiscoveryengineLoggingImportErrorContextFormProperties {

		/** The detailed content which caused the error on importing a document. */
		document: FormControl<string | null | undefined>,

		/** Google Cloud Storage file path of the import source. Can be set for batch operation error. */
		gcsPath: FormControl<string | null | undefined>,

		/** Line number of the content in file. Should be empty for permission or batch operation error. */
		lineNumber: FormControl<string | null | undefined>,

		/** The operation resource name of the LRO. */
		operation: FormControl<string | null | undefined>,

		/** The detailed content which caused the error on importing a user event. */
		userEvent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineLoggingImportErrorContextFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingImportErrorContextFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			gcsPath: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			userEvent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a running service that sends errors. */
	export interface GoogleCloudDiscoveryengineLoggingServiceContext {

		/** An identifier of the service—for example, `discoveryengine.googleapis.com`. */
		service?: string | null;
	}

	/** Describes a running service that sends errors. */
	export interface GoogleCloudDiscoveryengineLoggingServiceContextFormProperties {

		/** An identifier of the service—for example, `discoveryengine.googleapis.com`. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineLoggingServiceContextFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineLoggingServiceContextFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

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
	export interface GoogleRpcStatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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


	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1CreateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1CreateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1CreateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1CreateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1DeleteSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1DeleteSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1DeleteSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1DeleteSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1ImportDocumentsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1ImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1ImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportDocumentsResponseFormProperties>({
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1ImportErrorConfig {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1ImportErrorConfigFormProperties {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportErrorConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportErrorConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount?: string | null;

		/** Count of deny list entries successfully imported. */
		importedEntriesCount?: string | null;
	}

	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponseFormProperties {

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount: FormControl<string | null | undefined>,

		/** Count of deny list entries successfully imported. */
		importedEntriesCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponseFormProperties>({
			failedEntriesCount: new FormControl<string | null | undefined>(undefined),
			importedEntriesCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportUserEventsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1ImportUserEventsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportUserEventsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1ImportUserEventsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1ImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount?: string | null;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1ImportUserEventsResponseFormProperties {

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1ImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1ImportUserEventsResponseFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1PurgeDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1PurgeDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1PurgeDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1PurgeDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1PurgeDocumentsResponse {

		/** The total count of documents purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1PurgeDocumentsResponseFormProperties {

		/** The total count of documents purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1PurgeDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1PurgeDocumentsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Number of suggestion deny list entries purged. */
		purgeCount?: string | null;
	}

	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesResponseFormProperties {

		/** Number of suggestion deny list entries purged. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1PurgeSuggestionDenyListEntriesResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1Schema {

		/** The JSON representation of the schema. */
		jsonSchema?: string | null;

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name?: string | null;

		/** The structured representation of the schema. */
		structSchema?: {[id: string]: any };
	}

	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1SchemaFormProperties {

		/** The JSON representation of the schema. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name: FormControl<string | null | undefined>,

		/** The structured representation of the schema. */
		structSchema: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1SchemaFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1SchemaFormProperties>({
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			structSchema: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1UpdateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1UpdateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1UpdateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1UpdateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSites operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.BatchCreateTargetSites operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSiteMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteSearchEngineService.BatchCreateTargetSites method. */
	export interface GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponse {

		/** TargetSites created. */
		targetSites?: Array<GoogleCloudDiscoveryengineV1alphaTargetSite>;
	}

	/** Response message for SiteSearchEngineService.BatchCreateTargetSites method. */
	export interface GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaBatchCreateTargetSitesResponseFormProperties>({
		});

	}


	/** A target site for the SiteSearchEngine. */
	export interface GoogleCloudDiscoveryengineV1alphaTargetSite {

		/** Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine. */
		exactMatch?: boolean | null;

		/** Site search indexing failure reasons. */
		failureReason?: GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason;

		/** Output only. This is system-generated based on the provided_uri_pattern. */
		generatedUriPattern?: string | null;

		/** Output only. Indexing status. */
		indexingStatus?: GoogleCloudDiscoveryengineV1alphaTargetSiteIndexingStatus | null;

		/** Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated. */
		name?: string | null;

		/** Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated. */
		providedUriPattern?: string | null;

		/** Verification information for target sites in advanced site search. */
		siteVerificationInfo?: GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo;

		/** The type of the target site, e.g. whether the site is to be included or excluded. */
		type?: GoogleCloudDiscoveryengineV1alphaTargetSiteType | null;

		/** Output only. The target site's last updated time. */
		updateTime?: string | null;
	}

	/** A target site for the SiteSearchEngine. */
	export interface GoogleCloudDiscoveryengineV1alphaTargetSiteFormProperties {

		/** Input only. If set to false, a uri_pattern is generated to include all pages whose address contains the provided_uri_pattern. If set to true, an uri_pattern is generated to try to be an exact match of the provided_uri_pattern or just the specific page if the provided_uri_pattern is a specific one. provided_uri_pattern is always normalized to generate the URI pattern to be used by the search engine. */
		exactMatch: FormControl<boolean | null | undefined>,

		/** Output only. This is system-generated based on the provided_uri_pattern. */
		generatedUriPattern: FormControl<string | null | undefined>,

		/** Output only. Indexing status. */
		indexingStatus: FormControl<GoogleCloudDiscoveryengineV1alphaTargetSiteIndexingStatus | null | undefined>,

		/** Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated. */
		name: FormControl<string | null | undefined>,

		/** Required. Input only. The user provided URI pattern from which the `generated_uri_pattern` is generated. */
		providedUriPattern: FormControl<string | null | undefined>,

		/** The type of the target site, e.g. whether the site is to be included or excluded. */
		type: FormControl<GoogleCloudDiscoveryengineV1alphaTargetSiteType | null | undefined>,

		/** Output only. The target site's last updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTargetSiteFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTargetSiteFormProperties>({
			exactMatch: new FormControl<boolean | null | undefined>(undefined),
			generatedUriPattern: new FormControl<string | null | undefined>(undefined),
			indexingStatus: new FormControl<GoogleCloudDiscoveryengineV1alphaTargetSiteIndexingStatus | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providedUriPattern: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudDiscoveryengineV1alphaTargetSiteType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Site search indexing failure reasons. */
	export interface GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReason {
		quotaFailure?: GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure;
	}

	/** Site search indexing failure reasons. */
	export interface GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonFormProperties>({
		});

	}

	export interface GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailure {
	}
	export interface GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailureFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailureFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTargetSiteFailureReasonQuotaFailureFormProperties>({
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaTargetSiteIndexingStatus { INDEXING_STATUS_UNSPECIFIED = 'INDEXING_STATUS_UNSPECIFIED', PENDING = 'PENDING', FAILED = 'FAILED', SUCCEEDED = 'SUCCEEDED', DELETING = 'DELETING' }


	/** Verification information for target sites in advanced site search. */
	export interface GoogleCloudDiscoveryengineV1alphaSiteVerificationInfo {

		/** Site verification state indicating the ownership and validity. */
		siteVerificationState?: GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoSiteVerificationState | null;

		/** Latest site verification time. */
		verifyTime?: string | null;
	}

	/** Verification information for target sites in advanced site search. */
	export interface GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoFormProperties {

		/** Site verification state indicating the ownership and validity. */
		siteVerificationState: FormControl<GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoSiteVerificationState | null | undefined>,

		/** Latest site verification time. */
		verifyTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaSiteVerificationInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoFormProperties>({
			siteVerificationState: new FormControl<GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoSiteVerificationState | null | undefined>(undefined),
			verifyTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaSiteVerificationInfoSiteVerificationState { SITE_VERIFICATION_STATE_UNSPECIFIED = 'SITE_VERIFICATION_STATE_UNSPECIFIED', VERIFIED = 'VERIFIED', UNVERIFIED = 'UNVERIFIED', EXEMPTED = 'EXEMPTED' }

	export enum GoogleCloudDiscoveryengineV1alphaTargetSiteType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', INCLUDE = 'INCLUDE', EXCLUDE = 'EXCLUDE' }


	/** Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the DataStoreService.CreateDataStore operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaCreateDataStoreMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateEngineMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the EngineService.CreateEngine operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateEngineMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaCreateEngineMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaCreateEngineMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaCreateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaCreateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.CreateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaCreateTargetSiteMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DataStore captures global settings and configs at the DataStore level. */
	export interface GoogleCloudDiscoveryengineV1alphaDataStore {

		/** Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT. */
		contentConfig?: GoogleCloudDiscoveryengineV1alphaDataStoreContentConfig | null;

		/** Output only. Timestamp the DataStore was created at. */
		createTime?: string | null;

		/** Output only. The id of the default Schema asscociated to this data store. */
		defaultSchemaId?: string | null;

		/** Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName?: string | null;

		/** Immutable. The industry vertical that the data store registers. */
		industryVertical?: GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null;

		/** Immutable. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name?: string | null;

		/** The solutions that the data store enrolls. Available solutions for each industry_vertical: * `MEDIA`: `SOLUTION_TYPE_RECOMMENDATION` and `SOLUTION_TYPE_SEARCH`. * `SITE_SEARCH`: `SOLUTION_TYPE_SEARCH` is automatically enrolled. Other solutions cannot be enrolled. */
		solutionTypes?: Array<string>;
	}

	/** DataStore captures global settings and configs at the DataStore level. */
	export interface GoogleCloudDiscoveryengineV1alphaDataStoreFormProperties {

		/** Immutable. The content config of the data store. If this field is unset, the server behavior defaults to ContentConfig.NO_CONTENT. */
		contentConfig: FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreContentConfig | null | undefined>,

		/** Output only. Timestamp the DataStore was created at. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The id of the default Schema asscociated to this data store. */
		defaultSchemaId: FormControl<string | null | undefined>,

		/** Required. The data store display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The industry vertical that the data store registers. */
		industryVertical: FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null | undefined>,

		/** Immutable. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDataStoreFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDataStoreFormProperties>({
			contentConfig: new FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreContentConfig | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			defaultSchemaId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			industryVertical: new FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaDataStoreContentConfig { CONTENT_CONFIG_UNSPECIFIED = 'CONTENT_CONFIG_UNSPECIFIED', NO_CONTENT = 'NO_CONTENT', CONTENT_REQUIRED = 'CONTENT_REQUIRED', PUBLIC_WEBSITE = 'PUBLIC_WEBSITE' }

	export enum GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical { INDUSTRY_VERTICAL_UNSPECIFIED = 'INDUSTRY_VERTICAL_UNSPECIFIED', GENERIC = 'GENERIC', MEDIA = 'MEDIA' }


	/** Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the DataStoreService.DeleteDataStore operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDeleteDataStoreMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteEngineMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the EngineService.DeleteEngine operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteEngineMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDeleteEngineMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDeleteEngineMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDeleteSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.DeleteTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDeleteTargetSiteMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.DisableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method. */
	export interface GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponse {
	}

	/** Response message for SiteSearchEngineService.DisableAdvancedSiteSearch method. */
	export interface GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDisableAdvancedSiteSearchResponseFormProperties>({
		});

	}


	/** A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config. */
	export interface GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfig {

		/** Output only. The full resource name of the Document Processing Config. Format: `projects/locations/collections/dataStores/documentProcessingConfig`. */
		name?: string | null;

		/** The OCR options for parsing documents. */
		ocrConfig?: GoogleCloudDiscoveryengineV1alphaOcrConfig;
	}

	/** A singleton resource of DataStore. It's empty when DataStore is created, which defaults to digital parser. The first call to DataStoreService.UpdateDocumentProcessingConfig method will initialize the config. */
	export interface GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigFormProperties {

		/** Output only. The full resource name of the Document Processing Config. Format: `projects/locations/collections/dataStores/documentProcessingConfig`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaDocumentProcessingConfigFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The OCR options for parsing documents. */
	export interface GoogleCloudDiscoveryengineV1alphaOcrConfig {

		/** Required. If OCR is enabled or not. OCR must be enabled for other OcrConfig options to apply. We will only perform OCR on the first 80 pages of the PDF files. */
		enabled?: boolean | null;

		/** Apply additional enhanced OCR processing to a list of document elements. Supported values: * `table`: advanced table parsing model. */
		enhancedDocumentElements?: Array<string>;

		/** If true, will use native text instead of OCR text on pages containing native text. */
		useNativeText?: boolean | null;
	}

	/** The OCR options for parsing documents. */
	export interface GoogleCloudDiscoveryengineV1alphaOcrConfigFormProperties {

		/** Required. If OCR is enabled or not. OCR must be enabled for other OcrConfig options to apply. We will only perform OCR on the first 80 pages of the PDF files. */
		enabled: FormControl<boolean | null | undefined>,

		/** If true, will use native text instead of OCR text on pages containing native text. */
		useNativeText: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaOcrConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaOcrConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			useNativeText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.EnableAdvancedSiteSearch operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method. */
	export interface GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponse {
	}

	/** Response message for SiteSearchEngineService.EnableAdvancedSiteSearch method. */
	export interface GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEnableAdvancedSiteSearchResponseFormProperties>({
		});

	}


	/** Metadata that describes the training and serving parameters of an Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngine {

		/** Configurations for a Chat Engine. */
		chatEngineConfig?: GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig;

		/** Additional information of a Chat Engine. Fields in this message are output only. */
		chatEngineMetadata?: GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata;

		/** Common configurations for an Engine. */
		commonConfig?: GoogleCloudDiscoveryengineV1alphaEngineCommonConfig;

		/** Output only. Timestamp the Recommendation Engine was created at. */
		createTime?: string | null;

		/** The data stores associated with this engine. For SOLUTION_TYPE_SEARCH and SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store. If solution_type is SOLUTION_TYPE_CHAT, multiple DataStores in the same Collection can be associated here. Note that when used in CreateEngineRequest, one DataStore id must be provided as the system will use it for necessary intializations. */
		dataStoreIds?: Array<string>;

		/** Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. */
		displayName?: string | null;

		/** The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine. */
		industryVertical?: GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null;

		/** Additional config specs for a Media Recommendation engine. */
		mediaRecommendationEngineConfig?: GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig;

		/** Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number}/locations/{location}/collections/{collection}/engines/{engine}` engine should be 1-63 characters, and valid characters are /a-z0-9. Otherwise, an INVALID_ARGUMENT error is returned. */
		name?: string | null;

		/** Additional information of a recommendation engine. */
		recommendationMetadata?: GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata;

		/** Configurations for a Search Engine. */
		searchEngineConfig?: GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig;

		/** Additional config specs for a `similar-items` engine. */
		similarDocumentsConfig?: GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig;

		/** Required. The solutions of the engine. */
		solutionType?: GoogleCloudDiscoveryengineV1alphaEngineSolutionType | null;

		/** Output only. Timestamp the Recommendation Engine was last updated. */
		updateTime?: string | null;
	}

	/** Metadata that describes the training and serving parameters of an Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineFormProperties {

		/** Output only. Timestamp the Recommendation Engine was created at. */
		createTime: FormControl<string | null | undefined>,

		/** Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. */
		displayName: FormControl<string | null | undefined>,

		/** The industry vertical that the engine registers. The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to `GENERIC`. Vertical on Engine has to match vertical of the DataStore liniked to the engine. */
		industryVertical: FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null | undefined>,

		/** Immutable. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project_number}/locations/{location}/collections/{collection}/engines/{engine}` engine should be 1-63 characters, and valid characters are /a-z0-9. Otherwise, an INVALID_ARGUMENT error is returned. */
		name: FormControl<string | null | undefined>,

		/** Required. The solutions of the engine. */
		solutionType: FormControl<GoogleCloudDiscoveryengineV1alphaEngineSolutionType | null | undefined>,

		/** Output only. Timestamp the Recommendation Engine was last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			industryVertical: new FormControl<GoogleCloudDiscoveryengineV1alphaDataStoreIndustryVertical | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			solutionType: new FormControl<GoogleCloudDiscoveryengineV1alphaEngineSolutionType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configurations for a Chat Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfig {

		/** Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. */
		agentCreationConfig?: GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig;

		/** The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Please use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created. */
		dialogflowAgentToLink?: string | null;
	}

	/** Configurations for a Chat Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigFormProperties {

		/** The resource name of an exist Dialogflow agent to link to this Chat Engine. Customers can either provide `agent_creation_config` to create agent or provide an agent name that links the agent with the Chat engine. Format: `projects//locations//agents/`. Note that the `dialogflow_agent_to_link` are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. Please use ChatEngineMetadata.dialogflow_agent for actual agent association after Engine is created. */
		dialogflowAgentToLink: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigFormProperties>({
			dialogflowAgentToLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfig {

		/** Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. */
		business?: string | null;

		/** Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		defaultLanguageCode?: string | null;

		/** Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default. */
		location?: string | null;

		/** Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. */
		timeZone?: string | null;
	}

	/** Configurations for generating a Dialogflow agent. Note that these configurations are one-time consumed by and passed to Dialogflow service. It means they cannot be retrieved using EngineService.GetEngine or EngineService.ListEngines API after engine creation. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfigFormProperties {

		/** Name of the company, organization or other entity that the agent represents. Used for knowledge connector LLM prompt and for knowledge search. */
		business: FormControl<string | null | undefined>,

		/** Required. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. */
		defaultLanguageCode: FormControl<string | null | undefined>,

		/** Agent location for Agent creation, supported values: global/us/eu. If not provided, us Engine will create Agent using us-central-1 by default; eu Engine will create Agent using eu-west-1 by default. */
		location: FormControl<string | null | undefined>,

		/** Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. */
		timeZone: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineChatEngineConfigAgentCreationConfigFormProperties>({
			business: new FormControl<string | null | undefined>(undefined),
			defaultLanguageCode: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information of a Chat Engine. Fields in this message are output only. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadata {

		/** The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`. */
		dialogflowAgent?: string | null;
	}

	/** Additional information of a Chat Engine. Fields in this message are output only. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadataFormProperties {

		/** The resource name of a Dialogflow agent, that this Chat Engine refers to. Format: `projects//locations//agents/`. */
		dialogflowAgent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineChatEngineMetadataFormProperties>({
			dialogflowAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common configurations for an Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineCommonConfig {

		/** The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features. */
		companyName?: string | null;
	}

	/** Common configurations for an Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineCommonConfigFormProperties {

		/** The name of the company, business or entity that is associated with the engine. Setting this may help improve LLM related features. */
		companyName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineCommonConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineCommonConfigFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional config specs for a Media Recommendation engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfig {

		/** The optimization objective e.g. `cvr`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `ctr`, `cvr`. If not specified, we choose default based on engine type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` */
		optimizationObjective?: string | null;

		/** Custom threshold for `cvr` optimization_objective. */
		optimizationObjectiveConfig?: GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig;

		/** The training state that the engine is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for `CreateEngine` method is `TRAINING`. The default value for `UpdateEngine` method is to keep the state the same as before. */
		trainingState?: GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigTrainingState | null;

		/** Required. The type of engine e.g. `recommended-for-you`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `recommended-for-you`, `others-you-may-like`, `more-like-this`, `most-popular-items`. */
		type?: string | null;
	}

	/** Additional config specs for a Media Recommendation engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigFormProperties {

		/** The optimization objective e.g. `cvr`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `ctr`, `cvr`. If not specified, we choose default based on engine type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` */
		optimizationObjective: FormControl<string | null | undefined>,

		/** The training state that the engine is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for `CreateEngine` method is `TRAINING`. The default value for `UpdateEngine` method is to keep the state the same as before. */
		trainingState: FormControl<GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigTrainingState | null | undefined>,

		/** Required. The type of engine e.g. `recommended-for-you`. This field together with optimization_objective describe engine metadata to use to control engine training and serving. Currently supported values: `recommended-for-you`, `others-you-may-like`, `more-like-this`, `most-popular-items`. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigFormProperties>({
			optimizationObjective: new FormControl<string | null | undefined>(undefined),
			trainingState: new FormControl<GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigTrainingState | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Custom threshold for `cvr` optimization_objective. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {

		/** Required. The name of the field to target. Currently supported values: `watch-percentage`, `watch-time`. */
		targetField?: string | null;

		/**
		 * Required. The threshold to be applied to the target (e.g., 0.5).
		 * Type: float
		 */
		targetFieldValueFloat?: number | null;
	}

	/** Custom threshold for `cvr` optimization_objective. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigFormProperties {

		/** Required. The name of the field to target. Currently supported values: `watch-percentage`, `watch-time`. */
		targetField: FormControl<string | null | undefined>,

		/**
		 * Required. The threshold to be applied to the target (e.g., 0.5).
		 * Type: float
		 */
		targetFieldValueFloat: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigFormProperties>({
			targetField: new FormControl<string | null | undefined>(undefined),
			targetFieldValueFloat: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaEngineMediaRecommendationEngineConfigTrainingState { TRAINING_STATE_UNSPECIFIED = 'TRAINING_STATE_UNSPECIFIED', PAUSED = 'PAUSED', TRAINING = 'TRAINING' }


	/** Additional information of a recommendation engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadata {

		/** Output only. The state of data requirements for this engine: `DATA_OK` and `DATA_ERROR`. Engine cannot be trained if the data is in `DATA_ERROR` state. Engine can have `DATA_ERROR` state even if serving state is `ACTIVE`: engines were trained successfully before, but cannot be refreshed because the underlying engine no longer has sufficient data for training. */
		dataState?: GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataDataState | null;

		/** Output only. The timestamp when the latest successful tune finished. Only applicable on Media Recommendation engines. */
		lastTuneTime?: string | null;

		/** Output only. The serving state of the engine: `ACTIVE`, `NOT_ACTIVE`. */
		servingState?: GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataServingState | null;

		/** Output only. The latest tune operation id associated with the engine. Only applicable on Media Recommendation engines. If present, this operation id can be used to determine if there is an ongoing tune for this engine. To check the operation status, send the GetOperation request with this operation id in the engine resource format. If no tuning has happened for this engine, the string is empty. */
		tuningOperation?: string | null;
	}

	/** Additional information of a recommendation engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataFormProperties {

		/** Output only. The state of data requirements for this engine: `DATA_OK` and `DATA_ERROR`. Engine cannot be trained if the data is in `DATA_ERROR` state. Engine can have `DATA_ERROR` state even if serving state is `ACTIVE`: engines were trained successfully before, but cannot be refreshed because the underlying engine no longer has sufficient data for training. */
		dataState: FormControl<GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataDataState | null | undefined>,

		/** Output only. The timestamp when the latest successful tune finished. Only applicable on Media Recommendation engines. */
		lastTuneTime: FormControl<string | null | undefined>,

		/** Output only. The serving state of the engine: `ACTIVE`, `NOT_ACTIVE`. */
		servingState: FormControl<GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataServingState | null | undefined>,

		/** Output only. The latest tune operation id associated with the engine. Only applicable on Media Recommendation engines. If present, this operation id can be used to determine if there is an ongoing tune for this engine. To check the operation status, send the GetOperation request with this operation id in the engine resource format. If no tuning has happened for this engine, the string is empty. */
		tuningOperation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataFormProperties>({
			dataState: new FormControl<GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataDataState | null | undefined>(undefined),
			lastTuneTime: new FormControl<string | null | undefined>(undefined),
			servingState: new FormControl<GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataServingState | null | undefined>(undefined),
			tuningOperation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataDataState { DATA_STATE_UNSPECIFIED = 'DATA_STATE_UNSPECIFIED', DATA_OK = 'DATA_OK', DATA_ERROR = 'DATA_ERROR' }

	export enum GoogleCloudDiscoveryengineV1alphaEngineRecommendationMetadataServingState { SERVING_STATE_UNSPECIFIED = 'SERVING_STATE_UNSPECIFIED', INACTIVE = 'INACTIVE', ACTIVE = 'ACTIVE', TUNED = 'TUNED' }


	/** Configurations for a Search Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfig {

		/** The add-on that this search engine enables. */
		searchAddOns?: Array<string>;

		/** The search feature tier of this engine. Different tiers might have different pricing. To learn more, please check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. */
		searchTier?: GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigSearchTier | null;
	}

	/** Configurations for a Search Engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigFormProperties {

		/** The search feature tier of this engine. Different tiers might have different pricing. To learn more, please check the pricing documentation. Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. */
		searchTier: FormControl<GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigSearchTier | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigFormProperties>({
			searchTier: new FormControl<GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigSearchTier | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaEngineSearchEngineConfigSearchTier { SEARCH_TIER_UNSPECIFIED = 'SEARCH_TIER_UNSPECIFIED', SEARCH_TIER_STANDARD = 'SEARCH_TIER_STANDARD', SEARCH_TIER_ENTERPRISE = 'SEARCH_TIER_ENTERPRISE' }


	/** Additional config specs for a `similar-items` engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfig {
	}

	/** Additional config specs for a `similar-items` engine. */
	export interface GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfigFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEngineSimilarDocumentsEngineConfigFormProperties>({
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaEngineSolutionType { SOLUTION_TYPE_UNSPECIFIED = 'SOLUTION_TYPE_UNSPECIFIED', SOLUTION_TYPE_RECOMMENDATION = 'SOLUTION_TYPE_RECOMMENDATION', SOLUTION_TYPE_SEARCH = 'SOLUTION_TYPE_SEARCH', SOLUTION_TYPE_CHAT = 'SOLUTION_TYPE_CHAT' }


	/** Metadata related to the progress of the EstimateDataSize operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadata {

		/** Operation create time. */
		createTime?: string | null;
	}

	/** Metadata related to the progress of the EstimateDataSize operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEstimateDataSizeMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the EstimateDataSize request. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponse {

		/** Data size in terms of bytes. */
		dataSizeBytes?: string | null;

		/** Total number of documents. */
		documentCount?: string | null;
	}

	/** Response of the EstimateDataSize request. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponseFormProperties {

		/** Data size in terms of bytes. */
		dataSizeBytes: FormControl<string | null | undefined>,

		/** Total number of documents. */
		documentCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaEstimateDataSizeResponseFormProperties>({
			dataSizeBytes: new FormControl<string | null | undefined>(undefined),
			documentCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configurations for fields of a schema. For example, configuring a field is indexable, or searchable. */
	export interface GoogleCloudDiscoveryengineV1alphaFieldConfig {

		/** If completable_option is COMPLETABLE_ENABLED, field values are directly used and returned as suggestions for Autocomplete in CompletionService.CompleteQuery. If completable_option is unset, the server behavior defaults to COMPLETABLE_DISABLED for fields that support setting completable options, which are just `string` fields. For those fields that do not support setting completable options, the server will skip completable option setting, and setting completable_option for those fields will throw `INVALID_ARGUMENT` error. */
		completableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigCompletableOption | null;

		/** If dynamic_facetable_option is DYNAMIC_FACETABLE_ENABLED, field values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if FieldConfig.indexable_option is INDEXABLE_DISABLED. Otherwise, an `INVALID_ARGUMENT` error will be returned. If dynamic_facetable_option is unset, the server behavior defaults to DYNAMIC_FACETABLE_DISABLED for fields that support setting dynamic facetable options. For those fields that do not support setting dynamic facetable options, such as `object` and `boolean`, the server will skip dynamic facetable option setting, and setting dynamic_facetable_option for those fields will throw `INVALID_ARGUMENT` error. */
		dynamicFacetableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigDynamicFacetableOption | null;

		/** Required. Field path of the schema field. For example: `title`, `description`, `release_info.release_year`. */
		fieldPath?: string | null;

		/** Output only. Raw type of the field. */
		fieldType?: GoogleCloudDiscoveryengineV1alphaFieldConfigFieldType | null;

		/** If indexable_option is INDEXABLE_ENABLED, field values are indexed so that it can be filtered or faceted in SearchService.Search. If indexable_option is unset, the server behavior defaults to INDEXABLE_DISABLED for fields that support setting indexable options. For those fields that do not support setting indexable options, such as `object` and `boolean` and key properties, the server will skip indexable_option setting, and setting indexable_option for those fields will throw `INVALID_ARGUMENT` error. */
		indexableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigIndexableOption | null;

		/** Output only. Type of the key property that this field is mapped to. Empty string if this is not annotated as mapped to a key property. Example types are `title`, `description`. Full list is defined by `keyPropertyMapping` in the schema field annotation. If the schema field has a `KeyPropertyMapping` annotation, `indexable_option` and `searchable_option` of this field cannot be modified. */
		keyPropertyType?: string | null;

		/** If recs_filterable_option is FILTERABLE_ENABLED, field values are filterable by filter expression in RecommendationService.Recommend. If FILTERABLE_ENABLED but the field type is numerical, field values are not filterable by text queries in RecommendationService.Recommend. Only textual fields are supported. If recs_filterable_option is unset, the default setting is FILTERABLE_DISABLED for fields that support setting filterable options. When a field set to [FILTERABLE_DISABLED] is filtered, a warning is generated and an empty result is returned. */
		recsFilterableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigRecsFilterableOption | null;

		/** If retrievable_option is RETRIEVABLE_ENABLED, field values are included in the search results. If retrievable_option is unset, the server behavior defaults to RETRIEVABLE_DISABLED for fields that support setting retrievable options. For those fields that do not support setting retrievable options, such as `object` and `boolean`, the server will skip retrievable option setting, and setting retrievable_option for those fields will throw `INVALID_ARGUMENT` error. */
		retrievableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigRetrievableOption | null;

		/** If searchable_option is SEARCHABLE_ENABLED, field values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but field type is numerical, field values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical fields. If searchable_option is unset, the server behavior defaults to SEARCHABLE_DISABLED for fields that support setting searchable options. Only `string` fields that have no key property mapping support setting searchable_option. For those fields that do not support setting searchable options, the server will skip searchable option setting, and setting searchable_option for those fields will throw `INVALID_ARGUMENT` error. */
		searchableOption?: GoogleCloudDiscoveryengineV1alphaFieldConfigSearchableOption | null;
	}

	/** Configurations for fields of a schema. For example, configuring a field is indexable, or searchable. */
	export interface GoogleCloudDiscoveryengineV1alphaFieldConfigFormProperties {

		/** If completable_option is COMPLETABLE_ENABLED, field values are directly used and returned as suggestions for Autocomplete in CompletionService.CompleteQuery. If completable_option is unset, the server behavior defaults to COMPLETABLE_DISABLED for fields that support setting completable options, which are just `string` fields. For those fields that do not support setting completable options, the server will skip completable option setting, and setting completable_option for those fields will throw `INVALID_ARGUMENT` error. */
		completableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigCompletableOption | null | undefined>,

		/** If dynamic_facetable_option is DYNAMIC_FACETABLE_ENABLED, field values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if FieldConfig.indexable_option is INDEXABLE_DISABLED. Otherwise, an `INVALID_ARGUMENT` error will be returned. If dynamic_facetable_option is unset, the server behavior defaults to DYNAMIC_FACETABLE_DISABLED for fields that support setting dynamic facetable options. For those fields that do not support setting dynamic facetable options, such as `object` and `boolean`, the server will skip dynamic facetable option setting, and setting dynamic_facetable_option for those fields will throw `INVALID_ARGUMENT` error. */
		dynamicFacetableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigDynamicFacetableOption | null | undefined>,

		/** Required. Field path of the schema field. For example: `title`, `description`, `release_info.release_year`. */
		fieldPath: FormControl<string | null | undefined>,

		/** Output only. Raw type of the field. */
		fieldType: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigFieldType | null | undefined>,

		/** If indexable_option is INDEXABLE_ENABLED, field values are indexed so that it can be filtered or faceted in SearchService.Search. If indexable_option is unset, the server behavior defaults to INDEXABLE_DISABLED for fields that support setting indexable options. For those fields that do not support setting indexable options, such as `object` and `boolean` and key properties, the server will skip indexable_option setting, and setting indexable_option for those fields will throw `INVALID_ARGUMENT` error. */
		indexableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigIndexableOption | null | undefined>,

		/** Output only. Type of the key property that this field is mapped to. Empty string if this is not annotated as mapped to a key property. Example types are `title`, `description`. Full list is defined by `keyPropertyMapping` in the schema field annotation. If the schema field has a `KeyPropertyMapping` annotation, `indexable_option` and `searchable_option` of this field cannot be modified. */
		keyPropertyType: FormControl<string | null | undefined>,

		/** If recs_filterable_option is FILTERABLE_ENABLED, field values are filterable by filter expression in RecommendationService.Recommend. If FILTERABLE_ENABLED but the field type is numerical, field values are not filterable by text queries in RecommendationService.Recommend. Only textual fields are supported. If recs_filterable_option is unset, the default setting is FILTERABLE_DISABLED for fields that support setting filterable options. When a field set to [FILTERABLE_DISABLED] is filtered, a warning is generated and an empty result is returned. */
		recsFilterableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigRecsFilterableOption | null | undefined>,

		/** If retrievable_option is RETRIEVABLE_ENABLED, field values are included in the search results. If retrievable_option is unset, the server behavior defaults to RETRIEVABLE_DISABLED for fields that support setting retrievable options. For those fields that do not support setting retrievable options, such as `object` and `boolean`, the server will skip retrievable option setting, and setting retrievable_option for those fields will throw `INVALID_ARGUMENT` error. */
		retrievableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigRetrievableOption | null | undefined>,

		/** If searchable_option is SEARCHABLE_ENABLED, field values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but field type is numerical, field values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical fields. If searchable_option is unset, the server behavior defaults to SEARCHABLE_DISABLED for fields that support setting searchable options. Only `string` fields that have no key property mapping support setting searchable_option. For those fields that do not support setting searchable options, the server will skip searchable option setting, and setting searchable_option for those fields will throw `INVALID_ARGUMENT` error. */
		searchableOption: FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigSearchableOption | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaFieldConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaFieldConfigFormProperties>({
			completableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigCompletableOption | null | undefined>(undefined),
			dynamicFacetableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigDynamicFacetableOption | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			fieldType: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigFieldType | null | undefined>(undefined),
			indexableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigIndexableOption | null | undefined>(undefined),
			keyPropertyType: new FormControl<string | null | undefined>(undefined),
			recsFilterableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigRecsFilterableOption | null | undefined>(undefined),
			retrievableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigRetrievableOption | null | undefined>(undefined),
			searchableOption: new FormControl<GoogleCloudDiscoveryengineV1alphaFieldConfigSearchableOption | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigCompletableOption { COMPLETABLE_OPTION_UNSPECIFIED = 'COMPLETABLE_OPTION_UNSPECIFIED', COMPLETABLE_ENABLED = 'COMPLETABLE_ENABLED', COMPLETABLE_DISABLED = 'COMPLETABLE_DISABLED' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigDynamicFacetableOption { DYNAMIC_FACETABLE_OPTION_UNSPECIFIED = 'DYNAMIC_FACETABLE_OPTION_UNSPECIFIED', DYNAMIC_FACETABLE_ENABLED = 'DYNAMIC_FACETABLE_ENABLED', DYNAMIC_FACETABLE_DISABLED = 'DYNAMIC_FACETABLE_DISABLED' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigFieldType { FIELD_TYPE_UNSPECIFIED = 'FIELD_TYPE_UNSPECIFIED', OBJECT = 'OBJECT', STRING = 'STRING', NUMBER = 'NUMBER', INTEGER = 'INTEGER', BOOLEAN = 'BOOLEAN', GEOLOCATION = 'GEOLOCATION' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigIndexableOption { INDEXABLE_OPTION_UNSPECIFIED = 'INDEXABLE_OPTION_UNSPECIFIED', INDEXABLE_ENABLED = 'INDEXABLE_ENABLED', INDEXABLE_DISABLED = 'INDEXABLE_DISABLED' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigRecsFilterableOption { FILTERABLE_OPTION_UNSPECIFIED = 'FILTERABLE_OPTION_UNSPECIFIED', FILTERABLE_ENABLED = 'FILTERABLE_ENABLED', FILTERABLE_DISABLED = 'FILTERABLE_DISABLED' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigRetrievableOption { RETRIEVABLE_OPTION_UNSPECIFIED = 'RETRIEVABLE_OPTION_UNSPECIFIED', RETRIEVABLE_ENABLED = 'RETRIEVABLE_ENABLED', RETRIEVABLE_DISABLED = 'RETRIEVABLE_DISABLED' }

	export enum GoogleCloudDiscoveryengineV1alphaFieldConfigSearchableOption { SEARCHABLE_OPTION_UNSPECIFIED = 'SEARCHABLE_OPTION_UNSPECIFIED', SEARCHABLE_ENABLED = 'SEARCHABLE_ENABLED', SEARCHABLE_DISABLED = 'SEARCHABLE_DISABLED' }


	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaImportDocumentsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportDocumentsResponseFormProperties>({
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1alphaImportErrorConfig {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1alphaImportErrorConfigFormProperties {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportErrorConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportErrorConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount?: string | null;

		/** Count of deny list entries successfully imported. */
		importedEntriesCount?: string | null;
	}

	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesResponseFormProperties {

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount: FormControl<string | null | undefined>,

		/** Count of deny list entries successfully imported. */
		importedEntriesCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesResponseFormProperties>({
			failedEntriesCount: new FormControl<string | null | undefined>(undefined),
			importedEntriesCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportUserEventsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaImportUserEventsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount?: string | null;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1alphaImportUserEventsResponseFormProperties {

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaImportUserEventsResponseFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponse {

		/** The total count of documents purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponseFormProperties {

		/** The total count of documents purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeDocumentsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Number of suggestion deny list entries purged. */
		purgeCount?: string | null;
	}

	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesResponseFormProperties {

		/** Number of suggestion deny list entries purged. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeSuggestionDenyListEntriesResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeUserEvents operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeUserEventsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse {

		/** The total count of events purged as a result of the operation. */
		purgeCount?: string | null;
	}

	/** Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponseFormProperties {

		/** The total count of events purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.RecrawlUris operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Unique URIs in the request that don't match any TargetSite in the DataStore, only match TargetSites that haven't been fully indexed, or match a TargetSite with type EXCLUDE. */
		invalidUris?: Array<string>;

		/**
		 * Total number of URIs that have yet to be crawled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingCount?: number | null;

		/**
		 * Total number of URIs that were rejected due to insufficient indexing resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quotaExceededCount?: number | null;

		/**
		 * Total number of URIs that have been crawled so far.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successCount?: number | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;

		/**
		 * Total number of unique URIs in the request that are not in invalid_uris.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validUrisCount?: number | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.RecrawlUris operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Total number of URIs that have yet to be crawled.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pendingCount: FormControl<number | null | undefined>,

		/**
		 * Total number of URIs that were rejected due to insufficient indexing resources.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quotaExceededCount: FormControl<number | null | undefined>,

		/**
		 * Total number of URIs that have been crawled so far.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		successCount: FormControl<number | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Total number of unique URIs in the request that are not in invalid_uris.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		validUrisCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaRecrawlUrisMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			pendingCount: new FormControl<number | null | undefined>(undefined),
			quotaExceededCount: new FormControl<number | null | undefined>(undefined),
			successCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			validUrisCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for SiteSearchEngineService.RecrawlUris method. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponse {

		/** URIs that were not crawled before the LRO terminated. */
		failedUris?: Array<string>;

		/** Details for a sample of up to 10 `failed_uris`. */
		failureSamples?: Array<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo>;
	}

	/** Response message for SiteSearchEngineService.RecrawlUris method. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFormProperties>({
		});

	}


	/** Details about why a particular URI failed to be crawled. Each FailureInfo contains one FailureReason per CorpusType. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfo {

		/** List of failure reasons by corpus type (e.g. desktop, mobile). */
		failureReasons?: Array<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason>;

		/** URI that failed to be crawled. */
		uri?: string | null;
	}

	/** Details about why a particular URI failed to be crawled. Each FailureInfo contains one FailureReason per CorpusType. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFormProperties {

		/** URI that failed to be crawled. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about why crawling failed for a particular CorpusType, e.g. DESKTOP and MOBILE crawling may fail for different reasons. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReason {

		/** DESKTOP, MOBILE, or CORPUS_TYPE_UNSPECIFIED. */
		corpusType?: GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonCorpusType | null;

		/** Reason why the URI was not crawled. */
		errorMessage?: string | null;
	}

	/** Details about why crawling failed for a particular CorpusType, e.g. DESKTOP and MOBILE crawling may fail for different reasons. */
	export interface GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonFormProperties {

		/** DESKTOP, MOBILE, or CORPUS_TYPE_UNSPECIFIED. */
		corpusType: FormControl<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonCorpusType | null | undefined>,

		/** Reason why the URI was not crawled. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonFormProperties>({
			corpusType: new FormControl<GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonCorpusType | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1alphaRecrawlUrisResponseFailureInfoFailureReasonCorpusType { CORPUS_TYPE_UNSPECIFIED = 'CORPUS_TYPE_UNSPECIFIED', DESKTOP = 'DESKTOP', MOBILE = 'MOBILE' }


	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1alphaSchema {

		/** Output only. Configurations for fields of the schema. */
		fieldConfigs?: Array<GoogleCloudDiscoveryengineV1alphaFieldConfig>;

		/** The JSON representation of the schema. */
		jsonSchema?: string | null;

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name?: string | null;

		/** The structured representation of the schema. */
		structSchema?: {[id: string]: any };
	}

	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1alphaSchemaFormProperties {

		/** The JSON representation of the schema. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name: FormControl<string | null | undefined>,

		/** The structured representation of the schema. */
		structSchema: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaSchemaFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaSchemaFormProperties>({
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			structSchema: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the TrainCustomModel operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the TrainCustomModel operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTrainCustomModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1alphaImportErrorConfig;

		/** A sample of errors encountered while processing the data. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn't improve performance. Won't deploy. * **in-progress**: Model training is in progress. * **ready**: The model is ready for serving. */
		modelStatus?: string | null;
	}

	/** Response of the TrainCustomModelRequest. This message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponseFormProperties {

		/** The trained model status. Possible values are: * **bad-data**: The training data quality is bad. * **no-improvement**: Tuning didn't improve performance. Won't deploy. * **in-progress**: Model training is in progress. * **ready**: The model is ready for serving. */
		modelStatus: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTrainCustomModelResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTrainCustomModelResponseFormProperties>({
			modelStatus: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata associated with a tune operation. */
	export interface GoogleCloudDiscoveryengineV1alphaTuneEngineMetadata {

		/** Required. The resource name of the engine that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}` */
		engine?: string | null;
	}

	/** Metadata associated with a tune operation. */
	export interface GoogleCloudDiscoveryengineV1alphaTuneEngineMetadataFormProperties {

		/** Required. The resource name of the engine that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/collections/{collection_id}/engines/{engine_id}` */
		engine: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTuneEngineMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTuneEngineMetadataFormProperties>({
			engine: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response associated with a tune operation. */
	export interface GoogleCloudDiscoveryengineV1alphaTuneEngineResponse {
	}

	/** Response associated with a tune operation. */
	export interface GoogleCloudDiscoveryengineV1alphaTuneEngineResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaTuneEngineResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaTuneEngineResponseFormProperties>({
		});

	}


	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaUpdateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the SiteSearchEngineService.UpdateTargetSite operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1alphaUpdateTargetSiteMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery source import data from. */
	export interface GoogleCloudDiscoveryengineV1betaBigQuerySource {

		/** The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. */
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
	export interface GoogleCloudDiscoveryengineV1betaBigQuerySourceFormProperties {

		/** The schema to use when parsing the data from the source. Supported values for user event imports: * `user_event` (default): One UserEvent per row. Supported values for document imports: * `document` (default): One Document format per row. Each document must have a valid Document.id and one of Document.json_data or Document.struct_data. * `custom`: One custom data per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. */
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
	export function CreateGoogleCloudDiscoveryengineV1betaBigQuerySourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaBigQuerySourceFormProperties>({
			dataSchema: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			gcsStagingDir: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response message for CompletionService.CompleteQuery method. */
	export interface GoogleCloudDiscoveryengineV1betaCompleteQueryResponse {

		/** Results of the matched query suggestions. The result list is ordered and the first result is a top suggestion. */
		querySuggestions?: Array<GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion>;

		/** True if the returned suggestions are all tail suggestions. For tail matching to be triggered, include_tail_suggestions in the request must be true and there must be no suggestions that match the full query. */
		tailMatchTriggered?: boolean | null;
	}

	/** Response message for CompletionService.CompleteQuery method. */
	export interface GoogleCloudDiscoveryengineV1betaCompleteQueryResponseFormProperties {

		/** True if the returned suggestions are all tail suggestions. For tail matching to be triggered, include_tail_suggestions in the request must be true and there must be no suggestions that match the full query. */
		tailMatchTriggered: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaCompleteQueryResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaCompleteQueryResponseFormProperties>({
			tailMatchTriggered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Suggestions as search queries. */
	export interface GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion {

		/** The unique document field paths that serve as the source of this suggestion if it was generated from completable fields. This field is only populated for the document-completable model. */
		completableFieldPaths?: Array<string>;

		/** The suggestion for the query. */
		suggestion?: string | null;
	}

	/** Suggestions as search queries. */
	export interface GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestionFormProperties {

		/** The suggestion for the query. */
		suggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestionFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestionFormProperties>({
			suggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed completion information including completion attribution token and clicked completion info. */
	export interface GoogleCloudDiscoveryengineV1betaCompletionInfo {

		/**
		 * End user selected CompleteQueryResponse.QuerySuggestion.suggestion position, starting from 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectedPosition?: number | null;

		/** End user selected CompleteQueryResponse.QuerySuggestion.suggestion. */
		selectedSuggestion?: string | null;
	}

	/** Detailed completion information including completion attribution token and clicked completion info. */
	export interface GoogleCloudDiscoveryengineV1betaCompletionInfoFormProperties {

		/**
		 * End user selected CompleteQueryResponse.QuerySuggestion.suggestion position, starting from 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		selectedPosition: FormControl<number | null | undefined>,

		/** End user selected CompleteQueryResponse.QuerySuggestion.suggestion. */
		selectedSuggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaCompletionInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaCompletionInfoFormProperties>({
			selectedPosition: new FormControl<number | null | undefined>(undefined),
			selectedSuggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** External conversation proto definition. */
	export interface GoogleCloudDiscoveryengineV1betaConversation {

		/** Output only. The time the conversation finished. */
		endTime?: string | null;

		/** Conversation messages. */
		messages?: Array<GoogleCloudDiscoveryengineV1betaConversationMessage>;

		/** Immutable. Fully qualified name `project/locations/global/collections/{collection}/dataStore/conversations/*` or `project/locations/global/collections/{collection}/engines/conversations/*`. */
		name?: string | null;

		/** Output only. The time the conversation started. */
		startTime?: string | null;

		/** The state of the Conversation. */
		state?: GoogleCloudDiscoveryengineV1betaConversationState | null;

		/** A unique identifier for tracking users. */
		userPseudoId?: string | null;
	}

	/** External conversation proto definition. */
	export interface GoogleCloudDiscoveryengineV1betaConversationFormProperties {

		/** Output only. The time the conversation finished. */
		endTime: FormControl<string | null | undefined>,

		/** Immutable. Fully qualified name `project/locations/global/collections/{collection}/dataStore/conversations/*` or `project/locations/global/collections/{collection}/engines/conversations/*`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time the conversation started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the Conversation. */
		state: FormControl<GoogleCloudDiscoveryengineV1betaConversationState | null | undefined>,

		/** A unique identifier for tracking users. */
		userPseudoId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaConversationFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaConversationFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDiscoveryengineV1betaConversationState | null | undefined>(undefined),
			userPseudoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a conversation message. */
	export interface GoogleCloudDiscoveryengineV1betaConversationMessage {

		/** Output only. Message creation timestamp. */
		createTime?: string | null;

		/** Defines a reply message to user. */
		reply?: GoogleCloudDiscoveryengineV1betaReply;

		/** Defines text input. */
		userInput?: GoogleCloudDiscoveryengineV1betaTextInput;
	}

	/** Defines a conversation message. */
	export interface GoogleCloudDiscoveryengineV1betaConversationMessageFormProperties {

		/** Output only. Message creation timestamp. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaConversationMessageFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaConversationMessageFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a reply message to user. */
	export interface GoogleCloudDiscoveryengineV1betaReply {

		/** References in the reply. */
		references?: Array<GoogleCloudDiscoveryengineV1betaReplyReference>;

		/** DEPRECATED: use `summary` instead. Text reply. */
		reply?: string | null;

		/** Summary of the top N search result specified by the summary spec. */
		summary?: GoogleCloudDiscoveryengineV1betaSearchResponseSummary;
	}

	/** Defines a reply message to user. */
	export interface GoogleCloudDiscoveryengineV1betaReplyFormProperties {

		/** DEPRECATED: use `summary` instead. Text reply. */
		reply: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaReplyFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaReplyFormProperties>({
			reply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines reference in reply. */
	export interface GoogleCloudDiscoveryengineV1betaReplyReference {

		/** Anchor text. */
		anchorText?: string | null;

		/**
		 * Anchor text end index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end?: number | null;

		/**
		 * Anchor text start index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start?: number | null;

		/** URI link reference. */
		uri?: string | null;
	}

	/** Defines reference in reply. */
	export interface GoogleCloudDiscoveryengineV1betaReplyReferenceFormProperties {

		/** Anchor text. */
		anchorText: FormControl<string | null | undefined>,

		/**
		 * Anchor text end index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		end: FormControl<number | null | undefined>,

		/**
		 * Anchor text start index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start: FormControl<number | null | undefined>,

		/** URI link reference. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaReplyReferenceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaReplyReferenceFormProperties>({
			anchorText: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the top N search result specified by the summary spec. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummary {

		/** Safety Attribute categories and their associated confidence scores. */
		safetyAttributes?: GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes;

		/** Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set. */
		summarySkippedReasons?: Array<string>;

		/** The summary content. */
		summaryText?: string | null;

		/** Summary with metadata information. */
		summaryWithMetadata?: GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata;
	}

	/** Summary of the top N search result specified by the summary spec. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryFormProperties {

		/** The summary content. */
		summaryText: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummaryFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryFormProperties>({
			summaryText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Safety Attribute categories and their associated confidence scores. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes {

		/** The display names of Safety Attribute categories associated with the generated content. Order matches the Scores. */
		categories?: Array<string>;

		/** The confidence scores of the each category, higher value means higher confidence. Order matches the Categories. */
		scores?: Array<number>;
	}

	/** Safety Attribute categories and their associated confidence scores. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributesFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributesFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributesFormProperties>({
		});

	}


	/** Summary with metadata information. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata {

		/** Citation metadata. */
		citationMetadata?: GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata;

		/** Document References. */
		references?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference>;

		/** Summary text with no citation information. */
		summary?: string | null;
	}

	/** Summary with metadata information. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadataFormProperties {

		/** Summary text with no citation information. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadataFormProperties>({
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Citation metadata. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata {

		/** Citations for segments. */
		citations?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation>;
	}

	/** Citation metadata. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadataFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadataFormProperties>({
		});

	}


	/** Citation info for a segment. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation {

		/** End of the attributed segment, exclusive. */
		endIndex?: string | null;

		/** Citation sources for the attributed segment. */
		sources?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource>;

		/** Index indicates the start of the segment, measured in bytes/unicode. */
		startIndex?: string | null;
	}

	/** Citation info for a segment. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationFormProperties {

		/** End of the attributed segment, exclusive. */
		endIndex: FormControl<string | null | undefined>,

		/** Index indicates the start of the segment, measured in bytes/unicode. */
		startIndex: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationFormProperties>({
			endIndex: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Citation source. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource {

		/** Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly. */
		referenceIndex?: string | null;
	}

	/** Citation source. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSourceFormProperties {

		/** Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly. */
		referenceIndex: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSourceFormProperties>({
			referenceIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Document reference. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference {

		/** Required. Document.name of the document. Full resource name of the referenced document, in the format `projects/locations/collections/dataStores/branches/documents/*`. */
		document?: string | null;

		/** Title of the document. */
		title?: string | null;

		/** Cloud Storage or HTTP uri for the document. */
		uri?: string | null;
	}

	/** Document reference. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReferenceFormProperties {

		/** Required. Document.name of the document. Full resource name of the referenced document, in the format `projects/locations/collections/dataStores/branches/documents/*`. */
		document: FormControl<string | null | undefined>,

		/** Title of the document. */
		title: FormControl<string | null | undefined>,

		/** Cloud Storage or HTTP uri for the document. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSummaryReferenceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReferenceFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines text input. */
	export interface GoogleCloudDiscoveryengineV1betaTextInput {

		/** Defines context of the conversation */
		context?: GoogleCloudDiscoveryengineV1betaConversationContext;

		/** Text input. */
		input?: string | null;
	}

	/** Defines text input. */
	export interface GoogleCloudDiscoveryengineV1betaTextInputFormProperties {

		/** Text input. */
		input: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaTextInputFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaTextInputFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines context of the conversation */
	export interface GoogleCloudDiscoveryengineV1betaConversationContext {

		/** The current active document the user opened. It contains the document resource reference. */
		activeDocument?: string | null;

		/** The current list of documents the user is seeing. It contains the document resource references. */
		contextDocuments?: Array<string>;
	}

	/** Defines context of the conversation */
	export interface GoogleCloudDiscoveryengineV1betaConversationContextFormProperties {

		/** The current active document the user opened. It contains the document resource reference. */
		activeDocument: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaConversationContextFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaConversationContextFormProperties>({
			activeDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1betaConversationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', IN_PROGRESS = 'IN_PROGRESS', COMPLETED = 'COMPLETED' }


	/** Request message for ConversationalSearchService.ConverseConversation method. */
	export interface GoogleCloudDiscoveryengineV1betaConverseConversationRequest {

		/** External conversation proto definition. */
		conversation?: GoogleCloudDiscoveryengineV1betaConversation;

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the summary response. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) */
		filter?: string | null;

		/** Defines text input. */
		query?: GoogleCloudDiscoveryengineV1betaTextInput;

		/** Whether to turn on safe search. */
		safeSearch?: boolean | null;

		/** The resource name of the Serving Config to use. Format: `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}/servingConfigs/{serving_config_id}` If this is not set, the default serving config will be used. */
		servingConfig?: string | null;

		/** A specification for configuring a summary returned in a search response. */
		summarySpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec;

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels?: {[id: string]: string };
	}

	/** Request message for ConversationalSearchService.ConverseConversation method. */
	export interface GoogleCloudDiscoveryengineV1betaConverseConversationRequestFormProperties {

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. This will be used to filter search results which may affect the summary response. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) */
		filter: FormControl<string | null | undefined>,

		/** Whether to turn on safe search. */
		safeSearch: FormControl<boolean | null | undefined>,

		/** The resource name of the Serving Config to use. Format: `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}/servingConfigs/{serving_config_id}` If this is not set, the default serving config will be used. */
		servingConfig: FormControl<string | null | undefined>,

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaConverseConversationRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaConverseConversationRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			safeSearch: new FormControl<boolean | null | undefined>(undefined),
			servingConfig: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A specification for configuring a summary returned in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec {

		/** Specifies whether to filter out adversarial queries. The default value is `false`. Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to `true`, we skip generating summaries for adversarial queries and return fallback messages instead. */
		ignoreAdversarialQuery?: boolean | null;

		/** Specifies whether to filter out queries that are not summary-seeking. The default value is `false`. Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, `why is the sky blue` and `Who is the best soccer player in the world?` are summary-seeking queries, but `SFO airport` and `world cup 2026` are not. They are most likely navigational queries. If this field is set to `true`, we skip generating summaries for non-summary seeking queries and return fallback messages instead. */
		ignoreNonSummarySeekingQuery?: boolean | null;

		/** Specifies whether to include citations in the summary. The default value is `false`. When this field is set to `true`, summaries include in-line citation numbers. Example summary including citations: BigQuery is Google Cloud's fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3]. The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results. */
		includeCitations?: boolean | null;

		/** Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. */
		languageCode?: string | null;

		/** Specification of the prompt to use with the model. */
		modelPromptSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpec;

		/** Specification of the model. */
		modelSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpec;

		/**
		 * The number of top results to generate the summary from. If the number of results returned is less than `summaryResultCount`, the summary is generated from all of the results. At most five results can be used to generate a summary.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryResultCount?: number | null;
	}

	/** A specification for configuring a summary returned in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecFormProperties {

		/** Specifies whether to filter out adversarial queries. The default value is `false`. Google employs search-query classification to detect adversarial queries. No summary is returned if the search query is classified as an adversarial query. For example, a user might ask a question regarding negative comments about the company or submit a query designed to generate unsafe, policy-violating output. If this field is set to `true`, we skip generating summaries for adversarial queries and return fallback messages instead. */
		ignoreAdversarialQuery: FormControl<boolean | null | undefined>,

		/** Specifies whether to filter out queries that are not summary-seeking. The default value is `false`. Google employs search-query classification to detect summary-seeking queries. No summary is returned if the search query is classified as a non-summary seeking query. For example, `why is the sky blue` and `Who is the best soccer player in the world?` are summary-seeking queries, but `SFO airport` and `world cup 2026` are not. They are most likely navigational queries. If this field is set to `true`, we skip generating summaries for non-summary seeking queries and return fallback messages instead. */
		ignoreNonSummarySeekingQuery: FormControl<boolean | null | undefined>,

		/** Specifies whether to include citations in the summary. The default value is `false`. When this field is set to `true`, summaries include in-line citation numbers. Example summary including citations: BigQuery is Google Cloud's fully managed and completely serverless enterprise data warehouse [1]. BigQuery supports all data types, works across clouds, and has built-in machine learning and business intelligence, all within a unified platform [2, 3]. The citation numbers refer to the returned search results and are 1-indexed. For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results. */
		includeCitations: FormControl<boolean | null | undefined>,

		/** Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. */
		languageCode: FormControl<string | null | undefined>,

		/**
		 * The number of top results to generate the summary from. If the number of results returned is less than `summaryResultCount`, the summary is generated from all of the results. At most five results can be used to generate a summary.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		summaryResultCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecFormProperties>({
			ignoreAdversarialQuery: new FormControl<boolean | null | undefined>(undefined),
			ignoreNonSummarySeekingQuery: new FormControl<boolean | null | undefined>(undefined),
			includeCitations: new FormControl<boolean | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			summaryResultCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specification of the prompt to use with the model. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpec {

		/** Text at the beginning of the prompt that instructs the assistant. Examples are available in the user guide. */
		preamble?: string | null;
	}

	/** Specification of the prompt to use with the model. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpecFormProperties {

		/** Text at the beginning of the prompt that instructs the assistant. Examples are available in the user guide. */
		preamble: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelPromptSpecFormProperties>({
			preamble: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification of the model. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpec {

		/** The model version used to generate the summary. Supported values are: * `stable`: string. Default value when no value is specified. Uses a generally available, fine-tuned version of the text-bison@001 model. * `preview`: string. (Public preview) Uses a fine-tuned version of the text-bison@002 model. This model works only for summaries in English. */
		version?: string | null;
	}

	/** Specification of the model. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpecFormProperties {

		/** The model version used to generate the summary. Supported values are: * `stable`: string. Default value when no value is specified. Uses a generally available, fine-tuned version of the text-bison@001 model. * `preview`: string. (Public preview) Uses a fine-tuned version of the text-bison@002 model. This model works only for summaries in English. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpecModelSpecFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ConversationalSearchService.ConverseConversation method. */
	export interface GoogleCloudDiscoveryengineV1betaConverseConversationResponse {

		/** External conversation proto definition. */
		conversation?: GoogleCloudDiscoveryengineV1betaConversation;

		/** Suggested related questions. */
		relatedQuestions?: Array<string>;

		/** Defines a reply message to user. */
		reply?: GoogleCloudDiscoveryengineV1betaReply;

		/** Search Results. */
		searchResults?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult>;
	}

	/** Response message for ConversationalSearchService.ConverseConversation method. */
	export interface GoogleCloudDiscoveryengineV1betaConverseConversationResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaConverseConversationResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaConverseConversationResponseFormProperties>({
		});

	}


	/** Represents the search results. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult {

		/** Document captures all raw metadata information of items to be recommended or searched. */
		document?: GoogleCloudDiscoveryengineV1betaDocument;

		/** Document.id of the searched Document. */
		id?: string | null;

		/** Google provided available scores. */
		modelScores?: {[id: string]: GoogleCloudDiscoveryengineV1betaDoubleList };
	}

	/** Represents the search results. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseSearchResultFormProperties {

		/** Document.id of the searched Document. */
		id: FormControl<string | null | undefined>,

		/** Google provided available scores. */
		modelScores: FormControl<{[id: string]: GoogleCloudDiscoveryengineV1betaDoubleList } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseSearchResultFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseSearchResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			modelScores: new FormControl<{[id: string]: GoogleCloudDiscoveryengineV1betaDoubleList } | null | undefined>(undefined),
		});

	}


	/** Document captures all raw metadata information of items to be recommended or searched. */
	export interface GoogleCloudDiscoveryengineV1betaDocument {

		/** Unstructured data linked to this document. */
		content?: GoogleCloudDiscoveryengineV1betaDocumentContent;

		/** Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document. */
		derivedStructData?: {[id: string]: any };

		/** Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. */
		id?: string | null;

		/** The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown. */
		jsonData?: string | null;

		/** Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name?: string | null;

		/** The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. */
		parentDocumentId?: string | null;

		/** The identifier of the schema located in the same data store. */
		schemaId?: string | null;

		/** The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown. */
		structData?: {[id: string]: any };
	}

	/** Document captures all raw metadata information of items to be recommended or searched. */
	export interface GoogleCloudDiscoveryengineV1betaDocumentFormProperties {

		/** Output only. This field is OUTPUT_ONLY. It contains derived data that are not in the original input document. */
		derivedStructData: FormControl<{[id: string]: any } | null | undefined>,

		/** Immutable. The identifier of the document. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. */
		id: FormControl<string | null | undefined>,

		/** The JSON string representation of the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown. */
		jsonData: FormControl<string | null | undefined>,

		/** Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name: FormControl<string | null | undefined>,

		/** The identifier of the parent document. Currently supports at most two level document hierarchy. Id should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. */
		parentDocumentId: FormControl<string | null | undefined>,

		/** The identifier of the schema located in the same data store. */
		schemaId: FormControl<string | null | undefined>,

		/** The structured JSON data for the document. It should conform to the registered Schema or an `INVALID_ARGUMENT` error is thrown. */
		structData: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaDocumentFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaDocumentFormProperties>({
			derivedStructData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jsonData: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentDocumentId: new FormControl<string | null | undefined>(undefined),
			schemaId: new FormControl<string | null | undefined>(undefined),
			structData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Unstructured data linked to this document. */
	export interface GoogleCloudDiscoveryengineV1betaDocumentContent {

		/** The MIME type of the content. Supported types: * `application/pdf` (PDF, only native PDFs are supported for now) * `text/html` (HTML) * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX) * `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX) * `text/plain` (TXT) See https://www.iana.org/assignments/media-types/media-types.xhtml. */
		mimeType?: string | null;

		/** The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB). Note: As with all `bytes` fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, `abc123!?$*&()'-=@~` should be represented as `YWJjMTIzIT8kKiYoKSctPUB+` in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		rawBytes?: string | null;

		/** The URI of the content. Only Cloud Storage URIs (e.g. `gs://bucket-name/path/to/file`) are supported. The maximum file size is 2.5 MB for text-based formats, 100 MB for other formats. */
		uri?: string | null;
	}

	/** Unstructured data linked to this document. */
	export interface GoogleCloudDiscoveryengineV1betaDocumentContentFormProperties {

		/** The MIME type of the content. Supported types: * `application/pdf` (PDF, only native PDFs are supported for now) * `text/html` (HTML) * `application/vnd.openxmlformats-officedocument.wordprocessingml.document` (DOCX) * `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX) * `text/plain` (TXT) See https://www.iana.org/assignments/media-types/media-types.xhtml. */
		mimeType: FormControl<string | null | undefined>,

		/** The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB). Note: As with all `bytes` fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, `abc123!?$*&()'-=@~` should be represented as `YWJjMTIzIT8kKiYoKSctPUB+` in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json. */
		rawBytes: FormControl<string | null | undefined>,

		/** The URI of the content. Only Cloud Storage URIs (e.g. `gs://bucket-name/path/to/file`) are supported. The maximum file size is 2.5 MB for text-based formats, 100 MB for other formats. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaDocumentContentFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaDocumentContentFormProperties>({
			mimeType: new FormControl<string | null | undefined>(undefined),
			rawBytes: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Double list. */
	export interface GoogleCloudDiscoveryengineV1betaDoubleList {

		/** Double values. */
		values?: Array<number>;
	}

	/** Double list. */
	export interface GoogleCloudDiscoveryengineV1betaDoubleListFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaDoubleListFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaDoubleListFormProperties>({
		});

	}


	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaCreateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for Create Schema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaCreateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaCreateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaCreateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent. */
	export interface GoogleCloudDiscoveryengineV1betaCustomAttribute {

		/** The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		numbers?: Array<number>;

		/** The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an `INVALID_ARGUMENT` error is returned. Exactly one of CustomAttribute.text or CustomAttribute.numbers should be set. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		text?: Array<string>;
	}

	/** A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent. */
	export interface GoogleCloudDiscoveryengineV1betaCustomAttributeFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaCustomAttributeFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaCustomAttributeFormProperties>({
		});

	}


	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaDeleteSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for DeleteSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaDeleteSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaDeleteSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaDeleteSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed document information associated with a user event. */
	export interface GoogleCloudDiscoveryengineV1betaDocumentInfo {

		/** The Document resource ID. */
		id?: string | null;

		/** The Document resource full name, of the form: `projects/{project_id}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/branches/{branch_id}/documents/{document_id}` */
		name?: string | null;

		/** The promotion IDs associated with this Document. Currently, this field is restricted to at most one ID. */
		promotionIds?: Array<string>;

		/**
		 * Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a `add-to-cart` event. Required for events of the following event types: * `add-to-cart` * `purchase`
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** The Document URI - only allowed for website data stores. */
		uri?: string | null;
	}

	/** Detailed document information associated with a user event. */
	export interface GoogleCloudDiscoveryengineV1betaDocumentInfoFormProperties {

		/** The Document resource ID. */
		id: FormControl<string | null | undefined>,

		/** The Document resource full name, of the form: `projects/{project_id}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/branches/{branch_id}/documents/{document_id}` */
		name: FormControl<string | null | undefined>,

		/**
		 * Quantity of the Document associated with the user event. Defaults to 1. For example, this field will be 2 if two quantities of the same Document are involved in a `add-to-cart` event. Required for events of the following event types: * `add-to-cart` * `purchase`
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** The Document URI - only allowed for website data stores. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaDocumentInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaDocumentInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Storage location for input content. */
	export interface GoogleCloudDiscoveryengineV1betaGcsSource {

		/** The schema to use when parsing the data from the source. Supported values for document imports: * `document` (default): One JSON Document per line. Each document must have a valid Document.id. * `content`: Unstructured data (e.g. PDF, HTML). Each file matched by `input_uris` becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * `custom`: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. * `csv`: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by Gen App Builder. Supported values for user even imports: * `user_event` (default): One JSON UserEvent per line. */
		dataSchema?: string | null;

		/** Required. Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files (or 100,000 files if `data_schema` is `content`). Each file can be up to 2 GB (or 100 MB if `data_schema` is `content`). */
		inputUris?: Array<string>;
	}

	/** Cloud Storage location for input content. */
	export interface GoogleCloudDiscoveryengineV1betaGcsSourceFormProperties {

		/** The schema to use when parsing the data from the source. Supported values for document imports: * `document` (default): One JSON Document per line. Each document must have a valid Document.id. * `content`: Unstructured data (e.g. PDF, HTML). Each file matched by `input_uris` becomes a document, with the ID set to the first 128 bits of SHA256(URI) encoded as a hex string. * `custom`: One custom data JSON per row in arbitrary format that conforms to the defined Schema of the data store. This can only be used by Gen App Builder. * `csv`: A CSV file with header conforming to the defined Schema of the data store. Each entry after the header is imported as a Document. This can only be used by Gen App Builder. Supported values for user even imports: * `user_event` (default): One JSON UserEvent per line. */
		dataSchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaGcsSourceFormProperties>({
			dataSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportDocuments operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Import methods. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsRequest {

		/** Whether to automatically generate IDs for the documents if absent. If set to `true`, Document.ids are automatically generated based on the hash of the payload, where IDs may not be consistent during multiple imports. In which case ReconciliationMode.FULL is highly recommended to avoid duplicate contents. If unset or set to `false`, Document.ids have to be specified using id_field, otherwise, documents without IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. */
		autoGenerateIds?: boolean | null;

		/** BigQuery source import data from. */
		bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

		/** Cloud Storage location for input content. */
		gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;

		/** The field in the Cloud Storage and BigQuery sources that indicates the unique IDs of the documents. For GcsSource it is the key of the JSON field. For instance, `my_id` for JSON `{"my_id": "some_uuid"}`. For BigQuerySource it is the column name of the BigQuery table where the unique ids are stored. The values of the JSON field or the BigQuery column are used as the Document.ids. The JSON field or the BigQuery column must be of string type, and the values must be set as valid strings conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with 1-63 characters. Otherwise, documents without valid IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom`. And only set this field when auto_generate_ids is unset or set as `false`. Otherwise, an INVALID_ARGUMENT error is thrown. If it is unset, a default value `_id` is used when importing from the allowed data sources. */
		idField?: string | null;

		/** The inline source for the input config for ImportDocuments method. */
		inlineSource?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource;

		/** The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL. */
		reconciliationMode?: GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationMode | null;
	}

	/** Request message for Import methods. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsRequestFormProperties {

		/** Whether to automatically generate IDs for the documents if absent. If set to `true`, Document.ids are automatically generated based on the hash of the payload, where IDs may not be consistent during multiple imports. In which case ReconciliationMode.FULL is highly recommended to avoid duplicate contents. If unset or set to `false`, Document.ids have to be specified using id_field, otherwise, documents without IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom` or `csv`. Otherwise, an INVALID_ARGUMENT error is thrown. */
		autoGenerateIds: FormControl<boolean | null | undefined>,

		/** The field in the Cloud Storage and BigQuery sources that indicates the unique IDs of the documents. For GcsSource it is the key of the JSON field. For instance, `my_id` for JSON `{"my_id": "some_uuid"}`. For BigQuerySource it is the column name of the BigQuery table where the unique ids are stored. The values of the JSON field or the BigQuery column are used as the Document.ids. The JSON field or the BigQuery column must be of string type, and the values must be set as valid strings conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with 1-63 characters. Otherwise, documents without valid IDs fail to be imported. Only set this field when using GcsSource or BigQuerySource, and when GcsSource.data_schema or BigQuerySource.data_schema is `custom`. And only set this field when auto_generate_ids is unset or set as `false`. Otherwise, an INVALID_ARGUMENT error is thrown. If it is unset, a default value `_id` is used when importing from the allowed data sources. */
		idField: FormControl<string | null | undefined>,

		/** The mode of reconciliation between existing documents and the documents to be imported. Defaults to ReconciliationMode.INCREMENTAL. */
		reconciliationMode: FormControl<GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationMode | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportDocumentsRequestFormProperties>({
			autoGenerateIds: new FormControl<boolean | null | undefined>(undefined),
			idField: new FormControl<string | null | undefined>(undefined),
			reconciliationMode: new FormControl<GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationMode | null | undefined>(undefined),
		});

	}


	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1betaImportErrorConfig {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix?: string | null;
	}

	/** Configuration of destination for Import related errors. */
	export interface GoogleCloudDiscoveryengineV1betaImportErrorConfigFormProperties {

		/** Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message. */
		gcsPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportErrorConfigFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportErrorConfigFormProperties>({
			gcsPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The inline source for the input config for ImportDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource {

		/** Required. A list of documents to update/create. Each document must have a valid Document.id. Recommended max of 100 items. */
		documents?: Array<GoogleCloudDiscoveryengineV1betaDocument>;
	}

	/** The inline source for the input config for ImportDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSourceFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSourceFormProperties>({
		});

	}

	export enum GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationMode { RECONCILIATION_MODE_UNSPECIFIED = 'RECONCILIATION_MODE_UNSPECIFIED', INCREMENTAL = 'INCREMENTAL', FULL = 'FULL' }


	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;
	}

	/** Response of the ImportDocumentsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1betaImportDocumentsResponseFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportDocumentsResponseFormProperties>({
		});

	}


	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the ImportSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequest {

		/** Cloud Storage location for input content. */
		gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;

		/** The inline source for SuggestionDenyListEntry. */
		inlineSource?: GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource;
	}

	/** Request message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestFormProperties>({
		});

	}


	/** The inline source for SuggestionDenyListEntry. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource {

		/** Required. A list of all denylist entries to import. Max of 1000 items. */
		entries?: Array<GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry>;
	}

	/** The inline source for SuggestionDenyListEntry. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSourceFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSourceFormProperties>({
		});

	}


	/** Suggestion deny list entry identifying the phrase to block from suggestions and the applied operation for the phrase. */
	export interface GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry {

		/** Required. Phrase to block from suggestions served. Can be maximum 125 characters. */
		blockPhrase?: string | null;

		/** Required. The match operator to apply for this phrase. Whether to block the exact phrase, or block any suggestions containing this phrase. */
		matchOperator?: GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryMatchOperator | null;
	}

	/** Suggestion deny list entry identifying the phrase to block from suggestions and the applied operation for the phrase. */
	export interface GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryFormProperties {

		/** Required. Phrase to block from suggestions served. Can be maximum 125 characters. */
		blockPhrase: FormControl<string | null | undefined>,

		/** Required. The match operator to apply for this phrase. Whether to block the exact phrase, or block any suggestions containing this phrase. */
		matchOperator: FormControl<GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryMatchOperator | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryFormProperties>({
			blockPhrase: new FormControl<string | null | undefined>(undefined),
			matchOperator: new FormControl<GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryMatchOperator | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntryMatchOperator { MATCH_OPERATOR_UNSPECIFIED = 'MATCH_OPERATOR_UNSPECIFIED', EXACT_MATCH = 'EXACT_MATCH', CONTAINS = 'CONTAINS' }


	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount?: string | null;

		/** Count of deny list entries successfully imported. */
		importedEntriesCount?: string | null;
	}

	/** Response message for CompletionService.ImportSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesResponseFormProperties {

		/** Count of deny list entries that failed to be imported. */
		failedEntriesCount: FormControl<string | null | undefined>,

		/** Count of deny list entries successfully imported. */
		importedEntriesCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesResponseFormProperties>({
			failedEntriesCount: new FormControl<string | null | undefined>(undefined),
			importedEntriesCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were processed successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were processed successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportUserEventsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportUserEventsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsRequest {

		/** BigQuery source import data from. */
		bigquerySource?: GoogleCloudDiscoveryengineV1betaBigQuerySource;

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

		/** Cloud Storage location for input content. */
		gcsSource?: GoogleCloudDiscoveryengineV1betaGcsSource;

		/** The inline source for the input config for ImportUserEvents method. */
		inlineSource?: GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource;
	}

	/** Request message for the ImportUserEvents request. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsRequestFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportUserEventsRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportUserEventsRequestFormProperties>({
		});

	}


	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource {

		/** Required. A list of user events to import. Recommended max of 10k items. */
		userEvents?: Array<GoogleCloudDiscoveryengineV1betaUserEvent>;
	}

	/** The inline source for the input config for ImportUserEvents method. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSourceFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSourceFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSourceFormProperties>({
		});

	}


	/** UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website. */
	export interface GoogleCloudDiscoveryengineV1betaUserEvent {

		/** Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an `INVALID_ARGUMENT` error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is `traffic_channel`, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways. */
		attributes?: {[id: string]: GoogleCloudDiscoveryengineV1betaCustomAttribute };

		/** Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of RecommendationService.Recommend. This field enables accurate attribution of recommendation model performance. The value must be one of: * RecommendResponse.attribution_token for events that are the result of RecommendationService.Recommend. * SearchResponse.attribution_token for events that are the result of SearchService.Search. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass RecommendResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the RecommendResponse.attribution_token to this field. */
		attributionToken?: string | null;

		/** Detailed completion information including completion attribution token and clicked completion info. */
		completionInfo?: GoogleCloudDiscoveryengineV1betaCompletionInfo;

		/** Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. */
		directUserRequest?: boolean | null;

		/** List of Documents associated with this user event. This field is optional except for the following event types: * `view-item` * `add-to-cart` * `purchase` * `media-play` * `media-complete` In a `search` event, this field represents the documents returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different UserEvent.documents is desired. */
		documents?: Array<GoogleCloudDiscoveryengineV1betaDocumentInfo>;

		/** Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened. */
		eventTime?: string | null;

		/** Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home > Men > Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc. */
		eventType?: string | null;

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchRequest may contain a filter expression in SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a RecommendRequest, this field may be populated directly from RecommendRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		filter?: string | null;

		/** Media-specific user event information. */
		mediaInfo?: GoogleCloudDiscoveryengineV1betaMediaInfo;

		/** Detailed page information. */
		pageInfo?: GoogleCloudDiscoveryengineV1betaPageInfo;

		/** Detailed panel information associated with a user event. */
		panel?: GoogleCloudDiscoveryengineV1betaPanelInfo;

		/** The promotion IDs if this is an event associated with promotions. Currently, this field is restricted to at most one ID. */
		promotionIds?: Array<string>;

		/** Detailed search information. */
		searchInfo?: GoogleCloudDiscoveryengineV1betaSearchInfo;

		/** A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix. */
		sessionId?: string | null;

		/** A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups on the customer end. */
		tagIds?: Array<string>;

		/** A transaction represents the entire purchase transaction. */
		transactionInfo?: GoogleCloudDiscoveryengineV1betaTransactionInfo;

		/** Information of an end user. */
		userInfo?: GoogleCloudDiscoveryengineV1betaUserInfo;

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field. */
		userPseudoId?: string | null;
	}

	/** UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website. */
	export interface GoogleCloudDiscoveryengineV1betaUserEventFormProperties {

		/** Extra user event features to include in the recommendation model. These attributes must NOT contain data that needs to be parsed or processed further, e.g. JSON or other encodings. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Discovery Engine API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an `INVALID_ARGUMENT` error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is `traffic_channel`, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways. */
		attributes: FormControl<{[id: string]: GoogleCloudDiscoveryengineV1betaCustomAttribute } | null | undefined>,

		/** Token to attribute an API response to user action(s) to trigger the event. Highly recommended for user events that are the result of RecommendationService.Recommend. This field enables accurate attribution of recommendation model performance. The value must be one of: * RecommendResponse.attribution_token for events that are the result of RecommendationService.Recommend. * SearchResponse.attribution_token for events that are the result of SearchService.Search. This token enables us to accurately attribute page view or conversion completion back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass RecommendResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the RecommendResponse.attribution_token to this field. */
		attributionToken: FormControl<string | null | undefined>,

		/** Should set to true if the request is made directly from the end user, in which case the UserEvent.user_info.user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent. */
		directUserRequest: FormControl<boolean | null | undefined>,

		/** Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened. */
		eventTime: FormControl<string | null | undefined>,

		/** Required. User event type. Allowed values are: Generic values: * `search`: Search for Documents. * `view-item`: Detailed page view of a Document. * `view-item-list`: View of a panel or ordered list of Documents. * `view-home-page`: View of the home page. * `view-category-page`: View of a category page, e.g. Home > Men > Jeans Retail-related values: * `add-to-cart`: Add an item(s) to cart, e.g. in Retail online shopping * `purchase`: Purchase an item(s) Media-related values: * `media-play`: Start/resume watching a video, playing a song, etc. * `media-complete`: Finished or stopped midway through a video, song, etc. */
		eventType: FormControl<string | null | undefined>,

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. One example is for `search` events, the associated SearchRequest may contain a filter expression in SearchRequest.filter conforming to https://google.aip.dev/160#filtering. Similarly, for `view-item-list` events that are generated from a RecommendRequest, this field may be populated directly from RecommendRequest.filter conforming to https://google.aip.dev/160#filtering. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		filter: FormControl<string | null | undefined>,

		/** A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the session_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add UserEvent.user_pseudo_id as prefix. */
		sessionId: FormControl<string | null | undefined>,

		/** Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Do not set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field. */
		userPseudoId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaUserEventFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaUserEventFormProperties>({
			attributes: new FormControl<{[id: string]: GoogleCloudDiscoveryengineV1betaCustomAttribute } | null | undefined>(undefined),
			attributionToken: new FormControl<string | null | undefined>(undefined),
			directUserRequest: new FormControl<boolean | null | undefined>(undefined),
			eventTime: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			userPseudoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Media-specific user event information. */
	export interface GoogleCloudDiscoveryengineV1betaMediaInfo {

		/** The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90. */
		mediaProgressDuration?: string | null;

		/**
		 * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between `[0, 1.0]` inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
		 * Type: float
		 */
		mediaProgressPercentage?: number | null;
	}

	/** Media-specific user event information. */
	export interface GoogleCloudDiscoveryengineV1betaMediaInfoFormProperties {

		/** The media progress time in seconds, if applicable. For example, if the end user has finished 90 seconds of a playback video, then MediaInfo.media_progress_duration.seconds should be set to 90. */
		mediaProgressDuration: FormControl<string | null | undefined>,

		/**
		 * Media progress should be computed using only the media_progress_duration relative to the media total length. This value must be between `[0, 1.0]` inclusive. If this is not a playback or the progress cannot be computed (e.g. ongoing livestream), this field should be unset.
		 * Type: float
		 */
		mediaProgressPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaMediaInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaMediaInfoFormProperties>({
			mediaProgressDuration: new FormControl<string | null | undefined>(undefined),
			mediaProgressPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed page information. */
	export interface GoogleCloudDiscoveryengineV1betaPageInfo {

		/** The most specific category associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: `"pageCategory" : "Sales > 2017 Black Friday Deals"`. Required for `view-category-page` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		pageCategory?: string | null;

		/** A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageview_id` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		pageviewId?: string | null;

		/** The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty. */
		referrerUri?: string | null;

		/** Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters. */
		uri?: string | null;
	}

	/** Detailed page information. */
	export interface GoogleCloudDiscoveryengineV1betaPageInfoFormProperties {

		/** The most specific category associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, please replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: `"pageCategory" : "Sales > 2017 Black Friday Deals"`. Required for `view-category-page` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		pageCategory: FormControl<string | null | undefined>,

		/** A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageview_id` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. */
		pageviewId: FormControl<string | null | undefined>,

		/** The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. However, some browser privacy restrictions may cause this field to be empty. */
		referrerUri: FormControl<string | null | undefined>,

		/** Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPageInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPageInfoFormProperties>({
			pageCategory: new FormControl<string | null | undefined>(undefined),
			pageviewId: new FormControl<string | null | undefined>(undefined),
			referrerUri: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed panel information associated with a user event. */
	export interface GoogleCloudDiscoveryengineV1betaPanelInfo {

		/** The display name of the panel. */
		displayName?: string | null;

		/** Required. The panel ID. */
		panelId?: string | null;

		/**
		 * The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		panelPosition?: number | null;

		/**
		 * The total number of panels, including this one, shown to the user. Must be set if panel_position is set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPanels?: number | null;
	}

	/** Detailed panel information associated with a user event. */
	export interface GoogleCloudDiscoveryengineV1betaPanelInfoFormProperties {

		/** The display name of the panel. */
		displayName: FormControl<string | null | undefined>,

		/** Required. The panel ID. */
		panelId: FormControl<string | null | undefined>,

		/**
		 * The ordered position of the panel, if shown to the user with other panels. If set, then total_panels must also be set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		panelPosition: FormControl<number | null | undefined>,

		/**
		 * The total number of panels, including this one, shown to the user. Must be set if panel_position is set.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalPanels: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPanelInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPanelInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			panelId: new FormControl<string | null | undefined>(undefined),
			panelPosition: new FormControl<number | null | undefined>(undefined),
			totalPanels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed search information. */
	export interface GoogleCloudDiscoveryengineV1betaSearchInfo {

		/**
		 * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an `INVALID_ARGUMENT` is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		orderBy?: string | null;

		/** The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. At least one of search_query or PageInfo.page_category is required for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		searchQuery?: string | null;
	}

	/** Detailed search information. */
	export interface GoogleCloudDiscoveryengineV1betaSearchInfoFormProperties {

		/**
		 * An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an `INVALID_ARGUMENT` is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The order in which products are returned, if applicable. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		orderBy: FormControl<string | null | undefined>,

		/** The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. At least one of search_query or PageInfo.page_category is required for `search` events. Other event types should not set this field. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		searchQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchInfoFormProperties>({
			offset: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			searchQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudDiscoveryengineV1betaTransactionInfo {

		/**
		 * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost
		 * Type: float
		 */
		cost?: number | null;

		/** Required. Currency code. Use three-character ISO-4217 code. */
		currency?: string | null;

		/**
		 * The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost
		 * Type: float
		 */
		discountValue?: number | null;

		/**
		 * All the taxes associated with the transaction.
		 * Type: float
		 */
		tax?: number | null;

		/** The transaction ID with a length limit of 128 characters. */
		transactionId?: string | null;

		/**
		 * Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.
		 * Type: float
		 */
		value?: number | null;
	}

	/** A transaction represents the entire purchase transaction. */
	export interface GoogleCloudDiscoveryengineV1betaTransactionInfoFormProperties {

		/**
		 * All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = value - tax - cost
		 * Type: float
		 */
		cost: FormControl<number | null | undefined>,

		/** Required. Currency code. Use three-character ISO-4217 code. */
		currency: FormControl<string | null | undefined>,

		/**
		 * The total discount(s) value applied to this transaction. This figure should be excluded from TransactionInfo.value For example, if a user paid TransactionInfo.value amount, then nominal (pre-discount) value of the transaction is the sum of TransactionInfo.value and TransactionInfo.discount_value This means that profit is calculated the same way, regardless of the discount value, and that TransactionInfo.discount_value can be larger than TransactionInfo.value: * Profit = value - tax - cost
		 * Type: float
		 */
		discountValue: FormControl<number | null | undefined>,

		/**
		 * All the taxes associated with the transaction.
		 * Type: float
		 */
		tax: FormControl<number | null | undefined>,

		/** The transaction ID with a length limit of 128 characters. */
		transactionId: FormControl<string | null | undefined>,

		/**
		 * Required. Total non-zero value associated with the transaction. This value may include shipping, tax, or other adjustments to the total value that you want to include.
		 * Type: float
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaTransactionInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaTransactionInfoFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			discountValue: new FormControl<number | null | undefined>(undefined),
			tax: new FormControl<number | null | undefined>(undefined),
			transactionId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information of an end user. */
	export interface GoogleCloudDiscoveryengineV1betaUserInfo {

		/** User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set. */
		userAgent?: string | null;

		/** Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		userId?: string | null;
	}

	/** Information of an end user. */
	export interface GoogleCloudDiscoveryengineV1betaUserInfoFormProperties {

		/** User agent as included in the HTTP header. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if UserEvent.direct_user_request is set. */
		userAgent: FormControl<string | null | undefined>,

		/** Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaUserInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaUserInfoFormProperties>({
			userAgent: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsResponse {

		/** Configuration of destination for Import related errors. */
		errorConfig?: GoogleCloudDiscoveryengineV1betaImportErrorConfig;

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount?: string | null;

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount?: string | null;
	}

	/** Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful. */
	export interface GoogleCloudDiscoveryengineV1betaImportUserEventsResponseFormProperties {

		/** Count of user events imported with complete existing Documents. */
		joinedEventsCount: FormControl<string | null | undefined>,

		/** Count of user events imported, but with Document information not found in the existing Branch. */
		unjoinedEventsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaImportUserEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaImportUserEventsResponseFormProperties>({
			joinedEventsCount: new FormControl<string | null | undefined>(undefined),
			unjoinedEventsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A floating point interval. */
	export interface GoogleCloudDiscoveryengineV1betaInterval {

		/**
		 * Exclusive upper bound.
		 * Type: double
		 */
		exclusiveMaximum?: number | null;

		/**
		 * Exclusive lower bound.
		 * Type: double
		 */
		exclusiveMinimum?: number | null;

		/**
		 * Inclusive upper bound.
		 * Type: double
		 */
		maximum?: number | null;

		/**
		 * Inclusive lower bound.
		 * Type: double
		 */
		minimum?: number | null;
	}

	/** A floating point interval. */
	export interface GoogleCloudDiscoveryengineV1betaIntervalFormProperties {

		/**
		 * Exclusive upper bound.
		 * Type: double
		 */
		exclusiveMaximum: FormControl<number | null | undefined>,

		/**
		 * Exclusive lower bound.
		 * Type: double
		 */
		exclusiveMinimum: FormControl<number | null | undefined>,

		/**
		 * Inclusive upper bound.
		 * Type: double
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * Inclusive lower bound.
		 * Type: double
		 */
		minimum: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaIntervalFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaIntervalFormProperties>({
			exclusiveMaximum: new FormControl<number | null | undefined>(undefined),
			exclusiveMinimum: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for ListConversations method. */
	export interface GoogleCloudDiscoveryengineV1betaListConversationsResponse {

		/** All the Conversations for a given data store. */
		conversations?: Array<GoogleCloudDiscoveryengineV1betaConversation>;

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken?: string | null;
	}

	/** Response for ListConversations method. */
	export interface GoogleCloudDiscoveryengineV1betaListConversationsResponseFormProperties {

		/** Pagination token, if not returned indicates the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaListConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaListConversationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for DocumentService.ListDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaListDocumentsResponse {

		/** The Documents. */
		documents?: Array<GoogleCloudDiscoveryengineV1betaDocument>;

		/** A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for DocumentService.ListDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaListDocumentsResponseFormProperties {

		/** A token that can be sent as ListDocumentsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaListDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaListDocumentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SchemaService.ListSchemas method. */
	export interface GoogleCloudDiscoveryengineV1betaListSchemasResponse {

		/** A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The Schemas. */
		schemas?: Array<GoogleCloudDiscoveryengineV1betaSchema>;
	}

	/** Response message for SchemaService.ListSchemas method. */
	export interface GoogleCloudDiscoveryengineV1betaListSchemasResponseFormProperties {

		/** A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaListSchemasResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaListSchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1betaSchema {

		/** The JSON representation of the schema. */
		jsonSchema?: string | null;

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name?: string | null;

		/** The structured representation of the schema. */
		structSchema?: {[id: string]: any };
	}

	/** Defines the structure and layout of a type of document data. */
	export interface GoogleCloudDiscoveryengineV1betaSchemaFormProperties {

		/** The JSON representation of the schema. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. */
		name: FormControl<string | null | undefined>,

		/** The structured representation of the schema. */
		structSchema: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSchemaFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSchemaFormProperties>({
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			structSchema: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Count of entries that encountered errors while processing. */
		failureCount?: string | null;

		/** Count of entries that were deleted successfully. */
		successCount?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeDocuments operation. This will be returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Count of entries that encountered errors while processing. */
		failureCount: FormControl<string | null | undefined>,

		/** Count of entries that were deleted successfully. */
		successCount: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeDocumentsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			failureCount: new FormControl<string | null | undefined>(undefined),
			successCount: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for DocumentService.PurgeDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest {

		/** Required. Filter matching documents to purge. Only currently supported value is `*` (all items). */
		filter?: string | null;

		/** Actually performs the purge. If `force` is set to false, return the expected purge count without deleting any documents. */
		force?: boolean | null;
	}

	/** Request message for DocumentService.PurgeDocuments method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequestFormProperties {

		/** Required. Filter matching documents to purge. Only currently supported value is `*` (all items). */
		filter: FormControl<string | null | undefined>,

		/** Actually performs the purge. If `force` is set to false, return the expected purge count without deleting any documents. */
		force: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeDocumentsRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsResponse {

		/** The total count of documents purged as a result of the operation. */
		purgeCount?: string | null;

		/** A sample of document names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random. */
		purgeSample?: Array<string>;
	}

	/** Response message for DocumentService.PurgeDocuments method. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeDocumentsResponseFormProperties {

		/** The total count of documents purged as a result of the operation. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeDocumentsResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeDocumentsResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequest {
	}

	/** Request message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequestFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequestFormProperties>({
		});

	}


	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse {

		/** A sample of errors encountered while processing the request. */
		errorSamples?: Array<GoogleRpcStatus>;

		/** Number of suggestion deny list entries purged. */
		purgeCount?: string | null;
	}

	/** Response message for CompletionService.PurgeSuggestionDenyListEntries method. */
	export interface GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponseFormProperties {

		/** Number of suggestion deny list entries purged. */
		purgeCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponseFormProperties>({
			purgeCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for Recommend method. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendRequest {

		/** Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))` * `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie")) * (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with `storageStatus` of `EXPIRED` or `DELETED` regardless of filter choices. */
		filter?: string | null;

		/**
		 * Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.RecommendationResult.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.RecommendationResult.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category. * `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax. */
		params?: {[id: string]: any };

		/** UserEvent captures all metadata information Discovery Engine API needs to know about how end users interact with customers' website. */
		userEvent?: GoogleCloudDiscoveryengineV1betaUserEvent;

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels?: {[id: string]: string };

		/** Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready. */
		validateOnly?: boolean | null;
	}

	/** Request message for Recommend method. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendRequestFormProperties {

		/** Filter for restricting recommendation results with a length limit of 5,000 characters. Currently, only filter expressions on the `filter_tags` attribute is supported. Examples: * `(filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))` * `(filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))` If `attributeFilteringSyntax` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (launguage: ANY("en", "es")) AND NOT (categories: ANY("Movie")) * (available: true) AND (launguage: ANY("en", "es")) OR (categories: ANY("Movie")) If your filter blocks all results, the API will return generic (unfiltered) popular Documents. If you only want results strictly matching the filters, set `strictFiltering` to True in RecommendRequest.params to receive empty results instead. Note that the API will never return Documents with `storageStatus` of `EXPIRED` or `DELETED` regardless of filter choices. */
		filter: FormControl<string | null | undefined>,

		/**
		 * Maximum number of results to return. Set this property to the number of recommendation results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Additional domain specific parameters for the recommendations. Allowed values: * `returnDocument`: Boolean. If set to true, the associated Document object will be returned in RecommendResponse.RecommendationResult.document. * `returnScore`: Boolean. If set to true, the recommendation 'score' corresponding to each returned Document will be set in RecommendResponse.RecommendationResult.metadata. The given 'score' indicates the probability of a Document conversion given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular Documents instead of empty if your filter blocks all recommendation results. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` This gives request-level control and adjusts recommendation results based on Document category. * `attributeFilteringSyntax`: Boolean. False by default. If set to true, the `filter` field is interpreted according to the new, attribute-based syntax. */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Requirements for labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Use validate only mode for this recommendation query. If set to true, a fake model will be used that returns arbitrary Document IDs. Note that the validate only mode should only be used for testing the API, or if the model is not ready. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaRecommendRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaRecommendRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response message for Recommend method. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendResponse {

		/** A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		attributionToken?: string | null;

		/** IDs of documents in the request that were missing from the default Branch associated with the requested ServingConfig. */
		missingIds?: Array<string>;

		/** A list of recommended Documents. The order represents the ranking (from the most relevant Document to the least). */
		results?: Array<GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult>;

		/** True if RecommendRequest.validate_only was set. */
		validateOnly?: boolean | null;
	}

	/** Response message for Recommend method. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendResponseFormProperties {

		/** A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance. */
		attributionToken: FormControl<string | null | undefined>,

		/** True if RecommendRequest.validate_only was set. */
		validateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaRecommendResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaRecommendResponseFormProperties>({
			attributionToken: new FormControl<string | null | undefined>(undefined),
			validateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** RecommendationResult represents a generic recommendation result with associated metadata. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResult {

		/** Document captures all raw metadata information of items to be recommended or searched. */
		document?: GoogleCloudDiscoveryengineV1betaDocument;

		/** Resource ID of the recommended Document. */
		id?: string | null;

		/** Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params. */
		metadata?: {[id: string]: any };
	}

	/** RecommendationResult represents a generic recommendation result with associated metadata. */
	export interface GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResultFormProperties {

		/** Resource ID of the recommended Document. */
		id: FormControl<string | null | undefined>,

		/** Additional Document metadata / annotations. Possible values: * `score`: Recommendation score in double value. Is set if `returnScore` is set to true in RecommendRequest.params. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResultFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaRecommendResponseRecommendationResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Request message for SearchService.Search method. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequest {

		/** Boost specification to boost certain documents. */
		boostSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec;

		/** The branch resource name, such as `projects/locations/global/collections/default_collection/dataStores/default_data_store/branches/0`. Use `default_branch` as the branch ID or leave this field empty, to search documents under the default branch. */
		branch?: string | null;

		/** The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. */
		canonicalFilter?: string | null;

		/** A specification for configuring the behavior of content search. */
		contentSearchSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpec;

		/** The specification that uses customized query embedding vector to do semantic document retrieval. */
		embeddingSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec;

		/** Facet specifications for faceted search. If empty, no facets are returned. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		facetSpecs?: Array<GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpec>;

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) */
		filter?: string | null;

		/** Specifies the image query input. */
		imageQuery?: GoogleCloudDiscoveryengineV1betaSearchRequestImageQuery;

		/**
		 * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Documents deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset?: number | null;

		/** The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. `order_by` expression is case-sensitive. For more information on ordering, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. */
		orderBy?: string | null;

		/**
		 * Maximum number of Documents to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 100. Values above 100 are coerced to 100. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		pageToken?: string | null;

		/** Additional search parameters. For public website search only, supported values are: * `user_country_code`: string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. Example: user_country_code: "au" For available codes see [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) * `search_type`: double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. Example: search_type: 1 */
		params?: {[id: string]: any };

		/** Raw search query. */
		query?: string | null;

		/** Specification to determine under which conditions query expansion should occur. */
		queryExpansionSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpec;

		/** The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression. The ranking expression is a single function or multiple functions that are joint by "+". * ranking_expression = function, { " + ", function }; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: `relevance_score`: pre-defined keywords, used for measure relevance between query and document. `embedding_field_path`: the document embedding field used with query embedding vector. `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`. */
		rankingExpression?: string | null;

		/** Whether to turn on safe search. This is only supported for website search. */
		safeSearch?: boolean | null;

		/** The specification for query spell correction. */
		spellCorrectionSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpec;

		/** Information of an end user. */
		userInfo?: GoogleCloudDiscoveryengineV1betaUserInfo;

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels?: {[id: string]: string };

		/** A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		userPseudoId?: string | null;
	}

	/** Request message for SearchService.Search method. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestFormProperties {

		/** The branch resource name, such as `projects/locations/global/collections/default_collection/dataStores/default_data_store/branches/0`. Use `default_branch` as the branch ID or leave this field empty, to search documents under the default branch. */
		branch: FormControl<string | null | undefined>,

		/** The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. In the case a query does not have a sufficient amount of results this filter will be used to determine whether or not to enable the query expansion flow. The original filter will still be used for the query expanded search. This field is strongly recommended to achieve high search quality. For more information about filter syntax, see SearchRequest.filter. */
		canonicalFilter: FormControl<string | null | undefined>,

		/** The filter syntax consists of an expression language for constructing a predicate from one or more fields of the documents being filtered. Filter expression is case-sensitive. If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema. For example a media customer might have a field 'name' in their schema. In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see [Filter](https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata) */
		filter: FormControl<string | null | undefined>,

		/**
		 * A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Documents deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** The order in which documents are returned. Documents can be ordered by a field in an Document object. Leave it unset if ordered by relevance. `order_by` expression is case-sensitive. For more information on ordering, see [Ordering](https://cloud.google.com/retail/docs/filter-and-order#order) If this field is unrecognizable, an `INVALID_ARGUMENT` is returned. */
		orderBy: FormControl<string | null | undefined>,

		/**
		 * Maximum number of Documents to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 100. Values above 100 are coerced to 100. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** A page token received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		pageToken: FormControl<string | null | undefined>,

		/** Additional search parameters. For public website search only, supported values are: * `user_country_code`: string. Default empty. If set to non-empty, results are restricted or boosted based on the location provided. Example: user_country_code: "au" For available codes see [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) * `search_type`: double. Default empty. Enables non-webpage searching depending on the value. The only valid non-default value is 1, which enables image searching. Example: search_type: 1 */
		params: FormControl<{[id: string]: any } | null | undefined>,

		/** Raw search query. */
		query: FormControl<string | null | undefined>,

		/** The ranking expression controls the customized ranking on retrieval documents. This overrides ServingConfig.ranking_expression. The ranking expression is a single function or multiple functions that are joint by "+". * ranking_expression = function, { " + ", function }; Supported functions: * double * relevance_score * double * dotProduct(embedding_field_path) Function variables: `relevance_score`: pre-defined keywords, used for measure relevance between query and document. `embedding_field_path`: the document embedding field used with query embedding vector. `dotProduct`: embedding function between embedding_field_path and query embedding vector. Example ranking expression: If document has an embedding field doc_embedding, the ranking expression could be `0.5 * relevance_score + 0.3 * dotProduct(doc_embedding)`. */
		rankingExpression: FormControl<string | null | undefined>,

		/** Whether to turn on safe search. This is only supported for website search. */
		safeSearch: FormControl<boolean | null | undefined>,

		/** The user labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and CompleteQueryRequest.user_pseudo_id The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		userPseudoId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			canonicalFilter: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			rankingExpression: new FormControl<string | null | undefined>(undefined),
			safeSearch: new FormControl<boolean | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userPseudoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Boost specification to boost certain documents. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpec {

		/** Condition boost specifications. If a document matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20. */
		conditionBoostSpecs?: Array<GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec>;
	}

	/** Boost specification to boost certain documents. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecFormProperties>({
		});

	}


	/** Boost applies to documents which match a condition. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpec {

		/**
		 * Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
		 * Type: float
		 */
		boost?: number | null;

		/** An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": * (id: ANY("doc_1", "doc_2")) AND (color: ANY("Red","Blue")) */
		condition?: string | null;
	}

	/** Boost applies to documents which match a condition. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecFormProperties {

		/**
		 * Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the document a big promotion. However, it does not necessarily mean that the boosted document will be the top result at all times, nor that other documents will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant documents. Setting to -1.0 gives the document a big demotion. However, results that are deeply relevant might still be shown. The document will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.
		 * Type: float
		 */
		boost: FormControl<number | null | undefined>,

		/** An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost documents with document ID "doc_1" or "doc_2", and color "Red" or "Blue": * (id: ANY("doc_1", "doc_2")) AND (color: ANY("Red","Blue")) */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestBoostSpecConditionBoostSpecFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A specification for configuring the behavior of content search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpec {

		/** A specification for configuring the extractive content in a search response. */
		extractiveContentSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpec;

		/** A specification for configuring snippets in a search response. */
		snippetSpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpec;

		/** A specification for configuring a summary returned in a search response. */
		summarySpec?: GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSummarySpec;
	}

	/** A specification for configuring the behavior of content search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecFormProperties>({
		});

	}


	/** A specification for configuring the extractive content in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpec {

		/**
		 * The maximum number of extractive answers returned in each search result. An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query. If the number of matching answers is less than the `max_extractive_answer_count`, return all of the answers. Otherwise, return the `max_extractive_answer_count`. At most five answers are returned for each SearchResult.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxExtractiveAnswerCount?: number | null;

		/**
		 * The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT. An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers. If the number of matching segments is less than `max_extractive_segment_count`, return all of the segments. Otherwise, return the `max_extractive_segment_count`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxExtractiveSegmentCount?: number | null;

		/**
		 * Return at most `num_next_segments` segments after each selected segments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numNextSegments?: number | null;

		/**
		 * Specifies whether to also include the adjacent from each selected segments. Return at most `num_previous_segments` segments before each selected segments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numPreviousSegments?: number | null;
	}

	/** A specification for configuring the extractive content in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpecFormProperties {

		/**
		 * The maximum number of extractive answers returned in each search result. An extractive answer is a verbatim answer extracted from the original document, which provides a precise and contextually relevant answer to the search query. If the number of matching answers is less than the `max_extractive_answer_count`, return all of the answers. Otherwise, return the `max_extractive_answer_count`. At most five answers are returned for each SearchResult.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxExtractiveAnswerCount: FormControl<number | null | undefined>,

		/**
		 * The max number of extractive segments returned in each search result. Only applied if the DataStore is set to DataStore.ContentConfig.CONTENT_REQUIRED or DataStore.solution_types is SOLUTION_TYPE_CHAT. An extractive segment is a text segment extracted from the original document that is relevant to the search query, and, in general, more verbose than an extractive answer. The segment could then be used as input for LLMs to generate summaries and answers. If the number of matching segments is less than `max_extractive_segment_count`, return all of the segments. Otherwise, return the `max_extractive_segment_count`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxExtractiveSegmentCount: FormControl<number | null | undefined>,

		/**
		 * Return at most `num_next_segments` segments after each selected segments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numNextSegments: FormControl<number | null | undefined>,

		/**
		 * Specifies whether to also include the adjacent from each selected segments. Return at most `num_previous_segments` segments before each selected segments.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numPreviousSegments: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecExtractiveContentSpecFormProperties>({
			maxExtractiveAnswerCount: new FormControl<number | null | undefined>(undefined),
			maxExtractiveSegmentCount: new FormControl<number | null | undefined>(undefined),
			numNextSegments: new FormControl<number | null | undefined>(undefined),
			numPreviousSegments: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A specification for configuring snippets in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpec {

		/**
		 * [DEPRECATED] This field is deprecated. To control snippet return, use `return_snippet` field. For backwards compatibility, we will return snippet if max_snippet_count > 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSnippetCount?: number | null;

		/** [DEPRECATED] This field is deprecated and will have no affect on the snippet. */
		referenceOnly?: boolean | null;

		/** If `true`, then return snippet. If no snippet can be generated, we return "No snippet is available for this page." A `snippet_status` with `SUCCESS` or `NO_SNIPPET_AVAILABLE` will also be returned. */
		returnSnippet?: boolean | null;
	}

	/** A specification for configuring snippets in a search response. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpecFormProperties {

		/**
		 * [DEPRECATED] This field is deprecated. To control snippet return, use `return_snippet` field. For backwards compatibility, we will return snippet if max_snippet_count > 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxSnippetCount: FormControl<number | null | undefined>,

		/** [DEPRECATED] This field is deprecated and will have no affect on the snippet. */
		referenceOnly: FormControl<boolean | null | undefined>,

		/** If `true`, then return snippet. If no snippet can be generated, we return "No snippet is available for this page." A `snippet_status` with `SUCCESS` or `NO_SNIPPET_AVAILABLE` will also be returned. */
		returnSnippet: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestContentSearchSpecSnippetSpecFormProperties>({
			maxSnippetCount: new FormControl<number | null | undefined>(undefined),
			referenceOnly: new FormControl<boolean | null | undefined>(undefined),
			returnSnippet: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The specification that uses customized query embedding vector to do semantic document retrieval. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpec {

		/** The embedding vector used for retrieval. Limit to 1. */
		embeddingVectors?: Array<GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector>;
	}

	/** The specification that uses customized query embedding vector to do semantic document retrieval. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecFormProperties>({
		});

	}


	/** Embedding vector. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVector {

		/** Embedding field path in schema. */
		fieldPath?: string | null;

		/** Query embedding vector. */
		vector?: Array<number>;
	}

	/** Embedding vector. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVectorFormProperties {

		/** Embedding field path in schema. */
		fieldPath: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVectorFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestEmbeddingSpecEmbeddingVectorFormProperties>({
			fieldPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A facet specification to perform faceted search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpec {

		/** Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enabled, which generates a facet `gender`. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how API orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position is false. */
		enableDynamicPosition?: boolean | null;

		/** List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 documents with the color facet "Red" and 200 documents with the color facet "Blue". A query containing the filter "color:ANY("Red")" and having "color" as FacetKey.key would by default return only "Red" documents in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue documents available, "Blue" would not be shown as an available facet value. If "color" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "color" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" documents. A maximum of 100 values are allowed. Otherwise, an `INVALID_ARGUMENT` error is returned. */
		excludedFilterKeys?: Array<string>;

		/** Specifies how a facet is computed. */
		facetKey?: GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey;

		/**
		 * Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit?: number | null;
	}

	/** A facet specification to perform faceted search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFormProperties {

		/** Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined automatically. If dynamic facets are enabled, it is ordered together. If set to false, the position of this facet in the response is the same as in the request, and it is ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response is determined automatically. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enabled, which generates a facet `gender`. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how API orders "gender" and "rating" facets. However, notice that "price" and "brands" are always ranked at first and second position because their enable_dynamic_position is false. */
		enableDynamicPosition: FormControl<boolean | null | undefined>,

		/**
		 * Maximum of facet values that should be returned for this facet. If unspecified, defaults to 20. The maximum allowed value is 300. Values above 300 are coerced to 300. If this field is negative, an `INVALID_ARGUMENT` is returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFormProperties>({
			enableDynamicPosition: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies how a facet is computed. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKey {

		/** True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. */
		caseInsensitive?: boolean | null;

		/** Only get facet values that contains the given strings. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "contains" to "2022", the "category" facet only contains "Action > 2022" and "Sci-Fi > 2022". Only supported on textual fields. Maximum is 10. */
		contains?: Array<string>;

		/** Set only if values should be bucketed into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 30. */
		intervals?: Array<GoogleCloudDiscoveryengineV1betaInterval>;

		/** Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive. */
		key?: string | null;

		/** The order in which documents are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals. */
		orderBy?: string | null;

		/** Only get facet values that start with the given string prefix. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "prefixes" to "Action", the "category" facet only contains "Action > 2022" and "Action > 2021". Only supported on textual fields. Maximum is 10. */
		prefixes?: Array<string>;

		/** Only get facet for the given restricted values. Only supported on textual fields. For example, suppose "category" has three values "Action > 2022", "Action > 2021" and "Sci-Fi > 2022". If set "restricted_values" to "Action > 2022", the "category" facet only contains "Action > 2022". Only supported on textual fields. Maximum is 10. */
		restrictedValues?: Array<string>;
	}

	/** Specifies how a facet is computed. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKeyFormProperties {

		/** True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise. */
		caseInsensitive: FormControl<boolean | null | undefined>,

		/** Required. Supported textual and numerical facet keys in Document object, over which the facet values are computed. Facet key is case-sensitive. */
		key: FormControl<string | null | undefined>,

		/** The order in which documents are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals. */
		orderBy: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKeyFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestFacetSpecFacetKeyFormProperties>({
			caseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the image query input. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestImageQuery {

		/** Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP. */
		imageBytes?: string | null;
	}

	/** Specifies the image query input. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestImageQueryFormProperties {

		/** Base64 encoded image bytes. Supported image formats: JPEG, PNG, and BMP. */
		imageBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestImageQueryFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestImageQueryFormProperties>({
			imageBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specification to determine under which conditions query expansion should occur. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpec {

		/** The condition under which query expansion should occur. Default to Condition.DISABLED. */
		condition?: GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecCondition | null;

		/** Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results. */
		pinUnexpandedResults?: boolean | null;
	}

	/** Specification to determine under which conditions query expansion should occur. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecFormProperties {

		/** The condition under which query expansion should occur. Default to Condition.DISABLED. */
		condition: FormControl<GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecCondition | null | undefined>,

		/** Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results. */
		pinUnexpandedResults: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecFormProperties>({
			condition: new FormControl<GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecCondition | null | undefined>(undefined),
			pinUnexpandedResults: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1betaSearchRequestQueryExpansionSpecCondition { CONDITION_UNSPECIFIED = 'CONDITION_UNSPECIFIED', DISABLED = 'DISABLED', AUTO = 'AUTO' }


	/** The specification for query spell correction. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpec {

		/** The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO. */
		mode?: GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecMode | null;
	}

	/** The specification for query spell correction. */
	export interface GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecFormProperties {

		/** The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO. */
		mode: FormControl<GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecMode | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecFormProperties>({
			mode: new FormControl<GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecMode | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDiscoveryengineV1betaSearchRequestSpellCorrectionSpecMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', SUGGESTION_ONLY = 'SUGGESTION_ONLY', AUTO = 'AUTO' }


	/** Response message for SearchService.Search method. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponse {

		/** Controls applied as part of the Control service. */
		appliedControls?: Array<string>;

		/** A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. */
		attributionToken?: string | null;

		/** Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. */
		correctedQuery?: string | null;

		/** Results of facets requested by user. */
		facets?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseFacet>;
		geoSearchDebugInfo?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo>;

		/** Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results. */
		guidedSearchResult?: GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult;

		/** A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Information describing query expansion including whether expansion has occurred. */
		queryExpansionInfo?: GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo;

		/** The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. */
		redirectUri?: string | null;

		/** A list of matched documents. The order represents the ranking. */
		results?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult>;

		/** Summary of the top N search result specified by the summary spec. */
		summary?: GoogleCloudDiscoveryengineV1betaSearchResponseSummary;

		/**
		 * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize?: number | null;
	}

	/** Response message for SearchService.Search method. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseFormProperties {

		/** A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance. */
		attributionToken: FormControl<string | null | undefined>,

		/** Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search. */
		correctedQuery: FormControl<string | null | undefined>,

		/** A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response. */
		redirectUri: FormControl<string | null | undefined>,

		/**
		 * The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseFormProperties>({
			attributionToken: new FormControl<string | null | undefined>(undefined),
			correctedQuery: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A facet result. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseFacet {

		/** Whether the facet is dynamically generated. */
		dynamicFacet?: boolean | null;

		/** The key for this facet. E.g., "colors" or "price". It matches SearchRequest.FacetSpec.FacetKey.key. */
		key?: string | null;

		/** The facet values for this field. */
		values?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue>;
	}

	/** A facet result. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseFacetFormProperties {

		/** Whether the facet is dynamically generated. */
		dynamicFacet: FormControl<boolean | null | undefined>,

		/** The key for this facet. E.g., "colors" or "price". It matches SearchRequest.FacetSpec.FacetKey.key. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseFacetFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseFacetFormProperties>({
			dynamicFacet: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A facet value which contains value names and their count. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValue {

		/** Number of items that have this facet value. */
		count?: string | null;

		/** A floating point interval. */
		interval?: GoogleCloudDiscoveryengineV1betaInterval;

		/** Text value of a facet, such as "Black" for facet "colors". */
		value?: string | null;
	}

	/** A facet value which contains value names and their count. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValueFormProperties {

		/** Number of items that have this facet value. */
		count: FormControl<string | null | undefined>,

		/** Text value of a facet, such as "Black" for facet "colors". */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValueFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseFacetFacetValueFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Debug information specifically related to forward geocoding issues arising from Geolocation Search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfo {

		/** The error produced. */
		errorMessage?: string | null;

		/** The address from which forward geocoding ingestion produced issues. */
		originalAddressQuery?: string | null;
	}

	/** Debug information specifically related to forward geocoding issues arising from Geolocation Search. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfoFormProperties {

		/** The error produced. */
		errorMessage: FormControl<string | null | undefined>,

		/** The address from which forward geocoding ingestion produced issues. */
		originalAddressQuery: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseGeoSearchDebugInfoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			originalAddressQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResult {

		/** Suggested follow-up questions. */
		followUpQuestions?: Array<string>;

		/** A list of ranked refinement attributes. */
		refinementAttributes?: Array<GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttribute>;
	}

	/** Guided search result. The guided search helps user to refine the search results and narrow down to the real needs from a broaded search results. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultFormProperties {
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultFormProperties>({
		});

	}


	/** Useful attribute for search result refinements. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttribute {

		/** Attribute key used to refine the results e.g. 'movie_type'. */
		attributeKey?: string | null;

		/** Attribute value used to refine the results e.g. 'drama'. */
		attributeValue?: string | null;
	}

	/** Useful attribute for search result refinements. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttributeFormProperties {

		/** Attribute key used to refine the results e.g. 'movie_type'. */
		attributeKey: FormControl<string | null | undefined>,

		/** Attribute value used to refine the results e.g. 'drama'. */
		attributeValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttributeFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseGuidedSearchResultRefinementAttributeFormProperties>({
			attributeKey: new FormControl<string | null | undefined>(undefined),
			attributeValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information describing query expansion including whether expansion has occurred. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfo {

		/** Bool describing whether query expansion has occurred. */
		expandedQuery?: boolean | null;

		/** Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true. */
		pinnedResultCount?: string | null;
	}

	/** Information describing query expansion including whether expansion has occurred. */
	export interface GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfoFormProperties {

		/** Bool describing whether query expansion has occurred. */
		expandedQuery: FormControl<boolean | null | undefined>,

		/** Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true. */
		pinnedResultCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfoFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaSearchResponseQueryExpansionInfoFormProperties>({
			expandedQuery: new FormControl<boolean | null | undefined>(undefined),
			pinnedResultCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaUpdateSchemaMetadata {

		/** Operation create time. */
		createTime?: string | null;

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime?: string | null;
	}

	/** Metadata for UpdateSchema LRO. */
	export interface GoogleCloudDiscoveryengineV1betaUpdateSchemaMetadataFormProperties {

		/** Operation create time. */
		createTime: FormControl<string | null | undefined>,

		/** Operation last update time. If the operation is done, this is also the finish time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDiscoveryengineV1betaUpdateSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudDiscoveryengineV1betaUpdateSchemaMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
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
		 * Completes the specified user input with keyword suggestions.
		 * Get v1beta/{dataStore}:completeQuery
		 * @param {string} dataStore Required. The parent data store resource name for which the completion is performed, such as `projects/locations/global/collections/default_collection/dataStores/default_data_store`.
		 * @param {boolean} includeTailSuggestions Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
		 * @param {string} query Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
		 * @param {string} queryModel Selects data model of query suggestions for serving. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
		 * @param {string} userPseudoId A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
		 * @return {GoogleCloudDiscoveryengineV1betaCompleteQueryResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_completeQuery(dataStore: string, includeTailSuggestions: boolean | null | undefined, query: string | null | undefined, queryModel: string | null | undefined, userPseudoId: string | null | undefined): Observable<GoogleCloudDiscoveryengineV1betaCompleteQueryResponse> {
			return this.http.get<GoogleCloudDiscoveryengineV1betaCompleteQueryResponse>(this.baseUri + 'v1beta/' + (dataStore == null ? '' : encodeURIComponent(dataStore)) + ':completeQuery&includeTailSuggestions=' + includeTailSuggestions + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&queryModel=' + (queryModel == null ? '' : encodeURIComponent(queryModel)) + '&userPseudoId=' + (userPseudoId == null ? '' : encodeURIComponent(userPseudoId)), {});
		}

		/**
		 * Deletes a Schema.
		 * Delete v1beta/{name}
		 * @param {string} name Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_schemas_delete(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.delete<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1beta/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_operations_get(name: string): Observable<GoogleLongrunningOperation> {
			return this.http.get<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a Schema.
		 * Patch v1beta/{name}
		 * @param {string} name Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
		 * @param {boolean} allowMissing If set to true, and the Schema is not found, a new Schema will be created. In this situation, `update_mask` is ignored.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_schemas_patch(name: string, allowMissing: boolean | null | undefined, requestBody: GoogleCloudDiscoveryengineV1betaSchema): Observable<GoogleLongrunningOperation> {
			return this.http.patch<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1beta/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Discoveryengine_projects_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Converses a conversation.
		 * Post v1beta/{name}:converse
		 * @param {string} name Required. The resource name of the Conversation to get. Format: `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
		 * @return {GoogleCloudDiscoveryengineV1betaConverseConversationResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_conversations_converse(name: string, requestBody: GoogleCloudDiscoveryengineV1betaConverseConversationRequest): Observable<GoogleCloudDiscoveryengineV1betaConverseConversationResponse> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaConverseConversationResponse>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':converse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Conversations by their parent DataStore.
		 * Get v1beta/{parent}/conversations
		 * @param {string} parent Required. The data store resource name. Format: `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}`
		 * @param {string} filter A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
		 * @param {string} orderBy A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
		 * @param {number} pageSize Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
		 * @return {GoogleCloudDiscoveryengineV1betaListConversationsResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_conversations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDiscoveryengineV1betaListConversationsResponse> {
			return this.http.get<GoogleCloudDiscoveryengineV1betaListConversationsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
		 * Post v1beta/{parent}/conversations
		 * @param {string} parent Required. Full resource name of parent data store. Format: `projects/{project_number}/locations/{location_id}/collections/{collection}/dataStores/{data_store_id}`
		 * @return {GoogleCloudDiscoveryengineV1betaConversation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_conversations_create(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaConversation): Observable<GoogleCloudDiscoveryengineV1betaConversation> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaConversation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of Documents.
		 * Get v1beta/{parent}/documents
		 * @param {string} parent Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
		 * @param {number} pageSize Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
		 * @return {GoogleCloudDiscoveryengineV1betaListDocumentsResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_branches_documents_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDiscoveryengineV1betaListDocumentsResponse> {
			return this.http.get<GoogleCloudDiscoveryengineV1betaListDocumentsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Document.
		 * Post v1beta/{parent}/documents
		 * @param {string} parent Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
		 * @param {string} documentId Required. The ID to use for the Document, which will become the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
		 * @return {GoogleCloudDiscoveryengineV1betaDocument} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_branches_documents_create(parent: string, documentId: string | null | undefined, requestBody: GoogleCloudDiscoveryengineV1betaDocument): Observable<GoogleCloudDiscoveryengineV1betaDocument> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaDocument>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents&documentId=' + (documentId == null ? '' : encodeURIComponent(documentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items will be created. Note: It is possible for a subset of the Documents to be successfully updated.
		 * Post v1beta/{parent}/documents:import
		 * @param {string} parent Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_branches_documents_import(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaImportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
		 * Post v1beta/{parent}/documents:purge
		 * @param {string} parent Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_branches_documents_purge(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaPurgeDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/documents:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of Schemas.
		 * Get v1beta/{parent}/schemas
		 * @param {string} parent Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
		 * @param {number} pageSize The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
		 * @return {GoogleCloudDiscoveryengineV1betaListSchemasResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_schemas_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDiscoveryengineV1betaListSchemasResponse> {
			return this.http.get<GoogleCloudDiscoveryengineV1betaListSchemasResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Schema.
		 * Post v1beta/{parent}/schemas
		 * @param {string} parent Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
		 * @param {string} schemaId Required. The ID to use for the Schema, which will become the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_schemas_create(parent: string, schemaId: string | null | undefined, requestBody: GoogleCloudDiscoveryengineV1betaSchema): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/schemas&schemaId=' + (schemaId == null ? '' : encodeURIComponent(schemaId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports all SuggestionDenyListEntry for a DataStore.
		 * Post v1beta/{parent}/suggestionDenyListEntries:import
		 * @param {string} parent Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/locations/collections/dataStores/*.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_suggestionDenyListEntries_import(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/suggestionDenyListEntries:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Permanently deletes all SuggestionDenyListEntry for a DataStore.
		 * Post v1beta/{parent}/suggestionDenyListEntries:purge
		 * @param {string} parent Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/locations/collections/dataStores/*.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_suggestionDenyListEntries_purge(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/suggestionDenyListEntries:purge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
		 * Get v1beta/{parent}/userEvents:collect
		 * @param {string} parent Required. The parent DataStore resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
		 * @param {string} ets The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
		 * @param {string} uri The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
		 * @param {string} userEvent Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
		 * @return {GoogleApiHttpBody} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_userEvents_collect(parent: string, ets: string | null | undefined, uri: string | null | undefined, userEvent: string | null | undefined): Observable<GoogleApiHttpBody> {
			return this.http.get<GoogleApiHttpBody>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:collect&ets=' + (ets == null ? '' : encodeURIComponent(ets)) + '&uri=' + (uri == null ? '' : encodeURIComponent(uri)) + '&userEvent=' + (userEvent == null ? '' : encodeURIComponent(userEvent)), {});
		}

		/**
		 * Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
		 * Post v1beta/{parent}/userEvents:import
		 * @param {string} parent Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_userEvents_import(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaImportUserEventsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Writes a single user event.
		 * Post v1beta/{parent}/userEvents:write
		 * @param {string} parent Required. The parent DataStore resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
		 * @return {GoogleCloudDiscoveryengineV1betaUserEvent} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_userEvents_write(parent: string, requestBody: GoogleCloudDiscoveryengineV1betaUserEvent): Observable<GoogleCloudDiscoveryengineV1betaUserEvent> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaUserEvent>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/userEvents:write', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Makes a recommendation, which requires a contextual user event.
		 * Post v1beta/{servingConfig}:recommend
		 * @param {string} servingConfig Required. Full resource name of a ServingConfig: `projects/locations/global/collections/engines/servingConfigs/*`, or `projects/locations/global/collections/dataStores/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID will be used as the ID of the default serving config. For example, for Engine `projects/locations/global/collections/engines/my-engine`, you can use `projects/locations/global/collections/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
		 * @return {GoogleCloudDiscoveryengineV1betaRecommendResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_servingConfigs_recommend(servingConfig: string, requestBody: GoogleCloudDiscoveryengineV1betaRecommendRequest): Observable<GoogleCloudDiscoveryengineV1betaRecommendResponse> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaRecommendResponse>(this.baseUri + 'v1beta/' + (servingConfig == null ? '' : encodeURIComponent(servingConfig)) + ':recommend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a search.
		 * Post v1beta/{servingConfig}:search
		 * @param {string} servingConfig Required. The resource name of the Search serving config, such as `projects/locations/global/collections/default_collection/engines/servingConfigs/default_serving_config`, or `projects/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
		 * @return {GoogleCloudDiscoveryengineV1betaSearchResponse} Successful response
		 */
		Discoveryengine_projects_locations_dataStores_servingConfigs_search(servingConfig: string, requestBody: GoogleCloudDiscoveryengineV1betaSearchRequest): Observable<GoogleCloudDiscoveryengineV1betaSearchResponse> {
			return this.http.post<GoogleCloudDiscoveryengineV1betaSearchResponse>(this.baseUri + 'v1beta/' + (servingConfig == null ? '' : encodeURIComponent(servingConfig)) + ':search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

