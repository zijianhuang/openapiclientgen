import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>  */
	export interface WorkflowExecutionCount {

		/** Required */
		count: number;
		truncated?: boolean | null;
	}

	/** Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>  */
	export interface WorkflowExecutionCountFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowExecutionCountFormGroup() {
		return new FormGroup<WorkflowExecutionCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CountClosedWorkflowExecutionsInput {

		/** Required */
		domain: string;
		startTimeFilter?: ExecutionTimeFilter;
		closeTimeFilter?: ExecutionTimeFilter;
		executionFilter?: WorkflowExecutionFilter;
		typeFilter?: WorkflowTypeFilter;
		tagFilter?: TagFilter;
		closeStatusFilter?: CloseStatusFilter;
	}
	export interface CountClosedWorkflowExecutionsInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountClosedWorkflowExecutionsInputFormGroup() {
		return new FormGroup<CountClosedWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>  */
	export interface ExecutionTimeFilter {

		/** Required */
		oldestDate: Date;
		latestDate?: Date;
	}

	/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>  */
	export interface ExecutionTimeFilterFormProperties {

		/** Required */
		oldestDate: FormControl<Date | null | undefined>,
		latestDate: FormControl<Date | null | undefined>,
	}
	export function CreateExecutionTimeFilterFormGroup() {
		return new FormGroup<ExecutionTimeFilterFormProperties>({
			oldestDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			latestDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
	export interface WorkflowExecutionFilter {

		/** Required */
		workflowId: string;
	}

	/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
	export interface WorkflowExecutionFilterFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionFilterFormGroup() {
		return new FormGroup<WorkflowExecutionFilterFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
	export interface WorkflowTypeFilter {

		/** Required */
		name: string;
		version?: string;
	}

	/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
	export interface WorkflowTypeFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeFilterFormGroup() {
		return new FormGroup<WorkflowTypeFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to filter the workflow executions in visibility APIs based on a tag. */
	export interface TagFilter {

		/** Required */
		tag: string;
	}

	/** Used to filter the workflow executions in visibility APIs based on a tag. */
	export interface TagFilterFormProperties {

		/** Required */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Used to filter the closed workflow executions in visibility APIs by their close status. */
	export interface CloseStatusFilter {

		/** Required */
		status: CloseStatus;
	}

	/** Used to filter the closed workflow executions in visibility APIs by their close status. */
	export interface CloseStatusFilterFormProperties {

		/** Required */
		status: FormControl<CloseStatus | null | undefined>,
	}
	export function CreateCloseStatusFilterFormGroup() {
		return new FormGroup<CloseStatusFilterFormProperties>({
			status: new FormControl<CloseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CloseStatus { COMPLETED = 0, FAILED = 1, CANCELED = 2, TERMINATED = 3, CONTINUED_AS_NEW = 4, TIMED_OUT = 5 }

	export interface UnknownResourceFault {
	}
	export interface UnknownResourceFaultFormProperties {
	}
	export function CreateUnknownResourceFaultFormGroup() {
		return new FormGroup<UnknownResourceFaultFormProperties>({
		});

	}

	export interface OperationNotPermittedFault {
	}
	export interface OperationNotPermittedFaultFormProperties {
	}
	export function CreateOperationNotPermittedFaultFormGroup() {
		return new FormGroup<OperationNotPermittedFaultFormProperties>({
		});

	}

	export interface CountOpenWorkflowExecutionsInput {

		/** Required */
		domain: string;

		/** Required */
		startTimeFilter: ExecutionTimeFilter;
		typeFilter?: WorkflowTypeFilter;
		tagFilter?: TagFilter;
		executionFilter?: WorkflowExecutionFilter;
	}
	export interface CountOpenWorkflowExecutionsInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountOpenWorkflowExecutionsInputFormGroup() {
		return new FormGroup<CountOpenWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the count of tasks in a task list. */
	export interface PendingTaskCount {

		/** Required */
		count: number;
		truncated?: boolean | null;
	}

	/** Contains the count of tasks in a task list. */
	export interface PendingTaskCountFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreatePendingTaskCountFormGroup() {
		return new FormGroup<PendingTaskCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CountPendingActivityTasksInput {

		/** Required */
		domain: string;

		/** Required */
		taskList: TaskList;
	}
	export interface CountPendingActivityTasksInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountPendingActivityTasksInputFormGroup() {
		return new FormGroup<CountPendingActivityTasksInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a task list. */
	export interface TaskList {

		/** Required */
		name: string;
	}

	/** Represents a task list. */
	export interface TaskListFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTaskListFormGroup() {
		return new FormGroup<TaskListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CountPendingDecisionTasksInput {

		/** Required */
		domain: string;

		/** Required */
		taskList: TaskList;
	}
	export interface CountPendingDecisionTasksInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountPendingDecisionTasksInputFormGroup() {
		return new FormGroup<CountPendingDecisionTasksInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeprecateActivityTypeInput {

		/** Required */
		domain: string;

		/** Required */
		activityType: ActivityType;
	}
	export interface DeprecateActivityTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateActivityTypeInputFormGroup() {
		return new FormGroup<DeprecateActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an activity type. */
	export interface ActivityType {

		/** Required */
		name: string;

		/** Required */
		version: string;
	}

	/** Represents an activity type. */
	export interface ActivityTypeFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeFormGroup() {
		return new FormGroup<ActivityTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TypeDeprecatedFault {
	}
	export interface TypeDeprecatedFaultFormProperties {
	}
	export function CreateTypeDeprecatedFaultFormGroup() {
		return new FormGroup<TypeDeprecatedFaultFormProperties>({
		});

	}

	export interface DeprecateDomainInput {

		/** Required */
		name: string;
	}
	export interface DeprecateDomainInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateDomainInputFormGroup() {
		return new FormGroup<DeprecateDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainDeprecatedFault {
	}
	export interface DomainDeprecatedFaultFormProperties {
	}
	export function CreateDomainDeprecatedFaultFormGroup() {
		return new FormGroup<DomainDeprecatedFaultFormProperties>({
		});

	}

	export interface DeprecateWorkflowTypeInput {

		/** Required */
		domain: string;

		/** Required */
		workflowType: WorkflowType;
	}
	export interface DeprecateWorkflowTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateWorkflowTypeInputFormGroup() {
		return new FormGroup<DeprecateWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a workflow type. */
	export interface WorkflowType {

		/** Required */
		name: string;

		/** Required */
		version: string;
	}

	/** Represents a workflow type. */
	export interface WorkflowTypeFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeFormGroup() {
		return new FormGroup<WorkflowTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Detailed information about an activity type. */
	export interface ActivityTypeDetail {

		/** Required */
		typeInfo: ActivityTypeInfo;

		/** Required */
		configuration: ActivityTypeConfiguration;
	}

	/** Detailed information about an activity type. */
	export interface ActivityTypeDetailFormProperties {
	}
	export function CreateActivityTypeDetailFormGroup() {
		return new FormGroup<ActivityTypeDetailFormProperties>({
		});

	}


	/** Detailed information about an activity type. */
	export interface ActivityTypeInfo {

		/** Required */
		activityType: ActivityType;

		/** Required */
		status: RegistrationStatus;
		description?: string;

		/** Required */
		creationDate: Date;
		deprecationDate?: Date;
	}

	/** Detailed information about an activity type. */
	export interface ActivityTypeInfoFormProperties {

		/** Required */
		status: FormControl<RegistrationStatus | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		deprecationDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivityTypeInfoFormGroup() {
		return new FormGroup<ActivityTypeInfoFormProperties>({
			status: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deprecationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RegistrationStatus { REGISTERED = 0, DEPRECATED = 1 }


	/** Configuration settings registered with the activity type. */
	export interface ActivityTypeConfiguration {
		defaultTaskStartToCloseTimeout?: string;
		defaultTaskHeartbeatTimeout?: string;
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string;
		defaultTaskScheduleToStartTimeout?: string;
		defaultTaskScheduleToCloseTimeout?: string;
	}

	/** Configuration settings registered with the activity type. */
	export interface ActivityTypeConfigurationFormProperties {
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskHeartbeatTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultTaskScheduleToStartTimeout: FormControl<string | null | undefined>,
		defaultTaskScheduleToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeConfigurationFormGroup() {
		return new FormGroup<ActivityTypeConfigurationFormProperties>({
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskHeartbeatTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToStartTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeActivityTypeInput {

		/** Required */
		domain: string;

		/** Required */
		activityType: ActivityType;
	}
	export interface DescribeActivityTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivityTypeInputFormGroup() {
		return new FormGroup<DescribeActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details of a domain. */
	export interface DomainDetail {

		/** Required */
		domainInfo: DomainInfo;

		/** Required */
		configuration: DomainConfiguration;
	}

	/** Contains details of a domain. */
	export interface DomainDetailFormProperties {
	}
	export function CreateDomainDetailFormGroup() {
		return new FormGroup<DomainDetailFormProperties>({
		});

	}


	/** Contains general information about a domain. */
	export interface DomainInfo {

		/** Required */
		name: string;

		/** Required */
		status: RegistrationStatus;
		description?: string;
		arn?: string;
	}

	/** Contains general information about a domain. */
	export interface DomainInfoFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<RegistrationStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDomainInfoFormGroup() {
		return new FormGroup<DomainInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the configuration settings of a domain. */
	export interface DomainConfiguration {

		/** Required */
		workflowExecutionRetentionPeriodInDays: string;
	}

	/** Contains the configuration settings of a domain. */
	export interface DomainConfigurationFormProperties {

		/** Required */
		workflowExecutionRetentionPeriodInDays: FormControl<string | null | undefined>,
	}
	export function CreateDomainConfigurationFormGroup() {
		return new FormGroup<DomainConfigurationFormProperties>({
			workflowExecutionRetentionPeriodInDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDomainInput {

		/** Required */
		name: string;
	}
	export interface DescribeDomainInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainInputFormGroup() {
		return new FormGroup<DescribeDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about a workflow execution. */
	export interface WorkflowExecutionDetail {

		/** Required */
		executionInfo: WorkflowExecutionInfo;

		/** Required */
		executionConfiguration: WorkflowExecutionConfiguration;

		/** Required */
		openCounts: WorkflowExecutionOpenCounts;
		latestActivityTaskTimestamp?: Date;
		latestExecutionContext?: string;
	}

	/** Contains details about a workflow execution. */
	export interface WorkflowExecutionDetailFormProperties {
		latestActivityTaskTimestamp: FormControl<Date | null | undefined>,
		latestExecutionContext: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionDetailFormGroup() {
		return new FormGroup<WorkflowExecutionDetailFormProperties>({
			latestActivityTaskTimestamp: new FormControl<Date | null | undefined>(undefined),
			latestExecutionContext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a workflow execution. */
	export interface WorkflowExecutionInfo {

		/** Required */
		execution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		startTimestamp: Date;
		closeTimestamp?: Date;

		/** Required */
		executionStatus: ExecutionStatus;
		closeStatus?: CloseStatus;
		parent?: WorkflowExecution;
		tagList?: Array<string>;
		cancelRequested?: boolean | null;
	}

	/** Contains information about a workflow execution. */
	export interface WorkflowExecutionInfoFormProperties {

		/** Required */
		startTimestamp: FormControl<Date | null | undefined>,
		closeTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		executionStatus: FormControl<ExecutionStatus | null | undefined>,
		closeStatus: FormControl<CloseStatus | null | undefined>,
		cancelRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowExecutionInfoFormGroup() {
		return new FormGroup<WorkflowExecutionInfoFormProperties>({
			startTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			closeTimestamp: new FormControl<Date | null | undefined>(undefined),
			executionStatus: new FormControl<ExecutionStatus | null | undefined>(undefined, [Validators.required]),
			closeStatus: new FormControl<CloseStatus | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a workflow execution. */
	export interface WorkflowExecution {

		/** Required */
		workflowId: string;

		/** Required */
		runId: string;
	}

	/** Represents a workflow execution. */
	export interface WorkflowExecutionFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,

		/** Required */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionFormGroup() {
		return new FormGroup<WorkflowExecutionFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExecutionStatus { OPEN = 0, CLOSED = 1 }


	/** The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution. */
	export interface WorkflowExecutionConfiguration {

		/** Required */
		taskStartToCloseTimeout: string;

		/** Required */
		executionStartToCloseTimeout: string;

		/** Required */
		taskList: TaskList;
		taskPriority?: string;

		/** Required */
		childPolicy: ChildPolicy;
		lambdaRole?: string;
	}

	/** The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution. */
	export interface WorkflowExecutionConfigurationFormProperties {

		/** Required */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionConfigurationFormGroup() {
		return new FormGroup<WorkflowExecutionConfigurationFormProperties>({
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChildPolicy { TERMINATE = 0, REQUEST_CANCEL = 1, ABANDON = 2 }


	/** Contains the counts of open tasks, child workflow executions and timers for a workflow execution. */
	export interface WorkflowExecutionOpenCounts {

		/** Required */
		openActivityTasks: number;

		/** Required */
		openDecisionTasks: number;

		/** Required */
		openTimers: number;

		/** Required */
		openChildWorkflowExecutions: number;
		openLambdaFunctions?: number | null;
	}

	/** Contains the counts of open tasks, child workflow executions and timers for a workflow execution. */
	export interface WorkflowExecutionOpenCountsFormProperties {

		/** Required */
		openActivityTasks: FormControl<number | null | undefined>,

		/** Required */
		openDecisionTasks: FormControl<number | null | undefined>,

		/** Required */
		openTimers: FormControl<number | null | undefined>,

		/** Required */
		openChildWorkflowExecutions: FormControl<number | null | undefined>,
		openLambdaFunctions: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionOpenCountsFormGroup() {
		return new FormGroup<WorkflowExecutionOpenCountsFormProperties>({
			openActivityTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openDecisionTasks: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openTimers: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openChildWorkflowExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			openLambdaFunctions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkflowExecutionInput {

		/** Required */
		domain: string;

		/** Required */
		execution: WorkflowExecution;
	}
	export interface DescribeWorkflowExecutionInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkflowExecutionInputFormGroup() {
		return new FormGroup<DescribeWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about a workflow type. */
	export interface WorkflowTypeDetail {

		/** Required */
		typeInfo: WorkflowTypeInfo;

		/** Required */
		configuration: WorkflowTypeConfiguration;
	}

	/** Contains details about a workflow type. */
	export interface WorkflowTypeDetailFormProperties {
	}
	export function CreateWorkflowTypeDetailFormGroup() {
		return new FormGroup<WorkflowTypeDetailFormProperties>({
		});

	}


	/** Contains information about a workflow type. */
	export interface WorkflowTypeInfo {

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		status: RegistrationStatus;
		description?: string;

		/** Required */
		creationDate: Date;
		deprecationDate?: Date;
	}

	/** Contains information about a workflow type. */
	export interface WorkflowTypeInfoFormProperties {

		/** Required */
		status: FormControl<RegistrationStatus | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		deprecationDate: FormControl<Date | null | undefined>,
	}
	export function CreateWorkflowTypeInfoFormGroup() {
		return new FormGroup<WorkflowTypeInfoFormProperties>({
			status: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deprecationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The configuration settings of a workflow type. */
	export interface WorkflowTypeConfiguration {
		defaultTaskStartToCloseTimeout?: string;
		defaultExecutionStartToCloseTimeout?: string;
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string;
		defaultChildPolicy?: ChildPolicy;
		defaultLambdaRole?: string;
	}

	/** The configuration settings of a workflow type. */
	export interface WorkflowTypeConfigurationFormProperties {
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultExecutionStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultChildPolicy: FormControl<ChildPolicy | null | undefined>,
		defaultLambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeConfigurationFormGroup() {
		return new FormGroup<WorkflowTypeConfigurationFormProperties>({
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultExecutionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultChildPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
			defaultLambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeWorkflowTypeInput {

		/** Required */
		domain: string;

		/** Required */
		workflowType: WorkflowType;
	}
	export interface DescribeWorkflowTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkflowTypeInputFormGroup() {
		return new FormGroup<DescribeWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution. */
	export interface History {

		/** Required */
		events: Array<HistoryEvent>;
		nextPageToken?: string;
	}

	/** Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution. */
	export interface HistoryFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul> */
	export interface HistoryEvent {

		/** Required */
		eventTimestamp: Date;

		/** Required */
		eventType: EventType;

		/** Required */
		eventId: number;
		workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
		workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
		completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
		workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
		failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
		workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
		workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
		cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
		workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
		continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
		workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
		workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
		decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
		decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
		decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
		decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
		activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
		activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
		activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
		activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
		activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
		activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
		activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
		workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
		markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
		recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;
		timerStartedEventAttributes?: TimerStartedEventAttributes;
		timerFiredEventAttributes?: TimerFiredEventAttributes;
		timerCanceledEventAttributes?: TimerCanceledEventAttributes;
		startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
		childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
		childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
		childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
		childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
		childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
		childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
		signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
		externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
		signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
		externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
		requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
		requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
		scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
		requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
		startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
		cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
		startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
		lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;
		lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;
		lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;
		lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;
		lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;
		scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;
		startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
	}

	/** <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul> */
	export interface HistoryEventFormProperties {

		/** Required */
		eventTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		eventType: FormControl<EventType | null | undefined>,

		/** Required */
		eventId: FormControl<number | null | undefined>,
	}
	export function CreateHistoryEventFormGroup() {
		return new FormGroup<HistoryEventFormProperties>({
			eventTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { WorkflowExecutionStarted = 0, WorkflowExecutionCancelRequested = 1, WorkflowExecutionCompleted = 2, CompleteWorkflowExecutionFailed = 3, WorkflowExecutionFailed = 4, FailWorkflowExecutionFailed = 5, WorkflowExecutionTimedOut = 6, WorkflowExecutionCanceled = 7, CancelWorkflowExecutionFailed = 8, WorkflowExecutionContinuedAsNew = 9, ContinueAsNewWorkflowExecutionFailed = 10, WorkflowExecutionTerminated = 11, DecisionTaskScheduled = 12, DecisionTaskStarted = 13, DecisionTaskCompleted = 14, DecisionTaskTimedOut = 15, ActivityTaskScheduled = 16, ScheduleActivityTaskFailed = 17, ActivityTaskStarted = 18, ActivityTaskCompleted = 19, ActivityTaskFailed = 20, ActivityTaskTimedOut = 21, ActivityTaskCanceled = 22, ActivityTaskCancelRequested = 23, RequestCancelActivityTaskFailed = 24, WorkflowExecutionSignaled = 25, MarkerRecorded = 26, RecordMarkerFailed = 27, TimerStarted = 28, StartTimerFailed = 29, TimerFired = 30, TimerCanceled = 31, CancelTimerFailed = 32, StartChildWorkflowExecutionInitiated = 33, StartChildWorkflowExecutionFailed = 34, ChildWorkflowExecutionStarted = 35, ChildWorkflowExecutionCompleted = 36, ChildWorkflowExecutionFailed = 37, ChildWorkflowExecutionTimedOut = 38, ChildWorkflowExecutionCanceled = 39, ChildWorkflowExecutionTerminated = 40, SignalExternalWorkflowExecutionInitiated = 41, SignalExternalWorkflowExecutionFailed = 42, ExternalWorkflowExecutionSignaled = 43, RequestCancelExternalWorkflowExecutionInitiated = 44, RequestCancelExternalWorkflowExecutionFailed = 45, ExternalWorkflowExecutionCancelRequested = 46, LambdaFunctionScheduled = 47, LambdaFunctionStarted = 48, LambdaFunctionCompleted = 49, LambdaFunctionFailed = 50, LambdaFunctionTimedOut = 51, ScheduleLambdaFunctionFailed = 52, StartLambdaFunctionFailed = 53 }


	/** Provides details of <code>WorkflowExecutionStarted</code> event. */
	export interface WorkflowExecutionStartedEventAttributes {
		input?: string;
		executionStartToCloseTimeout?: string;
		taskStartToCloseTimeout?: string;

		/** Required */
		childPolicy: ChildPolicy;

		/** Required */
		taskList: TaskList;
		taskPriority?: string;

		/** Required */
		workflowType: WorkflowType;
		tagList?: Array<string>;
		continuedExecutionRunId?: string;
		parentWorkflowExecution?: WorkflowExecution;
		parentInitiatedEventId?: number | null;
		lambdaRole?: string;
	}

	/** Provides details of <code>WorkflowExecutionStarted</code> event. */
	export interface WorkflowExecutionStartedEventAttributesFormProperties {
		input: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		continuedExecutionRunId: FormControl<string | null | undefined>,
		parentInitiatedEventId: FormControl<number | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionStartedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionStartedEventAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			continuedExecutionRunId: new FormControl<string | null | undefined>(undefined),
			parentInitiatedEventId: new FormControl<number | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionCompleted</code> event. */
	export interface WorkflowExecutionCompletedEventAttributes {
		result?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionCompleted</code> event. */
	export interface WorkflowExecutionCompletedEventAttributesFormProperties {
		result: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionCompletedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event. */
	export interface CompleteWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event. */
	export interface CompleteWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCompleteWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<CompleteWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CompleteWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>WorkflowExecutionFailed</code> event. */
	export interface WorkflowExecutionFailedEventAttributes {
		reason?: string;
		details?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionFailed</code> event. */
	export interface WorkflowExecutionFailedEventAttributesFormProperties {
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>FailWorkflowExecutionFailed</code> event. */
	export interface FailWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>FailWorkflowExecutionFailed</code> event. */
	export interface FailWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateFailWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<FailWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionTimedOut</code> event. */
	export interface WorkflowExecutionTimedOutEventAttributes {

		/** Required */
		timeoutType: WorkflowExecutionTimeoutType;

		/** Required */
		childPolicy: ChildPolicy;
	}

	/** Provides the details of the <code>WorkflowExecutionTimedOut</code> event. */
	export interface WorkflowExecutionTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimeoutType | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
	}
	export function CreateWorkflowExecutionTimedOutEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimeoutType | null | undefined>(undefined, [Validators.required]),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WorkflowExecutionTimeoutType { START_TO_CLOSE = 0 }


	/** Provides the details of the <code>WorkflowExecutionCanceled</code> event. */
	export interface WorkflowExecutionCanceledEventAttributes {
		details?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionCanceled</code> event. */
	export interface WorkflowExecutionCanceledEventAttributesFormProperties {
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionCanceledEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>CancelWorkflowExecutionFailed</code> event. */
	export interface CancelWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CancelWorkflowExecutionFailed</code> event. */
	export interface CancelWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCancelWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<CancelWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event. */
	export interface WorkflowExecutionContinuedAsNewEventAttributes {
		input?: string;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Required */
		newExecutionRunId: string;
		executionStartToCloseTimeout?: string;

		/** Required */
		taskList: TaskList;
		taskPriority?: string;
		taskStartToCloseTimeout?: string;

		/** Required */
		childPolicy: ChildPolicy;
		tagList?: Array<string>;

		/** Required */
		workflowType: WorkflowType;
		lambdaRole?: string;
	}

	/** Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event. */
	export interface WorkflowExecutionContinuedAsNewEventAttributesFormProperties {
		input: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Required */
		newExecutionRunId: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionContinuedAsNewEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionContinuedAsNewEventAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newExecutionRunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event. */
	export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: ContinueAsNewWorkflowExecutionFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event. */
	export interface ContinueAsNewWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<ContinueAsNewWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateContinueAsNewWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<ContinueAsNewWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<ContinueAsNewWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContinueAsNewWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, WORKFLOW_TYPE_DEPRECATED = 1, WORKFLOW_TYPE_DOES_NOT_EXIST = 2, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 3, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 4, DEFAULT_TASK_LIST_UNDEFINED = 5, DEFAULT_CHILD_POLICY_UNDEFINED = 6, CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED = 7, OPERATION_NOT_PERMITTED = 8 }


	/** Provides the details of the <code>WorkflowExecutionTerminated</code> event. */
	export interface WorkflowExecutionTerminatedEventAttributes {
		reason?: string;
		details?: string;

		/** Required */
		childPolicy: ChildPolicy;
		cause?: WorkflowExecutionTerminatedCause;
	}

	/** Provides the details of the <code>WorkflowExecutionTerminated</code> event. */
	export interface WorkflowExecutionTerminatedEventAttributesFormProperties {
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		cause: FormControl<WorkflowExecutionTerminatedCause | null | undefined>,
	}
	export function CreateWorkflowExecutionTerminatedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionTerminatedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<WorkflowExecutionTerminatedCause | null | undefined>(undefined),
		});

	}

	export enum WorkflowExecutionTerminatedCause { CHILD_POLICY_APPLIED = 0, EVENT_LIMIT_EXCEEDED = 1, OPERATOR_INITIATED = 2 }


	/** Provides the details of the <code>WorkflowExecutionCancelRequested</code> event. */
	export interface WorkflowExecutionCancelRequestedEventAttributes {
		externalWorkflowExecution?: WorkflowExecution;
		externalInitiatedEventId?: number | null;
		cause?: WorkflowExecutionCancelRequestedCause;
	}

	/** Provides the details of the <code>WorkflowExecutionCancelRequested</code> event. */
	export interface WorkflowExecutionCancelRequestedEventAttributesFormProperties {
		externalInitiatedEventId: FormControl<number | null | undefined>,
		cause: FormControl<WorkflowExecutionCancelRequestedCause | null | undefined>,
	}
	export function CreateWorkflowExecutionCancelRequestedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCancelRequestedEventAttributesFormProperties>({
			externalInitiatedEventId: new FormControl<number | null | undefined>(undefined),
			cause: new FormControl<WorkflowExecutionCancelRequestedCause | null | undefined>(undefined),
		});

	}

	export enum WorkflowExecutionCancelRequestedCause { CHILD_POLICY_APPLIED = 0 }


	/** Provides details about the <code>DecisionTaskScheduled</code> event. */
	export interface DecisionTaskScheduledEventAttributes {

		/** Required */
		taskList: TaskList;
		taskPriority?: string;
		startToCloseTimeout?: string;
	}

	/** Provides details about the <code>DecisionTaskScheduled</code> event. */
	export interface DecisionTaskScheduledEventAttributesFormProperties {
		taskPriority: FormControl<string | null | undefined>,
		startToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateDecisionTaskScheduledEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskScheduledEventAttributesFormProperties>({
			taskPriority: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>DecisionTaskStarted</code> event. */
	export interface DecisionTaskStartedEventAttributes {
		identity?: string;

		/** Required */
		scheduledEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskStarted</code> event. */
	export interface DecisionTaskStartedEventAttributesFormProperties {
		identity: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskStartedEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskStartedEventAttributesFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>DecisionTaskCompleted</code> event. */
	export interface DecisionTaskCompletedEventAttributes {
		executionContext?: string;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskCompleted</code> event. */
	export interface DecisionTaskCompletedEventAttributesFormProperties {
		executionContext: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskCompletedEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskCompletedEventAttributesFormProperties>({
			executionContext: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>DecisionTaskTimedOut</code> event. */
	export interface DecisionTaskTimedOutEventAttributes {

		/** Required */
		timeoutType: WorkflowExecutionTimeoutType;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskTimedOut</code> event. */
	export interface DecisionTaskTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimeoutType | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskTimedOutEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimeoutType | null | undefined>(undefined, [Validators.required]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskScheduled</code> event. */
	export interface ActivityTaskScheduledEventAttributes {

		/** Required */
		activityType: ActivityType;

		/** Required */
		activityId: string;
		input?: string;
		control?: string;
		scheduleToStartTimeout?: string;
		scheduleToCloseTimeout?: string;
		startToCloseTimeout?: string;

		/** Required */
		taskList: TaskList;
		taskPriority?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
		heartbeatTimeout?: string;
	}

	/** Provides the details of the <code>ActivityTaskScheduled</code> event. */
	export interface ActivityTaskScheduledEventAttributesFormProperties {

		/** Required */
		activityId: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		scheduleToStartTimeout: FormControl<string | null | undefined>,
		scheduleToCloseTimeout: FormControl<string | null | undefined>,
		startToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		heartbeatTimeout: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskScheduledEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskScheduledEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			control: new FormControl<string | null | undefined>(undefined),
			scheduleToStartTimeout: new FormControl<string | null | undefined>(undefined),
			scheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			heartbeatTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ActivityTaskStarted</code> event. */
	export interface ActivityTaskStartedEventAttributes {
		identity?: string;

		/** Required */
		scheduledEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskStarted</code> event. */
	export interface ActivityTaskStartedEventAttributesFormProperties {
		identity: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskStartedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskStartedEventAttributesFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskCompleted</code> event. */
	export interface ActivityTaskCompletedEventAttributes {
		result?: string;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskCompleted</code> event. */
	export interface ActivityTaskCompletedEventAttributesFormProperties {
		result: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskCompletedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskFailed</code> event. */
	export interface ActivityTaskFailedEventAttributes {
		reason?: string;
		details?: string;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskFailed</code> event. */
	export interface ActivityTaskFailedEventAttributesFormProperties {
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskTimedOut</code> event. */
	export interface ActivityTaskTimedOutEventAttributes {

		/** Required */
		timeoutType: ActivityTaskTimeoutType;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		details?: string;
	}

	/** Provides the details of the <code>ActivityTaskTimedOut</code> event. */
	export interface ActivityTaskTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<ActivityTaskTimeoutType | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskTimedOutEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<ActivityTaskTimeoutType | null | undefined>(undefined, [Validators.required]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityTaskTimeoutType { START_TO_CLOSE = 0, SCHEDULE_TO_START = 1, SCHEDULE_TO_CLOSE = 2, HEARTBEAT = 3 }


	/** Provides the details of the <code>ActivityTaskCanceled</code> event. */
	export interface ActivityTaskCanceledEventAttributes {
		details?: string;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		latestCancelRequestedEventId?: number | null;
	}

	/** Provides the details of the <code>ActivityTaskCanceled</code> event. */
	export interface ActivityTaskCanceledEventAttributesFormProperties {
		details: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		latestCancelRequestedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskCanceledEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latestCancelRequestedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ActivityTaskCancelRequested</code> event. */
	export interface ActivityTaskCancelRequestedEventAttributes {

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Required */
		activityId: string;
	}

	/** Provides the details of the <code>ActivityTaskCancelRequested</code> event. */
	export interface ActivityTaskCancelRequestedEventAttributesFormProperties {

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Required */
		activityId: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskCancelRequestedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCancelRequestedEventAttributesFormProperties>({
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionSignaled</code> event. */
	export interface WorkflowExecutionSignaledEventAttributes {

		/** Required */
		signalName: string;
		input?: string;
		externalWorkflowExecution?: WorkflowExecution;
		externalInitiatedEventId?: number | null;
	}

	/** Provides the details of the <code>WorkflowExecutionSignaled</code> event. */
	export interface WorkflowExecutionSignaledEventAttributesFormProperties {

		/** Required */
		signalName: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		externalInitiatedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionSignaledEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionSignaledEventAttributesFormProperties>({
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			externalInitiatedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>MarkerRecorded</code> event. */
	export interface MarkerRecordedEventAttributes {

		/** Required */
		markerName: string;
		details?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>MarkerRecorded</code> event. */
	export interface MarkerRecordedEventAttributesFormProperties {

		/** Required */
		markerName: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateMarkerRecordedEventAttributesFormGroup() {
		return new FormGroup<MarkerRecordedEventAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>RecordMarkerFailed</code> event. */
	export interface RecordMarkerFailedEventAttributes {

		/** Required */
		markerName: string;

		/** Required */
		cause: RecordMarkerFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>RecordMarkerFailed</code> event. */
	export interface RecordMarkerFailedEventAttributesFormProperties {

		/** Required */
		markerName: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RecordMarkerFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateRecordMarkerFailedEventAttributesFormGroup() {
		return new FormGroup<RecordMarkerFailedEventAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<RecordMarkerFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordMarkerFailedCause { OPERATION_NOT_PERMITTED = 0 }


	/** Provides the details of the <code>TimerStarted</code> event. */
	export interface TimerStartedEventAttributes {

		/** Required */
		timerId: string;
		control?: string;

		/** Required */
		startToFireTimeout: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>TimerStarted</code> event. */
	export interface TimerStartedEventAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,

		/** Required */
		startToFireTimeout: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerStartedEventAttributesFormGroup() {
		return new FormGroup<TimerStartedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			startToFireTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>TimerFired</code> event. */
	export interface TimerFiredEventAttributes {

		/** Required */
		timerId: string;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>TimerFired</code> event. */
	export interface TimerFiredEventAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerFiredEventAttributesFormGroup() {
		return new FormGroup<TimerFiredEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Provides the details of the <code>TimerCanceled</code> event.  */
	export interface TimerCanceledEventAttributes {

		/** Required */
		timerId: string;

		/** Required */
		startedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/**  Provides the details of the <code>TimerCanceled</code> event.  */
	export interface TimerCanceledEventAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerCanceledEventAttributesFormGroup() {
		return new FormGroup<TimerCanceledEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event. */
	export interface StartChildWorkflowExecutionInitiatedEventAttributes {

		/** Required */
		workflowId: string;

		/** Required */
		workflowType: WorkflowType;
		control?: string;
		input?: string;
		executionStartToCloseTimeout?: string;

		/** Required */
		taskList: TaskList;
		taskPriority?: string;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Required */
		childPolicy: ChildPolicy;
		taskStartToCloseTimeout?: string;
		tagList?: Array<string>;
		lambdaRole?: string;
	}

	/** Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event. */
	export interface StartChildWorkflowExecutionInitiatedEventAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Required */
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined, [Validators.required]),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionStarted</code> event. */
	export interface ChildWorkflowExecutionStartedEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		initiatedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionStarted</code> event. */
	export interface ChildWorkflowExecutionStartedEventAttributesFormProperties {

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionStartedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionStartedEventAttributesFormProperties>({
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event. */
	export interface ChildWorkflowExecutionCompletedEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;
		result?: string;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event. */
	export interface ChildWorkflowExecutionCompletedEventAttributesFormProperties {
		result: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionCompletedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionFailed</code> event. */
	export interface ChildWorkflowExecutionFailedEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;
		reason?: string;
		details?: string;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionFailed</code> event. */
	export interface ChildWorkflowExecutionFailedEventAttributesFormProperties {
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event. */
	export interface ChildWorkflowExecutionTimedOutEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		timeoutType: WorkflowExecutionTimeoutType;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event. */
	export interface ChildWorkflowExecutionTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimeoutType | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionTimedOutEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimeoutType | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provide details of the <code>ChildWorkflowExecutionCanceled</code> event. */
	export interface ChildWorkflowExecutionCanceledEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;
		details?: string;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provide details of the <code>ChildWorkflowExecutionCanceled</code> event. */
	export interface ChildWorkflowExecutionCanceledEventAttributesFormProperties {
		details: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionCanceledEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event. */
	export interface ChildWorkflowExecutionTerminatedEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event. */
	export interface ChildWorkflowExecutionTerminatedEventAttributesFormProperties {

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionTerminatedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionTerminatedEventAttributesFormProperties>({
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event. */
	export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		signalName: string;
		input?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
		control?: string;
	}

	/** Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event. */
	export interface SignalExternalWorkflowExecutionInitiatedEventAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		signalName: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event. */
	export interface ExternalWorkflowExecutionSignaledEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		initiatedEventId: number;
	}

	/** Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event. */
	export interface ExternalWorkflowExecutionSignaledEventAttributesFormProperties {

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,
	}
	export function CreateExternalWorkflowExecutionSignaledEventAttributesFormGroup() {
		return new FormGroup<ExternalWorkflowExecutionSignaledEventAttributesFormProperties>({
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event. */
	export interface SignalExternalWorkflowExecutionFailedEventAttributes {

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		cause: SignalExternalWorkflowExecutionFailedCause;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;
		control?: string;
	}

	/** Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event. */
	export interface SignalExternalWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<SignalExternalWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionFailedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<SignalExternalWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SignalExternalWorkflowExecutionFailedCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }


	/** Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event. */
	export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		initiatedEventId: number;
	}

	/** Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event. */
	export interface ExternalWorkflowExecutionCancelRequestedEventAttributesFormProperties {

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,
	}
	export function CreateExternalWorkflowExecutionCancelRequestedEventAttributesFormGroup() {
		return new FormGroup<ExternalWorkflowExecutionCancelRequestedEventAttributesFormProperties>({
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event. */
	export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
		control?: string;
	}

	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event. */
	export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event. */
	export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		cause: RequestCancelExternalWorkflowExecutionFailedCause;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;
		control?: string;
	}

	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event. */
	export interface RequestCancelExternalWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RequestCancelExternalWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionFailedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<RequestCancelExternalWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RequestCancelExternalWorkflowExecutionFailedCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }


	/** Provides the details of the <code>ScheduleActivityTaskFailed</code> event. */
	export interface ScheduleActivityTaskFailedEventAttributes {

		/** Required */
		activityType: ActivityType;

		/** Required */
		activityId: string;

		/** Required */
		cause: ScheduleActivityTaskFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ScheduleActivityTaskFailed</code> event. */
	export interface ScheduleActivityTaskFailedEventAttributesFormProperties {

		/** Required */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<ScheduleActivityTaskFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateScheduleActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<ScheduleActivityTaskFailedEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<ScheduleActivityTaskFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleActivityTaskFailedCause { ACTIVITY_TYPE_DEPRECATED = 0, ACTIVITY_TYPE_DOES_NOT_EXIST = 1, ACTIVITY_ID_ALREADY_IN_USE = 2, OPEN_ACTIVITIES_LIMIT_EXCEEDED = 3, ACTIVITY_CREATION_RATE_EXCEEDED = 4, DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED = 5, DEFAULT_TASK_LIST_UNDEFINED = 6, DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED = 7, DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }


	/** Provides the details of the <code>RequestCancelActivityTaskFailed</code> event. */
	export interface RequestCancelActivityTaskFailedEventAttributes {

		/** Required */
		activityId: string;

		/** Required */
		cause: RequestCancelActivityTaskFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>RequestCancelActivityTaskFailed</code> event. */
	export interface RequestCancelActivityTaskFailedEventAttributesFormProperties {

		/** Required */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RequestCancelActivityTaskFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateRequestCancelActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelActivityTaskFailedEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<RequestCancelActivityTaskFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RequestCancelActivityTaskFailedCause { ACTIVITY_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>StartTimerFailed</code> event. */
	export interface StartTimerFailedEventAttributes {

		/** Required */
		timerId: string;

		/** Required */
		cause: StartTimerFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>StartTimerFailed</code> event. */
	export interface StartTimerFailedEventAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<StartTimerFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateStartTimerFailedEventAttributesFormGroup() {
		return new FormGroup<StartTimerFailedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<StartTimerFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StartTimerFailedCause { TIMER_ID_ALREADY_IN_USE = 0, OPEN_TIMERS_LIMIT_EXCEEDED = 1, TIMER_CREATION_RATE_EXCEEDED = 2, OPERATION_NOT_PERMITTED = 3 }


	/** Provides the details of the <code>CancelTimerFailed</code> event. */
	export interface CancelTimerFailedEventAttributes {

		/** Required */
		timerId: string;

		/** Required */
		cause: CancelTimerFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CancelTimerFailed</code> event. */
	export interface CancelTimerFailedEventAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<CancelTimerFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCancelTimerFailedEventAttributesFormGroup() {
		return new FormGroup<CancelTimerFailedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<CancelTimerFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancelTimerFailedCause { TIMER_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event. */
	export interface StartChildWorkflowExecutionFailedEventAttributes {

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		cause: StartChildWorkflowExecutionFailedCause;

		/** Required */
		workflowId: string;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;
		control?: string;
	}

	/** Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event. */
	export interface StartChildWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<StartChildWorkflowExecutionFailedCause | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<StartChildWorkflowExecutionFailedCause | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartChildWorkflowExecutionFailedCause { WORKFLOW_TYPE_DOES_NOT_EXIST = 0, WORKFLOW_TYPE_DEPRECATED = 1, OPEN_CHILDREN_LIMIT_EXCEEDED = 2, OPEN_WORKFLOWS_LIMIT_EXCEEDED = 3, CHILD_CREATION_RATE_EXCEEDED = 4, WORKFLOW_ALREADY_RUNNING = 5, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 6, DEFAULT_TASK_LIST_UNDEFINED = 7, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_CHILD_POLICY_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }


	/** Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types. */
	export interface LambdaFunctionScheduledEventAttributes {

		/** Required */
		id: string;

		/** Required */
		name: string;
		control?: string;
		input?: string;
		startToCloseTimeout?: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types. */
	export interface LambdaFunctionScheduledEventAttributesFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		startToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionScheduledEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionScheduledEventAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types. */
	export interface LambdaFunctionStartedEventAttributes {

		/** Required */
		scheduledEventId: number;
	}

	/** Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types. */
	export interface LambdaFunctionStartedEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionStartedEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionStartedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types. */
	export interface LambdaFunctionCompletedEventAttributes {

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		result?: string;
	}

	/** Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types. */
	export interface LambdaFunctionCompletedEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionCompletedEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionCompletedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface LambdaFunctionFailedEventAttributes {

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		reason?: string;
		details?: string;
	}

	/** Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface LambdaFunctionFailedEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionFailedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides details of the <code>LambdaFunctionTimedOut</code> event. */
	export interface LambdaFunctionTimedOutEventAttributes {

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		timeoutType?: WorkflowExecutionTimeoutType;
	}

	/** Provides details of the <code>LambdaFunctionTimedOut</code> event. */
	export interface LambdaFunctionTimedOutEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		timeoutType: FormControl<WorkflowExecutionTimeoutType | null | undefined>,
	}
	export function CreateLambdaFunctionTimedOutEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionTimedOutEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeoutType: new FormControl<WorkflowExecutionTimeoutType | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface ScheduleLambdaFunctionFailedEventAttributes {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		cause: ScheduleLambdaFunctionFailedCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface ScheduleLambdaFunctionFailedEventAttributesFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<ScheduleLambdaFunctionFailedCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateScheduleLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<ScheduleLambdaFunctionFailedEventAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<ScheduleLambdaFunctionFailedCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleLambdaFunctionFailedCause { ID_ALREADY_IN_USE = 0, OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED = 1, LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED = 2, LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION = 3 }


	/** Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface StartLambdaFunctionFailedEventAttributes {
		scheduledEventId?: number | null;
		cause?: StartLambdaFunctionFailedCause;
		message?: string;
	}

	/** Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface StartLambdaFunctionFailedEventAttributesFormProperties {
		scheduledEventId: FormControl<number | null | undefined>,
		cause: FormControl<StartLambdaFunctionFailedCause | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateStartLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<StartLambdaFunctionFailedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined),
			cause: new FormControl<StartLambdaFunctionFailedCause | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StartLambdaFunctionFailedCause { ASSUME_ROLE_FAILED = 0 }

	export interface GetWorkflowExecutionHistoryInput {

		/** Required */
		domain: string;

		/** Required */
		execution: WorkflowExecution;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface GetWorkflowExecutionHistoryInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowExecutionHistoryInputFormGroup() {
		return new FormGroup<GetWorkflowExecutionHistoryInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated list of activity type information structures. */
	export interface ActivityTypeInfos {

		/** Required */
		typeInfos: Array<ActivityTypeInfo>;
		nextPageToken?: string;
	}

	/** Contains a paginated list of activity type information structures. */
	export interface ActivityTypeInfosFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeInfosFormGroup() {
		return new FormGroup<ActivityTypeInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListActivityTypesInput {

		/** Required */
		domain: string;
		name?: string;

		/** Required */
		registrationStatus: RegistrationStatus;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListActivityTypesInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListActivityTypesInputFormGroup() {
		return new FormGroup<ListActivityTypesInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated list of information about workflow executions. */
	export interface WorkflowExecutionInfos {

		/** Required */
		executionInfos: Array<WorkflowExecutionInfo>;
		nextPageToken?: string;
	}

	/** Contains a paginated list of information about workflow executions. */
	export interface WorkflowExecutionInfosFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionInfosFormGroup() {
		return new FormGroup<WorkflowExecutionInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClosedWorkflowExecutionsInput {

		/** Required */
		domain: string;
		startTimeFilter?: ExecutionTimeFilter;
		closeTimeFilter?: ExecutionTimeFilter;
		executionFilter?: WorkflowExecutionFilter;
		closeStatusFilter?: CloseStatusFilter;
		typeFilter?: WorkflowTypeFilter;
		tagFilter?: TagFilter;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListClosedWorkflowExecutionsInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListClosedWorkflowExecutionsInputFormGroup() {
		return new FormGroup<ListClosedWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated collection of DomainInfo structures. */
	export interface DomainInfos {

		/** Required */
		domainInfos: Array<DomainInfo>;
		nextPageToken?: string;
	}

	/** Contains a paginated collection of DomainInfo structures. */
	export interface DomainInfosFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDomainInfosFormGroup() {
		return new FormGroup<DomainInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainsInput {
		nextPageToken?: string;

		/** Required */
		registrationStatus: RegistrationStatus;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListDomainsInputFormProperties {
		nextPageToken: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListDomainsInputFormGroup() {
		return new FormGroup<ListDomainsInputFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListOpenWorkflowExecutionsInput {

		/** Required */
		domain: string;

		/** Required */
		startTimeFilter: ExecutionTimeFilter;
		typeFilter?: WorkflowTypeFilter;
		tagFilter?: TagFilter;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
		executionFilter?: WorkflowExecutionFilter;
	}
	export interface ListOpenWorkflowExecutionsInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListOpenWorkflowExecutionsInputFormGroup() {
		return new FormGroup<ListOpenWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: Array<ResourceTag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}


	/** <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface ResourceTag {

		/** Required */
		key: string;
		value?: string;
	}

	/** <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface ResourceTagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LimitExceededFault {
	}
	export interface LimitExceededFaultFormProperties {
	}
	export function CreateLimitExceededFaultFormGroup() {
		return new FormGroup<LimitExceededFaultFormProperties>({
		});

	}


	/** Contains a paginated list of information structures about workflow types. */
	export interface WorkflowTypeInfos {

		/** Required */
		typeInfos: Array<WorkflowTypeInfo>;
		nextPageToken?: string;
	}

	/** Contains a paginated list of information structures about workflow types. */
	export interface WorkflowTypeInfosFormProperties {
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeInfosFormGroup() {
		return new FormGroup<WorkflowTypeInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWorkflowTypesInput {

		/** Required */
		domain: string;
		name?: string;

		/** Required */
		registrationStatus: RegistrationStatus;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListWorkflowTypesInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<RegistrationStatus | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListWorkflowTypesInputFormGroup() {
		return new FormGroup<ListWorkflowTypesInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			registrationStatus: new FormControl<RegistrationStatus | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Unit of work sent to an activity worker. */
	export interface ActivityTask {

		/** Required */
		taskToken: string;

		/** Required */
		activityId: string;

		/** Required */
		startedEventId: number;

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		activityType: ActivityType;
		input?: string;
	}

	/** Unit of work sent to an activity worker. */
	export interface ActivityTaskFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,

		/** Required */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		input: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskFormGroup() {
		return new FormGroup<ActivityTaskFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PollForActivityTaskInput {

		/** Required */
		domain: string;

		/** Required */
		taskList: TaskList;
		identity?: string;
	}
	export interface PollForActivityTaskInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		identity: FormControl<string | null | undefined>,
	}
	export function CreatePollForActivityTaskInputFormGroup() {
		return new FormGroup<PollForActivityTaskInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions. */
	export interface DecisionTask {

		/** Required */
		taskToken: string;

		/** Required */
		startedEventId: number;

		/** Required */
		workflowExecution: WorkflowExecution;

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		events: Array<HistoryEvent>;
		nextPageToken?: string;
		previousStartedEventId?: number | null;
	}

	/** A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions. */
	export interface DecisionTaskFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		previousStartedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskFormGroup() {
		return new FormGroup<DecisionTaskFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			previousStartedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PollForDecisionTaskInput {

		/** Required */
		domain: string;

		/** Required */
		taskList: TaskList;
		identity?: string;
		nextPageToken?: string;
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
		startAtPreviousStartedEvent?: boolean | null;
	}
	export interface PollForDecisionTaskInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		identity: FormControl<string | null | undefined>,
		nextPageToken: FormControl<string | null | undefined>,
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
		startAtPreviousStartedEvent: FormControl<boolean | null | undefined>,
	}
	export function CreatePollForDecisionTaskInputFormGroup() {
		return new FormGroup<PollForDecisionTaskInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identity: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			maximumPageSize: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
			startAtPreviousStartedEvent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Status information about an activity task. */
	export interface ActivityTaskStatus {

		/** Required */
		cancelRequested: boolean;
	}

	/** Status information about an activity task. */
	export interface ActivityTaskStatusFormProperties {

		/** Required */
		cancelRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateActivityTaskStatusFormGroup() {
		return new FormGroup<ActivityTaskStatusFormProperties>({
			cancelRequested: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RecordActivityTaskHeartbeatInput {

		/** Required */
		taskToken: string;
		details?: string;
	}
	export interface RecordActivityTaskHeartbeatInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateRecordActivityTaskHeartbeatInputFormGroup() {
		return new FormGroup<RecordActivityTaskHeartbeatInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterActivityTypeInput {

		/** Required */
		domain: string;

		/** Required */
		name: string;

		/** Required */
		version: string;
		description?: string;
		defaultTaskStartToCloseTimeout?: string;
		defaultTaskHeartbeatTimeout?: string;
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string;
		defaultTaskScheduleToStartTimeout?: string;
		defaultTaskScheduleToCloseTimeout?: string;
	}
	export interface RegisterActivityTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskHeartbeatTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultTaskScheduleToStartTimeout: FormControl<string | null | undefined>,
		defaultTaskScheduleToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateRegisterActivityTypeInputFormGroup() {
		return new FormGroup<RegisterActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskHeartbeatTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToStartTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TypeAlreadyExistsFault {
	}
	export interface TypeAlreadyExistsFaultFormProperties {
	}
	export function CreateTypeAlreadyExistsFaultFormGroup() {
		return new FormGroup<TypeAlreadyExistsFaultFormProperties>({
		});

	}

	export interface RegisterDomainInput {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		workflowExecutionRetentionPeriodInDays: string;
		tags?: Array<ResourceTag>;
	}
	export interface RegisterDomainInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		workflowExecutionRetentionPeriodInDays: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDomainInputFormGroup() {
		return new FormGroup<RegisterDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			workflowExecutionRetentionPeriodInDays: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DomainAlreadyExistsFault {
	}
	export interface DomainAlreadyExistsFaultFormProperties {
	}
	export function CreateDomainAlreadyExistsFaultFormGroup() {
		return new FormGroup<DomainAlreadyExistsFaultFormProperties>({
		});

	}

	export interface TooManyTagsFault {
	}
	export interface TooManyTagsFaultFormProperties {
	}
	export function CreateTooManyTagsFaultFormGroup() {
		return new FormGroup<TooManyTagsFaultFormProperties>({
		});

	}

	export interface RegisterWorkflowTypeInput {

		/** Required */
		domain: string;

		/** Required */
		name: string;

		/** Required */
		version: string;
		description?: string;
		defaultTaskStartToCloseTimeout?: string;
		defaultExecutionStartToCloseTimeout?: string;
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string;
		defaultChildPolicy?: ChildPolicy;
		defaultLambdaRole?: string;
	}
	export interface RegisterWorkflowTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultExecutionStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultChildPolicy: FormControl<ChildPolicy | null | undefined>,
		defaultLambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateRegisterWorkflowTypeInputFormGroup() {
		return new FormGroup<RegisterWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultExecutionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultChildPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
			defaultLambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RequestCancelWorkflowExecutionInput {

		/** Required */
		domain: string;

		/** Required */
		workflowId: string;
		runId?: string;
	}
	export interface RequestCancelWorkflowExecutionInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelWorkflowExecutionInputFormGroup() {
		return new FormGroup<RequestCancelWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RespondActivityTaskCanceledInput {

		/** Required */
		taskToken: string;
		details?: string;
	}
	export interface RespondActivityTaskCanceledInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskCanceledInputFormGroup() {
		return new FormGroup<RespondActivityTaskCanceledInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RespondActivityTaskCompletedInput {

		/** Required */
		taskToken: string;
		result?: string;
	}
	export interface RespondActivityTaskCompletedInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		result: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskCompletedInputFormGroup() {
		return new FormGroup<RespondActivityTaskCompletedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RespondActivityTaskFailedInput {

		/** Required */
		taskToken: string;
		reason?: string;
		details?: string;
	}
	export interface RespondActivityTaskFailedInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskFailedInputFormGroup() {
		return new FormGroup<RespondActivityTaskFailedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input data for a TaskCompleted response to a decision task. */
	export interface RespondDecisionTaskCompletedInput {

		/** Required */
		taskToken: string;
		decisions?: Array<Decision>;
		executionContext?: string;
	}

	/** Input data for a TaskCompleted response to a decision task. */
	export interface RespondDecisionTaskCompletedInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		executionContext: FormControl<string | null | undefined>,
	}
	export function CreateRespondDecisionTaskCompletedInputFormGroup() {
		return new FormGroup<RespondDecisionTaskCompletedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionContext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul> */
	export interface Decision {

		/** Required */
		decisionType: DecisionType;
		scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
		requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
		completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
		failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
		cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
		continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
		recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
		startTimerDecisionAttributes?: StartTimerDecisionAttributes;
		cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
		signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
		requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
		startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
		scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
	}

	/** <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul> */
	export interface DecisionFormProperties {

		/** Required */
		decisionType: FormControl<DecisionType | null | undefined>,
	}
	export function CreateDecisionFormGroup() {
		return new FormGroup<DecisionFormProperties>({
			decisionType: new FormControl<DecisionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DecisionType { ScheduleActivityTask = 0, RequestCancelActivityTask = 1, CompleteWorkflowExecution = 2, FailWorkflowExecution = 3, CancelWorkflowExecution = 4, ContinueAsNewWorkflowExecution = 5, RecordMarker = 6, StartTimer = 7, CancelTimer = 8, SignalExternalWorkflowExecution = 9, RequestCancelExternalWorkflowExecution = 10, StartChildWorkflowExecution = 11, ScheduleLambdaFunction = 12 }


	/** <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ScheduleActivityTaskDecisionAttributes {

		/** Required */
		activityType: ActivityType;

		/** Required */
		activityId: string;
		control?: string;
		input?: string;
		scheduleToCloseTimeout?: string;
		taskList?: TaskList;
		taskPriority?: string;
		scheduleToStartTimeout?: string;
		startToCloseTimeout?: string;
		heartbeatTimeout?: string;
	}

	/** <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ScheduleActivityTaskDecisionAttributesFormProperties {

		/** Required */
		activityId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		scheduleToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		scheduleToStartTimeout: FormControl<string | null | undefined>,
		startToCloseTimeout: FormControl<string | null | undefined>,
		heartbeatTimeout: FormControl<string | null | undefined>,
	}
	export function CreateScheduleActivityTaskDecisionAttributesFormGroup() {
		return new FormGroup<ScheduleActivityTaskDecisionAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			scheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			scheduleToStartTimeout: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			heartbeatTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelActivityTaskDecisionAttributes {

		/** Required */
		activityId: string;
	}

	/** <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelActivityTaskDecisionAttributesFormProperties {

		/** Required */
		activityId: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelActivityTaskDecisionAttributesFormGroup() {
		return new FormGroup<RequestCancelActivityTaskDecisionAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CompleteWorkflowExecutionDecisionAttributes {
		result?: string;
	}

	/** <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CompleteWorkflowExecutionDecisionAttributesFormProperties {
		result: FormControl<string | null | undefined>,
	}
	export function CreateCompleteWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<CompleteWorkflowExecutionDecisionAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface FailWorkflowExecutionDecisionAttributes {
		reason?: string;
		details?: string;
	}

	/** <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface FailWorkflowExecutionDecisionAttributesFormProperties {
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateFailWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<FailWorkflowExecutionDecisionAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelWorkflowExecutionDecisionAttributes {
		details?: string;
	}

	/** <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelWorkflowExecutionDecisionAttributesFormProperties {
		details: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<CancelWorkflowExecutionDecisionAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
		input?: string;
		executionStartToCloseTimeout?: string;
		taskList?: TaskList;
		taskPriority?: string;
		taskStartToCloseTimeout?: string;
		childPolicy?: ChildPolicy;
		tagList?: Array<string>;
		workflowTypeVersion?: string;
		lambdaRole?: string;
	}

	/** <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ContinueAsNewWorkflowExecutionDecisionAttributesFormProperties {
		input: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		workflowTypeVersion: FormControl<string | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateContinueAsNewWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<ContinueAsNewWorkflowExecutionDecisionAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
			workflowTypeVersion: new FormControl<string | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RecordMarkerDecisionAttributes {

		/** Required */
		markerName: string;
		details?: string;
	}

	/** <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RecordMarkerDecisionAttributesFormProperties {

		/** Required */
		markerName: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateRecordMarkerDecisionAttributesFormGroup() {
		return new FormGroup<RecordMarkerDecisionAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartTimerDecisionAttributes {

		/** Required */
		timerId: string;
		control?: string;

		/** Required */
		startToFireTimeout: string;
	}

	/** <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartTimerDecisionAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,

		/** Required */
		startToFireTimeout: FormControl<string | null | undefined>,
	}
	export function CreateStartTimerDecisionAttributesFormGroup() {
		return new FormGroup<StartTimerDecisionAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			startToFireTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelTimerDecisionAttributes {

		/** Required */
		timerId: string;
	}

	/** <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelTimerDecisionAttributesFormProperties {

		/** Required */
		timerId: FormControl<string | null | undefined>,
	}
	export function CreateCancelTimerDecisionAttributesFormGroup() {
		return new FormGroup<CancelTimerDecisionAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface SignalExternalWorkflowExecutionDecisionAttributes {

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		signalName: string;
		input?: string;
		control?: string;
	}

	/** <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface SignalExternalWorkflowExecutionDecisionAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		signalName: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {

		/** Required */
		workflowId: string;
		runId?: string;
		control?: string;
	}

	/** <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelExternalWorkflowExecutionDecisionAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			control: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartChildWorkflowExecutionDecisionAttributes {

		/** Required */
		workflowType: WorkflowType;

		/** Required */
		workflowId: string;
		control?: string;
		input?: string;
		executionStartToCloseTimeout?: string;
		taskList?: TaskList;
		taskPriority?: string;
		taskStartToCloseTimeout?: string;
		childPolicy?: ChildPolicy;
		tagList?: Array<string>;
		lambdaRole?: string;
	}

	/** <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartChildWorkflowExecutionDecisionAttributesFormProperties {

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>. */
	export interface ScheduleLambdaFunctionDecisionAttributes {

		/** Required */
		id: string;

		/** Required */
		name: string;
		control?: string;
		input?: string;
		startToCloseTimeout?: string;
	}

	/** Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>. */
	export interface ScheduleLambdaFunctionDecisionAttributesFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		control: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		startToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateScheduleLambdaFunctionDecisionAttributesFormGroup() {
		return new FormGroup<ScheduleLambdaFunctionDecisionAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignalWorkflowExecutionInput {

		/** Required */
		domain: string;

		/** Required */
		workflowId: string;
		runId?: string;

		/** Required */
		signalName: string;
		input?: string;
	}
	export interface SignalWorkflowExecutionInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,

		/** Required */
		signalName: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
	}
	export function CreateSignalWorkflowExecutionInputFormGroup() {
		return new FormGroup<SignalWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the <code>runId</code> of a workflow execution. */
	export interface Run {
		runId?: string;
	}

	/** Specifies the <code>runId</code> of a workflow execution. */
	export interface RunFormProperties {
		runId: FormControl<string | null | undefined>,
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
			runId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartWorkflowExecutionInput {

		/** Required */
		domain: string;

		/** Required */
		workflowId: string;

		/** Required */
		workflowType: WorkflowType;
		taskList?: TaskList;
		taskPriority?: string;
		input?: string;
		executionStartToCloseTimeout?: string;
		tagList?: Array<string>;
		taskStartToCloseTimeout?: string;
		childPolicy?: ChildPolicy;
		lambdaRole?: string;
	}
	export interface StartWorkflowExecutionInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<ChildPolicy | null | undefined>,
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowExecutionInputFormGroup() {
		return new FormGroup<StartWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WorkflowExecutionAlreadyStartedFault {
	}
	export interface WorkflowExecutionAlreadyStartedFaultFormProperties {
	}
	export function CreateWorkflowExecutionAlreadyStartedFaultFormGroup() {
		return new FormGroup<WorkflowExecutionAlreadyStartedFaultFormProperties>({
		});

	}

	export interface DefaultUndefinedFault {
	}
	export interface DefaultUndefinedFaultFormProperties {
	}
	export function CreateDefaultUndefinedFaultFormGroup() {
		return new FormGroup<DefaultUndefinedFaultFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<ResourceTag>;
	}
	export interface TagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TerminateWorkflowExecutionInput {

		/** Required */
		domain: string;

		/** Required */
		workflowId: string;
		runId?: string;
		reason?: string;
		details?: string;
		childPolicy?: ChildPolicy;
	}
	export interface TerminateWorkflowExecutionInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
		runId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
		childPolicy: FormControl<ChildPolicy | null | undefined>,
	}
	export function CreateTerminateWorkflowExecutionInputFormGroup() {
		return new FormGroup<TerminateWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			runId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<ChildPolicy | null | undefined>(undefined),
		});

	}

	export interface UndeprecateActivityTypeInput {

		/** Required */
		domain: string;

		/** Required */
		activityType: ActivityType;
	}
	export interface UndeprecateActivityTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateActivityTypeInputFormGroup() {
		return new FormGroup<UndeprecateActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UndeprecateDomainInput {

		/** Required */
		name: string;
	}
	export interface UndeprecateDomainInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateDomainInputFormGroup() {
		return new FormGroup<UndeprecateDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UndeprecateWorkflowTypeInput {

		/** Required */
		domain: string;

		/** Required */
		workflowType: WorkflowType;
	}
	export interface UndeprecateWorkflowTypeInputFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateWorkflowTypeInputFormGroup() {
		return new FormGroup<UndeprecateWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancelWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum DecisionTaskTimeoutType { START_TO_CLOSE = 0 }

	export enum FailWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum LambdaFunctionTimeoutType { START_TO_CLOSE = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Returns the number of closed workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions
		 * @return {WorkflowExecutionCount} Success
		 */
		CountClosedWorkflowExecutions(requestBody: CountClosedWorkflowExecutionsInput): Observable<WorkflowExecutionCount> {
			return this.http.post<WorkflowExecutionCount>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the number of open workflow executions within the given domain that meet the specified filtering criteria.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions
		 * @return {WorkflowExecutionCount} Success
		 */
		CountOpenWorkflowExecutions(requestBody: CountOpenWorkflowExecutionsInput): Observable<WorkflowExecutionCount> {
			return this.http.post<WorkflowExecutionCount>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the estimated number of activity tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no activity task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks
		 * @return {PendingTaskCount} Success
		 */
		CountPendingActivityTasks(requestBody: CountPendingActivityTasksInput): Observable<PendingTaskCount> {
			return this.http.post<PendingTaskCount>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the estimated number of decision tasks in the specified task list. The count returned is an approximation and isn't guaranteed to be exact. If you specify a task list that no decision task was ever scheduled in then <code>0</code> is returned.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks
		 * @return {PendingTaskCount} Success
		 */
		CountPendingDecisionTasks(requestBody: CountPendingDecisionTasksInput): Observable<PendingTaskCount> {
			return this.http.post<PendingTaskCount>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecates the specified <i>activity type</i>. After an activity type has been deprecated, you cannot create new tasks of that activity type. Tasks of this type that were scheduled before the type was deprecated continue to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DeprecateActivityType
		 * @return {void} Success
		 */
		DeprecateActivityType(requestBody: DeprecateActivityTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DeprecateDomain
		 * @return {void} Success
		 */
		DeprecateDomain(requestBody: DeprecateDomainInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DeprecateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deprecates the specified <i>workflow type</i>. After a workflow type has been deprecated, you cannot create new executions of that type. Executions that were started before the type was deprecated continues to run. A deprecated workflow type may still be used when calling visibility actions.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType
		 * @return {void} Success
		 */
		DeprecateWorkflowType(requestBody: DeprecateWorkflowTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the specified activity type. This includes configuration settings provided when the type was registered and other general information about the type.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DescribeActivityType
		 * @return {ActivityTypeDetail} Success
		 */
		DescribeActivityType(requestBody: DescribeActivityTypeInput): Observable<ActivityTypeDetail> {
			return this.http.post<ActivityTypeDetail>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DescribeActivityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified domain, including description and status.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DescribeDomain
		 * @return {DomainDetail} Success
		 */
		DescribeDomain(requestBody: DescribeDomainInput): Observable<DomainDetail> {
			return this.http.post<DomainDetail>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DescribeDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified workflow execution including its type and some statistics.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution
		 * @return {WorkflowExecutionDetail} Success
		 */
		DescribeWorkflowExecution(requestBody: DescribeWorkflowExecutionInput): Observable<WorkflowExecutionDetail> {
			return this.http.post<WorkflowExecutionDetail>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about the specified <i>workflow type</i>. This includes configuration settings specified when the type was registered and other information such as creation date, current status, etc.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType
		 * @return {WorkflowTypeDetail} Success
		 */
		DescribeWorkflowType(requestBody: DescribeWorkflowTypeInput): Observable<WorkflowTypeDetail> {
			return this.http.post<WorkflowTypeDetail>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the history of the specified workflow execution. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {History} Success
		 */
		GetWorkflowExecutionHistory(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: GetWorkflowExecutionHistoryInput): Observable<History> {
			return this.http.post<History>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about all activities registered in the specified domain that match the specified name and registration status. The result includes information like creation date, current status of the activity, etc. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the <code>nextPageToken</code> returned by the initial call.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.ListActivityTypes
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {ActivityTypeInfos} Success
		 */
		ListActivityTypes(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: ListActivityTypesInput): Observable<ActivityTypeInfos> {
			return this.http.post<ActivityTypeInfos>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListActivityTypes?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of closed workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {WorkflowExecutionInfos} Success
		 */
		ListClosedWorkflowExecutions(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: ListClosedWorkflowExecutionsInput): Observable<WorkflowExecutionInfos> {
			return this.http.post<WorkflowExecutionInfos>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the list of domains registered in the account. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains. The element must be set to <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is the account ID, with no dashes.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.ListDomains
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {DomainInfos} Success
		 */
		ListDomains(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: ListDomainsInput): Observable<DomainInfos> {
			return this.http.post<DomainInfos>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListDomains?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of open workflow executions in the specified domain that meet the filtering criteria. The results may be split into multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken returned by the initial call.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagFilter.tag</code>: String constraint. The key is <code>swf:tagFilter.tag</code>.</p> </li> <li> <p> <code>typeFilter.name</code>: String constraint. The key is <code>swf:typeFilter.name</code>.</p> </li> <li> <p> <code>typeFilter.version</code>: String constraint. The key is <code>swf:typeFilter.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {WorkflowExecutionInfos} Success
		 */
		ListOpenWorkflowExecutions(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: ListOpenWorkflowExecutionsInput): Observable<WorkflowExecutionInfos> {
			return this.http.post<WorkflowExecutionInfos>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List tags for a given domain.
		 * Post #X-Amz-Target=SimpleWorkflowService.ListTagsForResource
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceInput): Observable<ListTagsForResourceOutput> {
			return this.http.post<ListTagsForResourceOutput>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns information about workflow types in the specified domain. The results may be split into multiple pages that can be retrieved by making the call repeatedly.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {WorkflowTypeInfos} Success
		 */
		ListWorkflowTypes(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: ListWorkflowTypesInput): Observable<WorkflowTypeInfos> {
			return this.http.post<WorkflowTypeInfos>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by workers to get an <a>ActivityTask</a> from the specified activity <code>taskList</code>. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available. The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns an empty result. An empty result, in this context, means that an ActivityTask is returned, but that the value of taskToken is an empty string. If a task is returned, the worker should use its type to identify and process it correctly.</p> <important> <p>Workers should set their client side socket timeout to at least 70 seconds (10 seconds higher than the maximum time service may hold the poll request).</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.PollForActivityTask
		 * @return {ActivityTask} Success
		 */
		PollForActivityTask(requestBody: PollForActivityTaskInput): Observable<ActivityTask> {
			return this.http.post<ActivityTask>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.PollForActivityTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by deciders to get a <a>DecisionTask</a> from the specified decision <code>taskList</code>. A decision task may be returned for any open workflow execution that is using the specified task list. The task includes a paginated view of the history of the workflow execution. The decider should use the workflow type and the history to determine how to properly handle the task.</p> <p>This action initiates a long poll, where the service holds the HTTP connection open and responds as soon a task becomes available. If no decision task is available in the specified task list before the timeout of 60 seconds expires, an empty result is returned. An empty result, in this context, means that a DecisionTask is returned, but that the value of taskToken is an empty string.</p> <important> <p>Deciders should set their client side socket timeout to at least 70 seconds (10 seconds higher than the timeout).</p> </important> <important> <p>Because the number of workflow history events for a single workflow execution might be very large, the result returned might be split up across a number of pages. To retrieve subsequent pages, make additional calls to <code>PollForDecisionTask</code> using the <code>nextPageToken</code> returned by the initial call. Note that you do <i>not</i> call <code>GetWorkflowExecutionHistory</code> with this <code>nextPageToken</code>. Instead, call <code>PollForDecisionTask</code> again.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the <code>taskList.name</code> parameter by using a <code>Condition</code> element with the <code>swf:taskList.name</code> key to allow the action to access only certain task lists.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.PollForDecisionTask
		 * @param {string} maximumPageSize Pagination limit
		 * @param {string} nextPageToken Pagination token
		 * @return {DecisionTask} Success
		 */
		PollForDecisionTask(maximumPageSize: string | null | undefined, nextPageToken: string | null | undefined, requestBody: PollForDecisionTaskInput): Observable<DecisionTask> {
			return this.http.post<DecisionTask>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask?maximumPageSize=' + (maximumPageSize == null ? '' : encodeURIComponent(maximumPageSize)) + '&nextPageToken=' + (nextPageToken == null ? '' : encodeURIComponent(nextPageToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by activity workers to report to the service that the <a>ActivityTask</a> represented by the specified <code>taskToken</code> is still making progress. The worker can also specify details of the progress, for example percent complete, using the <code>details</code> parameter. This action can also be used by the worker as a mechanism to check if cancellation is being requested for the activity task. If a cancellation is being attempted for the specified task, then the boolean <code>cancelRequested</code> flag returned by the service is set to <code>true</code>.</p> <p>This action resets the <code>taskHeartbeatTimeout</code> clock. The <code>taskHeartbeatTimeout</code> is specified in <a>RegisterActivityType</a>.</p> <p>This action doesn't in itself create an event in the workflow execution history. However, if the task times out, the workflow execution history contains a <code>ActivityTaskTimedOut</code> event that contains the information from the last heartbeat generated by the activity worker.</p> <note> <p>The <code>taskStartToCloseTimeout</code> of an activity type is the maximum duration of an activity task, regardless of the number of <a>RecordActivityTaskHeartbeat</a> requests received. The <code>taskStartToCloseTimeout</code> is also specified in <a>RegisterActivityType</a>.</p> </note> <note> <p>This operation is only useful for long-lived activities to report liveliness of the task and to determine if a cancellation is being attempted.</p> </note> <important> <p>If the <code>cancelRequested</code> flag returns <code>true</code>, a cancellation is being attempted. If the worker can cancel the activity, it should respond with <a>RespondActivityTaskCanceled</a>. Otherwise, it should ignore the cancellation request.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat
		 * @return {ActivityTaskStatus} Success
		 */
		RecordActivityTaskHeartbeat(requestBody: RecordActivityTaskHeartbeatInput): Observable<ActivityTaskStatus> {
			return this.http.post<ActivityTaskStatus>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a new <i>activity type</i> along with its configuration settings in the specified domain.</p> <important> <p>A <code>TypeAlreadyExists</code> fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RegisterActivityType
		 * @return {void} Success
		 */
		RegisterActivityType(requestBody: RegisterActivityTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RegisterActivityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers a new domain.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RegisterDomain
		 * @return {void} Success
		 */
		RegisterDomain(requestBody: RegisterDomainInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RegisterDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Registers a new <i>workflow type</i> and its configuration settings in the specified domain.</p> <p>The retention period for the workflow history is set by the <a>RegisterDomain</a> action.</p> <important> <p>If the type already exists, then a <code>TypeAlreadyExists</code> fault is returned. You cannot change the configuration settings of a workflow type once it is registered and it must be registered as a new version.</p> </important> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>defaultTaskList.name</code>: String constraint. The key is <code>swf:defaultTaskList.name</code>.</p> </li> <li> <p> <code>name</code>: String constraint. The key is <code>swf:name</code>.</p> </li> <li> <p> <code>version</code>: String constraint. The key is <code>swf:version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType
		 * @return {void} Success
		 */
		RegisterWorkflowType(requestBody: RegisterWorkflowTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Records a <code>WorkflowExecutionCancelRequested</code> event in the currently running workflow execution identified by the given domain, workflowId, and runId. This logically requests the cancellation of the workflow execution as a whole. It is up to the decider to take appropriate actions when it receives an execution history with this event.</p> <note> <p>If the runId isn't specified, the <code>WorkflowExecutionCancelRequested</code> event is recorded in the history of the current open workflow execution with the specified workflowId in the domain.</p> </note> <note> <p>Because this action allows the workflow to properly clean up and gracefully close, it should be used instead of <a>TerminateWorkflowExecution</a> when possible.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution
		 * @return {void} Success
		 */
		RequestCancelWorkflowExecution(requestBody: RequestCancelWorkflowExecutionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> was successfully canceled. Additional <code>details</code> can be provided using the <code>details</code> argument.</p> <p>These <code>details</code> (if provided) appear in the <code>ActivityTaskCanceled</code> event added to the workflow history.</p> <important> <p>Only use this operation if the <code>canceled</code> flag of a <a>RecordActivityTaskHeartbeat</a> request returns <code>true</code> and if the activity can be safely undone or abandoned.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, RespondActivityTaskCanceled, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled
		 * @return {void} Success
		 */
		RespondActivityTaskCanceled(requestBody: RespondActivityTaskCanceledInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> completed successfully with a <code>result</code> (if provided). The <code>result</code> appears in the <code>ActivityTaskCompleted</code> event in the workflow history.</p> <important> <p>If the requested task doesn't complete successfully, use <a>RespondActivityTaskFailed</a> instead. If the worker finds that the task is canceled through the <code>canceled</code> flag returned by <a>RecordActivityTaskHeartbeat</a>, it should cancel the task, clean up and then call <a>RespondActivityTaskCanceled</a>.</p> </important> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to RespondActivityTaskCompleted, <a>RespondActivityTaskCanceled</a>, <a>RespondActivityTaskFailed</a>, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted
		 * @return {void} Success
		 */
		RespondActivityTaskCompleted(requestBody: RespondActivityTaskCompletedInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Used by workers to tell the service that the <a>ActivityTask</a> identified by the <code>taskToken</code> has failed with <code>reason</code> (if specified). The <code>reason</code> and <code>details</code> appear in the <code>ActivityTaskFailed</code> event added to the workflow history.</p> <p>A task is considered open from the time that it is scheduled until it is closed. Therefore a task is reported as open while a worker is processing it. A task is closed after it has been specified in a call to <a>RespondActivityTaskCompleted</a>, <a>RespondActivityTaskCanceled</a>, RespondActivityTaskFailed, or the task has <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dg-basic.html#swf-dev-timeout-types">timed out</a>.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed
		 * @return {void} Success
		 */
		RespondActivityTaskFailed(requestBody: RespondActivityTaskFailedInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Used by deciders to tell the service that the <a>DecisionTask</a> identified by the <code>taskToken</code> has successfully completed. The <code>decisions</code> argument specifies the list of decisions made while processing the task.</p> <p>A <code>DecisionTaskCompleted</code> event is added to the workflow history. The <code>executionContext</code> specified is attached to the event in the workflow execution history.</p> <p> <b>Access Control</b> </p> <p>If an IAM policy grants permission to use <code>RespondDecisionTaskCompleted</code>, it can express permissions for the list of decisions in the <code>decisions</code> parameter. Each of the decisions has one or more parameters, much like a regular API call. To allow for policies to be as readable as possible, you can express permissions on decisions as if they were actual API calls, including applying conditions to some parameters. For more information, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted
		 * @return {void} Success
		 */
		RespondDecisionTaskCompleted(requestBody: RespondDecisionTaskCompletedInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Records a <code>WorkflowExecutionSignaled</code> event in the workflow execution history and creates a decision task for the workflow execution identified by the given domain, workflowId and runId. The event is recorded with the specified user defined signalName and input (if provided).</p> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionSignaled</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>If the specified workflow execution isn't open, this method fails with <code>UnknownResource</code>.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution
		 * @return {void} Success
		 */
		SignalWorkflowExecution(requestBody: SignalWorkflowExecutionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Starts an execution of the workflow type in the specified domain using the provided <code>workflowId</code> and input data.</p> <p>This action returns the newly started workflow execution.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.0</code>: The key is <code>swf:tagList.member.0</code>.</p> </li> <li> <p> <code>tagList.member.1</code>: The key is <code>swf:tagList.member.1</code>.</p> </li> <li> <p> <code>tagList.member.2</code>: The key is <code>swf:tagList.member.2</code>.</p> </li> <li> <p> <code>tagList.member.3</code>: The key is <code>swf:tagList.member.3</code>.</p> </li> <li> <p> <code>tagList.member.4</code>: The key is <code>swf:tagList.member.4</code>.</p> </li> <li> <p> <code>taskList</code>: String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution
		 * @return {Run} Success
		 */
		StartWorkflowExecution(requestBody: StartWorkflowExecutionInput): Observable<Run> {
			return this.http.post<Run>(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Add a tag to a Amazon SWF domain.</p> <note> <p>Amazon SWF supports a maximum of 50 tags per resource.</p> </note>
		 * Post #X-Amz-Target=SimpleWorkflowService.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Records a <code>WorkflowExecutionTerminated</code> event and forces closure of the workflow execution identified by the given domain, runId, and workflowId. The child policy, registered with the workflow type or specified when starting this execution, is applied to any open child workflow executions of this workflow execution.</p> <important> <p>If the identified workflow execution was in progress, it is terminated immediately.</p> </important> <note> <p>If a runId isn't specified, then the <code>WorkflowExecutionTerminated</code> event is recorded in the history of the current open workflow with the matching workflowId in the domain.</p> </note> <note> <p>You should consider using <a>RequestCancelWorkflowExecution</a> action instead because it allows the workflow to gracefully close while <a>TerminateWorkflowExecution</a> doesn't.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution
		 * @return {void} Success
		 */
		TerminateWorkflowExecution(requestBody: TerminateWorkflowExecutionInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Undeprecates a previously deprecated <i>activity type</i>. After an activity type has been undeprecated, you can create new tasks of that activity type.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code>: String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code>: String constraint. The key is <code>swf:activityType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType
		 * @return {void} Success
		 */
		UndeprecateActivityType(requestBody: UndeprecateActivityTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.UndeprecateDomain
		 * @return {void} Success
		 */
		UndeprecateDomain(requestBody: UndeprecateDomainInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Undeprecates a previously deprecated <i>workflow type</i>. After a workflow type has been undeprecated, you can create new executions of that type. </p> <note> <p>This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.</p> </note> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this action's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>workflowType.name</code>: String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code>: String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
		 * Post #X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType
		 * @return {void} Success
		 */
		UndeprecateWorkflowType(requestBody: UndeprecateWorkflowTypeInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a Amazon SWF domain.
		 * Post #X-Amz-Target=SimpleWorkflowService.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=SimpleWorkflowService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CountClosedWorkflowExecutionsX_Amz_Target { 'SimpleWorkflowService.CountClosedWorkflowExecutions' = 0 }

	export enum CountOpenWorkflowExecutionsX_Amz_Target { 'SimpleWorkflowService.CountOpenWorkflowExecutions' = 0 }

	export enum CountPendingActivityTasksX_Amz_Target { 'SimpleWorkflowService.CountPendingActivityTasks' = 0 }

	export enum CountPendingDecisionTasksX_Amz_Target { 'SimpleWorkflowService.CountPendingDecisionTasks' = 0 }

	export enum DeprecateActivityTypeX_Amz_Target { 'SimpleWorkflowService.DeprecateActivityType' = 0 }

	export enum DeprecateDomainX_Amz_Target { 'SimpleWorkflowService.DeprecateDomain' = 0 }

	export enum DeprecateWorkflowTypeX_Amz_Target { 'SimpleWorkflowService.DeprecateWorkflowType' = 0 }

	export enum DescribeActivityTypeX_Amz_Target { 'SimpleWorkflowService.DescribeActivityType' = 0 }

	export enum DescribeDomainX_Amz_Target { 'SimpleWorkflowService.DescribeDomain' = 0 }

	export enum DescribeWorkflowExecutionX_Amz_Target { 'SimpleWorkflowService.DescribeWorkflowExecution' = 0 }

	export enum DescribeWorkflowTypeX_Amz_Target { 'SimpleWorkflowService.DescribeWorkflowType' = 0 }

	export enum GetWorkflowExecutionHistoryX_Amz_Target { 'SimpleWorkflowService.GetWorkflowExecutionHistory' = 0 }

	export enum ListActivityTypesX_Amz_Target { 'SimpleWorkflowService.ListActivityTypes' = 0 }

	export enum ListClosedWorkflowExecutionsX_Amz_Target { 'SimpleWorkflowService.ListClosedWorkflowExecutions' = 0 }

	export enum ListDomainsX_Amz_Target { 'SimpleWorkflowService.ListDomains' = 0 }

	export enum ListOpenWorkflowExecutionsX_Amz_Target { 'SimpleWorkflowService.ListOpenWorkflowExecutions' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'SimpleWorkflowService.ListTagsForResource' = 0 }

	export enum ListWorkflowTypesX_Amz_Target { 'SimpleWorkflowService.ListWorkflowTypes' = 0 }

	export enum PollForActivityTaskX_Amz_Target { 'SimpleWorkflowService.PollForActivityTask' = 0 }

	export enum PollForDecisionTaskX_Amz_Target { 'SimpleWorkflowService.PollForDecisionTask' = 0 }

	export enum RecordActivityTaskHeartbeatX_Amz_Target { 'SimpleWorkflowService.RecordActivityTaskHeartbeat' = 0 }

	export enum RegisterActivityTypeX_Amz_Target { 'SimpleWorkflowService.RegisterActivityType' = 0 }

	export enum RegisterDomainX_Amz_Target { 'SimpleWorkflowService.RegisterDomain' = 0 }

	export enum RegisterWorkflowTypeX_Amz_Target { 'SimpleWorkflowService.RegisterWorkflowType' = 0 }

	export enum RequestCancelWorkflowExecutionX_Amz_Target { 'SimpleWorkflowService.RequestCancelWorkflowExecution' = 0 }

	export enum RespondActivityTaskCanceledX_Amz_Target { 'SimpleWorkflowService.RespondActivityTaskCanceled' = 0 }

	export enum RespondActivityTaskCompletedX_Amz_Target { 'SimpleWorkflowService.RespondActivityTaskCompleted' = 0 }

	export enum RespondActivityTaskFailedX_Amz_Target { 'SimpleWorkflowService.RespondActivityTaskFailed' = 0 }

	export enum RespondDecisionTaskCompletedX_Amz_Target { 'SimpleWorkflowService.RespondDecisionTaskCompleted' = 0 }

	export enum SignalWorkflowExecutionX_Amz_Target { 'SimpleWorkflowService.SignalWorkflowExecution' = 0 }

	export enum StartWorkflowExecutionX_Amz_Target { 'SimpleWorkflowService.StartWorkflowExecution' = 0 }

	export enum TagResourceX_Amz_Target { 'SimpleWorkflowService.TagResource' = 0 }

	export enum TerminateWorkflowExecutionX_Amz_Target { 'SimpleWorkflowService.TerminateWorkflowExecution' = 0 }

	export enum UndeprecateActivityTypeX_Amz_Target { 'SimpleWorkflowService.UndeprecateActivityType' = 0 }

	export enum UndeprecateDomainX_Amz_Target { 'SimpleWorkflowService.UndeprecateDomain' = 0 }

	export enum UndeprecateWorkflowTypeX_Amz_Target { 'SimpleWorkflowService.UndeprecateWorkflowType' = 0 }

	export enum UntagResourceX_Amz_Target { 'SimpleWorkflowService.UntagResource' = 0 }

}

