import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateActivityOutput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;

		/** Required */
		creationDate: Date;
	}
	export interface CreateActivityOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateActivityOutputFormGroup() {
		return new FormGroup<CreateActivityOutputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateActivityInput {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;
		tags?: Array<Tag>;
	}
	export interface CreateActivityInputFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateActivityInputFormGroup() {
		return new FormGroup<CreateActivityInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
		});

	}


	/** <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface Tag {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		key?: string | null;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value?: string | null;
	}

	/** <p>Tags are key-value pairs that can be associated with Step Functions state machines and activities.</p> <p>An array of key-value pairs. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html">Using Cost Allocation Tags</a> in the <i>AWS Billing and Cost Management User Guide</i>, and <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_iam-tags.html">Controlling Access Using IAM Tags</a>.</p> <p>Tags may only contain Unicode letters, digits, white space, or these symbols: <code>_ . : / = + - @</code>.</p> */
	export interface TagFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/** Required */
		creationDate: Date;
	}
	export interface CreateStateMachineOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateCreateStateMachineOutputFormGroup() {
		return new FormGroup<CreateStateMachineOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateStateMachineInput {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: string;
		type?: CreateStateMachineInputType | null;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
		tags?: Array<Tag>;
	}
	export interface CreateStateMachineInputFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
		type: FormControl<CreateStateMachineInputType | null | undefined>,
	}
	export function CreateCreateStateMachineInputFormGroup() {
		return new FormGroup<CreateStateMachineInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1048576), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			type: new FormControl<CreateStateMachineInputType | null | undefined>(undefined),
		});

	}

	export enum CreateStateMachineInputType { STANDARD = 0, EXPRESS = 1 }


	/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
	export interface LoggingConfiguration {
		level?: LoggingConfigurationLevel | null;
		includeExecutionData?: boolean | null;
		destinations?: Array<LogDestination>;
	}

	/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
	export interface LoggingConfigurationFormProperties {
		level: FormControl<LoggingConfigurationLevel | null | undefined>,
		includeExecutionData: FormControl<boolean | null | undefined>,
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
			level: new FormControl<LoggingConfigurationLevel | null | undefined>(undefined),
			includeExecutionData: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum LoggingConfigurationLevel { ALL = 0, ERROR = 1, FATAL = 2, OFF = 3 }


	/** <p/> */
	export interface LogDestination {

		/** <p/> */
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

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		logGroupArn?: string | null;
	}

	/** <p/> */
	export interface CloudWatchLogsLogGroupFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		logGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsLogGroupFormGroup() {
		return new FormGroup<CloudWatchLogsLogGroupFormProperties>({
			logGroupArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
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

	export interface DeleteActivityOutput {
	}
	export interface DeleteActivityOutputFormProperties {
	}
	export function CreateDeleteActivityOutputFormGroup() {
		return new FormGroup<DeleteActivityOutputFormProperties>({
		});

	}

	export interface DeleteActivityInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;
	}
	export interface DeleteActivityInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteActivityInputFormGroup() {
		return new FormGroup<DeleteActivityInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;
	}
	export interface DeleteStateMachineInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteStateMachineInputFormGroup() {
		return new FormGroup<DeleteStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface DescribeActivityOutput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Required */
		creationDate: Date;
	}
	export interface DescribeActivityOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeActivityOutputFormGroup() {
		return new FormGroup<DescribeActivityOutputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeActivityInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;
	}
	export interface DescribeActivityInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeActivityInputFormGroup() {
		return new FormGroup<DescribeActivityInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name?: string | null;

		/** Required */
		status: DescribeExecutionOutputStatus;

		/** Required */
		startDate: Date;
		stopDate?: Date | null;

		/**
		 * Required
		 * Max length: 32768
		 */
		input: string;

		/** Max length: 32768 */
		output?: string | null;
	}
	export interface DescribeExecutionOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DescribeExecutionOutputStatus | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Max length: 32768
		 */
		input: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionOutputFormGroup() {
		return new FormGroup<DescribeExecutionOutputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
			status: new FormControl<DescribeExecutionOutputStatus | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32768)]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export enum DescribeExecutionOutputStatus { RUNNING = 0, SUCCEEDED = 1, FAILED = 2, TIMED_OUT = 3, ABORTED = 4 }

	export interface DescribeExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;
	}
	export interface DescribeExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExecutionInputFormGroup() {
		return new FormGroup<DescribeExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

	export interface DescribeStateMachineOutput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;
		status?: DescribeStateMachineOutputStatus | null;

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: string;

		/** Required */
		type: CreateStateMachineInputType;

		/** Required */
		creationDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}
	export interface DescribeStateMachineOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		status: FormControl<DescribeStateMachineOutputStatus | null | undefined>,

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CreateStateMachineInputType | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStateMachineOutputFormGroup() {
		return new FormGroup<DescribeStateMachineOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			status: new FormControl<DescribeStateMachineOutputStatus | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1048576), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			type: new FormControl<CreateStateMachineInputType | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DescribeStateMachineOutputStatus { ACTIVE = 0, DELETING = 1 }

	export interface DescribeStateMachineInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;
	}
	export interface DescribeStateMachineInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineInputFormGroup() {
		return new FormGroup<DescribeStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

	export interface DescribeStateMachineForExecutionOutput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: string;

		/** Required */
		updateDate: Date;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}
	export interface DescribeStateMachineForExecutionOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		updateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStateMachineForExecutionOutputFormGroup() {
		return new FormGroup<DescribeStateMachineForExecutionOutputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1048576), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			updateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStateMachineForExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;
	}
	export interface DescribeStateMachineForExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeStateMachineForExecutionInputFormGroup() {
		return new FormGroup<DescribeStateMachineForExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface GetActivityTaskOutput {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken?: string | null;

		/** Max length: 65536 */
		input?: string | null;
	}
	export interface GetActivityTaskOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/** Max length: 65536 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateGetActivityTaskOutputFormGroup() {
		return new FormGroup<GetActivityTaskOutputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65536)]),
		});

	}

	export interface GetActivityTaskInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		workerName?: string | null;
	}
	export interface GetActivityTaskInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateGetActivityTaskInputFormGroup() {
		return new FormGroup<GetActivityTaskInputFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			workerName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
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

		/**
		 * Contains details about the events that occurred during an execution.
		 * Required
		 */
		events: Array<HistoryEvent>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface GetExecutionHistoryOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExecutionHistoryOutputFormGroup() {
		return new FormGroup<GetExecutionHistoryOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
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

	export enum HistoryEventType { ActivityFailed = 0, ActivityScheduled = 1, ActivityScheduleFailed = 2, ActivityStarted = 3, ActivitySucceeded = 4, ActivityTimedOut = 5, ChoiceStateEntered = 6, ChoiceStateExited = 7, ExecutionAborted = 8, ExecutionFailed = 9, ExecutionStarted = 10, ExecutionSucceeded = 11, ExecutionTimedOut = 12, FailStateEntered = 13, LambdaFunctionFailed = 14, LambdaFunctionScheduled = 15, LambdaFunctionScheduleFailed = 16, LambdaFunctionStarted = 17, LambdaFunctionStartFailed = 18, LambdaFunctionSucceeded = 19, LambdaFunctionTimedOut = 20, MapIterationAborted = 21, MapIterationFailed = 22, MapIterationStarted = 23, MapIterationSucceeded = 24, MapStateAborted = 25, MapStateEntered = 26, MapStateExited = 27, MapStateFailed = 28, MapStateStarted = 29, MapStateSucceeded = 30, ParallelStateAborted = 31, ParallelStateEntered = 32, ParallelStateExited = 33, ParallelStateFailed = 34, ParallelStateStarted = 35, ParallelStateSucceeded = 36, PassStateEntered = 37, PassStateExited = 38, SucceedStateEntered = 39, SucceedStateExited = 40, TaskFailed = 41, TaskScheduled = 42, TaskStarted = 43, TaskStartFailed = 44, TaskStateAborted = 45, TaskStateEntered = 46, TaskStateExited = 47, TaskSubmitFailed = 48, TaskSubmitted = 49, TaskSucceeded = 50, TaskTimedOut = 51, WaitStateAborted = 52, WaitStateEntered = 53, WaitStateExited = 54 }


	/** Contains details about an activity that failed during an execution. */
	export interface ActivityFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about an activity that failed during an execution. */
	export interface ActivityFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityFailedEventDetailsFormGroup() {
		return new FormGroup<ActivityFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about an activity schedule failure that occurred during an execution. */
	export interface ActivityScheduleFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about an activity schedule failure that occurred during an execution. */
	export interface ActivityScheduleFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityScheduleFailedEventDetailsFormGroup() {
		return new FormGroup<ActivityScheduleFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about an activity scheduled during an execution. */
	export interface ActivityScheduledEventDetails {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resource: string;

		/** Max length: 32768 */
		input?: string | null;
		timeoutInSeconds?: number | null;
		heartbeatInSeconds?: number | null;
	}

	/** Contains details about an activity scheduled during an execution. */
	export interface ActivityScheduledEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
		heartbeatInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateActivityScheduledEventDetailsFormGroup() {
		return new FormGroup<ActivityScheduledEventDetailsFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
			heartbeatInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about the start of an activity during an execution. */
	export interface ActivityStartedEventDetails {

		/** Max length: 256 */
		workerName?: string | null;
	}

	/** Contains details about the start of an activity during an execution. */
	export interface ActivityStartedEventDetailsFormProperties {

		/** Max length: 256 */
		workerName: FormControl<string | null | undefined>,
	}
	export function CreateActivityStartedEventDetailsFormGroup() {
		return new FormGroup<ActivityStartedEventDetailsFormProperties>({
			workerName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Contains details about an activity that successfully terminated during an execution. */
	export interface ActivitySucceededEventDetails {

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about an activity that successfully terminated during an execution. */
	export interface ActivitySucceededEventDetailsFormProperties {

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateActivitySucceededEventDetailsFormGroup() {
		return new FormGroup<ActivitySucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about an activity timeout that occurred during an execution. */
	export interface ActivityTimedOutEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about an activity timeout that occurred during an execution. */
	export interface ActivityTimedOutEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateActivityTimedOutEventDetailsFormGroup() {
		return new FormGroup<ActivityTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a task failure event. */
	export interface TaskFailedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a task failure event. */
	export interface TaskFailedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskFailedEventDetailsFormGroup() {
		return new FormGroup<TaskFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a task scheduled during an execution. */
	export interface TaskScheduledEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		region: string;

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 0
		 */
		parameters: string;
		timeoutInSeconds?: number | null;
	}

	/** Contains details about a task scheduled during an execution. */
	export interface TaskScheduledEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32768
		 * Min length: 0
		 */
		parameters: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateTaskScheduledEventDetailsFormGroup() {
		return new FormGroup<TaskScheduledEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32768), Validators.minLength(0)]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about a task that failed to start during an execution. */
	export interface TaskStartFailedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a task that failed to start during an execution. */
	export interface TaskStartFailedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskStartFailedEventDetailsFormGroup() {
		return new FormGroup<TaskStartFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about the start of a task during an execution. */
	export interface TaskStartedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;
	}

	/** Contains details about the start of a task during an execution. */
	export interface TaskStartedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateTaskStartedEventDetailsFormGroup() {
		return new FormGroup<TaskStartedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
		});

	}


	/** Contains details about a task that failed to submit during an execution. */
	export interface TaskSubmitFailedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a task that failed to submit during an execution. */
	export interface TaskSubmitFailedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskSubmitFailedEventDetailsFormGroup() {
		return new FormGroup<TaskSubmitFailedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a task submitted to a resource . */
	export interface TaskSubmittedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about a task submitted to a resource . */
	export interface TaskSubmittedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateTaskSubmittedEventDetailsFormGroup() {
		return new FormGroup<TaskSubmittedEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about the successful completion of a task state. */
	export interface TaskSucceededEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about the successful completion of a task state. */
	export interface TaskSucceededEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateTaskSucceededEventDetailsFormGroup() {
		return new FormGroup<TaskSucceededEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about a resource timeout that occurred during an execution. */
	export interface TaskTimedOutEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a resource timeout that occurred during an execution. */
	export interface TaskTimedOutEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateTaskTimedOutEventDetailsFormGroup() {
		return new FormGroup<TaskTimedOutEventDetailsFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about an execution failure event. */
	export interface ExecutionFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about an execution failure event. */
	export interface ExecutionFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionFailedEventDetailsFormGroup() {
		return new FormGroup<ExecutionFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about the start of the execution. */
	export interface ExecutionStartedEventDetails {

		/** Max length: 32768 */
		input?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn?: string | null;
	}

	/** Contains details about the start of the execution. */
	export interface ExecutionStartedEventDetailsFormProperties {

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateExecutionStartedEventDetailsFormGroup() {
		return new FormGroup<ExecutionStartedEventDetailsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Contains details about the successful termination of the execution. */
	export interface ExecutionSucceededEventDetails {

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about the successful termination of the execution. */
	export interface ExecutionSucceededEventDetailsFormProperties {

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateExecutionSucceededEventDetailsFormGroup() {
		return new FormGroup<ExecutionSucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about an abort of an execution. */
	export interface ExecutionAbortedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about an abort of an execution. */
	export interface ExecutionAbortedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionAbortedEventDetailsFormGroup() {
		return new FormGroup<ExecutionAbortedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about the execution timeout that occurred during the execution. */
	export interface ExecutionTimedOutEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about the execution timeout that occurred during the execution. */
	export interface ExecutionTimedOutEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateExecutionTimedOutEventDetailsFormGroup() {
		return new FormGroup<ExecutionTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Details about a Map state that was started. */
	export interface MapStateStartedEventDetails {

		/** Minimum: 0 */
		length?: number | null;
	}

	/** Details about a Map state that was started. */
	export interface MapStateStartedEventDetailsFormProperties {

		/** Minimum: 0 */
		length: FormControl<number | null | undefined>,
	}
	export function CreateMapStateStartedEventDetailsFormGroup() {
		return new FormGroup<MapStateStartedEventDetailsFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Contains details about an iteration of a Map state. */
	export interface MapIterationEventDetails {

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name?: string | null;

		/** Minimum: 0 */
		index?: number | null;
	}

	/** Contains details about an iteration of a Map state. */
	export interface MapIterationEventDetailsFormProperties {

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		index: FormControl<number | null | undefined>,
	}
	export function CreateMapIterationEventDetailsFormGroup() {
		return new FormGroup<MapIterationEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
			index: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}


	/** Contains details about a lambda function that failed during an execution. */
	export interface LambdaFunctionFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a lambda function that failed during an execution. */
	export interface LambdaFunctionFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a failed lambda function schedule event that occurred during an execution. */
	export interface LambdaFunctionScheduleFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a failed lambda function schedule event that occurred during an execution. */
	export interface LambdaFunctionScheduleFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionScheduleFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionScheduleFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a lambda function scheduled during an execution. */
	export interface LambdaFunctionScheduledEventDetails {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resource: string;

		/** Max length: 32768 */
		input?: string | null;
		timeoutInSeconds?: number | null;
	}

	/** Contains details about a lambda function scheduled during an execution. */
	export interface LambdaFunctionScheduledEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resource: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
		timeoutInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateLambdaFunctionScheduledEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionScheduledEventDetailsFormProperties>({
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains details about a lambda function that failed to start during an execution. */
	export interface LambdaFunctionStartFailedEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a lambda function that failed to start during an execution. */
	export interface LambdaFunctionStartFailedEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionStartFailedEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionStartFailedEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a lambda function that successfully terminated during an execution. */
	export interface LambdaFunctionSucceededEventDetails {

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about a lambda function that successfully terminated during an execution. */
	export interface LambdaFunctionSucceededEventDetailsFormProperties {

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionSucceededEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionSucceededEventDetailsFormProperties>({
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about a lambda function timeout that occurred during an execution. */
	export interface LambdaFunctionTimedOutEventDetails {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}

	/** Contains details about a lambda function timeout that occurred during an execution. */
	export interface LambdaFunctionTimedOutEventDetailsFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateLambdaFunctionTimedOutEventDetailsFormGroup() {
		return new FormGroup<LambdaFunctionTimedOutEventDetailsFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
		});

	}


	/** Contains details about a state entered during an execution. */
	export interface StateEnteredEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Max length: 32768 */
		input?: string | null;
	}

	/** Contains details about a state entered during an execution. */
	export interface StateEnteredEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateStateEnteredEventDetailsFormGroup() {
		return new FormGroup<StateEnteredEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}


	/** Contains details about an exit from a state during an execution. */
	export interface StateExitedEventDetails {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Max length: 32768 */
		output?: string | null;
	}

	/** Contains details about an exit from a state during an execution. */
	export interface StateExitedEventDetailsFormProperties {

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateStateExitedEventDetailsFormGroup() {
		return new FormGroup<StateExitedEventDetailsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
		});

	}

	export interface GetExecutionHistoryInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;
		reverseOrder?: boolean | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface GetExecutionHistoryInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,
		reverseOrder: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetExecutionHistoryInputFormGroup() {
		return new FormGroup<GetExecutionHistoryInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
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

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListActivitiesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActivitiesOutputFormGroup() {
		return new FormGroup<ListActivitiesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains details about an activity. */
	export interface ActivityListItem {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about an activity. */
	export interface ActivityListItemFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		activityArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateActivityListItemFormGroup() {
		return new FormGroup<ActivityListItemFormProperties>({
			activityArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListActivitiesInput {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListActivitiesInputFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListActivitiesInputFormGroup() {
		return new FormGroup<ListActivitiesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface ListExecutionsOutput {

		/** Required */
		executions: Array<ExecutionListItem>;

		/**
		 * Max length: 3096
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListExecutionsOutputFormProperties {

		/**
		 * Max length: 3096
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsOutputFormGroup() {
		return new FormGroup<ListExecutionsOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3096), Validators.minLength(1)]),
		});

	}


	/** Contains details about an execution. */
	export interface ExecutionListItem {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Required */
		status: DescribeExecutionOutputStatus;

		/** Required */
		startDate: Date;
		stopDate?: Date | null;
	}

	/** Contains details about an execution. */
	export interface ExecutionListItemFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DescribeExecutionOutputStatus | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
		stopDate: FormControl<Date | null | undefined>,
	}
	export function CreateExecutionListItemFormGroup() {
		return new FormGroup<ExecutionListItemFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			status: new FormControl<DescribeExecutionOutputStatus | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stopDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListExecutionsInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;
		statusFilter?: DescribeExecutionOutputStatus | null;

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Max length: 3096
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListExecutionsInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,
		statusFilter: FormControl<DescribeExecutionOutputStatus | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 3096
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListExecutionsInputFormGroup() {
		return new FormGroup<ListExecutionsInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			statusFilter: new FormControl<DescribeExecutionOutputStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(3096), Validators.minLength(1)]),
		});

	}

	export interface ListStateMachinesOutput {

		/** Required */
		stateMachines: Array<StateMachineListItem>;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListStateMachinesOutputFormProperties {

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachinesOutputFormGroup() {
		return new FormGroup<ListStateMachinesOutputFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Contains details about the state machine. */
	export interface StateMachineListItem {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: string;

		/** Required */
		type: CreateStateMachineInputType;

		/** Required */
		creationDate: Date;
	}

	/** Contains details about the state machine. */
	export interface StateMachineListItemFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<CreateStateMachineInputType | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,
	}
	export function CreateStateMachineListItemFormGroup() {
		return new FormGroup<StateMachineListItemFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(80), Validators.minLength(1)]),
			type: new FormControl<CreateStateMachineInputType | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListStateMachinesInput {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface ListStateMachinesInputFormProperties {

		/**
		 * Minimum: 0
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListStateMachinesInputFormGroup() {
		return new FormGroup<ListStateMachinesInputFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

	export interface SendTaskFailureOutput {
	}
	export interface SendTaskFailureOutputFormProperties {
	}
	export function CreateSendTaskFailureOutputFormGroup() {
		return new FormGroup<SendTaskFailureOutputFormProperties>({
		});

	}

	export interface SendTaskFailureInput {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}
	export interface SendTaskFailureInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskFailureInputFormGroup() {
		return new FormGroup<SendTaskFailureInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
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

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;
	}
	export interface SendTaskHeartbeatInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskHeartbeatInputFormGroup() {
		return new FormGroup<SendTaskHeartbeatInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: string;

		/**
		 * Required
		 * Max length: 32768
		 */
		output: string;
	}
	export interface SendTaskSuccessInputFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		taskToken: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 32768
		 */
		output: FormControl<string | null | undefined>,
	}
	export function CreateSendTaskSuccessInputFormGroup() {
		return new FormGroup<SendTaskSuccessInputFormProperties>({
			taskToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32768)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;

		/** Required */
		startDate: Date;
	}
	export interface StartExecutionOutputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateStartExecutionOutputFormGroup() {
		return new FormGroup<StartExecutionOutputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartExecutionInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name?: string | null;

		/** Max length: 32768 */
		input?: string | null;
	}
	export interface StartExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** Max length: 32768 */
		input: FormControl<string | null | undefined>,
	}
	export function CreateStartExecutionInputFormGroup() {
		return new FormGroup<StartExecutionInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error?: string | null;

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause?: string | null;
	}
	export interface StopExecutionInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		executionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		error: FormControl<string | null | undefined>,

		/**
		 * Max length: 32768
		 * Min length: 0
		 */
		cause: FormControl<string | null | undefined>,
	}
	export function CreateStopExecutionInputFormGroup() {
		return new FormGroup<StopExecutionInputFormProperties>({
			executionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			error: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32768), Validators.minLength(0)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
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

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}

	export interface UpdateStateMachineOutput {

		/** Required */
		updateDate: Date;
	}
	export interface UpdateStateMachineOutputFormProperties {

		/** Required */
		updateDate: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateStateMachineOutputFormGroup() {
		return new FormGroup<UpdateStateMachineOutputFormProperties>({
			updateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateStateMachineInput {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: string;

		/**
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn?: string | null;

		/** The <code>LoggingConfiguration</code> data type is used to set CloudWatch Logs options. */
		loggingConfiguration?: LoggingConfiguration;
	}
	export interface UpdateStateMachineInputFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		stateMachineArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1048576
		 * Min length: 1
		 */
		definition: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStateMachineInputFormGroup() {
		return new FormGroup<UpdateStateMachineInputFormProperties>({
			stateMachineArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			definition: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1048576), Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
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
		 * <p>Lists the executions of a state machine that meet the filtering criteria. Results are sorted by time, with the most recent execution first.</p> <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an <i>HTTP 400 InvalidToken</i> error.</p> <note> <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p> </note> <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
		 * Post #X-Amz-Target=AWSStepFunctions.ListExecutions
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListExecutionsOutput} Success
		 */
		ListExecutions(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListExecutionsInput): Observable<ListExecutionsOutput> {
			return this.http.post<ListExecutionsOutput>(this.baseUri + '#X-Amz-Target=AWSStepFunctions.ListExecutions?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

