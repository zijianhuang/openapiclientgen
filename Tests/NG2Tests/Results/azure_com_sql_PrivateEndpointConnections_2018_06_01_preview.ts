import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
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
		 * Gets all private endpoint connections on a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateEndpointConnections
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {PrivateEndpointConnectionListResult} Successfully retrieved private endpoint connections.
		 */
		PrivateEndpointConnections_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<PrivateEndpointConnectionListResult> {
			return this.http.get<PrivateEndpointConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private endpoint connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {PrivateEndpointConnection} Successfully retrieved a specified private endpoint connection.
		 */
		PrivateEndpointConnections_Get(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Approve or reject a private endpoint connection with a given name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {PrivateEndpointConnection} Successfully approved or rejected private endpoint connection.
		 */
		PrivateEndpointConnections_CreateOrUpdate(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a private endpoint connection with a given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted private endpoint connection.
		 */
		PrivateEndpointConnections_Delete(resourceGroupName: string, serverName: string, privateEndpointConnectionName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

