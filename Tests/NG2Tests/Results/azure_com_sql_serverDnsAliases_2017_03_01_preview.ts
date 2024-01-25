import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A server DNS alias. */
	export interface ServerDnsAlias {

		/** Properties of a server DNS alias. */
		properties?: ServerDnsAliasProperties;
	}

	/** A server DNS alias. */
	export interface ServerDnsAliasFormProperties {
	}
	export function CreateServerDnsAliasFormGroup() {
		return new FormGroup<ServerDnsAliasFormProperties>({
		});

	}


	/** Properties of a server DNS alias. */
	export interface ServerDnsAliasProperties {

		/** The fully qualified DNS record for alias */
		azureDnsRecord?: string | null;
	}

	/** Properties of a server DNS alias. */
	export interface ServerDnsAliasPropertiesFormProperties {

		/** The fully qualified DNS record for alias */
		azureDnsRecord: FormControl<string | null | undefined>,
	}
	export function CreateServerDnsAliasPropertiesFormGroup() {
		return new FormGroup<ServerDnsAliasPropertiesFormProperties>({
			azureDnsRecord: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A server DNS alias acquisition request. */
	export interface ServerDnsAliasAcquisition {

		/** The id of the server alias that will be acquired to point to this server instead. */
		oldServerDnsAliasId?: string | null;
	}

	/** A server DNS alias acquisition request. */
	export interface ServerDnsAliasAcquisitionFormProperties {

		/** The id of the server alias that will be acquired to point to this server instead. */
		oldServerDnsAliasId: FormControl<string | null | undefined>,
	}
	export function CreateServerDnsAliasAcquisitionFormGroup() {
		return new FormGroup<ServerDnsAliasAcquisitionFormProperties>({
			oldServerDnsAliasId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of server DNS aliases. */
	export interface ServerDnsAliasListResult {

		/** Link to retrieve next page of results. */
		nextLink?: string | null;

		/** Array of results. */
		value?: Array<ServerDnsAlias>;
	}

	/** A list of server DNS aliases. */
	export interface ServerDnsAliasListResultFormProperties {

		/** Link to retrieve next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServerDnsAliasListResultFormGroup() {
		return new FormGroup<ServerDnsAliasListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of server DNS aliases for a server.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server that the alias is pointing to.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerDnsAliasListResult} Successfully retrieved the list of server DNS aliases.
		 */
		ServerDnsAliases_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<ServerDnsAliasListResult> {
			return this.http.get<ServerDnsAliasListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dnsAliases&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server DNS alias.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server that the alias is pointing to.
		 * @param {string} dnsAliasName The name of the server DNS alias.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerDnsAlias} Successfully retrieved the specified server DNS alias.
		 */
		ServerDnsAliases_Get(resourceGroupName: string, serverName: string, dnsAliasName: string, subscriptionId: string, api_version: string): Observable<ServerDnsAlias> {
			return this.http.get<ServerDnsAlias>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dnsAliases/' + (dnsAliasName == null ? '' : encodeURIComponent(dnsAliasName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a server dns alias.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server that the alias is pointing to.
		 * @param {string} dnsAliasName The name of the server DNS alias.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {ServerDnsAlias} The server DNS alias already exists.
		 */
		ServerDnsAliases_CreateOrUpdate(resourceGroupName: string, serverName: string, dnsAliasName: string, subscriptionId: string, api_version: string): Observable<ServerDnsAlias> {
			return this.http.put<ServerDnsAlias>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dnsAliases/' + (dnsAliasName == null ? '' : encodeURIComponent(dnsAliasName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Deletes the server DNS alias with the given name.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server that the alias is pointing to.
		 * @param {string} dnsAliasName The name of the server DNS alias.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully deleted the server DNS alias.
		 */
		ServerDnsAliases_Delete(resourceGroupName: string, serverName: string, dnsAliasName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dnsAliases/' + (dnsAliasName == null ? '' : encodeURIComponent(dnsAliasName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Acquires server DNS alias from another server.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/dnsAliases/{dnsAliasName}/acquire
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server that the alias is pointing to.
		 * @param {string} dnsAliasName The name of the server dns alias.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {void} Successfully acquired server DNS alias.
		 */
		ServerDnsAliases_Acquire(resourceGroupName: string, serverName: string, dnsAliasName: string, subscriptionId: string, api_version: string, requestBody: ServerDnsAliasAcquisition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/dnsAliases/' + (dnsAliasName == null ? '' : encodeURIComponent(dnsAliasName)) + '/acquire&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

