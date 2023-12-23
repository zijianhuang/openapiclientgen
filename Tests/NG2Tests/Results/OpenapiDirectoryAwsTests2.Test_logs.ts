import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateKmsKeyRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 256
		 */
		kmsKeyId: string;
	}
	export interface AssociateKmsKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 */
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateKmsKeyRequestFormGroup() {
		return new FormGroup<AssociateKmsKeyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface OperationAbortedException {
	}
	export interface OperationAbortedExceptionFormProperties {
	}
	export function CreateOperationAbortedExceptionFormGroup() {
		return new FormGroup<OperationAbortedExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface CancelExportTaskRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		taskId: string;
	}
	export interface CancelExportTaskRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelExportTaskRequestFormGroup() {
		return new FormGroup<CancelExportTaskRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface InvalidOperationException {
	}
	export interface InvalidOperationExceptionFormProperties {
	}
	export function CreateInvalidOperationExceptionFormGroup() {
		return new FormGroup<InvalidOperationExceptionFormProperties>({
		});

	}

	export interface CreateExportTaskResponse {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId?: string | null;
	}
	export interface CreateExportTaskResponseFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportTaskResponseFormGroup() {
		return new FormGroup<CreateExportTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface CreateExportTaskRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskName?: string | null;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		from: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		to: number;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		destination: string;
		destinationPrefix?: string | null;
	}
	export interface CreateExportTaskRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		to: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		destination: FormControl<string | null | undefined>,
		destinationPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportTaskRequestFormGroup() {
		return new FormGroup<CreateExportTaskRequestFormProperties>({
			taskName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			from: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			destinationPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface CreateLogGroupRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/** Max length: 256 */
		kmsKeyId?: string | null;
		tags?: Tags;
	}
	export interface CreateLogGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/** Max length: 256 */
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogGroupRequestFormGroup() {
		return new FormGroup<CreateLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export interface CreateLogStreamRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: string;
	}
	export interface CreateLogStreamRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogStreamRequestFormGroup() {
		return new FormGroup<CreateLogStreamRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteDestinationRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: string;
	}
	export interface DeleteDestinationRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDestinationRequestFormGroup() {
		return new FormGroup<DeleteDestinationRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteLogGroupRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;
	}
	export interface DeleteLogGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogGroupRequestFormGroup() {
		return new FormGroup<DeleteLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteLogStreamRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: string;
	}
	export interface DeleteLogStreamRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogStreamRequestFormGroup() {
		return new FormGroup<DeleteLogStreamRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteMetricFilterRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: string;
	}
	export interface DeleteMetricFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMetricFilterRequestFormGroup() {
		return new FormGroup<DeleteMetricFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteQueryDefinitionResponse {
		success?: boolean | null;
	}
	export interface DeleteQueryDefinitionResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteQueryDefinitionResponseFormGroup() {
		return new FormGroup<DeleteQueryDefinitionResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteQueryDefinitionRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId: string;
	}
	export interface DeleteQueryDefinitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueryDefinitionRequestFormGroup() {
		return new FormGroup<DeleteQueryDefinitionRequestFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface DeleteResourcePolicyRequest {
		policyName?: string | null;
	}
	export interface DeleteResourcePolicyRequestFormProperties {
		policyName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteRetentionPolicyRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;
	}
	export interface DeleteRetentionPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionPolicyRequestFormGroup() {
		return new FormGroup<DeleteRetentionPolicyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DeleteSubscriptionFilterRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: string;
	}
	export interface DeleteSubscriptionFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubscriptionFilterRequestFormGroup() {
		return new FormGroup<DeleteSubscriptionFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface DescribeDestinationsResponse {
		destinations?: Array<Destination>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeDestinationsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDestinationsResponseFormGroup() {
		return new FormGroup<DescribeDestinationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a cross-account destination that receives subscription log events. */
	export interface Destination {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName?: string | null;

		/** Min length: 1 */
		targetArn?: string | null;

		/** Min length: 1 */
		roleArn?: string | null;

		/** Min length: 1 */
		accessPolicy?: string | null;
		arn?: string | null;

		/** Minimum: 0 */
		creationTime?: number | null;
	}

	/** Represents a cross-account destination that receives subscription log events. */
	export interface DestinationFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		targetArn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		roleArn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		accessPolicy: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			accessPolicy: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeDestinationsRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		DestinationNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeDestinationsRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		DestinationNamePrefix: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDestinationsRequestFormGroup() {
		return new FormGroup<DescribeDestinationsRequestFormProperties>({
			DestinationNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DescribeExportTasksResponse {
		exportTasks?: Array<ExportTask>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeExportTasksResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportTasksResponseFormGroup() {
		return new FormGroup<DescribeExportTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents an export task. */
	export interface ExportTask {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskName?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;

		/** Minimum: 0 */
		from?: number | null;

		/** Minimum: 0 */
		to?: number | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		destination?: string | null;
		destinationPrefix?: string | null;

		/** Represents the status of an export task. */
		status?: ExportTaskStatus;

		/** Represents the status of an export task. */
		executionInfo?: ExportTaskExecutionInfo;
	}

	/** Represents an export task. */
	export interface ExportTaskFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		from: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		to: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		destination: FormControl<string | null | undefined>,
		destinationPrefix: FormControl<string | null | undefined>,
	}
	export function CreateExportTaskFormGroup() {
		return new FormGroup<ExportTaskFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			taskName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			from: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			destinationPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the status of an export task. */
	export interface ExportTaskStatus {
		code?: ExportTaskStatusCode | null;
		message?: string | null;
	}

	/** Represents the status of an export task. */
	export interface ExportTaskStatusFormProperties {
		code: FormControl<ExportTaskStatusCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateExportTaskStatusFormGroup() {
		return new FormGroup<ExportTaskStatusFormProperties>({
			code: new FormControl<ExportTaskStatusCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExportTaskStatusCode { CANCELLED = 0, COMPLETED = 1, FAILED = 2, PENDING = 3, PENDING_CANCEL = 4, RUNNING = 5 }


	/** Represents the status of an export task. */
	export interface ExportTaskExecutionInfo {

		/** Minimum: 0 */
		creationTime?: number | null;

		/** Minimum: 0 */
		completionTime?: number | null;
	}

	/** Represents the status of an export task. */
	export interface ExportTaskExecutionInfoFormProperties {

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		completionTime: FormControl<number | null | undefined>,
	}
	export function CreateExportTaskExecutionInfoFormGroup() {
		return new FormGroup<ExportTaskExecutionInfoFormProperties>({
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			completionTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeExportTasksRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId?: string | null;
		statusCode?: ExportTaskStatusCode | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeExportTasksRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		taskId: FormControl<string | null | undefined>,
		statusCode: FormControl<ExportTaskStatusCode | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeExportTasksRequestFormGroup() {
		return new FormGroup<DescribeExportTasksRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			statusCode: new FormControl<ExportTaskStatusCode | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DescribeLogGroupsResponse {
		logGroups?: Array<LogGroup>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeLogGroupsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogGroupsResponseFormGroup() {
		return new FormGroup<DescribeLogGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a log group. */
	export interface LogGroup {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;

		/** Minimum: 0 */
		creationTime?: number | null;

		/** The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653. */
		retentionInDays?: number | null;
		metricFilterCount?: number | null;
		arn?: string | null;

		/** Minimum: 0 */
		storedBytes?: number | null;

		/** Max length: 256 */
		kmsKeyId?: string | null;
	}

	/** Represents a log group. */
	export interface LogGroupFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,

		/** The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653. */
		retentionInDays: FormControl<number | null | undefined>,
		metricFilterCount: FormControl<number | null | undefined>,
		arn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		storedBytes: FormControl<number | null | undefined>,

		/** Max length: 256 */
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateLogGroupFormGroup() {
		return new FormGroup<LogGroupFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined),
			metricFilterCount: new FormControl<number | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			storedBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface DescribeLogGroupsRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeLogGroupsRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupNamePrefix: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLogGroupsRequestFormGroup() {
		return new FormGroup<DescribeLogGroupsRequestFormProperties>({
			logGroupNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DescribeLogStreamsResponse {
		logStreams?: Array<LogStream>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeLogStreamsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeLogStreamsResponseFormGroup() {
		return new FormGroup<DescribeLogStreamsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a log stream, which is a sequence of log events from a single emitter of logs. */
	export interface LogStream {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName?: string | null;

		/** Minimum: 0 */
		creationTime?: number | null;

		/** Minimum: 0 */
		firstEventTimestamp?: number | null;

		/** Minimum: 0 */
		lastEventTimestamp?: number | null;

		/** Minimum: 0 */
		lastIngestionTime?: number | null;

		/** Min length: 1 */
		uploadSequenceToken?: string | null;
		arn?: string | null;

		/** Minimum: 0 */
		storedBytes?: number | null;
	}

	/** Represents a log stream, which is a sequence of log events from a single emitter of logs. */
	export interface LogStreamFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		firstEventTimestamp: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		lastEventTimestamp: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		lastIngestionTime: FormControl<number | null | undefined>,

		/** Min length: 1 */
		uploadSequenceToken: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		storedBytes: FormControl<number | null | undefined>,
	}
	export function CreateLogStreamFormGroup() {
		return new FormGroup<LogStreamFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			firstEventTimestamp: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			lastEventTimestamp: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			lastIngestionTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			uploadSequenceToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			arn: new FormControl<string | null | undefined>(undefined),
			storedBytes: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeLogStreamsRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix?: string | null;
		orderBy?: DescribeLogStreamsRequestOrderBy | null;
		descending?: boolean | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeLogStreamsRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix: FormControl<string | null | undefined>,
		orderBy: FormControl<DescribeLogStreamsRequestOrderBy | null | undefined>,
		descending: FormControl<boolean | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLogStreamsRequestFormGroup() {
		return new FormGroup<DescribeLogStreamsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			orderBy: new FormControl<DescribeLogStreamsRequestOrderBy | null | undefined>(undefined),
			descending: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export enum DescribeLogStreamsRequestOrderBy { LogStreamName = 0, LastEventTime = 1 }

	export interface DescribeMetricFiltersResponse {
		metricFilters?: Array<MetricFilter>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeMetricFiltersResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricFiltersResponseFormGroup() {
		return new FormGroup<DescribeMetricFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric. */
	export interface MetricFilter {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName?: string | null;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		metricTransformations?: Array<MetricTransformation>;

		/** Minimum: 0 */
		creationTime?: number | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;
	}

	/** Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric. */
	export interface MetricFilterFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateMetricFilterFormGroup() {
		return new FormGroup<MetricFilterFormProperties>({
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}


	/** Indicates how to transform ingested log events to metric data in a CloudWatch metric. */
	export interface MetricTransformation {

		/**
		 * The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.
		 * Required
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricName: string;

		/**
		 * Required
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricNamespace: string;

		/**
		 * The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like "Error", the value is "1" for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.
		 * Required
		 * Max length: 100
		 */
		metricValue: string;
		defaultValue?: number | null;
	}

	/** Indicates how to transform ingested log events to metric data in a CloudWatch metric. */
	export interface MetricTransformationFormProperties {

		/**
		 * The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.
		 * Required
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricNamespace: FormControl<string | null | undefined>,

		/**
		 * The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like "Error", the value is "1" for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.
		 * Required
		 * Max length: 100
		 */
		metricValue: FormControl<string | null | undefined>,
		defaultValue: FormControl<number | null | undefined>,
	}
	export function CreateMetricTransformationFormGroup() {
		return new FormGroup<MetricTransformationFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			metricNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255)]),
			metricValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100)]),
			defaultValue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeMetricFiltersRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;

		/**
		 * The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricName?: string | null;

		/**
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricNamespace?: string | null;
	}
	export interface DescribeMetricFiltersRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterNamePrefix: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricNamespace: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricFiltersRequestFormGroup() {
		return new FormGroup<DescribeMetricFiltersRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			filterNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			metricNamespace: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
		});

	}

	export interface DescribeQueriesResponse {
		queries?: Array<QueryInfo>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueriesResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueriesResponseFormGroup() {
		return new FormGroup<DescribeQueriesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.  */
	export interface QueryInfo {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryId?: string | null;

		/**
		 * Max length: 10000
		 * Min length: 0
		 */
		queryString?: string | null;
		status?: QueryInfoStatus | null;

		/** Minimum: 0 */
		createTime?: number | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;
	}

	/** Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.  */
	export interface QueryInfoFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: FormControl<string | null | undefined>,

		/**
		 * Max length: 10000
		 * Min length: 0
		 */
		queryString: FormControl<string | null | undefined>,
		status: FormControl<QueryInfoStatus | null | undefined>,

		/** Minimum: 0 */
		createTime: FormControl<number | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateQueryInfoFormGroup() {
		return new FormGroup<QueryInfoFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(0)]),
			status: new FormControl<QueryInfoStatus | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export enum QueryInfoStatus { Scheduled = 0, Running = 1, Complete = 2, Failed = 3, Cancelled = 4 }

	export interface DescribeQueriesRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;
		status?: QueryInfoStatus | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueriesRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
		status: FormControl<QueryInfoStatus | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueriesRequestFormGroup() {
		return new FormGroup<DescribeQueriesRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			status: new FormControl<QueryInfoStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface DescribeQueryDefinitionsResponse {
		queryDefinitions?: Array<QueryDefinition>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueryDefinitionsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueryDefinitionsResponseFormGroup() {
		return new FormGroup<DescribeQueryDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface QueryDefinition {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		name?: string | null;

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		queryString?: string | null;

		/** Minimum: 0 */
		lastModified?: number | null;
		logGroupNames?: Array<string>;
	}
	export interface QueryDefinitionFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		lastModified: FormControl<number | null | undefined>,
	}
	export function CreateQueryDefinitionFormGroup() {
		return new FormGroup<QueryDefinitionFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(1)]),
			lastModified: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeQueryDefinitionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		queryDefinitionNamePrefix?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueryDefinitionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		queryDefinitionNamePrefix: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueryDefinitionsRequestFormGroup() {
		return new FormGroup<DescribeQueryDefinitionsRequestFormProperties>({
			queryDefinitionNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface DescribeResourcePoliciesResponse {
		resourcePolicies?: Array<ResourcePolicy>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeResourcePoliciesResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePoliciesResponseFormGroup() {
		return new FormGroup<DescribeResourcePoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** A policy enabling one or more entities to put logs to a log group in this account. */
	export interface ResourcePolicy {
		policyName?: string | null;

		/**
		 * Max length: 5120
		 * Min length: 1
		 */
		policyDocument?: string | null;

		/** Minimum: 0 */
		lastUpdatedTime?: number | null;
	}

	/** A policy enabling one or more entities to put logs to a log group in this account. */
	export interface ResourcePolicyFormProperties {
		policyName: FormControl<string | null | undefined>,

		/**
		 * Max length: 5120
		 * Min length: 1
		 */
		policyDocument: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		lastUpdatedTime: FormControl<number | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5120), Validators.minLength(1)]),
			lastUpdatedTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface DescribeResourcePoliciesRequest {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeResourcePoliciesRequestFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeResourcePoliciesRequestFormGroup() {
		return new FormGroup<DescribeResourcePoliciesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DescribeSubscriptionFiltersResponse {
		subscriptionFilters?: Array<SubscriptionFilter>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeSubscriptionFiltersResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSubscriptionFiltersResponseFormGroup() {
		return new FormGroup<DescribeSubscriptionFiltersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a subscription filter. */
	export interface SubscriptionFilter {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern?: string | null;

		/** Min length: 1 */
		destinationArn?: string | null;

		/** Min length: 1 */
		roleArn?: string | null;

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution?: SubscriptionFilterDistribution | null;

		/** Minimum: 0 */
		creationTime?: number | null;
	}

	/** Represents a subscription filter. */
	export interface SubscriptionFilterFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,

		/** Min length: 1 */
		destinationArn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		roleArn: FormControl<string | null | undefined>,

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution: FormControl<SubscriptionFilterDistribution | null | undefined>,

		/** Minimum: 0 */
		creationTime: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionFilterFormGroup() {
		return new FormGroup<SubscriptionFilterFormProperties>({
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			distribution: new FormControl<SubscriptionFilterDistribution | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum SubscriptionFilterDistribution { Random = 0, ByLogStream = 1 }

	export interface DescribeSubscriptionFiltersRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit?: number | null;
	}
	export interface DescribeSubscriptionFiltersRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterNamePrefix: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 50
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSubscriptionFiltersRequestFormGroup() {
		return new FormGroup<DescribeSubscriptionFiltersRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
		});

	}

	export interface DisassociateKmsKeyRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;
	}
	export interface DisassociateKmsKeyRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateKmsKeyRequestFormGroup() {
		return new FormGroup<DisassociateKmsKeyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface FilterLogEventsResponse {
		events?: Array<FilteredLogEvent>;
		searchedLogStreams?: Array<SearchedLogStream>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface FilterLogEventsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateFilterLogEventsResponseFormGroup() {
		return new FormGroup<FilterLogEventsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a matched event. */
	export interface FilteredLogEvent {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName?: string | null;

		/** Minimum: 0 */
		timestamp?: number | null;

		/** Min length: 1 */
		message?: string | null;

		/** Minimum: 0 */
		ingestionTime?: number | null;
		eventId?: string | null;
	}

	/** Represents a matched event. */
	export interface FilteredLogEventFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		timestamp: FormControl<number | null | undefined>,

		/** Min length: 1 */
		message: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		ingestionTime: FormControl<number | null | undefined>,
		eventId: FormControl<string | null | undefined>,
	}
	export function CreateFilteredLogEventFormGroup() {
		return new FormGroup<FilteredLogEventFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			ingestionTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			eventId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the search status of a log stream. */
	export interface SearchedLogStream {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName?: string | null;
		searchedCompletely?: boolean | null;
	}

	/** Represents the search status of a log stream. */
	export interface SearchedLogStreamFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,
		searchedCompletely: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchedLogStreamFormGroup() {
		return new FormGroup<SearchedLogStreamFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			searchedCompletely: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FilterLogEventsRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		logStreamNames?: Array<string>;

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix?: string | null;

		/** Minimum: 0 */
		startTime?: number | null;

		/** Minimum: 0 */
		endTime?: number | null;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit?: number | null;
		interleaved?: boolean | null;
	}
	export interface FilterLogEventsRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamNamePrefix: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		startTime: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		endTime: FormControl<number | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit: FormControl<number | null | undefined>,
		interleaved: FormControl<boolean | null | undefined>,
	}
	export function CreateFilterLogEventsRequestFormGroup() {
		return new FormGroup<FilterLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			startTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			endTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(0)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			interleaved: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetLogEventsResponse {
		events?: Array<OutputLogEvent>;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextForwardToken?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextBackwardToken?: string | null;
	}
	export interface GetLogEventsResponseFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextForwardToken: FormControl<string | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextBackwardToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLogEventsResponseFormGroup() {
		return new FormGroup<GetLogEventsResponseFormProperties>({
			nextForwardToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			nextBackwardToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a log event. */
	export interface OutputLogEvent {

		/** Minimum: 0 */
		timestamp?: number | null;

		/** Min length: 1 */
		message?: string | null;

		/** Minimum: 0 */
		ingestionTime?: number | null;
	}

	/** Represents a log event. */
	export interface OutputLogEventFormProperties {

		/** Minimum: 0 */
		timestamp: FormControl<number | null | undefined>,

		/** Min length: 1 */
		message: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		ingestionTime: FormControl<number | null | undefined>,
	}
	export function CreateOutputLogEventFormGroup() {
		return new FormGroup<OutputLogEventFormProperties>({
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			ingestionTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface GetLogEventsRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: string;

		/** Minimum: 0 */
		startTime?: number | null;

		/** Minimum: 0 */
		endTime?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit?: number | null;
		startFromHead?: boolean | null;
	}
	export interface GetLogEventsRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		startTime: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		endTime: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit: FormControl<number | null | undefined>,
		startFromHead: FormControl<boolean | null | undefined>,
	}
	export function CreateGetLogEventsRequestFormGroup() {
		return new FormGroup<GetLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			startTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			endTime: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
			startFromHead: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetLogGroupFieldsResponse {
		logGroupFields?: Array<LogGroupField>;
	}
	export interface GetLogGroupFieldsResponseFormProperties {
	}
	export function CreateGetLogGroupFieldsResponseFormGroup() {
		return new FormGroup<GetLogGroupFieldsResponseFormProperties>({
		});

	}


	/** The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears. */
	export interface LogGroupField {
		name?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent?: number | null;
	}

	/** The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears. */
	export interface LogGroupFieldFormProperties {
		name: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		percent: FormControl<number | null | undefined>,
	}
	export function CreateLogGroupFieldFormGroup() {
		return new FormGroup<LogGroupFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface GetLogGroupFieldsRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/** Minimum: 0 */
		time?: number | null;
	}
	export interface GetLogGroupFieldsRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateGetLogGroupFieldsRequestFormGroup() {
		return new FormGroup<GetLogGroupFieldsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			time: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface GetLogRecordResponse {
		logRecord?: LogRecord;
	}
	export interface GetLogRecordResponseFormProperties {
	}
	export function CreateGetLogRecordResponseFormGroup() {
		return new FormGroup<GetLogRecordResponseFormProperties>({
		});

	}

	export interface LogRecord {
	}
	export interface LogRecordFormProperties {
	}
	export function CreateLogRecordFormGroup() {
		return new FormGroup<LogRecordFormProperties>({
		});

	}

	export interface GetLogRecordRequest {

		/** Required */
		logRecordPointer: string;
	}
	export interface GetLogRecordRequestFormProperties {

		/** Required */
		logRecordPointer: FormControl<string | null | undefined>,
	}
	export function CreateGetLogRecordRequestFormGroup() {
		return new FormGroup<GetLogRecordRequestFormProperties>({
			logRecordPointer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQueryResultsResponse {
		results?: Array<Array<ResultField>>;

		/** Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned. */
		statistics?: QueryStatistics;
		status?: QueryInfoStatus | null;
	}
	export interface GetQueryResultsResponseFormProperties {
		status: FormControl<QueryInfoStatus | null | undefined>,
	}
	export function CreateGetQueryResultsResponseFormGroup() {
		return new FormGroup<GetQueryResultsResponseFormProperties>({
			status: new FormControl<QueryInfoStatus | null | undefined>(undefined),
		});

	}


	/** <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> */
	export interface ResultField {
		field?: string | null;
		value?: string | null;
	}

	/** <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> */
	export interface ResultFieldFormProperties {
		field: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateResultFieldFormGroup() {
		return new FormGroup<ResultFieldFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned. */
	export interface QueryStatistics {
		recordsMatched?: number | null;
		recordsScanned?: number | null;
		bytesScanned?: number | null;
	}

	/** Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned. */
	export interface QueryStatisticsFormProperties {
		recordsMatched: FormControl<number | null | undefined>,
		recordsScanned: FormControl<number | null | undefined>,
		bytesScanned: FormControl<number | null | undefined>,
	}
	export function CreateQueryStatisticsFormGroup() {
		return new FormGroup<QueryStatisticsFormProperties>({
			recordsMatched: new FormControl<number | null | undefined>(undefined),
			recordsScanned: new FormControl<number | null | undefined>(undefined),
			bytesScanned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetQueryResultsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: string;
	}
	export interface GetQueryResultsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsRequestFormGroup() {
		return new FormGroup<GetQueryResultsRequestFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface ListTagsLogGroupResponse {
		tags?: Tags;
	}
	export interface ListTagsLogGroupResponseFormProperties {
	}
	export function CreateListTagsLogGroupResponseFormGroup() {
		return new FormGroup<ListTagsLogGroupResponseFormProperties>({
		});

	}

	export interface ListTagsLogGroupRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;
	}
	export interface ListTagsLogGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsLogGroupRequestFormGroup() {
		return new FormGroup<ListTagsLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface PutDestinationResponse {

		/** Represents a cross-account destination that receives subscription log events. */
		destination?: Destination;
	}
	export interface PutDestinationResponseFormProperties {
	}
	export function CreatePutDestinationResponseFormGroup() {
		return new FormGroup<PutDestinationResponseFormProperties>({
		});

	}

	export interface PutDestinationRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: string;

		/**
		 * Required
		 * Min length: 1
		 */
		targetArn: string;

		/**
		 * Required
		 * Min length: 1
		 */
		roleArn: string;
	}
	export interface PutDestinationRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		targetArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutDestinationRequestFormGroup() {
		return new FormGroup<PutDestinationRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PutDestinationPolicyRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: string;

		/**
		 * Required
		 * Min length: 1
		 */
		accessPolicy: string;
	}
	export interface PutDestinationPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		destinationName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		accessPolicy: FormControl<string | null | undefined>,
	}
	export function CreatePutDestinationPolicyRequestFormGroup() {
		return new FormGroup<PutDestinationPolicyRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			accessPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface PutLogEventsResponse {

		/** Min length: 1 */
		nextSequenceToken?: string | null;

		/** Represents the rejected events. */
		rejectedLogEventsInfo?: RejectedLogEventsInfo;
	}
	export interface PutLogEventsResponseFormProperties {

		/** Min length: 1 */
		nextSequenceToken: FormControl<string | null | undefined>,
	}
	export function CreatePutLogEventsResponseFormGroup() {
		return new FormGroup<PutLogEventsResponseFormProperties>({
			nextSequenceToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents the rejected events. */
	export interface RejectedLogEventsInfo {
		tooNewLogEventStartIndex?: number | null;
		tooOldLogEventEndIndex?: number | null;
		expiredLogEventEndIndex?: number | null;
	}

	/** Represents the rejected events. */
	export interface RejectedLogEventsInfoFormProperties {
		tooNewLogEventStartIndex: FormControl<number | null | undefined>,
		tooOldLogEventEndIndex: FormControl<number | null | undefined>,
		expiredLogEventEndIndex: FormControl<number | null | undefined>,
	}
	export function CreateRejectedLogEventsInfoFormGroup() {
		return new FormGroup<RejectedLogEventsInfoFormProperties>({
			tooNewLogEventStartIndex: new FormControl<number | null | undefined>(undefined),
			tooOldLogEventEndIndex: new FormControl<number | null | undefined>(undefined),
			expiredLogEventEndIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutLogEventsRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10000
		 */
		logEvents: Array<InputLogEvent>;

		/** Min length: 1 */
		sequenceToken?: string | null;
	}
	export interface PutLogEventsRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		logStreamName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		sequenceToken: FormControl<string | null | undefined>,
	}
	export function CreatePutLogEventsRequestFormGroup() {
		return new FormGroup<PutLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			sequenceToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}


	/** Represents a log event, which is a record of activity that was recorded by the application or resource being monitored. */
	export interface InputLogEvent {

		/**
		 * Required
		 * Minimum: 0
		 */
		timestamp: number;

		/**
		 * Required
		 * Min length: 1
		 */
		message: string;
	}

	/** Represents a log event, which is a record of activity that was recorded by the application or resource being monitored. */
	export interface InputLogEventFormProperties {

		/**
		 * Required
		 * Minimum: 0
		 */
		timestamp: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInputLogEventFormGroup() {
		return new FormGroup<InputLogEventFormProperties>({
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface InvalidSequenceTokenException {
	}
	export interface InvalidSequenceTokenExceptionFormProperties {
	}
	export function CreateInvalidSequenceTokenExceptionFormGroup() {
		return new FormGroup<InvalidSequenceTokenExceptionFormProperties>({
		});

	}

	export interface DataAlreadyAcceptedException {
	}
	export interface DataAlreadyAcceptedExceptionFormProperties {
	}
	export function CreateDataAlreadyAcceptedExceptionFormGroup() {
		return new FormGroup<DataAlreadyAcceptedExceptionFormProperties>({
		});

	}

	export interface UnrecognizedClientException {
	}
	export interface UnrecognizedClientExceptionFormProperties {
	}
	export function CreateUnrecognizedClientExceptionFormGroup() {
		return new FormGroup<UnrecognizedClientExceptionFormProperties>({
		});

	}

	export interface PutMetricFilterRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		metricTransformations: Array<MetricTransformation>;
	}
	export interface PutMetricFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,
	}
	export function CreatePutMetricFilterRequestFormGroup() {
		return new FormGroup<PutMetricFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export interface PutQueryDefinitionResponse {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId?: string | null;
	}
	export interface PutQueryDefinitionResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreatePutQueryDefinitionResponseFormGroup() {
		return new FormGroup<PutQueryDefinitionResponseFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface PutQueryDefinitionRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		name: string;

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId?: string | null;
		logGroupNames?: Array<string>;

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		queryString: string;
	}
	export interface PutQueryDefinitionRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 * Pattern: ^([^:*\/]+\/?)*[^:*\/]+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryDefinitionId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		queryString: FormControl<string | null | undefined>,
	}
	export function CreatePutQueryDefinitionRequestFormGroup() {
		return new FormGroup<PutQueryDefinitionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			queryDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000), Validators.minLength(1)]),
		});

	}

	export interface PutResourcePolicyResponse {

		/** A policy enabling one or more entities to put logs to a log group in this account. */
		resourcePolicy?: ResourcePolicy;
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface PutResourcePolicyRequest {
		policyName?: string | null;

		/**
		 * Max length: 5120
		 * Min length: 1
		 */
		policyDocument?: string | null;
	}
	export interface PutResourcePolicyRequestFormProperties {
		policyName: FormControl<string | null | undefined>,

		/**
		 * Max length: 5120
		 * Min length: 1
		 */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5120), Validators.minLength(1)]),
		});

	}

	export interface PutRetentionPolicyRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
		 * Required
		 */
		retentionInDays: number;
	}
	export interface PutRetentionPolicyRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
		 * Required
		 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePutRetentionPolicyRequestFormGroup() {
		return new FormGroup<PutRetentionPolicyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSubscriptionFilterRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;

		/**
		 * Required
		 * Min length: 1
		 */
		destinationArn: string;

		/** Min length: 1 */
		roleArn?: string | null;

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution?: SubscriptionFilterDistribution | null;
	}
	export interface PutSubscriptionFilterRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [^:*]*
		 */
		filterName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		destinationArn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		roleArn: FormControl<string | null | undefined>,

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution: FormControl<SubscriptionFilterDistribution | null | undefined>,
	}
	export function CreatePutSubscriptionFilterRequestFormGroup() {
		return new FormGroup<PutSubscriptionFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			distribution: new FormControl<SubscriptionFilterDistribution | null | undefined>(undefined),
		});

	}

	export interface StartQueryResponse {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryId?: string | null;
	}
	export interface StartQueryResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryResponseFormGroup() {
		return new FormGroup<StartQueryResponseFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface StartQueryRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName?: string | null;
		logGroupNames?: Array<string>;

		/**
		 * Required
		 * Minimum: 0
		 */
		startTime: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		endTime: number;

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 0
		 */
		queryString: string;

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit?: number | null;
	}
	export interface StartQueryRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		startTime: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		endTime: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 0
		 */
		queryString: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 10000
		 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateStartQueryRequestFormGroup() {
		return new FormGroup<StartQueryRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			startTime: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			endTime: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000), Validators.minLength(0)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(10000)]),
		});

	}

	export interface MalformedQueryException {
	}
	export interface MalformedQueryExceptionFormProperties {
	}
	export function CreateMalformedQueryExceptionFormGroup() {
		return new FormGroup<MalformedQueryExceptionFormProperties>({
		});

	}

	export interface StopQueryResponse {
		success?: boolean | null;
	}
	export interface StopQueryResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateStopQueryResponseFormGroup() {
		return new FormGroup<StopQueryResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopQueryRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: string;
	}
	export interface StopQueryRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateStopQueryRequestFormGroup() {
		return new FormGroup<StopQueryRequestFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface TagLogGroupRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/** Required */
		tags: Tags;
	}
	export interface TagLogGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateTagLogGroupRequestFormGroup() {
		return new FormGroup<TagLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface TestMetricFilterResponse {
		matches?: Array<MetricFilterMatchRecord>;
	}
	export interface TestMetricFilterResponseFormProperties {
	}
	export function CreateTestMetricFilterResponseFormGroup() {
		return new FormGroup<TestMetricFilterResponseFormProperties>({
		});

	}


	/** Represents a matched event. */
	export interface MetricFilterMatchRecord {
		eventNumber?: number | null;

		/** Min length: 1 */
		eventMessage?: string | null;
		extractedValues?: ExtractedValues;
	}

	/** Represents a matched event. */
	export interface MetricFilterMatchRecordFormProperties {
		eventNumber: FormControl<number | null | undefined>,

		/** Min length: 1 */
		eventMessage: FormControl<string | null | undefined>,
	}
	export function CreateMetricFilterMatchRecordFormGroup() {
		return new FormGroup<MetricFilterMatchRecordFormProperties>({
			eventNumber: new FormControl<number | null | undefined>(undefined),
			eventMessage: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface ExtractedValues {
	}
	export interface ExtractedValuesFormProperties {
	}
	export function CreateExtractedValuesFormGroup() {
		return new FormGroup<ExtractedValuesFormProperties>({
		});

	}

	export interface TestMetricFilterRequest {

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		logEventMessages: Array<string>;
	}
	export interface TestMetricFilterRequestFormProperties {

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: FormControl<string | null | undefined>,
	}
	export function CreateTestMetricFilterRequestFormGroup() {
		return new FormGroup<TestMetricFilterRequestFormProperties>({
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(0)]),
		});

	}

	export interface UntagLogGroupRequest {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		tags: Array<string>;
	}
	export interface UntagLogGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 * Pattern: [\.\-_/#A-Za-z0-9]+
		 */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUntagLogGroupRequestFormGroup() {
		return new FormGroup<UntagLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export enum OrderBy { LogStreamName = 0, LastEventTime = 1 }

	export enum QueryStatus { Scheduled = 0, Running = 1, Complete = 2, Failed = 3, Cancelled = 4 }


	/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
	export enum Distribution { Random = 0, ByLogStream = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates the specified AWS Key Management Service (AWS KMS) customer master key (CMK) with the specified log group.</p> <p>Associating an AWS KMS CMK with a log group overrides any existing associations between the log group and a CMK. After a CMK is associated with a log group, all newly ingested data for the log group is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.</p> <note> <p> <b>Important:</b> CloudWatch Logs supports only symmetric CMKs. Do not use an associate an asymmetric CMK with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </note> <p>Note that it can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a CMK with a log group but the CMK does not exist or the CMK is disabled, you will receive an <code>InvalidParameterException</code> error. </p>
		 * Post #X-Amz-Target=Logs_20140328.AssociateKmsKey
		 * @return {void} Success
		 */
		AssociateKmsKey(requestBody: AssociateKmsKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.AssociateKmsKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Cancels the specified export task.</p> <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>
		 * Post #X-Amz-Target=Logs_20140328.CancelExportTask
		 * @return {void} Success
		 */
		CancelExportTask(requestBody: CancelExportTaskRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.CancelExportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an export task, which allows you to efficiently export data from a log group to an Amazon S3 bucket.</p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate out log data for each export task, you can specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. Exporting to S3 buckets encrypted with SSE-KMS is not supported. </p>
		 * Post #X-Amz-Target=Logs_20140328.CreateExportTask
		 * @return {CreateExportTaskResponse} Success
		 */
		CreateExportTask(requestBody: CreateExportTaskRequest): Observable<CreateExportTaskResponse> {
			return this.http.post<CreateExportTaskResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateExportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a log group with the specified name.</p> <p>You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a region for an AWS account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>If you associate a AWS Key Management Service (AWS KMS) customer master key (CMK) with the log group, ingested data is encrypted using the CMK. This association is stored as long as the data encrypted with the CMK is still within Amazon CloudWatch Logs. This enables Amazon CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a CMK with the log group but the CMK does not exist or the CMK is disabled, you will receive an <code>InvalidParameterException</code> error. </p> <note> <p> <b>Important:</b> CloudWatch Logs supports only symmetric CMKs. Do not associate an asymmetric CMK with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </note>
		 * Post #X-Amz-Target=Logs_20140328.CreateLogGroup
		 * @return {void} Success
		 */
		CreateLogGroup(requestBody: CreateLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a log stream for the specified log group.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>The ':' (colon) and '*' (asterisk) characters are not allowed.</p> </li> </ul>
		 * Post #X-Amz-Target=Logs_20140328.CreateLogStream
		 * @return {void} Success
		 */
		CreateLogStream(requestBody: CreateLogStreamRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateLogStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified destination, and eventually disables all the subscription filters that publish to it. This operation does not delete the physical resource encapsulated by the destination.
		 * Post #X-Amz-Target=Logs_20140328.DeleteDestination
		 * @return {void} Success
		 */
		DeleteDestination(requestBody: DeleteDestinationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified log group and permanently deletes all the archived log events associated with the log group.
		 * Post #X-Amz-Target=Logs_20140328.DeleteLogGroup
		 * @return {void} Success
		 */
		DeleteLogGroup(requestBody: DeleteLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified log stream and permanently deletes all the archived log events associated with the log stream.
		 * Post #X-Amz-Target=Logs_20140328.DeleteLogStream
		 * @return {void} Success
		 */
		DeleteLogStream(requestBody: DeleteLogStreamRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteLogStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified metric filter.
		 * Post #X-Amz-Target=Logs_20140328.DeleteMetricFilter
		 * @return {void} Success
		 */
		DeleteMetricFilter(requestBody: DeleteMetricFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteMetricFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post #X-Amz-Target=Logs_20140328.DeleteQueryDefinition
		 * @return {DeleteQueryDefinitionResponse} Success
		 */
		DeleteQueryDefinition(requestBody: DeleteQueryDefinitionRequest): Observable<DeleteQueryDefinitionResponse> {
			return this.http.post<DeleteQueryDefinitionResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteQueryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource policy from this account. This revokes the access of the identities in that policy to put log events to this account.
		 * Post #X-Amz-Target=Logs_20140328.DeleteResourcePolicy
		 * @return {void} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified retention policy.</p> <p>Log events do not expire if they belong to log groups without a retention policy.</p>
		 * Post #X-Amz-Target=Logs_20140328.DeleteRetentionPolicy
		 * @return {void} Success
		 */
		DeleteRetentionPolicy(requestBody: DeleteRetentionPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified subscription filter.
		 * Post #X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter
		 * @return {void} Success
		 */
		DeleteSubscriptionFilter(requestBody: DeleteSubscriptionFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all your destinations. The results are ASCII-sorted by destination name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeDestinations
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeDestinationsResponse} Success
		 */
		DescribeDestinations(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeDestinationsRequest): Observable<DescribeDestinationsResponse> {
			return this.http.post<DescribeDestinationsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeDestinations?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified export tasks. You can list all your export tasks or filter the results based on task ID or task status.
		 * Post #X-Amz-Target=Logs_20140328.DescribeExportTasks
		 * @return {DescribeExportTasksResponse} Success
		 */
		DescribeExportTasks(requestBody: DescribeExportTasksRequest): Observable<DescribeExportTasksResponse> {
			return this.http.post<DescribeExportTasksResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeExportTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeLogGroups
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLogGroupsResponse} Success
		 */
		DescribeLogGroups(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeLogGroupsRequest): Observable<DescribeLogGroupsResponse> {
			return this.http.post<DescribeLogGroupsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogGroups?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
		 * Post #X-Amz-Target=Logs_20140328.DescribeLogStreams
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLogStreamsResponse} Success
		 */
		DescribeLogStreams(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeLogStreamsRequest): Observable<DescribeLogStreamsResponse> {
			return this.http.post<DescribeLogStreamsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogStreams?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeMetricFilters
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeMetricFiltersResponse} Success
		 */
		DescribeMetricFilters(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeMetricFiltersRequest): Observable<DescribeMetricFiltersResponse> {
			return this.http.post<DescribeMetricFiltersResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeMetricFilters?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of CloudWatch Logs Insights queries that are scheduled, executing, or have been executed recently in this account. You can request all queries, or limit it to queries of a specific log group or queries with a certain status.
		 * Post #X-Amz-Target=Logs_20140328.DescribeQueries
		 * @return {DescribeQueriesResponse} Success
		 */
		DescribeQueries(requestBody: DescribeQueriesRequest): Observable<DescribeQueriesResponse> {
			return this.http.post<DescribeQueriesResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post #X-Amz-Target=Logs_20140328.DescribeQueryDefinitions
		 * @return {DescribeQueryDefinitionsResponse} Success
		 */
		DescribeQueryDefinitions(requestBody: DescribeQueryDefinitionsRequest): Observable<DescribeQueryDefinitionsResponse> {
			return this.http.post<DescribeQueryDefinitionsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resource policies in this account.
		 * Post #X-Amz-Target=Logs_20140328.DescribeResourcePolicies
		 * @return {DescribeResourcePoliciesResponse} Success
		 */
		DescribeResourcePolicies(requestBody: DescribeResourcePoliciesRequest): Observable<DescribeResourcePoliciesResponse> {
			return this.http.post<DescribeResourcePoliciesResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeResourcePolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix. The results are ASCII-sorted by filter name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeSubscriptionFiltersResponse} Success
		 */
		DescribeSubscriptionFilters(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeSubscriptionFiltersRequest): Observable<DescribeSubscriptionFiltersResponse> {
			return this.http.post<DescribeSubscriptionFiltersResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates the associated AWS Key Management Service (AWS KMS) customer master key (CMK) from the specified log group.</p> <p>After the AWS KMS CMK is disassociated from the log group, AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires permissions for the CMK whenever the encrypted data is requested.</p> <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
		 * Post #X-Amz-Target=Logs_20140328.DisassociateKmsKey
		 * @return {void} Success
		 */
		DisassociateKmsKey(requestBody: DisassociateKmsKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DisassociateKmsKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events), or all the events found within the time range that you specify. If the results include a token, then there are more log events available, and you can get additional results by specifying the token in a subsequent call.</p>
		 * Post #X-Amz-Target=Logs_20140328.FilterLogEvents
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {FilterLogEventsResponse} Success
		 */
		FilterLogEvents(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: FilterLogEventsRequest): Observable<FilterLogEventsResponse> {
			return this.http.post<FilterLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.FilterLogEvents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists log events from the specified log stream. You can list all the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogEvents
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLogEventsResponse} Success
		 */
		GetLogEvents(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: GetLogEventsRequest): Observable<GetLogEventsResponse> {
			return this.http.post<GetLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogEvents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the fields that are included in log events in the specified log group, along with the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>In the results, fields that start with @ are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogGroupFields
		 * @return {GetLogGroupFieldsResponse} Success
		 */
		GetLogGroupFields(requestBody: GetLogGroupFieldsRequest): Observable<GetLogGroupFieldsResponse> {
			return this.http.post<GetLogGroupFieldsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogGroupFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>Additionally, the entire unparsed log event is returned within <code>@message</code>.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogRecord
		 * @return {GetLogRecordResponse} Success
		 */
		GetLogRecord(requestBody: GetLogRecordRequest): Observable<GetLogRecordResponse> {
			return this.http.post<GetLogRecordResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start a query execution. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p>
		 * Post #X-Amz-Target=Logs_20140328.GetQueryResults
		 * @return {GetQueryResultsResponse} Success
		 */
		GetQueryResults(requestBody: GetQueryResultsRequest): Observable<GetQueryResultsResponse> {
			return this.http.post<GetQueryResultsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetQueryResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified log group.
		 * Post #X-Amz-Target=Logs_20140328.ListTagsLogGroup
		 * @return {ListTagsLogGroupResponse} Success
		 */
		ListTagsLogGroup(requestBody: ListTagsLogGroupRequest): Observable<ListTagsLogGroupResponse> {
			return this.http.post<ListTagsLogGroupResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.ListTagsLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream) and enables you to subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutDestination
		 * @return {PutDestinationResponse} Success
		 */
		PutDestination(requestBody: PutDestinationRequest): Observable<PutDestinationResponse> {
			return this.http.post<PutDestinationResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates an access policy associated with an existing destination. An access policy is an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies_overview.html">IAM policy document</a> that is used to authorize claims to register a subscription filter against a given destination.
		 * Post #X-Amz-Target=Logs_20140328.PutDestinationPolicy
		 * @return {void} Success
		 */
		PutDestinationPolicy(requestBody: PutDestinationPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutDestinationPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Uploads a batch of log events to the specified log stream.</p> <p>You must include the sequence token obtained from the response of the previous call. An upload in a newly created log stream does not require a sequence token. You can also get the sequence token in the <code>expectedSequenceToken</code> field from <code>InvalidSequenceTokenException</code>. If you call <code>PutLogEvents</code> twice within a narrow time period using the same value for <code>sequenceToken</code>, both calls may be successful, or one may be rejected.</p> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes, and this size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be older than 14 days or older than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological ordered by their timestamp. The timestamp is the time the event occurred, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. (In AWS Tools for PowerShell and the AWS SDK for .NET, the timestamp is specified in .NET format: yyyy-mm-ddThh:mm:ss. For example, 2017-09-15T13:45:30.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <p>There is a quota of 5 requests per second per log stream. Additional requests are throttled. This quota can't be changed.</p> </li> </ul> <p>If a call to PutLogEvents returns "UnrecognizedClientException" the most likely cause is an invalid AWS access key ID or secret key. </p>
		 * Post #X-Amz-Target=Logs_20140328.PutLogEvents
		 * @return {PutLogEventsResponse} Success
		 */
		PutLogEvents(requestBody: PutLogEventsRequest): Observable<PutLogEventsResponse> {
			return this.http.post<PutLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutLogEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a metric filter and associates it with the specified log group. Metric filters allow you to configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutMetricFilter
		 * @return {void} Success
		 */
		PutMetricFilter(requestBody: PutMetricFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutMetricFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post #X-Amz-Target=Logs_20140328.PutQueryDefinition
		 * @return {PutQueryDefinitionResponse} Success
		 */
		PutQueryDefinition(requestBody: PutQueryDefinitionRequest): Observable<PutQueryDefinitionResponse> {
			return this.http.post<PutQueryDefinitionResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutQueryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a resource policy allowing other AWS services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per region.
		 * Post #X-Amz-Target=Logs_20140328.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the retention of the specified log group. A retention policy allows you to configure the number of days for which to retain log events in the specified log group.
		 * Post #X-Amz-Target=Logs_20140328.PutRetentionPolicy
		 * @return {void} Success
		 */
		PutRetentionPolicy(requestBody: PutRetentionPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a subscription filter and associates it with the specified log group. Subscription filters allow you to subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. Currently, the supported destinations are:</p> <ul> <li> <p>An Amazon Kinesis stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination that belongs to a different account, for cross-account delivery.</p> </li> <li> <p>An Amazon Kinesis Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An AWS Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>There can only be one subscription filter associated with a log group. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. Otherwise, the call fails because you cannot associate a second filter with a log group.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutSubscriptionFilter
		 * @return {void} Success
		 */
		PutSubscriptionFilter(requestBody: PutSubscriptionFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutSubscriptionFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query, and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>Queries time out after 15 minutes of execution. If your queries are timing out, reduce the time range being searched, or partition your query into a number of queries.</p>
		 * Post #X-Amz-Target=Logs_20140328.StartQuery
		 * @return {StartQueryResponse} Success
		 */
		StartQuery(requestBody: StartQueryRequest): Observable<StartQueryResponse> {
			return this.http.post<StartQueryResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.StartQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a CloudWatch Logs Insights query that is in progress. If the query has already ended, the operation returns an error indicating that the specified query is not running.
		 * Post #X-Amz-Target=Logs_20140328.StopQuery
		 * @return {StopQueryResponse} Success
		 */
		StopQuery(requestBody: StopQueryRequest): Observable<StopQueryResponse> {
			return this.http.post<StopQueryResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.StopQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html">ListTagsLogGroup</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagLogGroup.html">UntagLogGroup</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p>
		 * Post #X-Amz-Target=Logs_20140328.TagLogGroup
		 * @return {void} Success
		 */
		TagLogGroup(requestBody: TagLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.TagLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tests the filter pattern of a metric filter against a sample of log event messages. You can use this operation to validate the correctness of a metric filter pattern.
		 * Post #X-Amz-Target=Logs_20140328.TestMetricFilter
		 * @return {TestMetricFilterResponse} Success
		 */
		TestMetricFilter(requestBody: TestMetricFilterRequest): Observable<TestMetricFilterResponse> {
			return this.http.post<TestMetricFilterResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.TestMetricFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsLogGroup.html">ListTagsLogGroup</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagLogGroup.html">TagLogGroup</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.UntagLogGroup
		 * @return {void} Success
		 */
		UntagLogGroup(requestBody: UntagLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.UntagLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociateKmsKeyX_Amz_Target { Logs_20140328_AssociateKmsKey = 0 }

	export enum CancelExportTaskX_Amz_Target { Logs_20140328_CancelExportTask = 0 }

	export enum CreateExportTaskX_Amz_Target { Logs_20140328_CreateExportTask = 0 }

	export enum CreateLogGroupX_Amz_Target { Logs_20140328_CreateLogGroup = 0 }

	export enum CreateLogStreamX_Amz_Target { Logs_20140328_CreateLogStream = 0 }

	export enum DeleteDestinationX_Amz_Target { Logs_20140328_DeleteDestination = 0 }

	export enum DeleteLogGroupX_Amz_Target { Logs_20140328_DeleteLogGroup = 0 }

	export enum DeleteLogStreamX_Amz_Target { Logs_20140328_DeleteLogStream = 0 }

	export enum DeleteMetricFilterX_Amz_Target { Logs_20140328_DeleteMetricFilter = 0 }

	export enum DeleteQueryDefinitionX_Amz_Target { Logs_20140328_DeleteQueryDefinition = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { Logs_20140328_DeleteResourcePolicy = 0 }

	export enum DeleteRetentionPolicyX_Amz_Target { Logs_20140328_DeleteRetentionPolicy = 0 }

	export enum DeleteSubscriptionFilterX_Amz_Target { Logs_20140328_DeleteSubscriptionFilter = 0 }

	export enum DescribeDestinationsX_Amz_Target { Logs_20140328_DescribeDestinations = 0 }

	export enum DescribeExportTasksX_Amz_Target { Logs_20140328_DescribeExportTasks = 0 }

	export enum DescribeLogGroupsX_Amz_Target { Logs_20140328_DescribeLogGroups = 0 }

	export enum DescribeLogStreamsX_Amz_Target { Logs_20140328_DescribeLogStreams = 0 }

	export enum DescribeMetricFiltersX_Amz_Target { Logs_20140328_DescribeMetricFilters = 0 }

	export enum DescribeQueriesX_Amz_Target { Logs_20140328_DescribeQueries = 0 }

	export enum DescribeQueryDefinitionsX_Amz_Target { Logs_20140328_DescribeQueryDefinitions = 0 }

	export enum DescribeResourcePoliciesX_Amz_Target { Logs_20140328_DescribeResourcePolicies = 0 }

	export enum DescribeSubscriptionFiltersX_Amz_Target { Logs_20140328_DescribeSubscriptionFilters = 0 }

	export enum DisassociateKmsKeyX_Amz_Target { Logs_20140328_DisassociateKmsKey = 0 }

	export enum FilterLogEventsX_Amz_Target { Logs_20140328_FilterLogEvents = 0 }

	export enum GetLogEventsX_Amz_Target { Logs_20140328_GetLogEvents = 0 }

	export enum GetLogGroupFieldsX_Amz_Target { Logs_20140328_GetLogGroupFields = 0 }

	export enum GetLogRecordX_Amz_Target { Logs_20140328_GetLogRecord = 0 }

	export enum GetQueryResultsX_Amz_Target { Logs_20140328_GetQueryResults = 0 }

	export enum ListTagsLogGroupX_Amz_Target { Logs_20140328_ListTagsLogGroup = 0 }

	export enum PutDestinationX_Amz_Target { Logs_20140328_PutDestination = 0 }

	export enum PutDestinationPolicyX_Amz_Target { Logs_20140328_PutDestinationPolicy = 0 }

	export enum PutLogEventsX_Amz_Target { Logs_20140328_PutLogEvents = 0 }

	export enum PutMetricFilterX_Amz_Target { Logs_20140328_PutMetricFilter = 0 }

	export enum PutQueryDefinitionX_Amz_Target { Logs_20140328_PutQueryDefinition = 0 }

	export enum PutResourcePolicyX_Amz_Target { Logs_20140328_PutResourcePolicy = 0 }

	export enum PutRetentionPolicyX_Amz_Target { Logs_20140328_PutRetentionPolicy = 0 }

	export enum PutSubscriptionFilterX_Amz_Target { Logs_20140328_PutSubscriptionFilter = 0 }

	export enum StartQueryX_Amz_Target { Logs_20140328_StartQuery = 0 }

	export enum StopQueryX_Amz_Target { Logs_20140328_StopQuery = 0 }

	export enum TagLogGroupX_Amz_Target { Logs_20140328_TagLogGroup = 0 }

	export enum TestMetricFilterX_Amz_Target { Logs_20140328_TestMetricFilter = 0 }

	export enum UntagLogGroupX_Amz_Target { Logs_20140328_UntagLogGroup = 0 }

}

