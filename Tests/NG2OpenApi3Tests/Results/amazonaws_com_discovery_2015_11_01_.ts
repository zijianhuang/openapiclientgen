import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateConfigurationItemsToApplicationResponse {
	}
	export interface AssociateConfigurationItemsToApplicationResponseFormProperties {
	}
	export function CreateAssociateConfigurationItemsToApplicationResponseFormGroup() {
		return new FormGroup<AssociateConfigurationItemsToApplicationResponseFormProperties>({
		});

	}

	export interface AssociateConfigurationItemsToApplicationRequest {

		/** Required */
		applicationConfigurationId: string;

		/** Required */
		configurationIds: Array<string>;
	}
	export interface AssociateConfigurationItemsToApplicationRequestFormProperties {

		/** Required */
		applicationConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateConfigurationItemsToApplicationRequestFormGroup() {
		return new FormGroup<AssociateConfigurationItemsToApplicationRequestFormProperties>({
			applicationConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthorizationErrorException {
	}
	export interface AuthorizationErrorExceptionFormProperties {
	}
	export function CreateAuthorizationErrorExceptionFormGroup() {
		return new FormGroup<AuthorizationErrorExceptionFormProperties>({
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
		});

	}

	export interface ServerInternalErrorException {
	}
	export interface ServerInternalErrorExceptionFormProperties {
	}
	export function CreateServerInternalErrorExceptionFormGroup() {
		return new FormGroup<ServerInternalErrorExceptionFormProperties>({
		});

	}

	export interface HomeRegionNotSetException {
	}
	export interface HomeRegionNotSetExceptionFormProperties {
	}
	export function CreateHomeRegionNotSetExceptionFormGroup() {
		return new FormGroup<HomeRegionNotSetExceptionFormProperties>({
		});

	}

	export interface BatchDeleteImportDataResponse {
		errors?: Array<BatchDeleteImportDataError>;
	}
	export interface BatchDeleteImportDataResponseFormProperties {
	}
	export function CreateBatchDeleteImportDataResponseFormGroup() {
		return new FormGroup<BatchDeleteImportDataResponseFormProperties>({
		});

	}


	/** Error messages returned for each import task that you deleted as a response for this command. */
	export interface BatchDeleteImportDataError {
		importTaskId?: string;
		errorCode?: BatchDeleteImportDataErrorCode;
		errorDescription?: string;
	}

	/** Error messages returned for each import task that you deleted as a response for this command. */
	export interface BatchDeleteImportDataErrorFormProperties {
		importTaskId: FormControl<string | null | undefined>,
		errorCode: FormControl<BatchDeleteImportDataErrorCode | null | undefined>,
		errorDescription: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteImportDataErrorFormGroup() {
		return new FormGroup<BatchDeleteImportDataErrorFormProperties>({
			importTaskId: new FormControl<string | null | undefined>(undefined),
			errorCode: new FormControl<BatchDeleteImportDataErrorCode | null | undefined>(undefined),
			errorDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BatchDeleteImportDataErrorCode { NOT_FOUND = 0, INTERNAL_SERVER_ERROR = 1, OVER_LIMIT = 2 }

	export interface BatchDeleteImportDataRequest {

		/** Required */
		importTaskIds: Array<string>;
	}
	export interface BatchDeleteImportDataRequestFormProperties {
	}
	export function CreateBatchDeleteImportDataRequestFormGroup() {
		return new FormGroup<BatchDeleteImportDataRequestFormProperties>({
		});

	}

	export interface CreateApplicationResponse {
		configurationId?: string;
	}
	export interface CreateApplicationResponseFormProperties {
		configurationId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationRequest {

		/** Required */
		name: string;
		description?: string;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTagsResponse {
	}
	export interface CreateTagsResponseFormProperties {
	}
	export function CreateCreateTagsResponseFormGroup() {
		return new FormGroup<CreateTagsResponseFormProperties>({
		});

	}

	export interface CreateTagsRequest {

		/** Required */
		configurationIds: Array<string>;

		/** Required */
		tags: Array<Tag>;
	}
	export interface CreateTagsRequestFormProperties {
	}
	export function CreateCreateTagsRequestFormGroup() {
		return new FormGroup<CreateTagsRequestFormProperties>({
		});

	}


	/** <p>Metadata that help you categorize IT assets.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important> */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** <p>Metadata that help you categorize IT assets.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important> */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteApplicationsResponse {
	}
	export interface DeleteApplicationsResponseFormProperties {
	}
	export function CreateDeleteApplicationsResponseFormGroup() {
		return new FormGroup<DeleteApplicationsResponseFormProperties>({
		});

	}

	export interface DeleteApplicationsRequest {

		/** Required */
		configurationIds: Array<string>;
	}
	export interface DeleteApplicationsRequestFormProperties {
	}
	export function CreateDeleteApplicationsRequestFormGroup() {
		return new FormGroup<DeleteApplicationsRequestFormProperties>({
		});

	}

	export interface DeleteTagsResponse {
	}
	export interface DeleteTagsResponseFormProperties {
	}
	export function CreateDeleteTagsResponseFormGroup() {
		return new FormGroup<DeleteTagsResponseFormProperties>({
		});

	}

	export interface DeleteTagsRequest {

		/** Required */
		configurationIds: Array<string>;
		tags?: Array<Tag>;
	}
	export interface DeleteTagsRequestFormProperties {
	}
	export function CreateDeleteTagsRequestFormGroup() {
		return new FormGroup<DeleteTagsRequestFormProperties>({
		});

	}

	export interface DescribeAgentsResponse {
		agentsInfo?: Array<AgentInfo>;
		nextToken?: string;
	}
	export interface DescribeAgentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgentsResponseFormGroup() {
		return new FormGroup<DescribeAgentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about agents associated with the user’s Amazon Web Services account. Information includes agent IDs, IP addresses, media access control (MAC) addresses, agent or collector status, hostname where the agent resides, and agent version for each agent. */
	export interface AgentInfo {
		agentId?: string;
		hostName?: string;
		agentNetworkInfoList?: Array<AgentNetworkInfo>;
		connectorId?: string;
		version?: string;
		health?: AgentStatus;
		lastHealthPingTime?: string;
		collectionStatus?: string;
		agentType?: string;
		registeredTime?: string;
	}

	/** Information about agents associated with the user’s Amazon Web Services account. Information includes agent IDs, IP addresses, media access control (MAC) addresses, agent or collector status, hostname where the agent resides, and agent version for each agent. */
	export interface AgentInfoFormProperties {
		agentId: FormControl<string | null | undefined>,
		hostName: FormControl<string | null | undefined>,
		connectorId: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		health: FormControl<AgentStatus | null | undefined>,
		lastHealthPingTime: FormControl<string | null | undefined>,
		collectionStatus: FormControl<string | null | undefined>,
		agentType: FormControl<string | null | undefined>,
		registeredTime: FormControl<string | null | undefined>,
	}
	export function CreateAgentInfoFormGroup() {
		return new FormGroup<AgentInfoFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			connectorId: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<AgentStatus | null | undefined>(undefined),
			lastHealthPingTime: new FormControl<string | null | undefined>(undefined),
			collectionStatus: new FormControl<string | null | undefined>(undefined),
			agentType: new FormControl<string | null | undefined>(undefined),
			registeredTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Network details about the host where the agent/collector resides. */
	export interface AgentNetworkInfo {
		ipAddress?: string;
		macAddress?: string;
	}

	/** Network details about the host where the agent/collector resides. */
	export interface AgentNetworkInfoFormProperties {
		ipAddress: FormControl<string | null | undefined>,
		macAddress: FormControl<string | null | undefined>,
	}
	export function CreateAgentNetworkInfoFormGroup() {
		return new FormGroup<AgentNetworkInfoFormProperties>({
			ipAddress: new FormControl<string | null | undefined>(undefined),
			macAddress: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AgentStatus { HEALTHY = 0, UNHEALTHY = 1, RUNNING = 2, UNKNOWN = 3, BLACKLISTED = 4, SHUTDOWN = 5 }

	export interface DescribeAgentsRequest {
		agentIds?: Array<string>;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeAgentsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAgentsRequestFormGroup() {
		return new FormGroup<DescribeAgentsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>. </p> */
	export interface Filter {

		/** Required */
		name: string;

		/** Required */
		values: Array<string>;

		/** Required */
		condition: string;
	}

	/** <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>. </p> */
	export interface FilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConfigurationsResponse {
		configurations?: Array<DescribeConfigurationsAttribute>;
	}
	export interface DescribeConfigurationsResponseFormProperties {
	}
	export function CreateDescribeConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeConfigurationsResponseFormProperties>({
		});

	}

	export interface DescribeConfigurationsAttribute {
	}
	export interface DescribeConfigurationsAttributeFormProperties {
	}
	export function CreateDescribeConfigurationsAttributeFormGroup() {
		return new FormGroup<DescribeConfigurationsAttributeFormProperties>({
		});

	}

	export interface DescribeConfigurationsRequest {

		/** Required */
		configurationIds: Array<string>;
	}
	export interface DescribeConfigurationsRequestFormProperties {
	}
	export function CreateDescribeConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeConfigurationsRequestFormProperties>({
		});

	}

	export interface DescribeContinuousExportsResponse {
		descriptions?: Array<ContinuousExportDescription>;
		nextToken?: string;
	}
	export interface DescribeContinuousExportsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContinuousExportsResponseFormGroup() {
		return new FormGroup<DescribeContinuousExportsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of continuous export descriptions. */
	export interface ContinuousExportDescription {
		exportId?: string;
		status?: ContinuousExportStatus;
		statusDetail?: string;
		s3Bucket?: string;
		startTime?: Date;
		stopTime?: Date;
		dataSource?: DataSource;
		schemaStorageConfig?: SchemaStorageConfig;
	}

	/** A list of continuous export descriptions. */
	export interface ContinuousExportDescriptionFormProperties {
		exportId: FormControl<string | null | undefined>,
		status: FormControl<ContinuousExportStatus | null | undefined>,
		statusDetail: FormControl<string | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
		dataSource: FormControl<DataSource | null | undefined>,
	}
	export function CreateContinuousExportDescriptionFormGroup() {
		return new FormGroup<ContinuousExportDescriptionFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ContinuousExportStatus | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
			dataSource: new FormControl<DataSource | null | undefined>(undefined),
		});

	}

	export enum ContinuousExportStatus { START_IN_PROGRESS = 0, START_FAILED = 1, ACTIVE = 2, ERROR = 3, STOP_IN_PROGRESS = 4, STOP_FAILED = 5, INACTIVE = 6 }

	export enum DataSource { AGENT = 0 }

	export interface SchemaStorageConfig {
	}
	export interface SchemaStorageConfigFormProperties {
	}
	export function CreateSchemaStorageConfigFormGroup() {
		return new FormGroup<SchemaStorageConfigFormProperties>({
		});

	}

	export interface DescribeContinuousExportsRequest {
		exportIds?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeContinuousExportsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeContinuousExportsRequestFormGroup() {
		return new FormGroup<DescribeContinuousExportsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OperationNotPermittedException {
	}
	export interface OperationNotPermittedExceptionFormProperties {
	}
	export function CreateOperationNotPermittedExceptionFormGroup() {
		return new FormGroup<OperationNotPermittedExceptionFormProperties>({
		});

	}

	export interface DescribeExportConfigurationsResponse {
		exportsInfo?: Array<ExportInfo>;
		nextToken?: string;
	}
	export interface DescribeExportConfigurationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportConfigurationsResponseFormGroup() {
		return new FormGroup<DescribeExportConfigurationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information regarding the export status of discovered data. The value is an array of objects. */
	export interface ExportInfo {

		/** Required */
		exportId: string;

		/** Required */
		exportStatus: ExportStatus;

		/** Required */
		statusMessage: string;
		configurationsDownloadUrl?: string;

		/** Required */
		exportRequestTime: Date;
		isTruncated?: boolean | null;
		requestedStartTime?: Date;
		requestedEndTime?: Date;
	}

	/** Information regarding the export status of discovered data. The value is an array of objects. */
	export interface ExportInfoFormProperties {

		/** Required */
		exportId: FormControl<string | null | undefined>,

		/** Required */
		exportStatus: FormControl<ExportStatus | null | undefined>,

		/** Required */
		statusMessage: FormControl<string | null | undefined>,
		configurationsDownloadUrl: FormControl<string | null | undefined>,

		/** Required */
		exportRequestTime: FormControl<Date | null | undefined>,
		isTruncated: FormControl<boolean | null | undefined>,
		requestedStartTime: FormControl<Date | null | undefined>,
		requestedEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateExportInfoFormGroup() {
		return new FormGroup<ExportInfoFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exportStatus: new FormControl<ExportStatus | null | undefined>(undefined, [Validators.required]),
			statusMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configurationsDownloadUrl: new FormControl<string | null | undefined>(undefined),
			exportRequestTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			isTruncated: new FormControl<boolean | null | undefined>(undefined),
			requestedStartTime: new FormControl<Date | null | undefined>(undefined),
			requestedEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExportStatus { FAILED = 0, SUCCEEDED = 1, IN_PROGRESS = 2 }

	export interface DescribeExportConfigurationsRequest {
		exportIds?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeExportConfigurationsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportConfigurationsRequestFormGroup() {
		return new FormGroup<DescribeExportConfigurationsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExportTasksResponse {
		exportsInfo?: Array<ExportInfo>;
		nextToken?: string;
	}
	export interface DescribeExportTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportTasksResponseFormGroup() {
		return new FormGroup<DescribeExportTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeExportTasksRequest {
		exportIds?: Array<string>;
		filters?: Array<ExportFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeExportTasksRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeExportTasksRequestFormGroup() {
		return new FormGroup<DescribeExportTasksRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action. */
	export interface ExportFilter {

		/** Required */
		name: string;

		/** Required */
		values: Array<string>;

		/** Required */
		condition: string;
	}

	/** Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action. */
	export interface ExportFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		condition: FormControl<string | null | undefined>,
	}
	export function CreateExportFilterFormGroup() {
		return new FormGroup<ExportFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeImportTasksResponse {
		nextToken?: string;
		tasks?: Array<ImportTask>;
	}
	export interface DescribeImportTasksResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImportTasksResponseFormGroup() {
		return new FormGroup<DescribeImportTasksResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
	export interface ImportTask {
		importTaskId?: string;
		clientRequestToken?: string;
		name?: string;
		importUrl?: string;
		status?: ImportStatus;
		importRequestTime?: Date;
		importCompletionTime?: Date;
		importDeletedTime?: Date;
		serverImportSuccess?: number | null;
		serverImportFailure?: number | null;
		applicationImportSuccess?: number | null;
		applicationImportFailure?: number | null;
		errorsAndFailedEntriesZip?: string;
	}

	/** An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more. */
	export interface ImportTaskFormProperties {
		importTaskId: FormControl<string | null | undefined>,
		clientRequestToken: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		importUrl: FormControl<string | null | undefined>,
		status: FormControl<ImportStatus | null | undefined>,
		importRequestTime: FormControl<Date | null | undefined>,
		importCompletionTime: FormControl<Date | null | undefined>,
		importDeletedTime: FormControl<Date | null | undefined>,
		serverImportSuccess: FormControl<number | null | undefined>,
		serverImportFailure: FormControl<number | null | undefined>,
		applicationImportSuccess: FormControl<number | null | undefined>,
		applicationImportFailure: FormControl<number | null | undefined>,
		errorsAndFailedEntriesZip: FormControl<string | null | undefined>,
	}
	export function CreateImportTaskFormGroup() {
		return new FormGroup<ImportTaskFormProperties>({
			importTaskId: new FormControl<string | null | undefined>(undefined),
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			importUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ImportStatus | null | undefined>(undefined),
			importRequestTime: new FormControl<Date | null | undefined>(undefined),
			importCompletionTime: new FormControl<Date | null | undefined>(undefined),
			importDeletedTime: new FormControl<Date | null | undefined>(undefined),
			serverImportSuccess: new FormControl<number | null | undefined>(undefined),
			serverImportFailure: new FormControl<number | null | undefined>(undefined),
			applicationImportSuccess: new FormControl<number | null | undefined>(undefined),
			applicationImportFailure: new FormControl<number | null | undefined>(undefined),
			errorsAndFailedEntriesZip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportStatus { IMPORT_IN_PROGRESS = 0, IMPORT_COMPLETE = 1, IMPORT_COMPLETE_WITH_ERRORS = 2, IMPORT_FAILED = 3, IMPORT_FAILED_SERVER_LIMIT_EXCEEDED = 4, IMPORT_FAILED_RECORD_LIMIT_EXCEEDED = 5, DELETE_IN_PROGRESS = 6, DELETE_COMPLETE = 7, DELETE_FAILED = 8, DELETE_FAILED_LIMIT_EXCEEDED = 9, INTERNAL_ERROR = 10 }

	export interface DescribeImportTasksRequest {
		filters?: Array<ImportTaskFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeImportTasksRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeImportTasksRequestFormGroup() {
		return new FormGroup<DescribeImportTasksRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note> */
	export interface ImportTaskFilter {
		name?: ImportTaskFilterName;
		values?: Array<string>;
	}

	/** <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note> */
	export interface ImportTaskFilterFormProperties {
		name: FormControl<ImportTaskFilterName | null | undefined>,
	}
	export function CreateImportTaskFilterFormGroup() {
		return new FormGroup<ImportTaskFilterFormProperties>({
			name: new FormControl<ImportTaskFilterName | null | undefined>(undefined),
		});

	}

	export enum ImportTaskFilterName { IMPORT_TASK_ID = 0, STATUS = 1, NAME = 2 }

	export interface DescribeTagsResponse {
		tags?: Array<ConfigurationTag>;
		nextToken?: string;
	}
	export interface DescribeTagsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsResponseFormGroup() {
		return new FormGroup<DescribeTagsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags for a configuration item. Tags are metadata that help you categorize IT assets. */
	export interface ConfigurationTag {
		configurationType?: ConfigurationItemType;
		configurationId?: string;
		key?: string;
		value?: string;
		timeOfCreation?: Date;
	}

	/** Tags for a configuration item. Tags are metadata that help you categorize IT assets. */
	export interface ConfigurationTagFormProperties {
		configurationType: FormControl<ConfigurationItemType | null | undefined>,
		configurationId: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		timeOfCreation: FormControl<Date | null | undefined>,
	}
	export function CreateConfigurationTagFormGroup() {
		return new FormGroup<ConfigurationTagFormProperties>({
			configurationType: new FormControl<ConfigurationItemType | null | undefined>(undefined),
			configurationId: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			timeOfCreation: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConfigurationItemType { SERVER = 0, PROCESS = 1, CONNECTION = 2, APPLICATION = 3 }

	export interface DescribeTagsRequest {
		filters?: Array<TagFilter>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface DescribeTagsRequestFormProperties {
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTagsRequestFormGroup() {
		return new FormGroup<DescribeTagsRequestFormProperties>({
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>. */
	export interface TagFilter {

		/** Required */
		name: string;

		/** Required */
		values: Array<string>;
	}

	/** The tag filter. Valid names are: <code>tagKey</code>, <code>tagValue</code>, <code>configurationId</code>. */
	export interface TagFilterFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTagFilterFormGroup() {
		return new FormGroup<TagFilterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateConfigurationItemsFromApplicationResponse {
	}
	export interface DisassociateConfigurationItemsFromApplicationResponseFormProperties {
	}
	export function CreateDisassociateConfigurationItemsFromApplicationResponseFormGroup() {
		return new FormGroup<DisassociateConfigurationItemsFromApplicationResponseFormProperties>({
		});

	}

	export interface DisassociateConfigurationItemsFromApplicationRequest {

		/** Required */
		applicationConfigurationId: string;

		/** Required */
		configurationIds: Array<string>;
	}
	export interface DisassociateConfigurationItemsFromApplicationRequestFormProperties {

		/** Required */
		applicationConfigurationId: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateConfigurationItemsFromApplicationRequestFormGroup() {
		return new FormGroup<DisassociateConfigurationItemsFromApplicationRequestFormProperties>({
			applicationConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportConfigurationsResponse {
		exportId?: string;
	}
	export interface ExportConfigurationsResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
	}
	export function CreateExportConfigurationsResponseFormGroup() {
		return new FormGroup<ExportConfigurationsResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDiscoverySummaryResponse {
		servers?: number | null;
		applications?: number | null;
		serversMappedToApplications?: number | null;
		serversMappedtoTags?: number | null;
		agentSummary?: CustomerAgentInfo;
		connectorSummary?: CustomerConnectorInfo;
		meCollectorSummary?: CustomerMeCollectorInfo;
		agentlessCollectorSummary?: CustomerAgentlessCollectorInfo;
	}
	export interface GetDiscoverySummaryResponseFormProperties {
		servers: FormControl<number | null | undefined>,
		applications: FormControl<number | null | undefined>,
		serversMappedToApplications: FormControl<number | null | undefined>,
		serversMappedtoTags: FormControl<number | null | undefined>,
	}
	export function CreateGetDiscoverySummaryResponseFormGroup() {
		return new FormGroup<GetDiscoverySummaryResponseFormProperties>({
			servers: new FormControl<number | null | undefined>(undefined),
			applications: new FormControl<number | null | undefined>(undefined),
			serversMappedToApplications: new FormControl<number | null | undefined>(undefined),
			serversMappedtoTags: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Inventory data for installed discovery agents. */
	export interface CustomerAgentInfo {

		/** Required */
		activeAgents: number;

		/** Required */
		healthyAgents: number;

		/** Required */
		blackListedAgents: number;

		/** Required */
		shutdownAgents: number;

		/** Required */
		unhealthyAgents: number;

		/** Required */
		totalAgents: number;

		/** Required */
		unknownAgents: number;
	}

	/** Inventory data for installed discovery agents. */
	export interface CustomerAgentInfoFormProperties {

		/** Required */
		activeAgents: FormControl<number | null | undefined>,

		/** Required */
		healthyAgents: FormControl<number | null | undefined>,

		/** Required */
		blackListedAgents: FormControl<number | null | undefined>,

		/** Required */
		shutdownAgents: FormControl<number | null | undefined>,

		/** Required */
		unhealthyAgents: FormControl<number | null | undefined>,

		/** Required */
		totalAgents: FormControl<number | null | undefined>,

		/** Required */
		unknownAgents: FormControl<number | null | undefined>,
	}
	export function CreateCustomerAgentInfoFormGroup() {
		return new FormGroup<CustomerAgentInfoFormProperties>({
			activeAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			healthyAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			blackListedAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shutdownAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unknownAgents: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Inventory data for installed discovery connectors. */
	export interface CustomerConnectorInfo {

		/** Required */
		activeConnectors: number;

		/** Required */
		healthyConnectors: number;

		/** Required */
		blackListedConnectors: number;

		/** Required */
		shutdownConnectors: number;

		/** Required */
		unhealthyConnectors: number;

		/** Required */
		totalConnectors: number;

		/** Required */
		unknownConnectors: number;
	}

	/** Inventory data for installed discovery connectors. */
	export interface CustomerConnectorInfoFormProperties {

		/** Required */
		activeConnectors: FormControl<number | null | undefined>,

		/** Required */
		healthyConnectors: FormControl<number | null | undefined>,

		/** Required */
		blackListedConnectors: FormControl<number | null | undefined>,

		/** Required */
		shutdownConnectors: FormControl<number | null | undefined>,

		/** Required */
		unhealthyConnectors: FormControl<number | null | undefined>,

		/** Required */
		totalConnectors: FormControl<number | null | undefined>,

		/** Required */
		unknownConnectors: FormControl<number | null | undefined>,
	}
	export function CreateCustomerConnectorInfoFormGroup() {
		return new FormGroup<CustomerConnectorInfoFormProperties>({
			activeConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			healthyConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			blackListedConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shutdownConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unknownConnectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The inventory data for installed Migration Evaluator collectors.  */
	export interface CustomerMeCollectorInfo {

		/** Required */
		activeMeCollectors: number;

		/** Required */
		healthyMeCollectors: number;

		/** Required */
		denyListedMeCollectors: number;

		/** Required */
		shutdownMeCollectors: number;

		/** Required */
		unhealthyMeCollectors: number;

		/** Required */
		totalMeCollectors: number;

		/** Required */
		unknownMeCollectors: number;
	}

	/**  The inventory data for installed Migration Evaluator collectors.  */
	export interface CustomerMeCollectorInfoFormProperties {

		/** Required */
		activeMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		healthyMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		denyListedMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		shutdownMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		unhealthyMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		totalMeCollectors: FormControl<number | null | undefined>,

		/** Required */
		unknownMeCollectors: FormControl<number | null | undefined>,
	}
	export function CreateCustomerMeCollectorInfoFormGroup() {
		return new FormGroup<CustomerMeCollectorInfoFormProperties>({
			activeMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			healthyMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			denyListedMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shutdownMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unknownMeCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The inventory data for installed Agentless Collector collectors.  */
	export interface CustomerAgentlessCollectorInfo {

		/** Required */
		activeAgentlessCollectors: number;

		/** Required */
		healthyAgentlessCollectors: number;

		/** Required */
		denyListedAgentlessCollectors: number;

		/** Required */
		shutdownAgentlessCollectors: number;

		/** Required */
		unhealthyAgentlessCollectors: number;

		/** Required */
		totalAgentlessCollectors: number;

		/** Required */
		unknownAgentlessCollectors: number;
	}

	/** The inventory data for installed Agentless Collector collectors.  */
	export interface CustomerAgentlessCollectorInfoFormProperties {

		/** Required */
		activeAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		healthyAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		denyListedAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		shutdownAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		unhealthyAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		totalAgentlessCollectors: FormControl<number | null | undefined>,

		/** Required */
		unknownAgentlessCollectors: FormControl<number | null | undefined>,
	}
	export function CreateCustomerAgentlessCollectorInfoFormGroup() {
		return new FormGroup<CustomerAgentlessCollectorInfoFormProperties>({
			activeAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			healthyAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			denyListedAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shutdownAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unhealthyAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			totalAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unknownAgentlessCollectors: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDiscoverySummaryRequest {
	}
	export interface GetDiscoverySummaryRequestFormProperties {
	}
	export function CreateGetDiscoverySummaryRequestFormGroup() {
		return new FormGroup<GetDiscoverySummaryRequestFormProperties>({
		});

	}

	export interface ListConfigurationsResponse {
		configurations?: Array<Configuration>;
		nextToken?: string;
	}
	export interface ListConfigurationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationsResponseFormGroup() {
		return new FormGroup<ListConfigurationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Configuration {
	}
	export interface ConfigurationFormProperties {
	}
	export function CreateConfigurationFormGroup() {
		return new FormGroup<ConfigurationFormProperties>({
		});

	}

	export interface ListConfigurationsRequest {

		/** Required */
		configurationType: ConfigurationItemType;
		filters?: Array<Filter>;
		maxResults?: number | null;
		nextToken?: string;
		orderBy?: Array<OrderByElement>;
	}
	export interface ListConfigurationsRequestFormProperties {

		/** Required */
		configurationType: FormControl<ConfigurationItemType | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConfigurationsRequestFormGroup() {
		return new FormGroup<ListConfigurationsRequestFormProperties>({
			configurationType: new FormControl<ConfigurationItemType | null | undefined>(undefined, [Validators.required]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A field and direction for ordered output. */
	export interface OrderByElement {

		/** Required */
		fieldName: string;
		sortOrder?: OrderString;
	}

	/** A field and direction for ordered output. */
	export interface OrderByElementFormProperties {

		/** Required */
		fieldName: FormControl<string | null | undefined>,
		sortOrder: FormControl<OrderString | null | undefined>,
	}
	export function CreateOrderByElementFormGroup() {
		return new FormGroup<OrderByElementFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sortOrder: new FormControl<OrderString | null | undefined>(undefined),
		});

	}

	export enum OrderString { ASC = 0, DESC = 1 }

	export interface ListServerNeighborsResponse {

		/** Required */
		neighbors: Array<NeighborConnectionDetail>;
		nextToken?: string;
		knownDependencyCount?: number | null;
	}
	export interface ListServerNeighborsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		knownDependencyCount: FormControl<number | null | undefined>,
	}
	export function CreateListServerNeighborsResponseFormGroup() {
		return new FormGroup<ListServerNeighborsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			knownDependencyCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Details about neighboring servers. */
	export interface NeighborConnectionDetail {

		/** Required */
		sourceServerId: string;

		/** Required */
		destinationServerId: string;
		destinationPort?: number | null;
		transportProtocol?: string;

		/** Required */
		connectionsCount: number;
	}

	/** Details about neighboring servers. */
	export interface NeighborConnectionDetailFormProperties {

		/** Required */
		sourceServerId: FormControl<string | null | undefined>,

		/** Required */
		destinationServerId: FormControl<string | null | undefined>,
		destinationPort: FormControl<number | null | undefined>,
		transportProtocol: FormControl<string | null | undefined>,

		/** Required */
		connectionsCount: FormControl<number | null | undefined>,
	}
	export function CreateNeighborConnectionDetailFormGroup() {
		return new FormGroup<NeighborConnectionDetailFormProperties>({
			sourceServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationServerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationPort: new FormControl<number | null | undefined>(undefined),
			transportProtocol: new FormControl<string | null | undefined>(undefined),
			connectionsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServerNeighborsRequest {

		/** Required */
		configurationId: string;
		portInformationNeeded?: boolean | null;
		neighborConfigurationIds?: Array<string>;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListServerNeighborsRequestFormProperties {

		/** Required */
		configurationId: FormControl<string | null | undefined>,
		portInformationNeeded: FormControl<boolean | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServerNeighborsRequestFormGroup() {
		return new FormGroup<ListServerNeighborsRequestFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portInformationNeeded: new FormControl<boolean | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartContinuousExportResponse {
		exportId?: string;
		s3Bucket?: string;
		startTime?: Date;
		dataSource?: DataSource;
		schemaStorageConfig?: SchemaStorageConfig;
	}
	export interface StartContinuousExportResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		dataSource: FormControl<DataSource | null | undefined>,
	}
	export function CreateStartContinuousExportResponseFormGroup() {
		return new FormGroup<StartContinuousExportResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			dataSource: new FormControl<DataSource | null | undefined>(undefined),
		});

	}

	export interface StartContinuousExportRequest {
	}
	export interface StartContinuousExportRequestFormProperties {
	}
	export function CreateStartContinuousExportRequestFormGroup() {
		return new FormGroup<StartContinuousExportRequestFormProperties>({
		});

	}

	export interface ConflictErrorException {
	}
	export interface ConflictErrorExceptionFormProperties {
	}
	export function CreateConflictErrorExceptionFormGroup() {
		return new FormGroup<ConflictErrorExceptionFormProperties>({
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface StartDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
	}
	export interface StartDataCollectionByAgentIdsResponseFormProperties {
	}
	export function CreateStartDataCollectionByAgentIdsResponseFormGroup() {
		return new FormGroup<StartDataCollectionByAgentIdsResponseFormProperties>({
		});

	}


	/** Information about agents that were instructed to start collecting data. Information includes the agent ID, a description of the operation, and whether the agent configuration was updated. */
	export interface AgentConfigurationStatus {
		agentId?: string;
		operationSucceeded?: boolean | null;
		description?: string;
	}

	/** Information about agents that were instructed to start collecting data. Information includes the agent ID, a description of the operation, and whether the agent configuration was updated. */
	export interface AgentConfigurationStatusFormProperties {
		agentId: FormControl<string | null | undefined>,
		operationSucceeded: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAgentConfigurationStatusFormGroup() {
		return new FormGroup<AgentConfigurationStatusFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			operationSucceeded: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDataCollectionByAgentIdsRequest {

		/** Required */
		agentIds: Array<string>;
	}
	export interface StartDataCollectionByAgentIdsRequestFormProperties {
	}
	export function CreateStartDataCollectionByAgentIdsRequestFormGroup() {
		return new FormGroup<StartDataCollectionByAgentIdsRequestFormProperties>({
		});

	}

	export interface StartExportTaskResponse {
		exportId?: string;
	}
	export interface StartExportTaskResponseFormProperties {
		exportId: FormControl<string | null | undefined>,
	}
	export function CreateStartExportTaskResponseFormGroup() {
		return new FormGroup<StartExportTaskResponseFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartExportTaskRequest {
		exportDataFormat?: Array<ExportDataFormat>;
		filters?: Array<ExportFilter>;
		startTime?: Date;
		endTime?: Date;
		preferences?: ExportPreferences;
	}
	export interface StartExportTaskRequestFormProperties {
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartExportTaskRequestFormGroup() {
		return new FormGroup<StartExportTaskRequestFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ExportDataFormat { CSV = 0 }


	/**  Indicates the type of data that is being exported. Only one <code>ExportPreferences</code> can be enabled for a <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.  */
	export interface ExportPreferences {
		ec2RecommendationsPreferences?: Ec2RecommendationsExportPreferences;
	}

	/**  Indicates the type of data that is being exported. Only one <code>ExportPreferences</code> can be enabled for a <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.  */
	export interface ExportPreferencesFormProperties {
	}
	export function CreateExportPreferencesFormGroup() {
		return new FormGroup<ExportPreferencesFormProperties>({
		});

	}


	/**  Indicates that the exported data must include EC2 instance type matches for on-premises servers that are discovered through Amazon Web Services Application Discovery Service.  */
	export interface Ec2RecommendationsExportPreferences {
		enabled?: boolean | null;
		cpuPerformanceMetricBasis?: UsageMetricBasis;
		ramPerformanceMetricBasis?: UsageMetricBasis;
		tenancy?: Tenancy;
		excludedInstanceTypes?: Array<string>;
		preferredRegion?: string;
		reservedInstanceOptions?: ReservedInstanceOptions;
	}

	/**  Indicates that the exported data must include EC2 instance type matches for on-premises servers that are discovered through Amazon Web Services Application Discovery Service.  */
	export interface Ec2RecommendationsExportPreferencesFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		tenancy: FormControl<Tenancy | null | undefined>,
		preferredRegion: FormControl<string | null | undefined>,
	}
	export function CreateEc2RecommendationsExportPreferencesFormGroup() {
		return new FormGroup<Ec2RecommendationsExportPreferencesFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			tenancy: new FormControl<Tenancy | null | undefined>(undefined),
			preferredRegion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Specifies the performance metrics to use for the server that is used for recommendations.  */
	export interface UsageMetricBasis {
		name?: string;
		percentageAdjust?: number | null;
	}

	/**  Specifies the performance metrics to use for the server that is used for recommendations.  */
	export interface UsageMetricBasisFormProperties {
		name: FormControl<string | null | undefined>,
		percentageAdjust: FormControl<number | null | undefined>,
	}
	export function CreateUsageMetricBasisFormGroup() {
		return new FormGroup<UsageMetricBasisFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			percentageAdjust: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Tenancy { DEDICATED = 0, SHARED = 1 }


	/**  Used to provide Reserved Instance preferences for the recommendation.  */
	export interface ReservedInstanceOptions {

		/** Required */
		purchasingOption: PurchasingOption;

		/** Required */
		offeringClass: OfferingClass;

		/** Required */
		termLength: TermLength;
	}

	/**  Used to provide Reserved Instance preferences for the recommendation.  */
	export interface ReservedInstanceOptionsFormProperties {

		/** Required */
		purchasingOption: FormControl<PurchasingOption | null | undefined>,

		/** Required */
		offeringClass: FormControl<OfferingClass | null | undefined>,

		/** Required */
		termLength: FormControl<TermLength | null | undefined>,
	}
	export function CreateReservedInstanceOptionsFormGroup() {
		return new FormGroup<ReservedInstanceOptionsFormProperties>({
			purchasingOption: new FormControl<PurchasingOption | null | undefined>(undefined, [Validators.required]),
			offeringClass: new FormControl<OfferingClass | null | undefined>(undefined, [Validators.required]),
			termLength: new FormControl<TermLength | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PurchasingOption { ALL_UPFRONT = 0, PARTIAL_UPFRONT = 1, NO_UPFRONT = 2 }

	export enum OfferingClass { STANDARD = 0, CONVERTIBLE = 1 }

	export enum TermLength { ONE_YEAR = 0, THREE_YEAR = 1 }

	export interface StartImportTaskResponse {
		task?: ImportTask;
	}
	export interface StartImportTaskResponseFormProperties {
	}
	export function CreateStartImportTaskResponseFormGroup() {
		return new FormGroup<StartImportTaskResponseFormProperties>({
		});

	}

	export interface StartImportTaskRequest {
		clientRequestToken?: string;

		/** Required */
		name: string;

		/** Required */
		importUrl: string;
	}
	export interface StartImportTaskRequestFormProperties {
		clientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		importUrl: FormControl<string | null | undefined>,
	}
	export function CreateStartImportTaskRequestFormGroup() {
		return new FormGroup<StartImportTaskRequestFormProperties>({
			clientRequestToken: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			importUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopContinuousExportResponse {
		startTime?: Date;
		stopTime?: Date;
	}
	export interface StopContinuousExportResponseFormProperties {
		startTime: FormControl<Date | null | undefined>,
		stopTime: FormControl<Date | null | undefined>,
	}
	export function CreateStopContinuousExportResponseFormGroup() {
		return new FormGroup<StopContinuousExportResponseFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			stopTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StopContinuousExportRequest {

		/** Required */
		exportId: string;
	}
	export interface StopContinuousExportRequestFormProperties {

		/** Required */
		exportId: FormControl<string | null | undefined>,
	}
	export function CreateStopContinuousExportRequestFormGroup() {
		return new FormGroup<StopContinuousExportRequestFormProperties>({
			exportId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopDataCollectionByAgentIdsResponse {
		agentsConfigurationStatus?: Array<AgentConfigurationStatus>;
	}
	export interface StopDataCollectionByAgentIdsResponseFormProperties {
	}
	export function CreateStopDataCollectionByAgentIdsResponseFormGroup() {
		return new FormGroup<StopDataCollectionByAgentIdsResponseFormProperties>({
		});

	}

	export interface StopDataCollectionByAgentIdsRequest {

		/** Required */
		agentIds: Array<string>;
	}
	export interface StopDataCollectionByAgentIdsRequestFormProperties {
	}
	export function CreateStopDataCollectionByAgentIdsRequestFormGroup() {
		return new FormGroup<StopDataCollectionByAgentIdsRequestFormProperties>({
		});

	}

	export interface UpdateApplicationResponse {
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/** Required */
		configurationId: string;
		name?: string;
		description?: string;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		configurationId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			configurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

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
		 * <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>Amazon Web Services Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
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
		 * <p>Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.</p> <important> <p>Do not store sensitive information (like personal data) in tags.</p> </important>
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
		 * Lists agents or collectors as specified by ID or other filters. All agents/collectors associated with your user can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents
		 * @return {DescribeAgentsResponse} Success
		 */
		DescribeAgents(requestBody: DescribeAgentsRequest): Observable<DescribeAgentsResponse> {
			return this.http.post<DescribeAgentsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations
		 * @return {DescribeConfigurationsResponse} Success
		 */
		DescribeConfigurations(requestBody: DescribeConfigurationsRequest): Observable<DescribeConfigurationsResponse> {
			return this.http.post<DescribeConfigurationsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists exports as specified by ID. All continuous exports associated with your user can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {DescribeContinuousExportsResponse} Success
		 */
		DescribeContinuousExports(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: DescribeContinuousExportsRequest): Observable<DescribeContinuousExportsResponse> {
			return this.http.post<DescribeContinuousExportsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeExportTasks</a>, instead.
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
		 * <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
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
		 * Instructs the specified agents to start collecting data.
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds
		 * @return {StartDataCollectionByAgentIdsResponse} Success
		 */
		StartDataCollectionByAgentIds(requestBody: StartDataCollectionByAgentIdsRequest): Observable<StartDataCollectionByAgentIdsResponse> {
			return this.http.post<StartDataCollectionByAgentIdsResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Begins the export of a discovered data report to an Amazon S3 bucket managed by Amazon Web Services.</p> <note> <p>Exports might provide an estimate of fees and savings based on certain information that you provide. Fee estimates do not include any taxes that might apply. Your actual fees and savings depend on a variety of factors, including your actual usage of Amazon Web Services services, which might vary from the estimates provided in this report.</p> </note> <p>If you do not specify <code>preferences</code> or <code>agentIds</code> in the filter, a summary of all servers, applications, tags, and performance is generated. This data is an aggregation of all server data collected through on-premises tooling, file import, application grouping and applying tags.</p> <p>If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. Export of detailed agent data is limited to two exports per day.</p> <p>If you enable <code>ec2RecommendationsPreferences</code> in <code>preferences</code> , an Amazon EC2 instance matching the characteristics of each server in Application Discovery Service is generated. Changing the attributes of the <code>ec2RecommendationsPreferences</code> changes the criteria of the recommendation.</p>
		 * Post #X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask
		 * @return {StartExportTaskResponse} Success
		 */
		StartExportTask(requestBody: StartExportTaskRequest): Observable<StartExportTaskResponse> {
			return this.http.post<StartExportTaskResponse>(this.baseUri + '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Amazon Web Services Application Discovery Service (Application Discovery Service) tools such as the Amazon Web Services Application Discovery Service Agentless Collector or Application Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User Guide</i>.</p> </note>
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
		 * Instructs the specified agents to stop collecting data.
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

	export enum AssociateConfigurationItemsToApplicationX_Amz_Target { 'AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication' = 0 }

	export enum BatchDeleteImportDataX_Amz_Target { 'AWSPoseidonService_V2015_11_01.BatchDeleteImportData' = 0 }

	export enum CreateApplicationX_Amz_Target { 'AWSPoseidonService_V2015_11_01.CreateApplication' = 0 }

	export enum CreateTagsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.CreateTags' = 0 }

	export enum DeleteApplicationsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DeleteApplications' = 0 }

	export enum DeleteTagsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DeleteTags' = 0 }

	export enum DescribeAgentsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeAgents' = 0 }

	export enum DescribeConfigurationsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeConfigurations' = 0 }

	export enum DescribeContinuousExportsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeContinuousExports' = 0 }

	export enum DescribeExportConfigurationsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeExportConfigurations' = 0 }

	export enum DescribeExportTasksX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeExportTasks' = 0 }

	export enum DescribeImportTasksX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeImportTasks' = 0 }

	export enum DescribeTagsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DescribeTags' = 0 }

	export enum DisassociateConfigurationItemsFromApplicationX_Amz_Target { 'AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication' = 0 }

	export enum ExportConfigurationsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.ExportConfigurations' = 0 }

	export enum GetDiscoverySummaryX_Amz_Target { 'AWSPoseidonService_V2015_11_01.GetDiscoverySummary' = 0 }

	export enum ListConfigurationsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.ListConfigurations' = 0 }

	export enum ListServerNeighborsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.ListServerNeighbors' = 0 }

	export enum StartContinuousExportX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StartContinuousExport' = 0 }

	export enum StartDataCollectionByAgentIdsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds' = 0 }

	export enum StartExportTaskX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StartExportTask' = 0 }

	export enum StartImportTaskX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StartImportTask' = 0 }

	export enum StopContinuousExportX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StopContinuousExport' = 0 }

	export enum StopDataCollectionByAgentIdsX_Amz_Target { 'AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds' = 0 }

	export enum UpdateApplicationX_Amz_Target { 'AWSPoseidonService_V2015_11_01.UpdateApplication' = 0 }

}

