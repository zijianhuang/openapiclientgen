import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateKmsKeyRequest {
		logGroupName?: string;

		/** Required */
		kmsKeyId: string;
		resourceIdentifier?: string;
	}
	export interface AssociateKmsKeyRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		kmsKeyId: FormControl<string | null | undefined>,
		resourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateAssociateKmsKeyRequestFormGroup() {
		return new FormGroup<AssociateKmsKeyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		taskId: string;
	}
	export interface CancelExportTaskRequestFormProperties {

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCancelExportTaskRequestFormGroup() {
		return new FormGroup<CancelExportTaskRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		taskId?: string;
	}
	export interface CreateExportTaskResponseFormProperties {
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportTaskResponseFormGroup() {
		return new FormGroup<CreateExportTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExportTaskRequest {
		taskName?: string;

		/** Required */
		logGroupName: string;
		logStreamNamePrefix?: string;

		/** Required */
		from: number;

		/** Required */
		to: number;

		/** Required */
		destination: string;
		destinationPrefix?: string;
	}
	export interface CreateExportTaskRequestFormProperties {
		taskName: FormControl<string | null | undefined>,

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,

		/** Required */
		from: FormControl<number | null | undefined>,

		/** Required */
		to: FormControl<number | null | undefined>,

		/** Required */
		destination: FormControl<string | null | undefined>,
		destinationPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateExportTaskRequestFormGroup() {
		return new FormGroup<CreateExportTaskRequestFormProperties>({
			taskName: new FormControl<string | null | undefined>(undefined),
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		logGroupName: string;
		kmsKeyId?: string;
		tags?: Tags;
	}
	export interface CreateLogGroupRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogGroupRequestFormGroup() {
		return new FormGroup<CreateLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		logGroupName: string;

		/** Required */
		logStreamName: string;
	}
	export interface CreateLogStreamRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		logStreamName: FormControl<string | null | undefined>,
	}
	export function CreateCreateLogStreamRequestFormGroup() {
		return new FormGroup<CreateLogStreamRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccountPolicyRequest {

		/** Required */
		policyName: string;

		/** Required */
		policyType: PolicyType;
	}
	export interface DeleteAccountPolicyRequestFormProperties {

		/** Required */
		policyName: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,
	}
	export function CreateDeleteAccountPolicyRequestFormGroup() {
		return new FormGroup<DeleteAccountPolicyRequestFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyType { DATA_PROTECTION_POLICY = 'DATA_PROTECTION_POLICY' }

	export interface DeleteDataProtectionPolicyRequest {

		/** Required */
		logGroupIdentifier: string;
	}
	export interface DeleteDataProtectionPolicyRequestFormProperties {

		/** Required */
		logGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataProtectionPolicyRequestFormGroup() {
		return new FormGroup<DeleteDataProtectionPolicyRequestFormProperties>({
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDestinationRequest {

		/** Required */
		destinationName: string;
	}
	export interface DeleteDestinationRequestFormProperties {

		/** Required */
		destinationName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDestinationRequestFormGroup() {
		return new FormGroup<DeleteDestinationRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLogGroupRequest {

		/** Required */
		logGroupName: string;
	}
	export interface DeleteLogGroupRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogGroupRequestFormGroup() {
		return new FormGroup<DeleteLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteLogStreamRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		logStreamName: string;
	}
	export interface DeleteLogStreamRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		logStreamName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLogStreamRequestFormGroup() {
		return new FormGroup<DeleteLogStreamRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteMetricFilterRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		filterName: string;
	}
	export interface DeleteMetricFilterRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		filterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteMetricFilterRequestFormGroup() {
		return new FormGroup<DeleteMetricFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		queryDefinitionId: string;
	}
	export interface DeleteQueryDefinitionRequestFormProperties {

		/** Required */
		queryDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteQueryDefinitionRequestFormGroup() {
		return new FormGroup<DeleteQueryDefinitionRequestFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourcePolicyRequest {
		policyName?: string;
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

		/** Required */
		logGroupName: string;
	}
	export interface DeleteRetentionPolicyRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRetentionPolicyRequestFormGroup() {
		return new FormGroup<DeleteRetentionPolicyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteSubscriptionFilterRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		filterName: string;
	}
	export interface DeleteSubscriptionFilterRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		filterName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSubscriptionFilterRequestFormGroup() {
		return new FormGroup<DeleteSubscriptionFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeAccountPoliciesResponse {
		accountPolicies?: Array<AccountPolicy>;
	}
	export interface DescribeAccountPoliciesResponseFormProperties {
	}
	export function CreateDescribeAccountPoliciesResponseFormGroup() {
		return new FormGroup<DescribeAccountPoliciesResponseFormProperties>({
		});

	}


	/** A structure that contains information about one CloudWatch Logs account policy. */
	export interface AccountPolicy {
		policyName?: string;
		policyDocument?: string;
		lastUpdatedTime?: number | null;
		policyType?: PolicyType;
		scope?: Scope;
		accountId?: string;
	}

	/** A structure that contains information about one CloudWatch Logs account policy. */
	export interface AccountPolicyFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<number | null | undefined>,
		policyType: FormControl<PolicyType | null | undefined>,
		scope: FormControl<Scope | null | undefined>,
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateAccountPolicyFormGroup() {
		return new FormGroup<AccountPolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<number | null | undefined>(undefined),
			policyType: new FormControl<PolicyType | null | undefined>(undefined),
			scope: new FormControl<Scope | null | undefined>(undefined),
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Scope { ALL = 'ALL' }

	export interface DescribeAccountPoliciesRequest {

		/** Required */
		policyType: PolicyType;
		policyName?: string;
		accountIdentifiers?: Array<string>;
	}
	export interface DescribeAccountPoliciesRequestFormProperties {

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,
		policyName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAccountPoliciesRequestFormGroup() {
		return new FormGroup<DescribeAccountPoliciesRequestFormProperties>({
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			policyName: new FormControl<string | null | undefined>(undefined),
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
		destinationName?: string;
		targetArn?: string;
		roleArn?: string;
		accessPolicy?: string;
		arn?: string;
		creationTime?: number | null;
	}

	/** Represents a cross-account destination that receives subscription log events. */
	export interface DestinationFormProperties {
		destinationName: FormControl<string | null | undefined>,
		targetArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		accessPolicy: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		creationTime: FormControl<number | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined),
			targetArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			accessPolicy: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDestinationsRequest {
		DestinationNamePrefix?: string;
		nextToken?: string;
		limit?: number | null;
	}
	export interface DescribeDestinationsRequestFormProperties {
		DestinationNamePrefix: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDestinationsRequestFormGroup() {
		return new FormGroup<DescribeDestinationsRequestFormProperties>({
			DestinationNamePrefix: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
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
		taskId?: string;
		taskName?: string;
		logGroupName?: string;
		from?: number | null;
		to?: number | null;
		destination?: string;
		destinationPrefix?: string;
		status?: ExportTaskStatus;
		executionInfo?: ExportTaskExecutionInfo;
	}

	/** Represents an export task. */
	export interface ExportTaskFormProperties {
		taskId: FormControl<string | null | undefined>,
		taskName: FormControl<string | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,
		from: FormControl<number | null | undefined>,
		to: FormControl<number | null | undefined>,
		destination: FormControl<string | null | undefined>,
		destinationPrefix: FormControl<string | null | undefined>,
	}
	export function CreateExportTaskFormGroup() {
		return new FormGroup<ExportTaskFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			logGroupName: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			destinationPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the status of an export task. */
	export interface ExportTaskStatus {
		code?: ExportTaskStatusCode;
		message?: string;
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

	export enum ExportTaskStatusCode { CANCELLED = 'CANCELLED', COMPLETED = 'COMPLETED', FAILED = 'FAILED', PENDING = 'PENDING', PENDING_CANCEL = 'PENDING_CANCEL', RUNNING = 'RUNNING' }


	/** Represents the status of an export task. */
	export interface ExportTaskExecutionInfo {
		creationTime?: number | null;
		completionTime?: number | null;
	}

	/** Represents the status of an export task. */
	export interface ExportTaskExecutionInfoFormProperties {
		creationTime: FormControl<number | null | undefined>,
		completionTime: FormControl<number | null | undefined>,
	}
	export function CreateExportTaskExecutionInfoFormGroup() {
		return new FormGroup<ExportTaskExecutionInfoFormProperties>({
			creationTime: new FormControl<number | null | undefined>(undefined),
			completionTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeExportTasksRequest {
		taskId?: string;
		statusCode?: ExportTaskStatusCode;
		nextToken?: string;
		limit?: number | null;
	}
	export interface DescribeExportTasksRequestFormProperties {
		taskId: FormControl<string | null | undefined>,
		statusCode: FormControl<ExportTaskStatusCode | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeExportTasksRequestFormGroup() {
		return new FormGroup<DescribeExportTasksRequestFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<ExportTaskStatusCode | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
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
		logGroupName?: string;
		creationTime?: number | null;

		/**
		 * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionInDays?: number | null;
		metricFilterCount?: number | null;
		arn?: string;
		storedBytes?: number | null;
		kmsKeyId?: string;
		dataProtectionStatus?: DataProtectionStatus;
		inheritedProperties?: Array<InheritedProperty>;
	}

	/** Represents a log group. */
	export interface LogGroupFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		creationTime: FormControl<number | null | undefined>,

		/**
		 * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionInDays: FormControl<number | null | undefined>,
		metricFilterCount: FormControl<number | null | undefined>,
		arn: FormControl<string | null | undefined>,
		storedBytes: FormControl<number | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		dataProtectionStatus: FormControl<DataProtectionStatus | null | undefined>,
	}
	export function CreateLogGroupFormGroup() {
		return new FormGroup<LogGroupFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined),
			retentionInDays: new FormControl<number | null | undefined>(undefined),
			metricFilterCount: new FormControl<number | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			storedBytes: new FormControl<number | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			dataProtectionStatus: new FormControl<DataProtectionStatus | null | undefined>(undefined),
		});

	}

	export enum DataProtectionStatus { ACTIVATED = 'ACTIVATED', DELETED = 'DELETED', ARCHIVED = 'ARCHIVED', DISABLED = 'DISABLED' }

	export enum InheritedProperty { ACCOUNT_DATA_PROTECTION = 'ACCOUNT_DATA_PROTECTION' }

	export interface DescribeLogGroupsRequest {
		accountIdentifiers?: Array<string>;
		logGroupNamePrefix?: string;
		logGroupNamePattern?: string;
		nextToken?: string;
		limit?: number | null;
		includeLinkedAccounts?: boolean | null;
	}
	export interface DescribeLogGroupsRequestFormProperties {
		logGroupNamePrefix: FormControl<string | null | undefined>,
		logGroupNamePattern: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		includeLinkedAccounts: FormControl<boolean | null | undefined>,
	}
	export function CreateDescribeLogGroupsRequestFormGroup() {
		return new FormGroup<DescribeLogGroupsRequestFormProperties>({
			logGroupNamePrefix: new FormControl<string | null | undefined>(undefined),
			logGroupNamePattern: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			includeLinkedAccounts: new FormControl<boolean | null | undefined>(undefined),
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
		logStreamName?: string;
		creationTime?: number | null;
		firstEventTimestamp?: number | null;
		lastEventTimestamp?: number | null;
		lastIngestionTime?: number | null;
		uploadSequenceToken?: string;
		arn?: string;
		storedBytes?: number | null;
	}

	/** Represents a log stream, which is a sequence of log events from a single emitter of logs. */
	export interface LogStreamFormProperties {
		logStreamName: FormControl<string | null | undefined>,
		creationTime: FormControl<number | null | undefined>,
		firstEventTimestamp: FormControl<number | null | undefined>,
		lastEventTimestamp: FormControl<number | null | undefined>,
		lastIngestionTime: FormControl<number | null | undefined>,
		uploadSequenceToken: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		storedBytes: FormControl<number | null | undefined>,
	}
	export function CreateLogStreamFormGroup() {
		return new FormGroup<LogStreamFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined),
			firstEventTimestamp: new FormControl<number | null | undefined>(undefined),
			lastEventTimestamp: new FormControl<number | null | undefined>(undefined),
			lastIngestionTime: new FormControl<number | null | undefined>(undefined),
			uploadSequenceToken: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			storedBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeLogStreamsRequest {
		logGroupName?: string;
		logGroupIdentifier?: string;
		logStreamNamePrefix?: string;
		orderBy?: OrderBy;
		descending?: boolean | null;
		nextToken?: string;
		limit?: number | null;
	}
	export interface DescribeLogStreamsRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		logGroupIdentifier: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,
		orderBy: FormControl<OrderBy | null | undefined>,
		descending: FormControl<boolean | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeLogStreamsRequestFormGroup() {
		return new FormGroup<DescribeLogStreamsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
			orderBy: new FormControl<OrderBy | null | undefined>(undefined),
			descending: new FormControl<boolean | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OrderBy { LogStreamName = 'LogStreamName', LastEventTime = 'LastEventTime' }

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
		filterName?: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern?: string | null;
		metricTransformations?: Array<MetricTransformation>;
		creationTime?: number | null;
		logGroupName?: string;
	}

	/** Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric. */
	export interface MetricFilterFormProperties {
		filterName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern: FormControl<string | null | undefined>,
		creationTime: FormControl<number | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateMetricFilterFormGroup() {
		return new FormGroup<MetricFilterFormProperties>({
			filterName: new FormControl<string | null | undefined>(undefined),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			creationTime: new FormControl<number | null | undefined>(undefined),
			logGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates how to transform ingested log events to metric data in a CloudWatch metric. */
	export interface MetricTransformation {

		/** Required */
		metricName: string;

		/** Required */
		metricNamespace: string;

		/** Required */
		metricValue: string;
		defaultValue?: number | null;
		dimensions?: Dimensions;
		unit?: StandardUnit;
	}

	/** Indicates how to transform ingested log events to metric data in a CloudWatch metric. */
	export interface MetricTransformationFormProperties {

		/** Required */
		metricName: FormControl<string | null | undefined>,

		/** Required */
		metricNamespace: FormControl<string | null | undefined>,

		/** Required */
		metricValue: FormControl<string | null | undefined>,
		defaultValue: FormControl<number | null | undefined>,
		unit: FormControl<StandardUnit | null | undefined>,
	}
	export function CreateMetricTransformationFormGroup() {
		return new FormGroup<MetricTransformationFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metricValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultValue: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<StandardUnit | null | undefined>(undefined),
		});

	}

	export interface Dimensions {
	}
	export interface DimensionsFormProperties {
	}
	export function CreateDimensionsFormGroup() {
		return new FormGroup<DimensionsFormProperties>({
		});

	}

	export enum StandardUnit { Seconds = 'Seconds', Microseconds = 'Microseconds', Milliseconds = 'Milliseconds', Bytes = 'Bytes', Kilobytes = 'Kilobytes', Megabytes = 'Megabytes', Gigabytes = 'Gigabytes', Terabytes = 'Terabytes', Bits = 'Bits', Kilobits = 'Kilobits', Megabits = 'Megabits', Gigabits = 'Gigabits', Terabits = 'Terabits', Percent = 'Percent', Count = 'Count', 'Bytes/Second' = 'Bytes/Second', 'Kilobytes/Second' = 'Kilobytes/Second', 'Megabytes/Second' = 'Megabytes/Second', 'Gigabytes/Second' = 'Gigabytes/Second', 'Terabytes/Second' = 'Terabytes/Second', 'Bits/Second' = 'Bits/Second', 'Kilobits/Second' = 'Kilobits/Second', 'Megabits/Second' = 'Megabits/Second', 'Gigabits/Second' = 'Gigabits/Second', 'Terabits/Second' = 'Terabits/Second', 'Count/Second' = 'Count/Second', None = 'None' }

	export interface DescribeMetricFiltersRequest {
		logGroupName?: string;
		filterNamePrefix?: string;
		nextToken?: string;
		limit?: number | null;
		metricName?: string;
		metricNamespace?: string;
	}
	export interface DescribeMetricFiltersRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		filterNamePrefix: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		metricName: FormControl<string | null | undefined>,
		metricNamespace: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMetricFiltersRequestFormGroup() {
		return new FormGroup<DescribeMetricFiltersRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			filterNamePrefix: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			metricName: new FormControl<string | null | undefined>(undefined),
			metricNamespace: new FormControl<string | null | undefined>(undefined),
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
		queryId?: string;
		queryString?: string;
		status?: QueryStatus;
		createTime?: number | null;
		logGroupName?: string;
	}

	/** Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.  */
	export interface QueryInfoFormProperties {
		queryId: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		status: FormControl<QueryStatus | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateQueryInfoFormGroup() {
		return new FormGroup<QueryInfoFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<QueryStatus | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			logGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryStatus { Scheduled = 'Scheduled', Running = 'Running', Complete = 'Complete', Failed = 'Failed', Cancelled = 'Cancelled', Timeout = 'Timeout', Unknown = 'Unknown' }

	export interface DescribeQueriesRequest {
		logGroupName?: string;
		status?: QueryStatus;
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueriesRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		status: FormControl<QueryStatus | null | undefined>,
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueriesRequestFormGroup() {
		return new FormGroup<DescribeQueriesRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<QueryStatus | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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


	/** This structure contains details about a saved CloudWatch Logs Insights query definition. */
	export interface QueryDefinition {
		queryDefinitionId?: string;
		name?: string;
		queryString?: string;
		lastModified?: number | null;
		logGroupNames?: Array<string>;
	}

	/** This structure contains details about a saved CloudWatch Logs Insights query definition. */
	export interface QueryDefinitionFormProperties {
		queryDefinitionId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		queryString: FormControl<string | null | undefined>,
		lastModified: FormControl<number | null | undefined>,
	}
	export function CreateQueryDefinitionFormGroup() {
		return new FormGroup<QueryDefinitionFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeQueryDefinitionsRequest {
		queryDefinitionNamePrefix?: string;
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface DescribeQueryDefinitionsRequestFormProperties {
		queryDefinitionNamePrefix: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeQueryDefinitionsRequestFormGroup() {
		return new FormGroup<DescribeQueryDefinitionsRequestFormProperties>({
			queryDefinitionNamePrefix: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
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
		policyName?: string;
		policyDocument?: string;
		lastUpdatedTime?: number | null;
	}

	/** A policy enabling one or more entities to put logs to a log group in this account. */
	export interface ResourcePolicyFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<number | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePoliciesRequest {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}
	export interface DescribeResourcePoliciesRequestFormProperties {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeResourcePoliciesRequestFormGroup() {
		return new FormGroup<DescribeResourcePoliciesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			limit: new FormControl<number | null | undefined>(undefined),
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
		filterName?: string;
		logGroupName?: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern?: string | null;
		destinationArn?: string;
		roleArn?: string;

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution?: SubscriptionFilterDistribution | null;
		creationTime?: number | null;
	}

	/** Represents a subscription filter. */
	export interface SubscriptionFilterFormProperties {
		filterName: FormControl<string | null | undefined>,
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern: FormControl<string | null | undefined>,
		destinationArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution: FormControl<SubscriptionFilterDistribution | null | undefined>,
		creationTime: FormControl<number | null | undefined>,
	}
	export function CreateSubscriptionFilterFormGroup() {
		return new FormGroup<SubscriptionFilterFormProperties>({
			filterName: new FormControl<string | null | undefined>(undefined),
			logGroupName: new FormControl<string | null | undefined>(undefined),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024)]),
			destinationArn: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
			distribution: new FormControl<SubscriptionFilterDistribution | null | undefined>(undefined),
			creationTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SubscriptionFilterDistribution { Random = 'Random', ByLogStream = 'ByLogStream' }

	export interface DescribeSubscriptionFiltersRequest {

		/** Required */
		logGroupName: string;
		filterNamePrefix?: string;
		nextToken?: string;
		limit?: number | null;
	}
	export interface DescribeSubscriptionFiltersRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
		filterNamePrefix: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateDescribeSubscriptionFiltersRequestFormGroup() {
		return new FormGroup<DescribeSubscriptionFiltersRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterNamePrefix: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DisassociateKmsKeyRequest {
		logGroupName?: string;
		resourceIdentifier?: string;
	}
	export interface DisassociateKmsKeyRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		resourceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateKmsKeyRequestFormGroup() {
		return new FormGroup<DisassociateKmsKeyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			resourceIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterLogEventsResponse {
		events?: Array<FilteredLogEvent>;
		searchedLogStreams?: Array<SearchedLogStream>;
		nextToken?: string;
	}
	export interface FilterLogEventsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateFilterLogEventsResponseFormGroup() {
		return new FormGroup<FilterLogEventsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a matched event. */
	export interface FilteredLogEvent {
		logStreamName?: string;
		timestamp?: number | null;
		message?: string;
		ingestionTime?: number | null;
		eventId?: string;
	}

	/** Represents a matched event. */
	export interface FilteredLogEventFormProperties {
		logStreamName: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		ingestionTime: FormControl<number | null | undefined>,
		eventId: FormControl<string | null | undefined>,
	}
	export function CreateFilteredLogEventFormGroup() {
		return new FormGroup<FilteredLogEventFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ingestionTime: new FormControl<number | null | undefined>(undefined),
			eventId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the search status of a log stream. */
	export interface SearchedLogStream {
		logStreamName?: string;
		searchedCompletely?: boolean | null;
	}

	/** Represents the search status of a log stream. */
	export interface SearchedLogStreamFormProperties {
		logStreamName: FormControl<string | null | undefined>,
		searchedCompletely: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchedLogStreamFormGroup() {
		return new FormGroup<SearchedLogStreamFormProperties>({
			logStreamName: new FormControl<string | null | undefined>(undefined),
			searchedCompletely: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FilterLogEventsRequest {
		logGroupName?: string;
		logGroupIdentifier?: string;
		logStreamNames?: Array<string>;
		logStreamNamePrefix?: string;
		startTime?: number | null;
		endTime?: number | null;
		filterPattern?: string;
		nextToken?: string;
		limit?: number | null;
		interleaved?: boolean | null;
		unmask?: boolean | null;
	}
	export interface FilterLogEventsRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		logGroupIdentifier: FormControl<string | null | undefined>,
		logStreamNamePrefix: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		filterPattern: FormControl<string | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		interleaved: FormControl<boolean | null | undefined>,
		unmask: FormControl<boolean | null | undefined>,
	}
	export function CreateFilterLogEventsRequestFormGroup() {
		return new FormGroup<FilterLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			logStreamNamePrefix: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			filterPattern: new FormControl<string | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			interleaved: new FormControl<boolean | null | undefined>(undefined),
			unmask: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetDataProtectionPolicyResponse {
		logGroupIdentifier?: string;
		policyDocument?: string;
		lastUpdatedTime?: number | null;
	}
	export interface GetDataProtectionPolicyResponseFormProperties {
		logGroupIdentifier: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<number | null | undefined>,
	}
	export function CreateGetDataProtectionPolicyResponseFormGroup() {
		return new FormGroup<GetDataProtectionPolicyResponseFormProperties>({
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetDataProtectionPolicyRequest {

		/** Required */
		logGroupIdentifier: string;
	}
	export interface GetDataProtectionPolicyRequestFormProperties {

		/** Required */
		logGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetDataProtectionPolicyRequestFormGroup() {
		return new FormGroup<GetDataProtectionPolicyRequestFormProperties>({
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetLogEventsResponse {
		events?: Array<OutputLogEvent>;
		nextForwardToken?: string;
		nextBackwardToken?: string;
	}
	export interface GetLogEventsResponseFormProperties {
		nextForwardToken: FormControl<string | null | undefined>,
		nextBackwardToken: FormControl<string | null | undefined>,
	}
	export function CreateGetLogEventsResponseFormGroup() {
		return new FormGroup<GetLogEventsResponseFormProperties>({
			nextForwardToken: new FormControl<string | null | undefined>(undefined),
			nextBackwardToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a log event. */
	export interface OutputLogEvent {
		timestamp?: number | null;
		message?: string;
		ingestionTime?: number | null;
	}

	/** Represents a log event. */
	export interface OutputLogEventFormProperties {
		timestamp: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		ingestionTime: FormControl<number | null | undefined>,
	}
	export function CreateOutputLogEventFormGroup() {
		return new FormGroup<OutputLogEventFormProperties>({
			timestamp: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			ingestionTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLogEventsRequest {
		logGroupName?: string;
		logGroupIdentifier?: string;

		/** Required */
		logStreamName: string;
		startTime?: number | null;
		endTime?: number | null;
		nextToken?: string;
		limit?: number | null;
		startFromHead?: boolean | null;
		unmask?: boolean | null;
	}
	export interface GetLogEventsRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		logGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		logStreamName: FormControl<string | null | undefined>,
		startTime: FormControl<number | null | undefined>,
		endTime: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
		startFromHead: FormControl<boolean | null | undefined>,
		unmask: FormControl<boolean | null | undefined>,
	}
	export function CreateGetLogEventsRequestFormGroup() {
		return new FormGroup<GetLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			startFromHead: new FormControl<boolean | null | undefined>(undefined),
			unmask: new FormControl<boolean | null | undefined>(undefined),
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
		name?: string;
		percent?: number | null;
	}

	/** The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears. */
	export interface LogGroupFieldFormProperties {
		name: FormControl<string | null | undefined>,
		percent: FormControl<number | null | undefined>,
	}
	export function CreateLogGroupFieldFormGroup() {
		return new FormGroup<LogGroupFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLogGroupFieldsRequest {
		logGroupName?: string;
		time?: number | null;
		logGroupIdentifier?: string;
	}
	export interface GetLogGroupFieldsRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,
		time: FormControl<number | null | undefined>,
		logGroupIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGetLogGroupFieldsRequestFormGroup() {
		return new FormGroup<GetLogGroupFieldsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
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
		unmask?: boolean | null;
	}
	export interface GetLogRecordRequestFormProperties {

		/** Required */
		logRecordPointer: FormControl<string | null | undefined>,
		unmask: FormControl<boolean | null | undefined>,
	}
	export function CreateGetLogRecordRequestFormGroup() {
		return new FormGroup<GetLogRecordRequestFormProperties>({
			logRecordPointer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			unmask: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetQueryResultsResponse {
		results?: Array<Array<ResultField>>;
		statistics?: QueryStatistics;
		status?: QueryStatus;
		encryptionKey?: string;
	}
	export interface GetQueryResultsResponseFormProperties {
		status: FormControl<QueryStatus | null | undefined>,
		encryptionKey: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsResponseFormGroup() {
		return new FormGroup<GetQueryResultsResponseFormProperties>({
			status: new FormControl<QueryStatus | null | undefined>(undefined),
			encryptionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> */
	export interface ResultField {
		field?: string;
		value?: string;
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

		/** Required */
		queryId: string;
	}
	export interface GetQueryResultsRequestFormProperties {

		/** Required */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsRequestFormGroup() {
		return new FormGroup<GetQueryResultsRequestFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Tags;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse */
	export interface ListTagsLogGroupResponse {
		tags?: Tags;
	}

	/** Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse */
	export interface ListTagsLogGroupResponseFormProperties {
	}
	export function CreateListTagsLogGroupResponseFormGroup() {
		return new FormGroup<ListTagsLogGroupResponseFormProperties>({
		});

	}


	/** Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse */
	export interface ListTagsLogGroupRequest {

		/** Required */
		logGroupName: string;
	}

	/** Please use the generic tagging API model ListTagsForResourceRequest and ListTagsForResourceResponse */
	export interface ListTagsLogGroupRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateListTagsLogGroupRequestFormGroup() {
		return new FormGroup<ListTagsLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutAccountPolicyResponse {
		accountPolicy?: AccountPolicy;
	}
	export interface PutAccountPolicyResponseFormProperties {
	}
	export function CreatePutAccountPolicyResponseFormGroup() {
		return new FormGroup<PutAccountPolicyResponseFormProperties>({
		});

	}

	export interface PutAccountPolicyRequest {

		/** Required */
		policyName: string;

		/** Required */
		policyDocument: string;

		/** Required */
		policyType: PolicyType;
		scope?: Scope;
	}
	export interface PutAccountPolicyRequestFormProperties {

		/** Required */
		policyName: FormControl<string | null | undefined>,

		/** Required */
		policyDocument: FormControl<string | null | undefined>,

		/** Required */
		policyType: FormControl<PolicyType | null | undefined>,
		scope: FormControl<Scope | null | undefined>,
	}
	export function CreatePutAccountPolicyRequestFormGroup() {
		return new FormGroup<PutAccountPolicyRequestFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyType: new FormControl<PolicyType | null | undefined>(undefined, [Validators.required]),
			scope: new FormControl<Scope | null | undefined>(undefined),
		});

	}

	export interface PutDataProtectionPolicyResponse {
		logGroupIdentifier?: string;
		policyDocument?: string;
		lastUpdatedTime?: number | null;
	}
	export interface PutDataProtectionPolicyResponseFormProperties {
		logGroupIdentifier: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
		lastUpdatedTime: FormControl<number | null | undefined>,
	}
	export function CreatePutDataProtectionPolicyResponseFormGroup() {
		return new FormGroup<PutDataProtectionPolicyResponseFormProperties>({
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutDataProtectionPolicyRequest {

		/** Required */
		logGroupIdentifier: string;

		/** Required */
		policyDocument: string;
	}
	export interface PutDataProtectionPolicyRequestFormProperties {

		/** Required */
		logGroupIdentifier: FormControl<string | null | undefined>,

		/** Required */
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutDataProtectionPolicyRequestFormGroup() {
		return new FormGroup<PutDataProtectionPolicyRequestFormProperties>({
			logGroupIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDestinationResponse {
		destination?: Destination;
	}
	export interface PutDestinationResponseFormProperties {
	}
	export function CreatePutDestinationResponseFormGroup() {
		return new FormGroup<PutDestinationResponseFormProperties>({
		});

	}

	export interface PutDestinationRequest {

		/** Required */
		destinationName: string;

		/** Required */
		targetArn: string;

		/** Required */
		roleArn: string;
		tags?: Tags;
	}
	export interface PutDestinationRequestFormProperties {

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		targetArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutDestinationRequestFormGroup() {
		return new FormGroup<PutDestinationRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			targetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDestinationPolicyRequest {

		/** Required */
		destinationName: string;

		/** Required */
		accessPolicy: string;
		forceUpdate?: boolean | null;
	}
	export interface PutDestinationPolicyRequestFormProperties {

		/** Required */
		destinationName: FormControl<string | null | undefined>,

		/** Required */
		accessPolicy: FormControl<string | null | undefined>,
		forceUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDestinationPolicyRequestFormGroup() {
		return new FormGroup<PutDestinationPolicyRequestFormProperties>({
			destinationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessPolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			forceUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutLogEventsResponse {
		nextSequenceToken?: string;
		rejectedLogEventsInfo?: RejectedLogEventsInfo;
	}
	export interface PutLogEventsResponseFormProperties {
		nextSequenceToken: FormControl<string | null | undefined>,
	}
	export function CreatePutLogEventsResponseFormGroup() {
		return new FormGroup<PutLogEventsResponseFormProperties>({
			nextSequenceToken: new FormControl<string | null | undefined>(undefined),
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

		/** Required */
		logGroupName: string;

		/** Required */
		logStreamName: string;

		/** Required */
		logEvents: Array<InputLogEvent>;
		sequenceToken?: string;
	}
	export interface PutLogEventsRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		logStreamName: FormControl<string | null | undefined>,
		sequenceToken: FormControl<string | null | undefined>,
	}
	export function CreatePutLogEventsRequestFormGroup() {
		return new FormGroup<PutLogEventsRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sequenceToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a log event, which is a record of activity that was recorded by the application or resource being monitored. */
	export interface InputLogEvent {

		/** Required */
		timestamp: number;

		/** Required */
		message: string;
	}

	/** Represents a log event, which is a record of activity that was recorded by the application or resource being monitored. */
	export interface InputLogEventFormProperties {

		/** Required */
		timestamp: FormControl<number | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateInputLogEventFormGroup() {
		return new FormGroup<InputLogEventFormProperties>({
			timestamp: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Required */
		logGroupName: string;

		/** Required */
		filterName: string;

		/** Required */
		filterPattern: string;

		/** Required */
		metricTransformations: Array<MetricTransformation>;
	}
	export interface PutMetricFilterRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		filterName: FormControl<string | null | undefined>,

		/** Required */
		filterPattern: FormControl<string | null | undefined>,
	}
	export function CreatePutMetricFilterRequestFormGroup() {
		return new FormGroup<PutMetricFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutQueryDefinitionResponse {
		queryDefinitionId?: string;
	}
	export interface PutQueryDefinitionResponseFormProperties {
		queryDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreatePutQueryDefinitionResponseFormGroup() {
		return new FormGroup<PutQueryDefinitionResponseFormProperties>({
			queryDefinitionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutQueryDefinitionRequest {

		/** Required */
		name: string;
		queryDefinitionId?: string;
		logGroupNames?: Array<string>;

		/** Required */
		queryString: string;
	}
	export interface PutQueryDefinitionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		queryDefinitionId: FormControl<string | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
	}
	export function CreatePutQueryDefinitionRequestFormGroup() {
		return new FormGroup<PutQueryDefinitionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queryDefinitionId: new FormControl<string | null | undefined>(undefined),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyResponse {
		resourcePolicy?: ResourcePolicy;
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface PutResourcePolicyRequest {
		policyName?: string;
		policyDocument?: string;
	}
	export interface PutResourcePolicyRequestFormProperties {
		policyName: FormControl<string | null | undefined>,
		policyDocument: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			policyName: new FormControl<string | null | undefined>(undefined),
			policyDocument: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRetentionPolicyRequest {

		/** Required */
		logGroupName: string;

		/**
		 * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionInDays: number;
	}
	export interface PutRetentionPolicyRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/**
		 * <p>The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.</p> <p>To set a log group so that its log events do not expire, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html">DeleteRetentionPolicy</a>. </p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePutRetentionPolicyRequestFormGroup() {
		return new FormGroup<PutRetentionPolicyRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutSubscriptionFilterRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		filterName: string;

		/** Required */
		filterPattern: string;

		/** Required */
		destinationArn: string;
		roleArn?: string;
		distribution?: SubscriptionFilterDistribution;
	}
	export interface PutSubscriptionFilterRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		filterName: FormControl<string | null | undefined>,

		/** Required */
		filterPattern: FormControl<string | null | undefined>,

		/** Required */
		destinationArn: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		distribution: FormControl<SubscriptionFilterDistribution | null | undefined>,
	}
	export function CreatePutSubscriptionFilterRequestFormGroup() {
		return new FormGroup<PutSubscriptionFilterRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
			distribution: new FormControl<SubscriptionFilterDistribution | null | undefined>(undefined),
		});

	}

	export interface StartQueryResponse {
		queryId?: string;
	}
	export interface StartQueryResponseFormProperties {
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryResponseFormGroup() {
		return new FormGroup<StartQueryResponseFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartQueryRequest {
		logGroupName?: string;
		logGroupNames?: Array<string>;
		logGroupIdentifiers?: Array<string>;

		/** Required */
		startTime: number;

		/** Required */
		endTime: number;

		/** Required */
		queryString: string;
		limit?: number | null;
	}
	export interface StartQueryRequestFormProperties {
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<number | null | undefined>,

		/** Required */
		endTime: FormControl<number | null | undefined>,

		/** Required */
		queryString: FormControl<string | null | undefined>,
		limit: FormControl<number | null | undefined>,
	}
	export function CreateStartQueryRequestFormGroup() {
		return new FormGroup<StartQueryRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			queryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			limit: new FormControl<number | null | undefined>(undefined),
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

		/** Required */
		queryId: string;
	}
	export interface StopQueryRequestFormProperties {

		/** Required */
		queryId: FormControl<string | null | undefined>,
	}
	export function CreateStopQueryRequestFormGroup() {
		return new FormGroup<StopQueryRequestFormProperties>({
			queryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Please use the generic tagging API model TagResourceRequest */
	export interface TagLogGroupRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		tags: Tags;
	}

	/** Please use the generic tagging API model TagResourceRequest */
	export interface TagLogGroupRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateTagLogGroupRequestFormGroup() {
		return new FormGroup<TagLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tags: Tags;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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
		eventMessage?: string;
		extractedValues?: ExtractedValues;
	}

	/** Represents a matched event. */
	export interface MetricFilterMatchRecordFormProperties {
		eventNumber: FormControl<number | null | undefined>,
		eventMessage: FormControl<string | null | undefined>,
	}
	export function CreateMetricFilterMatchRecordFormGroup() {
		return new FormGroup<MetricFilterMatchRecordFormProperties>({
			eventNumber: new FormControl<number | null | undefined>(undefined),
			eventMessage: new FormControl<string | null | undefined>(undefined),
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
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern: string;

		/** Required */
		logEventMessages: Array<string>;
	}
	export interface TestMetricFilterRequestFormProperties {

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event can contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Min length: 0
		 * Max length: 1024
		 */
		filterPattern: FormControl<string | null | undefined>,
	}
	export function CreateTestMetricFilterRequestFormGroup() {
		return new FormGroup<TestMetricFilterRequestFormProperties>({
			filterPattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024)]),
		});

	}


	/** Please use the generic tagging API model UntagResourceRequest */
	export interface UntagLogGroupRequest {

		/** Required */
		logGroupName: string;

		/** Required */
		tags: Array<string>;
	}

	/** Please use the generic tagging API model UntagResourceRequest */
	export interface UntagLogGroupRequestFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,
	}
	export function CreateUntagLogGroupRequestFormGroup() {
		return new FormGroup<UntagLogGroupRequestFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
	export enum Distribution { Random = 'Random', ByLogStream = 'ByLogStream' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates the specified KMS key with either one log group in the account, or with all stored CloudWatch Logs query insights results in the account.</p> <p>When you use <code>AssociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to cause all log events stored in the log group to be encrypted with that key. Only the log events ingested after the key is associated are encrypted with that key.</p> <p>Associating a KMS key with a log group overrides any existing associations between the log group and a KMS key. After a KMS key is associated with a log group, all newly ingested data for the log group is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>Associating a key with a log group does not cause the results of queries of that log group to be encrypted with that key. To have query results encrypted with a KMS key, you must use an <code>AssociateKmsKey</code> operation with the <code>resourceIdentifier</code> parameter that specifies a <code>query-result</code> resource. </p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with a <code>query-result</code> resource, to use that key to encrypt the stored results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. The response from a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> operation will still return the query results in plain text.</p> <p>Even if you have not associated a key with your query results, the query results are encrypted when stored, using the default CloudWatch Logs method.</p> <p>If you run a query from a monitoring account that queries logs in a source account, the query results key from the monitoring account, if any, is used.</p> </li> </ul> <important> <p>If you delete the key that is used to encrypt log events or log group query results, then all the associated stored log events or query results that were encrypted with that key will be unencryptable and unusable.</p> </important> <note> <p>CloudWatch Logs supports only symmetric KMS keys. Do not use an associate an asymmetric KMS key with your log group or query results. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </note> <p>It can take up to 5 minutes for this operation to take effect.</p> <p>If you attempt to associate a KMS key with a log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p>
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
		 * <p>Creates an export task so that you can efficiently export data from a log group to an Amazon S3 bucket. When you perform a <code>CreateExportTask</code> operation, you must use credentials that have permission to write to the S3 bucket that you specify as the destination.</p> <p>Exporting log data to S3 buckets that are encrypted by KMS is supported. Exporting log data to Amazon S3 buckets that have S3 Object Lock enabled with a retention period is also supported.</p> <p>Exporting to S3 buckets that are encrypted with AES-256 is supported. </p> <p>This is an asynchronous call. If all the required information is provided, this operation initiates an export task and responds with the ID of the task. After the task has started, you can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a> to get the status of the export task. Each account can only have one active (<code>RUNNING</code> or <code>PENDING</code>) export task at a time. To cancel an export task, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CancelExportTask.html">CancelExportTask</a>.</p> <p>You can export logs from multiple log groups or multiple time ranges to the same S3 bucket. To separate log data for each export task, specify a prefix to be used as the Amazon S3 key prefix for all exported objects.</p> <note> <p>Time-based sorting on chunks of log data inside an exported file is not guaranteed. You can sort the exported log field data by using Linux utilities.</p> </note>
		 * Post #X-Amz-Target=Logs_20140328.CreateExportTask
		 * @return {CreateExportTaskResponse} Success
		 */
		CreateExportTask(requestBody: CreateExportTaskRequest): Observable<CreateExportTaskResponse> {
			return this.http.post<CreateExportTaskResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateExportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a log group with the specified name. You can create up to 20,000 log groups per account.</p> <p>You must use the following guidelines when naming a log group:</p> <ul> <li> <p>Log group names must be unique within a Region for an Amazon Web Services account.</p> </li> <li> <p>Log group names can be between 1 and 512 characters long.</p> </li> <li> <p>Log group names consist of the following characters: a-z, A-Z, 0-9, '_' (underscore), '-' (hyphen), '/' (forward slash), '.' (period), and '#' (number sign)</p> </li> </ul> <p>When you create a log group, by default the log events in the log group do not expire. To set a retention policy so that events expire and are deleted after a specified time, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutRetentionPolicy.html">PutRetentionPolicy</a>.</p> <p>If you associate an KMS key with the log group, ingested data is encrypted using the KMS key. This association is stored as long as the data encrypted with the KMS key is still within CloudWatch Logs. This enables CloudWatch Logs to decrypt this data whenever it is requested.</p> <p>If you attempt to associate a KMS key with the log group but the KMS key does not exist or the KMS key is disabled, you receive an <code>InvalidParameterException</code> error. </p> <important> <p>CloudWatch Logs supports only symmetric KMS keys. Do not associate an asymmetric KMS key with your log group. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric Keys</a>.</p> </important>
		 * Post #X-Amz-Target=Logs_20140328.CreateLogGroup
		 * @return {void} Success
		 */
		CreateLogGroup(requestBody: CreateLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a log stream for the specified log group. A log stream is a sequence of log events that originate from a single source, such as an application instance or a resource that is being monitored.</p> <p>There is no limit on the number of log streams that you can create for a log group. There is a limit of 50 TPS on <code>CreateLogStream</code> operations, after which transactions are throttled.</p> <p>You must use the following guidelines when naming a log stream:</p> <ul> <li> <p>Log stream names must be unique within the log group.</p> </li> <li> <p>Log stream names can be between 1 and 512 characters long.</p> </li> <li> <p>Don't use ':' (colon) or '*' (asterisk) characters.</p> </li> </ul>
		 * Post #X-Amz-Target=Logs_20140328.CreateLogStream
		 * @return {void} Success
		 */
		CreateLogStream(requestBody: CreateLogStreamRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.CreateLogStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a CloudWatch Logs account policy.</p> <p>To use this operation, you must be signed on with the <code>logs:DeleteDataProtectionPolicy</code> and <code>logs:DeleteAccountPolicy</code> permissions.</p>
		 * Post #X-Amz-Target=Logs_20140328.DeleteAccountPolicy
		 * @return {void} Success
		 */
		DeleteAccountPolicy(requestBody: DeleteAccountPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteAccountPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the data protection policy from the specified log group. </p> <p>For more information about data protection policies, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy
		 * @return {void} Success
		 */
		DeleteDataProtectionPolicy(requestBody: DeleteDataProtectionPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * <p>Deletes a saved CloudWatch Logs Insights query definition. A query definition contains details about a saved CloudWatch Logs Insights query.</p> <p>Each <code>DeleteQueryDefinition</code> operation can delete one query definition.</p> <p>You must have the <code>logs:DeleteQueryDefinition</code> permission to be able to perform this operation.</p>
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
		 * Returns a list of all CloudWatch Logs account policies in the account.
		 * Post #X-Amz-Target=Logs_20140328.DescribeAccountPolicies
		 * @return {DescribeAccountPoliciesResponse} Success
		 */
		DescribeAccountPolicies(requestBody: DescribeAccountPoliciesRequest): Observable<DescribeAccountPoliciesResponse> {
			return this.http.post<DescribeAccountPoliciesResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeAccountPolicies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * <p>Lists the specified log groups. You can list all your log groups or filter the results by prefix. The results are ASCII-sorted by log group name.</p> <p>CloudWatch Logs doesn’t support IAM policies that control access to the <code>DescribeLogGroups</code> action by using the <code>aws:ResourceTag/<i>key-name</i> </code> condition key. Other CloudWatch Logs actions do support the use of the <code>aws:ResourceTag/<i>key-name</i> </code> condition key to control access. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.DescribeLogGroups
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLogGroupsResponse} Success
		 */
		DescribeLogGroups(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeLogGroupsRequest): Observable<DescribeLogGroupsResponse> {
			return this.http.post<DescribeLogGroupsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogGroups?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.DescribeLogStreams
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLogStreamsResponse} Success
		 */
		DescribeLogStreams(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeLogStreamsRequest): Observable<DescribeLogStreamsResponse> {
			return this.http.post<DescribeLogStreamsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogStreams?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified metric filters. You can list all of the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeMetricFilters
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeMetricFiltersResponse} Success
		 */
		DescribeMetricFilters(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeMetricFiltersRequest): Observable<DescribeMetricFiltersResponse> {
			return this.http.post<DescribeMetricFiltersResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeMetricFilters?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of CloudWatch Logs Insights queries that are scheduled, running, or have been run recently in this account. You can request all queries or limit it to queries of a specific log group or queries with a certain status.
		 * Post #X-Amz-Target=Logs_20140328.DescribeQueries
		 * @return {DescribeQueriesResponse} Success
		 */
		DescribeQueries(requestBody: DescribeQueriesRequest): Observable<DescribeQueriesResponse> {
			return this.http.post<DescribeQueriesResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeQueries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>This operation returns a paginated list of your saved CloudWatch Logs Insights query definitions.</p> <p>You can use the <code>queryDefinitionNamePrefix</code> parameter to limit the results to only the query definitions that have names that start with a certain string.</p>
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
		 * <p>Disassociates the specified KMS key from the specified log group or from all CloudWatch Logs Insights query results in the account.</p> <p>When you use <code>DisassociateKmsKey</code>, you specify either the <code>logGroupName</code> parameter or the <code>resourceIdentifier</code> parameter. You can't specify both of those parameters in the same operation.</p> <ul> <li> <p>Specify the <code>logGroupName</code> parameter to stop using the KMS key to encrypt future log events ingested and stored in the log group. Instead, they will be encrypted with the default CloudWatch Logs method. The log events that were ingested while the key was associated with the log group are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> <li> <p>Specify the <code>resourceIdentifier</code> parameter with the <code>query-result</code> resource to stop using the KMS key to encrypt the results of all future <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> operations in the account. They will instead be encrypted with the default CloudWatch Logs method. The results from queries that ran while the key was associated with the account are still encrypted with that key. Therefore, CloudWatch Logs will need permissions for the key whenever that data is accessed.</p> </li> </ul> <p>It can take up to 5 minutes for this operation to take effect.</p>
		 * Post #X-Amz-Target=Logs_20140328.DisassociateKmsKey
		 * @return {void} Success
		 */
		DisassociateKmsKey(requestBody: DisassociateKmsKeyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.DisassociateKmsKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists log events from the specified log group. You can list all the log events or filter the results using a filter pattern, a time range, and the name of the log stream.</p> <p>You must have the <code>logs:FilterLogEvents</code> permission to perform this operation.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p> <p>By default, this operation returns as many log events as can fit in 1 MB (up to 10,000 log events) or all the events found within the specified time range. If the results include a token, that means there are more log events available. You can get additional results by specifying the token in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.FilterLogEvents
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {FilterLogEventsResponse} Success
		 */
		FilterLogEvents(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: FilterLogEventsRequest): Observable<FilterLogEventsResponse> {
			return this.http.post<FilterLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.FilterLogEvents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about a log group data protection policy.
		 * Post #X-Amz-Target=Logs_20140328.GetDataProtectionPolicy
		 * @return {GetDataProtectionPolicyResponse} Success
		 */
		GetDataProtectionPolicy(requestBody: GetDataProtectionPolicyRequest): Observable<GetDataProtectionPolicyResponse> {
			return this.http.post<GetDataProtectionPolicyResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists log events from the specified log stream. You can list all of the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call. This operation can return empty results while there are more log events available through the token.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must include one of these two parameters, but you can't include both. </p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogEvents
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLogEventsResponse} Success
		 */
		GetLogEvents(limit: string | null | undefined, nextToken: string | null | undefined, requestBody: GetLogEventsRequest): Observable<GetLogEventsResponse> {
			return this.http.post<GetLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogEvents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the fields that are included in log events in the specified log group. Includes the percentage of log events that contain each field. The search is limited to a time period that you specify.</p> <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>. You must specify one of these parameters, but you can't specify both. </p> <p>In the results, fields that start with <code>@</code> are fields generated by CloudWatch Logs. For example, <code>@timestamp</code> is the timestamp of each log event. For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> <p>The response results are sorted by the frequency percentage, starting with the highest percentage.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogGroupFields
		 * @return {GetLogGroupFieldsResponse} Success
		 */
		GetLogGroupFields(requestBody: GetLogGroupFieldsRequest): Observable<GetLogGroupFieldsResponse> {
			return this.http.post<GetLogGroupFieldsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogGroupFields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves all of the fields and values of a single log event. All fields are retrieved, even if the original query that produced the <code>logRecordPointer</code> retrieved only a subset of fields. Fields are returned as field name/field value pairs.</p> <p>The full unparsed log event is returned within <code>@message</code>.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogRecord
		 * @return {GetLogRecordResponse} Success
		 */
		GetLogRecord(requestBody: GetLogRecordRequest): Observable<GetLogRecordResponse> {
			return this.http.post<GetLogRecordResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetLogRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns the results from the specified query.</p> <p>Only the fields requested in the query are returned, along with a <code>@ptr</code> field, which is the identifier for the log record. You can use the value of <code>@ptr</code> in a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogRecord.html">GetLogRecord</a> operation to get the full log record.</p> <p> <code>GetQueryResults</code> does not start running a query. To run a query, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a>.</p> <p>If the value of the <code>Status</code> field in the output is <code>Running</code>, this operation returns only partial results. If you see a value of <code>Scheduled</code> or <code>Running</code> for the status, you can retry the operation later to see the final results. </p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start queries in linked source accounts. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetQueryResults
		 * @return {GetQueryResultsResponse} Success
		 */
		GetQueryResults(requestBody: GetQueryResultsRequest): Observable<GetQueryResultsResponse> {
			return this.http.post<GetQueryResultsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.GetQueryResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with a CloudWatch Logs resource. Currently, log groups and destinations support tagging.
		 * Post #X-Amz-Target=Logs_20140328.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <important> <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p> </important> <p>Lists the tags for the specified log group.</p>
		 * Post #X-Amz-Target=Logs_20140328.ListTagsLogGroup
		 * @return {ListTagsLogGroupResponse} Success
		 */
		ListTagsLogGroup(requestBody: ListTagsLogGroupRequest): Observable<ListTagsLogGroupResponse> {
			return this.http.post<ListTagsLogGroupResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.ListTagsLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an account-level data protection policy that applies to all log groups in the account. A data protection policy can help safeguard sensitive data that's ingested by your log groups by auditing and masking the sensitive log data. Each account can have only one account-level policy.</p> <important> <p>Sensitive data is detected and masked when it is ingested into a log group. When you set a data protection policy, log events ingested into the log groups before that time are not masked.</p> </important> <p>If you use <code>PutAccountPolicy</code> to create a data protection policy for your whole account, it applies to both existing log groups and all log groups that are created later in this account. The account policy is applied to existing log groups with eventual consistency. It might take up to 5 minutes before sensitive data in existing log groups begins to be masked.</p> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>To use the <code>PutAccountPolicy</code> operation, you must be signed on with the <code>logs:PutDataProtectionPolicy</code> and <code>logs:PutAccountPolicy</code> permissions.</p> <p>The <code>PutAccountPolicy</code> operation applies to all log groups in the account. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDataProtectionPolicy.html">PutDataProtectionPolicy</a> to create a data protection policy that applies to just one log group. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutAccountPolicy
		 * @return {PutAccountPolicyResponse} Success
		 */
		PutAccountPolicy(requestBody: PutAccountPolicyRequest): Observable<PutAccountPolicyResponse> {
			return this.http.post<PutAccountPolicyResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutAccountPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a data protection policy for the specified log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data.</p> <important> <p>Sensitive data is detected and masked when it is ingested into the log group. When you set a data protection policy, log events ingested into the log group before that time are not masked.</p> </important> <p>By default, when a user views a log event that includes masked data, the sensitive data is replaced by asterisks. A user who has the <code>logs:Unmask</code> permission can use a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetLogEvents.html">GetLogEvents</a> or <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_FilterLogEvents.html">FilterLogEvents</a> operation with the <code>unmask</code> parameter set to <code>true</code> to view the unmasked log events. Users with the <code>logs:Unmask</code> can also view unmasked data in the CloudWatch Logs console by running a CloudWatch Logs Insights query with the <code>unmask</code> query command.</p> <p>For more information, including a list of types of data that can be audited and masked, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html">Protect sensitive log data with masking</a>.</p> <p>The <code>PutDataProtectionPolicy</code> operation applies to only the specified log group. You can also use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html">PutAccountPolicy</a> to create an account-level data protection policy that applies to all log groups in the account, including both existing log groups and log groups that are created level. If a log group has its own data protection policy and the account also has an account-level data protection policy, then the two policies are cumulative. Any sensitive term specified in either policy is masked.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutDataProtectionPolicy
		 * @return {PutDataProtectionPolicyResponse} Success
		 */
		PutDataProtectionPolicy(requestBody: PutDataProtectionPolicyRequest): Observable<PutDataProtectionPolicyResponse> {
			return this.http.post<PutDataProtectionPolicyResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a destination. This operation is used only to create destinations for cross-account subscriptions.</p> <p>A destination encapsulates a physical resource (such as an Amazon Kinesis stream). With a destination, you can subscribe to a real-time stream of log events for a different account, ingested using <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>Through an access policy, a destination controls what is written to it. By default, <code>PutDestination</code> does not set any access policy with the destination, which means a cross-account user cannot call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutSubscriptionFilter.html">PutSubscriptionFilter</a> against this destination. To enable this, the destination owner must call <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestinationPolicy.html">PutDestinationPolicy</a> after <code>PutDestination</code>.</p> <p>To perform a <code>PutDestination</code> operation, you must also have the <code>iam:PassRole</code> permission.</p>
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
		 * <p>Uploads a batch of log events to the specified log stream.</p> <important> <p>The sequence token is now ignored in <code>PutLogEvents</code> actions. <code>PutLogEvents</code> actions are always accepted and never return <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code> even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code> actions on the same log stream. </p> </important> <p>The batch of events must satisfy the following constraints:</p> <ul> <li> <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of all event messages in UTF-8, plus 26 bytes for each log event.</p> </li> <li> <p>None of the log events in the batch can be more than 2 hours in the future.</p> </li> <li> <p>None of the log events in the batch can be more than 14 days in the past. Also, none of the log events can be from earlier than the retention period of the log group.</p> </li> <li> <p>The log events in the batch must be in chronological order by their timestamp. The timestamp is the time that the event occurred, expressed as the number of milliseconds after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format: <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.) </p> </li> <li> <p>A batch of log events in a single request cannot span more than 24 hours. Otherwise, the operation fails.</p> </li> <li> <p>Each log event can be no larger than 256 KB.</p> </li> <li> <p>The maximum number of log events in a batch is 10,000.</p> </li> <li> <important> <p>The quota of five requests per second per log stream has been removed. Instead, <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota. You can request an increase to the per-second throttling quota by using the Service Quotas service.</p> </important> </li> </ul> <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>
		 * Post #X-Amz-Target=Logs_20140328.PutLogEvents
		 * @return {PutLogEventsResponse} Success
		 */
		PutLogEvents(requestBody: PutLogEventsRequest): Observable<PutLogEventsResponse> {
			return this.http.post<PutLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutLogEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates or updates a metric filter and associates it with the specified log group. With metric filters, you can configure rules to extract metric data from log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>.</p> <p>The maximum number of metric filters that can be associated with a log group is 100.</p> <p>When you create a metric filter, you can also optionally assign a unit and dimensions to the metric that is created.</p> <important> <p>Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as <code>IPAddress</code> or <code>requestID</code> as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. </p> <p>CloudWatch Logs disables a metric filter if it generates 1,000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.</p> <p>You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html"> Creating a Billing Alarm to Monitor Your Estimated Amazon Web Services Charges</a>. </p> </important>
		 * Post #X-Amz-Target=Logs_20140328.PutMetricFilter
		 * @return {void} Success
		 */
		PutMetricFilter(requestBody: PutMetricFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutMetricFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a query definition for CloudWatch Logs Insights. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p> <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request. The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are changed to the values that you specify in your update operation. No current values are retained from the current query definition. For example, imagine updating a current query definition that includes log groups. If you don't specify the <code>logGroupNames</code> parameter in your update operation, the query definition changes to contain no log groups.</p> <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform this operation.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutQueryDefinition
		 * @return {PutQueryDefinitionResponse} Success
		 */
		PutQueryDefinition(requestBody: PutQueryDefinitionRequest): Observable<PutQueryDefinitionResponse> {
			return this.http.post<PutQueryDefinitionResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutQueryDefinition', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates or updates a resource policy allowing other Amazon Web Services services to put log events to this account, such as Amazon Route 53. An account can have up to 10 resource policies per Amazon Web Services Region.
		 * Post #X-Amz-Target=Logs_20140328.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the retention of the specified log group. With a retention policy, you can configure the number of days for which to retain log events in the specified log group.</p> <note> <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention setting. It typically takes up to 72 hours after that before log events are deleted, but in rare situations might take longer.</p> <p>To illustrate, imagine that you change a log group to have a longer retention setting when it contains log events that are past the expiration date, but haven’t been deleted. Those log events will take up to 72 hours to be deleted after the new retention date is reached. To make sure that log data is deleted permanently, keep a log group at its lower retention setting until 72 hours after the previous retention period ends. Alternatively, wait to change the retention setting until you confirm that the earlier log events are deleted. </p> </note>
		 * Post #X-Amz-Target=Logs_20140328.PutRetentionPolicy
		 * @return {void} Success
		 */
		PutRetentionPolicy(requestBody: PutRetentionPolicyRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutRetentionPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates a subscription filter and associates it with the specified log group. With subscription filters, you can subscribe to a real-time stream of log events ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a> and have them delivered to a specific destination. When log events are sent to the receiving service, they are Base64 encoded and compressed with the GZIP format.</p> <p>The following destinations are supported for subscription filters:</p> <ul> <li> <p>An Amazon Kinesis data stream belonging to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>A logical destination created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a> that belongs to a different account, for cross-account delivery. We currently support Kinesis Data Streams and Kinesis Data Firehose as logical destinations.</p> </li> <li> <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> <li> <p>An Lambda function that belongs to the same account as the subscription filter, for same-account delivery.</p> </li> </ul> <p>Each log group can have up to two subscription filters associated with it. If you are updating an existing filter, you must specify the correct name in <code>filterName</code>. </p> <p>To perform a <code>PutSubscriptionFilter</code> operation for any destination except a Lambda function, you must also have the <code>iam:PassRole</code> permission.</p>
		 * Post #X-Amz-Target=Logs_20140328.PutSubscriptionFilter
		 * @return {void} Success
		 */
		PutSubscriptionFilter(requestBody: PutSubscriptionFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.PutSubscriptionFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Schedules a query of a log group using CloudWatch Logs Insights. You specify the log group and time range to query and the query string to use.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html">CloudWatch Logs Insights Query Syntax</a>.</p> <p>After you run a query using <code>StartQuery</code>, the query results are stored by CloudWatch Logs. You can use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_GetQueryResults.html">GetQueryResults</a> to retrieve the results of a query, using the <code>queryId</code> that <code>StartQuery</code> returns. </p> <p>If you have associated a KMS key with the query results in this account, then <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartQuery.html">StartQuery</a> uses that key to encrypt the results when it stores them. If no key is associated with query results, the query results are encrypted with the default CloudWatch Logs encryption method.</p> <p>Queries time out after 60 minutes of runtime. If your queries are timing out, reduce the time range being searched or partition your query into a number of queries.</p> <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account to start a query in a linked source account. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>. For a cross-account <code>StartQuery</code> operation, the query definition must be defined in the monitoring account.</p> <p>You can have up to 30 concurrent CloudWatch Logs insights queries, including queries that have been added to dashboards. </p>
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
		 * <important> <p>The TagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a> instead.</p> </important> <p>Adds or updates the specified tags for the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To remove tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>For more information about tags, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html#log-group-tagging">Tag Log Groups in Amazon CloudWatch Logs</a> in the <i>Amazon CloudWatch Logs User Guide</i>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. For more information about using tags to control access, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Controlling access to Amazon Web Services resources using tags</a>.</p>
		 * Post #X-Amz-Target=Logs_20140328.TagLogGroup
		 * @return {void} Success
		 */
		TagLogGroup(requestBody: TagLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.TagLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified CloudWatch Logs resource. Currently, the only CloudWatch Logs resources that can be tagged are log groups and destinations. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a CloudWatch Logs resource.</p>
		 * Post #X-Amz-Target=Logs_20140328.TagResource
		 * @return {void} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * <important> <p>The UntagLogGroup operation is on the path to deprecation. We recommend that you use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_UntagResource.html">UntagResource</a> instead.</p> </important> <p>Removes the specified tags from the specified log group.</p> <p>To list the tags for a log group, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a>. To add tags, use <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_TagResource.html">TagResource</a>.</p> <p>CloudWatch Logs doesn’t support IAM policies that prevent users from assigning specified tags to log groups using the <code>aws:Resource/<i>key-name</i> </code> or <code>aws:TagKeys</code> condition keys. </p>
		 * Post #X-Amz-Target=Logs_20140328.UntagLogGroup
		 * @return {void} Success
		 */
		UntagLogGroup(requestBody: UntagLogGroupRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.UntagLogGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Post #X-Amz-Target=Logs_20140328.UntagResource
		 * @return {void} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Logs_20140328.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum AssociateKmsKeyX_Amz_Target { 'Logs_20140328.AssociateKmsKey' = 'Logs_20140328.AssociateKmsKey' }

	export enum CancelExportTaskX_Amz_Target { 'Logs_20140328.CancelExportTask' = 'Logs_20140328.CancelExportTask' }

	export enum CreateExportTaskX_Amz_Target { 'Logs_20140328.CreateExportTask' = 'Logs_20140328.CreateExportTask' }

	export enum CreateLogGroupX_Amz_Target { 'Logs_20140328.CreateLogGroup' = 'Logs_20140328.CreateLogGroup' }

	export enum CreateLogStreamX_Amz_Target { 'Logs_20140328.CreateLogStream' = 'Logs_20140328.CreateLogStream' }

	export enum DeleteAccountPolicyX_Amz_Target { 'Logs_20140328.DeleteAccountPolicy' = 'Logs_20140328.DeleteAccountPolicy' }

	export enum DeleteDataProtectionPolicyX_Amz_Target { 'Logs_20140328.DeleteDataProtectionPolicy' = 'Logs_20140328.DeleteDataProtectionPolicy' }

	export enum DeleteDestinationX_Amz_Target { 'Logs_20140328.DeleteDestination' = 'Logs_20140328.DeleteDestination' }

	export enum DeleteLogGroupX_Amz_Target { 'Logs_20140328.DeleteLogGroup' = 'Logs_20140328.DeleteLogGroup' }

	export enum DeleteLogStreamX_Amz_Target { 'Logs_20140328.DeleteLogStream' = 'Logs_20140328.DeleteLogStream' }

	export enum DeleteMetricFilterX_Amz_Target { 'Logs_20140328.DeleteMetricFilter' = 'Logs_20140328.DeleteMetricFilter' }

	export enum DeleteQueryDefinitionX_Amz_Target { 'Logs_20140328.DeleteQueryDefinition' = 'Logs_20140328.DeleteQueryDefinition' }

	export enum DeleteResourcePolicyX_Amz_Target { 'Logs_20140328.DeleteResourcePolicy' = 'Logs_20140328.DeleteResourcePolicy' }

	export enum DeleteRetentionPolicyX_Amz_Target { 'Logs_20140328.DeleteRetentionPolicy' = 'Logs_20140328.DeleteRetentionPolicy' }

	export enum DeleteSubscriptionFilterX_Amz_Target { 'Logs_20140328.DeleteSubscriptionFilter' = 'Logs_20140328.DeleteSubscriptionFilter' }

	export enum DescribeAccountPoliciesX_Amz_Target { 'Logs_20140328.DescribeAccountPolicies' = 'Logs_20140328.DescribeAccountPolicies' }

	export enum DescribeDestinationsX_Amz_Target { 'Logs_20140328.DescribeDestinations' = 'Logs_20140328.DescribeDestinations' }

	export enum DescribeExportTasksX_Amz_Target { 'Logs_20140328.DescribeExportTasks' = 'Logs_20140328.DescribeExportTasks' }

	export enum DescribeLogGroupsX_Amz_Target { 'Logs_20140328.DescribeLogGroups' = 'Logs_20140328.DescribeLogGroups' }

	export enum DescribeLogStreamsX_Amz_Target { 'Logs_20140328.DescribeLogStreams' = 'Logs_20140328.DescribeLogStreams' }

	export enum DescribeMetricFiltersX_Amz_Target { 'Logs_20140328.DescribeMetricFilters' = 'Logs_20140328.DescribeMetricFilters' }

	export enum DescribeQueriesX_Amz_Target { 'Logs_20140328.DescribeQueries' = 'Logs_20140328.DescribeQueries' }

	export enum DescribeQueryDefinitionsX_Amz_Target { 'Logs_20140328.DescribeQueryDefinitions' = 'Logs_20140328.DescribeQueryDefinitions' }

	export enum DescribeResourcePoliciesX_Amz_Target { 'Logs_20140328.DescribeResourcePolicies' = 'Logs_20140328.DescribeResourcePolicies' }

	export enum DescribeSubscriptionFiltersX_Amz_Target { 'Logs_20140328.DescribeSubscriptionFilters' = 'Logs_20140328.DescribeSubscriptionFilters' }

	export enum DisassociateKmsKeyX_Amz_Target { 'Logs_20140328.DisassociateKmsKey' = 'Logs_20140328.DisassociateKmsKey' }

	export enum FilterLogEventsX_Amz_Target { 'Logs_20140328.FilterLogEvents' = 'Logs_20140328.FilterLogEvents' }

	export enum GetDataProtectionPolicyX_Amz_Target { 'Logs_20140328.GetDataProtectionPolicy' = 'Logs_20140328.GetDataProtectionPolicy' }

	export enum GetLogEventsX_Amz_Target { 'Logs_20140328.GetLogEvents' = 'Logs_20140328.GetLogEvents' }

	export enum GetLogGroupFieldsX_Amz_Target { 'Logs_20140328.GetLogGroupFields' = 'Logs_20140328.GetLogGroupFields' }

	export enum GetLogRecordX_Amz_Target { 'Logs_20140328.GetLogRecord' = 'Logs_20140328.GetLogRecord' }

	export enum GetQueryResultsX_Amz_Target { 'Logs_20140328.GetQueryResults' = 'Logs_20140328.GetQueryResults' }

	export enum ListTagsForResourceX_Amz_Target { 'Logs_20140328.ListTagsForResource' = 'Logs_20140328.ListTagsForResource' }

	export enum ListTagsLogGroupX_Amz_Target { 'Logs_20140328.ListTagsLogGroup' = 'Logs_20140328.ListTagsLogGroup' }

	export enum PutAccountPolicyX_Amz_Target { 'Logs_20140328.PutAccountPolicy' = 'Logs_20140328.PutAccountPolicy' }

	export enum PutDataProtectionPolicyX_Amz_Target { 'Logs_20140328.PutDataProtectionPolicy' = 'Logs_20140328.PutDataProtectionPolicy' }

	export enum PutDestinationX_Amz_Target { 'Logs_20140328.PutDestination' = 'Logs_20140328.PutDestination' }

	export enum PutDestinationPolicyX_Amz_Target { 'Logs_20140328.PutDestinationPolicy' = 'Logs_20140328.PutDestinationPolicy' }

	export enum PutLogEventsX_Amz_Target { 'Logs_20140328.PutLogEvents' = 'Logs_20140328.PutLogEvents' }

	export enum PutMetricFilterX_Amz_Target { 'Logs_20140328.PutMetricFilter' = 'Logs_20140328.PutMetricFilter' }

	export enum PutQueryDefinitionX_Amz_Target { 'Logs_20140328.PutQueryDefinition' = 'Logs_20140328.PutQueryDefinition' }

	export enum PutResourcePolicyX_Amz_Target { 'Logs_20140328.PutResourcePolicy' = 'Logs_20140328.PutResourcePolicy' }

	export enum PutRetentionPolicyX_Amz_Target { 'Logs_20140328.PutRetentionPolicy' = 'Logs_20140328.PutRetentionPolicy' }

	export enum PutSubscriptionFilterX_Amz_Target { 'Logs_20140328.PutSubscriptionFilter' = 'Logs_20140328.PutSubscriptionFilter' }

	export enum StartQueryX_Amz_Target { 'Logs_20140328.StartQuery' = 'Logs_20140328.StartQuery' }

	export enum StopQueryX_Amz_Target { 'Logs_20140328.StopQuery' = 'Logs_20140328.StopQuery' }

	export enum TagLogGroupX_Amz_Target { 'Logs_20140328.TagLogGroup' = 'Logs_20140328.TagLogGroup' }

	export enum TagResourceX_Amz_Target { 'Logs_20140328.TagResource' = 'Logs_20140328.TagResource' }

	export enum TestMetricFilterX_Amz_Target { 'Logs_20140328.TestMetricFilter' = 'Logs_20140328.TestMetricFilter' }

	export enum UntagLogGroupX_Amz_Target { 'Logs_20140328.UntagLogGroup' = 'Logs_20140328.UntagLogGroup' }

	export enum UntagResourceX_Amz_Target { 'Logs_20140328.UntagResource' = 'Logs_20140328.UntagResource' }

}

