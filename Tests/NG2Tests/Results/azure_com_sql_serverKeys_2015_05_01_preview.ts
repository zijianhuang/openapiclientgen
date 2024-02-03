import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A server key. */
	export interface ServerKey {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties for a server key execution. */
		properties?: ServerKeyProperties;
	}

	/** A server key. */
	export interface ServerKeyFormProperties {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateServerKeyFormGroup() {
		return new FormGroup<ServerKeyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a server key execution. */
	export interface ServerKeyProperties {

		/** The server key creation date. */
		creationDate?: Date | null;

		/**
		 * The server key type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: ServerKeyPropertiesServerKeyType;

		/** Subregion of the server key. */
		subregion?: string | null;

		/** Thumbprint of the server key. */
		thumbprint?: string | null;

		/** The URI of the server key. */
		uri?: string | null;
	}

	/** Properties for a server key execution. */
	export interface ServerKeyPropertiesFormProperties {

		/** The server key creation date. */
		creationDate: FormControl<Date | null | undefined>,

		/**
		 * The server key type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: FormControl<ServerKeyPropertiesServerKeyType | null | undefined>,

		/** Subregion of the server key. */
		subregion: FormControl<string | null | undefined>,

		/** Thumbprint of the server key. */
		thumbprint: FormControl<string | null | undefined>,

		/** The URI of the server key. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateServerKeyPropertiesFormGroup() {
		return new FormGroup<ServerKeyPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			serverKeyType: new FormControl<ServerKeyPropertiesServerKeyType | null | undefined>(undefined, [Validators.required]),
			subregion: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServerKeyPropertiesServerKeyType { ServiceManaged = 'ServiceManaged', AzureKeyVault = 'AzureKeyVault' }


	/** A list of server keys. */
	export interface ServerKeyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerKey>;
	}

	/** A list of server keys. */
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
		 * Gets a list of server keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerKeyListResult} Successfully retrieved the list of server keys.
		 */
		ServerKeys_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerKeyListResult> {
			return this.http.get<ServerKeyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the server key to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerKey} Successfully retrieved the specified server key.
		 */
		ServerKeys_Get(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string): Observable<ServerKey> {
			return this.http.get<ServerKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a server key.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the server key to be operated on (updated or created). The key name is required to be in the format of 'vault_key_version'. For example, if the keyId is https://YourVaultName.vault.azure.net/keys/YourKeyName/01234567890123456789012345678901, then the server key name should be formatted as: YourVaultName_YourKeyName_01234567890123456789012345678901
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerKey} requestBody The requested server key resource state.
		 * @return {ServerKey} Successfully updated the server key.
		 */
		ServerKeys_CreateOrUpdate(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string, requestBody: ServerKey): Observable<ServerKey> {
			return this.http.put<ServerKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the server key with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} keyName The name of the server key to be deleted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the server key.
		 */
		ServerKeys_Delete(resourceGroupName: string, serverName: string, keyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

