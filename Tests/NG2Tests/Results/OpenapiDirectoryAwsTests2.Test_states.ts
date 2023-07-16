import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateActivityOutput {
		activityArn: string;
		creationDate: Date;
	}

	export interface CreateActivityInput {
		name: string;
		tags?: Array<Tag>;
	}


	/** <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	export interface ActivityLimitExceeded {
	}

	export interface InvalidName {
	}

	export interface TooManyTags {
	}

	export interface CreateStateMachineOutput {
		stateMachineArn: string;
		creationDate: Date;
	}

	export interface CreateStateMachineInput {
		name: string;
		definition: string;
		roleArn: string;
		type?: CreateStateMachineInputType;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
		tags?: Array<Tag>;
	}

	export enum CreateStateMachineInputType { STANDARD = 0, EXPRESS = 1 }


	/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
	export interface LoggingConfiguration {
		level?: LoggingConfigurationLevel;
		includeExecutionData?: boolean;
		destinations?: Array<LogDestination>;
	}

	export enum LoggingConfigurationLevel { ALL = 0, ERROR = 1, FATAL = 2, OFF = 3 }


	/** <p/> */
	export interface LogDestination {

		/** <p/> */
		cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
	}


	/** <p/> */
	export interface CloudWatchLogsLogGroup {
		logGroupArn?: string;
	}

	export interface InvalidArn {
	}

	export interface InvalidDefinition {
	}

	export interface InvalidLoggingConfiguration {
	}

	export interface StateMachineAlreadyExists {
	}

	export interface StateMachineDeleting {
	}

	export interface StateMachineLimitExceeded {
	}

	export interface StateMachineTypeNotSupported {
	}

	export interface DeleteActivityOutput {
	}

	export interface DeleteActivityInput {
		activityArn: string;
	}

	export interface DeleteStateMachineOutput {
	}

	export interface DeleteStateMachineInput {
		stateMachineArn: string;
	}

	export interface DescribeActivityOutput {
		activityArn: string;
		name: string;
		creationDate: Date;
	}

	export interface DescribeActivityInput {
		activityArn: string;
	}

	export interface ActivityDoesNotExist {
	}

	export interface DescribeExecutionOutput {
		executionArn: string;
		stateMachineArn: string;
		name?: string;
		status: DescribeExecutionOutputStatus;
		startDate: Date;
		stopDate?: Date;
		input: string;
		output?: string;
	}

	export enum DescribeExecutionOutputStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, TIMED_OUT = 3, ABORTED = 4 }

	export interface DescribeExecutionInput {
		executionArn: string;
	}

	export interface ExecutionDoesNotExist {
	}

	export interface DescribeStateMachineOutput {
		stateMachineArn: string;
		name: string;
		status?: DescribeStateMachineOutputStatus;
		definition: string;
		roleArn: string;
		type: CreateStateMachineInputType;
		creationDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}

	export enum DescribeStateMachineOutputStatus { ACTIVE = 0, DELETING = 1 }

	export interface DescribeStateMachineInput {
		stateMachineArn: string;
	}

	export interface StateMachineDoesNotExist {
	}

	export interface DescribeStateMachineForExecutionOutput {
		stateMachineArn: string;
		name: string;
		definition: string;
		roleArn: string;
		updateDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}

	export interface DescribeStateMachineForExecutionInput {
		executionArn: string;
	}

	export interface GetActivityTaskOutput {
		taskToken?: string;
		input?: string;
	}

	export interface GetActivityTaskInput {
		activityArn: string;
		workerName?: string;
	}

	export interface ActivityWorkerLimitExceeded {
	}

	export interface GetExecutionHistoryOutput {

		/**
		 * Contains details about the events that occurred during an execution.
		 * Required
		 */
		events: Array<HistoryEvent>;
		nextToken?: string;
	}


	/** Contains details about the events of an execution. */
	export interface HistoryEvent {
		timestamp: Date;
		type: HistoryEventType;
		id: number;
		previousEventId?: number;

		/** Contains details about an activity that failed during an execution. */
		activityFailedEventDetails?: ActivityFailedEventDetails;

		/** Contains details about an activity schedule failure that occurred during an execution. */
		activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;

		/** Contains details about an activity scheduled during an execution. */
		activityScheduledEventDetails?: ActivityScheduledEventDetails;

		/** Contains details about the start of an activity during an execution. */
		activityStartedEventDetails?: ActivityStartedEventDetails;

		/** Contains details about an activity that successfully terminated during an execution. */
		activitySucceededEventDetails?: ActivitySucceededEventDetails;

		/** Contains details about an activity timeout that occurred during an execution. */
		activityTimedOutEventDetails?: ActivityTimedOutEventDetails;

		/** Contains details about a task failure event. */
		taskFailedEventDetails?: TaskFailedEventDetails;

		/** Contains details about a task scheduled during an execution. */
		taskScheduledEventDetails?: TaskScheduledEventDetails;

		/** Contains details about a task that failed to start during an execution. */
		taskStartFailedEventDetails?: TaskStartFailedEventDetails;

		/** Contains details about the start of a task during an execution. */
		taskStartedEventDetails?: TaskStartedEventDetails;

		/** Contains details about a task that failed to submit during an execution. */
		taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;

		/** Contains details about a task submitted to a resource . */
		taskSubmittedEventDetails?: TaskSubmittedEventDetails;

		/** Contains details about the successful completion of a task state. */
		taskSucceededEventDetails?: TaskSucceededEventDetails;

		/** Contains details about a resource timeout that occurred during an execution. */
		taskTimedOutEventDetails?: TaskTimedOutEventDetails;

		/** Contains details about an execution failure event. */
		executionFailedEventDetails?: ExecutionFailedEventDetails;

		/** Contains details about the start of the execution. */
		executionStartedEventDetails?: ExecutionStartedEventDetails;

		/** Contains details about the successful termination of the execution. */
		executionSucceededEventDetails?: ExecutionSucceededEventDetails;

		/** Contains details about an abort of an execution. */
		executionAbortedEventDetails?: ExecutionAbortedEventDetails;

		/** Contains details about the execution timeout that occurred during the execution. */
		executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;

		/** Details about a Map state that was started. */
		mapStateStartedEventDetails?: MapStateStartedEventDetails;

		/** Contains details about an iteration of a Map state. */
		mapIterationStartedEventDetails?: MapIterationEventDetails;

		/** Contains details about an iteration of a Map state. */
		mapIterationSucceededEventDetails?: MapIterationEventDetails;

		/** Contains details about an iteration of a Map state. */
		mapIterationFailedEventDetails?: MapIterationEventDetails;

		/** Contains details about an iteration of a Map state. */
		mapIterationAbortedEventDetails?: MapIterationEventDetails;

		/** Contains details about a lambda function that failed during an execution. */
		lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;

		/** Contains details about a failed lambda function schedule event that occurred during an execution. */
		lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;

		/** Contains details about a lambda function scheduled during an execution. */
		lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;

		/** Contains details about a lambda function that failed to start during an execution. */
		lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;

		/** Contains details about a lambda function that successfully terminated during an execution. */
		lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;

		/** Contains details about a lambda function timeout that occurred during an execution. */
		lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;

		/** Contains details about a state entered during an execution. */
		stateEnteredEventDetails?: StateEnteredEventDetails;

		/** Contains details about an exit from a state during an execution. */
		stateExitedEventDetails?: StateExitedEventDetails;
	}

	export enum HistoryEventType { ActivityFailed = 0, ActivityScheduled = 1, ActivityScheduleFailed = 2, ActivityStarted = 3, ActivitySucceeded = 4, ActivityTimedOut = 5, ChoiceStateEntered = 6, ChoiceStateExited = 7, ExecutionAborted = 8, ExecutionFailed = 9, ExecutionStarted = 10, ExecutionSucceeded = 11, ExecutionTimedOut = 12, FailStateEntered = 13, LambdaFunctionFailed = 14, LambdaFunctionScheduled = 15, LambdaFunctionScheduleFailed = 16, LambdaFunctionStarted = 17, LambdaFunctionStartFailed = 18, LambdaFunctionSucceeded = 19, LambdaFunctionTimedOut = 20, MapIterationAborted = 21, MapIterationFailed = 22, MapIterationStarted = 23, MapIterationSucceeded = 24, MapStateAborted = 25, MapStateEntered = 26, MapStateExited = 27, MapStateFailed = 28, MapStateStarted = 29, MapStateSucceeded = 30, ParallelStateAborted = 31, ParallelStateEntered = 32, ParallelStateExited = 33, ParallelStateFailed = 34, ParallelStateStarted = 35, ParallelStateSucceeded = 36, PassStateEntered = 37, PassStateExited = 38, SucceedStateEntered = 39, SucceedStateExited = 40, TaskFailed = 41, TaskScheduled = 42, TaskStarted = 43, TaskStartFailed = 44, TaskStateAborted = 45, TaskStateEntered = 46, TaskStateExited = 47, TaskSubmitFailed = 48, TaskSubmitted = 49, TaskSucceeded = 50, TaskTimedOut = 51, WaitStateAborted = 52, WaitStateEntered = 53, WaitStateExited = 54 }


	/** Contains details about an activity that failed during an execution. */
	export interface ActivityFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about an activity schedule failure that occurred during an execution. */
	export interface ActivityScheduleFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about an activity scheduled during an execution. */
	export interface ActivityScheduledEventDetails {
		resource: string;
		input?: string;
		timeoutInSeconds?: number;
		heartbeatInSeconds?: number;
	}


	/** Contains details about the start of an activity during an execution. */
	export interface ActivityStartedEventDetails {
		workerName?: string;
	}


	/** Contains details about an activity that successfully terminated during an execution. */
	export interface ActivitySucceededEventDetails {
		output?: string;
	}


	/** Contains details about an activity timeout that occurred during an execution. */
	export interface ActivityTimedOutEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about a task failure event. */
	export interface TaskFailedEventDetails {
		resourceType: string;
		resource: string;
		error?: string;
		cause?: string;
	}


	/** Contains details about a task scheduled during an execution. */
	export interface TaskScheduledEventDetails {
		resourceType: string;
		resource: string;
		region: string;
		parameters: string;
		timeoutInSeconds?: number;
	}


	/** Contains details about a task that failed to start during an execution. */
	export interface TaskStartFailedEventDetails {
		resourceType: string;
		resource: string;
		error?: string;
		cause?: string;
	}


	/** Contains details about the start of a task during an execution. */
	export interface TaskStartedEventDetails {
		resourceType: string;
		resource: string;
	}


	/** Contains details about a task that failed to submit during an execution. */
	export interface TaskSubmitFailedEventDetails {
		resourceType: string;
		resource: string;
		error?: string;
		cause?: string;
	}


	/** Contains details about a task submitted to a resource . */
	export interface TaskSubmittedEventDetails {
		resourceType: string;
		resource: string;
		output?: string;
	}


	/** Contains details about the successful completion of a task state. */
	export interface TaskSucceededEventDetails {
		resourceType: string;
		resource: string;
		output?: string;
	}


	/** Contains details about a resource timeout that occurred during an execution. */
	export interface TaskTimedOutEventDetails {
		resourceType: string;
		resource: string;
		error?: string;
		cause?: string;
	}


	/** Contains details about an execution failure event. */
	export interface ExecutionFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about the start of the execution. */
	export interface ExecutionStartedEventDetails {
		input?: string;
		roleArn?: string;
	}


	/** Contains details about the successful termination of the execution. */
	export interface ExecutionSucceededEventDetails {
		output?: string;
	}


	/** Contains details about an abort of an execution. */
	export interface ExecutionAbortedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about the execution timeout that occurred during the execution. */
	export interface ExecutionTimedOutEventDetails {
		error?: string;
		cause?: string;
	}


	/** Details about a Map state that was started. */
	export interface MapStateStartedEventDetails {
		length?: number;
	}


	/** Contains details about an iteration of a Map state. */
	export interface MapIterationEventDetails {
		name?: string;
		index?: number;
	}


	/** Contains details about a lambda function that failed during an execution. */
	export interface LambdaFunctionFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about a failed lambda function schedule event that occurred during an execution. */
	export interface LambdaFunctionScheduleFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about a lambda function scheduled during an execution. */
	export interface LambdaFunctionScheduledEventDetails {
		resource: string;
		input?: string;
		timeoutInSeconds?: number;
	}


	/** Contains details about a lambda function that failed to start during an execution. */
	export interface LambdaFunctionStartFailedEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about a lambda function that successfully terminated during an execution. */
	export interface LambdaFunctionSucceededEventDetails {
		output?: string;
	}


	/** Contains details about a lambda function timeout that occurred during an execution. */
	export interface LambdaFunctionTimedOutEventDetails {
		error?: string;
		cause?: string;
	}


	/** Contains details about a state entered during an execution. */
	export interface StateEnteredEventDetails {
		name: string;
		input?: string;
	}


	/** Contains details about an exit from a state during an execution. */
	export interface StateExitedEventDetails {
		name: string;
		output?: string;
	}

	export interface GetExecutionHistoryInput {
		executionArn: string;
		maxResults?: number;
		reverseOrder?: boolean;
		nextToken?: string;
	}

	export interface InvalidToken {
	}

	export interface ListActivitiesOutput {
		activities: Array<ActivityListItem>;
		nextToken?: string;
	}


	/** Contains details about an activity. */
	export interface ActivityListItem {
		activityArn: string;
		name: string;
		creationDate: Date;
	}

	export interface ListActivitiesInput {
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListExecutionsOutput {
		executions: Array<ExecutionListItem>;
		nextToken?: string;
	}


	/** Contains details about an execution. */
	export interface ExecutionListItem {
		executionArn: string;
		stateMachineArn: string;
		name: string;
		status: DescribeExecutionOutputStatus;
		startDate: Date;
		stopDate?: Date;
	}

	export interface ListExecutionsInput {
		stateMachineArn: string;
		statusFilter?: DescribeExecutionOutputStatus;
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListStateMachinesOutput {
		stateMachines: Array<StateMachineListItem>;
		nextToken?: string;
	}


	/** Contains details about the state machine. */
	export interface StateMachineListItem {
		stateMachineArn: string;
		name: string;
		type: CreateStateMachineInputType;
		creationDate: Date;
	}

	export interface ListStateMachinesInput {
		maxResults?: number;
		nextToken?: string;
	}

	export interface ListTagsForResourceOutput {
		tags?: Array<Tag>;
	}

	export interface ListTagsForResourceInput {
		resourceArn: string;
	}

	export interface ResourceNotFound {
	}

	export interface SendTaskFailureOutput {
	}

	export interface SendTaskFailureInput {
		taskToken: string;
		error?: string;
		cause?: string;
	}

	export interface TaskDoesNotExist {
	}

	export interface TaskTimedOut {
	}

	export interface SendTaskHeartbeatOutput {
	}

	export interface SendTaskHeartbeatInput {
		taskToken: string;
	}

	export interface SendTaskSuccessOutput {
	}

	export interface SendTaskSuccessInput {
		taskToken: string;
		output: string;
	}

	export interface InvalidOutput {
	}

	export interface StartExecutionOutput {
		executionArn: string;
		startDate: Date;
	}

	export interface StartExecutionInput {
		stateMachineArn: string;
		name?: string;
		input?: string;
	}

	export interface ExecutionLimitExceeded {
	}

	export interface ExecutionAlreadyExists {
	}

	export interface InvalidExecutionInput {
	}

	export interface StopExecutionOutput {
		stopDate: Date;
	}

	export interface StopExecutionInput {
		executionArn: string;
		error?: string;
		cause?: string;
	}

	export interface TagResourceOutput {
	}

	export interface TagResourceInput {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceOutput {
	}

	export interface UntagResourceInput {
		resourceArn: string;
		tagKeys: Array<string>;
	}

	export interface UpdateStateMachineOutput {
		updateDate: Date;
	}

	export interface UpdateStateMachineInput {
		stateMachineArn: string;
		definition?: string;
		roleArn?: string;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}

	export interface MissingRequiredParameter {
	}

	export enum StateMachineType { STANDARD = 0, EXPRESS = 1 }

	export enum ExecutionStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, TIMED_OUT = 3, ABORTED = 4 }

	export enum StateMachineStatus { ACTIVE = 0, DELETING = 1 }

	export enum LogLevel { ALL = 0, ERROR = 1, FATAL = 2, OFF = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.CreateActivity
		 * @return {CreateActivityOutput} Success
		 */
		CreateActivity(requestBody: CreateActivityInput): Observable<CreateActivityOutput> {
			return this.http.post<CreateActivityOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.CreateActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the AWS Step Functions User Guide.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, and <code>LoggingConfiguration</code>. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.CreateStateMachine
		 * @return {CreateStateMachineOutput} Success
		 */
		CreateStateMachine(requestBody: CreateStateMachineInput): Observable<CreateStateMachineOutput> {
			return this.http.post<CreateStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.CreateStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an activity.
		 * Post #X-Amz-Target=AWSStepFunctions.DeleteActivity
		 * @return {DeleteActivityOutput} Success
		 */
		DeleteActivity(requestBody: DeleteActivityInput): Observable<DeleteActivityOutput> {
			return this.http.post<DeleteActivityOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DeleteActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <note> <p>For <code>EXPRESS</code>state machines, the deletion will happen eventually (usually less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.DeleteStateMachine
		 * @return {DeleteStateMachineOutput} Success
		 */
		DeleteStateMachine(requestBody: DeleteStateMachineInput): Observable<DeleteStateMachineOutput> {
			return this.http.post<DeleteStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DeleteStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeActivity
		 * @return {DescribeActivityOutput} Success
		 */
		DescribeActivity(requestBody: DescribeActivityInput): Observable<DescribeActivityOutput> {
			return this.http.post<DescribeActivityOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes an execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeExecution
		 * @return {DescribeExecutionOutput} Success
		 */
		DescribeExecution(requestBody: DescribeExecutionInput): Observable<DescribeExecutionOutput> {
			return this.http.post<DescribeExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes a state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeStateMachine
		 * @return {DescribeStateMachineOutput} Success
		 */
		DescribeStateMachine(requestBody: DescribeStateMachineInput): Observable<DescribeStateMachineOutput> {
			return this.http.post<DescribeStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the state machine associated with a specific execution.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution
		 * @return {DescribeStateMachineForExecutionOutput} Success
		 */
		DescribeStateMachineForExecution(requestBody: DescribeStateMachineForExecutionInput): Observable<DescribeStateMachineForExecutionOutput> {
			return this.http.post<DescribeStateMachineForExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>
		 * Post #X-Amz-Target=AWSStepFunctions.GetActivityTask
		 * @return {GetActivityTaskOutput} Success
		 */
		GetActivityTask(requestBody: GetActivityTaskInput): Observable<GetActivityTaskOutput> {
			return this.http.post<GetActivityTaskOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.GetActivityTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the history of the specified execution as a list of events. By default, the results are returned in ascending order of the <code>timeStamp</code> of the events. Use the <code>reverseOrder</code> parameter to get the latest events first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.GetExecutionHistory
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetExecutionHistoryOutput} Success
		 */
		GetExecutionHistory(maxResults: string, nextToken: string, requestBody: GetExecutionHistoryInput): Observable<GetExecutionHistoryOutput> {
			return this.http.post<GetExecutionHistoryOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.GetExecutionHistory?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.ListActivities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListActivitiesOutput} Success
		 */
		ListActivities(maxResults: string, nextToken: string, requestBody: ListActivitiesInput): Observable<ListActivitiesOutput> {
			return this.http.post<ListActivitiesOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListActivities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the executions of a state machine that meet the filtering criteria. Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.ListExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExecutionsOutput} Success
		 */
		ListExecutions(maxResults: string, nextToken: string, requestBody: ListExecutionsInput): Observable<ListExecutionsOutput> {
			return this.http.post<ListExecutionsOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.ListStateMachines
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStateMachinesOutput} Success
		 */
		ListStateMachines(maxResults: string, nextToken: string, requestBody: ListStateMachinesInput): Observable<ListStateMachinesOutput> {
			return this.http.post<ListStateMachinesOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListStateMachines?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List tags for a given resource.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> failed.
		 * Post #X-Amz-Target=AWSStepFunctions.SendTaskFailure
		 * @return {SendTaskFailureOutput} Success
		 */
		SendTaskFailure(requestBody: SendTaskFailureInput): Observable<SendTaskFailureOutput> {
			return this.http.post<SendTaskFailureOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.SendTaskFailure', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report to Step Functions that the task represented by the specified <code>taskToken</code> is still making progress. This action resets the <code>Heartbeat</code> clock. The <code>Heartbeat</code> threshold is specified in the state machine's Amazon States Language definition (<code>HeartbeatSeconds</code>). This action does not in itself create an event in the execution history. However, if the task times out, the execution history contains an <code>ActivityTimedOut</code> entry for activities, or a <code>TaskTimedOut</code> entry for for tasks using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-sync">job run</a> or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern.</p> <note> <p>The <code>Timeout</code> of a task, defined in the state machine's Amazon States Language definition, is its maximum allowed duration, regardless of the number of <a>SendTaskHeartbeat</a> requests received. Use <code>HeartbeatSeconds</code> to configure the timeout interval for heartbeats.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat
		 * @return {SendTaskHeartbeatOutput} Success
		 */
		SendTaskHeartbeat(requestBody: SendTaskHeartbeatInput): Observable<SendTaskHeartbeatOutput> {
			return this.http.post<SendTaskHeartbeatOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by activity workers and task states using the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/connect-to-resource.html#connect-wait-token">callback</a> pattern to report that the task identified by the <code>taskToken</code> completed successfully.
		 * Post #X-Amz-Target=AWSStepFunctions.SendTaskSuccess
		 * @return {SendTaskSuccessOutput} Success
		 */
		SendTaskSuccess(requestBody: SendTaskSuccessInput): Observable<SendTaskSuccessOutput> {
			return this.http.post<SendTaskSuccessOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.SendTaskSuccess', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a state machine execution.</p> <note> <p> <code>StartExecution</code> is idempotent. If <code>StartExecution</code> is called with the same name and input as a running execution, the call will succeed and return the same response as the original request. If the execution is closed or if the input is different, it will return a 400 <code>ExecutionAlreadyExists</code> error. Names can be reused after 90 days. </p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.StartExecution
		 * @return {StartExecutionOutput} Success
		 */
		StartExecution(requestBody: StartExecutionInput): Observable<StartExecutionOutput> {
			return this.http.post<StartExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.StartExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an execution.</p> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.StopExecution
		 * @return {StopExecutionOutput} Success
		 */
		StopExecution(requestBody: StopExecutionInput): Observable<StopExecutionOutput> {
			return this.http.post<StopExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.StopExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.TagResource
		 * @return {TagResourceOutput} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove a tag from a Step Functions resource
		 * Post #X-Amz-Target=AWSStepFunctions.UntagResource
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<UntagResourceOutput> {
			return this.http.post<UntagResourceOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <note> <p>All <code>StartExecution</code> calls within a few seconds will use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after calling <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.UpdateStateMachine
		 * @return {UpdateStateMachineOutput} Success
		 */
		UpdateStateMachine(requestBody: UpdateStateMachineInput): Observable<UpdateStateMachineOutput> {
			return this.http.post<UpdateStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.UpdateStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateActivityX_Amz_Target { AWSStepFunctions_CreateActivity = 0 }

	export enum CreateStateMachineX_Amz_Target { AWSStepFunctions_CreateStateMachine = 0 }

	export enum DeleteActivityX_Amz_Target { AWSStepFunctions_DeleteActivity = 0 }

	export enum DeleteStateMachineX_Amz_Target { AWSStepFunctions_DeleteStateMachine = 0 }

	export enum DescribeActivityX_Amz_Target { AWSStepFunctions_DescribeActivity = 0 }

	export enum DescribeExecutionX_Amz_Target { AWSStepFunctions_DescribeExecution = 0 }

	export enum DescribeStateMachineX_Amz_Target { AWSStepFunctions_DescribeStateMachine = 0 }

	export enum DescribeStateMachineForExecutionX_Amz_Target { AWSStepFunctions_DescribeStateMachineForExecution = 0 }

	export enum GetActivityTaskX_Amz_Target { AWSStepFunctions_GetActivityTask = 0 }

	export enum GetExecutionHistoryX_Amz_Target { AWSStepFunctions_GetExecutionHistory = 0 }

	export enum ListActivitiesX_Amz_Target { AWSStepFunctions_ListActivities = 0 }

	export enum ListExecutionsX_Amz_Target { AWSStepFunctions_ListExecutions = 0 }

	export enum ListStateMachinesX_Amz_Target { AWSStepFunctions_ListStateMachines = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSStepFunctions_ListTagsForResource = 0 }

	export enum SendTaskFailureX_Amz_Target { AWSStepFunctions_SendTaskFailure = 0 }

	export enum SendTaskHeartbeatX_Amz_Target { AWSStepFunctions_SendTaskHeartbeat = 0 }

	export enum SendTaskSuccessX_Amz_Target { AWSStepFunctions_SendTaskSuccess = 0 }

	export enum StartExecutionX_Amz_Target { AWSStepFunctions_StartExecution = 0 }

	export enum StopExecutionX_Amz_Target { AWSStepFunctions_StopExecution = 0 }

	export enum TagResourceX_Amz_Target { AWSStepFunctions_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { AWSStepFunctions_UntagResource = 0 }

	export enum UpdateStateMachineX_Amz_Target { AWSStepFunctions_UpdateStateMachine = 0 }

}

