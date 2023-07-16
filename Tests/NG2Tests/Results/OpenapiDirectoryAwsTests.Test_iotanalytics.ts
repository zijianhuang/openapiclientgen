import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface BatchPutMessageResponse {
		batchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
	}


	/** Contains informations about errors. */
	export interface BatchPutMessageErrorEntry {
		messageId?: string;
		errorCode?: string;
		errorMessage?: string;
	}


	/** Information about a message. */
	export interface Message {
		messageId: string;
		payload: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidRequestException {
	}

	export interface InternalFailureException {
	}

	export interface ServiceUnavailableException {
	}

	export interface ThrottlingException {
	}

	export interface CancelPipelineReprocessingResponse {
	}

	export interface CreateChannelResponse {
		channelName?: string;
		channelArn?: string;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/** How long, in days, message data is kept. */
	export interface RetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}


	/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface ServiceManagedChannelS3Storage {
	}


	/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
	export interface CustomerManagedChannelS3Storage {
		bucket: string;
		keyPrefix?: string;
		roleArn: string;
	}


	/** A set of key/value pairs which are used to manage the resource. */
	export interface Tag {
		key: string;
		value: string;
	}

	export interface ResourceAlreadyExistsException {
	}

	export interface LimitExceededException {
	}

	export interface CreateDatasetResponse {
		datasetName?: string;
		datasetArn?: string;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/** A "DatasetAction" object that specifies how data set contents are automatically created. */
	export interface DatasetAction {
		actionName?: string;

		/** The SQL query to modify the message. */
		queryAction?: SqlQueryDatasetAction;

		/** Information needed to run the "containerAction" to produce data set contents. */
		containerAction?: ContainerDatasetAction;
	}


	/** The SQL query to modify the message. */
	export interface SqlQueryDatasetAction {
		sqlQuery: string;
		filters?: Array<QueryFilter>;
	}


	/** Information which is used to filter message data, to segregate it according to the time frame in which it arrives. */
	export interface QueryFilter {

		/** Used to limit data to that which has arrived since the last execution of the action. */
		deltaTime?: DeltaTime;
	}


	/** Used to limit data to that which has arrived since the last execution of the action. */
	export interface DeltaTime {
		offsetSeconds: number;
		timeExpression: string;
	}


	/** Information needed to run the "containerAction" to produce data set contents. */
	export interface ContainerDatasetAction {
		image: string;
		executionRoleArn: string;

		/**
		 * The configuration of the resource used to execute the "containerAction".
		 * Required
		 */
		resourceConfiguration: ResourceConfiguration;
		variables?: Array<Variable>;
	}


	/** The configuration of the resource used to execute the "containerAction". */
	export interface ResourceConfiguration {
		computeType: ResourceConfigurationComputeType;
		volumeSizeInGB: number;
	}

	export enum ResourceConfigurationComputeType { ACU_1 = 0, ACU_2 = 1 }


	/** An instance of a variable to be passed to the "containerAction" execution. Each variable must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or "outputFileUriValue". */
	export interface Variable {
		name: string;
		stringValue?: string;
		doubleValue?: number;

		/** The data set whose latest contents are used as input to the notebook or application. */
		datasetContentVersionValue?: DatasetContentVersionValue;

		/** The value of the variable as a structure that specifies an output file URI. */
		outputFileUriValue?: OutputFileUriValue;
	}


	/** The data set whose latest contents are used as input to the notebook or application. */
	export interface DatasetContentVersionValue {
		datasetName: string;
	}


	/** The value of the variable as a structure that specifies an output file URI. */
	export interface OutputFileUriValue {
		fileName: string;
	}


	/** The "DatasetTrigger" that specifies when the data set is automatically updated. */
	export interface DatasetTrigger {

		/** The schedule for when to trigger an update. */
		schedule?: Schedule;

		/** Information about the data set whose content generation triggers the new data set content generation. */
		dataset?: TriggeringDataset;
	}


	/** The schedule for when to trigger an update. */
	export interface Schedule {
		expression?: string;
	}


	/** Information about the data set whose content generation triggers the new data set content generation. */
	export interface TriggeringDataset {
		name: string;
	}


	/** When data set contents are created they are delivered to destination specified here. */
	export interface DatasetContentDeliveryRule {
		entryName?: string;

		/**
		 * The destination to which data set contents are delivered.
		 * Required
		 */
		destination: DatasetContentDeliveryDestination;
	}


	/** The destination to which data set contents are delivered. */
	export interface DatasetContentDeliveryDestination {

		/** Configuration information for delivery of data set contents to AWS IoT Events. */
		iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

		/** Configuration information for delivery of data set contents to Amazon S3. */
		s3DestinationConfiguration?: S3DestinationConfiguration;
	}


	/** Configuration information for delivery of data set contents to AWS IoT Events. */
	export interface IotEventsDestinationConfiguration {
		inputName: string;
		roleArn: string;
	}


	/** Configuration information for delivery of data set contents to Amazon S3. */
	export interface S3DestinationConfiguration {
		bucket: string;
		key: string;

		/** Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
		glueConfiguration?: GlueConfiguration;
		roleArn: string;
	}


	/** Configuration information for coordination with the AWS Glue ETL (extract, transform and load) service. */
	export interface GlueConfiguration {
		tableName: string;
		databaseName: string;
	}

	export interface CreateDatasetContentResponse {
		versionId?: string;
	}

	export interface CreateDatastoreResponse {
		datastoreName?: string;
		datastoreArn?: string;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}


	/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface ServiceManagedDatastoreS3Storage {
	}


	/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
	export interface CustomerManagedDatastoreS3Storage {
		bucket: string;
		keyPrefix?: string;
		roleArn: string;
	}

	export interface CreatePipelineResponse {
		pipelineName?: string;
		pipelineArn?: string;
	}


	/** An activity that performs a transformation on a message. */
	export interface PipelineActivity {

		/** The activity that determines the source of the messages to be processed. */
		channel?: ChannelActivity;

		/** An activity that runs a Lambda function to modify the message. */
		lambda?: LambdaActivity;

		/** The 'datastore' activity that specifies where to store the processed data. */
		datastore?: DatastoreActivity;

		/** An activity that adds other attributes based on existing attributes in the message. */
		addAttributes?: AddAttributesActivity;

		/** An activity that removes attributes from a message. */
		removeAttributes?: RemoveAttributesActivity;

		/** Creates a new message using only the specified attributes from the original message. */
		selectAttributes?: SelectAttributesActivity;

		/** An activity that filters a message based on its attributes. */
		filter?: FilterActivity;

		/** An activity that computes an arithmetic expression using the message's attributes. */
		math?: MathActivity;

		/** An activity that adds data from the AWS IoT device registry to your message. */
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

		/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}


	/** The activity that determines the source of the messages to be processed. */
	export interface ChannelActivity {
		name: string;
		channelName: string;
		next?: string;
	}


	/** An activity that runs a Lambda function to modify the message. */
	export interface LambdaActivity {
		name: string;
		lambdaName: string;
		batchSize: number;
		next?: string;
	}


	/** The 'datastore' activity that specifies where to store the processed data. */
	export interface DatastoreActivity {
		name: string;
		datastoreName: string;
	}


	/** An activity that adds other attributes based on existing attributes in the message. */
	export interface AddAttributesActivity {
		name: string;
		attributes: AttributeNameMapping;
		next?: string;
	}

	export interface AttributeNameMapping {
	}


	/** An activity that removes attributes from a message. */
	export interface RemoveAttributesActivity {
		name: string;
		attributes: Array<string>;
		next?: string;
	}


	/** Creates a new message using only the specified attributes from the original message. */
	export interface SelectAttributesActivity {
		name: string;
		attributes: Array<string>;
		next?: string;
	}


	/** An activity that filters a message based on its attributes. */
	export interface FilterActivity {
		name: string;
		filter: string;
		next?: string;
	}


	/** An activity that computes an arithmetic expression using the message's attributes. */
	export interface MathActivity {
		name: string;
		attribute: string;
		math: string;
		next?: string;
	}


	/** An activity that adds data from the AWS IoT device registry to your message. */
	export interface DeviceRegistryEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string;
	}


	/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
	export interface DeviceShadowEnrichActivity {
		name: string;
		attribute: string;
		thingName: string;
		roleArn: string;
		next?: string;
	}

	export interface DescribeChannelResponse {

		/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
		channel?: Channel;

		/** Statistics information about the channel. */
		statistics?: ChannelStatistics;
	}


	/** A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages before publishing the data to a pipeline. */
	export interface Channel {
		name?: string;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		storage?: ChannelStorage;
		arn?: string;
		status?: ChannelStatus;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
	export interface ChannelStorage {

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	export enum ChannelStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }


	/** Statistics information about the channel. */
	export interface ChannelStatistics {

		/** The estimated size of the resource. */
		size?: EstimatedResourceSize;
	}


	/** The estimated size of the resource. */
	export interface EstimatedResourceSize {
		estimatedSizeInBytes?: number;
		estimatedOn?: Date;
	}

	export interface DescribeDatasetResponse {

		/** Information about a data set. */
		dataset?: Dataset;
	}


	/** Information about a data set. */
	export interface Dataset {
		name?: string;
		arn?: string;
		actions?: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}


	/** Information about the versioning of data set contents. */
	export interface VersioningConfiguration {
		unlimited?: boolean;
		maxVersions?: number;
	}

	export interface DescribeDatastoreResponse {

		/** Information about a data store. */
		datastore?: Datastore;

		/** Statistical information about the data store. */
		statistics?: DatastoreStatistics;
	}


	/** Information about a data store. */
	export interface Datastore {
		name?: string;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		storage?: DatastoreStorage;
		arn?: string;
		status?: ChannelStatus;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
	export interface DatastoreStorage {

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}


	/** Statistical information about the data store. */
	export interface DatastoreStatistics {

		/** The estimated size of the resource. */
		size?: EstimatedResourceSize;
	}

	export interface DescribeLoggingOptionsResponse {

		/** Information about logging options. */
		loggingOptions?: LoggingOptions;
	}


	/** Information about logging options. */
	export interface LoggingOptions {
		roleArn: string;
		level: LoggingOptionsLevel;
		enabled: boolean;
	}

	export enum LoggingOptionsLevel { ERROR = 0 }

	export interface DescribePipelineResponse {

		/** Contains information about a pipeline. */
		pipeline?: Pipeline;
	}


	/** Contains information about a pipeline. */
	export interface Pipeline {
		name?: string;
		arn?: string;
		activities?: Array<PipelineActivity>;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Information about pipeline reprocessing. */
	export interface ReprocessingSummary {
		id?: string;
		status?: ReprocessingSummaryStatus;
		creationTime?: Date;
	}

	export enum ReprocessingSummaryStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }

	export interface GetDatasetContentResponse {
		entries?: Array<DatasetEntry>;
		timestamp?: Date;

		/** The state of the data set contents and the reason they are in this state. */
		status?: DatasetContentStatus;
	}


	/** The reference to a data set entry. */
	export interface DatasetEntry {
		entryName?: string;
		dataURI?: string;
	}


	/** The state of the data set contents and the reason they are in this state. */
	export interface DatasetContentStatus {
		state?: DatasetContentStatusState;
		reason?: string;
	}

	export enum DatasetContentStatusState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }

	export interface ListChannelsResponse {
		channelSummaries?: Array<ChannelSummary>;
		nextToken?: string;
	}


	/** A summary of information about a channel. */
	export interface ChannelSummary {
		channelName?: string;

		/** Where channel data is stored. */
		channelStorage?: ChannelStorageSummary;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Where channel data is stored. */
	export interface ChannelStorageSummary {

		/** Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

		/** Used to store channel data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedChannelS3StorageSummary;
	}


	/** Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedChannelS3StorageSummary {
	}


	/** Used to store channel data in an S3 bucket that you manage. */
	export interface CustomerManagedChannelS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}

	export interface ListDatasetContentsResponse {
		datasetContentSummaries?: Array<DatasetContentSummary>;
		nextToken?: string;
	}


	/** Summary information about data set contents. */
	export interface DatasetContentSummary {
		version?: string;

		/** The state of the data set contents and the reason they are in this state. */
		status?: DatasetContentStatus;
		creationTime?: Date;
		scheduleTime?: Date;
		completionTime?: Date;
	}

	export interface ListDatasetsResponse {
		datasetSummaries?: Array<DatasetSummary>;
		nextToken?: string;
	}


	/** A summary of information about a data set. */
	export interface DatasetSummary {
		datasetName?: string;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
		triggers?: Array<DatasetTrigger>;
		actions?: Array<DatasetActionSummary>;
	}


	/** Information about the action which automatically creates the data set's contents. */
	export interface DatasetActionSummary {
		actionName?: string;
		actionType?: DatasetActionSummaryActionType;
	}

	export enum DatasetActionSummaryActionType { QUERY = 0, CONTAINER = 1 }

	export interface ListDatastoresResponse {
		datastoreSummaries?: Array<DatastoreSummary>;
		nextToken?: string;
	}


	/** A summary of information about a data store. */
	export interface DatastoreSummary {
		datastoreName?: string;

		/** Where data store data is stored. */
		datastoreStorage?: DatastoreStorageSummary;
		status?: ChannelStatus;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}


	/** Where data store data is stored. */
	export interface DatastoreStorageSummary {

		/** Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
		serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;

		/** Used to store data store data in an S3 bucket that you manage. */
		customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;
	}


	/** Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service. */
	export interface ServiceManagedDatastoreS3StorageSummary {
	}


	/** Used to store data store data in an S3 bucket that you manage. */
	export interface CustomerManagedDatastoreS3StorageSummary {
		bucket?: string;
		keyPrefix?: string;
		roleArn?: string;
	}

	export interface ListPipelinesResponse {
		pipelineSummaries?: Array<PipelineSummary>;
		nextToken?: string;
	}


	/** A summary of information about a pipeline. */
	export interface PipelineSummary {
		pipelineName?: string;
		reprocessingSummaries?: Array<ReprocessingSummary>;
		creationTime?: Date;
		lastUpdateTime?: Date;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}

	export enum LoggingLevel { ERROR = 0 }

	export interface RunPipelineActivityResponse {
		payloads?: Array<string>;
		logResult?: string;
	}

	export interface SampleChannelDataResponse {
		payloads?: Array<string>;
	}

	export interface StartPipelineReprocessingResponse {
		reprocessingId?: string;
	}

	export interface TagResourceResponse {
	}

	export interface UntagResourceResponse {
	}

	export interface BatchPutMessageRequest {
		channelName: string;
		messages: Array<Message>;
	}

	export interface CancelPipelineReprocessingRequest {
	}

	export enum ComputeType { ACU_1 = 0, ACU_2 = 1 }

	export interface CreateChannelRequest {
		channelName: string;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}

	export interface CreateDatasetContentRequest {
	}

	export interface CreateDatasetRequest {
		datasetName: string;
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
		tags?: Array<Tag>;
	}

	export interface CreateDatastoreRequest {
		datastoreName: string;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
		tags?: Array<Tag>;
	}

	export interface CreatePipelineRequest {
		pipelineName: string;
		pipelineActivities: Array<PipelineActivity>;
		tags?: Array<Tag>;
	}

	export enum DatasetStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

	export enum DatasetActionType { QUERY = 0, CONTAINER = 1 }

	export enum DatasetContentState { CREATING = 0, SUCCEEDED = 1, FAILED = 2 }

	export enum DatastoreStatus { CREATING = 0, ACTIVE = 1, DELETING = 2 }

	export interface DeleteChannelRequest {
	}

	export interface DeleteDatasetContentRequest {
	}

	export interface DeleteDatasetRequest {
	}

	export interface DeleteDatastoreRequest {
	}

	export interface DeletePipelineRequest {
	}

	export interface DescribeChannelRequest {
	}

	export interface DescribeDatasetRequest {
	}

	export interface DescribeDatastoreRequest {
	}

	export interface DescribeLoggingOptionsRequest {
	}

	export interface DescribePipelineRequest {
	}

	export interface GetDatasetContentRequest {
	}

	export interface ListChannelsRequest {
	}

	export interface ListDatasetContentsRequest {
	}

	export interface ListDatasetsRequest {
	}

	export interface ListDatastoresRequest {
	}

	export interface ListPipelinesRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface PutLoggingOptionsRequest {

		/**
		 * Information about logging options.
		 * Required
		 */
		loggingOptions: LoggingOptions;
	}

	export enum ReprocessingStatus { RUNNING = 0, SUCCEEDED = 1, CANCELLED = 2, FAILED = 3 }

	export interface RunPipelineActivityRequest {

		/**
		 * An activity that performs a transformation on a message.
		 * Required
		 */
		pipelineActivity: PipelineActivity;
		payloads: Array<string>;
	}

	export interface SampleChannelDataRequest {
	}

	export interface StartPipelineReprocessingRequest {
		startTime?: Date;
		endTime?: Date;
	}

	export interface TagResourceRequest {
		tags: Array<Tag>;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateChannelRequest {

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: ChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;
	}

	export interface UpdateDatasetRequest {
		actions: Array<DatasetAction>;
		triggers?: Array<DatasetTrigger>;
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: VersioningConfiguration;
	}

	export interface UpdateDatastoreRequest {

		/** How long, in days, message data is kept. */
		retentionPeriod?: RetentionPeriod;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: DatastoreStorage;
	}

	export interface UpdatePipelineRequest {
		pipelineActivities: Array<PipelineActivity>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Sends messages to a channel.
		 * Post messages/batch
		 * @return {BatchPutMessageResponse} Success
		 */
		BatchPutMessage(requestBody: BatchPutMessagePostBody): Observable<BatchPutMessageResponse> {
			return this.http.post<BatchPutMessageResponse>(this.baseUri + 'messages/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancels the reprocessing of data through the pipeline.
		 * Delete pipelines/{pipelineName}/reprocessing/{reprocessingId}
		 * @param {string} pipelineName The name of pipeline for which data reprocessing is canceled.
		 * @param {string} reprocessingId The ID of the reprocessing task (returned by "StartPipelineReprocessing").
		 * @return {CancelPipelineReprocessingResponse} Success
		 */
		CancelPipelineReprocessing(pipelineName: string, reprocessingId: string): Observable<CancelPipelineReprocessingResponse> {
			return this.http.delete<CancelPipelineReprocessingResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing/' + (reprocessingId == null ? '' : encodeURIComponent(reprocessingId)), {});
		}

		/**
		 * Creates a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
		 * Post channels
		 * @return {void} 
		 */
		CreateChannel(requestBody: CreateChannelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'channels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of channels.
		 * Get channels
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListChannelsResponse} Success
		 */
		ListChannels(nextToken: string, maxResults: number): Observable<ListChannelsResponse> {
			return this.http.get<ListChannelsResponse>(this.baseUri + 'channels?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a data set. A data set stores data retrieved from a data store by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application). This operation creates the skeleton of a data set. The data set can be populated manually by calling "CreateDatasetContent" or automatically according to a "trigger" you specify.
		 * Post datasets
		 * @return {void} 
		 */
		CreateDataset(requestBody: CreateDatasetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about data sets.
		 * Get datasets
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(nextToken: string, maxResults: number): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'datasets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates the content of a data set by applying a "queryAction" (a SQL query) or a "containerAction" (executing a containerized application).
		 * Post datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set.
		 * @return {CreateDatasetContentResponse} Success
		 */
		CreateDatasetContent(datasetName: string): Observable<CreateDatasetContentResponse> {
			return this.http.post<CreateDatasetContentResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content', null, {});
		}

		/**
		 * Deletes the content of the specified data set.
		 * Delete datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose content is deleted.
		 * @param {string} versionId The version of the data set whose content is deleted. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {void} 
		 */
		DeleteDatasetContent(datasetName: string, versionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the contents of a data set as pre-signed URIs.
		 * Get datasets/{datasetName}/content
		 * @param {string} datasetName The name of the data set whose contents are retrieved.
		 * @param {string} versionId The version of the data set whose contents are retrieved. You can also use the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.
		 * @return {GetDatasetContentResponse} Success
		 */
		GetDatasetContent(datasetName: string, versionId: string): Observable<GetDatasetContentResponse> {
			return this.http.get<GetDatasetContentResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/content&versionId=' + (versionId == null ? '' : encodeURIComponent(versionId)), {});
		}

		/**
		 * Creates a data store, which is a repository for messages.
		 * Post datastores
		 * @return {void} 
		 */
		CreateDatastore(requestBody: CreateDatastorePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datastores', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of data stores.
		 * Get datastores
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListDatastoresResponse} Success
		 */
		ListDatastores(nextToken: string, maxResults: number): Observable<ListDatastoresResponse> {
			return this.http.get<ListDatastoresResponse>(this.baseUri + 'datastores?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Post pipelines
		 * @return {void} 
		 */
		CreatePipeline(requestBody: CreatePipelinePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pipelines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of pipelines.
		 * Get pipelines
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults <p>The maximum number of results to return in this request.</p> <p>The default value is 100.</p>
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(nextToken: string, maxResults: number): Observable<ListPipelinesResponse> {
			return this.http.get<ListPipelinesResponse>(this.baseUri + 'pipelines?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes the specified channel.
		 * Delete channels/{channelName}
		 * @param {string} channelName The name of the channel to delete.
		 * @return {void} 
		 */
		DeleteChannel(channelName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a channel.
		 * Get channels/{channelName}
		 * @param {string} channelName The name of the channel whose information is retrieved.
		 * @param {boolean} includeStatistics If true, additional statistical information about the channel is included in the response. This feature cannot be used with a channel whose S3 storage is customer-managed.
		 * @return {DescribeChannelResponse} Success
		 */
		DescribeChannel(channelName: string, includeStatistics: boolean): Observable<DescribeChannelResponse> {
			return this.http.get<DescribeChannelResponse>(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Updates the settings of a channel.
		 * Put channels/{channelName}
		 * @param {string} channelName The name of the channel to be updated.
		 * @return {void} Success
		 */
		UpdateChannel(channelName: string, requestBody: UpdateChannelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified data set.</p> <p>You do not have to delete the content of the data set before you perform this operation.</p>
		 * Delete datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to delete.
		 * @return {void} 
		 */
		DeleteDataset(datasetName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a data set.
		 * Get datasets/{datasetName}
		 * @param {string} datasetName The name of the data set whose information is retrieved.
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(datasetName: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), {});
		}

		/**
		 * Updates the settings of a data set.
		 * Put datasets/{datasetName}
		 * @param {string} datasetName The name of the data set to update.
		 * @return {void} Success
		 */
		UpdateDataset(datasetName: string, requestBody: UpdateDatasetPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified data store.
		 * Delete datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to delete.
		 * @return {void} 
		 */
		DeleteDatastore(datastoreName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a data store.
		 * Get datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store
		 * @param {boolean} includeStatistics If true, additional statistical information about the data store is included in the response. This feature cannot be used with a data store whose S3 storage is customer-managed.
		 * @return {DescribeDatastoreResponse} Success
		 */
		DescribeDatastore(datastoreName: string, includeStatistics: boolean): Observable<DescribeDatastoreResponse> {
			return this.http.get<DescribeDatastoreResponse>(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)) + '&includeStatistics=' + includeStatistics, {});
		}

		/**
		 * Updates the settings of a data store.
		 * Put datastores/{datastoreName}
		 * @param {string} datastoreName The name of the data store to be updated.
		 * @return {void} Success
		 */
		UpdateDatastore(datastoreName: string, requestBody: UpdateDatastorePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datastores/' + (datastoreName == null ? '' : encodeURIComponent(datastoreName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified pipeline.
		 * Delete pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to delete.
		 * @return {void} 
		 */
		DeletePipeline(pipelineName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a pipeline.
		 * Get pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline whose information is retrieved.
		 * @return {DescribePipelineResponse} Success
		 */
		DescribePipeline(pipelineName: string): Observable<DescribePipelineResponse> {
			return this.http.get<DescribePipelineResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), {});
		}

		/**
		 * Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
		 * Put pipelines/{pipelineName}
		 * @param {string} pipelineName The name of the pipeline to update.
		 * @return {void} Success
		 */
		UpdatePipeline(pipelineName: string, requestBody: UpdatePipelinePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the current settings of the AWS IoT Analytics logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * <p>Sets or updates the AWS IoT Analytics logging options.</p> <p>Note that if you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy) it takes up to 5 minutes for that change to take effect. </p>
		 * Put logging
		 * @return {void} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about data set contents that have been created.
		 * Get datasets/{datasetName}/contents
		 * @param {string} datasetName The name of the data set whose contents information you want to list.
		 * @param {string} nextToken The token for the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {Date} scheduledOnOrAfter A filter to limit results to those data set contents whose creation is scheduled on or after the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @param {Date} scheduledBefore A filter to limit results to those data set contents whose creation is scheduled before the given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)
		 * @return {ListDatasetContentsResponse} Success
		 */
		ListDatasetContents(datasetName: string, nextToken: string, maxResults: number, scheduledOnOrAfter: Date, scheduledBefore: Date): Observable<ListDatasetContentsResponse> {
			return this.http.get<ListDatasetContentsResponse>(this.baseUri + 'datasets/' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '/contents&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&scheduledOnOrAfter=' + scheduledOnOrAfter.toISOString() + '&scheduledBefore=' + scheduledBefore.toISOString(), {});
		}

		/**
		 * Lists the tags (metadata) which you have assigned to the resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to list.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The ARN of the resource whose tags you want to modify.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Simulates the results of running a pipeline activity on a message payload.
		 * Post pipelineactivities/run
		 * @return {RunPipelineActivityResponse} Success
		 */
		RunPipelineActivity(requestBody: RunPipelineActivityPostBody): Observable<RunPipelineActivityResponse> {
			return this.http.post<RunPipelineActivityResponse>(this.baseUri + 'pipelineactivities/run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
		 * Get channels/{channelName}/sample
		 * @param {string} channelName The name of the channel whose message samples are retrieved.
		 * @param {number} maxMessages The number of sample messages to be retrieved. The limit is 10, the default is also 10.
		 * @param {Date} startTime The start of the time window from which sample messages are retrieved.
		 * @param {Date} endTime The end of the time window from which sample messages are retrieved.
		 * @return {SampleChannelDataResponse} Success
		 */
		SampleChannelData(channelName: string, maxMessages: number, startTime: Date, endTime: Date): Observable<SampleChannelDataResponse> {
			return this.http.get<SampleChannelDataResponse>(this.baseUri + 'channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '/sample&maxMessages=' + maxMessages + '&startTime=' + startTime.toISOString() + '&endTime=' + endTime.toISOString(), {});
		}

		/**
		 * Starts the reprocessing of raw message data through the pipeline.
		 * Post pipelines/{pipelineName}/reprocessing
		 * @param {string} pipelineName The name of the pipeline on which to start reprocessing.
		 * @return {StartPipelineReprocessingResponse} Success
		 */
		StartPipelineReprocessing(pipelineName: string, requestBody: StartPipelineReprocessingPostBody): Observable<StartPipelineReprocessingResponse> {
			return this.http.post<StartPipelineReprocessingResponse>(this.baseUri + 'pipelines/' + (pipelineName == null ? '' : encodeURIComponent(pipelineName)) + '/reprocessing', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the given tags (metadata) from the resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The ARN of the resource whose tags you want to remove.
		 * @param {Array<string>} tagKeys The keys of those tags which you want to remove.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface BatchPutMessagePostBody {

		/**
		 * The name of the channel where the messages are sent.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/**
		 * <p>The list of messages to be sent. Each message has format: '{ "messageId": "string", "payload": "string"}'.</p> <p>Note that the field names of message payloads (data) that you send to AWS IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_); no other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be greater than 255 characters.</p> </li> <li> <p>Are case-insensitive. (Fields named "foo" and "FOO" in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>
		 * Required
		 */
		messages: Array<Message>;
	}

	export interface CreateChannelPostBody {

		/**
		 * The name of the channel.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		channelName: string;

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: CreateChannelPostBodyChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateChannelPostBodyRetentionPeriod;

		/**
		 * Metadata which can be used to manage the channel.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreateChannelPostBodyChannelStorage {

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	export interface CreateChannelPostBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface CreateDatasetPostBody {

		/**
		 * The name of the data set.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datasetName: string;

		/**
		 * A list of actions that create the data set contents.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of triggers. A trigger causes data set contents to be populated at a specified time interval or when another data set's contents are created. The list of triggers can be empty or contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatasetPostBodyRetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: CreateDatasetPostBodyVersioningConfiguration;

		/**
		 * Metadata which can be used to manage the data set.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreateDatasetPostBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface CreateDatasetPostBodyVersioningConfiguration {
		unlimited?: boolean;
		maxVersions?: number;
	}

	export interface CreateDatastorePostBody {

		/**
		 * The name of the data store.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		datastoreName: string;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: CreateDatastorePostBodyDatastoreStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: CreateDatastorePostBodyRetentionPeriod;

		/**
		 * Metadata which can be used to manage the data store.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface CreateDatastorePostBodyDatastoreStorage {

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}

	export interface CreateDatastorePostBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface CreatePipelinePostBody {

		/**
		 * The name of the pipeline.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: ^[a-zA-Z0-9_]+$
		 */
		pipelineName: string;

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;

		/**
		 * Metadata which can be used to manage the pipeline.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags?: Array<Tag>;
	}

	export interface UpdateChannelPutBody {

		/** Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation of the channel. */
		channelStorage?: UpdateChannelPutBodyChannelStorage;

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateChannelPutBodyRetentionPeriod;
	}

	export interface UpdateChannelPutBodyChannelStorage {

		/** Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		serviceManagedS3?: ServiceManagedChannelS3Storage;

		/** Use this to store channel data in an S3 bucket that you manage. If customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the channel. */
		customerManagedS3?: CustomerManagedChannelS3Storage;
	}

	export interface UpdateChannelPutBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface UpdateDatasetPutBody {

		/**
		 * A list of "DatasetAction" objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		actions: Array<DatasetAction>;

		/**
		 * A list of "DatasetTrigger" objects. The list can be empty or can contain up to five <b>DataSetTrigger</b> objects.
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		triggers?: Array<DatasetTrigger>;

		/**
		 * When data set contents are created they are delivered to destinations specified here.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateDatasetPutBodyRetentionPeriod;

		/** Information about the versioning of data set contents. */
		versioningConfiguration?: UpdateDatasetPutBodyVersioningConfiguration;
	}

	export interface UpdateDatasetPutBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface UpdateDatasetPutBodyVersioningConfiguration {
		unlimited?: boolean;
		maxVersions?: number;
	}

	export interface UpdateDatastorePutBody {

		/** How long, in days, message data is kept. */
		retentionPeriod?: UpdateDatastorePutBodyRetentionPeriod;

		/** Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3" storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data store is created. */
		datastoreStorage?: UpdateDatastorePutBodyDatastoreStorage;
	}

	export interface UpdateDatastorePutBodyRetentionPeriod {
		unlimited?: boolean;
		numberOfDays?: number;
	}

	export interface UpdateDatastorePutBodyDatastoreStorage {

		/** Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		serviceManagedS3?: ServiceManagedDatastoreS3Storage;

		/** Use this to store data store data in an S3 bucket that you manage. When customer managed storage is selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed S3 storage cannot be changed after creation of the data store. */
		customerManagedS3?: CustomerManagedDatastoreS3Storage;
	}

	export interface UpdatePipelinePutBody {

		/**
		 * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages, such as removing, renaming or adding message attributes; filtering messages based on attribute values; invoking your Lambda functions on messages for advanced processing; or performing mathematical transformations to normalize device data.</p> <p>The list can be 2-25 <b>PipelineActivity</b> objects and must contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must contain only one activity, for example:</p> <p> <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ... ]</code> </p>
		 * Required
		 * Minimum items: 1
		 * Maximum items: 25
		 */
		pipelineActivities: Array<PipelineActivity>;
	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * Information about logging options.
		 * Required
		 */
		loggingOptions: PutLoggingOptionsPutBodyLoggingOptions;
	}

	export interface PutLoggingOptionsPutBodyLoggingOptions {
		roleArn?: string;
		level?: LoggingOptionsLevel;
		enabled?: boolean;
	}

	export interface TagResourcePostBody {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		tags: Array<Tag>;
	}

	export interface RunPipelineActivityPostBody {

		/**
		 * An activity that performs a transformation on a message.
		 * Required
		 */
		pipelineActivity: RunPipelineActivityPostBodyPipelineActivity;

		/**
		 * The sample message payloads on which the pipeline activity is run.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		payloads: Array<string>;
	}

	export interface RunPipelineActivityPostBodyPipelineActivity {

		/** The activity that determines the source of the messages to be processed. */
		channel?: ChannelActivity;

		/** An activity that runs a Lambda function to modify the message. */
		lambda?: LambdaActivity;

		/** The 'datastore' activity that specifies where to store the processed data. */
		datastore?: DatastoreActivity;

		/** An activity that adds other attributes based on existing attributes in the message. */
		addAttributes?: AddAttributesActivity;

		/** An activity that removes attributes from a message. */
		removeAttributes?: RemoveAttributesActivity;

		/** Creates a new message using only the specified attributes from the original message. */
		selectAttributes?: SelectAttributesActivity;

		/** An activity that filters a message based on its attributes. */
		filter?: FilterActivity;

		/** An activity that computes an arithmetic expression using the message's attributes. */
		math?: MathActivity;

		/** An activity that adds data from the AWS IoT device registry to your message. */
		deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

		/** An activity that adds information from the AWS IoT Device Shadows service to a message. */
		deviceShadowEnrich?: DeviceShadowEnrichActivity;
	}

	export interface StartPipelineReprocessingPostBody {

		/** The start time (inclusive) of raw message data that is reprocessed. */
		startTime?: Date;

		/** The end time (exclusive) of raw message data that is reprocessed. */
		endTime?: Date;
	}

}

