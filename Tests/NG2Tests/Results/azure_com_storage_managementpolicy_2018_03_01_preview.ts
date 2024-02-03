import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPoliciesRules {

		/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
		policy?: string | null;
	}

	/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPoliciesRulesFormProperties {

		/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
		policy: FormControl<string | null | undefined>,
	}
	export function CreateManagementPoliciesRulesFormGroup() {
		return new FormGroup<ManagementPoliciesRulesFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPoliciesRulesSetParameter {

		/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
		properties?: ManagementPoliciesRules;
	}

	/** The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. */
	export interface ManagementPoliciesRulesSetParameterFormProperties {
	}
	export function CreateManagementPoliciesRulesSetParameterFormGroup() {
		return new FormGroup<ManagementPoliciesRulesSetParameterFormProperties>({
		});

	}

	export interface StorageAccountManagementPolicies {
	}
	export interface StorageAccountManagementPoliciesFormProperties {
	}
	export function CreateStorageAccountManagementPoliciesFormGroup() {
		return new FormGroup<StorageAccountManagementPoliciesFormProperties>({
		});

	}


	/** The Storage Account Data Policies properties. */
	export interface StorageAccountManagementPoliciesRulesProperty extends ManagementPoliciesRules {

		/** Returns the date and time the ManagementPolicies was last modified. */
		lastModifiedTime?: Date | null;
	}

	/** The Storage Account Data Policies properties. */
	export interface StorageAccountManagementPoliciesRulesPropertyFormProperties extends ManagementPoliciesRulesFormProperties {

		/** Returns the date and time the ManagementPolicies was last modified. */
		lastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateStorageAccountManagementPoliciesRulesPropertyFormGroup() {
		return new FormGroup<StorageAccountManagementPoliciesRulesPropertyFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets the data policy rules associated with the specified storage account.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @return {StorageAccountManagementPolicies} OK -- Get management policies successfully.
		 */
		ManagementPolicies_Get(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName): Observable<StorageAccountManagementPolicies> {
			return this.http.get<StorageAccountManagementPolicies>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets the data policy rules associated with the specified storage account.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @param {ManagementPoliciesRulesSetParameter} requestBody The data policy rules to set to a storage account.
		 * @return {StorageAccountManagementPolicies} OK -- Get management policies successfully.
		 */
		ManagementPolicies_CreateOrUpdate(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName, requestBody: ManagementPoliciesRulesSetParameter): Observable<StorageAccountManagementPolicies> {
			return this.http.put<StorageAccountManagementPolicies>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the data policy rules associated with the specified storage account.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 * @param {string} accountName The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
		 * @param {string} api_version The API version to use for this operation.
		 * @param {string} subscriptionId The ID of the target subscription.
		 * @param {ManagementPolicies_GetManagementPolicyName} managementPolicyName The name of the Storage Account Management Policy. It should always be 'default'
		 * @return {void} OK -- Delete management policies successfully.
		 */
		ManagementPolicies_Delete(resourceGroupName: string, accountName: string, api_version: string, subscriptionId: string, managementPolicyName: ManagementPolicies_GetManagementPolicyName): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Storage/storageAccounts/' + (accountName == null ? '' : encodeURIComponent(accountName)) + '/managementPolicies/' + managementPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum ManagementPolicies_GetManagementPolicyName { default = 'default' }

}

