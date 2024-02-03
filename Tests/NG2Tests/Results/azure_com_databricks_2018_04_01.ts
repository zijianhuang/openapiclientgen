import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorDetail {

		/**
		 * The error's code.
		 * Required
		 */
		code: string;

		/**
		 * A human readable error message.
		 * Required
		 */
		message: string;

		/** Indicates which property in the request is responsible for the error. */
		target?: string | null;
	}
	export interface ErrorDetailFormProperties {

		/**
		 * The error's code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A human readable error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Indicates which property in the request is responsible for the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorInfo {

		/**
		 * A machine readable error code.
		 * Required
		 */
		code: string;

		/** error details. */
		details?: Array<ErrorDetail>;

		/** Inner error details if they exist. */
		innererror?: string | null;

		/**
		 * A human readable error message.
		 * Required
		 */
		message: string;
	}
	export interface ErrorInfoFormProperties {

		/**
		 * A machine readable error code.
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Inner error details if they exist. */
		innererror: FormControl<string | null | undefined>,

		/**
		 * A human readable error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			innererror: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details when the response code indicates an error. */
	export interface ErrorResponse {

		/** Required */
		error: ErrorInfo;
	}

	/** Contains details when the response code indicates an error. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** REST API operation */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** REST API operation */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
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


	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of Resource Provider operations supported by the Resource Provider resource provider. */
		value?: Array<Operation>;
	}

	/** Result of the request to list Resource Provider operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provisioning status of the workspace. */
	export enum ProvisioningState { Accepted = 'Accepted', Running = 'Running', Ready = 'Ready', Creating = 'Creating', Created = 'Created', Deleting = 'Deleting', Deleted = 'Deleted', Canceled = 'Canceled', Failed = 'Failed', Succeeded = 'Succeeded', Updating = 'Updating' }


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SKU for the resource. */
	export interface Sku {

		/**
		 * The SKU name.
		 * Required
		 */
		name: string;

		/** The SKU tier. */
		tier?: string | null;
	}

	/** SKU for the resource. */
	export interface SkuFormProperties {

		/**
		 * The SKU name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The SKU tier. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Information about workspace. */
	export interface Workspace extends TrackedResource {

		/**
		 * The workspace properties.
		 * Required
		 */
		properties: WorkspaceProperties;

		/** SKU for the resource. */
		sku?: Sku;
	}

	/** Information about workspace. */
	export interface WorkspaceFormProperties extends TrackedResourceFormProperties {
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** The value which should be used for this field. */
	export interface WorkspaceCustomBooleanParameter {

		/** Provisioning status of the workspace. */
		type?: WorkspaceCustomBooleanParameterType | null;

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: boolean;
	}

	/** The value which should be used for this field. */
	export interface WorkspaceCustomBooleanParameterFormProperties {

		/** Provisioning status of the workspace. */
		type: FormControl<WorkspaceCustomBooleanParameterType | null | undefined>,

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceCustomBooleanParameterFormGroup() {
		return new FormGroup<WorkspaceCustomBooleanParameterFormProperties>({
			type: new FormControl<WorkspaceCustomBooleanParameterType | null | undefined>(undefined),
			value: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WorkspaceCustomBooleanParameterType { Bool = 'Bool', Object = 'Object', String = 'String' }


	/** The value which should be used for this field. */
	export interface WorkspaceCustomObjectParameter {

		/** Provisioning status of the workspace. */
		type?: WorkspaceCustomBooleanParameterType | null;

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: string;
	}

	/** The value which should be used for this field. */
	export interface WorkspaceCustomObjectParameterFormProperties {

		/** Provisioning status of the workspace. */
		type: FormControl<WorkspaceCustomBooleanParameterType | null | undefined>,

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceCustomObjectParameterFormGroup() {
		return new FormGroup<WorkspaceCustomObjectParameterFormProperties>({
			type: new FormControl<WorkspaceCustomBooleanParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provisioning status of the workspace. */
	export enum WorkspaceCustomParameterType { Bool = 'Bool', Object = 'Object', String = 'String' }


	/** Custom Parameters used for Cluster Creation. */
	export interface WorkspaceCustomParameters {

		/** The Value. */
		amlWorkspaceId?: WorkspaceCustomStringParameter;

		/** The Value. */
		customPrivateSubnetName?: WorkspaceCustomStringParameter;

		/** The Value. */
		customPublicSubnetName?: WorkspaceCustomStringParameter;

		/** The Value. */
		customVirtualNetworkId?: WorkspaceCustomStringParameter;

		/** The value which should be used for this field. */
		enableNoPublicIp?: WorkspaceCustomBooleanParameter;

		/** The Value. */
		loadBalancerBackendPoolName?: WorkspaceCustomStringParameter;

		/** The Value. */
		loadBalancerId?: WorkspaceCustomStringParameter;

		/** The Value. */
		relayNamespaceName?: WorkspaceCustomStringParameter;

		/** The value which should be used for this field. */
		resourceTags?: WorkspaceCustomObjectParameter;

		/** The Value. */
		storageAccountName?: WorkspaceCustomStringParameter;

		/** The Value. */
		storageAccountSkuName?: WorkspaceCustomStringParameter;

		/** The Value. */
		vnetAddressPrefix?: WorkspaceCustomStringParameter;
	}

	/** Custom Parameters used for Cluster Creation. */
	export interface WorkspaceCustomParametersFormProperties {
	}
	export function CreateWorkspaceCustomParametersFormGroup() {
		return new FormGroup<WorkspaceCustomParametersFormProperties>({
		});

	}


	/** The Value. */
	export interface WorkspaceCustomStringParameter {

		/** Provisioning status of the workspace. */
		type?: WorkspaceCustomBooleanParameterType | null;

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: string;
	}

	/** The Value. */
	export interface WorkspaceCustomStringParameterFormProperties {

		/** Provisioning status of the workspace. */
		type: FormControl<WorkspaceCustomBooleanParameterType | null | undefined>,

		/**
		 * The value which should be used for this field.
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceCustomStringParameterFormGroup() {
		return new FormGroup<WorkspaceCustomStringParameterFormProperties>({
			type: new FormControl<WorkspaceCustomBooleanParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of workspaces. */
	export interface WorkspaceListResult {

		/** The URL to use for getting the next set of results. */
		nextLink?: string | null;

		/** The array of workspaces. */
		value?: Array<Workspace>;
	}

	/** List of workspaces. */
	export interface WorkspaceListResultFormProperties {

		/** The URL to use for getting the next set of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceListResultFormGroup() {
		return new FormGroup<WorkspaceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workspace properties. */
	export interface WorkspaceProperties {

		/** The workspace provider authorizations. */
		authorizations?: Array<WorkspaceProviderAuthorization>;

		/**
		 * The managed resource group Id.
		 * Required
		 */
		managedResourceGroupId: string;

		/** Custom Parameters used for Cluster Creation. */
		parameters?: WorkspaceCustomParameters;

		/** Provisioning status of the workspace. */
		provisioningState?: ProvisioningState | null;

		/** The blob URI where the UI definition file is located. */
		uiDefinitionUri?: string | null;
	}

	/** The workspace properties. */
	export interface WorkspacePropertiesFormProperties {

		/**
		 * The managed resource group Id.
		 * Required
		 */
		managedResourceGroupId: FormControl<string | null | undefined>,

		/** Provisioning status of the workspace. */
		provisioningState: FormControl<ProvisioningState | null | undefined>,

		/** The blob URI where the UI definition file is located. */
		uiDefinitionUri: FormControl<string | null | undefined>,
	}
	export function CreateWorkspacePropertiesFormGroup() {
		return new FormGroup<WorkspacePropertiesFormProperties>({
			managedResourceGroupId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provisioningState: new FormControl<ProvisioningState | null | undefined>(undefined),
			uiDefinitionUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The workspace provider authorization. */
	export interface WorkspaceProviderAuthorization {

		/**
		 * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
		 * Required
		 */
		principalId: string;

		/**
		 * The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.
		 * Required
		 */
		roleDefinitionId: string;
	}

	/** The workspace provider authorization. */
	export interface WorkspaceProviderAuthorizationFormProperties {

		/**
		 * The provider's principal identifier. This is the identity that the provider will use to call ARM to manage the workspace resources.
		 * Required
		 */
		principalId: FormControl<string | null | undefined>,

		/**
		 * The provider's role definition identifier. This role will define all the permissions that the provider must have on the workspace's container resource group. This role definition cannot have permission to delete the resource group.
		 * Required
		 */
		roleDefinitionId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceProviderAuthorizationFormGroup() {
		return new FormGroup<WorkspaceProviderAuthorizationFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleDefinitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An update to a workspace. */
	export interface WorkspaceUpdate {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** An update to a workspace. */
	export interface WorkspaceUpdateFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWorkspaceUpdateFormGroup() {
		return new FormGroup<WorkspaceUpdateFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the available RP operations.
		 * Get providers/Microsoft.Databricks/operations
		 * @param {string} api_version The API version to use for this operation.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Databricks/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the workspaces within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Databricks/workspaces
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {WorkspaceListResult} OK - Returns an array of workspaces.
		 */
		Workspaces_ListBySubscription(api_version: string, subscriptionId: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Databricks/workspaces?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all the workspaces within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {WorkspaceListResult} OK - Returns an array of workspaces.
		 */
		Workspaces_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<WorkspaceListResult> {
			return this.http.get<WorkspaceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Databricks/workspaces&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the workspace.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {Workspace} OK - Returns the workspace.
		 */
		Workspaces_Get(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string): Observable<Workspace> {
			return this.http.get<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Databricks/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new workspace.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {Workspace} requestBody Parameters supplied to the create or update a workspace.
		 * @return {Workspace} Created - Returns information about the workspace, including provisioning status.
		 */
		Workspaces_CreateOrUpdate(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string, requestBody: Workspace): Observable<Workspace> {
			return this.http.put<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Databricks/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the workspace.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @return {void} 
		 */
		Workspaces_Delete(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Databricks/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a workspace.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Databricks/workspaces/{workspaceName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} workspaceName The name of the workspace.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {WorkspaceUpdate} requestBody The update to the workspace.
		 * @return {Workspace} Successfully updated the workspace.
		 */
		Workspaces_Update(resourceGroupName: string, workspaceName: string, api_version: string, subscriptionId: string, requestBody: WorkspaceUpdate): Observable<Workspace> {
			return this.http.patch<Workspace>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Databricks/workspaces/' + (workspaceName == null ? '' : encodeURIComponent(workspaceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

