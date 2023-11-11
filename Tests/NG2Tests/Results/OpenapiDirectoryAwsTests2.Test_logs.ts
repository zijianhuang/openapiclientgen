import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateKmsKeyRequest {
		logGroupName: string;
		kmsKeyId: string;
	}

	export interface InvalidParameterException {
	}

	export interface ResourceNotFoundException {
	}

	export interface OperationAbortedException {
	}

	export interface ServiceUnavailableException {
	}

	export interface CancelExportTaskRequest {
		taskId: string;
	}

	export interface InvalidOperationException {
	}

	export interface CreateExportTaskResponse {
		taskId?: string | null;
	}

	export interface CreateExportTaskRequest {
		taskName?: string | null;
		logGroupName: string;
		logStreamNamePrefix?: string | null;
		from: number;
		to: number;
		destination: string;
		destinationPrefix?: string | null;
	}

	export interface LimitExceededException {
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface CreateLogGroupRequest {
		logGroupName: string;
		kmsKeyId?: string | null;
		tags?: Tags | null;
	}

	export interface Tags {
	}

	export interface CreateLogStreamRequest {
		logGroupName: string;
		logStreamName: string;
	}

	export interface DeleteDestinationRequest {
		destinationName: string;
	}

	export interface DeleteLogGroupRequest {
		logGroupName: string;
	}

	export interface DeleteLogStreamRequest {
		logGroupName: string;
		logStreamName: string;
	}

	export interface DeleteMetricFilterRequest {
		logGroupName: string;
		filterName: string;
	}

	export interface DeleteQueryDefinitionResponse {
		success?: boolean | null;
	}

	export interface DeleteQueryDefinitionRequest {
		queryDefinitionId: string;
	}

	export interface DeleteResourcePolicyRequest {
		policyName?: string | null;
	}

	export interface DeleteRetentionPolicyRequest {
		logGroupName: string;
	}

	export interface DeleteSubscriptionFilterRequest {
		logGroupName: string;
		filterName: string;
	}

	export interface DescribeDestinationsResponse {
		destinations?: Array<Destination> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents a cross-account destination that receives subscription log events. */
	export interface Destination {
		destinationName?: string | null;
		targetArn?: string | null;
		roleArn?: string | null;
		accessPolicy?: string | null;
		arn?: string | null;
		creationTime?: number | null;
	}

	export interface DescribeDestinationsRequest {
		DestinationNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export interface DescribeExportTasksResponse {
		exportTasks?: Array<ExportTask> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents an export task. */
	export interface ExportTask {
		taskId?: string | null;
		taskName?: string | null;
		logGroupName?: string | null;
		from?: number | null;
		to?: number | null;
		destination?: string | null;
		destinationPrefix?: string | null;

		/** Represents the status of an export task. */
		status?: ExportTaskStatus | null;

		/** Represents the status of an export task. */
		executionInfo?: ExportTaskExecutionInfo | null;
	}


	/** Represents the status of an export task. */
	export interface ExportTaskStatus {
		code?: ExportTaskStatusCode | null;
		message?: string | null;
	}

	export enum ExportTaskStatusCode { CANCELLED = 0, COMPLETED = 1, FAILED = 2, PENDING = 3, PENDING_CANCEL = 4, RUNNING = 5 }


	/** Represents the status of an export task. */
	export interface ExportTaskExecutionInfo {
		creationTime?: number | null;
		completionTime?: number | null;
	}

	export interface DescribeExportTasksRequest {
		taskId?: string | null;
		statusCode?: ExportTaskStatusCode | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export interface DescribeLogGroupsResponse {
		logGroups?: Array<LogGroup> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents a log group. */
	export interface LogGroup {
		logGroupName?: string | null;
		creationTime?: number | null;

		/** The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653. */
		retentionInDays?: number | null;
		metricFilterCount?: number | null;
		arn?: string | null;
		storedBytes?: number | null;
		kmsKeyId?: string | null;
	}

	export interface DescribeLogGroupsRequest {
		logGroupNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export interface DescribeLogStreamsResponse {
		logStreams?: Array<LogStream> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents a log stream, which is a sequence of log events from a single emitter of logs. */
	export interface LogStream {
		logStreamName?: string | null;
		creationTime?: number | null;
		firstEventTimestamp?: number | null;
		lastEventTimestamp?: number | null;
		lastIngestionTime?: number | null;
		uploadSequenceToken?: string | null;
		arn?: string | null;
		storedBytes?: number | null;
	}

	export interface DescribeLogStreamsRequest {
		logGroupName: string;
		logStreamNamePrefix?: string | null;
		orderBy?: DescribeLogStreamsRequestOrderBy | null;
		descending?: boolean | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export enum DescribeLogStreamsRequestOrderBy { LogStreamName = 0, LastEventTime = 1 }

	export interface DescribeMetricFiltersResponse {
		metricFilters?: Array<MetricFilter> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Metric filters express how CloudWatch Logs would extract metric observations from ingested log events and transform them into metric data in a CloudWatch metric. */
	export interface MetricFilter {
		filterName?: string | null;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern?: string | null;
		metricTransformations?: Array<MetricTransformation> | null;
		creationTime?: number | null;
		logGroupName?: string | null;
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
		metricNamespace: string;

		/**
		 * The value to publish to the CloudWatch metric. For example, if you're counting the occurrences of a term like "Error", the value is "1" for each occurrence. If you're counting the bytes transferred, the value is the value in the log event.
		 * Required
		 * Max length: 100
		 */
		metricValue: string;
		defaultValue?: number | null;
	}

	export interface DescribeMetricFiltersRequest {
		logGroupName?: string | null;
		filterNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;

		/**
		 * The name of the CloudWatch metric to which the monitored log information should be published. For example, you may publish to a metric called ErrorCount.
		 * Max length: 255
		 * Pattern: [^:*$]*
		 */
		metricName?: string | null;
		metricNamespace?: string | null;
	}

	export interface DescribeQueriesResponse {
		queries?: Array<QueryInfo> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Information about one CloudWatch Logs Insights query that matches the request in a <code>DescribeQueries</code> operation.  */
	export interface QueryInfo {
		queryId?: string | null;
		queryString?: string | null;
		status?: QueryInfoStatus | null;
		createTime?: number | null;
		logGroupName?: string | null;
	}

	export enum QueryInfoStatus { Scheduled = 0, Running = 1, Complete = 2, Failed = 3, Cancelled = 4 }

	export interface DescribeQueriesRequest {
		logGroupName?: string | null;
		status?: QueryInfoStatus | null;
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}

	export interface DescribeQueryDefinitionsResponse {
		queryDefinitions?: Array<QueryDefinition> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}

	export interface QueryDefinition {
		queryDefinitionId?: string | null;
		name?: string | null;
		queryString?: string | null;
		lastModified?: number | null;
		logGroupNames?: Array<string> | null;
	}

	export interface DescribeQueryDefinitionsRequest {
		queryDefinitionNamePrefix?: string | null;
		maxResults?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}

	export interface DescribeResourcePoliciesResponse {
		resourcePolicies?: Array<ResourcePolicy> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** A policy enabling one or more entities to put logs to a log group in this account. */
	export interface ResourcePolicy {
		policyName?: string | null;
		policyDocument?: string | null;
		lastUpdatedTime?: number | null;
	}

	export interface DescribeResourcePoliciesRequest {

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export interface DescribeSubscriptionFiltersResponse {
		subscriptionFilters?: Array<SubscriptionFilter> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents a subscription filter. */
	export interface SubscriptionFilter {
		filterName?: string | null;
		logGroupName?: string | null;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern?: string | null;
		destinationArn?: string | null;
		roleArn?: string | null;

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution?: SubscriptionFilterDistribution | null;
		creationTime?: number | null;
	}

	export enum SubscriptionFilterDistribution { Random = 0, ByLogStream = 1 }

	export interface DescribeSubscriptionFiltersRequest {
		logGroupName: string;
		filterNamePrefix?: string | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
	}

	export interface DisassociateKmsKeyRequest {
		logGroupName: string;
	}

	export interface FilterLogEventsResponse {
		events?: Array<FilteredLogEvent> | null;
		searchedLogStreams?: Array<SearchedLogStream> | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
	}


	/** Represents a matched event. */
	export interface FilteredLogEvent {
		logStreamName?: string | null;
		timestamp?: number | null;
		message?: string | null;
		ingestionTime?: number | null;
		eventId?: string | null;
	}


	/** Represents the search status of a log stream. */
	export interface SearchedLogStream {
		logStreamName?: string | null;
		searchedCompletely?: boolean | null;
	}

	export interface FilterLogEventsRequest {
		logGroupName: string;
		logStreamNames?: Array<string> | null;
		logStreamNamePrefix?: string | null;
		startTime?: number | null;
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
		limit?: number | null;
		interleaved?: boolean | null;
	}

	export interface GetLogEventsResponse {
		events?: Array<OutputLogEvent> | null;

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


	/** Represents a log event. */
	export interface OutputLogEvent {
		timestamp?: number | null;
		message?: string | null;
		ingestionTime?: number | null;
	}

	export interface GetLogEventsRequest {
		logGroupName: string;
		logStreamName: string;
		startTime?: number | null;
		endTime?: number | null;

		/**
		 * The token for the next set of items to return. The token expires after 24 hours.
		 * Min length: 1
		 */
		nextToken?: string | null;
		limit?: number | null;
		startFromHead?: boolean | null;
	}

	export interface GetLogGroupFieldsResponse {
		logGroupFields?: Array<LogGroupField> | null;
	}


	/** The fields contained in log events found by a <code>GetLogGroupFields</code> operation, along with the percentage of queried log events in which each field appears. */
	export interface LogGroupField {
		name?: string | null;
		percent?: number | null;
	}

	export interface GetLogGroupFieldsRequest {
		logGroupName: string;
		time?: number | null;
	}

	export interface GetLogRecordResponse {
		logRecord?: LogRecord | null;
	}

	export interface LogRecord {
	}

	export interface GetLogRecordRequest {
		logRecordPointer: string;
	}

	export interface GetQueryResultsResponse {
		results?: Array<Array<ResultField>> | null;

		/** Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned. */
		statistics?: QueryStatistics | null;
		status?: QueryInfoStatus | null;
	}


	/** <p>Contains one field from one log event returned by a CloudWatch Logs Insights query, along with the value of that field.</p> <p>For more information about the fields that are generated by CloudWatch logs, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_AnalyzeLogData-discoverable-fields.html">Supported Logs and Discovered Fields</a>.</p> */
	export interface ResultField {
		field?: string | null;
		value?: string | null;
	}


	/** Contains the number of log events scanned by the query, the number of log events that matched the query criteria, and the total number of bytes in the log events that were scanned. */
	export interface QueryStatistics {
		recordsMatched?: number | null;
		recordsScanned?: number | null;
		bytesScanned?: number | null;
	}

	export interface GetQueryResultsRequest {
		queryId: string;
	}

	export interface ListTagsLogGroupResponse {
		tags?: Tags | null;
	}

	export interface ListTagsLogGroupRequest {
		logGroupName: string;
	}

	export interface PutDestinationResponse {

		/** Represents a cross-account destination that receives subscription log events. */
		destination?: Destination | null;
	}

	export interface PutDestinationRequest {
		destinationName: string;
		targetArn: string;
		roleArn: string;
	}

	export interface PutDestinationPolicyRequest {
		destinationName: string;
		accessPolicy: string;
	}

	export interface PutLogEventsResponse {
		nextSequenceToken?: string | null;

		/** Represents the rejected events. */
		rejectedLogEventsInfo?: RejectedLogEventsInfo | null;
	}


	/** Represents the rejected events. */
	export interface RejectedLogEventsInfo {
		tooNewLogEventStartIndex?: number | null;
		tooOldLogEventEndIndex?: number | null;
		expiredLogEventEndIndex?: number | null;
	}

	export interface PutLogEventsRequest {
		logGroupName: string;
		logStreamName: string;
		logEvents: Array<InputLogEvent>;
		sequenceToken?: string | null;
	}


	/** Represents a log event, which is a record of activity that was recorded by the application or resource being monitored. */
	export interface InputLogEvent {
		timestamp: number;
		message: string;
	}

	export interface InvalidSequenceTokenException {
	}

	export interface DataAlreadyAcceptedException {
	}

	export interface UnrecognizedClientException {
	}

	export interface PutMetricFilterRequest {
		logGroupName: string;
		filterName: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;
		metricTransformations: Array<MetricTransformation>;
	}

	export interface PutQueryDefinitionResponse {
		queryDefinitionId?: string | null;
	}

	export interface PutQueryDefinitionRequest {
		name: string;
		queryDefinitionId?: string | null;
		logGroupNames?: Array<string> | null;
		queryString: string;
	}

	export interface PutResourcePolicyResponse {

		/** A policy enabling one or more entities to put logs to a log group in this account. */
		resourcePolicy?: ResourcePolicy | null;
	}

	export interface PutResourcePolicyRequest {
		policyName?: string | null;
		policyDocument?: string | null;
	}

	export interface PutRetentionPolicyRequest {
		logGroupName: string;

		/**
		 * The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1827, and 3653.
		 * Required
		 */
		retentionInDays: number;
	}

	export interface PutSubscriptionFilterRequest {
		logGroupName: string;
		filterName: string;

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;
		destinationArn: string;
		roleArn?: string | null;

		/** The method used to distribute log data to the destination, which can be either random or grouped by log stream. */
		distribution?: SubscriptionFilterDistribution | null;
	}

	export interface StartQueryResponse {
		queryId?: string | null;
	}

	export interface StartQueryRequest {
		logGroupName?: string | null;
		logGroupNames?: Array<string> | null;
		startTime: number;
		endTime: number;
		queryString: string;
		limit?: number | null;
	}

	export interface MalformedQueryException {
	}

	export interface StopQueryResponse {
		success?: boolean | null;
	}

	export interface StopQueryRequest {
		queryId: string;
	}

	export interface TagLogGroupRequest {
		logGroupName: string;
		tags: Tags;
	}

	export interface TestMetricFilterResponse {
		matches?: Array<MetricFilterMatchRecord> | null;
	}


	/** Represents a matched event. */
	export interface MetricFilterMatchRecord {
		eventNumber?: number | null;
		eventMessage?: string | null;
		extractedValues?: ExtractedValues | null;
	}

	export interface ExtractedValues {
	}

	export interface TestMetricFilterRequest {

		/**
		 * A symbolic description of how CloudWatch Logs should interpret the data in each log event. For example, a log event may contain timestamps, IP addresses, strings, and so on. You use the filter pattern to specify what to look for in the log event message.
		 * Required
		 * Max length: 1024
		 * Min length: 0
		 */
		filterPattern: string;
		logEventMessages: Array<string>;
	}

	export interface UntagLogGroupRequest {
		logGroupName: string;
		tags: Array<string>;
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
		DescribeDestinations(limit: string, nextToken: string, requestBody: DescribeDestinationsRequest): Observable<DescribeDestinationsResponse> {
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
		DescribeLogGroups(limit: string, nextToken: string, requestBody: DescribeLogGroupsRequest): Observable<DescribeLogGroupsResponse> {
			return this.http.post<DescribeLogGroupsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogGroups?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the log streams for the specified log group. You can list all the log streams or filter the results by prefix. You can also control how the results are ordered.</p> <p>This operation has a limit of five transactions per second, after which transactions are throttled.</p>
		 * Post #X-Amz-Target=Logs_20140328.DescribeLogStreams
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeLogStreamsResponse} Success
		 */
		DescribeLogStreams(limit: string, nextToken: string, requestBody: DescribeLogStreamsRequest): Observable<DescribeLogStreamsResponse> {
			return this.http.post<DescribeLogStreamsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.DescribeLogStreams?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the specified metric filters. You can list all the metric filters or filter the results by log name, prefix, metric name, or metric namespace. The results are ASCII-sorted by filter name.
		 * Post #X-Amz-Target=Logs_20140328.DescribeMetricFilters
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeMetricFiltersResponse} Success
		 */
		DescribeMetricFilters(limit: string, nextToken: string, requestBody: DescribeMetricFiltersRequest): Observable<DescribeMetricFiltersResponse> {
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
		DescribeSubscriptionFilters(limit: string, nextToken: string, requestBody: DescribeSubscriptionFiltersRequest): Observable<DescribeSubscriptionFiltersResponse> {
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
		FilterLogEvents(limit: string, nextToken: string, requestBody: FilterLogEventsRequest): Observable<FilterLogEventsResponse> {
			return this.http.post<FilterLogEventsResponse>(this.baseUri + '#X-Amz-Target=Logs_20140328.FilterLogEvents?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists log events from the specified log stream. You can list all the log events or filter using a time range.</p> <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events). You can get additional log events by specifying one of the tokens in a subsequent call.</p>
		 * Post #X-Amz-Target=Logs_20140328.GetLogEvents
		 * @param {string} limit Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {GetLogEventsResponse} Success
		 */
		GetLogEvents(limit: string, nextToken: string, requestBody: GetLogEventsRequest): Observable<GetLogEventsResponse> {
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

