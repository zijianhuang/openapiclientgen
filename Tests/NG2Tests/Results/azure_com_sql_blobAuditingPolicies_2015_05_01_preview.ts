import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicy {

		/** Resource kind. */
		kind?: string | null;

		/** Properties of a database blob auditing policy. */
		properties?: DatabaseBlobAuditingPolicyProperties;
	}

	/** A database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBlobAuditingPolicyFormGroup() {
		return new FormGroup<DatabaseBlobAuditingPolicyFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyProperties {

		/** Specifies the Actions and Actions-Groups to audit. */
		auditActionsAndGroups?: Array<string>;

		/** Specifies whether storageAccountAccessKey value is the storage’s secondary key. */
		isStorageSecondaryKeyInUse?: boolean | null;

		/** Specifies the number of days to keep in the audit logs. */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
		 * Required
		 */
		state: DatabaseBlobAuditingPolicyPropertiesState;

		/** Specifies the identifier key of the auditing storage account. If state is Enabled, storageAccountAccessKey is required. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required. */
		storageEndpoint?: string | null;
	}

	/** Properties of a database blob auditing policy. */
	export interface DatabaseBlobAuditingPolicyPropertiesFormProperties {

		/** Specifies whether storageAccountAccessKey value is the storage’s secondary key. */
		isStorageSecondaryKeyInUse: FormControl<boolean | null | undefined>,

		/** Specifies the number of days to keep in the audit logs. */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy. If state is Enabled, storageEndpoint and storageAccountAccessKey are required.
		 * Required
		 */
		state: FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the auditing storage account. If state is Enabled, storageAccountAccessKey is required. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage subscription Id. */
		storageAccountSubscriptionId: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). If state is Enabled, storageEndpoint is required. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseBlobAuditingPolicyPropertiesFormGroup() {
		return new FormGroup<DatabaseBlobAuditingPolicyPropertiesFormProperties>({
			isStorageSecondaryKeyInUse: new FormControl<boolean | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<DatabaseBlobAuditingPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageAccountSubscriptionId: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatabaseBlobAuditingPolicyPropertiesState { Enabled = 'Enabled', Disabled = 'Disabled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a database's blob auditing policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the blob audit policy is defined.
		 * @param {DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {DatabaseBlobAuditingPolicy} Successfully retrieved the database blob auditing policy.
		 */
		DatabaseBlobAuditingPolicies_Get(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string): Observable<DatabaseBlobAuditingPolicy> {
			return this.http.get<DatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's blob auditing policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/auditingSettings/{blobAuditingPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the blob auditing policy will be defined.
		 * @param {DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName} blobAuditingPolicyName The name of the blob auditing policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {DatabaseBlobAuditingPolicy} requestBody The database blob auditing policy.
		 * @return {DatabaseBlobAuditingPolicy} Successfully set the database blob auditing policy.
		 */
		DatabaseBlobAuditingPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, databaseName: string, blobAuditingPolicyName: DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName, subscriptionId: string, api_version: string, requestBody: DatabaseBlobAuditingPolicy): Observable<DatabaseBlobAuditingPolicy> {
			return this.http.put<DatabaseBlobAuditingPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/auditingSettings/' + blobAuditingPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum DatabaseBlobAuditingPolicies_GetBlobAuditingPolicyName { default = 'default' }

}

