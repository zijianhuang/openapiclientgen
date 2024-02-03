import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A list of the server's security alert policies. */
	export interface LogicalServerSecurityAlertPolicyListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerSecurityAlertPolicy>;
	}

	/** A list of the server's security alert policies. */
	export interface LogicalServerSecurityAlertPolicyListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateLogicalServerSecurityAlertPolicyListResultFormGroup() {
		return new FormGroup<LogicalServerSecurityAlertPolicyListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A server security alert policy. */
	export interface ServerSecurityAlertPolicy {

		/** Properties of a security alert policy. */
		properties?: SecurityAlertPolicyProperties;
	}

	/** A server security alert policy. */
	export interface ServerSecurityAlertPolicyFormProperties {
	}
	export function CreateServerSecurityAlertPolicyFormGroup() {
		return new FormGroup<ServerSecurityAlertPolicyFormProperties>({
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

		/** Specifies the number of days to keep in the Threat Detection audit logs. */
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

		/** Specifies the number of days to keep in the Threat Detection audit logs. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the server's threat detection policies.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {LogicalServerSecurityAlertPolicyListResult} Successfully retrieved the server threat detection policies.
		 */
		ServerSecurityAlertPolicies_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<LogicalServerSecurityAlertPolicyListResult> {
			return this.http.get<LogicalServerSecurityAlertPolicyListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/securityAlertPolicies&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a server's security alert policy.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerSecurityAlertPolicies_GetSecurityAlertPolicyName} securityAlertPolicyName The name of the security alert policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerSecurityAlertPolicy} Successfully retrieved the server threat detection policy.
		 */
		ServerSecurityAlertPolicies_Get(resourceGroupName: string, serverName: string, securityAlertPolicyName: ServerSecurityAlertPolicies_GetSecurityAlertPolicyName, subscriptionId: string, api_version: string): Observable<ServerSecurityAlertPolicy> {
			return this.http.get<ServerSecurityAlertPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/securityAlertPolicies/' + securityAlertPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a threat detection policy.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/securityAlertPolicies/{securityAlertPolicyName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {ServerSecurityAlertPolicies_GetSecurityAlertPolicyName} securityAlertPolicyName The name of the threat detection policy.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {ServerSecurityAlertPolicy} requestBody The server security alert policy.
		 * @return {ServerSecurityAlertPolicy} Successfully updated the threat detection policy.
		 */
		ServerSecurityAlertPolicies_CreateOrUpdate(resourceGroupName: string, serverName: string, securityAlertPolicyName: ServerSecurityAlertPolicies_GetSecurityAlertPolicyName, subscriptionId: string, api_version: string, requestBody: ServerSecurityAlertPolicy): Observable<ServerSecurityAlertPolicy> {
			return this.http.put<ServerSecurityAlertPolicy>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/securityAlertPolicies/' + securityAlertPolicyName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ServerSecurityAlertPolicies_GetSecurityAlertPolicyName { Default = 'Default' }

}

