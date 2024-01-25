import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error Response. */
	export interface ErrorResponse {

		/** Error code. */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Error Response. */
	export interface ErrorResponseFormProperties {

		/** Error code. */
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

		/** Connection State of the Private Endpoint Connection. */
		privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	}

	/** Properties of a private endpoint connection. */
	export interface PrivateEndpointConnectionPropertiesFormProperties {
	}
	export function CreatePrivateEndpointConnectionPropertiesFormGroup() {
		return new FormGroup<PrivateEndpointConnectionPropertiesFormProperties>({
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


	/** Connection State of the Private Endpoint Connection. */
	export interface PrivateLinkServiceConnectionStateProperty {

		/** Any action that is required beyond basic workflow (approve/ reject/ disconnect) */
		actionsRequired?: string | null;

		/** The private link service connection description. */
		description?: string | null;

		/** The private link service connection status. */
		status?: string | null;
	}

	/** Connection State of the Private Endpoint Connection. */
	export interface PrivateLinkServiceConnectionStatePropertyFormProperties {

		/** Any action that is required beyond basic workflow (approve/ reject/ disconnect) */
		actionsRequired: FormControl<string | null | undefined>,

		/** The private link service connection description. */
		description: FormControl<string | null | undefined>,

		/** The private link service connection status. */
		status: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkServiceConnectionStatePropertyFormGroup() {
		return new FormGroup<PrivateLinkServiceConnectionStatePropertyFormProperties>({
			actionsRequired: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of private endpoint connections */
	export interface PrivateEndpointConnectionListResult {

		/** Array of private endpoint connections */
		value?: Array<PrivateEndpointConnection>;
	}

	/** A list of private endpoint connections */
	export interface PrivateEndpointConnectionListResultFormProperties {
	}
	export function CreatePrivateEndpointConnectionListResultFormGroup() {
		return new FormGroup<PrivateEndpointConnectionListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all private endpoint connections on a Cosmos DB account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} accountName Cosmos DB database account name.
		 * @return {PrivateEndpointConnectionListResult} Successfully retrieved private endpoint connections.
		 */
		PrivateEndpointConnections_ListByDatabaseAccount(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string): Observable<PrivateEndpointConnectionListResult> {
			return this.http.get<PrivateEndpointConnectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a private endpoint connection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {PrivateEndpointConnection} Successfully retrieved a specified private endpoint connection.
		 */
		PrivateEndpointConnections_Get(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string, privateEndpointConnectionName: string): Observable<PrivateEndpointConnection> {
			return this.http.get<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Approve or reject a private endpoint connection with a given name.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {PrivateEndpointConnection} Successfully approved or rejected private endpoint connection.
		 */
		PrivateEndpointConnections_CreateOrUpdate(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string, privateEndpointConnectionName: string, requestBody: PrivateEndpointConnection): Observable<PrivateEndpointConnection> {
			return this.http.put<PrivateEndpointConnection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a private endpoint connection with a given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/databaseAccounts/{accountName}/privateEndpointConnections/{privateEndpointConnectionName}
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {string} resourceGroupName The name of the resource group. The name is case insensitive.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} accountName Cosmos DB database account name.
		 * @param {string} privateEndpointConnectionName The name of the private endpoint connection.
		 * @return {void} 
		 */
		PrivateEndpointConnections_Delete(subscriptionId: string, resourceGroupName: string, api_version: string, accountName: string, privateEndpointConnectionName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DocumentDB/databaseAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/privateEndpointConnections/' + (privateEndpointConnectionName == null ? '' : encodeURIComponent(privateEndpointConnectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

