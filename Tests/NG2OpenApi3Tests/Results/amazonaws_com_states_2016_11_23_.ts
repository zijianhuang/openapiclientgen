import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateActivityOutput {

		/** Required */
		activityArn: string;

		/** Required */
		creationDate: Date;
	}
	export interface CreateActivityOutputFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateActivityOutputFormGroup() {
		return new FormGroup<CreateActivityOutputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateActivityInput {

		/** Required */
		name: string;
		tags?: Array<Tag>;
	}
	export interface CreateActivityInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateActivityInputFormGroup() {
		return new FormGroup<CreateActivityInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface Tag {
		key?: string;
		value?: string;
	}

	/** <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface TagFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityLimitExceeded {
	}
	export interface ActivityLimitExceededFormProperties {
	}
	export function CreateActivityLimitExceededFormGroup() {
		return new FormGroup<ActivityLimitExceededFormProperties>({
		});

	}

	export interface InvalidName {
	}
	export interface InvalidNameFormProperties {
	}
	export function CreateInvalidNameFormGroup() {
		return new FormGroup<InvalidNameFormProperties>({
		});

	}

	export interface TooManyTags {
	}
	export interface TooManyTagsFormProperties {
	}
	export function CreateTooManyTagsFormGroup() {
		return new FormGroup<TooManyTagsFormProperties>({
		});

	}

	export interface CreateStateMachineOutput {

		/** Required */
		stateMachineArn: string;

		/** Required */
		creationDate: Date;
		stateMachineVersionArn?: string;
	}
	export interface CreateStateMachineOutputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		stateMachineVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateStateMachineOutputFormGroup() {
		return new FormGroup<CreateStateMachineOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStateMachineInput {

		/** Required */
		name: string;

		/** Required */
		definition: string;

		/** Required */
		roleArn: string;
		type?: StateMachineType;
		loggingConfiguration?: LoggingConfiguration;
		tags?: Array<Tag>;
		tracingConfiguration?: TracingConfiguration;
		publish?: boolean | null;
		versionDescription?: string;
	}
	export interface CreateStateMachineInputFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		definition: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		type: FormControl<StateMachineType | null | undefined>,
		publish: FormControl<boolean | null | undefined>,
		versionDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateStateMachineInputFormGroup() {
		return new FormGroup<CreateStateMachineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<StateMachineType | null | undefined>(undefined),
			publish: new FormControl<boolean | null | undefined>(undefined),
			versionDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateMachineType { STANDARD = 0, EXPRESS = 1 }


	/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
	export interface LoggingConfiguration {
		level?: LogLevel;
		includeExecutionData?: boolean | null;
		destinations?: Array<LogDestination>;
	}

	/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
	export interface LoggingConfigurationFormProperties {
		level: FormControl<LogLevel | null | undefined>,
		includeExecutionData: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			level: new FormControl<LogLevel | null | undefined>(undefined),
			includeExecutionData: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LogLevel { ALL = 0, ERROR = 1, FATAL = 2, OFF = 3 }


	/** <p/> */
	export interface LogDestination {
		cloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
	}

	/** <p/> */
	export interface LogDestinationFormProperties {
	}
	export function CreateLogDestinationFormGroup() {
		return new FormGroup<LogDestinationFormProperties>({
		});

	}


	/** <p/> */
	export interface CloudWatchLogsLogGroup {
		logGroupArn?: string;
	}

	/** <p/> */
	export interface CloudWatchLogsLogGroupFormProperties {
		logGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsLogGroupFormGroup() {
		return new FormGroup<CloudWatchLogsLogGroupFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selects whether or not the state machine's X-Ray tracing is enabled. Default is <code>false</code>  */
	export interface TracingConfiguration {
		enabled?: boolean | null;
	}

	/** Selects whether or not the state machine's X-Ray tracing is enabled. Default is <code>false</code>  */
	export interface TracingConfigurationFormProperties {
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateTracingConfigurationFormGroup() {
		return new FormGroup<TracingConfigurationFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidArn {
	}
	export interface InvalidArnFormProperties {
	}
	export function CreateInvalidArnFormGroup() {
		return new FormGroup<InvalidArnFormProperties>({
		});

	}

	export interface InvalidDefinition {
	}
	export interface InvalidDefinitionFormProperties {
	}
	export function CreateInvalidDefinitionFormGroup() {
		return new FormGroup<InvalidDefinitionFormProperties>({
		});

	}

	export interface InvalidLoggingConfiguration {
	}
	export interface InvalidLoggingConfigurationFormProperties {
	}
	export function CreateInvalidLoggingConfigurationFormGroup() {
		return new FormGroup<InvalidLoggingConfigurationFormProperties>({
		});

	}

	export interface InvalidTracingConfiguration {
	}
	export interface InvalidTracingConfigurationFormProperties {
	}
	export function CreateInvalidTracingConfigurationFormGroup() {
		return new FormGroup<InvalidTracingConfigurationFormProperties>({
		});

	}

	export interface StateMachineAlreadyExists {
	}
	export interface StateMachineAlreadyExistsFormProperties {
	}
	export function CreateStateMachineAlreadyExistsFormGroup() {
		return new FormGroup<StateMachineAlreadyExistsFormProperties>({
		});

	}

	export interface StateMachineDeleting {
	}
	export interface StateMachineDeletingFormProperties {
	}
	export function CreateStateMachineDeletingFormGroup() {
		return new FormGroup<StateMachineDeletingFormProperties>({
		});

	}

	export interface StateMachineLimitExceeded {
	}
	export interface StateMachineLimitExceededFormProperties {
	}
	export function CreateStateMachineLimitExceededFormGroup() {
		return new FormGroup<StateMachineLimitExceededFormProperties>({
		});

	}

	export interface StateMachineTypeNotSupported {
	}
	export interface StateMachineTypeNotSupportedFormProperties {
	}
	export function CreateStateMachineTypeNotSupportedFormGroup() {
		return new FormGroup<StateMachineTypeNotSupportedFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateStateMachineAliasOutput {

		/** Required */
		stateMachineAliasArn: string;

		/** Required */
		creationDate: Date;
	}
	export interface CreateStateMachineAliasOutputFormProperties {

		/** Required */
		stateMachineAliasArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateStateMachineAliasOutputFormGroup() {
		return new FormGroup<CreateStateMachineAliasOutputFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStateMachineAliasInput {
		description?: string;

		/** Required */
		name: string;

		/** Required */
		routingConfiguration: Array<RoutingConfigurationListItem>;
	}
	export interface CreateStateMachineAliasInputFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateStateMachineAliasInputFormGroup() {
		return new FormGroup<CreateStateMachineAliasInputFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about the routing configuration of a state machine alias. In a routing configuration, you define an array of objects that specify up to two state machine versions. You also specify the percentage of traffic to be routed to each version. */
	export interface RoutingConfigurationListItem {

		/** Required */
		stateMachineVersionArn: string;

		/** Required */
		weight: number;
	}

	/** Contains details about the routing configuration of a state machine alias. In a routing configuration, you define an array of objects that specify up to two state machine versions. You also specify the percentage of traffic to be routed to each version. */
	export interface RoutingConfigurationListItemFormProperties {

		/** Required */
		stateMachineVersionArn: FormControl<string | null | undefined>,

		/** Required */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateRoutingConfigurationListItemFormGroup() {
		return new FormGroup<RoutingConfigurationListItemFormProperties>({
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceNotFound {
	}
	export interface ResourceNotFoundFormProperties {
	}
	export function CreateResourceNotFoundFormGroup() {
		return new FormGroup<ResourceNotFoundFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeleteActivityOutput {
	}
	export interface DeleteActivityOutputFormProperties {
	}
	export function CreateDeleteActivityOutputFormGroup() {
		return new FormGroup<DeleteActivityOutputFormProperties>({
		});

	}

	export interface DeleteActivityInput {

		/** Required */
		activityArn: string;
	}
	export interface DeleteActivityInputFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActivityInputFormGroup() {
		return new FormGroup<DeleteActivityInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStateMachineOutput {
	}
	export interface DeleteStateMachineOutputFormProperties {
	}
	export function CreateDeleteStateMachineOutputFormGroup() {
		return new FormGroup<DeleteStateMachineOutputFormProperties>({
		});

	}

	export interface DeleteStateMachineInput {

		/** Required */
		stateMachineArn: string;
	}
	export interface DeleteStateMachineInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStateMachineInputFormGroup() {
		return new FormGroup<DeleteStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStateMachineAliasOutput {
	}
	export interface DeleteStateMachineAliasOutputFormProperties {
	}
	export function CreateDeleteStateMachineAliasOutputFormGroup() {
		return new FormGroup<DeleteStateMachineAliasOutputFormProperties>({
		});

	}

	export interface DeleteStateMachineAliasInput {

		/** Required */
		stateMachineAliasArn: string;
	}
	export interface DeleteStateMachineAliasInputFormProperties {

		/** Required */
		stateMachineAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStateMachineAliasInputFormGroup() {
		return new FormGroup<DeleteStateMachineAliasInputFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteStateMachineVersionOutput {
	}
	export interface DeleteStateMachineVersionOutputFormProperties {
	}
	export function CreateDeleteStateMachineVersionOutputFormGroup() {
		return new FormGroup<DeleteStateMachineVersionOutputFormProperties>({
		});

	}

	export interface DeleteStateMachineVersionInput {

		/** Required */
		stateMachineVersionArn: string;
	}
	export interface DeleteStateMachineVersionInputFormProperties {

		/** Required */
		stateMachineVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStateMachineVersionInputFormGroup() {
		return new FormGroup<DeleteStateMachineVersionInputFormProperties>({
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeActivityOutput {

		/** Required */
		activityArn: string;

		/** Required */
		name: string;

		/** Required */
		creationDate: Date;
	}
	export interface DescribeActivityOutputFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeActivityOutputFormGroup() {
		return new FormGroup<DescribeActivityOutputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeActivityInput {

		/** Required */
		activityArn: string;
	}
	export interface DescribeActivityInputFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivityInputFormGroup() {
		return new FormGroup<DescribeActivityInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActivityDoesNotExist {
	}
	export interface ActivityDoesNotExistFormProperties {
	}
	export function CreateActivityDoesNotExistFormGroup() {
		return new FormGroup<ActivityDoesNotExistFormProperties>({
		});

	}

	export interface DescribeExecutionOutput {

		/** Required */
		executionArn: string;

		/** Required */
		stateMachineArn: string;
		name?: string;

		/** Required */
		status: ExecutionStatus;

		/** Required */
		startDate: Date;
		stopDate?: Date;
		input?: string;

		/** Provides details about execution input or output. */
		inputDetails?: CloudWatchEventsExecutionDataDetails;
		output?: string;

		/** Provides details about execution input or output. */
		outputDetails?: CloudWatchEventsExecutionDataDetails;
		traceHeader?: string;
		mapRunArn?: string;
		error?: string;
		cause?: string;
		stateMachineVersionArn?: string;
		stateMachineAliasArn?: string;
	}
	export interface DescribeExecutionOutputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ExecutionStatus | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,
		input: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		traceHeader: FormControl<string | null | undefined>,
		mapRunArn: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
		stateMachineVersionArn: FormControl<string | null | undefined>,
		stateMachineAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionOutputFormGroup() {
		return new FormGroup<DescribeExecutionOutputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			traceHeader: new FormControl<string | null | undefined>(undefined),
			mapRunArn: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined),
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecutionStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, TIMED_OUT = 3, ABORTED = 4 }


	/** Provides details about execution input or output. */
	export interface CloudWatchEventsExecutionDataDetails {
		included?: boolean | null;
	}

	/** Provides details about execution input or output. */
	export interface CloudWatchEventsExecutionDataDetailsFormProperties {
		included: FormControl<boolean | null | undefined>,
	}
	export function CreateCloudWatchEventsExecutionDataDetailsFormGroup() {
		return new FormGroup<CloudWatchEventsExecutionDataDetailsFormProperties>({
			included: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeExecutionInput {

		/** Required */
		executionArn: string;
	}
	export interface DescribeExecutionInputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionInputFormGroup() {
		return new FormGroup<DescribeExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExecutionDoesNotExist {
	}
	export interface ExecutionDoesNotExistFormProperties {
	}
	export function CreateExecutionDoesNotExistFormGroup() {
		return new FormGroup<ExecutionDoesNotExistFormProperties>({
		});

	}

	export interface DescribeMapRunOutput {

		/** Required */
		mapRunArn: string;

		/** Required */
		executionArn: string;

		/** Required */
		status: MapRunStatus;

		/** Required */
		startDate: Date;
		stopDate?: Date;

		/** Required */
		maxConcurrency: number;

		/** Required */
		toleratedFailurePercentage: number;

		/** Required */
		toleratedFailureCount: number;

		/** Required */
		itemCounts: MapRunItemCounts;

		/** Required */
		executionCounts: MapRunExecutionCounts;
	}
	export interface DescribeMapRunOutputFormProperties {

		/** Required */
		mapRunArn: FormControl<string | null | undefined>,

		/** Required */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<MapRunStatus | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,

		/** Required */
		maxConcurrency: FormControl<number | null | undefined>,

		/** Required */
		toleratedFailurePercentage: FormControl<number | null | undefined>,

		/** Required */
		toleratedFailureCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeMapRunOutputFormGroup() {
		return new FormGroup<DescribeMapRunOutputFormProperties>({
			mapRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<MapRunStatus | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
			maxConcurrency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			toleratedFailurePercentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			toleratedFailureCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MapRunStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, ABORTED = 3 }


	/** Contains details about items that were processed in all of the child workflow executions that were started by a Map Run. */
	export interface MapRunItemCounts {

		/** Required */
		pending: number;

		/** Required */
		running: number;

		/** Required */
		succeeded: number;

		/** Required */
		failed: number;

		/** Required */
		timedOut: number;

		/** Required */
		aborted: number;

		/** Required */
		total: number;

		/** Required */
		resultsWritten: number;
	}

	/** Contains details about items that were processed in all of the child workflow executions that were started by a Map Run. */
	export interface MapRunItemCountsFormProperties {

		/** Required */
		pending: FormControl<number | null | undefined>,

		/** Required */
		running: FormControl<number | null | undefined>,

		/** Required */
		succeeded: FormControl<number | null | undefined>,

		/** Required */
		failed: FormControl<number | null | undefined>,

		/** Required */
		timedOut: FormControl<number | null | undefined>,

		/** Required */
		aborted: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		resultsWritten: FormControl<number | null | undefined>,
	}
	export function CreateMapRunItemCountsFormGroup() {
		return new FormGroup<MapRunItemCountsFormProperties>({
			pending: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			running: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			failed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timedOut: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aborted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resultsWritten: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about all of the child workflow executions started by a Map Run. */
	export interface MapRunExecutionCounts {

		/** Required */
		pending: number;

		/** Required */
		running: number;

		/** Required */
		succeeded: number;

		/** Required */
		failed: number;

		/** Required */
		timedOut: number;

		/** Required */
		aborted: number;

		/** Required */
		total: number;

		/** Required */
		resultsWritten: number;
	}

	/** Contains details about all of the child workflow executions started by a Map Run. */
	export interface MapRunExecutionCountsFormProperties {

		/** Required */
		pending: FormControl<number | null | undefined>,

		/** Required */
		running: FormControl<number | null | undefined>,

		/** Required */
		succeeded: FormControl<number | null | undefined>,

		/** Required */
		failed: FormControl<number | null | undefined>,

		/** Required */
		timedOut: FormControl<number | null | undefined>,

		/** Required */
		aborted: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,

		/** Required */
		resultsWritten: FormControl<number | null | undefined>,
	}
	export function CreateMapRunExecutionCountsFormGroup() {
		return new FormGroup<MapRunExecutionCountsFormProperties>({
			pending: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			running: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			failed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timedOut: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aborted: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resultsWritten: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMapRunInput {

		/** Required */
		mapRunArn: string;
	}
	export interface DescribeMapRunInputFormProperties {

		/** Required */
		mapRunArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMapRunInputFormGroup() {
		return new FormGroup<DescribeMapRunInputFormProperties>({
			mapRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStateMachineOutput {

		/** Required */
		stateMachineArn: string;

		/** Required */
		name: string;
		status?: StateMachineStatus;

		/** Required */
		definition: string;

		/** Required */
		roleArn: string;

		/** Required */
		type: StateMachineType;

		/** Required */
		creationDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
		tracingConfiguration?: TracingConfiguration;
		label?: string;
		revisionId?: string;
		description?: string;
	}
	export interface DescribeStateMachineOutputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		status: FormControl<StateMachineStatus | null | undefined>,

		/** Required */
		definition: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<StateMachineType | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
		label: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineOutputFormGroup() {
		return new FormGroup<DescribeStateMachineOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<StateMachineStatus | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<StateMachineType | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			label: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateMachineStatus { ACTIVE = 0, DELETING = 1 }

	export interface DescribeStateMachineInput {

		/** Required */
		stateMachineArn: string;
	}
	export interface DescribeStateMachineInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineInputFormGroup() {
		return new FormGroup<DescribeStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StateMachineDoesNotExist {
	}
	export interface StateMachineDoesNotExistFormProperties {
	}
	export function CreateStateMachineDoesNotExistFormGroup() {
		return new FormGroup<StateMachineDoesNotExistFormProperties>({
		});

	}

	export interface DescribeStateMachineAliasOutput {
		stateMachineAliasArn?: string;
		name?: string;
		description?: string;
		routingConfiguration?: Array<RoutingConfigurationListItem>;
		creationDate?: Date;
		updateDate?: Date;
	}
	export interface DescribeStateMachineAliasOutputFormProperties {
		stateMachineAliasArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		updateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStateMachineAliasOutputFormGroup() {
		return new FormGroup<DescribeStateMachineAliasOutputFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			updateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeStateMachineAliasInput {

		/** Required */
		stateMachineAliasArn: string;
	}
	export interface DescribeStateMachineAliasInputFormProperties {

		/** Required */
		stateMachineAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineAliasInputFormGroup() {
		return new FormGroup<DescribeStateMachineAliasInputFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStateMachineForExecutionOutput {

		/** Required */
		stateMachineArn: string;

		/** Required */
		name: string;

		/** Required */
		definition: string;

		/** Required */
		roleArn: string;

		/** Required */
		updateDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
		tracingConfiguration?: TracingConfiguration;
		mapRunArn?: string;
		label?: string;
		revisionId?: string;
	}
	export interface DescribeStateMachineForExecutionOutputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		definition: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		updateDate: FormControl<Date | null | undefined>,
		mapRunArn: FormControl<string | null | undefined>,
		label: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineForExecutionOutputFormGroup() {
		return new FormGroup<DescribeStateMachineForExecutionOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			mapRunArn: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeStateMachineForExecutionInput {

		/** Required */
		executionArn: string;
	}
	export interface DescribeStateMachineForExecutionInputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineForExecutionInputFormGroup() {
		return new FormGroup<DescribeStateMachineForExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetActivityTaskOutput {
		taskToken?: string;
		input?: string;
	}
	export interface GetActivityTaskOutputFormProperties {
		taskToken: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
	}
	export function CreateGetActivityTaskOutputFormGroup() {
		return new FormGroup<GetActivityTaskOutputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetActivityTaskInput {

		/** Required */
		activityArn: string;
		workerName?: string;
	}
	export interface GetActivityTaskInputFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateGetActivityTaskInputFormGroup() {
		return new FormGroup<GetActivityTaskInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workerName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityWorkerLimitExceeded {
	}
	export interface ActivityWorkerLimitExceededFormProperties {
	}
	export function CreateActivityWorkerLimitExceededFormGroup() {
		return new FormGroup<ActivityWorkerLimitExceededFormProperties>({
		});

	}

	export interface GetExecutionHistoryOutput {

		/** Required */
		events: Array<HistoryEvent>;
		nextToken?: string;
	}
	export interface GetExecutionHistoryOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExecutionHistoryOutputFormGroup() {
		return new FormGroup<GetExecutionHistoryOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the events of an execution. */
	export interface HistoryEvent {

		/** Required */
		timestamp: Date;

		/** Required */
		type: HistoryEventType;

		/** Required */
		id: number;
		previousEventId?: number | null;

		/** Contains details about an activity that failed during an execution. */
		activityFailedEventDetails?: ActivityFailedEventDetails;
		activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;

		/** Contains details about an activity scheduled during an execution. */
		activityScheduledEventDetails?: ActivityScheduledEventDetails;

		/** Contains details about the start of an activity during an execution. */
		activityStartedEventDetails?: ActivityStartedEventDetails;

		/** Contains details about an activity that successfully terminated during an execution. */
		activitySucceededEventDetails?: ActivitySucceededEventDetails;

		/** Contains details about an activity timeout that occurred during an execution. */
		activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
		taskFailedEventDetails?: TaskFailedEventDetails;
		taskScheduledEventDetails?: TaskScheduledEventDetails;
		taskStartFailedEventDetails?: TaskStartFailedEventDetails;
		taskStartedEventDetails?: TaskStartedEventDetails;
		taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;
		taskSubmittedEventDetails?: TaskSubmittedEventDetails;
		taskSucceededEventDetails?: TaskSucceededEventDetails;
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
		mapStateStartedEventDetails?: MapStateStartedEventDetails;
		mapIterationStartedEventDetails?: MapIterationEventDetails;
		mapIterationSucceededEventDetails?: MapIterationEventDetails;
		mapIterationFailedEventDetails?: MapIterationEventDetails;
		mapIterationAbortedEventDetails?: MapIterationEventDetails;

		/** Contains details about a Lambda function that failed during an execution. */
		lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;

		/** Contains details about a failed Lambda function schedule event that occurred during an execution. */
		lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;

		/** Contains details about a Lambda function scheduled during an execution. */
		lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
		lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
		lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;

		/** Contains details about a Lambda function timeout that occurred during an execution. */
		lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;

		/** Contains details about a state entered during an execution. */
		stateEnteredEventDetails?: StateEnteredEventDetails;

		/** Contains details about an exit from a state during an execution. */
		stateExitedEventDetails?: StateExitedEventDetails;
		mapRunStartedEventDetails?: MapRunStartedEventDetails;
		mapRunFailedEventDetails?: MapRunFailedEventDetails;
	}

	/** Contains details about the events of an execution. */
	export interface HistoryEventFormProperties {

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		type: FormControl<HistoryEventType | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		previousEventId: FormControl<number | null | undefined>,
	}
	export function CreateHistoryEventFormGroup() {
		return new FormGroup<HistoryEventFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<HistoryEventType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			previousEventId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HistoryEventType { ActivityFailed = 0, ActivityScheduled = 1, ActivityScheduleFailed = 2, ActivityStarted = 3, ActivitySucceeded = 4, ActivityTimedOut = 5, ChoiceStateEntered = 6, ChoiceStateExited = 7, ExecutionAborted = 8, ExecutionFailed = 9, ExecutionStarted = 10, ExecutionSucceeded = 11, ExecutionTimedOut = 12, FailStateEntered = 13, LambdaFunctionFailed = 14, LambdaFunctionScheduled = 15, LambdaFunctionScheduleFailed = 16, LambdaFunctionStarted = 17, LambdaFunctionStartFailed = 18, LambdaFunctionSucceeded = 19, LambdaFunctionTimedOut = 20, MapIterationAborted = 21, MapIterationFailed = 22, MapIterationStarted = 23, MapIterationSucceeded = 24, MapStateAborted = 25, MapStateEntered = 26, MapStateExited = 27, MapStateFailed = 28, MapStateStarted = 29, MapStateSucceeded = 30, ParallelStateAborted = 31, ParallelStateEntered = 32, ParallelStateExited = 33, ParallelStateFailed = 34, ParallelStateStarted = 35, ParallelStateSucceeded = 36, PassStateEntered = 37, PassStateExited = 38, SucceedStateEntered = 39, SucceedStateExited = 40, TaskFailed = 41, TaskScheduled = 42, TaskStarted = 43, TaskStartFailed = 44, TaskStateAborted = 45, TaskStateEntered = 46, TaskStateExited = 47, TaskSubmitFailed = 48, TaskSubmitted = 49, TaskSucceeded = 50, TaskTimedOut = 51, WaitStateAborted = 52, WaitStateEntered = 53, WaitStateExited = 54, MapRunAborted = 55, MapRunFailed = 56, MapRunStarted = 57, MapRunSucceeded = 58 }


	/** Contains details about an activity that failed during an execution. */
	export interface ActivityFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about an activity that failed during an execution. */
	export interface ActivityFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityFailedEventDetailsFormGroup() {
		return new FormGroup<ActivityFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an activity schedule failure that occurred during an execution. */
	export interface ActivityScheduleFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about an activity schedule failure that occurred during an execution. */
	export interface ActivityScheduleFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityScheduleFailedEventDetailsFormGroup() {
		return new FormGroup<ActivityScheduleFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an activity scheduled during an execution. */
	export interface ActivityScheduledEventDetails {

		/** Required */
		resource: string;
		input?: string;
		inputDetails?: HistoryEventExecutionDataDetails;
		timeoutInSeconds?: number | null;
		heartbeatInSeconds?: number | null;
	}

	/** Contains details about an activity scheduled during an execution. */
	export interface ActivityScheduledEventDetailsFormProperties {

		/** Required */
		resource: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
		heartbeatInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateActivityScheduledEventDetailsFormGroup() {
		return new FormGroup<ActivityScheduledEventDetailsFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			heartbeatInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides details about input or output in an execution history event. */
	export interface HistoryEventExecutionDataDetails {
		truncated?: boolean | null;
	}

	/** Provides details about input or output in an execution history event. */
	export interface HistoryEventExecutionDataDetailsFormProperties {
		truncated: FormControl<boolean | null | undefined>,
	}
	export function CreateHistoryEventExecutionDataDetailsFormGroup() {
		return new FormGroup<HistoryEventExecutionDataDetailsFormProperties>({
			truncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains details about the start of an activity during an execution. */
	export interface ActivityStartedEventDetails {
		workerName?: string;
	}

	/** Contains details about the start of an activity during an execution. */
	export interface ActivityStartedEventDetailsFormProperties {
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateActivityStartedEventDetailsFormGroup() {
		return new FormGroup<ActivityStartedEventDetailsFormProperties>({
			workerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an activity that successfully terminated during an execution. */
	export interface ActivitySucceededEventDetails {
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about an activity that successfully terminated during an execution. */
	export interface ActivitySucceededEventDetailsFormProperties {
		output: FormControl<string | null | undefined>,
	}
	export function CreateActivitySucceededEventDetailsFormGroup() {
		return new FormGroup<ActivitySucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an activity timeout that occurred during an execution. */
	export interface ActivityTimedOutEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about an activity timeout that occurred during an execution. */
	export interface ActivityTimedOutEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityTimedOutEventDetailsFormGroup() {
		return new FormGroup<ActivityTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a task failure event. */
	export interface TaskFailedEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		error?: string;
		cause?: string;
	}

	/** Contains details about a task failure event. */
	export interface TaskFailedEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskFailedEventDetailsFormGroup() {
		return new FormGroup<TaskFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a task scheduled during an execution. */
	export interface TaskScheduledEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;

		/** Required */
		region: string;

		/** Required */
		parameters: string;
		timeoutInSeconds?: number | null;
		heartbeatInSeconds?: number | null;
		taskCredentials?: TaskCredentials;
	}

	/** Contains details about a task scheduled during an execution. */
	export interface TaskScheduledEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,

		/** Required */
		parameters: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
		heartbeatInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTaskScheduledEventDetailsFormGroup() {
		return new FormGroup<TaskScheduledEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			heartbeatInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about the credentials that Step Functions uses for a task. */
	export interface TaskCredentials {
		roleArn?: string;
	}

	/** Contains details about the credentials that Step Functions uses for a task. */
	export interface TaskCredentialsFormProperties {
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateTaskCredentialsFormGroup() {
		return new FormGroup<TaskCredentialsFormProperties>({
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a task that failed to start during an execution. */
	export interface TaskStartFailedEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		error?: string;
		cause?: string;
	}

	/** Contains details about a task that failed to start during an execution. */
	export interface TaskStartFailedEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskStartFailedEventDetailsFormGroup() {
		return new FormGroup<TaskStartFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the start of a task during an execution. */
	export interface TaskStartedEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
	}

	/** Contains details about the start of a task during an execution. */
	export interface TaskStartedEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateTaskStartedEventDetailsFormGroup() {
		return new FormGroup<TaskStartedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about a task that failed to submit during an execution. */
	export interface TaskSubmitFailedEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		error?: string;
		cause?: string;
	}

	/** Contains details about a task that failed to submit during an execution. */
	export interface TaskSubmitFailedEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskSubmitFailedEventDetailsFormGroup() {
		return new FormGroup<TaskSubmitFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a task submitted to a resource . */
	export interface TaskSubmittedEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about a task submitted to a resource . */
	export interface TaskSubmittedEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
	}
	export function CreateTaskSubmittedEventDetailsFormGroup() {
		return new FormGroup<TaskSubmittedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the successful completion of a task state. */
	export interface TaskSucceededEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about the successful completion of a task state. */
	export interface TaskSucceededEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
	}
	export function CreateTaskSucceededEventDetailsFormGroup() {
		return new FormGroup<TaskSucceededEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a resource timeout that occurred during an execution. */
	export interface TaskTimedOutEventDetails {

		/** Required */
		resourceType: string;

		/** Required */
		resource: string;
		error?: string;
		cause?: string;
	}

	/** Contains details about a resource timeout that occurred during an execution. */
	export interface TaskTimedOutEventDetailsFormProperties {

		/** Required */
		resourceType: FormControl<string | null | undefined>,

		/** Required */
		resource: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskTimedOutEventDetailsFormGroup() {
		return new FormGroup<TaskTimedOutEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an execution failure event. */
	export interface ExecutionFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about an execution failure event. */
	export interface ExecutionFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFailedEventDetailsFormGroup() {
		return new FormGroup<ExecutionFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the start of the execution. */
	export interface ExecutionStartedEventDetails {
		input?: string;
		inputDetails?: HistoryEventExecutionDataDetails;
		roleArn?: string;
		stateMachineAliasArn?: string;
		stateMachineVersionArn?: string;
	}

	/** Contains details about the start of the execution. */
	export interface ExecutionStartedEventDetailsFormProperties {
		input: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		stateMachineAliasArn: FormControl<string | null | undefined>,
		stateMachineVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateExecutionStartedEventDetailsFormGroup() {
		return new FormGroup<ExecutionStartedEventDetailsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the successful termination of the execution. */
	export interface ExecutionSucceededEventDetails {
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about the successful termination of the execution. */
	export interface ExecutionSucceededEventDetailsFormProperties {
		output: FormControl<string | null | undefined>,
	}
	export function CreateExecutionSucceededEventDetailsFormGroup() {
		return new FormGroup<ExecutionSucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an abort of an execution. */
	export interface ExecutionAbortedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about an abort of an execution. */
	export interface ExecutionAbortedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionAbortedEventDetailsFormGroup() {
		return new FormGroup<ExecutionAbortedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the execution timeout that occurred during the execution. */
	export interface ExecutionTimedOutEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about the execution timeout that occurred during the execution. */
	export interface ExecutionTimedOutEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionTimedOutEventDetailsFormGroup() {
		return new FormGroup<ExecutionTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a Map state that was started. */
	export interface MapStateStartedEventDetails {
		length?: number | null;
	}

	/** Details about a Map state that was started. */
	export interface MapStateStartedEventDetailsFormProperties {
		length: FormControl<number | null | undefined>,
	}
	export function CreateMapStateStartedEventDetailsFormGroup() {
		return new FormGroup<MapStateStartedEventDetailsFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about an iteration of a Map state. */
	export interface MapIterationEventDetails {
		name?: string;
		index?: number | null;
	}

	/** Contains details about an iteration of a Map state. */
	export interface MapIterationEventDetailsFormProperties {
		name: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
	}
	export function CreateMapIterationEventDetailsFormGroup() {
		return new FormGroup<MapIterationEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about a Lambda function that failed during an execution. */
	export interface LambdaFunctionFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about a Lambda function that failed during an execution. */
	export interface LambdaFunctionFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a failed Lambda function schedule event that occurred during an execution. */
	export interface LambdaFunctionScheduleFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about a failed Lambda function schedule event that occurred during an execution. */
	export interface LambdaFunctionScheduleFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionScheduleFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionScheduleFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Lambda function scheduled during an execution. */
	export interface LambdaFunctionScheduledEventDetails {

		/** Required */
		resource: string;
		input?: string;
		inputDetails?: HistoryEventExecutionDataDetails;
		timeoutInSeconds?: number | null;
		taskCredentials?: TaskCredentials;
	}

	/** Contains details about a Lambda function scheduled during an execution. */
	export interface LambdaFunctionScheduledEventDetailsFormProperties {

		/** Required */
		resource: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionScheduledEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionScheduledEventDetailsFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about a lambda function that failed to start during an execution. */
	export interface LambdaFunctionStartFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about a lambda function that failed to start during an execution. */
	export interface LambdaFunctionStartFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionStartFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionStartFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Lambda function that successfully terminated during an execution. */
	export interface LambdaFunctionSucceededEventDetails {
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about a Lambda function that successfully terminated during an execution. */
	export interface LambdaFunctionSucceededEventDetailsFormProperties {
		output: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionSucceededEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionSucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Lambda function timeout that occurred during an execution. */
	export interface LambdaFunctionTimedOutEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about a Lambda function timeout that occurred during an execution. */
	export interface LambdaFunctionTimedOutEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionTimedOutEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a state entered during an execution. */
	export interface StateEnteredEventDetails {

		/** Required */
		name: string;
		input?: string;
		inputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about a state entered during an execution. */
	export interface StateEnteredEventDetailsFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
	}
	export function CreateStateEnteredEventDetailsFormGroup() {
		return new FormGroup<StateEnteredEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an exit from a state during an execution. */
	export interface StateExitedEventDetails {

		/** Required */
		name: string;
		output?: string;
		outputDetails?: HistoryEventExecutionDataDetails;
	}

	/** Contains details about an exit from a state during an execution. */
	export interface StateExitedEventDetailsFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
	}
	export function CreateStateExitedEventDetailsFormGroup() {
		return new FormGroup<StateExitedEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Map Run that was started during a state machine execution. */
	export interface MapRunStartedEventDetails {
		mapRunArn?: string;
	}

	/** Contains details about a Map Run that was started during a state machine execution. */
	export interface MapRunStartedEventDetailsFormProperties {
		mapRunArn: FormControl<string | null | undefined>,
	}
	export function CreateMapRunStartedEventDetailsFormGroup() {
		return new FormGroup<MapRunStartedEventDetailsFormProperties>({
			mapRunArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a Map Run failure event that occurred during a state machine execution. */
	export interface MapRunFailedEventDetails {
		error?: string;
		cause?: string;
	}

	/** Contains details about a Map Run failure event that occurred during a state machine execution. */
	export interface MapRunFailedEventDetailsFormProperties {
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateMapRunFailedEventDetailsFormGroup() {
		return new FormGroup<MapRunFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExecutionHistoryInput {

		/** Required */
		executionArn: string;
		maxResults?: number | null;
		reverseOrder?: boolean | null;
		nextToken?: string;
		includeExecutionData?: boolean | null;
	}
	export interface GetExecutionHistoryInputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		includeExecutionData: FormControl<boolean | null | undefined>,
	}
	export function CreateGetExecutionHistoryInputFormGroup() {
		return new FormGroup<GetExecutionHistoryInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			includeExecutionData: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InvalidToken {
	}
	export interface InvalidTokenFormProperties {
	}
	export function CreateInvalidTokenFormGroup() {
		return new FormGroup<InvalidTokenFormProperties>({
		});

	}

	export interface ListActivitiesOutput {

		/** Required */
		activities: Array<ActivityListItem>;
		nextToken?: string;
	}
	export interface ListActivitiesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActivitiesOutputFormGroup() {
		return new FormGroup<ListActivitiesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an activity. */
	export interface ActivityListItem {

		/** Required */
		activityArn: string;

		/** Required */
		name: string;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about an activity. */
	export interface ActivityListItemFormProperties {

		/** Required */
		activityArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivityListItemFormGroup() {
		return new FormGroup<ActivityListItemFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListActivitiesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListActivitiesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActivitiesInputFormGroup() {
		return new FormGroup<ListActivitiesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsOutput {

		/** Required */
		executions: Array<ExecutionListItem>;
		nextToken?: string;
	}
	export interface ListExecutionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsOutputFormGroup() {
		return new FormGroup<ListExecutionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an execution. */
	export interface ExecutionListItem {

		/** Required */
		executionArn: string;

		/** Required */
		stateMachineArn: string;

		/** Required */
		name: string;

		/** Required */
		status: ExecutionStatus;

		/** Required */
		startDate: Date;
		stopDate?: Date;
		mapRunArn?: string;
		itemCount?: number | null;
		stateMachineVersionArn?: string;
		stateMachineAliasArn?: string;
	}

	/** Contains details about an execution. */
	export interface ExecutionListItemFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ExecutionStatus | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,
		mapRunArn: FormControl<string | null | undefined>,
		itemCount: FormControl<number | null | undefined>,
		stateMachineVersionArn: FormControl<string | null | undefined>,
		stateMachineAliasArn: FormControl<string | null | undefined>,
	}
	export function CreateExecutionListItemFormGroup() {
		return new FormGroup<ExecutionListItemFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ExecutionStatus | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
			mapRunArn: new FormControl<string | null | undefined>(undefined),
			itemCount: new FormControl<number | null | undefined>(undefined),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined),
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsInput {
		stateMachineArn?: string;
		statusFilter?: ExecutionStatus;
		maxResults?: number | null;
		nextToken?: string;
		mapRunArn?: string;
	}
	export interface ListExecutionsInputFormProperties {
		stateMachineArn: FormControl<string | null | undefined>,
		statusFilter: FormControl<ExecutionStatus | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		mapRunArn: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsInputFormGroup() {
		return new FormGroup<ListExecutionsInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined),
			statusFilter: new FormControl<ExecutionStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			mapRunArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListMapRunsOutput {

		/** Required */
		mapRuns: Array<MapRunListItem>;
		nextToken?: string;
	}
	export interface ListMapRunsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMapRunsOutputFormGroup() {
		return new FormGroup<ListMapRunsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a specific Map Run. */
	export interface MapRunListItem {

		/** Required */
		executionArn: string;

		/** Required */
		mapRunArn: string;

		/** Required */
		stateMachineArn: string;

		/** Required */
		startDate: Date;
		stopDate?: Date;
	}

	/** Contains details about a specific Map Run. */
	export interface MapRunListItemFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		mapRunArn: FormControl<string | null | undefined>,

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,
	}
	export function CreateMapRunListItemFormGroup() {
		return new FormGroup<MapRunListItemFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mapRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMapRunsInput {

		/** Required */
		executionArn: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListMapRunsInputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMapRunsInputFormGroup() {
		return new FormGroup<ListMapRunsInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListStateMachineAliasesOutput {

		/** Required */
		stateMachineAliases: Array<StateMachineAliasListItem>;
		nextToken?: string;
	}
	export interface ListStateMachineAliasesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachineAliasesOutputFormGroup() {
		return new FormGroup<ListStateMachineAliasesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a specific state machine alias. */
	export interface StateMachineAliasListItem {

		/** Required */
		stateMachineAliasArn: string;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about a specific state machine alias. */
	export interface StateMachineAliasListItemFormProperties {

		/** Required */
		stateMachineAliasArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStateMachineAliasListItemFormGroup() {
		return new FormGroup<StateMachineAliasListItemFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStateMachineAliasesInput {

		/** Required */
		stateMachineArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListStateMachineAliasesInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStateMachineAliasesInputFormGroup() {
		return new FormGroup<ListStateMachineAliasesInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListStateMachineVersionsOutput {

		/** Required */
		stateMachineVersions: Array<StateMachineVersionListItem>;
		nextToken?: string;
	}
	export interface ListStateMachineVersionsOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachineVersionsOutputFormGroup() {
		return new FormGroup<ListStateMachineVersionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about a specific state machine version. */
	export interface StateMachineVersionListItem {

		/** Required */
		stateMachineVersionArn: string;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about a specific state machine version. */
	export interface StateMachineVersionListItemFormProperties {

		/** Required */
		stateMachineVersionArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStateMachineVersionListItemFormGroup() {
		return new FormGroup<StateMachineVersionListItemFormProperties>({
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStateMachineVersionsInput {

		/** Required */
		stateMachineArn: string;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface ListStateMachineVersionsInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateListStateMachineVersionsInputFormGroup() {
		return new FormGroup<ListStateMachineVersionsInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListStateMachinesOutput {

		/** Required */
		stateMachines: Array<StateMachineListItem>;
		nextToken?: string;
	}
	export interface ListStateMachinesOutputFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachinesOutputFormGroup() {
		return new FormGroup<ListStateMachinesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about the state machine. */
	export interface StateMachineListItem {

		/** Required */
		stateMachineArn: string;

		/** Required */
		name: string;

		/** Required */
		type: StateMachineType;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about the state machine. */
	export interface StateMachineListItemFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<StateMachineType | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStateMachineListItemFormGroup() {
		return new FormGroup<StateMachineListItemFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<StateMachineType | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStateMachinesInput {
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListStateMachinesInputFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachinesInputFormGroup() {
		return new FormGroup<ListStateMachinesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
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

	export interface PublishStateMachineVersionOutput {

		/** Required */
		creationDate: Date;

		/** Required */
		stateMachineVersionArn: string;
	}
	export interface PublishStateMachineVersionOutputFormProperties {

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		stateMachineVersionArn: FormControl<string | null | undefined>,
	}
	export function CreatePublishStateMachineVersionOutputFormGroup() {
		return new FormGroup<PublishStateMachineVersionOutputFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishStateMachineVersionInput {

		/** Required */
		stateMachineArn: string;
		revisionId?: string;
		description?: string;
	}
	export interface PublishStateMachineVersionInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreatePublishStateMachineVersionInputFormGroup() {
		return new FormGroup<PublishStateMachineVersionInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendTaskFailureOutput {
	}
	export interface SendTaskFailureOutputFormProperties {
	}
	export function CreateSendTaskFailureOutputFormGroup() {
		return new FormGroup<SendTaskFailureOutputFormProperties>({
		});

	}

	export interface SendTaskFailureInput {

		/** Required */
		taskToken: string;
		error?: string;
		cause?: string;
	}
	export interface SendTaskFailureInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskFailureInputFormGroup() {
		return new FormGroup<SendTaskFailureInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskDoesNotExist {
	}
	export interface TaskDoesNotExistFormProperties {
	}
	export function CreateTaskDoesNotExistFormGroup() {
		return new FormGroup<TaskDoesNotExistFormProperties>({
		});

	}

	export interface TaskTimedOut {
	}
	export interface TaskTimedOutFormProperties {
	}
	export function CreateTaskTimedOutFormGroup() {
		return new FormGroup<TaskTimedOutFormProperties>({
		});

	}

	export interface SendTaskHeartbeatOutput {
	}
	export interface SendTaskHeartbeatOutputFormProperties {
	}
	export function CreateSendTaskHeartbeatOutputFormGroup() {
		return new FormGroup<SendTaskHeartbeatOutputFormProperties>({
		});

	}

	export interface SendTaskHeartbeatInput {

		/** Required */
		taskToken: string;
	}
	export interface SendTaskHeartbeatInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskHeartbeatInputFormGroup() {
		return new FormGroup<SendTaskHeartbeatInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendTaskSuccessOutput {
	}
	export interface SendTaskSuccessOutputFormProperties {
	}
	export function CreateSendTaskSuccessOutputFormGroup() {
		return new FormGroup<SendTaskSuccessOutputFormProperties>({
		});

	}

	export interface SendTaskSuccessInput {

		/** Required */
		taskToken: string;

		/** Required */
		output: string;
	}
	export interface SendTaskSuccessInputFormProperties {

		/** Required */
		taskToken: FormControl<string | null | undefined>,

		/** Required */
		output: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskSuccessInputFormGroup() {
		return new FormGroup<SendTaskSuccessInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InvalidOutput {
	}
	export interface InvalidOutputFormProperties {
	}
	export function CreateInvalidOutputFormGroup() {
		return new FormGroup<InvalidOutputFormProperties>({
		});

	}

	export interface StartExecutionOutput {

		/** Required */
		executionArn: string;

		/** Required */
		startDate: Date;
	}
	export interface StartExecutionOutputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateStartExecutionOutputFormGroup() {
		return new FormGroup<StartExecutionOutputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartExecutionInput {

		/** Required */
		stateMachineArn: string;
		name?: string;
		input?: string;
		traceHeader?: string;
	}
	export interface StartExecutionInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		traceHeader: FormControl<string | null | undefined>,
	}
	export function CreateStartExecutionInputFormGroup() {
		return new FormGroup<StartExecutionInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			traceHeader: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExecutionLimitExceeded {
	}
	export interface ExecutionLimitExceededFormProperties {
	}
	export function CreateExecutionLimitExceededFormGroup() {
		return new FormGroup<ExecutionLimitExceededFormProperties>({
		});

	}

	export interface ExecutionAlreadyExists {
	}
	export interface ExecutionAlreadyExistsFormProperties {
	}
	export function CreateExecutionAlreadyExistsFormGroup() {
		return new FormGroup<ExecutionAlreadyExistsFormProperties>({
		});

	}

	export interface InvalidExecutionInput {
	}
	export interface InvalidExecutionInputFormProperties {
	}
	export function CreateInvalidExecutionInputFormGroup() {
		return new FormGroup<InvalidExecutionInputFormProperties>({
		});

	}

	export interface StartSyncExecutionOutput {

		/** Required */
		executionArn: string;
		stateMachineArn?: string;
		name?: string;

		/** Required */
		startDate: Date;

		/** Required */
		stopDate: Date;

		/** Required */
		status: SyncExecutionStatus;
		error?: string;
		cause?: string;
		input?: string;

		/** Provides details about execution input or output. */
		inputDetails?: CloudWatchEventsExecutionDataDetails;
		output?: string;

		/** Provides details about execution input or output. */
		outputDetails?: CloudWatchEventsExecutionDataDetails;
		traceHeader?: string;
		billingDetails?: BillingDetails;
	}
	export interface StartSyncExecutionOutputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
		stateMachineArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,

		/** Required */
		stopDate: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<SyncExecutionStatus | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		output: FormControl<string | null | undefined>,
		traceHeader: FormControl<string | null | undefined>,
	}
	export function CreateStartSyncExecutionOutputFormGroup() {
		return new FormGroup<StartSyncExecutionOutputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<SyncExecutionStatus | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			output: new FormControl<string | null | undefined>(undefined),
			traceHeader: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SyncExecutionStatus { SUCCEEDED = 0, FAILED = 1, TIMED_OUT = 2 }


	/** An object that describes workflow billing details. */
	export interface BillingDetails {
		billedMemoryUsedInMB?: number | null;
		billedDurationInMilliseconds?: number | null;
	}

	/** An object that describes workflow billing details. */
	export interface BillingDetailsFormProperties {
		billedMemoryUsedInMB: FormControl<number | null | undefined>,
		billedDurationInMilliseconds: FormControl<number | null | undefined>,
	}
	export function CreateBillingDetailsFormGroup() {
		return new FormGroup<BillingDetailsFormProperties>({
			billedMemoryUsedInMB: new FormControl<number | null | undefined>(undefined),
			billedDurationInMilliseconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StartSyncExecutionInput {

		/** Required */
		stateMachineArn: string;
		name?: string;
		input?: string;
		traceHeader?: string;
	}
	export interface StartSyncExecutionInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		traceHeader: FormControl<string | null | undefined>,
	}
	export function CreateStartSyncExecutionInputFormGroup() {
		return new FormGroup<StartSyncExecutionInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined),
			traceHeader: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopExecutionOutput {

		/** Required */
		stopDate: Date;
	}
	export interface StopExecutionOutputFormProperties {

		/** Required */
		stopDate: FormControl<Date | null | undefined>,
	}
	export function CreateStopExecutionOutputFormGroup() {
		return new FormGroup<StopExecutionOutputFormProperties>({
			stopDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopExecutionInput {

		/** Required */
		executionArn: string;
		error?: string;
		cause?: string;
	}
	export interface StopExecutionInputFormProperties {

		/** Required */
		executionArn: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		cause: FormControl<string | null | undefined>,
	}
	export function CreateStopExecutionInputFormGroup() {
		return new FormGroup<StopExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			error: new FormControl<string | null | undefined>(undefined),
			cause: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface TagResourceInput {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
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

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
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

	export interface UpdateMapRunOutput {
	}
	export interface UpdateMapRunOutputFormProperties {
	}
	export function CreateUpdateMapRunOutputFormGroup() {
		return new FormGroup<UpdateMapRunOutputFormProperties>({
		});

	}

	export interface UpdateMapRunInput {

		/** Required */
		mapRunArn: string;
		maxConcurrency?: number | null;
		toleratedFailurePercentage?: number;
		toleratedFailureCount?: number | null;
	}
	export interface UpdateMapRunInputFormProperties {

		/** Required */
		mapRunArn: FormControl<string | null | undefined>,
		maxConcurrency: FormControl<number | null | undefined>,
		toleratedFailurePercentage: FormControl<number | null | undefined>,
		toleratedFailureCount: FormControl<number | null | undefined>,
	}
	export function CreateUpdateMapRunInputFormGroup() {
		return new FormGroup<UpdateMapRunInputFormProperties>({
			mapRunArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxConcurrency: new FormControl<number | null | undefined>(undefined),
			toleratedFailurePercentage: new FormControl<number | null | undefined>(undefined),
			toleratedFailureCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateStateMachineOutput {

		/** Required */
		updateDate: Date;
		revisionId?: string;
		stateMachineVersionArn?: string;
	}
	export interface UpdateStateMachineOutputFormProperties {

		/** Required */
		updateDate: FormControl<Date | null | undefined>,
		revisionId: FormControl<string | null | undefined>,
		stateMachineVersionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStateMachineOutputFormGroup() {
		return new FormGroup<UpdateStateMachineOutputFormProperties>({
			updateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined),
			stateMachineVersionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStateMachineInput {

		/** Required */
		stateMachineArn: string;
		definition?: string;
		roleArn?: string;
		loggingConfiguration?: LoggingConfiguration;
		tracingConfiguration?: TracingConfiguration;
		publish?: boolean | null;
		versionDescription?: string;
	}
	export interface UpdateStateMachineInputFormProperties {

		/** Required */
		stateMachineArn: FormControl<string | null | undefined>,
		definition: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		publish: FormControl<boolean | null | undefined>,
		versionDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStateMachineInputFormGroup() {
		return new FormGroup<UpdateStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			definition: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			publish: new FormControl<boolean | null | undefined>(undefined),
			versionDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MissingRequiredParameter {
	}
	export interface MissingRequiredParameterFormProperties {
	}
	export function CreateMissingRequiredParameterFormGroup() {
		return new FormGroup<MissingRequiredParameterFormProperties>({
		});

	}

	export interface UpdateStateMachineAliasOutput {

		/** Required */
		updateDate: Date;
	}
	export interface UpdateStateMachineAliasOutputFormProperties {

		/** Required */
		updateDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateStateMachineAliasOutputFormGroup() {
		return new FormGroup<UpdateStateMachineAliasOutputFormProperties>({
			updateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStateMachineAliasInput {

		/** Required */
		stateMachineAliasArn: string;
		description?: string;
		routingConfiguration?: Array<RoutingConfigurationListItem>;
	}
	export interface UpdateStateMachineAliasInputFormProperties {

		/** Required */
		stateMachineAliasArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStateMachineAliasInputFormGroup() {
		return new FormGroup<UpdateStateMachineAliasInputFormProperties>({
			stateMachineAliasArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an activity. An activity is a task that you write in any programming language and host on any machine that has access to Step Functions. Activities must poll Step Functions using the <code>GetActivityTask</code> API action and respond using <code>SendTask*</code> API actions. This function lets Step Functions know the existence of your activity and returns an identifier for use in a state machine and when polling from the activity.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateActivity</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateActivity</code>'s idempotency check is based on the activity <code>name</code>. If a following request has different <code>tags</code> values, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.CreateActivity
		 * @return {CreateActivityOutput} Success
		 */
		CreateActivity(requestBody: CreateActivityInput): Observable<CreateActivityOutput> {
			return this.http.post<CreateActivityOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.CreateActivity', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a state machine. A state machine consists of a collection of states that can do work (<code>Task</code> states), determine to which states to transition next (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states), and so on. State machines are specified using a JSON-based, structured language. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States Language</a> in the Step Functions User Guide.</p> <p>If you set the <code>publish</code> parameter of this API action to <code>true</code>, it publishes version <code>1</code> as the first revision of the state machine.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <note> <p> <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency check is based on the state machine <code>name</code>, <code>definition</code>, <code>type</code>, <code>LoggingConfiguration</code>, and <code>TracingConfiguration</code>. The check is also based on the <code>publish</code> and <code>versionDescription</code> parameters. If a following request has a different <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>roleArn</code> and <code>tags</code> will not be updated, even if they are different.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.CreateStateMachine
		 * @return {CreateStateMachineOutput} Success
		 */
		CreateStateMachine(requestBody: CreateStateMachineInput): Observable<CreateStateMachineOutput> {
			return this.http.post<CreateStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.CreateStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> for a state machine that points to one or two <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> of the same state machine. You can set your application to call <a>StartExecution</a> with an alias and update the version the alias uses without changing the client's code.</p> <p>You can also map an alias to split <a>StartExecution</a> requests between two versions of a state machine. To do this, add a second <code>RoutingConfig</code> object in the <code>routingConfiguration</code> parameter. You must also specify the percentage of execution run requests each version should receive in both <code>RoutingConfig</code> objects. Step Functions randomly chooses which version runs a given execution based on the percentage you specify.</p> <p>To create an alias that points to a single version, specify a single <code>RoutingConfig</code> object with a <code>weight</code> set to 100.</p> <p>You can create up to 100 aliases for each state machine. You must delete unused aliases using the <a>DeleteStateMachineAlias</a> API action.</p> <p> <code>CreateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineArn</code>, <code>description</code>, <code>name</code>, and <code>routingConfiguration</code> parameters. Requests that contain the same values for these parameters return a successful idempotent response without creating a duplicate resource.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias
		 * @return {CreateStateMachineAliasOutput} Success
		 */
		CreateStateMachineAlias(requestBody: CreateStateMachineAliasInput): Observable<CreateStateMachineAliasOutput> {
			return this.http.post<CreateStateMachineAliasOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Deletes a state machine. This is an asynchronous operation: It sets the state machine's status to <code>DELETING</code> and begins the deletion process. </p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine</code> </p> </li> </ul> <p>This API action also deletes all <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> and <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> associated with a state machine.</p> <note> <p>For <code>EXPRESS</code> state machines, the deletion happens eventually (usually in less than a minute). Running executions may emit logs after <code>DeleteStateMachine</code> API is called.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.DeleteStateMachine
		 * @return {DeleteStateMachineOutput} Success
		 */
		DeleteStateMachine(requestBody: DeleteStateMachineInput): Observable<DeleteStateMachineOutput> {
			return this.http.post<DeleteStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DeleteStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p>After you delete a state machine alias, you can't use it to start executions. When you delete a state machine alias, Step Functions doesn't delete the state machine versions that alias references.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias
		 * @return {DeleteStateMachineAliasOutput} Success
		 */
		DeleteStateMachineAlias(requestBody: DeleteStateMachineAliasInput): Observable<DeleteStateMachineAliasOutput> {
			return this.http.post<DeleteStateMachineAliasOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. After you delete a version, you can't call <a>StartExecution</a> using that version's ARN or use the version with a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <note> <p>Deleting a state machine version won't terminate its in-progress executions.</p> </note> <note> <p>You can't delete a state machine version currently referenced by one or more aliases. Before you delete a version, you must either delete the aliases or update them to point to another state machine version.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion
		 * @return {DeleteStateMachineVersionOutput} Success
		 */
		DeleteStateMachineVersion(requestBody: DeleteStateMachineVersionInput): Observable<DeleteStateMachineVersionOutput> {
			return this.http.post<DeleteStateMachineVersionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Provides information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was dispatched by a Map Run.</p> <p>If you specify a version or alias ARN when you call the <a>StartExecution</a> API action, <code>DescribeExecution</code> returns that ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>Executions of an <code>EXPRESS</code> state machinearen't supported by <code>DescribeExecution</code> unless a Map Run dispatched them.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeExecution
		 * @return {DescribeExecutionOutput} Success
		 */
		DescribeExecution(requestBody: DescribeExecutionInput): Observable<DescribeExecutionOutput> {
			return this.http.post<DescribeExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about a Map Run's configuration, progress, and results. For more information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-examine-map-run.html">Examining Map Run</a> in the <i>Step Functions Developer Guide</i>.
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeMapRun
		 * @return {DescribeMapRunOutput} Success
		 */
		DescribeMapRun(requestBody: DescribeMapRunInput): Observable<DescribeMapRunOutput> {
			return this.http.post<DescribeMapRunOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeMapRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>This API action returns the details for a state machine version if the <code>stateMachineArn</code> you specify is a state machine version ARN.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeStateMachine
		 * @return {DescribeStateMachineOutput} Success
		 */
		DescribeStateMachine(requestBody: DescribeStateMachineInput): Observable<DescribeStateMachineOutput> {
			return this.http.post<DescribeStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns details about a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a>.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias
		 * @return {DescribeStateMachineAliasOutput} Success
		 */
		DescribeStateMachineAlias(requestBody: DescribeStateMachineAliasInput): Observable<DescribeStateMachineAliasOutput> {
			return this.http.post<DescribeStateMachineAliasOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides information about a state machine's definition, its execution role ARN, and configuration. If a Map Run dispatched the execution, this action returns the Map Run Amazon Resource Name (ARN) in the response. The state machine returned is the state machine associated with the Map Run.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution
		 * @return {DescribeStateMachineForExecutionOutput} Success
		 */
		DescribeStateMachineForExecution(requestBody: DescribeStateMachineForExecutionInput): Observable<DescribeStateMachineForExecutionOutput> {
			return this.http.post<DescribeStateMachineForExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been scheduled for execution by a running state machine. This initiates a long poll, where the service holds the HTTP connection open and responds as soon as a task becomes available (i.e. an execution of a task of this type is needed.) The maximum time the service holds on to the request before responding is 60 seconds. If no task is available within 60 seconds, the poll returns a <code>taskToken</code> with a null string.</p> <note> <p>This API action isn't logged in CloudTrail.</p> </note> <important> <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds higher than the maximum time the service may hold the poll request).</p> <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p> </important>
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
		GetExecutionHistory(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: GetExecutionHistoryInput): Observable<GetExecutionHistoryOutput> {
			return this.http.post<GetExecutionHistoryOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.GetExecutionHistory?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing activities.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.ListActivities
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListActivitiesOutput} Success
		 */
		ListActivities(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListActivitiesInput): Observable<ListActivitiesOutput> {
			return this.http.post<ListActivitiesOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListActivities?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all executions of a state machine or a Map Run. You can list all executions related to a state machine by specifying a state machine Amazon Resource Name (ARN), or those related to a Map Run by specifying a Map Run ARN.</p> <p>You can also provide a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> ARN or <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> ARN to list the executions associated with a specific alias or version.</p> <p>Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.ListExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExecutionsOutput} Success
		 */
		ListExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExecutionsInput): Observable<ListExecutionsOutput> {
			return this.http.post<ListExecutionsOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Map Runs that were started by a given state machine execution. Use this API action to obtain Map Run ARNs, and then call <code>DescribeMapRun</code> to obtain more information, if needed.
		 * Post #X-Amz-Target=AWSStepFunctions.ListMapRuns
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListMapRunsOutput} Success
		 */
		ListMapRuns(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListMapRunsInput): Observable<ListMapRunsOutput> {
			return this.http.post<ListMapRunsOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListMapRuns?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">aliases</a> for a specified state machine ARN. Results are sorted by time, with the most recently created aliases listed first. </p> <p>To list aliases that reference a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, you can specify the version ARN in the <code>stateMachineArn</code> parameter.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>UpdateStateMachineAlias</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.ListStateMachineAliases
		 * @return {ListStateMachineAliasesOutput} Success
		 */
		ListStateMachineAliases(requestBody: ListStateMachineAliasesInput): Observable<ListStateMachineAliasesOutput> {
			return this.http.post<ListStateMachineAliasesOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">versions</a> for the specified state machine Amazon Resource Name (ARN).</p> <p>The results are sorted in descending order of the version creation time.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>PublishStateMachineVersion</a> </p> </li> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.ListStateMachineVersions
		 * @return {ListStateMachineVersionsOutput} Success
		 */
		ListStateMachineVersions(requestBody: ListStateMachineVersionsInput): Observable<ListStateMachineVersionsOutput> {
			return this.http.post<ListStateMachineVersionsOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the existing state machines.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.ListStateMachines
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListStateMachinesOutput} Success
		 */
		ListStateMachines(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListStateMachinesInput): Observable<ListStateMachinesOutput> {
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
		 * <p>Creates a <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a> from the current revision of a state machine. Use versions to create immutable snapshots of your state machine. You can start executions from versions either directly or with an alias. To create an alias, use <a>CreateStateMachineAlias</a>.</p> <p>You can publish up to 1000 versions for each state machine. You must manually delete unused versions using the <a>DeleteStateMachineVersion</a> API action.</p> <p> <code>PublishStateMachineVersion</code> is an idempotent API. It doesn't create a duplicate state machine version if it already exists for the current revision. Step Functions bases <code>PublishStateMachineVersion</code>'s idempotency check on the <code>stateMachineArn</code>, <code>name</code>, and <code>revisionId</code> parameters. Requests with the same parameters return a successful idempotent response. If you don't specify a <code>revisionId</code>, Step Functions checks for a previously published version of the state machine's current revision.</p> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>DeleteStateMachineVersion</a> </p> </li> <li> <p> <a>ListStateMachineVersions</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion
		 * @return {PublishStateMachineVersionOutput} Success
		 */
		PublishStateMachineVersion(requestBody: PublishStateMachineVersionInput): Observable<PublishStateMachineVersionOutput> {
			return this.http.post<PublishStateMachineVersionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Starts a state machine execution.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>If you start an execution with an unqualified state machine ARN, Step Functions uses the latest revision of the state machine for the execution.</p> <p>To start executions of a state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>, call <code>StartExecution</code> and provide the version ARN or the ARN of an <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> that points to the version.</p> <note> <p> <code>StartExecution</code> is idempotent for <code>STANDARD</code> workflows. For a <code>STANDARD</code> workflow, if you call <code>StartExecution</code> with the same name and input as a running execution, the call succeeds and return the same response as the original request. If the execution is closed or if the input is different, it returns a <code>400 ExecutionAlreadyExists</code> error. You can reuse names after 90 days. </p> <p> <code>StartExecution</code> isn't idempotent for <code>EXPRESS</code> workflows. </p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.StartExecution
		 * @return {StartExecutionOutput} Success
		 */
		StartExecution(requestBody: StartExecutionInput): Observable<StartExecutionOutput> {
			return this.http.post<StartExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.StartExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code> is not available for <code>STANDARD</code> workflows.</p> <note> <p> <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your execution fails, because the status code in the API response doesn't reflect function errors. Error codes are reserved for errors that prevent your execution from running, such as permissions errors, limit errors, or issues with your state machine code and configuration. </p> </note> <note> <p>This API action isn't logged in CloudTrail.</p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.StartSyncExecution
		 * @return {StartSyncExecutionOutput} Success
		 */
		StartSyncExecution(requestBody: StartSyncExecutionInput): Observable<StartSyncExecutionOutput> {
			return this.http.post<StartSyncExecutionOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.StartSyncExecution', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Add a tag to a Step Functions resource.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>Amazon Web Services Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p>
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
		 * Updates an in-progress Map Run's configuration to include changes to the settings that control maximum concurrency and Map Run failure.
		 * Post #X-Amz-Target=AWSStepFunctions.UpdateMapRun
		 * @return {UpdateMapRunOutput} Success
		 */
		UpdateMapRun(requestBody: UpdateMapRunInput): Observable<UpdateMapRunOutput> {
			return this.http.post<UpdateMapRunOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.UpdateMapRun', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates an existing state machine by modifying its <code>definition</code>, <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue to use the previous <code>definition</code> and <code>roleArn</code>. You must include at least one of <code>definition</code> or <code>roleArn</code> or you will receive a <code>MissingRequiredParameter</code> error.</p> <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p> <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p> <p>The following are some examples of qualified and unqualified state machine ARNs:</p> <ul> <li> <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p> </note> </li> <li> <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine:PROD&gt;</code> </p> <note> <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p> </note> </li> <li> <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p> <p> <code>arn:&lt;partition&gt;:states:&lt;region&gt;:&lt;account-id&gt;:stateMachine:&lt;myStateMachine&gt;</code> </p> </li> </ul> <p>After you update your state machine, you can set the <code>publish</code> parameter to <code>true</code> in the same action to publish a new <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html">version</a>. This way, you can opt-in to strict versioning of your state machine.</p> <note> <p>Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1.</p> </note> <note> <p>All <code>StartExecution</code> calls within a few seconds use the updated <code>definition</code> and <code>roleArn</code>. Executions started immediately after you call <code>UpdateStateMachine</code> may use the previous state machine <code>definition</code> and <code>roleArn</code>. </p> </note>
		 * Post #X-Amz-Target=AWSStepFunctions.UpdateStateMachine
		 * @return {UpdateStateMachineOutput} Success
		 */
		UpdateStateMachine(requestBody: UpdateStateMachineInput): Observable<UpdateStateMachineOutput> {
			return this.http.post<UpdateStateMachineOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.UpdateStateMachine', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Updates the configuration of an existing state machine <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-alias.html">alias</a> by modifying its <code>description</code> or <code>routingConfiguration</code>.</p> <p>You must specify at least one of the <code>description</code> or <code>routingConfiguration</code> parameters to update a state machine alias.</p> <note> <p> <code>UpdateStateMachineAlias</code> is an idempotent API. Step Functions bases the idempotency check on the <code>stateMachineAliasArn</code>, <code>description</code>, and <code>routingConfiguration</code> parameters. Requests with the same parameters return an idempotent response.</p> </note> <note> <p>This operation is eventually consistent. All <a>StartExecution</a> requests made within a few seconds use the latest alias configuration. Executions started immediately after calling <code>UpdateStateMachineAlias</code> may use the previous routing configuration.</p> </note> <p> <b>Related operations:</b> </p> <ul> <li> <p> <a>CreateStateMachineAlias</a> </p> </li> <li> <p> <a>DescribeStateMachineAlias</a> </p> </li> <li> <p> <a>ListStateMachineAliases</a> </p> </li> <li> <p> <a>DeleteStateMachineAlias</a> </p> </li> </ul>
		 * Post #X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias
		 * @return {UpdateStateMachineAliasOutput} Success
		 */
		UpdateStateMachineAlias(requestBody: UpdateStateMachineAliasInput): Observable<UpdateStateMachineAliasOutput> {
			return this.http.post<UpdateStateMachineAliasOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateActivityX_Amz_Target { 'AWSStepFunctions.CreateActivity' = 0 }

	export enum CreateStateMachineX_Amz_Target { 'AWSStepFunctions.CreateStateMachine' = 0 }

	export enum CreateStateMachineAliasX_Amz_Target { 'AWSStepFunctions.CreateStateMachineAlias' = 0 }

	export enum DeleteActivityX_Amz_Target { 'AWSStepFunctions.DeleteActivity' = 0 }

	export enum DeleteStateMachineX_Amz_Target { 'AWSStepFunctions.DeleteStateMachine' = 0 }

	export enum DeleteStateMachineAliasX_Amz_Target { 'AWSStepFunctions.DeleteStateMachineAlias' = 0 }

	export enum DeleteStateMachineVersionX_Amz_Target { 'AWSStepFunctions.DeleteStateMachineVersion' = 0 }

	export enum DescribeActivityX_Amz_Target { 'AWSStepFunctions.DescribeActivity' = 0 }

	export enum DescribeExecutionX_Amz_Target { 'AWSStepFunctions.DescribeExecution' = 0 }

	export enum DescribeMapRunX_Amz_Target { 'AWSStepFunctions.DescribeMapRun' = 0 }

	export enum DescribeStateMachineX_Amz_Target { 'AWSStepFunctions.DescribeStateMachine' = 0 }

	export enum DescribeStateMachineAliasX_Amz_Target { 'AWSStepFunctions.DescribeStateMachineAlias' = 0 }

	export enum DescribeStateMachineForExecutionX_Amz_Target { 'AWSStepFunctions.DescribeStateMachineForExecution' = 0 }

	export enum GetActivityTaskX_Amz_Target { 'AWSStepFunctions.GetActivityTask' = 0 }

	export enum GetExecutionHistoryX_Amz_Target { 'AWSStepFunctions.GetExecutionHistory' = 0 }

	export enum ListActivitiesX_Amz_Target { 'AWSStepFunctions.ListActivities' = 0 }

	export enum ListExecutionsX_Amz_Target { 'AWSStepFunctions.ListExecutions' = 0 }

	export enum ListMapRunsX_Amz_Target { 'AWSStepFunctions.ListMapRuns' = 0 }

	export enum ListStateMachineAliasesX_Amz_Target { 'AWSStepFunctions.ListStateMachineAliases' = 0 }

	export enum ListStateMachineVersionsX_Amz_Target { 'AWSStepFunctions.ListStateMachineVersions' = 0 }

	export enum ListStateMachinesX_Amz_Target { 'AWSStepFunctions.ListStateMachines' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'AWSStepFunctions.ListTagsForResource' = 0 }

	export enum PublishStateMachineVersionX_Amz_Target { 'AWSStepFunctions.PublishStateMachineVersion' = 0 }

	export enum SendTaskFailureX_Amz_Target { 'AWSStepFunctions.SendTaskFailure' = 0 }

	export enum SendTaskHeartbeatX_Amz_Target { 'AWSStepFunctions.SendTaskHeartbeat' = 0 }

	export enum SendTaskSuccessX_Amz_Target { 'AWSStepFunctions.SendTaskSuccess' = 0 }

	export enum StartExecutionX_Amz_Target { 'AWSStepFunctions.StartExecution' = 0 }

	export enum StartSyncExecutionX_Amz_Target { 'AWSStepFunctions.StartSyncExecution' = 0 }

	export enum StopExecutionX_Amz_Target { 'AWSStepFunctions.StopExecution' = 0 }

	export enum TagResourceX_Amz_Target { 'AWSStepFunctions.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'AWSStepFunctions.UntagResource' = 0 }

	export enum UpdateMapRunX_Amz_Target { 'AWSStepFunctions.UpdateMapRun' = 0 }

	export enum UpdateStateMachineX_Amz_Target { 'AWSStepFunctions.UpdateStateMachine' = 0 }

	export enum UpdateStateMachineAliasX_Amz_Target { 'AWSStepFunctions.UpdateStateMachineAlias' = 0 }

}

