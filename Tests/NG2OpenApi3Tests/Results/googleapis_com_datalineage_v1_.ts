import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request message for BatchSearchLinkProcesses. */
	export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest {

		/** Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`. */
		links?: Array<string>;

		/**
		 * The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
		pageToken?: string | null;
	}

	/** Request message for BatchSearchLinkProcesses. */
	export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequestFormProperties {

		/**
		 * The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for BatchSearchLinkProcesses. */
	export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse {

		/** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
		nextPageToken?: string | null;

		/** An array of processes associated with the specified links. */
		processLinks?: Array<GoogleCloudDatacatalogLineageV1ProcessLinks>;
	}

	/** Response message for BatchSearchLinkProcesses. */
	export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponseFormProperties {

		/** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links associated with a specific process. */
	export interface GoogleCloudDatacatalogLineageV1ProcessLinks {

		/** An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array. */
		links?: Array<GoogleCloudDatacatalogLineageV1ProcessLinkInfo>;

		/** The process name in the format of `projects/{project}/locations/{location}/processes/{process}`. */
		process?: string | null;
	}

	/** Links associated with a specific process. */
	export interface GoogleCloudDatacatalogLineageV1ProcessLinksFormProperties {

		/** The process name in the format of `projects/{project}/locations/{location}/processes/{process}`. */
		process: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ProcessLinksFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ProcessLinksFormProperties>({
			process: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Link details. */
	export interface GoogleCloudDatacatalogLineageV1ProcessLinkInfo {

		/** The end of the last event establishing this link-process tuple. */
		endTime?: string | null;

		/** The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`. */
		link?: string | null;

		/** The start of the first event establishing this link-process tuple. */
		startTime?: string | null;
	}

	/** Link details. */
	export interface GoogleCloudDatacatalogLineageV1ProcessLinkInfoFormProperties {

		/** The end of the last event establishing this link-process tuple. */
		endTime: FormControl<string | null | undefined>,

		/** The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`. */
		link: FormControl<string | null | undefined>,

		/** The start of the first event establishing this link-process tuple. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ProcessLinkInfoFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ProcessLinkInfoFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The soft reference to everything you can attach a lineage event to. */
	export interface GoogleCloudDatacatalogLineageV1EntityReference {

		/** Required. [Fully Qualified Name (FQN)](https://cloud.google.com/data-catalog/docs/fully-qualified-names) of the entity. */
		fullyQualifiedName?: string | null;
	}

	/** The soft reference to everything you can attach a lineage event to. */
	export interface GoogleCloudDatacatalogLineageV1EntityReferenceFormProperties {

		/** Required. [Fully Qualified Name (FQN)](https://cloud.google.com/data-catalog/docs/fully-qualified-names) of the entity. */
		fullyQualifiedName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1EntityReferenceFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1EntityReferenceFormProperties>({
			fullyQualifiedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lineage between source and target entities. */
	export interface GoogleCloudDatacatalogLineageV1EventLink {

		/** The soft reference to everything you can attach a lineage event to. */
		source?: GoogleCloudDatacatalogLineageV1EntityReference;

		/** The soft reference to everything you can attach a lineage event to. */
		target?: GoogleCloudDatacatalogLineageV1EntityReference;
	}

	/** A lineage between source and target entities. */
	export interface GoogleCloudDatacatalogLineageV1EventLinkFormProperties {
	}
	export function CreateGoogleCloudDatacatalogLineageV1EventLinkFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1EventLinkFormProperties>({
		});

	}


	/** A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field. */
	export interface GoogleCloudDatacatalogLineageV1LineageEvent {

		/** Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported. */
		endTime?: string | null;

		/** Optional. List of source-target pairs. Can't contain more than 100 tuples. */
		links?: Array<GoogleCloudDatacatalogLineageV1EventLink>;

		/** Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name?: string | null;

		/** Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported. */
		startTime?: string | null;
	}

	/** A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field. */
	export interface GoogleCloudDatacatalogLineageV1LineageEventFormProperties {

		/** Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported. */
		endTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name: FormControl<string | null | undefined>,

		/** Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1LineageEventFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1LineageEventFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets. */
	export interface GoogleCloudDatacatalogLineageV1Link {

		/** The end of the last event establishing this link. */
		endTime?: string | null;

		/** Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`. */
		name?: string | null;

		/** The soft reference to everything you can attach a lineage event to. */
		source?: GoogleCloudDatacatalogLineageV1EntityReference;

		/** The start of the first event establishing this link. */
		startTime?: string | null;

		/** The soft reference to everything you can attach a lineage event to. */
		target?: GoogleCloudDatacatalogLineageV1EntityReference;
	}

	/** Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets. */
	export interface GoogleCloudDatacatalogLineageV1LinkFormProperties {

		/** The end of the last event establishing this link. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`. */
		name: FormControl<string | null | undefined>,

		/** The start of the first event establishing this link. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1LinkFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1LinkFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListLineageEvents. */
	export interface GoogleCloudDatacatalogLineageV1ListLineageEventsResponse {

		/** Lineage events from the specified project and location. */
		lineageEvents?: Array<GoogleCloudDatacatalogLineageV1LineageEvent>;

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response message for ListLineageEvents. */
	export interface GoogleCloudDatacatalogLineageV1ListLineageEventsResponseFormProperties {

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ListLineageEventsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ListLineageEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListProcesses. */
	export interface GoogleCloudDatacatalogLineageV1ListProcessesResponse {

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The processes from the specified project and location. */
		processes?: Array<GoogleCloudDatacatalogLineageV1Process>;
	}

	/** Response message for ListProcesses. */
	export interface GoogleCloudDatacatalogLineageV1ListProcessesResponseFormProperties {

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ListProcessesResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ListProcessesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A process is the definition of a data transformation operation. */
	export interface GoogleCloudDatacatalogLineageV1Process {

		/** Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed. */
		attributes?: {[id: string]: any };

		/** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
		displayName?: string | null;

		/** Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name?: string | null;

		/** Origin of a process. */
		origin?: GoogleCloudDatacatalogLineageV1Origin;
	}

	/** A process is the definition of a data transformation operation. */
	export interface GoogleCloudDatacatalogLineageV1ProcessFormProperties {

		/** Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed. */
		attributes: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ProcessFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ProcessFormProperties>({
			attributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Origin of a process. */
	export interface GoogleCloudDatacatalogLineageV1Origin {

		/** If the source_type isn't CUSTOM, the value of this field should be a GCP resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}` */
		name?: string | null;

		/** Type of the source. Use of a source_type other than `CUSTOM` for process creation or updating is highly discouraged, and may be restricted in the future without notice. */
		sourceType?: GoogleCloudDatacatalogLineageV1OriginSourceType | null;
	}

	/** Origin of a process. */
	export interface GoogleCloudDatacatalogLineageV1OriginFormProperties {

		/** If the source_type isn't CUSTOM, the value of this field should be a GCP resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}` */
		name: FormControl<string | null | undefined>,

		/** Type of the source. Use of a source_type other than `CUSTOM` for process creation or updating is highly discouraged, and may be restricted in the future without notice. */
		sourceType: FormControl<GoogleCloudDatacatalogLineageV1OriginSourceType | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1OriginFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1OriginFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sourceType: new FormControl<GoogleCloudDatacatalogLineageV1OriginSourceType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogLineageV1OriginSourceType { SOURCE_TYPE_UNSPECIFIED = 'SOURCE_TYPE_UNSPECIFIED', CUSTOM = 'CUSTOM', BIGQUERY = 'BIGQUERY', DATA_FUSION = 'DATA_FUSION', COMPOSER = 'COMPOSER', LOOKER_STUDIO = 'LOOKER_STUDIO', DATAPROC = 'DATAPROC' }


	/** Response message for ListRuns. */
	export interface GoogleCloudDatacatalogLineageV1ListRunsResponse {

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The runs from the specified project and location. */
		runs?: Array<GoogleCloudDatacatalogLineageV1Run>;
	}

	/** Response message for ListRuns. */
	export interface GoogleCloudDatacatalogLineageV1ListRunsResponseFormProperties {

		/** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1ListRunsResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1ListRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lineage run represents an execution of a process that creates lineage events. */
	export interface GoogleCloudDatacatalogLineageV1Run {

		/** Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed. */
		attributes?: {[id: string]: any };

		/** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
		displayName?: string | null;

		/** Optional. The timestamp of the end of the run. */
		endTime?: string | null;

		/** Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name?: string | null;

		/** Required. The timestamp of the start of the run. */
		startTime?: string | null;

		/** Required. The state of the run. */
		state?: GoogleCloudDatacatalogLineageV1RunState | null;
	}

	/** A lineage run represents an execution of a process that creates lineage events. */
	export interface GoogleCloudDatacatalogLineageV1RunFormProperties {

		/** Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed. */
		attributes: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 1024 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
		displayName: FormControl<string | null | undefined>,

		/** Optional. The timestamp of the end of the run. */
		endTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
		name: FormControl<string | null | undefined>,

		/** Required. The timestamp of the start of the run. */
		startTime: FormControl<string | null | undefined>,

		/** Required. The state of the run. */
		state: FormControl<GoogleCloudDatacatalogLineageV1RunState | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1RunFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1RunFormProperties>({
			attributes: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatacatalogLineageV1RunState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogLineageV1RunState { UNKNOWN = 'UNKNOWN', STARTED = 'STARTED', COMPLETED = 'COMPLETED', FAILED = 'FAILED', ABORTED = 'ABORTED' }


	/** Metadata describing the operation. */
	export interface GoogleCloudDatacatalogLineageV1OperationMetadata {

		/** Output only. The timestamp of the operation submission to the server. */
		createTime?: string | null;

		/** Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing. */
		endTime?: string | null;

		/** Output only. The type of the operation being performed. */
		operationType?: GoogleCloudDatacatalogLineageV1OperationMetadataOperationType | null;

		/** Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on. */
		resource?: string | null;

		/** Output only. The UUID of the resource being operated on. */
		resourceUuid?: string | null;

		/** Output only. The current operation state. */
		state?: GoogleCloudDatacatalogLineageV1OperationMetadataState | null;
	}

	/** Metadata describing the operation. */
	export interface GoogleCloudDatacatalogLineageV1OperationMetadataFormProperties {

		/** Output only. The timestamp of the operation submission to the server. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The type of the operation being performed. */
		operationType: FormControl<GoogleCloudDatacatalogLineageV1OperationMetadataOperationType | null | undefined>,

		/** Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on. */
		resource: FormControl<string | null | undefined>,

		/** Output only. The UUID of the resource being operated on. */
		resourceUuid: FormControl<string | null | undefined>,

		/** Output only. The current operation state. */
		state: FormControl<GoogleCloudDatacatalogLineageV1OperationMetadataState | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1OperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1OperationMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleCloudDatacatalogLineageV1OperationMetadataOperationType | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resourceUuid: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudDatacatalogLineageV1OperationMetadataState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudDatacatalogLineageV1OperationMetadataOperationType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', DELETE = 'DELETE', CREATE = 'CREATE' }

	export enum GoogleCloudDatacatalogLineageV1OperationMetadataState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** Request message for SearchLinks. */
	export interface GoogleCloudDatacatalogLineageV1SearchLinksRequest {

		/**
		 * Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize?: number | null;

		/** Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
		pageToken?: string | null;

		/** The soft reference to everything you can attach a lineage event to. */
		source?: GoogleCloudDatacatalogLineageV1EntityReference;

		/** The soft reference to everything you can attach a lineage event to. */
		target?: GoogleCloudDatacatalogLineageV1EntityReference;
	}

	/** Request message for SearchLinks. */
	export interface GoogleCloudDatacatalogLineageV1SearchLinksRequestFormProperties {

		/**
		 * Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageSize: FormControl<number | null | undefined>,

		/** Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
		pageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1SearchLinksRequestFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1SearchLinksRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for SearchLinks. */
	export interface GoogleCloudDatacatalogLineageV1SearchLinksResponse {

		/** The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target). */
		links?: Array<GoogleCloudDatacatalogLineageV1Link>;

		/** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
		nextPageToken?: string | null;
	}

	/** Response message for SearchLinks. */
	export interface GoogleCloudDatacatalogLineageV1SearchLinksResponseFormProperties {

		/** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudDatacatalogLineageV1SearchLinksResponseFormGroup() {
		return new FormGroup<GoogleCloudDatacatalogLineageV1SearchLinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
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

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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

		/** The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
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
		 * Deletes the lineage event with the specified name.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the lineage event to delete.
		 * @param {boolean} allowMissing If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalineage_projects_locations_processes_runs_lineageEvents_delete(name: string, allowMissing: boolean | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing, {});
		}

		/**
		 * Gets details of a specified lineage event.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the lineage event to get.
		 * @return {GoogleCloudDatacatalogLineageV1LineageEvent} Successful response
		 */
		Datalineage_projects_locations_processes_runs_lineageEvents_get(name: string): Observable<GoogleCloudDatacatalogLineageV1LineageEvent> {
			return this.http.get<GoogleCloudDatacatalogLineageV1LineageEvent>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a run.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
		 * @param {boolean} allowMissing If set to true and the run is not found, the request creates it.
		 * @param {string} updateMask The list of fields to update. Currently not used. The whole message is updated.
		 * @return {GoogleCloudDatacatalogLineageV1Run} Successful response
		 */
		Datalineage_projects_locations_processes_runs_patch(name: string, allowMissing: boolean | null | undefined, updateMask: string | null | undefined, requestBody: GoogleCloudDatacatalogLineageV1Run): Observable<GoogleCloudDatacatalogLineageV1Run> {
			return this.http.patch<GoogleCloudDatacatalogLineageV1Run>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&allowMissing=' + allowMissing + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Datalineage_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Datalineage_projects_locations_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists lineage events in the given project and location. The list order is not defined.
		 * Get v1/{parent}/lineageEvents
		 * @param {string} parent Required. The name of the run that owns the collection of lineage events to get.
		 * @param {number} pageSize The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
		 * @return {GoogleCloudDatacatalogLineageV1ListLineageEventsResponse} Successful response
		 */
		Datalineage_projects_locations_processes_runs_lineageEvents_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogLineageV1ListLineageEventsResponse> {
			return this.http.get<GoogleCloudDatacatalogLineageV1ListLineageEventsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/lineageEvents&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new lineage event.
		 * Post v1/{parent}/lineageEvents
		 * @param {string} parent Required. The name of the run that should own the lineage event.
		 * @param {string} requestId A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
		 * @return {GoogleCloudDatacatalogLineageV1LineageEvent} Successful response
		 */
		Datalineage_projects_locations_processes_runs_lineageEvents_create(parent: string, requestId: string | null | undefined, requestBody: GoogleCloudDatacatalogLineageV1LineageEvent): Observable<GoogleCloudDatacatalogLineageV1LineageEvent> {
			return this.http.post<GoogleCloudDatacatalogLineageV1LineageEvent>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/lineageEvents&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List processes in the given project and location. List order is descending by insertion time.
		 * Get v1/{parent}/processes
		 * @param {string} parent Required. The name of the project and its location that owns this collection of processes.
		 * @param {number} pageSize The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
		 * @return {GoogleCloudDatacatalogLineageV1ListProcessesResponse} Successful response
		 */
		Datalineage_projects_locations_processes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogLineageV1ListProcessesResponse> {
			return this.http.get<GoogleCloudDatacatalogLineageV1ListProcessesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/processes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new process.
		 * Post v1/{parent}/processes
		 * @param {string} parent Required. The name of the project and its location that should own the process.
		 * @param {string} requestId A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
		 * @return {GoogleCloudDatacatalogLineageV1Process} Successful response
		 */
		Datalineage_projects_locations_processes_create(parent: string, requestId: string | null | undefined, requestBody: GoogleCloudDatacatalogLineageV1Process): Observable<GoogleCloudDatacatalogLineageV1Process> {
			return this.http.post<GoogleCloudDatacatalogLineageV1Process>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/processes&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists runs in the given project and location. List order is descending by `start_time`.
		 * Get v1/{parent}/runs
		 * @param {string} parent Required. The name of process that owns this collection of runs.
		 * @param {number} pageSize The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
		 * @return {GoogleCloudDatacatalogLineageV1ListRunsResponse} Successful response
		 */
		Datalineage_projects_locations_processes_runs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudDatacatalogLineageV1ListRunsResponse> {
			return this.http.get<GoogleCloudDatacatalogLineageV1ListRunsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new run.
		 * Post v1/{parent}/runs
		 * @param {string} parent Required. The name of the process that should own the run.
		 * @param {string} requestId A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
		 * @return {GoogleCloudDatacatalogLineageV1Run} Successful response
		 */
		Datalineage_projects_locations_processes_runs_create(parent: string, requestId: string | null | undefined, requestBody: GoogleCloudDatacatalogLineageV1Run): Observable<GoogleCloudDatacatalogLineageV1Run> {
			return this.http.post<GoogleCloudDatacatalogLineageV1Run>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runs&requestId=' + (requestId == null ? '' : encodeURIComponent(requestId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
		 * Post v1/{parent}:batchSearchLinkProcesses
		 * @param {string} parent Required. The project and location where you want to search.
		 * @return {GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse} Successful response
		 */
		Datalineage_projects_locations_batchSearchLinkProcesses(parent: string, requestBody: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest): Observable<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse> {
			return this.http.post<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':batchSearchLinkProcesses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
		 * Post v1/{parent}:searchLinks
		 * @param {string} parent Required. The project and location you want search in.
		 * @return {GoogleCloudDatacatalogLineageV1SearchLinksResponse} Successful response
		 */
		Datalineage_projects_locations_searchLinks(parent: string, requestBody: GoogleCloudDatacatalogLineageV1SearchLinksRequest): Observable<GoogleCloudDatacatalogLineageV1SearchLinksResponse> {
			return this.http.post<GoogleCloudDatacatalogLineageV1SearchLinksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':searchLinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

