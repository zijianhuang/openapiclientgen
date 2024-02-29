import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Request for the CancelExecution method. */
	export interface CancelExecutionRequest {
	}

	/** Request for the CancelExecution method. */
	export interface CancelExecutionRequestFormProperties {
	}
	export function CreateCancelExecutionRequestFormGroup() {
		return new FormGroup<CancelExecutionRequestFormProperties>({
		});

	}


	/** Error describes why the execution was abnormally terminated. */
	export interface Error {

		/** Human-readable stack trace string. */
		context?: string | null;

		/** Error message and data returned represented as a JSON string. */
		payload?: string | null;

		/** A collection of stack elements (frames) where an error occurred. */
		stackTrace?: StackTrace;
	}

	/** Error describes why the execution was abnormally terminated. */
	export interface ErrorFormProperties {

		/** Human-readable stack trace string. */
		context: FormControl<string | null | undefined>,

		/** Error message and data returned represented as a JSON string. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			context: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of stack elements (frames) where an error occurred. */
	export interface StackTrace {

		/** An array of stack elements. */
		elements?: Array<StackTraceElement>;
	}

	/** A collection of stack elements (frames) where an error occurred. */
	export interface StackTraceFormProperties {
	}
	export function CreateStackTraceFormGroup() {
		return new FormGroup<StackTraceFormProperties>({
		});

	}


	/** A single stack element (frame) where an error occurred. */
	export interface StackTraceElement {

		/** Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes. */
		position?: Position;

		/** The routine where the error occurred. */
		routine?: string | null;

		/** The step the error occurred at. */
		step?: string | null;
	}

	/** A single stack element (frame) where an error occurred. */
	export interface StackTraceElementFormProperties {

		/** The routine where the error occurred. */
		routine: FormControl<string | null | undefined>,

		/** The step the error occurred at. */
		step: FormControl<string | null | undefined>,
	}
	export function CreateStackTraceElementFormGroup() {
		return new FormGroup<StackTraceElementFormProperties>({
			routine: new FormControl<string | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes. */
	export interface Position {

		/** The source code column position (of the line) the current instruction was generated from. */
		column?: string | null;

		/** The number of bytes of source code making up this stack trace element. */
		length?: string | null;

		/** The source code line number the current instruction was generated from. */
		line?: string | null;
	}

	/** Position contains source position information about the stack trace element such as line number, column number and length of the code block in bytes. */
	export interface PositionFormProperties {

		/** The source code column position (of the line) the current instruction was generated from. */
		column: FormControl<string | null | undefined>,

		/** The number of bytes of source code making up this stack trace element. */
		length: FormControl<string | null | undefined>,

		/** The source code line number the current instruction was generated from. */
		line: FormControl<string | null | undefined>,
	}
	export function CreatePositionFormGroup() {
		return new FormGroup<PositionFormProperties>({
			column: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows). */
	export interface Execution {

		/** Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'` */
		argument?: string | null;

		/** The call logging level associated to this execution. */
		callLogLevel?: ExecutionCallLogLevel | null;

		/** Output only. Marks the end of execution, successful or not. */
		endTime?: string | null;

		/** Error describes why the execution was abnormally terminated. */
		error?: Error;

		/** Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
		name?: string | null;

		/** Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`. */
		result?: string | null;

		/** Output only. Marks the beginning of execution. */
		startTime?: string | null;

		/** Output only. Current state of the execution. */
		state?: ExecutionState | null;

		/** Represents the current status of this execution. */
		status?: Status;

		/** Output only. Revision of the workflow this execution is using. */
		workflowRevisionId?: string | null;
	}

	/** A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows). */
	export interface ExecutionFormProperties {

		/** Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'` */
		argument: FormControl<string | null | undefined>,

		/** The call logging level associated to this execution. */
		callLogLevel: FormControl<ExecutionCallLogLevel | null | undefined>,

		/** Output only. Marks the end of execution, successful or not. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
		name: FormControl<string | null | undefined>,

		/** Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`. */
		result: FormControl<string | null | undefined>,

		/** Output only. Marks the beginning of execution. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. Current state of the execution. */
		state: FormControl<ExecutionState | null | undefined>,

		/** Output only. Revision of the workflow this execution is using. */
		workflowRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFormGroup() {
		return new FormGroup<ExecutionFormProperties>({
			argument: new FormControl<string | null | undefined>(undefined),
			callLogLevel: new FormControl<ExecutionCallLogLevel | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
			workflowRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionCallLogLevel { CALL_LOG_LEVEL_UNSPECIFIED = 'CALL_LOG_LEVEL_UNSPECIFIED', LOG_ALL_CALLS = 'LOG_ALL_CALLS', LOG_ERRORS_ONLY = 'LOG_ERRORS_ONLY' }

	export enum ExecutionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', UNAVAILABLE = 'UNAVAILABLE', QUEUED = 'QUEUED' }


	/** Represents the current status of this execution. */
	export interface Status {

		/** A list of currently executing or last executed step names for the workflow execution currently running. If the workflow has succeeded or failed, this is the last attempted or executed step. Presently, if the current step is inside a subworkflow, the list only includes that step. In the future, the list will contain items for each step in the call stack, starting with the outermost step in the `main` subworkflow, and ending with the most deeply nested step. */
		currentSteps?: Array<Step>;
	}

	/** Represents the current status of this execution. */
	export interface StatusFormProperties {
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
		});

	}


	/** Represents a step of the workflow this execution is running. */
	export interface Step {

		/** Name of a routine within the workflow. */
		routine?: string | null;

		/** Name of a step within the routine. */
		step?: string | null;
	}

	/** Represents a step of the workflow this execution is running. */
	export interface StepFormProperties {

		/** Name of a routine within the workflow. */
		routine: FormControl<string | null | undefined>,

		/** Name of a step within the routine. */
		step: FormControl<string | null | undefined>,
	}
	export function CreateStepFormGroup() {
		return new FormGroup<StepFormProperties>({
			routine: new FormControl<string | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the ListExecutions method. */
	export interface ListExecutionsResponse {

		/** The executions which match the request. */
		executions?: Array<Execution>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for the ListExecutions method. */
	export interface ListExecutionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsResponseFormGroup() {
		return new FormGroup<ListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns an execution of the given name.
		 * Get v1beta/{name}
		 * @param {string} name Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
		 * @param {Workflowexecutions_projects_locations_workflows_executions_getView} view Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_get(name: string, view: Workflowexecutions_projects_locations_workflows_executions_getView | null | undefined): Observable<Execution> {
			return this.http.get<Execution>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Cancels an execution of the given name.
		 * Post v1beta/{name}:cancel
		 * @param {string} name Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_cancel(name: string, requestBody: CancelExecutionRequest): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
		 * Get v1beta/{parent}/executions
		 * @param {string} parent Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
		 * @param {number} pageSize Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token.
		 * @param {Workflowexecutions_projects_locations_workflows_executions_getView} view Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Workflowexecutions_projects_locations_workflows_executions_getView | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new execution using the latest revision of the given workflow.
		 * Post v1beta/{parent}/executions
		 * @param {string} parent Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_create(parent: string, requestBody: Execution): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Workflowexecutions_projects_locations_workflows_executions_getView { EXECUTION_VIEW_UNSPECIFIED = 'EXECUTION_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

