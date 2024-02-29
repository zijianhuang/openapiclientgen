import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure Monitor PrivateLinkScope definition. */
	export interface AzureMonitorPrivateLinkScope extends PrivateLinkScopesResource {

		/**
		 * Properties that define a Azure Monitor PrivateLinkScope resource.
		 * Required
		 */
		properties: AzureMonitorPrivateLinkScopeProperties;
	}

	/** An Azure Monitor PrivateLinkScope definition. */
	export interface AzureMonitorPrivateLinkScopeFormProperties extends PrivateLinkScopesResourceFormProperties {
	}
	export function CreateAzureMonitorPrivateLinkScopeFormGroup() {
		return new FormGroup<AzureMonitorPrivateLinkScopeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the list of Azure Monitor PrivateLinkScope resources. */
	export interface AzureMonitorPrivateLinkScopeListResult {

		/** The URI to get the next set of Azure Monitor PrivateLinkScope definitions if too many PrivateLinkScopes where returned in the result set. */
		nextLink?: string | null;

		/**
		 * List of Azure Monitor PrivateLinkScope definitions.
		 * Required
		 */
		value: Array<AzureMonitorPrivateLinkScope>;
	}

	/** Describes the list of Azure Monitor PrivateLinkScope resources. */
	export interface AzureMonitorPrivateLinkScopeListResultFormProperties {

		/** The URI to get the next set of Azure Monitor PrivateLinkScope definitions if too many PrivateLinkScopes where returned in the result set. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAzureMonitorPrivateLinkScopeListResultFormGroup() {
		return new FormGroup<AzureMonitorPrivateLinkScopeListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties that define a Azure Monitor PrivateLinkScope resource. */
	export interface AzureMonitorPrivateLinkScopeProperties {

		/** Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed. */
		provisioningState?: string | null;
	}

	/** Properties that define a Azure Monitor PrivateLinkScope resource. */
	export interface AzureMonitorPrivateLinkScopePropertiesFormProperties {

		/** Current state of this PrivateLinkScope: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Provisioning ,Succeeded, Canceled and Failed. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateAzureMonitorPrivateLinkScopePropertiesFormGroup() {
		return new FormGroup<AzureMonitorPrivateLinkScopePropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describe the format of an Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describe the format of an Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A private endpoint connection */
	export interface PrivateEndpointConnection {

		/** Properties of a private endpoint connection. */
		properties?: PrivateEndpointConnectionProperties;
	}

	/** A private endpoint connection */
	export interface PrivateEndpointConnectionFormProperties {
	}
	export function CreatePrivateEndpointConnectionFormGroup() {
		return new FormGroup<PrivateEndpointConnectionFormProperties>({
		});

	}


	/** Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionProperties {

		/** Private endpoint which the connection belongs to. */
		privateEndpoint?: PrivateEndpointProperty;

		/** State of the private endpoint connection. */
		privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;

		/** State of the private endpoint connection. */
		provisioningState?: string | null;
	}

	/** Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionPropertiesFormProperties {

		/** State of the private endpoint connection. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionPropertiesFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Private endpoint which the connection belongs to. */
	export interface PrivateEndpointProperty {

		/** Resource id of the private endpoint. */
		id?: string | null;
	}

	/** Private endpoint which the connection belongs to. */
	export interface PrivateEndpointPropertyFormProperties {

		/** Resource id of the private endpoint. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointPropertyFormGroup() {
		return new FormGroup<PrivateEndpointPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** State of the private endpoint connection. */
	export interface PrivateLinkServiceConnectionStateProperty {

		/** The actions required for private link service connection. */
		actionsRequired?: string | null;

		/**
		 * The private link service connection description.
		 * Required
		 */
		description: string;

		/**
		 * The private link service connection status.
		 * Required
		 */
		status: string;
	}

	/** State of the private endpoint connection. */
	export interface PrivateLinkServiceConnectionStatePropertyFormProperties {

		/** The actions required for private link service connection. */
		actionsRequired: FormControl<string | null | undefined>,

		/**
		 * The private link service connection description.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The private link service connection status.
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkServiceConnectionStatePropertyFormGroup() {
		return new FormGroup<PrivateLinkServiceConnectionStatePropertyFormProperties>({
			actionsRequired: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of private endpoint connections. */
	export interface PrivateEndpointConnectionListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<PrivateEndpointConnection>;
	}

	/** A list of private endpoint connections. */
	export interface PrivateEndpointConnectionListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointConnectionListResultFormGroup() {
		return new FormGroup<PrivateEndpointConnectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A private link resource */
	export interface PrivateLinkResource {

		/** Properties of a private link resource. */
		properties?: PrivateLinkResourceProperties;
	}

	/** A private link resource */
	export interface PrivateLinkResourceFormProperties {
	}
	export function CreatePrivateLinkResourceFormGroup() {
		return new FormGroup<PrivateLinkResourceFormProperties>({
		});

	}


	/** Properties of a private link resource. */
	export interface PrivateLinkResourceProperties {

		/** The private link resource group id. */
		groupId?: string | null;

		/** The private link resource required member names. */
		requiredMembers?: Array<string>;
	}

	/** Properties of a private link resource. */
	export interface PrivateLinkResourcePropertiesFormProperties {

		/** The private link resource group id. */
		groupId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourcePropertiesFormGroup() {
		return new FormGroup<PrivateLinkResourcePropertiesFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of private link resources */
	export interface PrivateLinkResourceListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<PrivateLinkResource>;
	}

	/** A list of private link resources */
	export interface PrivateLinkResourceListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResourceListResultFormGroup() {
		return new FormGroup<PrivateLinkResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An azure resource object */
	export interface PrivateLinkScopesResource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface PrivateLinkScopesResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkScopesResourceFormGroup() {
		return new FormGroup<PrivateLinkScopesResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties of proxy resource. */
	export interface ProxyResource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Common properties of proxy resource. */
	export interface ProxyResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A private link scoped resource */
	export interface ScopedResource {

		/** Properties of a private link scoped resource. */
		properties?: ScopedResourceProperties;
	}

	/** A private link scoped resource */
	export interface ScopedResourceFormProperties {
	}
	export function CreateScopedResourceFormGroup() {
		return new FormGroup<ScopedResourceFormProperties>({
		});

	}


	/** Properties of a private link scoped resource. */
	export interface ScopedResourceProperties {

		/** The resource id of the scoped Azure monitor resource. */
		linkedResourceId?: string | null;

		/** State of the private endpoint connection. */
		provisioningState?: string | null;
	}

	/** Properties of a private link scoped resource. */
	export interface ScopedResourcePropertiesFormProperties {

		/** The resource id of the scoped Azure monitor resource. */
		linkedResourceId: FormControl<string | null | undefined>,

		/** State of the private endpoint connection. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateScopedResourcePropertiesFormGroup() {
		return new FormGroup<ScopedResourcePropertiesFormProperties>({
			linkedResourceId: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of scoped resources in a private link scope. */
	export interface ScopedResourceListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ScopedResource>;
	}

	/** A list of scoped resources in a private link scope. */
	export interface ScopedResourceListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateScopedResourceListResultFormGroup() {
		return new FormGroup<ScopedResourceListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkScope instance. */
	export interface TagsResource {

		/** Resource tags */
		tags?: any;
	}

	/** A container holding only the Tags for a resource, allowing the user to update the tags on a PrivateLinkScope instance. */
	export interface TagsResourceFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateTagsResourceFormGroup() {
		return new FormGroup<TagsResourceFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of all Azure Monitor PrivateLinkScopes within a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/privateLinkScopes
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @return {AzureMonitorPrivateLinkScopeListResult} A list containing 0 or more Azure Monitor PrivateLinkScope definitions.
		 */
		PrivateLinkScopes_List(api_version: string, subscriptionId: string): Observable<AzureMonitorPrivateLinkScopeListResult> {
			return this.http.get<AzureMonitorPrivateLinkScopeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/privateLinkScopes?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all private endpoint connections on a private link scope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @return {PrivateEndpointConnectionListResult} Successfully retrieved private endpoint connections.
		 */
		PrivateEndpointConnections_ListByPrivateLinkScope(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string): Observable<PrivateEndpointConnectionListResult> {
			return this.http.get<PrivateEndpointConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateEndpointConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private endpoint connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {PrivateEndpointConnection} Successfully retrieved a specified private endpoint connection.
		 */
		PrivateEndpointConnections_Get(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, privateEndpointConnectionName: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Approve or reject a private endpoint connection with a given name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {PrivateEndpointConnection} Successfully approved or rejected private endpoint connection.
		 */
		PrivateEndpointConnections_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, privateEndpointConnectionName: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a private endpoint connection with a given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {void} Successfully deleted private endpoint connection.
		 */
		PrivateEndpointConnections_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, privateEndpointConnectionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @return {PrivateLinkResourceListResult} Successfully retrieved private link resources.
		 */
		PrivateLinkResources_ListByPrivateLinkScope(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string): Observable<PrivateLinkResourceListResult> {
			return this.http.get<PrivateLinkResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateLinkResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the private link resources that need to be created for a Azure Monitor PrivateLinkScope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/privateLinkResources/{groupName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} groupName The name of the private link resource.
		 * @return {PrivateLinkResource} Successfully retrieved a specified private link resource.
		 */
		PrivateLinkResources_Get(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, groupName: string): Observable<PrivateLinkResource> {
			return this.http.get<PrivateLinkResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/privateLinkResources/' + (groupName == null ? '' : encodeURIComponent(groupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all private endpoint connections on a private link scope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @return {ScopedResourceListResult} Successfully retrieved scoped resources in a private link scope.
		 */
		PrivateLinkScopedResources_ListByPrivateLinkScope(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string): Observable<ScopedResourceListResult> {
			return this.http.get<ScopedResourceListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/scopedResources&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a scoped resource in a private link scope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} name The name of the scoped resource object.
		 * @return {ScopedResource} Successfully retrieved a scoped resource in a private link scope.
		 */
		PrivateLinkScopedResources_Get(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, name: string): Observable<ScopedResource> {
			return this.http.get<ScopedResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/scopedResources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Approve or reject a private endpoint connection with a given name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} name The name of the scoped resource object.
		 * @return {ScopedResource} Successfully scoped azure monitor resource in a private link scope.
		 */
		PrivateLinkScopedResources_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, name: string, requestBody: ScopedResource): Observable<ScopedResource> {
			return this.http.put<ScopedResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/scopedResources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a private endpoint connection with a given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/privateLinkScopes/{scopeName}/scopedResources/{name}
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} scopeName Name of the Azure Monitor PrivateLinkScope that will contain the datasource
		 * @param {string} name The name of the scoped resource object.
		 * @return {void} Successfully deleted scoped resource.
		 */
		PrivateLinkScopedResources_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, scopeName: string, name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '/scopedResources/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of Azure Monitor PrivateLinkScopes within a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @return {AzureMonitorPrivateLinkScopeListResult} A list containing 0 or more Azure Monitor PrivateLinkScope definitions.
		 */
		PrivateLinkScopes_ListByResourceGroup(resourceGroupName: string, api_version: string, subscriptionId: string): Observable<AzureMonitorPrivateLinkScopeListResult> {
			return this.http.get<AzureMonitorPrivateLinkScopeListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/privateLinkScopes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a Azure Monitor PrivateLinkScope.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} scopeName The name of the Azure Monitor PrivateLinkScope resource.
		 * @return {AzureMonitorPrivateLinkScope} An Azure Monitor PrivateLinkScope definition.
		 */
		PrivateLinkScopes_Get(resourceGroupName: string, api_version: string, subscriptionId: string, scopeName: string): Observable<AzureMonitorPrivateLinkScope> {
			return this.http.get<AzureMonitorPrivateLinkScope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates (or updates) a Azure Monitor PrivateLinkScope. Note: You cannot specify a different value for InstrumentationKey nor AppId in the Put operation.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} scopeName The name of the Azure Monitor PrivateLinkScope resource.
		 * @param {AzureMonitorPrivateLinkScope} requestBody Properties that need to be specified to create or update a Azure Monitor PrivateLinkScope.
		 * @return {AzureMonitorPrivateLinkScope} Successful request when creating or updating a Azure Monitor PrivateLinkScope. The updated PrivateLinkScope is returned.
		 */
		PrivateLinkScopes_CreateOrUpdate(resourceGroupName: string, api_version: string, subscriptionId: string, scopeName: string, requestBody: AzureMonitorPrivateLinkScope): Observable<AzureMonitorPrivateLinkScope> {
			return this.http.put<AzureMonitorPrivateLinkScope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Azure Monitor PrivateLinkScope.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} scopeName The name of the Azure Monitor PrivateLinkScope resource.
		 * @return {void} Successful request when deleting a Azure Monitor PrivateLinkScope.
		 */
		PrivateLinkScopes_Delete(resourceGroupName: string, api_version: string, subscriptionId: string, scopeName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing PrivateLinkScope's tags. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/privateLinkScopes/{scopeName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} api_version The API version to use for this operation.
		 *     Min length: 1
		 * @param {string} subscriptionId The ID of the target subscription.
		 *     Min length: 1
		 * @param {string} scopeName The name of the Azure Monitor PrivateLinkScope resource.
		 * @param {TagsResource} requestBody Updated tag information to set into the PrivateLinkScope instance.
		 * @return {AzureMonitorPrivateLinkScope} Updating the Azure Monitor PrivateLinkScope's tags was successful. PrivateLinkScope tags are updated and returned with the rest of the PrivateLinkScope's object properties.
		 */
		PrivateLinkScopes_UpdateTags(resourceGroupName: string, api_version: string, subscriptionId: string, scopeName: string, requestBody: TagsResource): Observable<AzureMonitorPrivateLinkScope> {
			return this.http.patch<AzureMonitorPrivateLinkScope>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/privateLinkScopes/' + (scopeName == null ? '' : encodeURIComponent(scopeName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

