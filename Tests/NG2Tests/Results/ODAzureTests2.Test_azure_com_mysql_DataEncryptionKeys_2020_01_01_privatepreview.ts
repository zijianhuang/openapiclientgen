import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An error response from the Batch service. */
	export interface CloudError {

		/** An error response from the Batch service. */
		error?: CloudErrorBody;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the Batch service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the Batch service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Resource properties. */
	export interface ProxyResource {

		/** Resource ID */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** Resource properties. */
	export interface ProxyResourceFormProperties {

		/** Resource ID */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A MySQL Server key. */
	export interface ServerKey {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Properties for a key execution. */
		properties?: ServerKeyProperties;
	}

	/** A MySQL Server key. */
	export interface ServerKeyFormProperties {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateServerKeyFormGroup() {
		return new FormGroup<ServerKeyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a key execution. */
	export interface ServerKeyProperties {

		/** The key creation date. */
		creationDate?: Date | null;

		/**
		 * The key type like 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: ServerKeyPropertiesServerKeyType;

		/** The URI of the key. */
		uri?: string | null;
	}

	/** Properties for a key execution. */
	export interface ServerKeyPropertiesFormProperties {

		/** The key creation date. */
		creationDate: FormControl<Date | null | undefined>,

		/**
		 * The key type like 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: FormControl<ServerKeyPropertiesServerKeyType | null | undefined>,

		/** The URI of the key. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateServerKeyPropertiesFormGroup() {
		return new FormGroup<ServerKeyPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			serverKeyType: new FormControl<ServerKeyPropertiesServerKeyType | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerKeyPropertiesServerKeyType { AzureKeyVault = 0 }


	/** A list of MySQL Server keys. */
	export interface ServerKeyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerKey>;
	}

	/** A list of MySQL Server keys. */
	export interface ServerKeyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServerKeyListResultFormGroup() {
		return new FormGroup<ServerKeyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of  Server keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerKeyListResult} Successfully retrieved the list of MySQL Server keys.
		 */
		ServerKeys_ListByInstance(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerKeyListResult> {
			return this.http.get<ServerKeyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a MySQL Server key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the MySQL Server key to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerKey} Successfully retrieved the specified MySQL Server key.
		 */
		ServerKeys_Get(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string): Observable<ServerKey> {
			return this.http.get<ServerKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a MySQL Server key.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the MySQL Server key to be operated on (updated or created).
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerKey} requestBody The requested MySQL Server key resource state.
		 * @return {ServerKey} Successfully updated the MySQL Server key.
		 */
		ServerKeys_CreateOrUpdate(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string, requestBody: ServerKey): Observable<ServerKey> {
			return this.http.put<ServerKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the MySQL Server key with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforMySQL/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the MySQL Server key to be deleted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the MySQL Server key.
		 */
		ServerKeys_Delete(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.DBforMySQL/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

