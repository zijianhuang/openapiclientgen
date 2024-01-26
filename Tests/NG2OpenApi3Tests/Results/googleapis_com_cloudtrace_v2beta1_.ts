import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** Result returned from `ListTraceSinks`. */
	export interface ListTraceSinksResponse {

		/** A paginated response where more pages might be available has `next_page_token` set. To get the next set of results, call the same method again using the value of `next_page_token` as `page_token`. */
		nextPageToken?: string | null;

		/** A list of sinks. */
		sinks?: Array<TraceSink>;
	}

	/** Result returned from `ListTraceSinks`. */
	export interface ListTraceSinksResponseFormProperties {

		/** A paginated response where more pages might be available has `next_page_token` set. To get the next set of results, call the same method again using the value of `next_page_token` as `page_token`. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTraceSinksResponseFormGroup() {
		return new FormGroup<ListTraceSinksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project. */
	export interface TraceSink {

		/** Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: `"projects/12345/traceSinks/my-project-trace-sink"`. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods. */
		name?: string | null;

		/** OutputConfig contains a destination for writing trace data. */
		outputConfig?: OutputConfig;

		/** Output only. A service account name for exporting the data. This field is set by sinks.create and sinks.update. The service account will need to be granted write access to the destination specified in the output configuration, see [Granting access for a resource](/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). To create tables and to write data, this account needs the `dataEditor` role. Read more about roles in the [BigQuery documentation](https://cloud.google.com/bigquery/docs/access-control). E.g.: "service-00000001@00000002.iam.gserviceaccount.com" */
		writerIdentity?: string | null;
	}

	/** Describes a sink used to export traces to a BigQuery dataset. The sink must be created within a project. */
	export interface TraceSinkFormProperties {

		/** Required. The canonical sink resource name, unique within the project. Must be of the form: projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]. E.g.: `"projects/12345/traceSinks/my-project-trace-sink"`. Sink identifiers are limited to 256 characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods. */
		name: FormControl<string | null | undefined>,

		/** Output only. A service account name for exporting the data. This field is set by sinks.create and sinks.update. The service account will need to be granted write access to the destination specified in the output configuration, see [Granting access for a resource](/iam/docs/granting-roles-to-service-accounts#granting_access_to_a_service_account_for_a_resource). To create tables and to write data, this account needs the `dataEditor` role. Read more about roles in the [BigQuery documentation](https://cloud.google.com/bigquery/docs/access-control). E.g.: "service-00000001@00000002.iam.gserviceaccount.com" */
		writerIdentity: FormControl<string | null | undefined>,
	}
	export function CreateTraceSinkFormGroup() {
		return new FormGroup<TraceSinkFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			writerIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OutputConfig contains a destination for writing trace data. */
	export interface OutputConfig {

		/** The destination for writing trace data. Supported formats include: "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" */
		destination?: string | null;
	}

	/** OutputConfig contains a destination for writing trace data. */
	export interface OutputConfigFormProperties {

		/** The destination for writing trace data. Supported formats include: "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]" */
		destination: FormControl<string | null | undefined>,
	}
	export function CreateOutputConfigFormGroup() {
		return new FormGroup<OutputConfigFormProperties>({
			destination: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a sink.
		 * Delete v2beta1/{name}
		 * @param {string} name Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
		 * @return {Empty} Successful response
		 */
		Cloudtrace_projects_traceSinks_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get a trace sink by name under the parent resource (GCP project).
		 * Get v2beta1/{name}
		 * @param {string} name Required. The resource name of the sink: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
		 * @return {TraceSink} Successful response
		 */
		Cloudtrace_projects_traceSinks_get(name: string): Observable<TraceSink> {
			return this.http.get<TraceSink>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
		 * Patch v2beta1/{name}
		 * @param {string} name Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
		 * @param {string} updateMask Required. Field mask that specifies the fields in `trace_sink` that are to be updated. A sink field is overwritten if, and only if, it is in the update mask. `name` and `writer_identity` fields cannot be updated. An empty `update_mask` is considered an error. For a detailed `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask Example: `updateMask=output_config`.
		 * @return {TraceSink} Successful response
		 */
		Cloudtrace_projects_traceSinks_patch(name: string, updateMask: string | null | undefined, requestBody: TraceSink): Observable<TraceSink> {
			return this.http.patch<TraceSink>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all sinks for the parent resource (GCP project).
		 * Get v2beta1/{parent}/traceSinks
		 * @param {string} parent Required. The parent resource whose sinks are to be listed (currently only project parent resources are supported): "projects/[PROJECT_ID]"
		 * @param {number} pageSize Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available.
		 * @param {string} pageToken Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
		 * @return {ListTraceSinksResponse} Successful response
		 */
		Cloudtrace_projects_traceSinks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTraceSinksResponse> {
			return this.http.get<ListTraceSinksResponse>(this.baseUri + 'v2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/traceSinks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
		 * Post v2beta1/{parent}/traceSinks
		 * @param {string} parent Required. The resource in which to create the sink (currently only project sinks are supported): "projects/[PROJECT_ID]" Examples: `"projects/my-trace-project"`, `"projects/123456789"`.
		 * @return {TraceSink} Successful response
		 */
		Cloudtrace_projects_traceSinks_create(parent: string, requestBody: TraceSink): Observable<TraceSink> {
			return this.http.post<TraceSink>(this.baseUri + 'v2beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/traceSinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

