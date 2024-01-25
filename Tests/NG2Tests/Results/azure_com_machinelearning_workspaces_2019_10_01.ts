import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The error response send when an operation fails. */
	export interface ErrorResponse {

		/**
		 * error code
		 * Required
		 */
		code: string;

		/**
		 * error message
		 * Required
		 */
		message: string;
	}

	/** The error response send when an operation fails. */
	export interface ErrorResponseFormProperties {

		/**
		 * error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Azure Machine Learning Studio REST API operation */
	export interface Operation {

		/** Display name of operation */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** Azure Machine Learning Studio REST API operation */
	export interface OperationFormProperties {

		/** Display name of operation */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array of operations supported by the resource provider. */
	export interface OperationListResult {

		/** List of AML Studio operations supported by the AML Studio resource provider. */
		value?: Array<Operation>;
	}

	/** An array of operations supported by the resource provider. */
	export interface OperationListResultFormProperties {
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
		});

	}


	/** An Azure resource. */
	export interface Resource {

		/** The resource ID. */
		id?: string | null;

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: string;

		/** The name of the resource. */
		name?: string | null;

		/** Sku of the resource */
		sku?: Sku;

		/** The tags of the resource. */
		tags?: {[id: string]: string };

		/** The type of the resource. */
		type?: string | null;
	}

	/** An Azure resource. */
	export interface ResourceFormProperties {

		/** The resource ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * The location of the resource. This cannot be changed after the resource is created.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** The name of the resource. */
		name: FormControl<string | null | undefined>,

		/** The tags of the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sku of the resource */
	export interface Sku {

		/** Name of the sku */
		name?: string | null;

		/** Tier of the sku like Basic or Enterprise */
		tier?: string | null;
	}

	/** Sku of the resource */
	export interface SkuFormProperties {

		/** Name of the sku */
		name: FormControl<string | null | undefined>,

		/** Tier of the sku like Basic or Enterprise */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that represents a machine learning workspace. */
	export interface Workspace {

		/** The properties of a machine learning workspace. */
		properties?: WorkspaceProperties;
	}

	/** An object that represents a machine learning workspace. */
	export interface WorkspaceFormProperties {
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
		});

	}


	/** The properties of a machine learning workspace. */
	export interface WorkspaceProperties {

		/** The creation time for this workspace resource. */
		creationTime?: string | null;

		/** The key vault identifier used for encrypted workspaces. */
		keyVaultIdentifierId?: string | null;

		/**
		 * The email id of the owner for this workspace.
		 * Required
		 */
		ownerEmail: string;

		/** The regional endpoint for the machine learning studio service which hosts this workspace. */
		studioEndpoint?: string | null;

		/**
		 * The fully qualified arm id of the storage account associated with this workspace.
		 * Required
		 */
		userStorageAccountId: string;

		/** The immutable id associated with this workspace. */
		workspaceId?: string | null;

		/** The current state of workspace resource. */
		workspaceState?: WorkspacePropertiesWorkspaceState | null;

		/** The type of this workspace. */
		workspaceType?: WorkspacePropertiesWorkspaceType | null;
	}

	/** The properties of a machine learning workspace. */
	export interface WorkspacePropertiesFormProperties {

		/** The creation time for this workspace resource. */
		creationTime: FormControl<string | null | undefined>,

		/** The key vault identifier used for encrypted workspaces. */
		keyVaultIdentifierId: FormControl<string | null | undefined>,

		/**
		 * The email id of the owner for this workspace.
		 * Required
		 */
		ownerEmail: FormControl<string | null | undefined>,

		/** The regional endpoint for the machine learning studio service which hosts this workspace. */
		studioEndpoint: FormControl<string | null | undefined>,

		/**
		 * The fully qualified arm id of the storage account associated with this workspace.
		 * Required
		 */
		userStorageAccountId: FormControl<string | null | undefined>,

		/** The immutable id associated with this workspace. */
		workspaceId: FormControl<string | null | undefined>,

		/** The current state of workspace resource. */
		workspaceState: FormControl<WorkspacePropertiesWorkspaceState | null | undefined>,

		/** The type of this workspace. */
		workspaceType: FormControl<WorkspacePropertiesWorkspaceType | null | undefined>,
	}
	export function CreateWorkspacePropertiesFormGroup() {
		return new FormGroup<WorkspacePropertiesFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			keyVaultIdentifierId: new FormControl<string | null | undefined>(undefined),
			ownerEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			studioEndpoint: new FormControl<string | null | undefined>(undefined),
			userStorageAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined),
			workspaceState: new FormControl<WorkspacePropertiesWorkspaceState | null | undefined>(undefined),
			workspaceType: new FormControl<WorkspacePropertiesWorkspaceType | null | undefined>(undefined),
		});

	}

	export enum WorkspacePropertiesWorkspaceState { Deleted = 0, Enabled = 1, Disabled = 2, Migrated = 3, Updated = 4, Registered = 5, Unregistered = 6 }

	export enum WorkspacePropertiesWorkspaceType { Production = 0, Free = 1, Anonymous = 2, PaidStandard = 3, PaidPremium = 4 }


	/** Workspace authorization keys for a workspace. */
	export interface WorkspaceKeysResponse {

		/** Primary authorization key for this workspace. */
		primaryToken?: string | null;

		/** Secondary authorization key for this workspace. */
		secondaryToken?: string | null;
	}

	/** Workspace authorization keys for a workspace. */
	export interface WorkspaceKeysResponseFormProperties {

		/** Primary authorization key for this workspace. */
		primaryToken: FormControl<string | null | undefined>,

		/** Secondary authorization key for this workspace. */
		secondaryToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceKeysResponseFormGroup() {
		return new FormGroup<WorkspaceKeysResponseFormProperties>({
			primaryToken: new FormControl<string | null | undefined>(undefined),
			secondaryToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a request to list machine learning workspace keys. */
	export interface WorkspaceListResult {

		/** The URI that can be used to request the next list of machine learning workspaces. */
		nextLink?: string | null;

		/** The list of machine learning workspaces. Since this list may be incomplete, the nextLink field should be used to request the next list of machine learning workspaces. */
		value?: Array<Workspace>;
	}

	/** The result of a request to list machine learning workspace keys. */
	export interface WorkspaceListResultFormProperties {

		/** The URI that can be used to request the next list of machine learning workspaces. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceListResultFormGroup() {
		return new FormGroup<WorkspaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The parameters for updating the properties of a machine learning workspace. */
	export interface WorkspacePropertiesUpdateParameters {

		/** The key vault identifier used for encrypted workspaces. */
		keyVaultIdentifierId?: string | null;

		/** Sku of the resource */
		sku?: Sku;

		/** The current state of workspace resource. */
		workspaceState?: WorkspacePropertiesWorkspaceState | null;
	}

	/** The parameters for updating the properties of a machine learning workspace. */
	export interface WorkspacePropertiesUpdateParametersFormProperties {

		/** The key vault identifier used for encrypted workspaces. */
		keyVaultIdentifierId: FormControl<string | null | undefined>,

		/** The current state of workspace resource. */
		workspaceState: FormControl<WorkspacePropertiesWorkspaceState | null | undefined>,
	}
	export function CreateWorkspacePropertiesUpdateParametersFormGroup() {
		return new FormGroup<WorkspacePropertiesUpdateParametersFormProperties>({
			keyVaultIdentifierId: new FormControl<string | null | undefined>(undefined),
			workspaceState: new FormControl<WorkspacePropertiesWorkspaceState | null | undefined>(undefined),
		});

	}


	/** The parameters for updating a machine learning workspace. */
	export interface WorkspaceUpdateParameters {

		/** The parameters for updating the properties of a machine learning workspace. */
		properties?: WorkspacePropertiesUpdateParameters;

		/** The resource tags for the machine learning workspace. */
		tags?: {[id: string]: string };
	}

	/** The parameters for updating a machine learning workspace. */
	export interface WorkspaceUpdateParametersFormProperties {

		/** The resource tags for the machine learning workspace. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWorkspaceUpdateParametersFormGroup() {
		return new FormGroup<WorkspaceUpdateParametersFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available Azure Machine Learning Studio REST API operations.
		 * Get providers/Microsoft.MachineLearning/operations
		 * @param {string} api_version The client API version.
		 * @return {OperationListResult} The request was successful; the request was well-formed and received properly.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.MachineLearning/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the available machine learning workspaces under the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MachineLearning/workspaces
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @return {WorkspaceListResult} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_List(api_version: string, subscriptionId: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MachineLearning/workspaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the available machine learning workspaces under the specified resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @return {WorkspaceListResult} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_ListByResourceGroup(api_version: string, subscriptionId: string, resourceGroupName: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the properties of the specified machine learning workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @return {Workspace} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_Get(api_version: string, subscriptionId: string, resourceGroupName: string, workspaceName: string): Observable<Workspace> {
			return this.http.get<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a workspace with the specified parameters.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @param {Workspace} requestBody The parameters for creating or updating a machine learning workspace.
		 * @return {Workspace} The request was successful; the resource already exists and was updated.
		 */
		Workspaces_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: Workspace): Observable<Workspace> {
			return this.http.put<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a machine learning workspace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, workspaceName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a machine learning workspace with the specified parameters.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @param {WorkspaceUpdateParameters} requestBody The parameters for updating a machine learning workspace.
		 * @return {Workspace} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_Update(api_version: string, subscriptionId: string, resourceGroupName: string, workspaceName: string, requestBody: WorkspaceUpdateParameters): Observable<Workspace> {
			return this.http.patch<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the authorization keys associated with this workspace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}/listWorkspaceKeys
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @return {WorkspaceKeysResponse} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_ListWorkspaceKeys(api_version: string, subscriptionId: string, workspaceName: string, resourceGroupName: string): Observable<WorkspaceKeysResponse> {
			return this.http.post<WorkspaceKeysResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/listWorkspaceKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Resync storage keys associated with this workspace.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/workspaces/{workspaceName}/resyncStorageKeys
		 * @param {string} api_version The client API version.
		 * @param {string} subscriptionId The Microsoft Azure subscription ID.
		 * @param {string} workspaceName The name of the machine learning workspace.
		 * @param {string} resourceGroupName The name of the resource group to which the machine learning workspace belongs.
		 * @return {void} The request was successful; the request was well-formed and received properly.
		 */
		Workspaces_ResyncStorageKeys(api_version: string, subscriptionId: string, workspaceName: string, resourceGroupName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MachineLearning/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '/resyncStorageKeys?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

}

