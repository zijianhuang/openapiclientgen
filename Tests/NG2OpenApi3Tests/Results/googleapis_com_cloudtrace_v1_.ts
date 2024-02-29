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


	/** The response message for the `ListTraces` method. */
	export interface ListTracesResponse {

		/** If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces. */
		nextPageToken?: string | null;

		/** List of trace records as specified by the view parameter. */
		traces?: Array<Trace>;
	}

	/** The response message for the `ListTraces` method. */
	export interface ListTracesResponseFormProperties {

		/** If defined, indicates that there are more traces that match the request and that this value should be passed to the next request to continue retrieving additional traces. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTracesResponseFormGroup() {
		return new FormGroup<ListTracesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation. */
	export interface Trace {

		/** Project ID of the Cloud project where the trace data is stored. */
		projectId?: string | null;

		/** Collection of spans in the trace. */
		spans?: Array<TraceSpan>;

		/** Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string. For example, `382d4f4c6b7bb2f4a972559d9085001d`. The numeric value should not be zero. */
		traceId?: string | null;
	}

	/** A trace describes how long it takes for an application to perform an operation. It consists of a set of spans, each of which represent a single timed event within the operation. */
	export interface TraceFormProperties {

		/** Project ID of the Cloud project where the trace data is stored. */
		projectId: FormControl<string | null | undefined>,

		/** Globally unique identifier for the trace. This identifier is a 128-bit numeric value formatted as a 32-byte hex string. For example, `382d4f4c6b7bb2f4a972559d9085001d`. The numeric value should not be zero. */
		traceId: FormControl<string | null | undefined>,
	}
	export function CreateTraceFormGroup() {
		return new FormGroup<TraceFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			traceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace. */
	export interface TraceSpan {

		/** End time of the span in seconds and nanoseconds from the UNIX epoch. */
		endTime?: string | null;

		/** Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span. */
		kind?: TraceSpanKind | null;

		/** Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats: * `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`). * `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include: * `/agent` * `/component` * `/error/message` * `/error/name` * `/http/client_city` * `/http/client_country` * `/http/client_protocol` * `/http/client_region` * `/http/host` * `/http/method` * `/http/path` * `/http/redirected_url` * `/http/request/size` * `/http/response/size` * `/http/route` * `/http/status_code` * `/http/url` * `/http/user_agent` * `/pid` * `/stacktrace` * `/tid` */
		labels?: {[id: string]: string };

		/** Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. */
		name?: string | null;

		/** Optional. ID of the parent span, if any. */
		parentSpanId?: string | null;

		/** Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, `2205310701640571284`. */
		spanId?: string | null;

		/** Start time of the span in seconds and nanoseconds from the UNIX epoch. */
		startTime?: string | null;
	}

	/** A span represents a single timed event within a trace. Spans can be nested and form a trace tree. Often, a trace contains a root span that describes the end-to-end latency of an operation and, optionally, one or more subspans for its suboperations. Spans do not need to be contiguous. There may be gaps between spans in a trace. */
	export interface TraceSpanFormProperties {

		/** End time of the span in seconds and nanoseconds from the UNIX epoch. */
		endTime: FormControl<string | null | undefined>,

		/** Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `RPC_CLIENT` and `RPC_SERVER` to identify queueing latency associated with the span. */
		kind: FormControl<TraceSpanKind | null | undefined>,

		/** Collection of labels associated with the span. Label keys must be less than 128 bytes. Label values must be less than 16 kilobytes (10MB for `/stacktrace` values). Some predefined label keys exist, or you may create your own. When creating your own, we recommend the following formats: * `/category/product/key` for agents of well-known products (e.g. `/db/mongodb/read_size`). * `short_host/path/key` for domain-specific keys (e.g. `foo.com/myproduct/bar`) Predefined labels include: * `/agent` * `/component` * `/error/message` * `/error/name` * `/http/client_city` * `/http/client_country` * `/http/client_protocol` * `/http/client_region` * `/http/host` * `/http/method` * `/http/path` * `/http/redirected_url` * `/http/request/size` * `/http/response/size` * `/http/route` * `/http/status_code` * `/http/url` * `/http/user_agent` * `/pid` * `/stacktrace` * `/tid` */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Name of the span. Must be less than 128 bytes. The span name is sanitized and displayed in the Trace tool in the Google Cloud Platform Console. The name may be a method name or some other per-call site name. For the same executable and the same call point, a best practice is to use a consistent name, which makes it easier to correlate cross-trace spans. */
		name: FormControl<string | null | undefined>,

		/** Optional. ID of the parent span, if any. */
		parentSpanId: FormControl<string | null | undefined>,

		/** Identifier for the span. Must be a 64-bit integer other than 0 and unique within a trace. For example, `2205310701640571284`. */
		spanId: FormControl<string | null | undefined>,

		/** Start time of the span in seconds and nanoseconds from the UNIX epoch. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTraceSpanFormGroup() {
		return new FormGroup<TraceSpanFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<TraceSpanKind | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentSpanId: new FormControl<string | null | undefined>(undefined),
			spanId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TraceSpanKind { SPAN_KIND_UNSPECIFIED = 'SPAN_KIND_UNSPECIFIED', RPC_SERVER = 'RPC_SERVER', RPC_CLIENT = 'RPC_CLIENT' }


	/** List of new or updated traces. */
	export interface Traces {

		/** List of traces. */
		traces?: Array<Trace>;
	}

	/** List of new or updated traces. */
	export interface TracesFormProperties {
	}
	export function CreateTracesFormGroup() {
		return new FormGroup<TracesFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of traces that match the specified filter conditions.
		 * Get v1/projects/{projectId}/traces
		 * @param {string} projectId Required. ID of the Cloud project where the trace data is stored.
		 * @param {string} endTime End of the time interval (inclusive) during which the trace data was collected from the application.
		 * @param {string} filter Optional. A filter against labels for the request. By default, searches use prefix matching. To specify exact match, prepend a plus symbol (`+`) to the search term. Multiple terms are ANDed. Syntax: * `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root span starts with `NAME_PREFIX`. * `+root:NAME` or `+NAME`: Return traces where any root span's name is exactly `NAME`. * `span:NAME_PREFIX`: Return traces where any span starts with `NAME_PREFIX`. * `+span:NAME`: Return traces where any span's name is exactly `NAME`. * `latency:DURATION`: Return traces whose overall latency is greater or equal to than `DURATION`. Accepted units are nanoseconds (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For example, `latency:24ms` returns traces whose overall latency is greater than or equal to 24 milliseconds. * `label:LABEL_KEY`: Return all traces containing the specified label key (exact match, case-sensitive) regardless of the key:value pair's value (including empty values). * `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified label key (exact match, case-sensitive) whose value starts with `VALUE_PREFIX`. Both a key and a value must be specified. * `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair exactly matching the specified text. Both a key and a value must be specified. * `method:VALUE`: Equivalent to `/http/method:VALUE`. * `url:VALUE`: Equivalent to `/http/url:VALUE`.
		 * @param {string} orderBy Optional. Field used to sort the returned traces. Can be one of the following: * `trace_id` * `name` (`name` field of root span in the trace) * `duration` (difference between `end_time` and `start_time` fields of the root span) * `start` (`start_time` field of the root span) Descending order can be specified by appending `desc` to the sort field (for example, `name desc`). Only one sort field is permitted.
		 * @param {number} pageSize Optional. Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request.
		 * @param {string} startTime Start of the time interval (inclusive) during which the trace data was collected from the application.
		 * @param {Cloudtrace_projects_traces_listView} view Optional. Type of data returned for traces in the list. Default is `MINIMAL`.
		 * @return {ListTracesResponse} Successful response
		 */
		Cloudtrace_projects_traces_list(projectId: string, endTime: string | null | undefined, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, startTime: string | null | undefined, view: Cloudtrace_projects_traces_listView | null | undefined): Observable<ListTracesResponse> {
			return this.http.get<ListTracesResponse>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/traces&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&view=' + view, {});
		}

		/**
		 * Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
		 * Patch v1/projects/{projectId}/traces
		 * @param {string} projectId Required. ID of the Cloud project where the trace data is stored.
		 * @return {Empty} Successful response
		 */
		Cloudtrace_projects_patchTraces(projectId: string, requestBody: Traces): Observable<Empty> {
			return this.http.patch<Empty>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/traces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a single trace by its ID.
		 * Get v1/projects/{projectId}/traces/{traceId}
		 * @param {string} projectId Required. ID of the Cloud project where the trace data is stored.
		 * @param {string} traceId Required. ID of the trace to return.
		 * @return {Trace} Successful response
		 */
		Cloudtrace_projects_traces_get(projectId: string, traceId: string): Observable<Trace> {
			return this.http.get<Trace>(this.baseUri + 'v1/projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/traces/' + (traceId == null ? '' : encodeURIComponent(traceId)), {});
		}
	}

	export enum Cloudtrace_projects_traces_listView { VIEW_TYPE_UNSPECIFIED = 'VIEW_TYPE_UNSPECIFIED', MINIMAL = 'MINIMAL', ROOTSPAN = 'ROOTSPAN', COMPLETE = 'COMPLETE' }

}

