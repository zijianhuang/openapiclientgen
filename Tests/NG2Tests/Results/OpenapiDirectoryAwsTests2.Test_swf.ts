import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>  */
	export interface WorkflowExecutionCount {

		/**
		 * Required
		 * Minimum: 0
		 */
		count: number;
		truncated?: boolean | null;
	}

	/** Contains the count of workflow executions returned from <a>CountOpenWorkflowExecutions</a> or <a>CountClosedWorkflowExecutions</a>  */
	export interface WorkflowExecutionCountFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		count: FormControl<number | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowExecutionCountFormGroup() {
		return new FormGroup<WorkflowExecutionCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CountClosedWorkflowExecutionsInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> */
		startTimeFilter?: ExecutionTimeFilter;

		/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> */
		closeTimeFilter?: ExecutionTimeFilter;

		/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
		executionFilter?: WorkflowExecutionFilter;

		/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
		typeFilter?: WorkflowTypeFilter;

		/** Used to filter the workflow executions in visibility APIs based on a tag. */
		tagFilter?: TagFilter;

		/** Used to filter the closed workflow executions in visibility APIs by their close status. */
		closeStatusFilter?: CloseStatusFilter;
	}
	export interface CountClosedWorkflowExecutionsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountClosedWorkflowExecutionsInputFormGroup() {
		return new FormGroup<CountClosedWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>  */
	export interface ExecutionTimeFilter {

		/** Required */
		oldestDate: Date;
		latestDate?: Date | null;
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;
	}

	/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
	export interface WorkflowExecutionFilterFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionFilterFormGroup() {
		return new FormGroup<WorkflowExecutionFilterFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
	export interface WorkflowTypeFilter {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Max length: 64 */
		version?: string | null;
	}

	/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
	export interface WorkflowTypeFilterFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 64 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeFilterFormGroup() {
		return new FormGroup<WorkflowTypeFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
		});

	}


	/** Used to filter the workflow executions in visibility APIs based on a tag. */
	export interface TagFilter {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		tag: string;
	}

	/** Used to filter the workflow executions in visibility APIs based on a tag. */
	export interface TagFilterFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}


	/** Used to filter the closed workflow executions in visibility APIs by their close status. */
	export interface CloseStatusFilter {

		/** Required */
		status: CloseStatusFilterStatus;
	}

	/** Used to filter the closed workflow executions in visibility APIs by their close status. */
	export interface CloseStatusFilterFormProperties {

		/** Required */
		status: FormControl<CloseStatusFilterStatus | null | undefined>,
	}
	export function CreateCloseStatusFilterFormGroup() {
		return new FormGroup<CloseStatusFilterFormProperties>({
			status: new FormControl<CloseStatusFilterStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CloseStatusFilterStatus { COMPLETED = 0, FAILED = 1, CANCELED = 2, TERMINATED = 3, CONTINUED_AS_NEW = 4, TIMED_OUT = 5 }

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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
		 * Required
		 */
		startTimeFilter: ExecutionTimeFilter;

		/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
		typeFilter?: WorkflowTypeFilter;

		/** Used to filter the workflow executions in visibility APIs based on a tag. */
		tagFilter?: TagFilter;

		/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
		executionFilter?: WorkflowExecutionFilter;
	}
	export interface CountOpenWorkflowExecutionsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountOpenWorkflowExecutionsInputFormGroup() {
		return new FormGroup<CountOpenWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains the count of tasks in a task list. */
	export interface PendingTaskCount {

		/**
		 * Required
		 * Minimum: 0
		 */
		count: number;
		truncated?: boolean | null;
	}

	/** Contains the count of tasks in a task list. */
	export interface PendingTaskCountFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		count: FormControl<number | null | undefined>,
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreatePendingTaskCountFormGroup() {
		return new FormGroup<PendingTaskCountFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CountPendingActivityTasksInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
	}
	export interface CountPendingActivityTasksInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountPendingActivityTasksInputFormGroup() {
		return new FormGroup<CountPendingActivityTasksInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Represents a task list. */
	export interface TaskList {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}

	/** Represents a task list. */
	export interface TaskListFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTaskListFormGroup() {
		return new FormGroup<TaskListFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface CountPendingDecisionTasksInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
	}
	export interface CountPendingDecisionTasksInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateCountPendingDecisionTasksInputFormGroup() {
		return new FormGroup<CountPendingDecisionTasksInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface DeprecateActivityTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;
	}
	export interface DeprecateActivityTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateActivityTypeInputFormGroup() {
		return new FormGroup<DeprecateActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Represents an activity type. */
	export interface ActivityType {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: string;
	}

	/** Represents an activity type. */
	export interface ActivityTypeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeFormGroup() {
		return new FormGroup<ActivityTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}
	export interface DeprecateDomainInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateDomainInputFormGroup() {
		return new FormGroup<DeprecateDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;
	}
	export interface DeprecateWorkflowTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDeprecateWorkflowTypeInputFormGroup() {
		return new FormGroup<DeprecateWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Represents a workflow type. */
	export interface WorkflowType {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: string;
	}

	/** Represents a workflow type. */
	export interface WorkflowTypeFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeFormGroup() {
		return new FormGroup<WorkflowTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** Detailed information about an activity type. */
	export interface ActivityTypeDetail {

		/**
		 * Detailed information about an activity type.
		 * Required
		 */
		typeInfo: ActivityTypeInfo;

		/**
		 * Configuration settings registered with the activity type.
		 * Required
		 */
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

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;

		/** Required */
		status: ActivityTypeInfoStatus;

		/** Max length: 1024 */
		description?: string | null;

		/** Required */
		creationDate: Date;
		deprecationDate?: Date | null;
	}

	/** Detailed information about an activity type. */
	export interface ActivityTypeInfoFormProperties {

		/** Required */
		status: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		deprecationDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivityTypeInfoFormGroup() {
		return new FormGroup<ActivityTypeInfoFormProperties>({
			status: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deprecationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ActivityTypeInfoStatus { REGISTERED = 0, DEPRECATED = 1 }


	/** Configuration settings registered with the activity type. */
	export interface ActivityTypeConfiguration {

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout?: string | null;

		/** Max length: 8 */
		defaultTaskHeartbeatTimeout?: string | null;

		/** Represents a task list. */
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string | null;

		/** Max length: 8 */
		defaultTaskScheduleToStartTimeout?: string | null;

		/** Max length: 8 */
		defaultTaskScheduleToCloseTimeout?: string | null;
	}

	/** Configuration settings registered with the activity type. */
	export interface ActivityTypeConfigurationFormProperties {

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskHeartbeatTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskScheduleToStartTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskScheduleToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeConfigurationFormGroup() {
		return new FormGroup<ActivityTypeConfigurationFormProperties>({
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskHeartbeatTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToStartTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskScheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
		});

	}

	export interface DescribeActivityTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;
	}
	export interface DescribeActivityTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivityTypeInputFormGroup() {
		return new FormGroup<DescribeActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains details of a domain. */
	export interface DomainDetail {

		/**
		 * Contains general information about a domain.
		 * Required
		 */
		domainInfo: DomainInfo;

		/**
		 * Contains the configuration settings of a domain.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Required */
		status: ActivityTypeInfoStatus;

		/** Max length: 1024 */
		description?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		arn?: string | null;
	}

	/** Contains general information about a domain. */
	export interface DomainInfoFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateDomainInfoFormGroup() {
		return new FormGroup<DomainInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			status: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Contains the configuration settings of a domain. */
	export interface DomainConfiguration {

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		workflowExecutionRetentionPeriodInDays: string;
	}

	/** Contains the configuration settings of a domain. */
	export interface DomainConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		workflowExecutionRetentionPeriodInDays: FormControl<string | null | undefined>,
	}
	export function CreateDomainConfigurationFormGroup() {
		return new FormGroup<DomainConfigurationFormProperties>({
			workflowExecutionRetentionPeriodInDays: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
		});

	}

	export interface DescribeDomainInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}
	export interface DescribeDomainInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDomainInputFormGroup() {
		return new FormGroup<DescribeDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains details about a workflow execution. */
	export interface WorkflowExecutionDetail {

		/**
		 * Contains information about a workflow execution.
		 * Required
		 */
		executionInfo: WorkflowExecutionInfo;

		/**
		 * The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
		 * Required
		 */
		executionConfiguration: WorkflowExecutionConfiguration;

		/**
		 * Contains the counts of open tasks, child workflow executions and timers for a workflow execution.
		 * Required
		 */
		openCounts: WorkflowExecutionOpenCounts;
		latestActivityTaskTimestamp?: Date | null;

		/** Max length: 32768 */
		latestExecutionContext?: string | null;
	}

	/** Contains details about a workflow execution. */
	export interface WorkflowExecutionDetailFormProperties {
		latestActivityTaskTimestamp: FormControl<Date | null | undefined>,

		/** Max length: 32768 */
		latestExecutionContext: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionDetailFormGroup() {
		return new FormGroup<WorkflowExecutionDetailFormProperties>({
			latestActivityTaskTimestamp: new FormControl<Date | null | undefined>(undefined),
			latestExecutionContext: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains information about a workflow execution. */
	export interface WorkflowExecutionInfo {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		execution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Required */
		startTimestamp: Date;
		closeTimestamp?: Date | null;

		/** Required */
		executionStatus: WorkflowExecutionInfoExecutionStatus;
		closeStatus?: CloseStatusFilterStatus | null;

		/** Represents a workflow execution. */
		parent?: WorkflowExecution;

		/** Maximum items: 5 */
		tagList?: Array<string>;
		cancelRequested?: boolean | null;
	}

	/** Contains information about a workflow execution. */
	export interface WorkflowExecutionInfoFormProperties {

		/** Required */
		startTimestamp: FormControl<Date | null | undefined>,
		closeTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		executionStatus: FormControl<WorkflowExecutionInfoExecutionStatus | null | undefined>,
		closeStatus: FormControl<CloseStatusFilterStatus | null | undefined>,
		cancelRequested: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowExecutionInfoFormGroup() {
		return new FormGroup<WorkflowExecutionInfoFormProperties>({
			startTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			closeTimestamp: new FormControl<Date | null | undefined>(undefined),
			executionStatus: new FormControl<WorkflowExecutionInfoExecutionStatus | null | undefined>(undefined, [Validators.required]),
			closeStatus: new FormControl<CloseStatusFilterStatus | null | undefined>(undefined),
			cancelRequested: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a workflow execution. */
	export interface WorkflowExecution {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		runId: string;
	}

	/** Represents a workflow execution. */
	export interface WorkflowExecutionFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionFormGroup() {
		return new FormGroup<WorkflowExecutionFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export enum WorkflowExecutionInfoExecutionStatus { OPEN = 0, CLOSED = 1 }


	/** The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution. */
	export interface WorkflowExecutionConfiguration {

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		taskStartToCloseTimeout: string;

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		executionStartToCloseTimeout: string;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution. */
	export interface WorkflowExecutionConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionConfigurationFormGroup() {
		return new FormGroup<WorkflowExecutionConfigurationFormProperties>({
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export enum WorkflowExecutionConfigurationChildPolicy { TERMINATE = 0, REQUEST_CANCEL = 1, ABANDON = 2 }


	/** Contains the counts of open tasks, child workflow executions and timers for a workflow execution. */
	export interface WorkflowExecutionOpenCounts {

		/**
		 * Required
		 * Minimum: 0
		 */
		openActivityTasks: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		openDecisionTasks: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		openTimers: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		openChildWorkflowExecutions: number;

		/** Minimum: 0 */
		openLambdaFunctions?: number | null;
	}

	/** Contains the counts of open tasks, child workflow executions and timers for a workflow execution. */
	export interface WorkflowExecutionOpenCountsFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		openActivityTasks: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		openDecisionTasks: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		openTimers: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		openChildWorkflowExecutions: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		openLambdaFunctions: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionOpenCountsFormGroup() {
		return new FormGroup<WorkflowExecutionOpenCountsFormProperties>({
			openActivityTasks: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			openDecisionTasks: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			openTimers: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			openChildWorkflowExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			openLambdaFunctions: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeWorkflowExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		execution: WorkflowExecution;
	}
	export interface DescribeWorkflowExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkflowExecutionInputFormGroup() {
		return new FormGroup<DescribeWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains details about a workflow type. */
	export interface WorkflowTypeDetail {

		/**
		 * Contains information about a workflow type.
		 * Required
		 */
		typeInfo: WorkflowTypeInfo;

		/**
		 * The configuration settings of a workflow type.
		 * Required
		 */
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

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Required */
		status: ActivityTypeInfoStatus;

		/** Max length: 1024 */
		description?: string | null;

		/** Required */
		creationDate: Date;
		deprecationDate?: Date | null;
	}

	/** Contains information about a workflow type. */
	export interface WorkflowTypeInfoFormProperties {

		/** Required */
		status: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		deprecationDate: FormControl<Date | null | undefined>,
	}
	export function CreateWorkflowTypeInfoFormGroup() {
		return new FormGroup<WorkflowTypeInfoFormProperties>({
			status: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deprecationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The configuration settings of a workflow type. */
	export interface WorkflowTypeConfiguration {

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout?: string | null;

		/** Max length: 8 */
		defaultExecutionStartToCloseTimeout?: string | null;

		/** Represents a task list. */
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string | null;
		defaultChildPolicy?: WorkflowExecutionConfigurationChildPolicy | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		defaultLambdaRole?: string | null;
	}

	/** The configuration settings of a workflow type. */
	export interface WorkflowTypeConfigurationFormProperties {

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultExecutionStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultChildPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		defaultLambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeConfigurationFormGroup() {
		return new FormGroup<WorkflowTypeConfigurationFormProperties>({
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultExecutionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultChildPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
			defaultLambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface DescribeWorkflowTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;
	}
	export interface DescribeWorkflowTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateDescribeWorkflowTypeInputFormGroup() {
		return new FormGroup<DescribeWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution. */
	export interface History {

		/** Required */
		events: Array<HistoryEvent>;

		/** Max length: 2048 */
		nextPageToken?: string | null;
	}

	/** Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution. */
	export interface HistoryFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateHistoryFormGroup() {
		return new FormGroup<HistoryFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}


	/** <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul> */
	export interface HistoryEvent {

		/** Required */
		eventTimestamp: Date;

		/** Required */
		eventType: HistoryEventEventType;

		/** Required */
		eventId: number;

		/** Provides details of <code>WorkflowExecutionStarted</code> event. */
		workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionCompleted</code> event. */
		workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;

		/** Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event. */
		completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionFailed</code> event. */
		workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>FailWorkflowExecutionFailed</code> event. */
		failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionTimedOut</code> event. */
		workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionCanceled</code> event. */
		workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;

		/** Provides the details of the <code>CancelWorkflowExecutionFailed</code> event. */
		cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event. */
		workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;

		/** Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event. */
		continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionTerminated</code> event. */
		workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionCancelRequested</code> event. */
		workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;

		/** Provides details about the <code>DecisionTaskScheduled</code> event. */
		decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;

		/** Provides the details of the <code>DecisionTaskStarted</code> event. */
		decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;

		/** Provides the details of the <code>DecisionTaskCompleted</code> event. */
		decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;

		/** Provides the details of the <code>DecisionTaskTimedOut</code> event. */
		decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;

		/** Provides the details of the <code>ActivityTaskScheduled</code> event. */
		activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;

		/** Provides the details of the <code>ActivityTaskStarted</code> event. */
		activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;

		/** Provides the details of the <code>ActivityTaskCompleted</code> event. */
		activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;

		/** Provides the details of the <code>ActivityTaskFailed</code> event. */
		activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;

		/** Provides the details of the <code>ActivityTaskTimedOut</code> event. */
		activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;

		/** Provides the details of the <code>ActivityTaskCanceled</code> event. */
		activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;

		/** Provides the details of the <code>ActivityTaskCancelRequested</code> event. */
		activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;

		/** Provides the details of the <code>WorkflowExecutionSignaled</code> event. */
		workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;

		/** Provides the details of the <code>MarkerRecorded</code> event. */
		markerRecordedEventAttributes?: MarkerRecordedEventAttributes;

		/** Provides the details of the <code>RecordMarkerFailed</code> event. */
		recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;

		/** Provides the details of the <code>TimerStarted</code> event. */
		timerStartedEventAttributes?: TimerStartedEventAttributes;

		/** Provides the details of the <code>TimerFired</code> event. */
		timerFiredEventAttributes?: TimerFiredEventAttributes;

		/** Provides the details of the <code>TimerCanceled</code> event. */
		timerCanceledEventAttributes?: TimerCanceledEventAttributes;

		/** Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event. */
		startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;

		/** Provides the details of the <code>ChildWorkflowExecutionStarted</code> event. */
		childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;

		/** Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event. */
		childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;

		/** Provides the details of the <code>ChildWorkflowExecutionFailed</code> event. */
		childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event. */
		childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;

		/** Provide details of the <code>ChildWorkflowExecutionCanceled</code> event. */
		childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;

		/** Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event. */
		childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;

		/** Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event. */
		signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;

		/** Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event. */
		externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;

		/** Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event. */
		signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event. */
		externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;

		/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event. */
		requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;

		/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event. */
		requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>ScheduleActivityTaskFailed</code> event. */
		scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;

		/** Provides the details of the <code>RequestCancelActivityTaskFailed</code> event. */
		requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;

		/** Provides the details of the <code>StartTimerFailed</code> event. */
		startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;

		/** Provides the details of the <code>CancelTimerFailed</code> event. */
		cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;

		/** Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event. */
		startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;

		/** Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types. */
		lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;

		/** Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types. */
		lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;

		/** Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types. */
		lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;

		/** Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types. */
		lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;

		/** Provides details of the <code>LambdaFunctionTimedOut</code> event. */
		lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;

		/** Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types. */
		scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;

		/** Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types. */
		startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
	}

	/** <p>Event within a workflow execution. A history event can be one of these types:</p> <ul> <li> <p> <code>ActivityTaskCancelRequested</code> – A <code>RequestCancelActivityTask</code> decision was received by the system.</p> </li> <li> <p> <code>ActivityTaskCanceled</code> – The activity task was successfully canceled.</p> </li> <li> <p> <code>ActivityTaskCompleted</code> – An activity worker successfully completed an activity task by calling <a>RespondActivityTaskCompleted</a>.</p> </li> <li> <p> <code>ActivityTaskFailed</code> – An activity worker failed an activity task by calling <a>RespondActivityTaskFailed</a>.</p> </li> <li> <p> <code>ActivityTaskScheduled</code> – An activity task was scheduled for execution.</p> </li> <li> <p> <code>ActivityTaskStarted</code> – The scheduled activity task was dispatched to a worker.</p> </li> <li> <p> <code>ActivityTaskTimedOut</code> – The activity task timed out.</p> </li> <li> <p> <code>CancelTimerFailed</code> – Failed to process CancelTimer decision. This happens when the decision isn't configured properly, for example no timer exists with the specified timer Id.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A request to cancel a workflow execution failed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCanceled</code> – A child workflow execution, started by this workflow execution, was canceled and closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionCompleted</code> – A child workflow execution, started by this workflow execution, completed successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionFailed</code> – A child workflow execution, started by this workflow execution, failed to complete successfully and was closed.</p> </li> <li> <p> <code>ChildWorkflowExecutionStarted</code> – A child workflow execution was successfully started.</p> </li> <li> <p> <code>ChildWorkflowExecutionTerminated</code> – A child workflow execution, started by this workflow execution, was terminated.</p> </li> <li> <p> <code>ChildWorkflowExecutionTimedOut</code> – A child workflow execution, started by this workflow execution, timed out and was closed.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – The workflow execution failed to complete.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – The workflow execution failed to complete after being continued as a new workflow execution.</p> </li> <li> <p> <code>DecisionTaskCompleted</code> – The decider successfully completed a decision task by calling <a>RespondDecisionTaskCompleted</a>.</p> </li> <li> <p> <code>DecisionTaskScheduled</code> – A decision task was scheduled for the workflow execution.</p> </li> <li> <p> <code>DecisionTaskStarted</code> – The decision task was dispatched to a decider.</p> </li> <li> <p> <code>DecisionTaskTimedOut</code> – The decision task timed out.</p> </li> <li> <p> <code>ExternalWorkflowExecutionCancelRequested</code> – Request to cancel an external workflow execution was successfully delivered to the target execution.</p> </li> <li> <p> <code>ExternalWorkflowExecutionSignaled</code> – A signal, requested by this workflow execution, was successfully delivered to the target external workflow execution.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A request to mark a workflow execution as failed, itself failed.</p> </li> <li> <p> <code>MarkerRecorded</code> – A marker was recorded in the workflow history as the result of a <code>RecordMarker</code> decision.</p> </li> <li> <p> <code>RecordMarkerFailed</code> – A <code>RecordMarker</code> decision was returned as failed.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – Failed to process RequestCancelActivityTask decision. This happens when the decision isn't configured properly.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – Request to cancel an external workflow execution failed.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionInitiated</code> – A request was made to request the cancellation of an external workflow execution.</p> </li> <li> <p> <code>ScheduleActivityTaskFailed</code> – Failed to process ScheduleActivityTask decision. This happens when the decision isn't configured properly, for example the activity type specified isn't registered.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – The request to signal an external workflow execution failed.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionInitiated</code> – A request to signal an external workflow was made.</p> </li> <li> <p> <code>StartActivityTaskFailed</code> – A scheduled activity task failed to start.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – Failed to process StartChildWorkflowExecution decision. This happens when the decision isn't configured properly, for example the workflow type specified isn't registered.</p> </li> <li> <p> <code>StartChildWorkflowExecutionInitiated</code> – A request was made to start a child workflow execution.</p> </li> <li> <p> <code>StartTimerFailed</code> – Failed to process StartTimer decision. This happens when the decision isn't configured properly, for example a timer already exists with the specified timer Id.</p> </li> <li> <p> <code>TimerCanceled</code> – A timer, previously started for this workflow execution, was successfully canceled.</p> </li> <li> <p> <code>TimerFired</code> – A timer, previously started for this workflow execution, fired.</p> </li> <li> <p> <code>TimerStarted</code> – A timer was started for the workflow execution due to a <code>StartTimer</code> decision.</p> </li> <li> <p> <code>WorkflowExecutionCancelRequested</code> – A request to cancel this workflow execution was made.</p> </li> <li> <p> <code>WorkflowExecutionCanceled</code> – The workflow execution was successfully canceled and closed.</p> </li> <li> <p> <code>WorkflowExecutionCompleted</code> – The workflow execution was closed due to successful completion.</p> </li> <li> <p> <code>WorkflowExecutionContinuedAsNew</code> – The workflow execution was closed and a new execution of the same type was created with the same workflowId.</p> </li> <li> <p> <code>WorkflowExecutionFailed</code> – The workflow execution closed due to a failure.</p> </li> <li> <p> <code>WorkflowExecutionSignaled</code> – An external signal was received for the workflow execution.</p> </li> <li> <p> <code>WorkflowExecutionStarted</code> – The workflow execution was started.</p> </li> <li> <p> <code>WorkflowExecutionTerminated</code> – The workflow execution was terminated.</p> </li> <li> <p> <code>WorkflowExecutionTimedOut</code> – The workflow execution was closed because a time out was exceeded.</p> </li> </ul> */
	export interface HistoryEventFormProperties {

		/** Required */
		eventTimestamp: FormControl<Date | null | undefined>,

		/** Required */
		eventType: FormControl<HistoryEventEventType | null | undefined>,

		/** Required */
		eventId: FormControl<number | null | undefined>,
	}
	export function CreateHistoryEventFormGroup() {
		return new FormGroup<HistoryEventFormProperties>({
			eventTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			eventType: new FormControl<HistoryEventEventType | null | undefined>(undefined, [Validators.required]),
			eventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HistoryEventEventType { WorkflowExecutionStarted = 0, WorkflowExecutionCancelRequested = 1, WorkflowExecutionCompleted = 2, CompleteWorkflowExecutionFailed = 3, WorkflowExecutionFailed = 4, FailWorkflowExecutionFailed = 5, WorkflowExecutionTimedOut = 6, WorkflowExecutionCanceled = 7, CancelWorkflowExecutionFailed = 8, WorkflowExecutionContinuedAsNew = 9, ContinueAsNewWorkflowExecutionFailed = 10, WorkflowExecutionTerminated = 11, DecisionTaskScheduled = 12, DecisionTaskStarted = 13, DecisionTaskCompleted = 14, DecisionTaskTimedOut = 15, ActivityTaskScheduled = 16, ScheduleActivityTaskFailed = 17, ActivityTaskStarted = 18, ActivityTaskCompleted = 19, ActivityTaskFailed = 20, ActivityTaskTimedOut = 21, ActivityTaskCanceled = 22, ActivityTaskCancelRequested = 23, RequestCancelActivityTaskFailed = 24, WorkflowExecutionSignaled = 25, MarkerRecorded = 26, RecordMarkerFailed = 27, TimerStarted = 28, StartTimerFailed = 29, TimerFired = 30, TimerCanceled = 31, CancelTimerFailed = 32, StartChildWorkflowExecutionInitiated = 33, StartChildWorkflowExecutionFailed = 34, ChildWorkflowExecutionStarted = 35, ChildWorkflowExecutionCompleted = 36, ChildWorkflowExecutionFailed = 37, ChildWorkflowExecutionTimedOut = 38, ChildWorkflowExecutionCanceled = 39, ChildWorkflowExecutionTerminated = 40, SignalExternalWorkflowExecutionInitiated = 41, SignalExternalWorkflowExecutionFailed = 42, ExternalWorkflowExecutionSignaled = 43, RequestCancelExternalWorkflowExecutionInitiated = 44, RequestCancelExternalWorkflowExecutionFailed = 45, ExternalWorkflowExecutionCancelRequested = 46, LambdaFunctionScheduled = 47, LambdaFunctionStarted = 48, LambdaFunctionCompleted = 49, LambdaFunctionFailed = 50, LambdaFunctionTimedOut = 51, ScheduleLambdaFunctionFailed = 52, StartLambdaFunctionFailed = 53 }


	/** Provides details of <code>WorkflowExecutionStarted</code> event. */
	export interface WorkflowExecutionStartedEventAttributes {

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/** Max length: 64 */
		continuedExecutionRunId?: string | null;

		/** Represents a workflow execution. */
		parentWorkflowExecution?: WorkflowExecution;
		parentInitiatedEventId?: number | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** Provides details of <code>WorkflowExecutionStarted</code> event. */
	export interface WorkflowExecutionStartedEventAttributesFormProperties {

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 64 */
		continuedExecutionRunId: FormControl<string | null | undefined>,
		parentInitiatedEventId: FormControl<number | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionStartedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionStartedEventAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			continuedExecutionRunId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			parentInitiatedEventId: new FormControl<number | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionCompleted</code> event. */
	export interface WorkflowExecutionCompletedEventAttributes {

		/** Max length: 32768 */
		result?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionCompleted</code> event. */
	export interface WorkflowExecutionCompletedEventAttributesFormProperties {

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionCompletedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event. */
	export interface CompleteWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CompleteWorkflowExecutionFailed</code> event. */
	export interface CompleteWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCompleteWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<CompleteWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CompleteWorkflowExecutionFailedEventAttributesCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>WorkflowExecutionFailed</code> event. */
	export interface WorkflowExecutionFailedEventAttributes {

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionFailed</code> event. */
	export interface WorkflowExecutionFailedEventAttributesFormProperties {

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>FailWorkflowExecutionFailed</code> event. */
	export interface FailWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>FailWorkflowExecutionFailed</code> event. */
	export interface FailWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateFailWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<FailWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionTimedOut</code> event. */
	export interface WorkflowExecutionTimedOutEventAttributes {

		/** Required */
		timeoutType: WorkflowExecutionTimedOutEventAttributesTimeoutType;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;
	}

	/** Provides the details of the <code>WorkflowExecutionTimedOut</code> event. */
	export interface WorkflowExecutionTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,
	}
	export function CreateWorkflowExecutionTimedOutEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>(undefined, [Validators.required]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WorkflowExecutionTimedOutEventAttributesTimeoutType { START_TO_CLOSE = 0 }


	/** Provides the details of the <code>WorkflowExecutionCanceled</code> event. */
	export interface WorkflowExecutionCanceledEventAttributes {

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>WorkflowExecutionCanceled</code> event. */
	export interface WorkflowExecutionCanceledEventAttributesFormProperties {

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionCanceledEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>CancelWorkflowExecutionFailed</code> event. */
	export interface CancelWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: CompleteWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CancelWorkflowExecutionFailed</code> event. */
	export interface CancelWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCancelWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<CancelWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<CompleteWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event. */
	export interface WorkflowExecutionContinuedAsNewEventAttributes {

		/** Max length: 32768 */
		input?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		newExecutionRunId: string;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** Provides the details of the <code>WorkflowExecutionContinuedAsNew</code> event. */
	export interface WorkflowExecutionContinuedAsNewEventAttributesFormProperties {

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		newExecutionRunId: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionContinuedAsNewEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionContinuedAsNewEventAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			newExecutionRunId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event. */
	export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {

		/** Required */
		cause: ContinueAsNewWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ContinueAsNewWorkflowExecutionFailed</code> event. */
	export interface ContinueAsNewWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<ContinueAsNewWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateContinueAsNewWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<ContinueAsNewWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<ContinueAsNewWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContinueAsNewWorkflowExecutionFailedEventAttributesCause { UNHANDLED_DECISION = 0, WORKFLOW_TYPE_DEPRECATED = 1, WORKFLOW_TYPE_DOES_NOT_EXIST = 2, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 3, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 4, DEFAULT_TASK_LIST_UNDEFINED = 5, DEFAULT_CHILD_POLICY_UNDEFINED = 6, CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED = 7, OPERATION_NOT_PERMITTED = 8 }


	/** Provides the details of the <code>WorkflowExecutionTerminated</code> event. */
	export interface WorkflowExecutionTerminatedEventAttributes {

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;
		cause?: WorkflowExecutionTerminatedEventAttributesCause | null;
	}

	/** Provides the details of the <code>WorkflowExecutionTerminated</code> event. */
	export interface WorkflowExecutionTerminatedEventAttributesFormProperties {

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,
		cause: FormControl<WorkflowExecutionTerminatedEventAttributesCause | null | undefined>,
	}
	export function CreateWorkflowExecutionTerminatedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionTerminatedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<WorkflowExecutionTerminatedEventAttributesCause | null | undefined>(undefined),
		});

	}

	export enum WorkflowExecutionTerminatedEventAttributesCause { CHILD_POLICY_APPLIED = 0, EVENT_LIMIT_EXCEEDED = 1, OPERATOR_INITIATED = 2 }


	/** Provides the details of the <code>WorkflowExecutionCancelRequested</code> event. */
	export interface WorkflowExecutionCancelRequestedEventAttributes {

		/** Represents a workflow execution. */
		externalWorkflowExecution?: WorkflowExecution;
		externalInitiatedEventId?: number | null;
		cause?: WorkflowExecutionCancelRequestedEventAttributesCause | null;
	}

	/** Provides the details of the <code>WorkflowExecutionCancelRequested</code> event. */
	export interface WorkflowExecutionCancelRequestedEventAttributesFormProperties {
		externalInitiatedEventId: FormControl<number | null | undefined>,
		cause: FormControl<WorkflowExecutionCancelRequestedEventAttributesCause | null | undefined>,
	}
	export function CreateWorkflowExecutionCancelRequestedEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionCancelRequestedEventAttributesFormProperties>({
			externalInitiatedEventId: new FormControl<number | null | undefined>(undefined),
			cause: new FormControl<WorkflowExecutionCancelRequestedEventAttributesCause | null | undefined>(undefined),
		});

	}

	export enum WorkflowExecutionCancelRequestedEventAttributesCause { CHILD_POLICY_APPLIED = 0 }


	/** Provides details about the <code>DecisionTaskScheduled</code> event. */
	export interface DecisionTaskScheduledEventAttributes {

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/** Max length: 8 */
		startToCloseTimeout?: string | null;
	}

	/** Provides details about the <code>DecisionTaskScheduled</code> event. */
	export interface DecisionTaskScheduledEventAttributesFormProperties {
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		startToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateDecisionTaskScheduledEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskScheduledEventAttributesFormProperties>({
			taskPriority: new FormControl<string | null | undefined>(undefined),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
		});

	}


	/** Provides the details of the <code>DecisionTaskStarted</code> event. */
	export interface DecisionTaskStartedEventAttributes {

		/** Max length: 256 */
		identity?: string | null;

		/** Required */
		scheduledEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskStarted</code> event. */
	export interface DecisionTaskStartedEventAttributesFormProperties {

		/** Max length: 256 */
		identity: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskStartedEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskStartedEventAttributesFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>DecisionTaskCompleted</code> event. */
	export interface DecisionTaskCompletedEventAttributes {

		/** Max length: 32768 */
		executionContext?: string | null;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskCompleted</code> event. */
	export interface DecisionTaskCompletedEventAttributesFormProperties {

		/** Max length: 32768 */
		executionContext: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskCompletedEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskCompletedEventAttributesFormProperties>({
			executionContext: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>DecisionTaskTimedOut</code> event. */
	export interface DecisionTaskTimedOutEventAttributes {

		/** Required */
		timeoutType: WorkflowExecutionTimedOutEventAttributesTimeoutType;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>DecisionTaskTimedOut</code> event. */
	export interface DecisionTaskTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskTimedOutEventAttributesFormGroup() {
		return new FormGroup<DecisionTaskTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>(undefined, [Validators.required]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskScheduled</code> event. */
	export interface ActivityTaskScheduledEventAttributes {

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 32768 */
		control?: string | null;

		/** Max length: 8 */
		scheduleToStartTimeout?: string | null;

		/** Max length: 8 */
		scheduleToCloseTimeout?: string | null;

		/** Max length: 8 */
		startToCloseTimeout?: string | null;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 8 */
		heartbeatTimeout?: string | null;
	}

	/** Provides the details of the <code>ActivityTaskScheduled</code> event. */
	export interface ActivityTaskScheduledEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/** Max length: 8 */
		scheduleToStartTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		scheduleToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		startToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 8 */
		heartbeatTimeout: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskScheduledEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskScheduledEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduleToStartTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			scheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			heartbeatTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
		});

	}


	/** Provides the details of the <code>ActivityTaskStarted</code> event. */
	export interface ActivityTaskStartedEventAttributes {

		/** Max length: 256 */
		identity?: string | null;

		/** Required */
		scheduledEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskStarted</code> event. */
	export interface ActivityTaskStartedEventAttributesFormProperties {

		/** Max length: 256 */
		identity: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskStartedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskStartedEventAttributesFormProperties>({
			identity: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskCompleted</code> event. */
	export interface ActivityTaskCompletedEventAttributes {

		/** Max length: 32768 */
		result?: string | null;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskCompleted</code> event. */
	export interface ActivityTaskCompletedEventAttributesFormProperties {

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskCompletedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskFailed</code> event. */
	export interface ActivityTaskFailedEventAttributes {

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ActivityTaskFailed</code> event. */
	export interface ActivityTaskFailedEventAttributesFormProperties {

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ActivityTaskTimedOut</code> event. */
	export interface ActivityTaskTimedOutEventAttributes {

		/** Required */
		timeoutType: ActivityTaskTimedOutEventAttributesTimeoutType;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;

		/** Max length: 2048 */
		details?: string | null;
	}

	/** Provides the details of the <code>ActivityTaskTimedOut</code> event. */
	export interface ActivityTaskTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<ActivityTaskTimedOutEventAttributesTimeoutType | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskTimedOutEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<ActivityTaskTimedOutEventAttributesTimeoutType | null | undefined>(undefined, [Validators.required]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export enum ActivityTaskTimedOutEventAttributesTimeoutType { START_TO_CLOSE = 0, SCHEDULE_TO_START = 1, SCHEDULE_TO_CLOSE = 2, HEARTBEAT = 3 }


	/** Provides the details of the <code>ActivityTaskCanceled</code> event. */
	export interface ActivityTaskCanceledEventAttributes {

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		latestCancelRequestedEventId?: number | null;
	}

	/** Provides the details of the <code>ActivityTaskCanceled</code> event. */
	export interface ActivityTaskCanceledEventAttributesFormProperties {

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		latestCancelRequestedEventId: FormControl<number | null | undefined>,
	}
	export function CreateActivityTaskCanceledEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			latestCancelRequestedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ActivityTaskCancelRequested</code> event. */
	export interface ActivityTaskCancelRequestedEventAttributes {

		/** Required */
		decisionTaskCompletedEventId: number;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;
	}

	/** Provides the details of the <code>ActivityTaskCancelRequested</code> event. */
	export interface ActivityTaskCancelRequestedEventAttributesFormProperties {

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskCancelRequestedEventAttributesFormGroup() {
		return new FormGroup<ActivityTaskCancelRequestedEventAttributesFormProperties>({
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Provides the details of the <code>WorkflowExecutionSignaled</code> event. */
	export interface WorkflowExecutionSignaledEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: string;

		/** Max length: 32768 */
		input?: string | null;

		/** Represents a workflow execution. */
		externalWorkflowExecution?: WorkflowExecution;
		externalInitiatedEventId?: number | null;
	}

	/** Provides the details of the <code>WorkflowExecutionSignaled</code> event. */
	export interface WorkflowExecutionSignaledEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
		externalInitiatedEventId: FormControl<number | null | undefined>,
	}
	export function CreateWorkflowExecutionSignaledEventAttributesFormGroup() {
		return new FormGroup<WorkflowExecutionSignaledEventAttributesFormProperties>({
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			externalInitiatedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>MarkerRecorded</code> event. */
	export interface MarkerRecordedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: string;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>MarkerRecorded</code> event. */
	export interface MarkerRecordedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateMarkerRecordedEventAttributesFormGroup() {
		return new FormGroup<MarkerRecordedEventAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>RecordMarkerFailed</code> event. */
	export interface RecordMarkerFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: string;

		/** Required */
		cause: RecordMarkerFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>RecordMarkerFailed</code> event. */
	export interface RecordMarkerFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RecordMarkerFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateRecordMarkerFailedEventAttributesFormGroup() {
		return new FormGroup<RecordMarkerFailedEventAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			cause: new FormControl<RecordMarkerFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RecordMarkerFailedEventAttributesCause { OPERATION_NOT_PERMITTED = 0 }


	/** Provides the details of the <code>TimerStarted</code> event. */
	export interface TimerStartedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Max length: 32768 */
		control?: string | null;

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		startToFireTimeout: string;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>TimerStarted</code> event. */
	export interface TimerStartedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		startToFireTimeout: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerStartedEventAttributesFormGroup() {
		return new FormGroup<TimerStartedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			startToFireTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>TimerFired</code> event. */
	export interface TimerFiredEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>TimerFired</code> event. */
	export interface TimerFiredEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerFiredEventAttributesFormGroup() {
		return new FormGroup<TimerFiredEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Provides the details of the <code>TimerCanceled</code> event.  */
	export interface TimerCanceledEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Required */
		startedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/**  Provides the details of the <code>TimerCanceled</code> event.  */
	export interface TimerCanceledEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateTimerCanceledEventAttributesFormGroup() {
		return new FormGroup<TimerCanceledEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event. */
	export interface StartChildWorkflowExecutionInitiatedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Max length: 32768 */
		control?: string | null;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;
		taskPriority?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Required */
		childPolicy: WorkflowExecutionConfigurationChildPolicy;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event. */
	export interface StartChildWorkflowExecutionInitiatedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Required */
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined, [Validators.required]),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionStarted</code> event. */
	export interface ChildWorkflowExecutionStartedEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
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

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Max length: 32768 */
		result?: string | null;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionCompleted</code> event. */
	export interface ChildWorkflowExecutionCompletedEventAttributesFormProperties {

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionCompletedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionCompletedEventAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionFailed</code> event. */
	export interface ChildWorkflowExecutionFailedEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionFailed</code> event. */
	export interface ChildWorkflowExecutionFailedEventAttributesFormProperties {

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionFailedEventAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event. */
	export interface ChildWorkflowExecutionTimedOutEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Required */
		timeoutType: WorkflowExecutionTimedOutEventAttributesTimeoutType;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provides the details of the <code>ChildWorkflowExecutionTimedOut</code> event. */
	export interface ChildWorkflowExecutionTimedOutEventAttributesFormProperties {

		/** Required */
		timeoutType: FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionTimedOutEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionTimedOutEventAttributesFormProperties>({
			timeoutType: new FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provide details of the <code>ChildWorkflowExecutionCanceled</code> event. */
	export interface ChildWorkflowExecutionCanceledEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Max length: 32768 */
		details?: string | null;

		/** Required */
		initiatedEventId: number;

		/** Required */
		startedEventId: number;
	}

	/** Provide details of the <code>ChildWorkflowExecutionCanceled</code> event. */
	export interface ChildWorkflowExecutionCanceledEventAttributesFormProperties {

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
	}
	export function CreateChildWorkflowExecutionCanceledEventAttributesFormGroup() {
		return new FormGroup<ChildWorkflowExecutionCanceledEventAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the details of the <code>ChildWorkflowExecutionTerminated</code> event. */
	export interface ChildWorkflowExecutionTerminatedEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: string;

		/** Max length: 32768 */
		input?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** Provides the details of the <code>SignalExternalWorkflowExecutionInitiated</code> event. */
	export interface SignalExternalWorkflowExecutionInitiatedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Provides the details of the <code>ExternalWorkflowExecutionSignaled</code> event. */
	export interface ExternalWorkflowExecutionSignaledEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/** Required */
		cause: SignalExternalWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** Provides the details of the <code>SignalExternalWorkflowExecutionFailed</code> event. */
	export interface SignalExternalWorkflowExecutionFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<SignalExternalWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionFailedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			cause: new FormControl<SignalExternalWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export enum SignalExternalWorkflowExecutionFailedEventAttributesCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }


	/** Provides the details of the <code>ExternalWorkflowExecutionCancelRequested</code> event. */
	export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {

		/**
		 * Represents a workflow execution.
		 * Required
		 */
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionInitiated</code> event. */
	export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionInitiatedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event. */
	export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/** Required */
		cause: RequestCancelExternalWorkflowExecutionFailedEventAttributesCause;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** Provides the details of the <code>RequestCancelExternalWorkflowExecutionFailed</code> event. */
	export interface RequestCancelExternalWorkflowExecutionFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RequestCancelExternalWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionFailedEventAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			cause: new FormControl<RequestCancelExternalWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export enum RequestCancelExternalWorkflowExecutionFailedEventAttributesCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }


	/** Provides the details of the <code>ScheduleActivityTaskFailed</code> event. */
	export interface ScheduleActivityTaskFailedEventAttributes {

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;

		/** Required */
		cause: ScheduleActivityTaskFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ScheduleActivityTaskFailed</code> event. */
	export interface ScheduleActivityTaskFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<ScheduleActivityTaskFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateScheduleActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<ScheduleActivityTaskFailedEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			cause: new FormControl<ScheduleActivityTaskFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleActivityTaskFailedEventAttributesCause { ACTIVITY_TYPE_DEPRECATED = 0, ACTIVITY_TYPE_DOES_NOT_EXIST = 1, ACTIVITY_ID_ALREADY_IN_USE = 2, OPEN_ACTIVITIES_LIMIT_EXCEEDED = 3, ACTIVITY_CREATION_RATE_EXCEEDED = 4, DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED = 5, DEFAULT_TASK_LIST_UNDEFINED = 6, DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED = 7, DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }


	/** Provides the details of the <code>RequestCancelActivityTaskFailed</code> event. */
	export interface RequestCancelActivityTaskFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;

		/** Required */
		cause: RequestCancelActivityTaskFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>RequestCancelActivityTaskFailed</code> event. */
	export interface RequestCancelActivityTaskFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<RequestCancelActivityTaskFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateRequestCancelActivityTaskFailedEventAttributesFormGroup() {
		return new FormGroup<RequestCancelActivityTaskFailedEventAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			cause: new FormControl<RequestCancelActivityTaskFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RequestCancelActivityTaskFailedEventAttributesCause { ACTIVITY_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>StartTimerFailed</code> event. */
	export interface StartTimerFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Required */
		cause: StartTimerFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>StartTimerFailed</code> event. */
	export interface StartTimerFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<StartTimerFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateStartTimerFailedEventAttributesFormGroup() {
		return new FormGroup<StartTimerFailedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			cause: new FormControl<StartTimerFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum StartTimerFailedEventAttributesCause { TIMER_ID_ALREADY_IN_USE = 0, OPEN_TIMERS_LIMIT_EXCEEDED = 1, TIMER_CREATION_RATE_EXCEEDED = 2, OPERATION_NOT_PERMITTED = 3 }


	/** Provides the details of the <code>CancelTimerFailed</code> event. */
	export interface CancelTimerFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Required */
		cause: CancelTimerFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>CancelTimerFailed</code> event. */
	export interface CancelTimerFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<CancelTimerFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateCancelTimerFailedEventAttributesFormGroup() {
		return new FormGroup<CancelTimerFailedEventAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			cause: new FormControl<CancelTimerFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CancelTimerFailedEventAttributesCause { TIMER_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }


	/** Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event. */
	export interface StartChildWorkflowExecutionFailedEventAttributes {

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Required */
		cause: StartChildWorkflowExecutionFailedEventAttributesCause;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Required */
		initiatedEventId: number;

		/** Required */
		decisionTaskCompletedEventId: number;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** Provides the details of the <code>StartChildWorkflowExecutionFailed</code> event. */
	export interface StartChildWorkflowExecutionFailedEventAttributesFormProperties {

		/** Required */
		cause: FormControl<StartChildWorkflowExecutionFailedEventAttributesCause | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Required */
		initiatedEventId: FormControl<number | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionFailedEventAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionFailedEventAttributesFormProperties>({
			cause: new FormControl<StartChildWorkflowExecutionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			initiatedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export enum StartChildWorkflowExecutionFailedEventAttributesCause { WORKFLOW_TYPE_DOES_NOT_EXIST = 0, WORKFLOW_TYPE_DEPRECATED = 1, OPEN_CHILDREN_LIMIT_EXCEEDED = 2, OPEN_WORKFLOWS_LIMIT_EXCEEDED = 3, CHILD_CREATION_RATE_EXCEEDED = 4, WORKFLOW_ALREADY_RUNNING = 5, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 6, DEFAULT_TASK_LIST_UNDEFINED = 7, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_CHILD_POLICY_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }


	/** Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types. */
	export interface LambdaFunctionScheduledEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/** Max length: 32768 */
		control?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		input?: string | null;

		/** Max length: 8 */
		startToCloseTimeout?: string | null;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>LambdaFunctionScheduled</code> event. It isn't set for other event types. */
	export interface LambdaFunctionScheduledEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		startToCloseTimeout: FormControl<string | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionScheduledEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionScheduledEventAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
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

		/** Max length: 32768 */
		result?: string | null;
	}

	/** Provides the details of the <code>LambdaFunctionCompleted</code> event. It isn't set for other event types. */
	export interface LambdaFunctionCompletedEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionCompletedEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionCompletedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface LambdaFunctionFailedEventAttributes {

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;
	}

	/** Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface LambdaFunctionFailedEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionFailedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Provides details of the <code>LambdaFunctionTimedOut</code> event. */
	export interface LambdaFunctionTimedOutEventAttributes {

		/** Required */
		scheduledEventId: number;

		/** Required */
		startedEventId: number;
		timeoutType?: WorkflowExecutionTimedOutEventAttributesTimeoutType | null;
	}

	/** Provides details of the <code>LambdaFunctionTimedOut</code> event. */
	export interface LambdaFunctionTimedOutEventAttributesFormProperties {

		/** Required */
		scheduledEventId: FormControl<number | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,
		timeoutType: FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>,
	}
	export function CreateLambdaFunctionTimedOutEventAttributesFormGroup() {
		return new FormGroup<LambdaFunctionTimedOutEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timeoutType: new FormControl<WorkflowExecutionTimedOutEventAttributesTimeoutType | null | undefined>(undefined),
		});

	}


	/** Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface ScheduleLambdaFunctionFailedEventAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/** Required */
		cause: ScheduleLambdaFunctionFailedEventAttributesCause;

		/** Required */
		decisionTaskCompletedEventId: number;
	}

	/** Provides the details of the <code>ScheduleLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface ScheduleLambdaFunctionFailedEventAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<ScheduleLambdaFunctionFailedEventAttributesCause | null | undefined>,

		/** Required */
		decisionTaskCompletedEventId: FormControl<number | null | undefined>,
	}
	export function CreateScheduleLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<ScheduleLambdaFunctionFailedEventAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			cause: new FormControl<ScheduleLambdaFunctionFailedEventAttributesCause | null | undefined>(undefined, [Validators.required]),
			decisionTaskCompletedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScheduleLambdaFunctionFailedEventAttributesCause { ID_ALREADY_IN_USE = 0, OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED = 1, LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED = 2, LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION = 3 }


	/** Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface StartLambdaFunctionFailedEventAttributes {
		scheduledEventId?: number | null;
		cause?: StartLambdaFunctionFailedEventAttributesCause | null;

		/** Max length: 1728 */
		message?: string | null;
	}

	/** Provides the details of the <code>StartLambdaFunctionFailed</code> event. It isn't set for other event types. */
	export interface StartLambdaFunctionFailedEventAttributesFormProperties {
		scheduledEventId: FormControl<number | null | undefined>,
		cause: FormControl<StartLambdaFunctionFailedEventAttributesCause | null | undefined>,

		/** Max length: 1728 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStartLambdaFunctionFailedEventAttributesFormGroup() {
		return new FormGroup<StartLambdaFunctionFailedEventAttributesFormProperties>({
			scheduledEventId: new FormControl<number | null | undefined>(undefined),
			cause: new FormControl<StartLambdaFunctionFailedEventAttributesCause | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1728)]),
		});

	}

	export enum StartLambdaFunctionFailedEventAttributesCause { ASSUME_ROLE_FAILED = 0 }

	export interface GetWorkflowExecutionHistoryInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		execution: WorkflowExecution;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface GetWorkflowExecutionHistoryInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateGetWorkflowExecutionHistoryInputFormGroup() {
		return new FormGroup<GetWorkflowExecutionHistoryInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated list of activity type information structures. */
	export interface ActivityTypeInfos {

		/** Required */
		typeInfos: Array<ActivityTypeInfo>;

		/** Max length: 2048 */
		nextPageToken?: string | null;
	}

	/** Contains a paginated list of activity type information structures. */
	export interface ActivityTypeInfosFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateActivityTypeInfosFormGroup() {
		return new FormGroup<ActivityTypeInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface ListActivityTypesInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/** Required */
		registrationStatus: ActivityTypeInfoStatus;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListActivityTypesInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListActivityTypesInputFormGroup() {
		return new FormGroup<ListActivityTypesInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			registrationStatus: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated list of information about workflow executions. */
	export interface WorkflowExecutionInfos {

		/** Required */
		executionInfos: Array<WorkflowExecutionInfo>;

		/** Max length: 2048 */
		nextPageToken?: string | null;
	}

	/** Contains a paginated list of information about workflow executions. */
	export interface WorkflowExecutionInfosFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionInfosFormGroup() {
		return new FormGroup<WorkflowExecutionInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface ListClosedWorkflowExecutionsInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> */
		startTimeFilter?: ExecutionTimeFilter;

		/** Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code> */
		closeTimeFilter?: ExecutionTimeFilter;

		/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
		executionFilter?: WorkflowExecutionFilter;

		/** Used to filter the closed workflow executions in visibility APIs by their close status. */
		closeStatusFilter?: CloseStatusFilter;

		/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
		typeFilter?: WorkflowTypeFilter;

		/** Used to filter the workflow executions in visibility APIs based on a tag. */
		tagFilter?: TagFilter;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListClosedWorkflowExecutionsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListClosedWorkflowExecutionsInputFormGroup() {
		return new FormGroup<ListClosedWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a paginated collection of DomainInfo structures. */
	export interface DomainInfos {

		/** Required */
		domainInfos: Array<DomainInfo>;

		/** Max length: 2048 */
		nextPageToken?: string | null;
	}

	/** Contains a paginated collection of DomainInfo structures. */
	export interface DomainInfosFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDomainInfosFormGroup() {
		return new FormGroup<DomainInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface ListDomainsInput {

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/** Required */
		registrationStatus: ActivityTypeInfoStatus;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListDomainsInputFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListDomainsInputFormGroup() {
		return new FormGroup<ListDomainsInputFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			registrationStatus: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListOpenWorkflowExecutionsInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Used to filter the workflow executions in visibility APIs by various time-based rules. Each parameter, if specified, defines a rule that must be satisfied by each returned query result. The parameter values are in the <a href="https://en.wikipedia.org/wiki/Unix_time">Unix Time format</a>. For example: <code>"oldestDate": 1325376070.</code>
		 * Required
		 */
		startTimeFilter: ExecutionTimeFilter;

		/** Used to filter workflow execution query results by type. Each parameter, if specified, defines a rule that must be satisfied by each returned result. */
		typeFilter?: WorkflowTypeFilter;

		/** Used to filter the workflow executions in visibility APIs based on a tag. */
		tagFilter?: TagFilter;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;

		/** Used to filter the workflow executions in visibility APIs by their <code>workflowId</code>. */
		executionFilter?: WorkflowExecutionFilter;
	}
	export interface ListOpenWorkflowExecutionsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListOpenWorkflowExecutionsInputFormGroup() {
		return new FormGroup<ListOpenWorkflowExecutionsInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
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

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/** Max length: 256 */
		value?: string | null;
	}

	/** <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface ResourceTagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/** Max length: 256 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateResourceTagFormGroup() {
		return new FormGroup<ResourceTagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface ListTagsForResourceInput {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
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

		/** Max length: 2048 */
		nextPageToken?: string | null;
	}

	/** Contains a paginated list of information structures about workflow types. */
	export interface WorkflowTypeInfosFormProperties {

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowTypeInfosFormGroup() {
		return new FormGroup<WorkflowTypeInfosFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface ListWorkflowTypesInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name?: string | null;

		/** Required */
		registrationStatus: ActivityTypeInfoStatus;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface ListWorkflowTypesInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		registrationStatus: FormControl<ActivityTypeInfoStatus | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateListWorkflowTypesInputFormGroup() {
		return new FormGroup<ListWorkflowTypesInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			registrationStatus: new FormControl<ActivityTypeInfoStatus | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Unit of work sent to an activity worker. */
	export interface ActivityTask {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;

		/** Required */
		startedEventId: number;

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;

		/** Max length: 32768 */
		input?: string | null;
	}

	/** Unit of work sent to an activity worker. */
	export interface ActivityTaskFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateActivityTaskFormGroup() {
		return new FormGroup<ActivityTaskFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export interface PollForActivityTaskInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;

		/** Max length: 256 */
		identity?: string | null;
	}
	export interface PollForActivityTaskInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/** Max length: 256 */
		identity: FormControl<string | null | undefined>,
	}
	export function CreatePollForActivityTaskInputFormGroup() {
		return new FormGroup<PollForActivityTaskInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			identity: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions. */
	export interface DecisionTask {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/** Required */
		startedEventId: number;

		/**
		 * Represents a workflow execution.
		 * Required
		 */
		workflowExecution: WorkflowExecution;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Required */
		events: Array<HistoryEvent>;

		/** Max length: 2048 */
		nextPageToken?: string | null;
		previousStartedEventId?: number | null;
	}

	/** A structure that represents a decision task. Decision tasks are sent to deciders in order for them to make decisions. */
	export interface DecisionTaskFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Required */
		startedEventId: FormControl<number | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,
		previousStartedEventId: FormControl<number | null | undefined>,
	}
	export function CreateDecisionTaskFormGroup() {
		return new FormGroup<DecisionTaskFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			startedEventId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			previousStartedEventId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PollForDecisionTaskInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a task list.
		 * Required
		 */
		taskList: TaskList;

		/** Max length: 256 */
		identity?: string | null;

		/** Max length: 2048 */
		nextPageToken?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize?: number | null;
		reverseOrder?: boolean | null;
	}
	export interface PollForDecisionTaskInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/** Max length: 256 */
		identity: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maximumPageSize: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreatePollForDecisionTaskInputFormGroup() {
		return new FormGroup<PollForDecisionTaskInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			identity: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			nextPageToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
			maximumPageSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/** Max length: 2048 */
		details?: string | null;
	}
	export interface RecordActivityTaskHeartbeatInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 2048 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateRecordActivityTaskHeartbeatInputFormGroup() {
		return new FormGroup<RecordActivityTaskHeartbeatInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048)]),
		});

	}

	export interface RegisterActivityTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: string;

		/** Max length: 1024 */
		description?: string | null;

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout?: string | null;

		/** Max length: 8 */
		defaultTaskHeartbeatTimeout?: string | null;

		/** Represents a task list. */
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string | null;

		/** Max length: 8 */
		defaultTaskScheduleToStartTimeout?: string | null;

		/** Max length: 8 */
		defaultTaskScheduleToCloseTimeout?: string | null;
	}
	export interface RegisterActivityTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskHeartbeatTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskScheduleToStartTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskScheduleToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateRegisterActivityTypeInputFormGroup() {
		return new FormGroup<RegisterActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskHeartbeatTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultTaskScheduleToStartTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskScheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/** Max length: 1024 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		workflowExecutionRetentionPeriodInDays: string;
		tags?: Array<ResourceTag>;
	}
	export interface RegisterDomainInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		workflowExecutionRetentionPeriodInDays: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDomainInputFormGroup() {
		return new FormGroup<RegisterDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			workflowExecutionRetentionPeriodInDays: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: string;

		/** Max length: 1024 */
		description?: string | null;

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout?: string | null;

		/** Max length: 8 */
		defaultExecutionStartToCloseTimeout?: string | null;

		/** Represents a task list. */
		defaultTaskList?: TaskList;
		defaultTaskPriority?: string | null;
		defaultChildPolicy?: WorkflowExecutionConfigurationChildPolicy | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		defaultLambdaRole?: string | null;
	}
	export interface RegisterWorkflowTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		description: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultTaskStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		defaultExecutionStartToCloseTimeout: FormControl<string | null | undefined>,
		defaultTaskPriority: FormControl<string | null | undefined>,
		defaultChildPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		defaultLambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateRegisterWorkflowTypeInputFormGroup() {
		return new FormGroup<RegisterWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			defaultTaskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultExecutionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			defaultTaskPriority: new FormControl<string | null | undefined>(undefined),
			defaultChildPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
			defaultLambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface RequestCancelWorkflowExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;
	}
	export interface RequestCancelWorkflowExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelWorkflowExecutionInputFormGroup() {
		return new FormGroup<RequestCancelWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
		});

	}

	export interface RespondActivityTaskCanceledInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/** Max length: 32768 */
		details?: string | null;
	}
	export interface RespondActivityTaskCanceledInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskCanceledInputFormGroup() {
		return new FormGroup<RespondActivityTaskCanceledInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export interface RespondActivityTaskCompletedInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/** Max length: 32768 */
		result?: string | null;
	}
	export interface RespondActivityTaskCompletedInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskCompletedInputFormGroup() {
		return new FormGroup<RespondActivityTaskCompletedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export interface RespondActivityTaskFailedInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;
	}
	export interface RespondActivityTaskFailedInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateRespondActivityTaskFailedInputFormGroup() {
		return new FormGroup<RespondActivityTaskFailedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Input data for a TaskCompleted response to a decision task. */
	export interface RespondDecisionTaskCompletedInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;
		decisions?: Array<Decision>;

		/** Max length: 32768 */
		executionContext?: string | null;
	}

	/** Input data for a TaskCompleted response to a decision task. */
	export interface RespondDecisionTaskCompletedInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		executionContext: FormControl<string | null | undefined>,
	}
	export function CreateRespondDecisionTaskCompletedInputFormGroup() {
		return new FormGroup<RespondDecisionTaskCompletedInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			executionContext: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul> */
	export interface Decision {

		/** Required */
		decisionType: DecisionDecisionType;

		/** <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;

		/** <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;

		/** <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;

		/** <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		startTimerDecisionAttributes?: StartTimerDecisionAttributes;

		/** <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;

		/** <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;

		/** <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
		startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;

		/** Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>. */
		scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
	}

	/** <p>Specifies a decision made by the decider. A decision can be one of these types:</p> <ul> <li> <p> <code>CancelTimer</code> – Cancels a previously started timer and records a <code>TimerCanceled</code> event in the history.</p> </li> <li> <p> <code>CancelWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCanceled</code> event in the history.</p> </li> <li> <p> <code>CompleteWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionCompleted</code> event in the history .</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecution</code> – Closes the workflow execution and starts a new workflow execution of the same type using the same workflow ID and a unique run Id. A <code>WorkflowExecutionContinuedAsNew</code> event is recorded in the history.</p> </li> <li> <p> <code>FailWorkflowExecution</code> – Closes the workflow execution and records a <code>WorkflowExecutionFailed</code> event in the history.</p> </li> <li> <p> <code>RecordMarker</code> – Records a <code>MarkerRecorded</code> event in the history. Markers can be used for adding custom information in the history for instance to let deciders know that they don't need to look at the history beyond the marker event.</p> </li> <li> <p> <code>RequestCancelActivityTask</code> – Attempts to cancel a previously scheduled activity task. If the activity task was scheduled but has not been assigned to a worker, then it is canceled. If the activity task was already assigned to a worker, then the worker is informed that cancellation has been requested in the response to <a>RecordActivityTaskHeartbeat</a>.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecution</code> – Requests that a request be made to cancel the specified external workflow execution and records a <code>RequestCancelExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>ScheduleActivityTask</code> – Schedules an activity task.</p> </li> <li> <p> <code>SignalExternalWorkflowExecution</code> – Requests a signal to be delivered to the specified external workflow execution and records a <code>SignalExternalWorkflowExecutionInitiated</code> event in the history.</p> </li> <li> <p> <code>StartChildWorkflowExecution</code> – Requests that a child workflow execution be started and records a <code>StartChildWorkflowExecutionInitiated</code> event in the history. The child workflow execution is a separate workflow execution with its own history.</p> </li> <li> <p> <code>StartTimer</code> – Starts a timer for this workflow execution and records a <code>TimerStarted</code> event in the history. This timer fires after the specified delay and record a <code>TimerFired</code> event.</p> </li> </ul> <p> <b>Access Control</b> </p> <p>If you grant permission to use <code>RespondDecisionTaskCompleted</code>, you can use IAM policies to express permissions for the list of decisions returned by this action as if they were members of the API. Treating decisions as a pseudo API maintains a uniform conceptual model and helps keep policies readable. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <p> <b>Decision Failure</b> </p> <p>Decisions can fail for several reasons</p> <ul> <li> <p>The ordering of decisions should follow a logical flow. Some decisions might not make sense in the current context of the workflow execution and therefore fails.</p> </li> <li> <p>A limit on your account was reached.</p> </li> <li> <p>The decision lacks sufficient permissions.</p> </li> </ul> <p>One of the following events might be added to the history to indicate an error. The event attribute's <code>cause</code> parameter indicates the cause. If <code>cause</code> is set to <code>OPERATION_NOT_PERMITTED</code>, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> <ul> <li> <p> <code>ScheduleActivityTaskFailed</code> – A <code>ScheduleActivityTask</code> decision failed. This could happen if the activity type specified in the decision isn't registered, is in a deprecated state, or the decision isn't properly configured.</p> </li> <li> <p> <code>RequestCancelActivityTaskFailed</code> – A <code>RequestCancelActivityTask</code> decision failed. This could happen if there is no open activity task with the specified activityId.</p> </li> <li> <p> <code>StartTimerFailed</code> – A <code>StartTimer</code> decision failed. This could happen if there is another open timer with the same timerId.</p> </li> <li> <p> <code>CancelTimerFailed</code> – A <code>CancelTimer</code> decision failed. This could happen if there is no open timer with the specified timerId.</p> </li> <li> <p> <code>StartChildWorkflowExecutionFailed</code> – A <code>StartChildWorkflowExecution</code> decision failed. This could happen if the workflow type specified isn't registered, is deprecated, or the decision isn't properly configured.</p> </li> <li> <p> <code>SignalExternalWorkflowExecutionFailed</code> – A <code>SignalExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>RequestCancelExternalWorkflowExecutionFailed</code> – A <code>RequestCancelExternalWorkflowExecution</code> decision failed. This could happen if the <code>workflowID</code> specified in the decision was incorrect.</p> </li> <li> <p> <code>CancelWorkflowExecutionFailed</code> – A <code>CancelWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>CompleteWorkflowExecutionFailed</code> – A <code>CompleteWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> <li> <p> <code>ContinueAsNewWorkflowExecutionFailed</code> – A <code>ContinueAsNewWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution or the ContinueAsNewWorkflowExecution decision was not configured correctly.</p> </li> <li> <p> <code>FailWorkflowExecutionFailed</code> – A <code>FailWorkflowExecution</code> decision failed. This could happen if there is an unhandled decision task pending in the workflow execution.</p> </li> </ul> <p>The preceding error events might occur due to an error in the decider logic, which might put the workflow execution in an unstable state The cause field in the event structure for the error event indicates the cause of the error.</p> <note> <p>A workflow execution may be closed by the decider by returning one of the following decisions when completing a decision task: <code>CompleteWorkflowExecution</code>, <code>FailWorkflowExecution</code>, <code>CancelWorkflowExecution</code> and <code>ContinueAsNewWorkflowExecution</code>. An <code>UnhandledDecision</code> fault is returned if a workflow closing decision is specified and a signal or activity event had been added to the history while the decision task was being performed by the decider. Unlike the above situations which are logic issues, this fault is always possible because of race conditions in a distributed system. The right action here is to call <a>RespondDecisionTaskCompleted</a> without any decisions. This would result in another decision task with these new events included in the history. The decider should handle the new events and may decide to close the workflow execution.</p> </note> <p> <b>How to Code a Decision</b> </p> <p>You code a decision by first setting the decision type field to one of the above decision values, and then set the corresponding attributes field shown below:</p> <ul> <li> <p> <code> <a>ScheduleActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelActivityTaskDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CompleteWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>FailWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>ContinueAsNewWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RecordMarkerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>CancelTimerDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>SignalExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>RequestCancelExternalWorkflowExecutionDecisionAttributes</a> </code> </p> </li> <li> <p> <code> <a>StartChildWorkflowExecutionDecisionAttributes</a> </code> </p> </li> </ul> */
	export interface DecisionFormProperties {

		/** Required */
		decisionType: FormControl<DecisionDecisionType | null | undefined>,
	}
	export function CreateDecisionFormGroup() {
		return new FormGroup<DecisionFormProperties>({
			decisionType: new FormControl<DecisionDecisionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DecisionDecisionType { ScheduleActivityTask = 0, RequestCancelActivityTask = 1, CompleteWorkflowExecution = 2, FailWorkflowExecution = 3, CancelWorkflowExecution = 4, ContinueAsNewWorkflowExecution = 5, RecordMarker = 6, StartTimer = 7, CancelTimer = 8, SignalExternalWorkflowExecution = 9, RequestCancelExternalWorkflowExecution = 10, StartChildWorkflowExecution = 11, ScheduleLambdaFunction = 12 }


	/** <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ScheduleActivityTaskDecisionAttributes {

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;

		/** Max length: 32768 */
		control?: string | null;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		scheduleToCloseTimeout?: string | null;

		/** Represents a task list. */
		taskList?: TaskList;
		taskPriority?: string | null;

		/** Max length: 8 */
		scheduleToStartTimeout?: string | null;

		/** Max length: 8 */
		startToCloseTimeout?: string | null;

		/** Max length: 8 */
		heartbeatTimeout?: string | null;
	}

	/** <p>Provides the details of the <code>ScheduleActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>activityType.name</code> – String constraint. The key is <code>swf:activityType.name</code>.</p> </li> <li> <p> <code>activityType.version</code> – String constraint. The key is <code>swf:activityType.version</code>.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ScheduleActivityTaskDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		scheduleToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		scheduleToStartTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		startToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		heartbeatTimeout: FormControl<string | null | undefined>,
	}
	export function CreateScheduleActivityTaskDecisionAttributesFormGroup() {
		return new FormGroup<ScheduleActivityTaskDecisionAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			scheduleToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			scheduleToStartTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			heartbeatTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
		});

	}


	/** <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelActivityTaskDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: string;
	}

	/** <p>Provides the details of the <code>RequestCancelActivityTask</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelActivityTaskDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityId: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelActivityTaskDecisionAttributesFormGroup() {
		return new FormGroup<RequestCancelActivityTaskDecisionAttributesFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CompleteWorkflowExecutionDecisionAttributes {

		/** Max length: 32768 */
		result?: string | null;
	}

	/** <p>Provides the details of the <code>CompleteWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CompleteWorkflowExecutionDecisionAttributesFormProperties {

		/** Max length: 32768 */
		result: FormControl<string | null | undefined>,
	}
	export function CreateCompleteWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<CompleteWorkflowExecutionDecisionAttributesFormProperties>({
			result: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface FailWorkflowExecutionDecisionAttributes {

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;
	}

	/** <p>Provides the details of the <code>FailWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface FailWorkflowExecutionDecisionAttributesFormProperties {

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateFailWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<FailWorkflowExecutionDecisionAttributesFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelWorkflowExecutionDecisionAttributes {

		/** Max length: 32768 */
		details?: string | null;
	}

	/** <p>Provides the details of the <code>CancelWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelWorkflowExecutionDecisionAttributesFormProperties {

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateCancelWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<CancelWorkflowExecutionDecisionAttributesFormProperties>({
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ContinueAsNewWorkflowExecutionDecisionAttributes {

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/** Represents a task list. */
		taskList?: TaskList;
		taskPriority?: string | null;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;
		childPolicy?: WorkflowExecutionConfigurationChildPolicy | null;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		workflowTypeVersion?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** <p>Provides the details of the <code>ContinueAsNewWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tag</code> – A tag used to identify the workflow execution</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface ContinueAsNewWorkflowExecutionDecisionAttributesFormProperties {

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		workflowTypeVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateContinueAsNewWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<ContinueAsNewWorkflowExecutionDecisionAttributesFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
			workflowTypeVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RecordMarkerDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: string;

		/** Max length: 32768 */
		details?: string | null;
	}

	/** <p>Provides the details of the <code>RecordMarker</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RecordMarkerDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		markerName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateRecordMarkerDecisionAttributesFormGroup() {
		return new FormGroup<RecordMarkerDecisionAttributesFormProperties>({
			markerName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartTimerDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;

		/** Max length: 32768 */
		control?: string | null;

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		startToFireTimeout: string;
	}

	/** <p>Provides the details of the <code>StartTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartTimerDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 8
		 * Min length: 1
		 */
		startToFireTimeout: FormControl<string | null | undefined>,
	}
	export function CreateStartTimerDecisionAttributesFormGroup() {
		return new FormGroup<StartTimerDecisionAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			startToFireTimeout: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(1)]),
		});

	}


	/** <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelTimerDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: string;
	}

	/** <p>Provides the details of the <code>CancelTimer</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface CancelTimerDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		timerId: FormControl<string | null | undefined>,
	}
	export function CreateCancelTimerDecisionAttributesFormGroup() {
		return new FormGroup<CancelTimerDecisionAttributesFormProperties>({
			timerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface SignalExternalWorkflowExecutionDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: string;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** <p>Provides the details of the <code>SignalExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface SignalExternalWorkflowExecutionDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateSignalExternalWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<SignalExternalWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/** Max length: 32768 */
		control?: string | null;
	}

	/** <p>Provides the details of the <code>RequestCancelExternalWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>You cannot use an IAM policy to constrain this action's parameters.</p> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface RequestCancelExternalWorkflowExecutionDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,
	}
	export function CreateRequestCancelExternalWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<RequestCancelExternalWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartChildWorkflowExecutionDecisionAttributes {

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 32768 */
		control?: string | null;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/** Represents a task list. */
		taskList?: TaskList;
		taskPriority?: string | null;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;
		childPolicy?: WorkflowExecutionConfigurationChildPolicy | null;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}

	/** <p>Provides the details of the <code>StartChildWorkflowExecution</code> decision.</p> <p> <b>Access Control</b> </p> <p>You can use IAM policies to control this decision's access to Amazon SWF resources as follows:</p> <ul> <li> <p>Use a <code>Resource</code> element with the domain name to limit the action to only specified domains.</p> </li> <li> <p>Use an <code>Action</code> element to allow or deny permission to call this action.</p> </li> <li> <p>Constrain the following parameters by using a <code>Condition</code> element with the appropriate keys.</p> <ul> <li> <p> <code>tagList.member.N</code> – The key is "swf:tagList.N" where N is the tag number from 0 to 4, inclusive.</p> </li> <li> <p> <code>taskList</code> – String constraint. The key is <code>swf:taskList.name</code>.</p> </li> <li> <p> <code>workflowType.name</code> – String constraint. The key is <code>swf:workflowType.name</code>.</p> </li> <li> <p> <code>workflowType.version</code> – String constraint. The key is <code>swf:workflowType.version</code>.</p> </li> </ul> </li> </ul> <p>If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>. For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p> */
	export interface StartChildWorkflowExecutionDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartChildWorkflowExecutionDecisionAttributesFormGroup() {
		return new FormGroup<StartChildWorkflowExecutionDecisionAttributesFormProperties>({
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}


	/** Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>. */
	export interface ScheduleLambdaFunctionDecisionAttributes {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: string;

		/** Max length: 32768 */
		control?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		input?: string | null;

		/** Max length: 8 */
		startToCloseTimeout?: string | null;
	}

	/** Decision attributes specified in <code>scheduleLambdaFunctionDecisionAttributes</code> within the list of decisions <code>decisions</code> passed to <a>RespondDecisionTaskCompleted</a>. */
	export interface ScheduleLambdaFunctionDecisionAttributesFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		control: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		startToCloseTimeout: FormControl<string | null | undefined>,
	}
	export function CreateScheduleLambdaFunctionDecisionAttributesFormGroup() {
		return new FormGroup<ScheduleLambdaFunctionDecisionAttributesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			control: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
			startToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
		});

	}

	export interface SignalWorkflowExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: string;

		/** Max length: 32768 */
		input?: string | null;
	}
	export interface SignalWorkflowExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		signalName: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateSignalWorkflowExecutionInputFormGroup() {
		return new FormGroup<SignalWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			signalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Specifies the <code>runId</code> of a workflow execution. */
	export interface Run {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		runId?: string | null;
	}

	/** Specifies the <code>runId</code> of a workflow execution. */
	export interface RunFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		runId: FormControl<string | null | undefined>,
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface StartWorkflowExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;

		/** Represents a task list. */
		taskList?: TaskList;
		taskPriority?: string | null;

		/** Max length: 32768 */
		input?: string | null;

		/** Max length: 8 */
		executionStartToCloseTimeout?: string | null;

		/** Maximum items: 5 */
		tagList?: Array<string>;

		/** Max length: 8 */
		taskStartToCloseTimeout?: string | null;
		childPolicy?: WorkflowExecutionConfigurationChildPolicy | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole?: string | null;
	}
	export interface StartWorkflowExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,
		taskPriority: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/** Max length: 8 */
		executionStartToCloseTimeout: FormControl<string | null | undefined>,

		/** Max length: 8 */
		taskStartToCloseTimeout: FormControl<string | null | undefined>,
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		lambdaRole: FormControl<string | null | undefined>,
	}
	export function CreateStartWorkflowExecutionInputFormGroup() {
		return new FormGroup<StartWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			taskPriority: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			executionStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			taskStartToCloseTimeout: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
			lambdaRole: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: string;

		/** Required */
		tags: Array<ResourceTag>;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface TerminateWorkflowExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: string;

		/** Max length: 64 */
		runId?: string | null;

		/** Max length: 256 */
		reason?: string | null;

		/** Max length: 32768 */
		details?: string | null;
		childPolicy?: WorkflowExecutionConfigurationChildPolicy | null;
	}
	export interface TerminateWorkflowExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		workflowId: FormControl<string | null | undefined>,

		/** Max length: 64 */
		runId: FormControl<string | null | undefined>,

		/** Max length: 256 */
		reason: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		details: FormControl<string | null | undefined>,
		childPolicy: FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>,
	}
	export function CreateTerminateWorkflowExecutionInputFormGroup() {
		return new FormGroup<TerminateWorkflowExecutionInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			runId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			childPolicy: new FormControl<WorkflowExecutionConfigurationChildPolicy | null | undefined>(undefined),
		});

	}

	export interface UndeprecateActivityTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents an activity type.
		 * Required
		 */
		activityType: ActivityType;
	}
	export interface UndeprecateActivityTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateActivityTypeInputFormGroup() {
		return new FormGroup<UndeprecateActivityTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface UndeprecateDomainInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: string;
	}
	export interface UndeprecateDomainInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateDomainInputFormGroup() {
		return new FormGroup<UndeprecateDomainInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface UndeprecateWorkflowTypeInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: string;

		/**
		 * Represents a workflow type.
		 * Required
		 */
		workflowType: WorkflowType;
	}
	export interface UndeprecateWorkflowTypeInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		domain: FormControl<string | null | undefined>,
	}
	export function CreateUndeprecateWorkflowTypeInputFormGroup() {
		return new FormGroup<UndeprecateWorkflowTypeInputFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface UntagResourceInput {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export enum ActivityTaskTimeoutType { START_TO_CLOSE = 0, SCHEDULE_TO_START = 1, SCHEDULE_TO_CLOSE = 2, HEARTBEAT = 3 }

	export enum RegistrationStatus { REGISTERED = 0, DEPRECATED = 1 }

	export enum CancelTimerFailedCause { TIMER_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum CancelWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum ChildPolicy { TERMINATE = 0, REQUEST_CANCEL = 1, ABANDON = 2 }

	export enum WorkflowExecutionTimeoutType { START_TO_CLOSE = 0 }

	export enum CloseStatus { COMPLETED = 0, FAILED = 1, CANCELED = 2, TERMINATED = 3, CONTINUED_AS_NEW = 4, TIMED_OUT = 5 }

	export enum CompleteWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum ContinueAsNewWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, WORKFLOW_TYPE_DEPRECATED = 1, WORKFLOW_TYPE_DOES_NOT_EXIST = 2, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 3, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 4, DEFAULT_TASK_LIST_UNDEFINED = 5, DEFAULT_CHILD_POLICY_UNDEFINED = 6, CONTINUE_AS_NEW_WORKFLOW_EXECUTION_RATE_EXCEEDED = 7, OPERATION_NOT_PERMITTED = 8 }

	export enum DecisionType { ScheduleActivityTask = 0, RequestCancelActivityTask = 1, CompleteWorkflowExecution = 2, FailWorkflowExecution = 3, CancelWorkflowExecution = 4, ContinueAsNewWorkflowExecution = 5, RecordMarker = 6, StartTimer = 7, CancelTimer = 8, SignalExternalWorkflowExecution = 9, RequestCancelExternalWorkflowExecution = 10, StartChildWorkflowExecution = 11, ScheduleLambdaFunction = 12 }

	export enum DecisionTaskTimeoutType { START_TO_CLOSE = 0 }

	export enum EventType { WorkflowExecutionStarted = 0, WorkflowExecutionCancelRequested = 1, WorkflowExecutionCompleted = 2, CompleteWorkflowExecutionFailed = 3, WorkflowExecutionFailed = 4, FailWorkflowExecutionFailed = 5, WorkflowExecutionTimedOut = 6, WorkflowExecutionCanceled = 7, CancelWorkflowExecutionFailed = 8, WorkflowExecutionContinuedAsNew = 9, ContinueAsNewWorkflowExecutionFailed = 10, WorkflowExecutionTerminated = 11, DecisionTaskScheduled = 12, DecisionTaskStarted = 13, DecisionTaskCompleted = 14, DecisionTaskTimedOut = 15, ActivityTaskScheduled = 16, ScheduleActivityTaskFailed = 17, ActivityTaskStarted = 18, ActivityTaskCompleted = 19, ActivityTaskFailed = 20, ActivityTaskTimedOut = 21, ActivityTaskCanceled = 22, ActivityTaskCancelRequested = 23, RequestCancelActivityTaskFailed = 24, WorkflowExecutionSignaled = 25, MarkerRecorded = 26, RecordMarkerFailed = 27, TimerStarted = 28, StartTimerFailed = 29, TimerFired = 30, TimerCanceled = 31, CancelTimerFailed = 32, StartChildWorkflowExecutionInitiated = 33, StartChildWorkflowExecutionFailed = 34, ChildWorkflowExecutionStarted = 35, ChildWorkflowExecutionCompleted = 36, ChildWorkflowExecutionFailed = 37, ChildWorkflowExecutionTimedOut = 38, ChildWorkflowExecutionCanceled = 39, ChildWorkflowExecutionTerminated = 40, SignalExternalWorkflowExecutionInitiated = 41, SignalExternalWorkflowExecutionFailed = 42, ExternalWorkflowExecutionSignaled = 43, RequestCancelExternalWorkflowExecutionInitiated = 44, RequestCancelExternalWorkflowExecutionFailed = 45, ExternalWorkflowExecutionCancelRequested = 46, LambdaFunctionScheduled = 47, LambdaFunctionStarted = 48, LambdaFunctionCompleted = 49, LambdaFunctionFailed = 50, LambdaFunctionTimedOut = 51, ScheduleLambdaFunctionFailed = 52, StartLambdaFunctionFailed = 53 }

	export enum ExecutionStatus { OPEN = 0, CLOSED = 1 }

	export enum FailWorkflowExecutionFailedCause { UNHANDLED_DECISION = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum LambdaFunctionTimeoutType { START_TO_CLOSE = 0 }

	export enum RecordMarkerFailedCause { OPERATION_NOT_PERMITTED = 0 }

	export enum RequestCancelActivityTaskFailedCause { ACTIVITY_ID_UNKNOWN = 0, OPERATION_NOT_PERMITTED = 1 }

	export enum RequestCancelExternalWorkflowExecutionFailedCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }

	export enum ScheduleActivityTaskFailedCause { ACTIVITY_TYPE_DEPRECATED = 0, ACTIVITY_TYPE_DOES_NOT_EXIST = 1, ACTIVITY_ID_ALREADY_IN_USE = 2, OPEN_ACTIVITIES_LIMIT_EXCEEDED = 3, ACTIVITY_CREATION_RATE_EXCEEDED = 4, DEFAULT_SCHEDULE_TO_CLOSE_TIMEOUT_UNDEFINED = 5, DEFAULT_TASK_LIST_UNDEFINED = 6, DEFAULT_SCHEDULE_TO_START_TIMEOUT_UNDEFINED = 7, DEFAULT_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_HEARTBEAT_TIMEOUT_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }

	export enum ScheduleLambdaFunctionFailedCause { ID_ALREADY_IN_USE = 0, OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED = 1, LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED = 2, LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION = 3 }

	export enum SignalExternalWorkflowExecutionFailedCause { UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION = 0, SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_RATE_EXCEEDED = 1, OPERATION_NOT_PERMITTED = 2 }

	export enum StartChildWorkflowExecutionFailedCause { WORKFLOW_TYPE_DOES_NOT_EXIST = 0, WORKFLOW_TYPE_DEPRECATED = 1, OPEN_CHILDREN_LIMIT_EXCEEDED = 2, OPEN_WORKFLOWS_LIMIT_EXCEEDED = 3, CHILD_CREATION_RATE_EXCEEDED = 4, WORKFLOW_ALREADY_RUNNING = 5, DEFAULT_EXECUTION_START_TO_CLOSE_TIMEOUT_UNDEFINED = 6, DEFAULT_TASK_LIST_UNDEFINED = 7, DEFAULT_TASK_START_TO_CLOSE_TIMEOUT_UNDEFINED = 8, DEFAULT_CHILD_POLICY_UNDEFINED = 9, OPERATION_NOT_PERMITTED = 10 }

	export enum StartLambdaFunctionFailedCause { ASSUME_ROLE_FAILED = 0 }

	export enum StartTimerFailedCause { TIMER_ID_ALREADY_IN_USE = 0, OPEN_TIMERS_LIMIT_EXCEEDED = 1, TIMER_CREATION_RATE_EXCEEDED = 2, OPERATION_NOT_PERMITTED = 3 }

	export enum WorkflowExecutionCancelRequestedCause { CHILD_POLICY_APPLIED = 0 }

	export enum WorkflowExecutionTerminatedCause { CHILD_POLICY_APPLIED = 0, EVENT_LIMIT_EXCEEDED = 1, OPERATOR_INITIATED = 2 }

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

	export enum CountClosedWorkflowExecutionsX_Amz_Target { SimpleWorkflowService_CountClosedWorkflowExecutions = 0 }

	export enum CountOpenWorkflowExecutionsX_Amz_Target { SimpleWorkflowService_CountOpenWorkflowExecutions = 0 }

	export enum CountPendingActivityTasksX_Amz_Target { SimpleWorkflowService_CountPendingActivityTasks = 0 }

	export enum CountPendingDecisionTasksX_Amz_Target { SimpleWorkflowService_CountPendingDecisionTasks = 0 }

	export enum DeprecateActivityTypeX_Amz_Target { SimpleWorkflowService_DeprecateActivityType = 0 }

	export enum DeprecateDomainX_Amz_Target { SimpleWorkflowService_DeprecateDomain = 0 }

	export enum DeprecateWorkflowTypeX_Amz_Target { SimpleWorkflowService_DeprecateWorkflowType = 0 }

	export enum DescribeActivityTypeX_Amz_Target { SimpleWorkflowService_DescribeActivityType = 0 }

	export enum DescribeDomainX_Amz_Target { SimpleWorkflowService_DescribeDomain = 0 }

	export enum DescribeWorkflowExecutionX_Amz_Target { SimpleWorkflowService_DescribeWorkflowExecution = 0 }

	export enum DescribeWorkflowTypeX_Amz_Target { SimpleWorkflowService_DescribeWorkflowType = 0 }

	export enum GetWorkflowExecutionHistoryX_Amz_Target { SimpleWorkflowService_GetWorkflowExecutionHistory = 0 }

	export enum ListActivityTypesX_Amz_Target { SimpleWorkflowService_ListActivityTypes = 0 }

	export enum ListClosedWorkflowExecutionsX_Amz_Target { SimpleWorkflowService_ListClosedWorkflowExecutions = 0 }

	export enum ListDomainsX_Amz_Target { SimpleWorkflowService_ListDomains = 0 }

	export enum ListOpenWorkflowExecutionsX_Amz_Target { SimpleWorkflowService_ListOpenWorkflowExecutions = 0 }

	export enum ListTagsForResourceX_Amz_Target { SimpleWorkflowService_ListTagsForResource = 0 }

	export enum ListWorkflowTypesX_Amz_Target { SimpleWorkflowService_ListWorkflowTypes = 0 }

	export enum PollForActivityTaskX_Amz_Target { SimpleWorkflowService_PollForActivityTask = 0 }

	export enum PollForDecisionTaskX_Amz_Target { SimpleWorkflowService_PollForDecisionTask = 0 }

	export enum RecordActivityTaskHeartbeatX_Amz_Target { SimpleWorkflowService_RecordActivityTaskHeartbeat = 0 }

	export enum RegisterActivityTypeX_Amz_Target { SimpleWorkflowService_RegisterActivityType = 0 }

	export enum RegisterDomainX_Amz_Target { SimpleWorkflowService_RegisterDomain = 0 }

	export enum RegisterWorkflowTypeX_Amz_Target { SimpleWorkflowService_RegisterWorkflowType = 0 }

	export enum RequestCancelWorkflowExecutionX_Amz_Target { SimpleWorkflowService_RequestCancelWorkflowExecution = 0 }

	export enum RespondActivityTaskCanceledX_Amz_Target { SimpleWorkflowService_RespondActivityTaskCanceled = 0 }

	export enum RespondActivityTaskCompletedX_Amz_Target { SimpleWorkflowService_RespondActivityTaskCompleted = 0 }

	export enum RespondActivityTaskFailedX_Amz_Target { SimpleWorkflowService_RespondActivityTaskFailed = 0 }

	export enum RespondDecisionTaskCompletedX_Amz_Target { SimpleWorkflowService_RespondDecisionTaskCompleted = 0 }

	export enum SignalWorkflowExecutionX_Amz_Target { SimpleWorkflowService_SignalWorkflowExecution = 0 }

	export enum StartWorkflowExecutionX_Amz_Target { SimpleWorkflowService_StartWorkflowExecution = 0 }

	export enum TagResourceX_Amz_Target { SimpleWorkflowService_TagResource = 0 }

	export enum TerminateWorkflowExecutionX_Amz_Target { SimpleWorkflowService_TerminateWorkflowExecution = 0 }

	export enum UndeprecateActivityTypeX_Amz_Target { SimpleWorkflowService_UndeprecateActivityType = 0 }

	export enum UndeprecateDomainX_Amz_Target { SimpleWorkflowService_UndeprecateDomain = 0 }

	export enum UndeprecateWorkflowTypeX_Amz_Target { SimpleWorkflowService_UndeprecateWorkflowType = 0 }

	export enum UntagResourceX_Amz_Target { SimpleWorkflowService_UntagResource = 0 }

}

