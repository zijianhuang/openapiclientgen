import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A virtual network rule. */
	export interface VirtualNetworkRule {

		/** Properties of a virtual network rule. */
		properties?: VirtualNetworkRuleProperties;
	}

	/** A virtual network rule. */
	export interface VirtualNetworkRuleFormProperties {
	}
	export function CreateVirtualNetworkRuleFormGroup() {
		return new FormGroup<VirtualNetworkRuleFormProperties>({
		});

	}


	/** Properties of a virtual network rule. */
	export interface VirtualNetworkRuleProperties {

		/** Create firewall rule before the virtual network has vnet service endpoint enabled. */
		ignoreMissingVnetServiceEndpoint?: boolean | null;

		/** Virtual Network Rule State */
		state?: VirtualNetworkRulePropertiesState | null;

		/**
		 * The ARM resource id of the virtual network subnet.
		 * Required
		 */
		virtualNetworkSubnetId: string;
	}

	/** Properties of a virtual network rule. */
	export interface VirtualNetworkRulePropertiesFormProperties {

		/** Create firewall rule before the virtual network has vnet service endpoint enabled. */
		ignoreMissingVnetServiceEndpoint: FormControl<boolean | null | undefined>,

		/** Virtual Network Rule State */
		state: FormControl<VirtualNetworkRulePropertiesState | null | undefined>,

		/**
		 * The ARM resource id of the virtual network subnet.
		 * Required
		 */
		virtualNetworkSubnetId: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRulePropertiesFormGroup() {
		return new FormGroup<VirtualNetworkRulePropertiesFormProperties>({
			ignoreMissingVnetServiceEndpoint: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<VirtualNetworkRulePropertiesState | null | undefined>(undefined),
			virtualNetworkSubnetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VirtualNetworkRulePropertiesState { Initializing = 0, InProgress = 1, Ready = 2, Deleting = 3, Unknown = 4 }


	/** A list of virtual network rules. */
	export interface VirtualNetworkRuleListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<VirtualNetworkRule>;
	}

	/** A list of virtual network rules. */
	export interface VirtualNetworkRuleListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateVirtualNetworkRuleListResultFormGroup() {
		return new FormGroup<VirtualNetworkRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of virtual network rules in a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/virtualNetworkRules
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {VirtualNetworkRuleListResult} Successfully retrieved the list of virtual network rules.
		 */
		VirtualNetworkRules_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<VirtualNetworkRuleListResult> {
			return this.http.get<VirtualNetworkRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/virtualNetworkRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a virtual network rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {VirtualNetworkRule} Successfully retrieved a specified virtual network rule.
		 */
		VirtualNetworkRules_Get(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, subscriptionId: string, api_version: string): Observable<VirtualNetworkRule> {
			return this.http.get<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates an existing virtual network rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {VirtualNetworkRule} requestBody The requested virtual Network Rule Resource state.
		 * @return {VirtualNetworkRule} Successfully updated a virtual network rule.
		 */
		VirtualNetworkRules_CreateOrUpdate(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, subscriptionId: string, api_version: string, requestBody: VirtualNetworkRule): Observable<VirtualNetworkRule> {
			return this.http.put<VirtualNetworkRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the virtual network rule with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/virtualNetworkRules/{virtualNetworkRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} virtualNetworkRuleName The name of the virtual network rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the virtual network rule.
		 */
		VirtualNetworkRules_Delete(resourceGroupName: string, serverName: string, virtualNetworkRuleName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/virtualNetworkRules/' + (virtualNetworkRuleName == null ? '' : encodeURIComponent(virtualNetworkRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

