import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The server encryption protector. */
	export interface EncryptionProtector {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties for an encryption protector execution. */
		properties?: EncryptionProtectorProperties;
	}

	/** The server encryption protector. */
	export interface EncryptionProtectorFormProperties {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionProtectorFormGroup() {
		return new FormGroup<EncryptionProtectorFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for an encryption protector execution. */
	export interface EncryptionProtectorProperties {

		/** The name of the server key. */
		serverKeyName?: string | null;

		/**
		 * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: EncryptionProtectorPropertiesServerKeyType;

		/** Subregion of the encryption protector. */
		subregion?: string | null;

		/** Thumbprint of the server key. */
		thumbprint?: string | null;

		/** The URI of the server key. */
		uri?: string | null;
	}

	/** Properties for an encryption protector execution. */
	export interface EncryptionProtectorPropertiesFormProperties {

		/** The name of the server key. */
		serverKeyName: FormControl<string | null | undefined>,

		/**
		 * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: FormControl<EncryptionProtectorPropertiesServerKeyType | null | undefined>,

		/** Subregion of the encryption protector. */
		subregion: FormControl<string | null | undefined>,

		/** Thumbprint of the server key. */
		thumbprint: FormControl<string | null | undefined>,

		/** The URI of the server key. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionProtectorPropertiesFormGroup() {
		return new FormGroup<EncryptionProtectorPropertiesFormProperties>({
			serverKeyName: new FormControl<string | null | undefined>(undefined),
			serverKeyType: new FormControl<EncryptionProtectorPropertiesServerKeyType | null | undefined>(undefined, [Validators.required]),
			subregion: new FormControl<string | null | undefined>(undefined),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionProtectorPropertiesServerKeyType { ServiceManaged = 'ServiceManaged', AzureKeyVault = 'AzureKeyVault' }


	/** A list of server encryption protectors. */
	export interface EncryptionProtectorListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<EncryptionProtector>;
	}

	/** A list of server encryption protectors. */
	export interface EncryptionProtectorListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionProtectorListResultFormGroup() {
		return new FormGroup<EncryptionProtectorListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of server encryption protectors
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {EncryptionProtectorListResult} Successfully retrieved the list of server encryption protector.
		 */
		EncryptionProtectors_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<EncryptionProtectorListResult> {
			return this.http.get<EncryptionProtectorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/encryptionProtector&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server encryption protector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {EncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {EncryptionProtector} Successfully retrieved the specified server encryption protector.
		 */
		EncryptionProtectors_Get(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string): Observable<EncryptionProtector> {
			return this.http.get<EncryptionProtector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/encryptionProtector/' + encryptionProtectorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates an existing encryption protector.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {EncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {EncryptionProtector} requestBody The requested encryption protector resource state.
		 * @return {EncryptionProtector} Successfully updated the encryption protector.
		 */
		EncryptionProtectors_CreateOrUpdate(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string, requestBody: EncryptionProtector): Observable<EncryptionProtector> {
			return this.http.put<EncryptionProtector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/encryptionProtector/' + encryptionProtectorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revalidates an existing encryption protector.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/encryptionProtector/{encryptionProtectorName}/revalidate
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {EncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully revalidated the encryption protector.
		 */
		EncryptionProtectors_Revalidate(resourceGroupName: string, serverName: string, encryptionProtectorName: EncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/encryptionProtector/' + encryptionProtectorName + '/revalidate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum EncryptionProtectors_GetEncryptionProtectorName { current = 'current' }

}

