import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A server firewall rule. */
	export interface FirewallRule {

		/** The properties of a server firewall rule. */
		properties?: ServerFirewallRuleProperties;
	}

	/** A server firewall rule. */
	export interface FirewallRuleFormProperties {
	}
	export function CreateFirewallRuleFormGroup() {
		return new FormGroup<FirewallRuleFormProperties>({
		});

	}


	/** The properties of a server firewall rule. */
	export interface ServerFirewallRuleProperties {

		/** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses. */
		endIpAddress?: string | null;

		/** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses. */
		startIpAddress?: string | null;
	}

	/** The properties of a server firewall rule. */
	export interface ServerFirewallRulePropertiesFormProperties {

		/** The end IP address of the firewall rule. Must be IPv4 format. Must be greater than or equal to startIpAddress. Use value '0.0.0.0' for all Azure-internal IP addresses. */
		endIpAddress: FormControl<string | null | undefined>,

		/** The start IP address of the firewall rule. Must be IPv4 format. Use value '0.0.0.0' for all Azure-internal IP addresses. */
		startIpAddress: FormControl<string | null | undefined>,
	}
	export function CreateServerFirewallRulePropertiesFormGroup() {
		return new FormGroup<ServerFirewallRulePropertiesFormProperties>({
			endIpAddress: new FormControl<string | null | undefined>(undefined),
			startIpAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of server firewall rules. */
	export interface FirewallRuleList {
		values?: Array<FirewallRule>;
	}

	/** A list of server firewall rules. */
	export interface FirewallRuleListFormProperties {
	}
	export function CreateFirewallRuleListFormGroup() {
		return new FormGroup<FirewallRuleListFormProperties>({
		});

	}


	/** The response to a list firewall rules request */
	export interface FirewallRuleListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<FirewallRule>;
	}

	/** The response to a list firewall rules request */
	export interface FirewallRuleListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateFirewallRuleListResultFormGroup() {
		return new FormGroup<FirewallRuleListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM proxy resource. */
	export interface ProxyResourceWithWritableName {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceWithWritableNameFormProperties {
	}
	export function CreateProxyResourceWithWritableNameFormGroup() {
		return new FormGroup<ProxyResourceWithWritableNameFormProperties>({
		});

	}


	/** ARM resource. */
	export interface ResourceWithWritableName {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceWithWritableNameFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceWithWritableNameFormGroup() {
		return new FormGroup<ResourceWithWritableNameFormProperties>({
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
		 * Gets a list of firewall rules.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FirewallRuleListResult} Successfully retrieved the list of firewall rules.
		 */
		FirewallRules_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<FirewallRuleListResult> {
			return this.http.get<FirewallRuleListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/firewallRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Replaces all firewall rules on the server.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FirewallRule} Successfully updated the firewall rules.
		 */
		FirewallRules_Replace(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string, requestBody: FirewallRuleList): Observable<FirewallRule> {
			return this.http.put<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/firewallRules&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a firewall rule.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} firewallRuleName The name of the firewall rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {FirewallRule} Successfully retrieved the specified firewall rule.
		 */
		FirewallRules_Get(resourceGroupName: string, serverName: string, firewallRuleName: string, subscriptionId: string, api_version: string): Observable<FirewallRule> {
			return this.http.get<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a firewall rule.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} firewallRuleName The name of the firewall rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {FirewallRule} requestBody The required parameters for creating or updating a firewall rule.
		 * @return {FirewallRule} Successfully updated the firewall rule.
		 */
		FirewallRules_CreateOrUpdate(resourceGroupName: string, serverName: string, firewallRuleName: string, subscriptionId: string, api_version: string, requestBody: FirewallRule): Observable<FirewallRule> {
			return this.http.put<FirewallRule>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a firewall rule.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/firewallRules/{firewallRuleName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} firewallRuleName The name of the firewall rule.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the firewall rule.
		 */
		FirewallRules_Delete(resourceGroupName: string, serverName: string, firewallRuleName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/firewallRules/' + (firewallRuleName == null ? '' : encodeURIComponent(firewallRuleName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

