import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A managed instance key. */
	export interface ManagedInstanceKey {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Properties for a key execution. */
		properties?: ManagedInstanceKeyProperties;
	}

	/** A managed instance key. */
	export interface ManagedInstanceKeyFormProperties {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceKeyFormGroup() {
		return new FormGroup<ManagedInstanceKeyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a key execution. */
	export interface ManagedInstanceKeyProperties {

		/** The key creation date. */
		creationDate?: Date | null;

		/**
		 * The key type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: ManagedInstanceKeyPropertiesServerKeyType;

		/** Thumbprint of the key. */
		thumbprint?: string | null;

		/** The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required. */
		uri?: string | null;
	}

	/** Properties for a key execution. */
	export interface ManagedInstanceKeyPropertiesFormProperties {

		/** The key creation date. */
		creationDate: FormControl<Date | null | undefined>,

		/**
		 * The key type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: FormControl<ManagedInstanceKeyPropertiesServerKeyType | null | undefined>,

		/** Thumbprint of the key. */
		thumbprint: FormControl<string | null | undefined>,

		/** The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceKeyPropertiesFormGroup() {
		return new FormGroup<ManagedInstanceKeyPropertiesFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined),
			serverKeyType: new FormControl<ManagedInstanceKeyPropertiesServerKeyType | null | undefined>(undefined, [Validators.required]),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedInstanceKeyPropertiesServerKeyType { ServiceManaged = 0, AzureKeyVault = 1 }


	/** A list of managed instance keys. */
	export interface ManagedInstanceKeyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedInstanceKey>;
	}

	/** A list of managed instance keys. */
	export interface ManagedInstanceKeyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceKeyListResultFormGroup() {
		return new FormGroup<ManagedInstanceKeyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of managed instance keys.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} filter An OData filter expression that filters elements in the collection.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceKeyListResult} Successfully retrieved the list of managed instance keys.
		 */
		ManagedInstanceKeys_ListByInstance(resourceGroupName: string, managedInstanceName: string, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<ManagedInstanceKeyListResult> {
			return this.http.get<ManagedInstanceKeyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/keys&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed instance key.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} keyName The name of the managed instance key to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceKey} Successfully retrieved the specified managed instance key.
		 */
		ManagedInstanceKeys_Get(resourceGroupName: string, managedInstanceName: string, keyName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceKey> {
			return this.http.get<ManagedInstanceKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a managed instance key.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} keyName The name of the managed instance key to be operated on (updated or created).
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedInstanceKey} requestBody The requested managed instance key resource state.
		 * @return {ManagedInstanceKey} Successfully updated the managed instance key.
		 */
		ManagedInstanceKeys_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, keyName: string, subscriptionId: string, api_version: string, requestBody: ManagedInstanceKey): Observable<ManagedInstanceKey> {
			return this.http.put<ManagedInstanceKey>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the managed instance key with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/keys/{keyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} keyName The name of the managed instance key to be deleted.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the managed instance key.
		 */
		ManagedInstanceKeys_Delete(resourceGroupName: string, managedInstanceName: string, keyName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/keys/' + (keyName == null ? '' : encodeURIComponent(keyName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

