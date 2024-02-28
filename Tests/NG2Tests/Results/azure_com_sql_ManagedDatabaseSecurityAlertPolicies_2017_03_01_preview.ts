import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A managed database security alert policy. */
	export interface ManagedDatabaseSecurityAlertPolicy {

		/** Properties of a security alert policy. */
		properties?: SecurityAlertPolicyProperties;
	}

	/** A managed database security alert policy. */
	export interface ManagedDatabaseSecurityAlertPolicyFormProperties {
	}
	export function CreateManagedDatabaseSecurityAlertPolicyFormGroup() {
		return new FormGroup<ManagedDatabaseSecurityAlertPolicyFormProperties>({
		});

	}


	/** Properties of a security alert policy. */
	export interface SecurityAlertPolicyProperties {

		/** Specifies the UTC creation time of the policy. */
		creationTime?: Date | null;

		/** Specifies an array of alerts that are disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability, Access_Anomaly, Data_Exfiltration, Unsafe_Action */
		disabledAlerts?: Array<string>;

		/** Specifies that the alert is sent to the account administrators. */
		emailAccountAdmins?: boolean | null;

		/** Specifies an array of e-mail addresses to which the alert is sent. */
		emailAddresses?: Array<string>;

		/**
		 * Specifies the number of days to keep in the Threat Detection audit logs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays?: number | null;

		/**
		 * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
		 * Required
		 */
		state: SecurityAlertPolicyPropertiesState;

		/** Specifies the identifier key of the Threat Detection audit storage account. */
		storageAccountAccessKey?: string | null;

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. */
		storageEndpoint?: string | null;
	}

	/** Properties of a security alert policy. */
	export interface SecurityAlertPolicyPropertiesFormProperties {

		/** Specifies the UTC creation time of the policy. */
		creationTime: FormControl<Date | null | undefined>,

		/** Specifies that the alert is sent to the account administrators. */
		emailAccountAdmins: FormControl<boolean | null | undefined>,

		/**
		 * Specifies the number of days to keep in the Threat Detection audit logs.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retentionDays: FormControl<number | null | undefined>,

		/**
		 * Specifies the state of the policy, whether it is enabled or disabled or a policy has not been applied yet on the specific database.
		 * Required
		 */
		state: FormControl<SecurityAlertPolicyPropertiesState | null | undefined>,

		/** Specifies the identifier key of the Threat Detection audit storage account. */
		storageAccountAccessKey: FormControl<string | null | undefined>,

		/** Specifies the blob storage endpoint (e.g. https://MyAccount.blob.core.windows.net). This blob storage will hold all Threat Detection audit logs. */
		storageEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateSecurityAlertPolicyPropertiesFormGroup() {
		return new FormGroup<SecurityAlertPolicyPropertiesFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			emailAccountAdmins: new FormControl<boolean | null | undefined>(undefined),
			retentionDays: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<SecurityAlertPolicyPropertiesState | null | undefined>(undefined, [Validators.required]),
			storageAccountAccessKey: new FormControl<string | null | undefined>(undefined),
			storageEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecurityAlertPolicyPropertiesState { New = 'New', Enabled = 'Enabled', Disabled = 'Disabled' }


	/** A list of the managed database's security alert policies. */
	export interface ManagedDatabaseSecurityAlertPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ManagedDatabaseSecurityAlertPolicy>;
	}

	/** A list of the managed database's security alert policies. */
	export interface ManagedDatabaseSecurityAlertPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagedDatabaseSecurityAlertPolicyListResultFormGroup() {
		return new FormGroup<ManagedDatabaseSecurityAlertPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of managed database's security alert policies.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the managed database for which the security alert policies are defined.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedDatabaseSecurityAlertPolicyListResult} Successfully retrieved the managed database security alert policies.
		 */
		ManagedDatabaseSecurityAlertPolicies_ListByDatabase(resourceGroupName: string, managedInstanceName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<ManagedDatabaseSecurityAlertPolicyListResult> {
			return this.http.get<ManagedDatabaseSecurityAlertPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/securityAlertPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a managed database's security alert policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the managed database for which the security alert policy is defined.
		 * @param {ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName} securityAlertPolicyName The name of the security alert policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ManagedDatabaseSecurityAlertPolicy} Successfully retrieved the managed database security alert policy.
		 */
		ManagedDatabaseSecurityAlertPolicies_Get(resourceGroupName: string, managedInstanceName: string, databaseName: string, securityAlertPolicyName: ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName, subscriptionId: string, api_version: string): Observable<ManagedDatabaseSecurityAlertPolicy> {
			return this.http.get<ManagedDatabaseSecurityAlertPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/securityAlertPolicies/' + securityAlertPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's security alert policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/securityAlertPolicies/{securityAlertPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} managedInstanceName The name of the managed instance.
		 * @param {string} databaseName The name of the managed database for which the security alert policy is defined.
		 * @param {ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName} securityAlertPolicyName The name of the security alert policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ManagedDatabaseSecurityAlertPolicy} requestBody The database security alert policy.
		 * @return {ManagedDatabaseSecurityAlertPolicy} Successfully set the managed database security alert policy.
		 */
		ManagedDatabaseSecurityAlertPolicies_CreateOrUpdate(resourceGroupName: string, managedInstanceName: string, databaseName: string, securityAlertPolicyName: ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName, subscriptionId: string, api_version: string, requestBody: ManagedDatabaseSecurityAlertPolicy): Observable<ManagedDatabaseSecurityAlertPolicy> {
			return this.http.put<ManagedDatabaseSecurityAlertPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/managedInstances/' + (managedInstanceName == null ? '' : encodeURIComponent(managedInstanceName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/securityAlertPolicies/' + securityAlertPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ManagedDatabaseSecurityAlertPolicies_GetSecurityAlertPolicyName { default = 'default' }

}

