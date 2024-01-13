import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes an Azure Data Lake Store output data source. */
	export interface AzureDataLakeStoreOutputDataSource extends OutputDataSource {

		/** The properties that are associated with an Azure Data Lake Store. */
		properties?: AzureDataLakeStoreOutputDataSourceProperties;
	}

	/** Describes an Azure Data Lake Store output data source. */
	export interface AzureDataLakeStoreOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateAzureDataLakeStoreOutputDataSourceFormGroup() {
		return new FormGroup<AzureDataLakeStoreOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an Azure Data Lake Store. */
	export interface AzureDataLakeStoreOutputDataSourceProperties extends OAuthBasedDataSourceProperties {

		/** The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests. */
		accountName?: string | null;

		/** The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead. */
		dateFormat?: string | null;

		/** The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests. */
		filePathPrefix?: string | null;

		/** The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests. */
		tenantId?: string | null;

		/** The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead. */
		timeFormat?: string | null;
	}

	/** The properties that are associated with an Azure Data Lake Store. */
	export interface AzureDataLakeStoreOutputDataSourcePropertiesFormProperties extends OAuthBasedDataSourcePropertiesFormProperties {

		/** The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests. */
		accountName: FormControl<string | null | undefined>,

		/** The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead. */
		dateFormat: FormControl<string | null | undefined>,

		/** The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests. */
		filePathPrefix: FormControl<string | null | undefined>,

		/** The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests. */
		tenantId: FormControl<string | null | undefined>,

		/** The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead. */
		timeFormat: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeStoreOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<AzureDataLakeStoreOutputDataSourcePropertiesFormProperties>({
			refreshToken: new FormControl<string | null | undefined>(undefined),
			tokenUserDisplayName: new FormControl<string | null | undefined>(undefined),
			tokenUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined),
			filePathPrefix: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			timeFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an Azure SQL database data source. */
	export interface AzureSqlDatabaseDataSourceProperties {

		/** The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		database?: string | null;

		/** The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		password?: string | null;

		/** The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		server?: string | null;

		/** The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		table?: string | null;

		/** The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		user?: string | null;
	}

	/** The properties that are associated with an Azure SQL database data source. */
	export interface AzureSqlDatabaseDataSourcePropertiesFormProperties {

		/** The name of the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		database: FormControl<string | null | undefined>,

		/** The password that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		password: FormControl<string | null | undefined>,

		/** The name of the SQL server containing the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		server: FormControl<string | null | undefined>,

		/** The name of the table in the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		table: FormControl<string | null | undefined>,

		/** The user name that will be used to connect to the Azure SQL database. Required on PUT (CreateOrReplace) requests. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDatabaseDataSourcePropertiesFormGroup() {
		return new FormGroup<AzureSqlDatabaseDataSourcePropertiesFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure SQL database output data source. */
	export interface AzureSqlDatabaseOutputDataSource extends OutputDataSource {

		/** The properties that are associated with an Azure SQL database output. */
		properties?: AzureSqlDatabaseOutputDataSourceProperties;
	}

	/** Describes an Azure SQL database output data source. */
	export interface AzureSqlDatabaseOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateAzureSqlDatabaseOutputDataSourceFormGroup() {
		return new FormGroup<AzureSqlDatabaseOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an Azure SQL database output. */
	export interface AzureSqlDatabaseOutputDataSourceProperties {
	}

	/** The properties that are associated with an Azure SQL database output. */
	export interface AzureSqlDatabaseOutputDataSourcePropertiesFormProperties {
	}
	export function CreateAzureSqlDatabaseOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<AzureSqlDatabaseOutputDataSourcePropertiesFormProperties>({
		});

	}


	/** Describes an Azure Table output data source. */
	export interface AzureTableOutputDataSource extends OutputDataSource {

		/** The properties that are associated with an Azure Table output. */
		properties?: AzureTableOutputDataSourceProperties;
	}

	/** Describes an Azure Table output data source. */
	export interface AzureTableOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateAzureTableOutputDataSourceFormGroup() {
		return new FormGroup<AzureTableOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an Azure Table output. */
	export interface AzureTableOutputDataSourceProperties {

		/** The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountKey?: string | null;

		/** The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountName?: string | null;

		/** The number of rows to write to the Azure Table at a time. */
		batchSize?: number | null;

		/** If specified, each item in the array is the name of a column to remove (if present) from output event entities. */
		columnsToRemove?: Array<string>;

		/** This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests. */
		partitionKey?: string | null;

		/** This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests. */
		rowKey?: string | null;

		/** The name of the Azure Table. Required on PUT (CreateOrReplace) requests. */
		table?: string | null;
	}

	/** The properties that are associated with an Azure Table output. */
	export interface AzureTableOutputDataSourcePropertiesFormProperties {

		/** The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountKey: FormControl<string | null | undefined>,

		/** The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountName: FormControl<string | null | undefined>,

		/** The number of rows to write to the Azure Table at a time. */
		batchSize: FormControl<number | null | undefined>,

		/** This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests. */
		partitionKey: FormControl<string | null | undefined>,

		/** This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests. */
		rowKey: FormControl<string | null | undefined>,

		/** The name of the Azure Table. Required on PUT (CreateOrReplace) requests. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateAzureTableOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<AzureTableOutputDataSourcePropertiesFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			batchSize: new FormControl<number | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			rowKey: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a blob output data source. */
	export interface BlobOutputDataSource extends OutputDataSource {

		/** The properties that are associated with a blob output. */
		properties?: BlobOutputDataSourceProperties;
	}

	/** Describes a blob output data source. */
	export interface BlobOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateBlobOutputDataSourceFormGroup() {
		return new FormGroup<BlobOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a blob output. */
	export interface BlobOutputDataSourceProperties {
	}

	/** The properties that are associated with a blob output. */
	export interface BlobOutputDataSourcePropertiesFormProperties {
	}
	export function CreateBlobOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<BlobOutputDataSourcePropertiesFormProperties>({
		});

	}


	/** Describes a DocumentDB output data source. */
	export interface DocumentDbOutputDataSource extends OutputDataSource {

		/** The properties that are associated with a DocumentDB output. */
		properties?: DocumentDbOutputDataSourceProperties;
	}

	/** Describes a DocumentDB output data source. */
	export interface DocumentDbOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateDocumentDbOutputDataSourceFormGroup() {
		return new FormGroup<DocumentDbOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a DocumentDB output. */
	export interface DocumentDbOutputDataSourceProperties {

		/** The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests. */
		accountId?: string | null;

		/** The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests. */
		accountKey?: string | null;

		/** The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests. */
		collectionNamePattern?: string | null;

		/** The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests. */
		database?: string | null;

		/** The name of the field in output events used to specify the primary key which insert or update operations are based on. */
		documentId?: string | null;

		/** The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified. */
		partitionKey?: string | null;
	}

	/** The properties that are associated with a DocumentDB output. */
	export interface DocumentDbOutputDataSourcePropertiesFormProperties {

		/** The DocumentDB account name or ID. Required on PUT (CreateOrReplace) requests. */
		accountId: FormControl<string | null | undefined>,

		/** The account key for the DocumentDB account. Required on PUT (CreateOrReplace) requests. */
		accountKey: FormControl<string | null | undefined>,

		/** The collection name pattern for the collections to be used. The collection name format can be constructed using the optional {partition} token, where partitions start from 0. See the DocumentDB section of https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for more information. Required on PUT (CreateOrReplace) requests. */
		collectionNamePattern: FormControl<string | null | undefined>,

		/** The name of the DocumentDB database. Required on PUT (CreateOrReplace) requests. */
		database: FormControl<string | null | undefined>,

		/** The name of the field in output events used to specify the primary key which insert or update operations are based on. */
		documentId: FormControl<string | null | undefined>,

		/** The name of the field in output events used to specify the key for partitioning output across collections. If 'collectionNamePattern' contains the {partition} token, this property is required to be specified. */
		partitionKey: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDbOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<DocumentDbOutputDataSourcePropertiesFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			accountKey: new FormControl<string | null | undefined>(undefined),
			collectionNamePattern: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Event Hub output data source. */
	export interface EventHubOutputDataSource extends OutputDataSource {

		/** The properties that are associated with an Event Hub output. */
		properties?: EventHubOutputDataSourceProperties;
	}

	/** Describes an Event Hub output data source. */
	export interface EventHubOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateEventHubOutputDataSourceFormGroup() {
		return new FormGroup<EventHubOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventHubOutputDataSourceProperties {
	}
	export interface EventHubOutputDataSourcePropertiesFormProperties {
	}
	export function CreateEventHubOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<EventHubOutputDataSourcePropertiesFormProperties>({
		});

	}


	/** The properties that are associated with data sources that use OAuth as their authentication model. */
	export interface OAuthBasedDataSourceProperties {

		/** A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. */
		refreshToken?: string | null;

		/** The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. */
		tokenUserDisplayName?: string | null;

		/** The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. */
		tokenUserPrincipalName?: string | null;
	}

	/** The properties that are associated with data sources that use OAuth as their authentication model. */
	export interface OAuthBasedDataSourcePropertiesFormProperties {

		/** A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. */
		refreshToken: FormControl<string | null | undefined>,

		/** The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. */
		tokenUserDisplayName: FormControl<string | null | undefined>,

		/** The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. */
		tokenUserPrincipalName: FormControl<string | null | undefined>,
	}
	export function CreateOAuthBasedDataSourcePropertiesFormGroup() {
		return new FormGroup<OAuthBasedDataSourcePropertiesFormProperties>({
			refreshToken: new FormControl<string | null | undefined>(undefined),
			tokenUserDisplayName: new FormControl<string | null | undefined>(undefined),
			tokenUserPrincipalName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An output object, containing all information associated with the named output. All outputs are contained under a streaming job. */
	export interface Output extends SubResource {

		/** The properties that are associated with an output. */
		properties?: OutputProperties;
	}

	/** An output object, containing all information associated with the named output. All outputs are contained under a streaming job. */
	export interface OutputFormProperties extends SubResourceFormProperties {
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the data source that output will be written to. */
	export interface OutputDataSource {

		/** Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. */
		type?: string | null;
	}

	/** Describes the data source that output will be written to. */
	export interface OutputDataSourceFormProperties {

		/** Indicates the type of data source output will be written to. Required on PUT (CreateOrReplace) requests. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataSourceFormGroup() {
		return new FormGroup<OutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing a list of outputs under a streaming job. */
	export interface OutputListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** A list of outputs under a streaming job. Populated by a 'List' operation. */
		value?: Array<Output>;
	}

	/** Object containing a list of outputs under a streaming job. */
	export interface OutputListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOutputListResultFormGroup() {
		return new FormGroup<OutputListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an output. */
	export interface OutputProperties {

		/** Describes the data source that output will be written to. */
		datasource?: OutputDataSource;

		/** Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention. */
		diagnostics?: any;

		/** The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag?: string | null;

		/** Describes how data from an input is serialized or how data is serialized when written to an output. */
		serialization?: any;
	}

	/** The properties that are associated with an output. */
	export interface OutputPropertiesFormProperties {

		/** Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention. */
		diagnostics: FormControl<any | null | undefined>,

		/** The current entity tag for the output. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag: FormControl<string | null | undefined>,

		/** Describes how data from an input is serialized or how data is serialized when written to an output. */
		serialization: FormControl<any | null | undefined>,
	}
	export function CreateOutputPropertiesFormGroup() {
		return new FormGroup<OutputPropertiesFormProperties>({
			diagnostics: new FormControl<any | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			serialization: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Describes a Power BI output data source. */
	export interface PowerBIOutputDataSource extends OutputDataSource {

		/** The properties that are associated with a Power BI output. */
		properties?: PowerBIOutputDataSourceProperties;
	}

	/** Describes a Power BI output data source. */
	export interface PowerBIOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreatePowerBIOutputDataSourceFormGroup() {
		return new FormGroup<PowerBIOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a Power BI output. */
	export interface PowerBIOutputDataSourceProperties extends OAuthBasedDataSourceProperties {

		/** The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests. */
		dataset?: string | null;

		/** The ID of the Power BI group. */
		groupId?: string | null;

		/** The name of the Power BI group. Use this property to help remember which specific Power BI group id was used. */
		groupName?: string | null;

		/** The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests. */
		table?: string | null;
	}

	/** The properties that are associated with a Power BI output. */
	export interface PowerBIOutputDataSourcePropertiesFormProperties extends OAuthBasedDataSourcePropertiesFormProperties {

		/** The name of the Power BI dataset. Required on PUT (CreateOrReplace) requests. */
		dataset: FormControl<string | null | undefined>,

		/** The ID of the Power BI group. */
		groupId: FormControl<string | null | undefined>,

		/** The name of the Power BI group. Use this property to help remember which specific Power BI group id was used. */
		groupName: FormControl<string | null | undefined>,

		/** The name of the Power BI table under the specified dataset. Required on PUT (CreateOrReplace) requests. */
		table: FormControl<string | null | undefined>,
	}
	export function CreatePowerBIOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<PowerBIOutputDataSourcePropertiesFormProperties>({
			refreshToken: new FormControl<string | null | undefined>(undefined),
			tokenUserDisplayName: new FormControl<string | null | undefined>(undefined),
			tokenUserPrincipalName: new FormControl<string | null | undefined>(undefined),
			dataset: new FormControl<string | null | undefined>(undefined),
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a Service Bus Queue output data source. */
	export interface ServiceBusQueueOutputDataSource extends OutputDataSource {

		/** The properties that are associated with a Service Bus Queue output. */
		properties?: ServiceBusQueueOutputDataSourceProperties;
	}

	/** Describes a Service Bus Queue output data source. */
	export interface ServiceBusQueueOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateServiceBusQueueOutputDataSourceFormGroup() {
		return new FormGroup<ServiceBusQueueOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBusQueueOutputDataSourceProperties {
	}
	export interface ServiceBusQueueOutputDataSourcePropertiesFormProperties {
	}
	export function CreateServiceBusQueueOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<ServiceBusQueueOutputDataSourcePropertiesFormProperties>({
		});

	}


	/** Describes a Service Bus Topic output data source. */
	export interface ServiceBusTopicOutputDataSource extends OutputDataSource {

		/** The properties that are associated with a Service Bus Topic output. */
		properties?: ServiceBusTopicOutputDataSourceProperties;
	}

	/** Describes a Service Bus Topic output data source. */
	export interface ServiceBusTopicOutputDataSourceFormProperties extends OutputDataSourceFormProperties {
	}
	export function CreateServiceBusTopicOutputDataSourceFormGroup() {
		return new FormGroup<ServiceBusTopicOutputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceBusTopicOutputDataSourceProperties {
	}
	export interface ServiceBusTopicOutputDataSourcePropertiesFormProperties {
	}
	export function CreateServiceBusTopicOutputDataSourcePropertiesFormGroup() {
		return new FormGroup<ServiceBusTopicOutputDataSourcePropertiesFormProperties>({
		});

	}


	/** The base sub-resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The base sub-resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the outputs under the specified streaming job.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs
		 * @param {string} select The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {OutputListResult} Successfully listed the outputs under the specified streaming job.
		 */
		Outputs_ListByStreamingJob(select: string | null | undefined, api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<OutputListResult> {
			return this.http.get<OutputListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs?select=' + (select == null ? '' : encodeURIComponent(select)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified output.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} outputName The name of the output.
		 * @return {Output} Successfully retrieved the specified output.
		 */
		Outputs_Get(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, outputName: string): Observable<Output> {
			return this.http.get<Output>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an output or replaces an already existing output under an existing streaming job.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} outputName The name of the output.
		 * @param {Output} requestBody The definition of the output that will be used to create a new output or replace the existing one under the streaming job.
		 * @return {Output} The output was successfully created or replaced.
		 */
		Outputs_CreateOrReplace(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, outputName: string, requestBody: Output): Observable<Output> {
			return this.http.put<Output>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an output from the streaming job.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} outputName The name of the output.
		 * @return {void} The output was successfully deleted.
		 */
		Outputs_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, outputName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} outputName The name of the output.
		 * @param {Output} requestBody An Output object. The properties specified here will overwrite the corresponding properties in the existing output (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing output will remain the same and not change as a result of this PATCH operation.
		 * @return {Output} The output was successfully updated.
		 */
		Outputs_Update(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, outputName: string, requestBody: Output): Observable<Output> {
			return this.http.patch<Output>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests whether an output’s datasource is reachable and usable by the Azure Stream Analytics service.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/outputs/{outputName}/test
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} outputName The name of the output.
		 * @param {Output} requestBody If the output specified does not already exist, this parameter must contain the full output definition intended to be tested. If the output specified already exists, this parameter can be left null to test the existing output as is or if specified, the properties specified will overwrite the corresponding properties in the existing output (exactly like a PATCH operation) and the resulting output will be tested.
		 * @return {any} The test operation completed successfully.
		 */
		Outputs_Test(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, outputName: string, requestBody: Output): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/outputs/' + (outputName == null ? '' : encodeURIComponent(outputName)) + '/test?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

