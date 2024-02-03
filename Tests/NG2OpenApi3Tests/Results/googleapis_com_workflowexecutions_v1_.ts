import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An instance of a Callback created by an execution. */
	export interface Callback {

		/** Output only. The payloads received by the callback that have not been processed by a waiting execution step. */
		availablePayloads?: Array<string>;

		/** Output only. The method accepted by the callback. For example: GET, POST, PUT. */
		method?: string | null;

		/** Output only. The resource name of the callback. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/callback/{callback} */
		name?: string | null;

		/** Output only. Number of execution steps waiting on this callback. */
		waiters?: string | null;
	}

	/** An instance of a Callback created by an execution. */
	export interface CallbackFormProperties {

		/** Output only. The method accepted by the callback. For example: GET, POST, PUT. */
		method: FormControl<string | null | undefined>,

		/** Output only. The resource name of the callback. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/callback/{callback} */
		name: FormControl<string | null | undefined>,

		/** Output only. Number of execution steps waiting on this callback. */
		waiters: FormControl<string | null | undefined>,
	}
	export function CreateCallbackFormGroup() {
		return new FormGroup<CallbackFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			waiters: new FormControl<string | null | undefined>(undefined),
		});

	}


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


	/** Exception describes why the step entry failed. */
	export interface Exception {

		/** Error message represented as a JSON string. */
		payload?: string | null;
	}

	/** Exception describes why the step entry failed. */
	export interface ExceptionFormProperties {

		/** Error message represented as a JSON string. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateExceptionFormGroup() {
		return new FormGroup<ExceptionFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows). */
	export interface Execution {

		/** Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'` */
		argument?: string | null;

		/** The call logging level associated to this execution. */
		callLogLevel?: ExecutionCallLogLevel | null;

		/** Output only. Measures the duration of the execution. */
		duration?: string | null;

		/** Output only. Marks the end of execution, successful or not. */
		endTime?: string | null;

		/** Error describes why the execution was abnormally terminated. */
		error?: Error;

		/** Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution. */
		labels?: {[id: string]: string };

		/** Output only. The resource name of the execution. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} */
		name?: string | null;

		/** Output only. Output of the execution represented as a JSON string. The value can only be present if the execution's state is `SUCCEEDED`. */
		result?: string | null;

		/** Output only. Marks the beginning of execution. */
		startTime?: string | null;

		/** Output only. Current state of the execution. */
		state?: ExecutionState | null;

		/** Describes an error related to the current state of the Execution resource. */
		stateError?: StateError;

		/** Represents the current status of this execution. */
		status?: Status;

		/** Output only. Revision of the workflow this execution is using. */
		workflowRevisionId?: string | null;
	}

	/** A running instance of a [Workflow](/workflows/docs/reference/rest/v1/projects.locations.workflows). */
	export interface ExecutionFormProperties {

		/** Input parameters of the execution represented as a JSON string. The size limit is 32KB. *Note*: If you are using the REST API directly to run your workflow, you must escape any JSON string value of `argument`. Example: `'{"argument":"{\"firstName\":\"FIRST\",\"lastName\":\"LAST\"}"}'` */
		argument: FormControl<string | null | undefined>,

		/** The call logging level associated to this execution. */
		callLogLevel: FormControl<ExecutionCallLogLevel | null | undefined>,

		/** Output only. Measures the duration of the execution. */
		duration: FormControl<string | null | undefined>,

		/** Output only. Marks the end of execution, successful or not. */
		endTime: FormControl<string | null | undefined>,

		/** Labels associated with this execution. Labels can contain at most 64 entries. Keys and values can be no longer than 63 characters and can only contain lowercase letters, numeric characters, underscores, and dashes. Label keys must start with a letter. International characters are allowed. By default, labels are inherited from the workflow but are overridden by any labels associated with the execution. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

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
			duration: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExecutionState | null | undefined>(undefined),
			workflowRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionCallLogLevel { CALL_LOG_LEVEL_UNSPECIFIED = 'CALL_LOG_LEVEL_UNSPECIFIED', LOG_ALL_CALLS = 'LOG_ALL_CALLS', LOG_ERRORS_ONLY = 'LOG_ERRORS_ONLY', LOG_NONE = 'LOG_NONE' }

	export enum ExecutionState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', UNAVAILABLE = 'UNAVAILABLE', QUEUED = 'QUEUED' }


	/** Describes an error related to the current state of the Execution resource. */
	export interface StateError {

		/** Provides specifics about the error. */
		details?: string | null;

		/** The type of this state error. */
		type?: StateErrorType | null;
	}

	/** Describes an error related to the current state of the Execution resource. */
	export interface StateErrorFormProperties {

		/** Provides specifics about the error. */
		details: FormControl<string | null | undefined>,

		/** The type of this state error. */
		type: FormControl<StateErrorType | null | undefined>,
	}
	export function CreateStateErrorFormGroup() {
		return new FormGroup<StateErrorFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<StateErrorType | null | undefined>(undefined),
		});

	}

	export enum StateErrorType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', KMS_ERROR = 'KMS_ERROR' }


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


	/** Response for the ExportData method. */
	export interface ExportDataResponse {

		/** The JSON string with customer data and metadata for an execution with the given name */
		data?: string | null;
	}

	/** Response for the ExportData method. */
	export interface ExportDataResponseFormProperties {

		/** The JSON string with customer data and metadata for an execution with the given name */
		data: FormControl<string | null | undefined>,
	}
	export function CreateExportDataResponseFormGroup() {
		return new FormGroup<ExportDataResponseFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RPC response object for the ListCallbacks method. */
	export interface ListCallbacksResponse {

		/** The callbacks which match the request. */
		callbacks?: Array<Callback>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** RPC response object for the ListCallbacks method. */
	export interface ListCallbacksResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCallbacksResponseFormGroup() {
		return new FormGroup<ListCallbacksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Response message for ExecutionHistory.ListStepEntries. */
	export interface ListStepEntriesResponse {

		/** A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to `ListStepEntries` method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of entries. */
		stepEntries?: Array<StepEntry>;

		/** Indicates the total number of StepEntries that matched the request filter. For running executions, this number shows the number of StepEntries that are executed thus far. */
		totalSize?: number | null;
	}

	/** Response message for ExecutionHistory.ListStepEntries. */
	export interface ListStepEntriesResponseFormProperties {

		/** A token to retrieve next page of results. Pass this value in the ListStepEntriesRequest.page_token field in the subsequent call to `ListStepEntries` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Indicates the total number of StepEntries that matched the request filter. For running executions, this number shows the number of StepEntries that are executed thus far. */
		totalSize: FormControl<number | null | undefined>,
	}
	export function CreateListStepEntriesResponseFormGroup() {
		return new FormGroup<ListStepEntriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An StepEntry contains debugging information for a step transition in a workflow execution. */
	export interface StepEntry {

		/** Output only. The creation time of the step entry. */
		createTime?: string | null;

		/** Output only. The numeric ID of this step entry, used for navigation. */
		entryId?: string | null;

		/** Exception describes why the step entry failed. */
		exception?: Exception;

		/** Output only. The full resource name of the step entry. Each step entry has a unique entry ID, which is a monotonically increasing counter. Step entry names have the format: `projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry}`. */
		name?: string | null;

		/** NavigationInfo describes what steps if any come before or after this step, or what steps are parents or children of this step. */
		navigationInfo?: NavigationInfo;

		/** Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML source code. The top level routine name is `main`. */
		routine?: string | null;

		/** Output only. The state of the step entry. */
		state?: StepEntryState | null;

		/** Output only. The name of the step this step entry belongs to. */
		step?: string | null;

		/** StepEntryMetadata contains metadata information about this step. */
		stepEntryMetadata?: StepEntryMetadata;

		/** Output only. The type of the step this step entry belongs to. */
		stepType?: StepEntryStepType | null;

		/** Output only. The most recently updated time of the step entry. */
		updateTime?: string | null;
	}

	/** An StepEntry contains debugging information for a step transition in a workflow execution. */
	export interface StepEntryFormProperties {

		/** Output only. The creation time of the step entry. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The numeric ID of this step entry, used for navigation. */
		entryId: FormControl<string | null | undefined>,

		/** Output only. The full resource name of the step entry. Each step entry has a unique entry ID, which is a monotonically increasing counter. Step entry names have the format: `projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The name of the routine this step entry belongs to. A routine name is the subworkflow name defined in the YAML source code. The top level routine name is `main`. */
		routine: FormControl<string | null | undefined>,

		/** Output only. The state of the step entry. */
		state: FormControl<StepEntryState | null | undefined>,

		/** Output only. The name of the step this step entry belongs to. */
		step: FormControl<string | null | undefined>,

		/** Output only. The type of the step this step entry belongs to. */
		stepType: FormControl<StepEntryStepType | null | undefined>,

		/** Output only. The most recently updated time of the step entry. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateStepEntryFormGroup() {
		return new FormGroup<StepEntryFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			entryId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			routine: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StepEntryState | null | undefined>(undefined),
			step: new FormControl<string | null | undefined>(undefined),
			stepType: new FormControl<StepEntryStepType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** NavigationInfo describes what steps if any come before or after this step, or what steps are parents or children of this step. */
	export interface NavigationInfo {

		/** Step entries that can be reached by "stepping into" e.g. a subworkflow call. */
		children?: Array<string>;

		/** The index of the next step in the current workflow, if any. */
		next?: string | null;

		/** The step entry, if any, that can be reached by "stepping out" of the current workflow being executed. */
		parent?: string | null;

		/** The index of the previous step in the current workflow, if any. */
		previous?: string | null;
	}

	/** NavigationInfo describes what steps if any come before or after this step, or what steps are parents or children of this step. */
	export interface NavigationInfoFormProperties {

		/** The index of the next step in the current workflow, if any. */
		next: FormControl<string | null | undefined>,

		/** The step entry, if any, that can be reached by "stepping out" of the current workflow being executed. */
		parent: FormControl<string | null | undefined>,

		/** The index of the previous step in the current workflow, if any. */
		previous: FormControl<string | null | undefined>,
	}
	export function CreateNavigationInfoFormGroup() {
		return new FormGroup<NavigationInfoFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StepEntryState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STATE_IN_PROGRESS = 'STATE_IN_PROGRESS', STATE_SUCCEEDED = 'STATE_SUCCEEDED', STATE_FAILED = 'STATE_FAILED' }


	/** StepEntryMetadata contains metadata information about this step. */
	export interface StepEntryMetadata {

		/** Progress number represents the current state of the current progress. eg: A step entry represents the 4th iteration in a progress of PROGRESS_TYPE_FOR. */
		progressNumber?: string | null;

		/** Progress type of this step entry. */
		progressType?: StepEntryMetadataProgressType | null;

		/** Child thread id that this step entry belongs to. */
		threadId?: string | null;
	}

	/** StepEntryMetadata contains metadata information about this step. */
	export interface StepEntryMetadataFormProperties {

		/** Progress number represents the current state of the current progress. eg: A step entry represents the 4th iteration in a progress of PROGRESS_TYPE_FOR. */
		progressNumber: FormControl<string | null | undefined>,

		/** Progress type of this step entry. */
		progressType: FormControl<StepEntryMetadataProgressType | null | undefined>,

		/** Child thread id that this step entry belongs to. */
		threadId: FormControl<string | null | undefined>,
	}
	export function CreateStepEntryMetadataFormGroup() {
		return new FormGroup<StepEntryMetadataFormProperties>({
			progressNumber: new FormControl<string | null | undefined>(undefined),
			progressType: new FormControl<StepEntryMetadataProgressType | null | undefined>(undefined),
			threadId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StepEntryMetadataProgressType { PROGRESS_TYPE_UNSPECIFIED = 'PROGRESS_TYPE_UNSPECIFIED', PROGRESS_TYPE_FOR = 'PROGRESS_TYPE_FOR', PROGRESS_TYPE_SWITCH = 'PROGRESS_TYPE_SWITCH', PROGRESS_TYPE_RETRY = 'PROGRESS_TYPE_RETRY', PROGRESS_TYPE_PARALLEL_FOR = 'PROGRESS_TYPE_PARALLEL_FOR', PROGRESS_TYPE_PARALLEL_BRANCH = 'PROGRESS_TYPE_PARALLEL_BRANCH' }

	export enum StepEntryStepType { STEP_TYPE_UNSPECIFIED = 'STEP_TYPE_UNSPECIFIED', STEP_ASSIGN = 'STEP_ASSIGN', STEP_STD_LIB_CALL = 'STEP_STD_LIB_CALL', STEP_CONNECTOR_CALL = 'STEP_CONNECTOR_CALL', STEP_SUBWORKFLOW_CALL = 'STEP_SUBWORKFLOW_CALL', STEP_CALL = 'STEP_CALL', STEP_SWITCH = 'STEP_SWITCH', STEP_CONDITION = 'STEP_CONDITION', STEP_FOR = 'STEP_FOR', STEP_FOR_ITERATION = 'STEP_FOR_ITERATION', STEP_PARALLEL_FOR = 'STEP_PARALLEL_FOR', STEP_PARALLEL_BRANCH = 'STEP_PARALLEL_BRANCH', STEP_PARALLEL_BRANCH_ENTRY = 'STEP_PARALLEL_BRANCH_ENTRY', STEP_TRY_RETRY_EXCEPT = 'STEP_TRY_RETRY_EXCEPT', STEP_TRY = 'STEP_TRY', STEP_RETRY = 'STEP_RETRY', STEP_EXCEPT = 'STEP_EXCEPT', STEP_RETURN = 'STEP_RETURN', STEP_RAISE = 'STEP_RAISE', STEP_GOTO = 'STEP_GOTO' }


	/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
	export interface PubsubMessage {

		/** Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription. */
		attributes?: {[id: string]: string };

		/** Optional. The message data field. If this field is empty, the message must contain at least one attribute. */
		data?: string | null;

		/** Optional. ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId?: string | null;

		/** Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering). */
		orderingKey?: string | null;

		/** Optional. The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime?: string | null;
	}

	/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
	export interface PubsubMessageFormProperties {

		/** Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription. */
		attributes: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The message data field. If this field is empty, the message must contain at least one attribute. */
		data: FormControl<string | null | undefined>,

		/** Optional. ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a `PubsubMessage` via a `Pull` call or a push delivery. It must not be populated by the publisher in a `Publish` call. */
		messageId: FormControl<string | null | undefined>,

		/** Optional. If non-empty, identifies related messages for which publish order should be respected. If a `Subscription` has `enable_message_ordering` set to `true`, messages published with the same non-empty `ordering_key` value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All `PubsubMessage`s published in a given `PublishRequest` must specify the same `ordering_key` value. For more information, see [ordering messages](https://cloud.google.com/pubsub/docs/ordering). */
		orderingKey: FormControl<string | null | undefined>,

		/** Optional. The time at which the message was published, populated by the server when it receives the `Publish` call. It must not be populated by the publisher in a `Publish` call. */
		publishTime: FormControl<string | null | undefined>,
	}
	export function CreatePubsubMessageFormGroup() {
		return new FormGroup<PubsubMessageFormProperties>({
			attributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			orderingKey: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the TriggerPubsubExecution method. */
	export interface TriggerPubsubExecutionRequest {

		/** Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers. */
		GCPCloudEventsMode?: string | null;

		/** The number of attempts that have been made to deliver this message. This is set by Pub/Sub for subscriptions that have the "dead letter" feature enabled, and hence provided here for compatibility, but is ignored by Workflows. */
		deliveryAttempt?: number | null;

		/** A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits. */
		message?: PubsubMessage;

		/** Required. The subscription of the Pub/Sub push notification. Format: projects/{project}/subscriptions/{sub} */
		subscription?: string | null;
	}

	/** Request for the TriggerPubsubExecution method. */
	export interface TriggerPubsubExecutionRequestFormProperties {

		/** Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers. */
		GCPCloudEventsMode: FormControl<string | null | undefined>,

		/** The number of attempts that have been made to deliver this message. This is set by Pub/Sub for subscriptions that have the "dead letter" feature enabled, and hence provided here for compatibility, but is ignored by Workflows. */
		deliveryAttempt: FormControl<number | null | undefined>,

		/** Required. The subscription of the Pub/Sub push notification. Format: projects/{project}/subscriptions/{sub} */
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateTriggerPubsubExecutionRequestFormGroup() {
		return new FormGroup<TriggerPubsubExecutionRequestFormProperties>({
			GCPCloudEventsMode: new FormControl<string | null | undefined>(undefined),
			deliveryAttempt: new FormControl<number | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a step entry.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the step entry to retrieve. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry}
		 * @param {Workflowexecutions_projects_locations_workflows_executions_stepEntries_getView} view Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
		 * @return {StepEntry} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_stepEntries_get(name: string, view: Workflowexecutions_projects_locations_workflows_executions_stepEntries_getView | null | undefined): Observable<StepEntry> {
			return this.http.get<StepEntry>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Cancels an execution of the given name.
		 * Post v1/{name}:cancel
		 * @param {string} name Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_cancel(name: string, requestBody: CancelExecutionRequest): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
		 * Get v1/{name}:exportData
		 * @param {string} name Required. Name of the execution for which data is to be exported. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
		 * @return {ExportDataResponse} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_exportData(name: string): Observable<ExportDataResponse> {
			return this.http.get<ExportDataResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportData', {});
		}

		/**
		 * Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.
		 * Get v1/{parent}/callbacks
		 * @param {string} parent Required. Name of the execution for which the callbacks should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
		 * @param {number} pageSize Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value.
		 * @param {string} pageToken A page token, received from a previous `ListCallbacks` call. Provide this to retrieve the subsequent page. Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted.
		 * @return {ListCallbacksResponse} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_callbacks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCallbacksResponse> {
			return this.http.get<ListCallbacksResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/callbacks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
		 * Get v1/{parent}/executions
		 * @param {string} parent Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
		 * @param {string} filter Optional. Filters applied to the `[Executions.ListExecutions]` results. The following fields are supported for filtering: `executionId`, `state`, `startTime`, `endTime`, `duration`, `workflowRevisionId`, `stepName`, and `label`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `startTime>"2023-08-01" AND state="FAILED"`
		 * @param {string} orderBy Optional. Comma-separated list of fields that specify the ordering applied to the `[Executions.ListExecutions]` results. By default the ordering is based on descending `startTime`. The following fields are supported for ordering: `executionId`, `state`, `startTime`, `endTime`, `duration`, and `workflowRevisionId`. For details, see AIP-132.
		 * @param {number} pageSize Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
		 * @param {string} pageToken A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. Note that pagination is applied to dynamic data. The list of executions returned can change between page requests.
		 * @param {Workflowexecutions_projects_locations_workflows_executions_stepEntries_getView} view Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
		 * @return {ListExecutionsResponse} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Workflowexecutions_projects_locations_workflows_executions_stepEntries_getView | null | undefined): Observable<ListExecutionsResponse> {
			return this.http.get<ListExecutionsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.
		 * Post v1/{parent}/executions
		 * @param {string} parent Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_create(parent: string, requestBody: Execution): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.
		 * Get v1/{parent}/stepEntries
		 * @param {string} parent Required. Name of the workflow execution to list entries for. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/
		 * @param {string} filter Optional. Filters applied to the `[StepEntries.ListStepEntries]` results. The following fields are supported for filtering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime>"2023-08-01" AND state="FAILED"`
		 * @param {string} orderBy Optional. Comma-separated list of fields that specify the ordering applied to the `[StepEntries.ListStepEntries]` results. By default the ordering is based on ascending `entryId`. The following fields are supported for ordering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-132.
		 * @param {number} pageSize Optional. Number of step entries to return per call. The default max is 1000.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListStepEntries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStepEntries` must match the call that provided the page token.
		 * @param {number} skip Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page.
		 * @return {ListStepEntriesResponse} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_executions_stepEntries_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, skip: number | null | undefined): Observable<ListStepEntriesResponse> {
			return this.http.get<ListStepEntriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/stepEntries&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&skip=' + skip, {});
		}

		/**
		 * Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
		 * Post v1/{workflow}:triggerPubsubExecution
		 * @param {string} workflow Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow}
		 * @return {Execution} Successful response
		 */
		Workflowexecutions_projects_locations_workflows_triggerPubsubExecution(workflow: string, requestBody: TriggerPubsubExecutionRequest): Observable<Execution> {
			return this.http.post<Execution>(this.baseUri + 'v1/' + (workflow == null ? '' : encodeURIComponent(workflow)) + ':triggerPubsubExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Workflowexecutions_projects_locations_workflows_executions_stepEntries_getView { EXECUTION_VIEW_UNSPECIFIED = 'EXECUTION_VIEW_UNSPECIFIED', BASIC = 'BASIC', FULL = 'FULL' }

}

