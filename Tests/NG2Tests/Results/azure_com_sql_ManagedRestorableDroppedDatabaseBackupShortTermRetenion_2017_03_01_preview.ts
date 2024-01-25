import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A short term retention policy. */
	export interface ManagedBackupShortTermRetentionPolicy {

		/** Properties of a short term retention policy */
		properties?: ManagedBackupShortTermRetentionPolicyProperties;
	}

	/** A short term retention policy. */
	export interface ManagedBackupShortTermRetentionPolicyFormProperties {
	}
	export function CreateManagedBackupShortTermRetentionPolicyFormGroup() {
		return new FormGroup<ManagedBackupShortTermRetentionPolicyFormProperties>({
		});

	}


	/** Properties of a short term retention policy */
	export interface ManagedBackupShortTermRetentionPolicyProperties {

		/** The backup retention period in days. This is how many days Point-in-Time Restore will be supported. */
		retentionDays?: number | null;
	}

	/** Properties of a short term retention policy */
	export interface ManagedBackupShortTermRetentionPolicyPropertiesFormProperties {

		/** The backup retention period in days. This is how many days Point-in-Time Restore will be supported. */
		retentionDays: FormControl<number | null | undefined>,
	}
	export function CreateManagedBackupShortTermRetentionPolicyPropertiesFormGroup() {
		return new FormGroup<ManagedBackupShortTermRetentionPolicyPropertiesFormProperties>({
			retentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A list of short term retention policies. */
	export interface ManagedBackupShortTermRetentionPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedBackupShortTermRetentionPolicy>;
	}

	/** A list of short term retention policies. */
	export interface ManagedBackupShortTermRetentionPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedBackupShortTermRetentionPolicyListResultFormGroup() {
		return new FormGroup<ManagedBackupShortTermRetentionPolicyListResultFormProperties>({
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
		 * Gets a dropped database's short term retention policy list.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedBackupShortTermRetentionPolicyListResult} Successfully retrieved the policies.
		 */
		ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_ListByRestorableDroppedDatabase(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, subscriptionId: string, api_version: string): Observable<ManagedBackupShortTermRetentionPolicyListResult> {
			return this.http.get<ManagedBackupShortTermRetentionPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases/' + (restorableDroppedDatabaseId == null ? '' : encodeURIComponent(restorableDroppedDatabaseId)) + '/backupShortTermRetentionPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a dropped database's short term retention policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedBackupShortTermRetentionPolicy} Successfully retrieved the policies.
		 */
		ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_Get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string): Observable<ManagedBackupShortTermRetentionPolicy> {
			return this.http.get<ManagedBackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases/' + (restorableDroppedDatabaseId == null ? '' : encodeURIComponent(restorableDroppedDatabaseId)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Sets a database's long term retention policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be "default".
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedBackupShortTermRetentionPolicy} requestBody The long term retention policy info.
		 * @return {ManagedBackupShortTermRetentionPolicy} Successfully updated the policy.
		 */
		ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string, requestBody: ManagedBackupShortTermRetentionPolicy): Observable<ManagedBackupShortTermRetentionPolicy> {
			return this.http.put<ManagedBackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases/' + (restorableDroppedDatabaseId == null ? '' : encodeURIComponent(restorableDroppedDatabaseId)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets a database's long term retention policy.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}/backupShortTermRetentionPolicies/{policyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName} policyName The policy name. Should always be "default".
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedBackupShortTermRetentionPolicy} requestBody The long term retention policy info.
		 * @return {ManagedBackupShortTermRetentionPolicy} Successfully updated the policy.
		 */
		ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_Update(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, policyName: ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName, subscriptionId: string, api_version: string, requestBody: ManagedBackupShortTermRetentionPolicy): Observable<ManagedBackupShortTermRetentionPolicy> {
			return this.http.patch<ManagedBackupShortTermRetentionPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/restorableDroppedDatabases/' + (restorableDroppedDatabaseId == null ? '' : encodeURIComponent(restorableDroppedDatabaseId)) + '/backupShortTermRetentionPolicies/' + policyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ManagedRestorableDroppedDatabaseBackupShortTermRetentionPolicies_GetPolicyName { default = 0 }

}

