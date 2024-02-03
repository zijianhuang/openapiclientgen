import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The managed instance encryption protector. */
	export interface ManagedInstanceEncryptionProtector {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind?: string | null;

		/** Properties for an encryption protector execution. */
		properties?: ManagedInstanceEncryptionProtectorProperties;
	}

	/** The managed instance encryption protector. */
	export interface ManagedInstanceEncryptionProtectorFormProperties {

		/** Kind of encryption protector. This is metadata used for the Azure portal experience. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceEncryptionProtectorFormGroup() {
		return new FormGroup<ManagedInstanceEncryptionProtectorFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for an encryption protector execution. */
	export interface ManagedInstanceEncryptionProtectorProperties {

		/** The name of the managed instance key. */
		serverKeyName?: string | null;

		/**
		 * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: ManagedInstanceEncryptionProtectorPropertiesServerKeyType;

		/** Thumbprint of the server key. */
		thumbprint?: string | null;

		/** The URI of the server key. */
		uri?: string | null;
	}

	/** Properties for an encryption protector execution. */
	export interface ManagedInstanceEncryptionProtectorPropertiesFormProperties {

		/** The name of the managed instance key. */
		serverKeyName: FormControl<string | null | undefined>,

		/**
		 * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
		 * Required
		 */
		serverKeyType: FormControl<ManagedInstanceEncryptionProtectorPropertiesServerKeyType | null | undefined>,

		/** Thumbprint of the server key. */
		thumbprint: FormControl<string | null | undefined>,

		/** The URI of the server key. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceEncryptionProtectorPropertiesFormGroup() {
		return new FormGroup<ManagedInstanceEncryptionProtectorPropertiesFormProperties>({
			serverKeyName: new FormControl<string | null | undefined>(undefined),
			serverKeyType: new FormControl<ManagedInstanceEncryptionProtectorPropertiesServerKeyType | null | undefined>(undefined, [Validators.required]),
			thumbprint: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagedInstanceEncryptionProtectorPropertiesServerKeyType { ServiceManaged = 'ServiceManaged', AzureKeyVault = 'AzureKeyVault' }


	/** A list of managed instance encryption protectors. */
	export interface ManagedInstanceEncryptionProtectorListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedInstanceEncryptionProtector>;
	}

	/** A list of managed instance encryption protectors. */
	export interface ManagedInstanceEncryptionProtectorListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedInstanceEncryptionProtectorListResultFormGroup() {
		return new FormGroup<ManagedInstanceEncryptionProtectorListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of managed instance encryption protectors
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceEncryptionProtectorListResult} Successfully retrieved the list of managed instance encryption protector.
		 */
		ManagedInstanceEncryptionProtectors_ListByInstance(resourceGroupName: string, managedInstanceName: string, subscriptionId: string, api_version: string): Observable<ManagedInstanceEncryptionProtectorListResult> {
			return this.http.get<ManagedInstanceEncryptionProtectorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/encryptionProtector&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed instance encryption protector.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be retrieved.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedInstanceEncryptionProtector} Successfully retrieved the specified managed instance encryption protector.
		 */
		ManagedInstanceEncryptionProtectors_Get(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string): Observable<ManagedInstanceEncryptionProtector> {
			return this.http.get<ManagedInstanceEncryptionProtector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/encryptionProtector/' + encryptionProtectorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates an existing encryption protector.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedInstanceEncryptionProtector} requestBody The requested encryption protector resource state.
		 * @return {ManagedInstanceEncryptionProtector} Successfully updated the encryption protector.
		 */
		ManagedInstanceEncryptionProtectors_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string, requestBody: ManagedInstanceEncryptionProtector): Observable<ManagedInstanceEncryptionProtector> {
			return this.http.put<ManagedInstanceEncryptionProtector>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/encryptionProtector/' + encryptionProtectorName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revalidates an existing encryption protector.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/encryptionProtector/{encryptionProtectorName}/revalidate
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName} encryptionProtectorName The name of the encryption protector to be updated.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully revalidated the encryption protector.
		 */
		ManagedInstanceEncryptionProtectors_Revalidate(resourceGroupName: string, managedInstanceName: string, encryptionProtectorName: ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/encryptionProtector/' + encryptionProtectorName + '/revalidate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, { observe: 'response', responseType: 'text' });
		}
	}

	export enum ManagedInstanceEncryptionProtectors_GetEncryptionProtectorName { current = 'current' }

}

