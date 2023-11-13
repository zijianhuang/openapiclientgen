import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AssociateConfigurationItemsToApplicationResponse {
	}

	export interface AssociateConfigurationItemsToApplicationRequest {
		applicationConfigurationId: string;
		configurationIds: Array<string>;
	}

	export interface AuthorizationErrorException {
	}

	export interface InvalidParameterException {
	}

	export interface InvalidParameterValueException {
	}

	export interface ServerInternalErrorException {
	}

	export interface HomeRegionNotSetException {
	}

	export interface BatchDeleteImportDataResponse {
		errors?: Array<BatchDeleteImportDataError> | null;
	}


	/** Error messages returned for each import task that you deleted as a response for this command. */
	export interface BatchDeleteImportDataError {
		importTaskId?: string | null;
		errorCode?: BatchDeleteImportDataErrorErrorCode | null;
		errorDescription?: string | null;
	}

	export enum BatchDeleteImportDataErrorErrorCode { NOT_FOUND = 0, INTERNAL_SERVER_ERROR = 1, OVER_LIMIT = 2 }

	export interface BatchDeleteImportDataRequest {
		importTaskIds: Array<string>;
	}

	export interface CreateApplicationResponse {
		configurationId?: string | null;
	}

	export interface CreateApplicationRequest {
		name: string;
		description?: string | null;
	}

	export interface CreateTagsResponse {
	}

	export interface CreateTagsRequest {
		configurationIds: Array<string>;
		tags: Array<Tag>;
	}


	/** Metadata that help you categorize IT assets. */
	export interface Tag {
		key: string;
		value: string;
	}

	export interface ResourceNotFoundException {
	}

	export interface DeleteApplicationsResponse {
	}

	export interface DeleteApplicationsRequest {
		configurationIds: Array<string>;
	}

	export interface DeleteTagsResponse {
	}

	export interface DeleteTagsRequest {
		configurationIds: Array<string>;
		tags?: Array<Tag> | null;
	}

	export interface DescribeAgentsResponse {
		agentsInfo?: Array<AgentInfo> | null;
		nextToken?: string | null;
	}


	/** Information about agents or connectors associated with the user’s AWS account. Information includes agent or connector IDs, IP addresses, media access control (MAC) addresses, agent or connector health, hostname where the agent or connector resides, and agent version for each agent. */
	export interface AgentInfo {
		agentId?: string | null;
		hostName?: string | null;
		agentNetworkInfoList?: Array<AgentNetworkInfo> | null;
		connectorId?: string | null;
		version?: string | null;
		health?: AgentInfoHealth | null;
		lastHealthPingTime?: string | null;
		collectionStatus?: string | null;
		agentType?: string | null;
		registeredTime?: string | null;
	}


	/** Network details about the host where the agent/connector resides. */
	export interface AgentNetworkInfo {
		ipAddress?: string | null;
		macAddress?: string | null;
	}

	export enum AgentInfoHealth { HEALTHY = 0, UNHEALTHY = 1, RUNNING = 2, UNKNOWN = 3, BLACKLISTED = 4, SHUTDOWN = 5 }

	export interface DescribeAgentsRequest {
		agentIds?: Array<string> | null;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p> */
	export interface Filter {
		name: string;
		values: Array<string>;
		condition: string;
	}

	export interface DescribeConfigurationsResponse {
		configurations?: Array<DescribeConfigurationsAttribute> | null;
	}

	export interface DescribeConfigurationsAttribute {
	}

	export interface DescribeConfigurationsRequest {
		configurationIds: Array<string>;
	}

	export interface DescribeContinuousExportsResponse {
		descriptions?: Array<ContinuousExportDescription> | null;
		nextToken?: string | null;
	}


	/** A list of continuous export descriptions. */
	export interface ContinuousExportDescription {
		exportId?: string | null;
		status?: ContinuousExportDescriptionStatus | null;
		statusDetail?: string | null;
		s3Bucket?: string | null;
		startTime?: Date | null;
		stopTime?: Date | null;
		dataSource?: ContinuousExportDescriptionDataSource | null;
		schemaStorageConfig?: SchemaStorageConfig | null;
	}

	export enum ContinuousExportDescriptionStatus { START_IN_PROGRESS = 0, START_FAILED = 1, ACTIVE = 2, ERROR = 3, STOP_IN_PROGRESS = 4, STOP_FAILED = 5, INACTIVE = 6 }

	export enum ContinuousExportDescriptionDataSource { AGENT = 0 }

	export interface SchemaStorageConfig {
	}

	export interface DescribeContinuousExportsRequest {
		exportIds?: Array<string> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface OperationNotPermittedException {
	}

	export interface DescribeExportConfigurationsResponse {
		exportsInfo?: Array<ExportInfo> | null;
		nextToken?: string | null;
	}


	/** Information regarding the export status of discovered data. The value is an array of objects. */
	export interface ExportInfo {
		exportId: string;
		exportStatus: ExportInfoExportStatus;
		statusMessage: string;
		configurationsDownloadUrl?: string | null;
		exportRequestTime: Date;
		isTruncated?: boolean | null;
		requestedStartTime?: Date | null;
		requestedEndTime?: Date | null;
	}

	export enum ExportInfoExportStatus { FAILED = 0, SUCCEEDED = 1, IN_PROGRESS = 2 }

	export interface DescribeExportConfigurationsRequest {
		exportIds?: Array<string> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface DescribeExportTasksResponse {
		exportsInfo?: Array<ExportInfo> | null;
		nextToken?: string | null;
	}

	export interface DescribeExportTasksRequest {
		exportIds?: Array<string> | null;
		filters?: Array<ExportFilter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action. */
	export interface ExportFilter {
		name: string;
		values: Array<string>;
		condition: string;
	}

	export interface DescribeImportTasksResponse {
		nextToken?: string | null;
		tasks?: Array<ImportTask> | null;
	}


	/** An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
	export interface ImportTask {
		importTaskId?: string | null;
		clientRequestToken?: string | null;
		name?: string | null;
		importUrl?: string | null;
		status?: ImportTaskStatus | null;
		importRequestTime?: Date | null;
		importCompletionTime?: Date | null;
		importDeletedTime?: Date | null;
		serverImportSuccess?: number | null;
		serverImportFailure?: number | null;
		applicationImportSuccess?: number | null;
		applicationImportFailure?: number | null;
		errorsAndFailedEntriesZip?: string | null;
	}

	export enum ImportTaskStatus { IMPORT_IN_PROGRESS = 0, IMPORT_COMPLETE = 1, IMPORT_COMPLETE_WITH_ERRORS = 2, IMPORT_FAILED = 3, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = 4, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = 5, DELETE_IN_PROGRESS = 6, DELETE_COMPLETE = 7, DELETE_FAILED = 8, DELETE_FAILED_LIMIT_EXCEEDED = 9, INTERNAL_ERROR = 10 }

	export interface DescribeImportTasksRequest {
		filters?: Array<ImportTaskFilter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note> */
	export interface ImportTaskFilter {
		name?: ImportTaskFilterName | null;
		values?: Array<string> | null;
	}

	export enum ImportTaskFilterName { IMPORT_TASK_ID = 0, STATUS = 1, NAME = 2 }

	export interface DescribeTagsResponse {
		tags?: Array<ConfigurationTag> | null;
		nextToken?: string | null;
	}


	/** Tags for a configuration item. Tags are metadata that help you categorize IT assets. */
	export interface ConfigurationTag {
		configurationType?: ConfigurationTagConfigurationType | null;
		configurationId?: string | null;
		key?: string | null;
		value?: string | null;
		timeOfCreation?: Date | null;
	}

	export enum ConfigurationTagConfigurationType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }

	export interface DescribeTagsRequest {
		filters?: Array<TagFilter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}


	/** The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>. */
	export interface TagFilter {
		name: string;
		values: Array<string>;
	}

	export interface DisassociateConfigurationItemsFromApplicationResponse {
	}

	export interface DisassociateConfigurationItemsFromApplicationRequest {
		applicationConfigurationId: string;
		configurationIds: Array<string>;
	}

	export interface ExportConfigurationsResponse {
		exportId?: string | null;
	}

	export interface GetDiscoverySummaryResponse {
		servers?: number | null;
		applications?: number | null;
		serversMappedToApplications?: number | null;
		serversMappedtoTags?: number | null;

		/** Inventory data for installed discovery agents. */
		agentSummary?: CustomerAgentInfo | null;

		/** Inventory data for installed discovery connectors. */
		connectorSummary?: CustomerConnectorInfo | null;
	}


	/** Inventory data for installed discovery agents. */
	export interface CustomerAgentInfo {
		activeAgents: number;
		healthyAgents: number;
		blackListedAgents: number;
		shutdownAgents: number;
		unhealthyAgents: number;
		totalAgents: number;
		unknownAgents: number;
	}


	/** Inventory data for installed discovery connectors. */
	export interface CustomerConnectorInfo {
		activeConnectors: number;
		healthyConnectors: number;
		blackListedConnectors: number;
		shutdownConnectors: number;
		unhealthyConnectors: number;
		totalConnectors: number;
		unknownConnectors: number;
	}

	export interface GetDiscoverySummaryRequest {
	}

	export interface ListConfigurationsResponse {
		configurations?: Array<Configuration> | null;
		nextToken?: string | null;
	}

	export interface Configuration {
	}

	export interface ListConfigurationsRequest {
		configurationType: ConfigurationTagConfigurationType;
		filters?: Array<Filter> | null;
		maxResults?: number | null;
		nextToken?: string | null;
		orderBy?: Array<OrderByElement> | null;
	}


	/** A field and direction for ordered output. */
	export interface OrderByElement {
		fieldName: string;
		sortOrder?: OrderByElementSortOrder | null;
	}

	export enum OrderByElementSortOrder { ASC = 0, DESC = 1 }

	export interface ListServerNeighborsResponse {
		neighbors: Array<NeighborConnectionDetail>;
		nextToken?: string | null;
		knownDependencyCount?: number | null;
	}


	/** Details about neighboring servers. */
	export interface NeighborConnectionDetail {
		sourceServerId: string;
		destinationServerId: string;
		destinationPort?: number | null;
		transportProtocol?: string | null;
		connectionsCount: number;
	}

	export interface ListServerNeighborsRequest {
		configurationId: string;
		portInformationNeeded?: boolean | null;
		neighborConfigurationIds?: Array<string> | null;
		maxResults?: number | null;
		nextToken?: string | null;
	}

	export interface StartContinuousExportResponse {
		exportId?: string | null;
		s3Bucket?: string | null;
		startTime?: Date | null;
		dataSource?: ContinuousExportDescriptionDataSource | null;
		schemaStorageConfig?: SchemaStorageConfig | null;
	}

	export interface StartContinuousExportRequest {
	}

	export interface ConflictErrorException {
	}

	export interface ResourceInUseException {
	}

	export interface StartDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus> | null;
	}


	/** Information about agents or connectors that were instructed to start collecting data. Information includes the agent/connector ID, a description of the operation, and whether the agent/connector configuration was updated. */
	export interface AgentConfigurationStatus {
		agentId?: string | null;
		operationSucceeded?: boolean | null;
		description?: string | null;
	}

	export interface StartDataCollectionByAgentIdsRequest {
		agentIds: Array<string>;
	}

	export interface StartExportTaskResponse {
		exportId?: string | null;
	}

	export interface StartExportTaskRequest {
		exportDataFormat?: Array<ExportDataFormat> | null;
		filters?: Array<ExportFilter> | null;
		startTime?: Date | null;
		endTime?: Date | null;
	}

	export enum ExportDataFormat { CSV = 0, GRAPHML = 1 }

	export interface StartImportTaskResponse {

		/** An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
		task?: ImportTask | null;
	}

	export interface StartImportTaskRequest {
		clientRequestToken?: string | null;
		name: string;
		importUrl: string;
	}

	export interface StopContinuousExportResponse {
		startTime?: Date | null;
		stopTime?: Date | null;
	}

	export interface StopContinuousExportRequest {
		exportId: string;
	}

	export interface StopDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus> | null;
	}

	export interface StopDataCollectionByAgentIdsRequest {
		agentIds: Array<string>;
	}

	export interface UpdateApplicationResponse {
	}

	export interface UpdateApplicationRequest {
		configurationId: string;
		name?: string | null;
		description?: string | null;
	}

	export enum AgentStatus { HEALTHY = 0, UNHEALTHY = 1, RUNNING = 2, UNKNOWN = 3, BLACKLISTED = 4, SHUTDOWN = 5 }

	export enum BatchDeleteImportDataErrorCode { NOT_FOUND = 0, INTERNAL_SERVER_ERROR = 1, OVER_LIMIT = 2 }

	export enum ConfigurationItemType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }

	export enum ContinuousExportStatus { START_IN_PROGRESS = 0, START_FAILED = 1, ACTIVE = 2, ERROR = 3, STOP_IN_PROGRESS = 4, STOP_FAILED = 5, INACTIVE = 6 }

	export enum DataSource { AGENT = 0 }

	export enum ExportStatus { FAILED = 0, SUCCEEDED = 1, IN_PROGRESS = 2 }

	export enum ImportStatus { IMPORT_IN_PROGRESS = 0, IMPORT_COMPLETE = 1, IMPORT_COMPLETE_WITH_ERRORS = 2, IMPORT_FAILED = 3, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = 4, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = 5, DELETE_IN_PROGRESS = 6, DELETE_COMPLETE = 7, DELETE_FAILED = 8, DELETE_FAILED_LIMIT_EXCEEDED = 9, INTERNAL_ERROR = 10 }

	export enum OrderString { ASC = 0, DESC = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates one or more configuration items with an application.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication
		 * @return {AssociateConfigurationItemsToApplicationResponse} Success
		 */
		AssociateConfigurationItemsToApplication(requestBody: AssociateConfigurationItemsToApplicationRequest): Observable<AssociateConfigurationItemsToApplicationResponse> {
			return this.http.post<AssociateConfigurationItemsToApplicationResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>AWS Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData
		 * @return {BatchDeleteImportDataResponse} Success
		 */
		BatchDeleteImportData(requestBody: BatchDeleteImportDataRequest): Observable<BatchDeleteImportDataResponse> {
			return this.http.post<BatchDeleteImportDataResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an application with the given name and description.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationRequest): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags
		 * @return {CreateTagsResponse} Success
		 */
		CreateTags(requestBody: CreateTagsRequest): Observable<CreateTagsResponse> {
			return this.http.post<CreateTagsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a list of applications and their associations with configuration items.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications
		 * @return {DeleteApplicationsResponse} Success
		 */
		DeleteApplications(requestBody: DeleteApplicationsRequest): Observable<DeleteApplicationsResponse> {
			return this.http.post<DeleteApplicationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags
		 * @return {DeleteTagsResponse} Success
		 */
		DeleteTags(requestBody: DeleteTagsRequest): Observable<DeleteTagsResponse> {
			return this.http.post<DeleteTagsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents
		 * @return {DescribeAgentsResponse} Success
		 */
		DescribeAgents(requestBody: DescribeAgentsRequest): Observable<DescribeAgentsResponse> {
			return this.http.post<DescribeAgentsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations
		 * @return {DescribeConfigurationsResponse} Success
		 */
		DescribeConfigurations(requestBody: DescribeConfigurationsRequest): Observable<DescribeConfigurationsResponse> {
			return this.http.post<DescribeConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeContinuousExportsResponse} Success
		 */
		DescribeContinuousExports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeContinuousExportsRequest): Observable<DescribeContinuousExportsResponse> {
			return this.http.post<DescribeContinuousExportsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations
		 * @return {DescribeExportConfigurationsResponse} Success
		 */
		DescribeExportConfigurations(requestBody: DescribeExportConfigurationsRequest): Observable<DescribeExportConfigurationsResponse> {
			return this.http.post<DescribeExportConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks
		 * @return {DescribeExportTasksResponse} Success
		 */
		DescribeExportTasks(requestBody: DescribeExportTasksRequest): Observable<DescribeExportTasksResponse> {
			return this.http.post<DescribeExportTasksResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeImportTasksResponse} Success
		 */
		DescribeImportTasks(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeImportTasksRequest): Observable<DescribeImportTasksResponse> {
			return this.http.post<DescribeImportTasksResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags
		 * @return {DescribeTagsResponse} Success
		 */
		DescribeTags(requestBody: DescribeTagsRequest): Observable<DescribeTagsResponse> {
			return this.http.post<DescribeTagsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates one or more configuration items from an application.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication
		 * @return {DisassociateConfigurationItemsFromApplicationResponse} Success
		 */
		DisassociateConfigurationItemsFromApplication(requestBody: DisassociateConfigurationItemsFromApplicationRequest): Observable<DisassociateConfigurationItemsFromApplicationResponse> {
			return this.http.post<DisassociateConfigurationItemsFromApplicationResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations
		 * @return {ExportConfigurationsResponse} Success
		 */
		ExportConfigurations(): Observable<ExportConfigurationsResponse> {
			return this.http.post<ExportConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations', null, {});
		}

		/**
		 * <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary
		 * @return {GetDiscoverySummaryResponse} Success
		 */
		GetDiscoverySummary(requestBody: GetDiscoverySummaryRequest): Observable<GetDiscoverySummaryResponse> {
			return this.http.post<GetDiscoverySummaryResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations
		 * @return {ListConfigurationsResponse} Success
		 */
		ListConfigurations(requestBody: ListConfigurationsRequest): Observable<ListConfigurationsResponse> {
			return this.http.post<ListConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of servers that are one network hop away from a specified server.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors
		 * @return {ListServerNeighborsResponse} Success
		 */
		ListServerNeighbors(requestBody: ListServerNeighborsRequest): Observable<ListServerNeighborsResponse> {
			return this.http.post<ListServerNeighborsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start the continuous flow of agent's discovered data into Amazon Athena.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport
		 * @return {StartContinuousExportResponse} Success
		 */
		StartContinuousExport(requestBody: StartContinuousExportRequest): Observable<StartContinuousExportResponse> {
			return this.http.post<StartContinuousExportResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Instructs the specified agents or connectors to start collecting data.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds
		 * @return {StartDataCollectionByAgentIdsResponse} Success
		 */
		StartDataCollectionByAgentIds(requestBody: StartDataCollectionByAgentIdsRequest): Observable<StartDataCollectionByAgentIdsResponse> {
			return this.http.post<StartDataCollectionByAgentIdsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. </p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask
		 * @return {StartExportTaskResponse} Success
		 */
		StartExportTask(requestBody: StartExportTaskRequest): Observable<StartExportTaskResponse> {
			return this.http.post<StartExportTaskResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an import task, which allows you to import details of your on-premises environment directly into AWS Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of the AWS SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an AWS account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application Discovery Service Limits</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask
		 * @return {StartImportTaskResponse} Success
		 */
		StartImportTask(requestBody: StartImportTaskRequest): Observable<StartImportTaskResponse> {
			return this.http.post<StartImportTaskResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stop the continuous flow of agent's discovered data into Amazon Athena.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport
		 * @return {StopContinuousExportResponse} Success
		 */
		StopContinuousExport(requestBody: StopContinuousExportRequest): Observable<StopContinuousExportResponse> {
			return this.http.post<StopContinuousExportResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Instructs the specified agents or connectors to stop collecting data.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds
		 * @return {StopDataCollectionByAgentIdsResponse} Success
		 */
		StopDataCollectionByAgentIds(requestBody: StopDataCollectionByAgentIdsRequest): Observable<StopDataCollectionByAgentIdsResponse> {
			return this.http.post<StopDataCollectionByAgentIdsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates metadata about an application.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(requestBody: UpdateApplicationRequest): Observable<UpdateApplicationResponse> {
			return this.http.post<UpdateApplicationResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateConfigurationItemsToApplicationX_Amz_Target { AWSPoseidonService_V2015_11_01_AssociateConfigurationItemsToApplication = 0 }

	export enum BatchDeleteImportDataX_Amz_Target { AWSPoseidonService_V2015_11_01_BatchDeleteImportData = 0 }

	export enum CreateApplicationX_Amz_Target { AWSPoseidonService_V2015_11_01_CreateApplication = 0 }

	export enum CreateTagsX_Amz_Target { AWSPoseidonService_V2015_11_01_CreateTags = 0 }

	export enum DeleteApplicationsX_Amz_Target { AWSPoseidonService_V2015_11_01_DeleteApplications = 0 }

	export enum DeleteTagsX_Amz_Target { AWSPoseidonService_V2015_11_01_DeleteTags = 0 }

	export enum DescribeAgentsX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeAgents = 0 }

	export enum DescribeConfigurationsX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeConfigurations = 0 }

	export enum DescribeContinuousExportsX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeContinuousExports = 0 }

	export enum DescribeExportConfigurationsX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeExportConfigurations = 0 }

	export enum DescribeExportTasksX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeExportTasks = 0 }

	export enum DescribeImportTasksX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeImportTasks = 0 }

	export enum DescribeTagsX_Amz_Target { AWSPoseidonService_V2015_11_01_DescribeTags = 0 }

	export enum DisassociateConfigurationItemsFromApplicationX_Amz_Target { AWSPoseidonService_V2015_11_01_DisassociateConfigurationItemsFromApplication = 0 }

	export enum ExportConfigurationsX_Amz_Target { AWSPoseidonService_V2015_11_01_ExportConfigurations = 0 }

	export enum GetDiscoverySummaryX_Amz_Target { AWSPoseidonService_V2015_11_01_GetDiscoverySummary = 0 }

	export enum ListConfigurationsX_Amz_Target { AWSPoseidonService_V2015_11_01_ListConfigurations = 0 }

	export enum ListServerNeighborsX_Amz_Target { AWSPoseidonService_V2015_11_01_ListServerNeighbors = 0 }

	export enum StartContinuousExportX_Amz_Target { AWSPoseidonService_V2015_11_01_StartContinuousExport = 0 }

	export enum StartDataCollectionByAgentIdsX_Amz_Target { AWSPoseidonService_V2015_11_01_StartDataCollectionByAgentIds = 0 }

	export enum StartExportTaskX_Amz_Target { AWSPoseidonService_V2015_11_01_StartExportTask = 0 }

	export enum StartImportTaskX_Amz_Target { AWSPoseidonService_V2015_11_01_StartImportTask = 0 }

	export enum StopContinuousExportX_Amz_Target { AWSPoseidonService_V2015_11_01_StopContinuousExport = 0 }

	export enum StopDataCollectionByAgentIdsX_Amz_Target { AWSPoseidonService_V2015_11_01_StopDataCollectionByAgentIds = 0 }

	export enum UpdateApplicationX_Amz_Target { AWSPoseidonService_V2015_11_01_UpdateApplication = 0 }

}

