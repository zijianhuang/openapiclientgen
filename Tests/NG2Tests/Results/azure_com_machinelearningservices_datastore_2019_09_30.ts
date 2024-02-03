import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AzureDataLake {

		/** The authority URL used for authentication */
		authorityUrl?: string | null;

		/** The content of the certificate used for authentication */
		certificate?: string | null;

		/** The Client ID/Application ID */
		clientId?: string | null;

		/** The client secret */
		clientSecret?: string | null;

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth?: boolean | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** The resource the service principal/app has access to */
		resourceUri?: string | null;

		/** The Azure Data Lake store name */
		storeName?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;

		/** The ID of the tenant the service principal/app belongs to */
		tenantId?: string | null;

		/** The thumbprint of the certificate above */
		thumbprint?: string | null;
	}
	export interface AzureDataLakeFormProperties {

		/** The authority URL used for authentication */
		authorityUrl: FormControl<string | null | undefined>,

		/** The content of the certificate used for authentication */
		certificate: FormControl<string | null | undefined>,

		/** The Client ID/Application ID */
		clientId: FormControl<string | null | undefined>,

		/** The client secret */
		clientSecret: FormControl<string | null | undefined>,

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth: FormControl<boolean | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource the service principal/app has access to */
		resourceUri: FormControl<string | null | undefined>,

		/** The Azure Data Lake store name */
		storeName: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,

		/** The ID of the tenant the service principal/app belongs to */
		tenantId: FormControl<string | null | undefined>,

		/** The thumbprint of the certificate above */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateAzureDataLakeFormGroup() {
		return new FormGroup<AzureDataLakeFormProperties>({
			authorityUrl: new FormControl<string | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			isCertAuth: new FormControl<boolean | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			storeName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzurePostgreSql {

		/** The Azure PostgreSQL database name */
		databaseName?: string | null;

		/** The Azure PostgreSQL server host endpoint */
		endpoint?: string | null;

		/** The Azure PostgreSQL port number */
		portNumber?: string | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** The Azure PostgreSQL server name */
		serverName?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;

		/** The Azure PostgreSQL user id */
		userId?: string | null;

		/** The Azure PostgreSQL user password */
		userPassword?: string | null;
	}
	export interface AzurePostgreSqlFormProperties {

		/** The Azure PostgreSQL database name */
		databaseName: FormControl<string | null | undefined>,

		/** The Azure PostgreSQL server host endpoint */
		endpoint: FormControl<string | null | undefined>,

		/** The Azure PostgreSQL port number */
		portNumber: FormControl<string | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** The Azure PostgreSQL server name */
		serverName: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,

		/** The Azure PostgreSQL user id */
		userId: FormControl<string | null | undefined>,

		/** The Azure PostgreSQL user password */
		userPassword: FormControl<string | null | undefined>,
	}
	export function CreateAzurePostgreSqlFormGroup() {
		return new FormGroup<AzurePostgreSqlFormProperties>({
			databaseName: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			portNumber: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userPassword: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureSqlDatabase {

		/** The authority URL used for authentication */
		authorityUrl?: string | null;

		/** The content of the certificate used for authentication */
		certificate?: string | null;

		/** The Client ID/Application ID */
		clientId?: string | null;

		/** The client secret */
		clientSecret?: string | null;

		/** The Azure SQL database name */
		databaseName?: string | null;

		/** The server host endpoint */
		endpoint?: string | null;

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth?: boolean | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** The resource the service principal/app has access to */
		resourceUri?: string | null;

		/** The Azure SQL server name */
		serverName?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;

		/** The ID of the tenant the service principal/app belongs to */
		tenantId?: string | null;

		/** The thumbprint of the certificate above */
		thumbprint?: string | null;
	}
	export interface AzureSqlDatabaseFormProperties {

		/** The authority URL used for authentication */
		authorityUrl: FormControl<string | null | undefined>,

		/** The content of the certificate used for authentication */
		certificate: FormControl<string | null | undefined>,

		/** The Client ID/Application ID */
		clientId: FormControl<string | null | undefined>,

		/** The client secret */
		clientSecret: FormControl<string | null | undefined>,

		/** The Azure SQL database name */
		databaseName: FormControl<string | null | undefined>,

		/** The server host endpoint */
		endpoint: FormControl<string | null | undefined>,

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth: FormControl<boolean | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource the service principal/app has access to */
		resourceUri: FormControl<string | null | undefined>,

		/** The Azure SQL server name */
		serverName: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,

		/** The ID of the tenant the service principal/app belongs to */
		tenantId: FormControl<string | null | undefined>,

		/** The thumbprint of the certificate above */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateAzureSqlDatabaseFormGroup() {
		return new FormGroup<AzureSqlDatabaseFormProperties>({
			authorityUrl: new FormControl<string | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			isCertAuth: new FormControl<boolean | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AzureStorage {

		/** Storage Account Key (Deprecated) */
		accountKey?: string | null;

		/** Storage Account Name */
		accountName?: string | null;

		/** Indicate if we are using Workspace ManagedIdentities/MSI token */
		areWorkspaceManagedIdentitiesAllowed?: boolean | null;

		/** If this is an Microsoft.MachineLearning.DataStore.Contracts.DataStoreType.AzureBlob, the length of time (in seconds) to cache files locally after they are accessed (downloaded). */
		blobCacheTimeout?: number | null;
		clientCredentials?: ClientCredentials;

		/** The storage container name */
		containerName?: string | null;

		/** The credential */
		credential?: string | null;

		/** The credential type */
		credentialType?: AzureStorageCredentialType | null;

		/** The host of the container */
		endpoint?: string | null;

		/** Indicate if we are using SAS token or Account Key (Deprecated) */
		isSas?: boolean | null;

		/** The protocol to use. Defaults to https */
		protocol?: string | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** SAS Token for the container (Deprecated) */
		sasToken?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;
	}
	export interface AzureStorageFormProperties {

		/** Storage Account Key (Deprecated) */
		accountKey: FormControl<string | null | undefined>,

		/** Storage Account Name */
		accountName: FormControl<string | null | undefined>,

		/** Indicate if we are using Workspace ManagedIdentities/MSI token */
		areWorkspaceManagedIdentitiesAllowed: FormControl<boolean | null | undefined>,

		/** If this is an Microsoft.MachineLearning.DataStore.Contracts.DataStoreType.AzureBlob, the length of time (in seconds) to cache files locally after they are accessed (downloaded). */
		blobCacheTimeout: FormControl<number | null | undefined>,

		/** The storage container name */
		containerName: FormControl<string | null | undefined>,

		/** The credential */
		credential: FormControl<string | null | undefined>,

		/** The credential type */
		credentialType: FormControl<AzureStorageCredentialType | null | undefined>,

		/** The host of the container */
		endpoint: FormControl<string | null | undefined>,

		/** Indicate if we are using SAS token or Account Key (Deprecated) */
		isSas: FormControl<boolean | null | undefined>,

		/** The protocol to use. Defaults to https */
		protocol: FormControl<string | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** SAS Token for the container (Deprecated) */
		sasToken: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,
	}
	export function CreateAzureStorageFormGroup() {
		return new FormGroup<AzureStorageFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
			areWorkspaceManagedIdentitiesAllowed: new FormControl<boolean | null | undefined>(undefined),
			blobCacheTimeout: new FormControl<number | null | undefined>(undefined),
			containerName: new FormControl<string | null | undefined>(undefined),
			credential: new FormControl<string | null | undefined>(undefined),
			credentialType: new FormControl<AzureStorageCredentialType | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			isSas: new FormControl<boolean | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			sasToken: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientCredentials {

		/** The authority URL used for authentication */
		authorityUrl?: string | null;

		/** The content of the certificate used for authentication */
		certificate?: string | null;

		/** The Client ID/Application ID */
		clientId?: string | null;

		/** The client secret */
		clientSecret?: string | null;

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth?: boolean | null;

		/** Resource Group Name */
		resourceGroup?: string | null;

		/** The resource the service principal/app has access to */
		resourceUri?: string | null;

		/** Subscription Id */
		subscriptionId?: string | null;

		/** The ID of the tenant the service principal/app belongs to */
		tenantId?: string | null;

		/** The thumbprint of the certificate above */
		thumbprint?: string | null;
	}
	export interface ClientCredentialsFormProperties {

		/** The authority URL used for authentication */
		authorityUrl: FormControl<string | null | undefined>,

		/** The content of the certificate used for authentication */
		certificate: FormControl<string | null | undefined>,

		/** The Client ID/Application ID */
		clientId: FormControl<string | null | undefined>,

		/** The client secret */
		clientSecret: FormControl<string | null | undefined>,

		/** Is it using certificate to authenticate. If false then use client secret */
		isCertAuth: FormControl<boolean | null | undefined>,

		/** Resource Group Name */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource the service principal/app has access to */
		resourceUri: FormControl<string | null | undefined>,

		/** Subscription Id */
		subscriptionId: FormControl<string | null | undefined>,

		/** The ID of the tenant the service principal/app belongs to */
		tenantId: FormControl<string | null | undefined>,

		/** The thumbprint of the certificate above */
		thumbprint: FormControl<string | null | undefined>,
	}
	export function CreateClientCredentialsFormGroup() {
		return new FormGroup<ClientCredentialsFormProperties>({
			authorityUrl: new FormControl<string | null | undefined>(undefined),
			certificate: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			isCertAuth: new FormControl<boolean | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AzureStorageCredentialType { None = 'None', Sas = 'Sas', AccountKey = 'AccountKey', ClientCredentials = 'ClientCredentials' }

	export interface DataStore {
		azureDataLakeSection?: AzureDataLake;
		azurePostgreSqlSection?: AzurePostgreSql;
		azureSqlDatabaseSection?: AzureSqlDatabase;
		azureStorageSection?: AzureStorage;

		/** The Azure storage service this datastore points to. */
		dataStoreType?: DataStoreDataStoreType | null;
		glusterFsSection?: GlusterFs;

		/** A read only property that denotes whether the service datastore has been validated with credentials. */
		hasBeenValidated?: boolean | null;

		/** Name of the datastore */
		name?: string | null;

		/** Tags to datastore */
		tags?: {[id: string]: string };
	}
	export interface DataStoreFormProperties {

		/** The Azure storage service this datastore points to. */
		dataStoreType: FormControl<DataStoreDataStoreType | null | undefined>,

		/** A read only property that denotes whether the service datastore has been validated with credentials. */
		hasBeenValidated: FormControl<boolean | null | undefined>,

		/** Name of the datastore */
		name: FormControl<string | null | undefined>,

		/** Tags to datastore */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDataStoreFormGroup() {
		return new FormGroup<DataStoreFormProperties>({
			dataStoreType: new FormControl<DataStoreDataStoreType | null | undefined>(undefined),
			hasBeenValidated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum DataStoreDataStoreType { AzureBlob = 'AzureBlob', AzureFile = 'AzureFile', AzureDataLake = 'AzureDataLake', AzureSqlDatabase = 'AzureSqlDatabase', AzurePostgreSql = 'AzurePostgreSql', DBFS = 'DBFS', AzureDataLakeGen2 = 'AzureDataLakeGen2', GlusterFs = 'GlusterFs' }

	export interface GlusterFs {

		/**
		 * The server address of one of the servers that hosts the GlusterFS. Can be either the IP address
		 * or server name.
		 */
		serverAddress?: string | null;

		/** The name of the created GlusterFS volume. */
		volumeName?: string | null;
	}
	export interface GlusterFsFormProperties {

		/**
		 * The server address of one of the servers that hosts the GlusterFS. Can be either the IP address
		 * or server name.
		 */
		serverAddress: FormControl<string | null | undefined>,

		/** The name of the created GlusterFS volume. */
		volumeName: FormControl<string | null | undefined>,
	}
	export function CreateGlusterFsFormGroup() {
		return new FormGroup<GlusterFsFormProperties>({
			serverAddress: new FormControl<string | null | undefined>(undefined),
			volumeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ErrorDetails {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The error details. */
	export interface ErrorDetailsFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error response. */
	export interface ErrorResponse {

		/** Dictionary containing correlation details for the error. */
		correlation?: {[id: string]: string };

		/** The hosting environment. */
		environment?: string | null;

		/** The root error. */
		error?: RootError;

		/** The Azure region. */
		location?: string | null;

		/** The time in UTC. */
		time?: Date | null;
	}

	/** The error response. */
	export interface ErrorResponseFormProperties {

		/** Dictionary containing correlation details for the error. */
		correlation: FormControl<{[id: string]: string } | null | undefined>,

		/** The hosting environment. */
		environment: FormControl<string | null | undefined>,

		/** The Azure region. */
		location: FormControl<string | null | undefined>,

		/** The time in UTC. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			correlation: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			environment: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The root error. */
	export interface RootError {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code?: string | null;

		/** The related errors that occurred during the request. */
		details?: Array<ErrorDetails>;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** The target of the error (e.g., the name of the property in error). */
		target?: string | null;
	}

	/** The root error. */
	export interface RootErrorFormProperties {

		/** The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** The target of the error (e.g., the name of the property in error). */
		target: FormControl<string | null | undefined>,
	}
	export function CreateRootErrorFormGroup() {
		return new FormGroup<RootErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A nested structure of errors. */
	export interface InnerErrorResponse {

		/** The error code. */
		code?: string | null;

		/** A nested structure of errors. */
		innerError?: InnerErrorResponse;
	}

	/** A nested structure of errors. */
	export interface InnerErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorResponseFormGroup() {
		return new FormGroup<InnerErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of DataStores. */
	export interface PaginatedDataStoreList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type DataStore. */
		value?: Array<DataStore>;
	}

	/** A paginated list of DataStores. */
	export interface PaginatedDataStoreListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedDataStoreListFormGroup() {
		return new FormGroup<PaginatedDataStoreListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Datastores list.
		 * Get the list of Datastores attached to the workspace.
		 * Get datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {Array<string>} dataStoreNames List of Datastore names.
		 * @param {string} continuationToken The Continuation Token.
		 * @param {number} count Count of Datastores to be returned.
		 * @param {boolean} includeSecret Whether to include the datastore secret in the response.
		 * @return {PaginatedDataStoreList} The list of Datastores are returned successfully.
		 */
		DataStores_List(subscriptionId: string, resourceGroupName: string, workspaceName: string, dataStoreNames: Array<string> | null | undefined, continuationToken: string | null | undefined, count: number | null | undefined, includeSecret: boolean | null | undefined): Observable<PaginatedDataStoreList> {
			return this.http.get<PaginatedDataStoreList>(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores&' + dataStoreNames?.map(z => `dataStoreNames=${encodeURIComponent(z)}`).join('&') + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)) + '&count=' + count + '&includeSecret=' + includeSecret, {});
		}

		/**
		 * Create or update a Datastore.
		 * Create or update a Datastore in the given workspace.
		 * Post datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {boolean} createIfNotExists If set to true, the call will create an Datastore if it doesn't exist.
		 * @param {boolean} skipValidation If set to true, the call will skip Datastore validation.
		 * @param {DataStore} requestBody The Datastore details.
		 * @return {void} The Datastore is created/updated successfully.
		 */
		DataStores_Create(subscriptionId: string, resourceGroupName: string, workspaceName: string, createIfNotExists: boolean | null | undefined, skipValidation: boolean | null | undefined, requestBody: DataStore): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores&createIfNotExists=' + createIfNotExists + '&skipValidation=' + skipValidation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all Datastores.
		 * Delete all Datastores in the workspace.
		 * Delete datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @return {void} All the Datastores in the workspace are deleted successfully.
		 */
		DataStores_DeleteAll(subscriptionId: string, resourceGroupName: string, workspaceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Datastore details.
		 * Get details of a Datastore with a specific name.
		 * Get datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} name The Datastore name.
		 * @return {DataStore} The Datastore details are returned successfully.
		 */
		DataStores_Get(subscriptionId: string, resourceGroupName: string, workspaceName: string, name: string): Observable<DataStore> {
			return this.http.get<DataStore>(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update or create a Datastore.
		 * Update or create a Datastore in the given workspace.
		 * Put datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} name The Datastore name.
		 * @param {boolean} createIfNotExists If set to true, the call will create an Datastore if it doesn't exist.
		 * @param {boolean} skipValidation If set to true, the call will skip Datastore validation.
		 * @param {DataStore} requestBody The Datastore details.
		 * @return {void} The Datastore is created/updated successfully.
		 */
		DataStores_Update(subscriptionId: string, resourceGroupName: string, workspaceName: string, name: string, createIfNotExists: boolean | null | undefined, skipValidation: boolean | null | undefined, requestBody: DataStore): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores/' + (name == null ? '' : encodeURIComponent(name)) + '&createIfNotExists=' + createIfNotExists + '&skipValidation=' + skipValidation, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Datastore.
		 * Delete a Datastore with a specific name.
		 * Delete datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/datastores/{name}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} name The Datastore name.
		 * @return {void} The Datastore is deleted successfully.
		 */
		DataStores_Delete(subscriptionId: string, resourceGroupName: string, workspaceName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/datastores/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the default Datastore.
		 * Get the default Datastore in the workspace.
		 * Get datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/default
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @return {DataStore} The default Datastore is returned successfully.
		 */
		DataStores_GetDefault(subscriptionId: string, resourceGroupName: string, workspaceName: string): Observable<DataStore> {
			return this.http.get<DataStore>(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/default', {});
		}

		/**
		 * Set a default Datastore.
		 * Set a default Datastore in the workspace.
		 * Put datastore/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/default/{name}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} name The Datastore name.
		 * @return {void} The default Datastore is set successfully.
		 */
		DataStores_SetDefault(subscriptionId: string, resourceGroupName: string, workspaceName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'datastore/v1.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/default/' + (name == null ? '' : encodeURIComponent(name)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

