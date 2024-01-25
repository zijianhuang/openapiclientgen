import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Batch service. */
	export interface CloudError {

		/** The resource management error response. */
		error?: any;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {

		/** The resource management error response. */
		error: FormControl<any | null | undefined>,
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
			error: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface ErrorResponse {
	}
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
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
		privateEndpoint?: PrivateEndpointProperty;
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

	export interface PrivateEndpointProperty {

		/** Resource id of the private endpoint. */
		id?: string | null;
	}
	export interface PrivateEndpointPropertyFormProperties {

		/** Resource id of the private endpoint. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateEndpointPropertyFormGroup() {
		return new FormGroup<PrivateEndpointPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

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


	/** Tags object for patch operations. */
	export interface TagsObject {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Tags object for patch operations. */
	export interface TagsObjectFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsObjectFormGroup() {
		return new FormGroup<TagsObjectFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets all private endpoint connections on a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {PrivateEndpointConnectionListResult} Successfully retrieved private endpoint connections.
		 */
		PrivateEndpointConnections_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<PrivateEndpointConnectionListResult> {
			return this.http.get<PrivateEndpointConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMariaDB/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private endpoint connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {PrivateEndpointConnection} Successfully retrieved a specified private endpoint connection.
		 */
		PrivateEndpointConnections_Get(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMariaDB/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Approve or reject a private endpoint connection with a given name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {PrivateEndpointConnection} Successfully approved or rejected private endpoint connection.
		 */
		PrivateEndpointConnections_CreateOrUpdate(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMariaDB/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a private endpoint connection with a given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} api_version The API version to use for this operation.
		 * @return {void} Successfully deleted private endpoint connection.
		 */
		PrivateEndpointConnections_Delete(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMariaDB/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates tags on private endpoint connection.
		 * Updates private endpoint connection with the specified tags.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMariaDB/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} serverName The name of the server.
		 * @param {TagsObject} requestBody Parameters supplied to the Update private endpoint connection Tags operation.
		 * @return {PrivateEndpointConnection} OK
		 */
		PrivateEndpointConnections_UpdateTags(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, requestBody: TagsObject): Observable<PrivateEndpointConnection> {
			return this.http.patch<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMariaDB/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

