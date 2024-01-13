import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details of an Artifact. */
	export interface Artifact {

		/** The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}. */
		artifactId?: string | null;

		/**
		 * The name of container. Artifacts can be grouped by container.
		 * Required
		 */
		container: string;

		/** The Date and Time at which the Artifact is created. The DateTime is in UTC. */
		createdTime?: Date | null;
		dataPath?: DataPath;

		/** The Etag of the Artifact. */
		etag?: string | null;

		/**
		 * The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
		 * Required
		 */
		origin: string;

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: string;
	}

	/** Details of an Artifact. */
	export interface ArtifactFormProperties {

		/** The identifier of an Artifact. Format of ArtifactId - {Origin}/{Container}/{Path}. */
		artifactId: FormControl<string | null | undefined>,

		/**
		 * The name of container. Artifacts can be grouped by container.
		 * Required
		 */
		container: FormControl<string | null | undefined>,

		/** The Date and Time at which the Artifact is created. The DateTime is in UTC. */
		createdTime: FormControl<Date | null | undefined>,

		/** The Etag of the Artifact. */
		etag: FormControl<string | null | undefined>,

		/**
		 * The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset' and 'Unknown'.
		 * Required
		 */
		origin: FormControl<string | null | undefined>,

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdTime: new FormControl<Date | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DataPath {
		dataStoreName?: string | null;
		relativePath?: string | null;
		sqlDataPath?: SqlDataPath;
	}
	export interface DataPathFormProperties {
		dataStoreName: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
	}
	export function CreateDataPathFormGroup() {
		return new FormGroup<DataPathFormProperties>({
			dataStoreName: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SqlDataPath {
		sqlQuery?: string | null;
		sqlStoredProcedureName?: string | null;
		sqlStoredProcedureParams?: Array<StoredProcedureParameter>;
		sqlTableName?: string | null;
	}
	export interface SqlDataPathFormProperties {
		sqlQuery: FormControl<string | null | undefined>,
		sqlStoredProcedureName: FormControl<string | null | undefined>,
		sqlTableName: FormControl<string | null | undefined>,
	}
	export function CreateSqlDataPathFormGroup() {
		return new FormGroup<SqlDataPathFormProperties>({
			sqlQuery: new FormControl<string | null | undefined>(undefined),
			sqlStoredProcedureName: new FormControl<string | null | undefined>(undefined),
			sqlTableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StoredProcedureParameter {
		name?: string | null;
		type?: StoredProcedureParameterType | null;
		value?: string | null;
	}
	export interface StoredProcedureParameterFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<StoredProcedureParameterType | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStoredProcedureParameterFormGroup() {
		return new FormGroup<StoredProcedureParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<StoredProcedureParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StoredProcedureParameterType { String = 0, Int = 1, Decimal = 2, Guid = 3, Boolean = 4, Date = 5 }


	/** Details of the Artifact Container's shared access signature. */
	export interface ArtifactContainerSas {

		/** The Prefix to the Artifact in the Blob. */
		artifactPrefix?: string | null;

		/**
		 * The shared access signature of the Container.
		 * Required
		 */
		containerSas: string;

		/**
		 * The URI of the Container.
		 * Required
		 */
		containerUri: string;

		/** The Prefix to the Blobs in the Container. */
		prefix?: string | null;
	}

	/** Details of the Artifact Container's shared access signature. */
	export interface ArtifactContainerSasFormProperties {

		/** The Prefix to the Artifact in the Blob. */
		artifactPrefix: FormControl<string | null | undefined>,

		/**
		 * The shared access signature of the Container.
		 * Required
		 */
		containerSas: FormControl<string | null | undefined>,

		/**
		 * The URI of the Container.
		 * Required
		 */
		containerUri: FormControl<string | null | undefined>,

		/** The Prefix to the Blobs in the Container. */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateArtifactContainerSasFormGroup() {
		return new FormGroup<ArtifactContainerSasFormProperties>({
			artifactPrefix: new FormControl<string | null | undefined>(undefined),
			containerSas: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			containerUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of an Artifact Content Information. */
	export interface ArtifactContentInformation {

		/** The name of container. Artifacts can be grouped by container. */
		container?: string | null;

		/** The URI of the content. */
		contentUri?: string | null;

		/** The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'. */
		origin?: string | null;

		/** The path to the Artifact in a container. */
		path?: string | null;
	}

	/** Details of an Artifact Content Information. */
	export interface ArtifactContentInformationFormProperties {

		/** The name of container. Artifacts can be grouped by container. */
		container: FormControl<string | null | undefined>,

		/** The URI of the content. */
		contentUri: FormControl<string | null | undefined>,

		/** The origin of the Artifact creation request. Available origins are 'ExperimentRun', 'LocalUpload', 'WebUpload', 'Dataset', 'ComputeRecord', 'Metric', and 'Unknown'. */
		origin: FormControl<string | null | undefined>,

		/** The path to the Artifact in a container. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactContentInformationFormGroup() {
		return new FormGroup<ArtifactContentInformationFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			contentUri: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains list of Artifact Ids. */
	export interface ArtifactIdList {

		/**
		 * List of Artifacts Ids.
		 * Required
		 */
		artifactIds: Array<string>;
	}

	/** Contains list of Artifact Ids. */
	export interface ArtifactIdListFormProperties {
	}
	export function CreateArtifactIdListFormGroup() {
		return new FormGroup<ArtifactIdListFormProperties>({
		});

	}


	/** Details of an Artifact Path. */
	export interface ArtifactPath {

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: string;
	}

	/** Details of an Artifact Path. */
	export interface ArtifactPathFormProperties {

		/**
		 * The path to the Artifact in a container.
		 * Required
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateArtifactPathFormGroup() {
		return new FormGroup<ArtifactPathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains list of Artifact Paths. */
	export interface ArtifactPathList {

		/**
		 * List of Artifact Paths.
		 * Required
		 */
		paths: Array<ArtifactPath>;
	}

	/** Contains list of Artifact Paths. */
	export interface ArtifactPathListFormProperties {
	}
	export function CreateArtifactPathListFormGroup() {
		return new FormGroup<ArtifactPathListFormProperties>({
		});

	}


	/** Results of the Batch Artifact Content Information request. */
	export interface BatchArtifactContentInformationResult {

		/** Artifact Content Information details of the Artifact Ids requested. */
		artifactContentInformation?: {[id: string]: ArtifactContentInformation };

		/** Artifact details of the Artifact Ids requested. */
		artifacts?: {[id: string]: Artifact };

		/** Errors occurred while fetching the requested Artifact Ids. */
		errors?: {[id: string]: ErrorResponse };
	}

	/** Results of the Batch Artifact Content Information request. */
	export interface BatchArtifactContentInformationResultFormProperties {

		/** Artifact Content Information details of the Artifact Ids requested. */
		artifactContentInformation: FormControl<{[id: string]: ArtifactContentInformation } | null | undefined>,

		/** Artifact details of the Artifact Ids requested. */
		artifacts: FormControl<{[id: string]: Artifact } | null | undefined>,

		/** Errors occurred while fetching the requested Artifact Ids. */
		errors: FormControl<{[id: string]: ErrorResponse } | null | undefined>,
	}
	export function CreateBatchArtifactContentInformationResultFormGroup() {
		return new FormGroup<BatchArtifactContentInformationResultFormProperties>({
			artifactContentInformation: new FormControl<{[id: string]: ArtifactContentInformation } | null | undefined>(undefined),
			artifacts: new FormControl<{[id: string]: Artifact } | null | undefined>(undefined),
			errors: new FormControl<{[id: string]: ErrorResponse } | null | undefined>(undefined),
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


	/** A paginated list of ArtifactContentInformations. */
	export interface PaginatedArtifactContentInformationList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type ArtifactContentInformation. */
		value?: Array<ArtifactContentInformation>;
	}

	/** A paginated list of ArtifactContentInformations. */
	export interface PaginatedArtifactContentInformationListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedArtifactContentInformationListFormGroup() {
		return new FormGroup<PaginatedArtifactContentInformationListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A paginated list of Artifacts. */
	export interface PaginatedArtifactList {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken?: string | null;

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink?: string | null;

		/** An array of objects of type Artifact. */
		value?: Array<Artifact>;
	}

	/** A paginated list of Artifacts. */
	export interface PaginatedArtifactListFormProperties {

		/** The token used in retrieving the next page.  If null, there are no additional pages. */
		continuationToken: FormControl<string | null | undefined>,

		/** The link to the next page constructed using the continuationToken.  If null, there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePaginatedArtifactListFormGroup() {
		return new FormGroup<PaginatedArtifactListFormProperties>({
			continuationToken: new FormControl<string | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Batch Artifacts by Ids.
		 * Get Batch Artifacts by the specific Ids.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/batch/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {ArtifactIdList} requestBody The command for Batch Artifact get request.
		 * @return {BatchArtifactContentInformationResult} The requested Batch Artifacts are returned successfully.
		 */
		Artifacts_BatchGetById(subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: ArtifactIdList): Observable<BatchArtifactContentInformationResult> {
			return this.http.post<BatchArtifactContentInformationResult>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/batch/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create Artifact.
		 * Create an Artifact.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {Artifact} requestBody The Artifact details.
		 * @return {Artifact} The Artifact is created successfully.
		 */
		Artifacts_Create(subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: Artifact): Observable<Artifact> {
			return this.http.post<Artifact>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create an Artifact for an existing data location.
		 * Create an Artifact for an existing dataPath.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/register
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {Artifact} requestBody The Artifact creation details.
		 * @return {Artifact} The Artifact is created successfully.
		 */
		Artifacts_Register(subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: Artifact): Observable<Artifact> {
			return this.http.post<Artifact>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Batch Artifacts storage by Ids.
		 * Get Batch Artifacts storage by specific Ids.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/storageuri/batch/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {ArtifactIdList} requestBody The list of artifactIds to get.
		 * @return {BatchArtifactContentInformationResult} The Batch Artifact's storage are returned successfully.
		 */
		Artifacts_BatchGetStorageById(subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: ArtifactIdList): Observable<BatchArtifactContentInformationResult> {
			return this.http.post<BatchArtifactContentInformationResult>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/storageuri/batch/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Artifacts metadata in a container or path.
		 * Get Artifacts metadata in a specific container or path.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @param {string} continuationToken The continuation token.
		 * @return {PaginatedArtifactList} The details of the Artifacts are returned successfully.
		 */
		Artifacts_ListInContainer(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined, continuationToken: string | null | undefined): Observable<PaginatedArtifactList> {
			return this.http.get<PaginatedArtifactList>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Delete Artifact Metadata.
		 * Delete Artifact Metadata in a specific container.
		 * Delete artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {boolean} hardDelete If set to true. The delete cannot be revert at later time.
		 * @return {void} The Artifact metadata deleted successfully.
		 */
		Artifacts_DeleteMetaDataInContainer(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, hardDelete: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/batch&hardDelete=' + hardDelete, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Batch ingest using shared access signature.
		 * Ingest Batch Artifacts using shared access signature.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/ingest/containersas
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {ArtifactContainerSas} requestBody The artifact container shared access signature to use for batch ingest.
		 * @return {PaginatedArtifactList} The Batch is ingested using shared access signature successfully.
		 */
		Artifacts_BatchIngestFromSas(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, requestBody: ArtifactContainerSas): Observable<PaginatedArtifactList> {
			return this.http.post<PaginatedArtifactList>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/batch/ingest/containersas', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a batch of empty Artifacts.
		 * Create a Batch of empty Artifacts from the supplied paths.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {ArtifactPathList} requestBody The list of Artifact paths to create.
		 * @return {BatchArtifactContentInformationResult} The Batch of empty Artifacts created successfully.
		 */
		Artifacts_BatchCreateEmptyArtifacts(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, requestBody: ArtifactPathList): Observable<BatchArtifactContentInformationResult> {
			return this.http.post<BatchArtifactContentInformationResult>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/batch/metadata', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Batch of Artifact Metadata.
		 * Delete a Batch of Artifact Metadata.
		 * Post artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/batch/metadata:delete
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {boolean} hardDelete If set to true, the delete cannot be reverted at a later time.
		 * @param {ArtifactPathList} requestBody The list of Artifact paths to delete.
		 * @return {void} The batch delete of Artifact metadata completed successfully.
		 */
		Artifacts_DeleteBatchMetaData(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, hardDelete: boolean | null | undefined, requestBody: ArtifactPathList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/batch/metadata:delete&hardDelete=' + hardDelete, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Artifact content by Id.
		 * Get Artifact content of a specific Id.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/content
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @return {string} File Response
		 */
		Artifacts_Download(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/content&path=' + (path == null ? '' : encodeURIComponent(path)), { responseType: 'text' });
		}

		/**
		 * Get Artifact content information.
		 * Get content information of an Artifact.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/contentinfo
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @return {ArtifactContentInformation} The Artifact content information is returned successfully.
		 */
		Artifacts_GetContentInformation(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined): Observable<ArtifactContentInformation> {
			return this.http.get<ArtifactContentInformation>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/contentinfo&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Get Artifact storage content information.
		 * Get storage content information of an Artifact.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/contentinfo/storageuri
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @return {ArtifactContentInformation} The Artifact storage content information is returned successfully.
		 */
		Artifacts_GetStorageContentInformation(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined): Observable<ArtifactContentInformation> {
			return this.http.get<ArtifactContentInformation>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/contentinfo/storageuri&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Get Artifact metadata by Id.
		 * Get Artifact metadata for a specific Id.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @return {Artifact} The details of the Artifact are returned successfully.
		 */
		Artifacts_Get(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string): Observable<Artifact> {
			return this.http.get<Artifact>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/metadata&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}

		/**
		 * Delete Artifact Metadata.
		 * Delete an Artifact Metadata.
		 * Delete artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/metadata
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @param {boolean} hardDelete If set to true. The delete cannot be revert at later time.
		 * @return {void} The Artifact metadata deleted successfully.
		 */
		Artifacts_DeleteMetaData(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined, hardDelete: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/metadata&path=' + (path == null ? '' : encodeURIComponent(path)) + '&hardDelete=' + hardDelete, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get shared access signature for an Artifact
		 * Get shared access signature for an Artifact in specific path.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/prefix/contentinfo
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @param {string} continuationToken The continuation token.
		 * @return {PaginatedArtifactContentInformationList} The Artifact writable shared access signature is returned successfully.
		 */
		Artifacts_ListSasByPrefix(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined, continuationToken: string | null | undefined): Observable<PaginatedArtifactContentInformationList> {
			return this.http.get<PaginatedArtifactContentInformationList>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/prefix/contentinfo&path=' + (path == null ? '' : encodeURIComponent(path)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Get storage Uri for Artifacts in a path.
		 * Get storage Uri for Artifacts in a specific path.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/prefix/contentinfo/storageuri
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @param {string} continuationToken The continuation token.
		 * @return {PaginatedArtifactContentInformationList} The Artifact storage uri is returned successfully.
		 */
		Artifacts_ListStorageUriByPrefix(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined, continuationToken: string | null | undefined): Observable<PaginatedArtifactContentInformationList> {
			return this.http.get<PaginatedArtifactContentInformationList>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/prefix/contentinfo/storageuri&path=' + (path == null ? '' : encodeURIComponent(path)) + '&continuationToken=' + (continuationToken == null ? '' : encodeURIComponent(continuationToken)), {});
		}

		/**
		 * Get writable shared access signature for Artifact.
		 * Get writable shared access signature for a specific Artifact.
		 * Get artifact/v2.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/artifacts/{origin}/{container}/write
		 * @param {string} subscriptionId The Azure Subscription ID.
		 * @param {string} resourceGroupName The Name of the resource group in which the workspace is located.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} origin The origin of the Artifact.
		 * @param {string} container The container name.
		 * @param {string} path The Artifact Path.
		 * @return {ArtifactContentInformation} The Artifact writable shared access signature is returned successfully.
		 */
		Artifacts_GetSas(subscriptionId: string, resourceGroupName: string, workspaceName: string, origin: string, container: string, path: string | null | undefined): Observable<ArtifactContentInformation> {
			return this.http.get<ArtifactContentInformation>(this.baseUri + 'artifact/v2.0/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearningServices/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/artifacts/' + (origin == null ? '' : encodeURIComponent(origin)) + '/' + (container == null ? '' : encodeURIComponent(container)) + '/write&path=' + (path == null ? '' : encodeURIComponent(path)), {});
		}
	}

}

